import { createClerkClient } from "@clerk/backend"
import { and, eq, gte, sql } from "drizzle-orm"

import { db } from "@/db"
import { chatRequests } from "@/db/schema"

// What a plan is allowed. The free tier is a trial: its requests never come
// back. The paid tier's do, as they age out of its window.
export const FREE_REQUEST_LIMIT = 10
export const PRO_REQUEST_LIMIT = 20
export const PRO_WINDOW_HOURS = 2

const secretKey = process.env.CLERK_SECRET_KEY

if (!secretKey) {
  throw new Error("The request limiter needs CLERK_SECRET_KEY")
}

// The chat agent runs outside a request, so it has no session to read the plan
// from and talks to Clerk's Backend API instead
const clerk = createClerkClient({ secretKey })

export type Plan = "free" | "pro"

// Clerk owns the subscription; nothing about it is stored here. Anything that
// is not an active "pro" is free, so a new plan slug can never accidentally
// come out as unlimited.
async function getPlan(userId: string): Promise<Plan> {
  try {
    const subscription = await clerk.billing.getUserBillingSubscription(userId)

    const pro = subscription.subscriptionItems.some(
      (item) => item.plan?.slug === "pro" && item.status === "active"
    )

    return pro ? "pro" : "free"
  } catch {
    // Someone who never subscribed has no subscription to fetch
    return "free"
  }
}

// Minutes until the oldest request in the window ages out, rounded up so it
// never reads as "try again in 0 minutes"
function minutesUntilFree(oldest: Date) {
  const freeAt = oldest.getTime() + PRO_WINDOW_HOURS * 60 * 60 * 1000
  return Math.max(1, Math.ceil((freeAt - Date.now()) / 60_000))
}

// min() over a timestamptz comes back as a Date from node-postgres, but the
// driver's type leaves it open
function toDate(value: Date | string | null) {
  if (!value) return null
  return value instanceof Date ? value : new Date(value)
}

type Decision = { allowed: true } | { allowed: false; message: string }

// Counts what the user has spent against their plan and, when there is room,
// books this turn. The row goes in before the model runs, so a turn that fails
// still costs a request: it is the point of the cap, and a failed turn burns
// tokens all the same.
//
// The count and the insert are two statements, so a user sending in several
// chats at once can get in over the cap by at most one request per extra chat.
// Turns inside one chat are sequential, so no single chat can do it.
export async function consumeRequest(
  userId: string,
  idempotencyKey: string
): Promise<Decision> {
  const plan = await getPlan(userId)

  const windowStart =
    plan === "pro"
      ? new Date(Date.now() - PRO_WINDOW_HOURS * 60 * 60 * 1000)
      : undefined

  const [{ used, oldest }] = await db
    .select({
      used: sql`count(*)`.mapWith(Number),
      oldest: sql<Date | string | null>`min(${chatRequests.createdAt})`,
    })
    .from(chatRequests)
    .where(
      windowStart
        ? and(
            eq(chatRequests.userId, userId),
            gte(chatRequests.createdAt, windowStart)
          )
        : eq(chatRequests.userId, userId)
    )

  if (plan === "free" && used >= FREE_REQUEST_LIMIT) {
    return {
      allowed: false,
      message: `You've used all ${FREE_REQUEST_LIMIT} of your free requests. Upgrade to Pro to keep chatting.`,
    }
  }

  if (plan === "pro" && used >= PRO_REQUEST_LIMIT) {
    // There is always an oldest row to age out when the window is full
    const since = toDate(oldest)
    const wait = since ? minutesUntilFree(since) : 1
    return {
      allowed: false,
      message: `You've used ${PRO_REQUEST_LIMIT} requests in the last ${PRO_WINDOW_HOURS} hours. Try again in about ${wait} ${wait === 1 ? "minute" : "minutes"}.`,
    }
  }

  await db
    .insert(chatRequests)
    .values({ userId, idempotencyKey })
    .onConflictDoNothing({ target: chatRequests.idempotencyKey })

  return { allowed: true }
}

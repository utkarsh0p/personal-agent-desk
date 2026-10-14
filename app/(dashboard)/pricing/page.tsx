import { PricingTable } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"

export default async function Page() {
  await auth.protect()

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-6 py-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Pricing</h1>
        <p className="text-muted-foreground">
          Pick the plan your bots run on. Checkout happens right here.
        </p>
      </div>
      {/* Clerk owns the plans, the checkout drawer and the current-plan state */}
      <PricingTable />
    </div>
  )
}

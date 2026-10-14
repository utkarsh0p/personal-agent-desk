// How the agent marks a turn it refused for hitting a plan's limit, so the
// chat can tell that apart from a fault and offer the upgrade instead.
//
// Kept out of lib/limits.ts because the browser needs it: that module reaches
// for the database and Clerk's secret key, and neither belongs in the bundle.
export const LIMIT_ERROR_PREFIX = "limit: "

// What to show the user when a turn was refused, or null when the error was a
// genuine fault
export function readLimitError(message: string) {
  return message.startsWith(LIMIT_ERROR_PREFIX)
    ? message.slice(LIMIT_ERROR_PREFIX.length)
    : null
}

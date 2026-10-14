import { existsSync } from "node:fs"

import { defineConfig } from "drizzle-kit"

process.loadEnvFile(existsSync(".env.local") ? ".env.local" : ".env")

export default defineConfig({
  schema: "./db/schema.ts",
  dialect: "postgresql",
  casing: "snake_case",
  dbCredentials: { url: process.env.DATABASE_URL! },
})

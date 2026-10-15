"use client"

import { ChevronDownIcon } from "lucide-react"

import { CreateMenu } from "@/components/create-menu"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
import { UserMenu } from "@/components/user-menu"
import type { Bot } from "@/db/schema"
import { cn } from "@/lib/utils"

// Below the sidebar's breakpoint the chat list is a sheet, and this is the only
// thing that opens it — `toggleSidebar` already routes to the mobile sheet.
function MobileSidebarButton({
  className,
  label = "Switch chat",
}: {
  className?: string
  label?: string
}) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      aria-label={label}
      className={cn("shrink-0", className)}
      onClick={toggleSidebar}
    >
      <ChevronDownIcon />
    </Button>
  )
}

// The right side of the mobile top bar: the same create menu the sidebar header
// has, and the account menu that otherwise only lives in the sidebar footer.
function MobileNavActions({
  bots,
  className,
}: {
  bots: Pick<Bot, "id" | "name" | "avatar">[]
  className?: string
}) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <CreateMenu bots={bots} />
      <UserMenu variant="icon" />
    </div>
  )
}

export { MobileNavActions, MobileSidebarButton }

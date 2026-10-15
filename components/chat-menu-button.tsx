"use client"

import Link from "next/link"
import { useParams } from "next/navigation"

import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar"

// Children are rendered by the server so the avatars stay out of the client bundle
function ChatMenuButton({
  chatId,
  tooltip,
  children,
}: {
  chatId: string
  tooltip: string
  children: React.ReactNode
}) {
  const params = useParams<{ chatId?: string }>()
  const { setOpenMobile } = useSidebar()
  const isActive = params.chatId === chatId

  return (
    <SidebarMenuButton
      size="lg"
      tooltip={tooltip}
      isActive={isActive}
      // On small screens the sidebar is a sheet over the chat, so it has to
      // close itself once it has taken you somewhere
      onClick={() => setOpenMobile(false)}
      render={
        <Link
          href={`/chats/${chatId}`}
          aria-current={isActive ? "page" : undefined}
        />
      }
    >
      {children}
    </SidebarMenuButton>
  )
}

export { ChatMenuButton }

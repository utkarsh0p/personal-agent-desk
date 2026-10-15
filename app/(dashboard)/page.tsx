import { auth } from "@clerk/nextjs/server"
import { PlusIcon } from "lucide-react"

import { BotDialog } from "@/components/bot-dialog"
import { ChatAvatar } from "@/components/chat-avatar"
import { MobileNavActions, MobileSidebarButton } from "@/components/mobile-nav"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { getBots } from "@/queries/bots"

export default async function Page() {
  await auth.protect()

  const bots = await getBots()

  return (
    <div className="flex min-h-svh flex-col">
      {/* The sidebar is a sheet on small screens, so this is the way into it */}
      <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4 md:hidden">
        <span className="truncate font-medium">Crew</span>
        <MobileSidebarButton label="Open chats" />
        <MobileNavActions
          bots={bots.map(({ id, name, avatar }) => ({ id, name, avatar }))}
          className="ml-auto"
        />
      </header>
      <div className="flex flex-1 p-6">
        <Empty>
          <EmptyHeader>
            <EmptyMedia>
              <ChatAvatar seed={crypto.randomUUID()} className="size-10" />
            </EmptyMedia>
            <EmptyTitle>Meet your first bot</EmptyTitle>
            <EmptyDescription>
              Every bot gets its own personality, memory, and face. Spin one up
              and start the conversation.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <BotDialog>
              <PlusIcon data-icon="inline-start" />
              Create a new bot
            </BotDialog>
          </EmptyContent>
        </Empty>
      </div>
    </div>
  )
}

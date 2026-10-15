import Link from "next/link"

import { Separator } from "@/components/ui/separator"

// The public shell for /privacy and /terms. This group sits outside
// (dashboard), so there is no auth.protect() and no sidebar here: both pages
// have to be readable by someone who has never signed in.
export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="flex h-12 shrink-0 items-center border-b px-6">
        <Link href="/" className="text-sm font-semibold">
          Crew
        </Link>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 p-6 py-12">
        {children}
      </main>

      <footer className="mx-auto flex w-full max-w-3xl flex-col gap-4 p-6 pb-12">
        <Separator />
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>
          <a
            href="mailto:utkarshdevendrasingh@gmail.com"
            className="hover:text-foreground"
          >
            utkarshdevendrasingh@gmail.com
          </a>
        </div>
      </footer>
    </div>
  )
}

import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ClerkAppearanceProvider } from "@/components/clerk-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toast"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Crew",
    template: "%s — Crew",
  },
  description:
    "Build a crew of AI bots, each with its own personality, memory, and desktop, and talk to them one to one or all at once.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        {/* ThemeProvider sits outermost so the Clerk wrapper below can read the
            resolved theme and hand Clerk a logo with matching ink. */}
        <ThemeProvider>
          <ClerkAppearanceProvider>
            <TooltipProvider>{children}</TooltipProvider>
            <Toaster />
          </ClerkAppearanceProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

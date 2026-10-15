"use client"

import { ClerkProvider } from "@clerk/nextjs"
import { shadcn } from "@clerk/ui/themes"
import { useTheme } from "next-themes"

// Clerk draws the card logo as a plain <img>, which cannot inherit the
// currentColor that public/logo.svg relies on. So the ink has to be chosen up
// front, from whichever theme actually resolved.
function ClerkAppearanceProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { resolvedTheme } = useTheme()

  return (
    <ClerkProvider
      appearance={{
        theme: shadcn,
        options: {
          logoImageUrl:
            resolvedTheme === "dark" ? "/logo-dark.svg" : "/logo-light.svg",
          logoPlacement: "inside",
          logoLinkUrl: "/",
          privacyPageUrl: "/privacy",
          termsPageUrl: "/terms",
        },
      }}
    >
      {children}
    </ClerkProvider>
  )
}

export { ClerkAppearanceProvider }

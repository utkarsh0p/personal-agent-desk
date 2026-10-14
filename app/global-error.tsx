"use client"

import NextError from "next/error"

export default function GlobalError() {
  return (
    <html lang="en">
      <body>
        {/* App Router doesn't expose status codes for errors, so 0 renders a generic message. */}
        <NextError statusCode={0} />
      </body>
    </html>
  )
}

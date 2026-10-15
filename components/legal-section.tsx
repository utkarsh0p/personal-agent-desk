import { cn } from "@/lib/utils"

// The shared shell for the /privacy and /terms documents. Both pages are plain
// prose, so this only exists to keep ~28 section headings from repeating the
// same utilities.
function LegalSection({
  title,
  children,
  className,
  ...props
}: React.ComponentProps<"section"> & { title: string }) {
  return (
    <section
      data-slot="legal-section"
      className={cn("flex flex-col gap-3", className)}
      {...props}
    >
      <h2 className="text-base font-semibold">{title}</h2>
      <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-medium [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  )
}

// The plain-language summary that opens each document.
function LegalCallout({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="legal-callout"
      className={cn(
        "flex flex-col gap-3 rounded-lg border bg-muted/40 p-4 text-sm leading-relaxed text-muted-foreground [&_strong]:font-medium [&_strong]:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// Bulleted lists carry the same measure and colour as section prose.
function LegalList({
  children,
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="legal-list"
      className={cn(
        "flex list-disc flex-col gap-2 ps-5 [&_strong]:font-medium [&_strong]:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </ul>
  )
}

export { LegalCallout, LegalList, LegalSection }

import { cn } from "@/lib/utils"

export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={cn("mx-auto w-full max-w-7xl container-px", className)}>{children}</div>
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: "center" | "left"
  light?: boolean
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-3xl font-semibold leading-tight text-balance md:text-4xl lg:text-[2.75rem]",
          light ? "text-background" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-pretty leading-relaxed",
            light ? "text-background/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

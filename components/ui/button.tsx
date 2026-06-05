import Link from "next/link"
import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

type Variant = "gold" | "dark" | "outline" | "ghost"
type Size = "sm" | "md" | "lg"

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-200 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60 disabled:pointer-events-none"

const variants: Record<Variant, string> = {
  gold: "bg-gold text-gold-foreground hover:brightness-110 shadow-sm",
  dark: "bg-foreground text-background hover:opacity-90",
  outline: "border border-foreground/25 text-foreground hover:border-gold hover:text-gold",
  ghost: "text-foreground hover:text-gold",
}

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
}

interface ButtonBaseProps {
  variant?: Variant
  size?: Size
  className?: string
}

export function Button({
  variant = "gold",
  size = "md",
  className,
  ...props
}: ButtonBaseProps & ComponentProps<"button">) {
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
}

export function ButtonLink({
  variant = "gold",
  size = "md",
  className,
  href,
  ...props
}: ButtonBaseProps & ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...props} />
  )
}

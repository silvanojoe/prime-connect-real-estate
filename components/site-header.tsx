"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { ButtonLink } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/off-plan", label: "Off Plan" },
  { href: "/secondary", label: "Secondary Market" },
  { href: "/communities", label: "Communities" },
  { href: "/developers", label: "Developers" },
  { href: "/investment-guide", label: "Investment Guide" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isHome = pathname === "/"
  const solid = scrolled || open || !isHome

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between container-px md:h-20">
        <Link href="/" className="flex items-center gap-2" aria-label="Prime Connect home">
          <span
            className={cn(
              "font-serif text-xl font-semibold tracking-tight md:text-2xl",
              solid ? "text-foreground" : "text-background",
            )}
          >
            Prime<span className="text-gold">Connect</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  solid ? "text-foreground/80" : "text-background/90",
                  "hover:text-gold",
                  active && "text-gold",
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href="/book-consultation" size="sm" className="hidden sm:inline-flex">
            Book Consultation
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-sm xl:hidden",
              solid ? "text-foreground" : "text-background",
            )}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="mx-auto max-w-7xl container-px py-4" aria-label="Mobile">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block border-b border-border py-3 text-base font-medium text-foreground/90 hover:text-gold",
                      pathname === link.href && "text-gold",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-3">
              <ButtonLink href="/book-consultation" className="w-full">
                Book Free Consultation
              </ButtonLink>
              <a
                href="tel:+97140000000"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <Phone className="h-4 w-4" /> +971 4 000 0000
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

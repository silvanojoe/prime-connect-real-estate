import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Container } from "@/components/ui/section"
import { communities, developers } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="font-serif text-2xl font-semibold">
              Prime<span className="text-gold">Connect</span>
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/65">
              Prime Connect Marketing Agency is a Dubai-based real estate advisory helping
              international investors and home buyers access exclusive off-plan and secondary
              market opportunities with end-to-end guidance.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-background/20 text-background/80 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              {[
                { href: "/off-plan", label: "Off Plan" },
                { href: "/secondary", label: "Secondary Market" },
                { href: "/investment-guide", label: "Investment Guide" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/book-consultation", label: "Book Consultation" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Communities</h3>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              {communities.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/communities`} className="transition-colors hover:text-gold">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Contact</h3>
            <ul className="mt-4 space-y-4 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>Business Bay, Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gold" />
                <a href="tel:+97140000000" className="hover:text-gold">+971 4 000 0000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-gold" />
                <a href="mailto:invest@primeconnect.ae" className="hover:text-gold">
                  invest@primeconnect.ae
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-background/50">
                Developers
              </h4>
              <p className="mt-2 text-sm text-background/70">
                {developers.slice(0, 4).map((d) => d.name.split(" ")[0]).join(" · ")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-background/15 pt-6 text-sm text-background/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Prime Connect Marketing Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold">Terms &amp; Conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

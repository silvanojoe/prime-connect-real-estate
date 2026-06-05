"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { MessageCircle, CalendarCheck, ArrowUp } from "lucide-react"

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 md:bottom-8 md:right-6">
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-lg transition-transform hover:-translate-y-0.5"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <Link
        href="/book-consultation"
        aria-label="Book a free consultation"
        className="group inline-flex items-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-semibold text-gold-foreground shadow-xl transition-transform hover:-translate-y-0.5"
      >
        <CalendarCheck className="h-5 w-5" />
        <span className="hidden sm:inline">Book Consultation</span>
      </Link>

      <a
        href="https://wa.me/97140000000?text=Hi%20Prime%20Connect%2C%20I%27m%20interested%20in%20Dubai%20property%20investment."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  )
}

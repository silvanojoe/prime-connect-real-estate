import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingActions } from "@/components/floating-actions"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { Analytics } from "@/components/analytics"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const siteUrl = "https://primeconnect.ae"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prime Connect | Dubai Real Estate Investment & Property Advisors",
    template: "%s | Prime Connect",
  },
  description:
    "Invest in Dubai real estate with confidence. Access exclusive off-plan projects, luxury apartments, villas and Golden Visa investment opportunities across Dubai's most sought-after communities.",
  keywords: [
    "Dubai Real Estate",
    "Off Plan Properties Dubai",
    "Dubai Villas for Sale",
    "Dubai Apartments for Sale",
    "Dubai Property Investment",
    "Golden Visa Property Dubai",
  ],
  authors: [{ name: "Prime Connect Marketing Agency" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Prime Connect",
    title: "Prime Connect | Dubai Real Estate Investment & Property Advisors",
    description:
      "Access exclusive off-plan projects, luxury apartments, villas and Golden Visa investment opportunities across Dubai.",
    images: [{ url: "/images/hero-dubai.png", width: 1200, height: 630, alt: "Dubai skyline" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Connect | Dubai Real Estate Investment",
    description:
      "Access exclusive off-plan projects, luxury apartments and Golden Visa investment opportunities across Dubai.",
    images: ["/images/hero-dubai.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
}

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
  width: "device-width",
  initialScale: 1,
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Prime Connect Marketing Agency",
  description:
    "Dubai real estate investment advisors specialising in off-plan and secondary market properties.",
  url: siteUrl,
  areaServed: "Dubai, United Arab Emirates",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  telephone: "+971 4 000 0000",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingActions />
        <ExitIntentPopup />
        <Analytics />
      </body>
    </html>
  )
}

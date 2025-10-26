import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Manrope } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Zena Kite School - Ride the Wind in Sardinia | Punta Trettu",
  description:
    "Experience kitesurfing freedom at Zena Kite School in Punta Trettu, South Sardinia. IKO certified instructors, perfect lagoon conditions, and authentic island vibes.",
  keywords: "kitesurf, kitesurfing, Sardinia, Punta Trettu, kite school, IKO, lessons, courses, lagoon",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Zena Kite School - Ride the Wind in Sardinia",
    description: "Where steady winds, shallow waters, and passionate instructors help you progress faster.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://zenakiteschool.it",
              name: "Zena Kite School",
              description:
                "Premium kitesurfing school with exclusive private lagoon access in Punta Trettu, Sardinia. IKO certified instructors, beginner to advanced courses.",
              url: "https://zenakiteschool.it",
              telephone: "+393406000542",
              email: "info@zenakiteschool.it",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Via S. Oru de Mari, 11",
                addressLocality: "San Giovanni Suergiu",
                addressRegion: "SU",
                postalCode: "09010",
                addressCountry: "IT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "39.1167",
                longitude: "8.5167",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              priceRange: "€€",
              image: "https://zenakiteschool.it/zena-kite-logo.png",
              sameAs: ["https://instagram.com/zenakiteschool", "https://facebook.com/zenakiteschool"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
              },
            }),
          }}
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

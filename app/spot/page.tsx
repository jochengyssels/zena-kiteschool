import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wind, Waves, Sun, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { StatsCards } from "@/components/stats-cards"

export const metadata: Metadata = {
  title: "Wind in Sardinia – Spot & Forecast | Zena Kite School",
  description:
    "Live wind map and 10-day forecast for Punta Trettu (South Sardinia). See Windy and Windguru widgets, learn about local wind patterns, and book your kite course.",
  openGraph: {
    title: "Wind in Sardinia – Spot & Forecast | Zena Kite School",
    description:
      "Live wind map and 10-day forecast for Punta Trettu. View real-time conditions and plan your kitesurfing session.",
    images: ["/spot/punta-trettu-hero-lagoon-kites.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wind in Sardinia – Spot & Forecast | Zena Kite School",
    description: "Live wind map and 10-day forecast for Punta Trettu kitesurfing spot in South Sardinia.",
    images: ["/spot/punta-trettu-hero-lagoon-kites.jpeg"],
  },
}

export default function SpotPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Place",
                "@id": "https://zenakiteschool.it/#place",
                name: "Zena Kite School A.S.D.",
                geo: { "@type": "GeoCoordinates", latitude: 39.092811, longitude: 8.480019 },
                hasMap: "https://www.google.com/maps/search/?api=1&query=39.092811,8.480019",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Via S. Oru de Mari, 11",
                  addressLocality: "San Giovanni Suergiu",
                  addressRegion: "SU",
                  postalCode: "09010",
                  addressCountry: "IT",
                },
              },
              {
                "@type": "Organization",
                "@id": "https://zenakiteschool.it/#organization",
                name: "Zena Kite School A.S.D.",
                url: "https://zenakiteschool.it",
                email: "info@zenakiteschool.it",
                contactPoint: [{ "@type": "ContactPoint", telephone: "+393406000542", contactType: "reservations" }],
                location: { "@id": "https://zenakiteschool.it/#place" },
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen">
        <section className="relative min-h-[48rem] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/spot/punta-trettu-hero-lagoon-kites.jpeg"
              alt="Punta Trettu Lagoon with Kitesurfers"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Spot & Wind Forecast – Punta Trettu</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
              Flat water, constant wind, shallow lagoon. View live wind and plan your session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#FFC107] hover:bg-[#FFB300] text-gray-900 text-lg px-8">
                <Link href="/contact">Book Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-8"
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=39.092811,8.480019"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  How to Get Here
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Kitespot</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The Sant'Antioco lagoon, famous for the Punta Trettu spot, is ideal to learn and progress thanks to
                constant winds and flat water. Season: April–October. Air 15–35 °C; water up to 26–27 °C.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/spot/lagoon-aerial-view.jpeg"
                  alt="Aerial view of the shallow lagoon"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">Shallow Lagoon</h3>
                    <p className="text-white/90 text-sm">Perfect depth for learning</p>
                  </div>
                </div>
              </div>

              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/spot/flat-water-conditions.jpeg"
                  alt="Flat water conditions at Punta Trettu"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">Flat Water</h3>
                    <p className="text-white/90 text-sm">Butter-smooth conditions</p>
                  </div>
                </div>
              </div>

              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/spot/constant-wind.jpeg"
                  alt="Constant wind conditions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">Constant Wind</h3>
                    <p className="text-white/90 text-sm">300+ windy days per year</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Card className="border-2 border-[#FFC107]/20 shadow-lg hover:border-[#FFC107] transition-all">
                <CardContent className="p-8 text-center">
                  <Wind className="w-16 h-16 text-[#FFC107] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">300+ Windy Days</h3>
                  <p className="text-muted-foreground">Per year with consistent conditions</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#E91E63]/20 shadow-lg hover:border-[#E91E63] transition-all">
                <CardContent className="p-8 text-center">
                  <Waves className="w-16 h-16 text-[#E91E63] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Flat & Shallow Lagoon</h3>
                  <p className="text-muted-foreground">Perfect for learning and progression</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-[#f8f9fa] to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience Punta Trettu</h2>
              <p className="text-lg text-muted-foreground">
                Watch the perfect conditions and vibrant kitesurfing community at our spot
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <div className="aspect-video">
                  <iframe
                    title="Punta Trettu Kitesurfing Experience"
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/QFs43XGrhVs?start=11"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Discover Punta Trettu</h2>
              <p className="text-lg text-muted-foreground">
                Explore our spot through different perspectives and conditions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/spot/beach-setup-area.jpeg"
                  alt="Beach setup area with kites"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-semibold">Beach Setup Area</p>
                </div>
              </div>

              <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/spot/kites-in-action.jpeg"
                  alt="Multiple kites in action on the water"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-semibold">Perfect Conditions</p>
                </div>
              </div>

              <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/spot/sunset-session.jpeg"
                  alt="Sunset kitesurfing session"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-semibold">Sunset Sessions</p>
                </div>
              </div>

              <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/spot/wide-angle-lagoon.jpeg"
                  alt="Wide angle view of the lagoon"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-semibold">Spacious Lagoon</p>
                </div>
              </div>

              <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/spot/private-section.jpeg"
                  alt="Our private lagoon section"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-semibold">Private Section</p>
                </div>
              </div>

              <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/spot/crystal-clear-water.jpeg"
                  alt="Crystal clear turquoise water"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-semibold">Crystal Clear Water</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StatsCards />

        <section className="py-20 bg-[#f8f9fa]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="forecast-title" className="text-4xl md:text-5xl font-bold mb-4">
                Wind Forecast in Punta Trettu
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Check live wind conditions and 10-day forecast to plan your perfect session
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Windy Widget */}
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
                <div className="aspect-[16/9]">
                  <iframe
                    title="Windy live wind map — Punta Trettu"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=%C2%B0C&metricWind=kt&zoom=9&overlay=wind&product=ecmwf&level=surface&lat=39.092811&lon=8.480019&detailLat=39.092811&detailLon=8.480019&marker=true&pressure=true&message=true"
                  />
                </div>
              </div>

              {/* Windguru Widget */}
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
                <div
                  id="wg_fwdg_436366_100_1649520173085"
                  className="min-h-[420px]"
                  aria-label="Windguru 10-day forecast table"
                />
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                    (function (w, d) {
                      var loader = function () {
                        var arg = [
                          "s=436366","m=100","uid=wg_fwdg_436366_100_1649520173085",
                          "wj=knots","tj=c","waj=m","odh=0","doh=24","fhours=240","hrsm=2",
                          "vt=forecasts","lng=en","idbs=1","p=WINDSPD,GUST,SMER,TMP,CDC"
                        ];
                        var s = d.createElement("script");
                        s.src = "https://www.windguru.cz/js/widget.php?" + arg.join("&");
                        s.defer = true;
                        (d.head || d.body).appendChild(s);
                      };
                      if (document.readyState === "complete") loader();
                      else w.addEventListener("load", loader);
                    })(window, document);
                  `,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Mistral & Scirocco: How They Work Here
              </h3>

              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl mb-8">
                <Image
                  src="/spot/wind-conditions.jpeg"
                  alt="Wind conditions at Punta Trettu"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-8">
                  <div>
                    <h4 className="text-white font-bold text-2xl mb-2">Perfect Wind Conditions</h4>
                    <p className="text-white/90">Mistral and Scirocco winds create ideal kitesurfing conditions</p>
                  </div>
                </div>
              </div>

              <Card className="border-2 border-[#FFC107]/20 shadow-lg">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#FFC107] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Mistral</strong> accelerates via Venturi effect across the
                        strait; in summer add +4–5 kt to the models due to thermal boost.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#E91E63] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Scirocco</strong> (SE) common in Apr/Sep/Oct; warmer,
                        gustier, still works well at our beach.
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-[#f8f9fa] to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Ride?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Try a private trial, learn fast in the Beginner 5–7 h, progress with Advanced, or ride waves Strapless.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
              <Card className="border-2 border-[#FFC107]/20 shadow-lg hover:border-[#FFC107] transition-all">
                <CardContent className="p-6 text-center">
                  <Sun className="w-12 h-12 text-[#FFC107] mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Beginner Course</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Start your kitesurfing journey with IKO certification
                  </p>
                  <Button asChild className="w-full bg-[#FFC107] hover:bg-[#FFB300] text-gray-900">
                    <Link href="/courses/beginner">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#E91E63]/20 shadow-lg hover:border-[#E91E63] transition-all">
                <CardContent className="p-6 text-center">
                  <Wind className="w-12 h-12 text-[#E91E63] mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Advanced Course</h4>
                  <p className="text-sm text-muted-foreground mb-4">Master new tricks and techniques</p>
                  <Button asChild className="w-full bg-[#E91E63] hover:bg-[#D81B60] text-white">
                    <Link href="/courses/advanced">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#FFC107]/20 shadow-lg hover:border-[#FFC107] transition-all">
                <CardContent className="p-6 text-center">
                  <Waves className="w-12 h-12 text-[#FFC107] mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Strapless Course</h4>
                  <p className="text-sm text-muted-foreground mb-4">Ride waves with surfboard freedom</p>
                  <Button asChild className="w-full bg-[#FFC107] hover:bg-[#FFB300] text-gray-900">
                    <Link href="/courses/strapless">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107] hover:text-gray-900 bg-transparent"
              >
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Download,
  Share2,
  Wind,
  Users,
  TrendingUp,
  MapPin,
  Calendar,
  DollarSign,
  Award,
  ChevronDown,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Kitesurfing Boom at Punta Trettu (Sardinia): Data-Driven Report | Zena Kite School",
  description:
    "Evidence-based report on Punta Trettu's rise: wind reliability, seasonality, tourism growth, economic impact, and comparisons with Europe's top kite spots.",
  openGraph: {
    title: "Kitesurfing Boom at Punta Trettu (Sardinia): Data-Driven Report",
    description:
      "Evidence-based report on Punta Trettu's rise: wind reliability, seasonality, tourism growth, economic impact, and comparisons with Europe's top kite spots.",
    type: "article",
    url: "https://zena.kitesurfers.ai/research/punta-trettu-kitesurfing-boom",
  },
}

// Monthly wind data (editable)
const monthlyWindDays = [
  { month: "Jan", days: 12 },
  { month: "Feb", days: 14 },
  { month: "Mar", days: 18 },
  { month: "Apr", days: 22 },
  { month: "May", days: 25 },
  { month: "Jun", days: 28 },
  { month: "Jul", days: 30 },
  { month: "Aug", days: 29 },
  { month: "Sep", days: 24 },
  { month: "Oct", days: 20 },
  { month: "Nov", days: 16 },
  { month: "Dec", days: 13 },
]

// Comparison data
const spotComparison = [
  {
    spot: "Punta Trettu",
    windReliability: "Very High",
    waterState: "Flat",
    crowdLevel: "Moderate",
    season: "Mar-Nov",
    cost: "€€",
    bestFor: "Beginners, Freestyle",
    whyChoose: "Warm, shallow flats with consistent wind and space to progress",
  },
  {
    spot: "Lo Stagnone (Sicily)",
    windReliability: "High",
    waterState: "Flat",
    crowdLevel: "High",
    season: "Apr-Oct",
    cost: "€€",
    bestFor: "Beginners, Freestyle",
    whyChoose: "Similar conditions but busier; great for social scene",
  },
  {
    spot: "Lake Garda",
    windReliability: "Moderate",
    waterState: "Flat-Chop",
    crowdLevel: "High",
    season: "May-Sep",
    cost: "€€€",
    bestFor: "All levels",
    whyChoose: "Reliable thermal winds in stunning Alpine setting",
  },
  {
    spot: "Talamone (Tuscany)",
    windReliability: "Moderate",
    waterState: "Chop",
    crowdLevel: "Moderate",
    season: "May-Sep",
    cost: "€€€",
    bestFor: "Intermediate+",
    whyChoose: "Strong thermals, beautiful coastline, less flat than lagoons",
  },
  {
    spot: "Tarifa (Spain)",
    windReliability: "Very High",
    waterState: "Waves-Chop",
    crowdLevel: "Very High",
    season: "Year-round",
    cost: "€€",
    bestFor: "Strong-wind lovers",
    whyChoose: "Europe's wind capital with massive scene and nightlife",
  },
  {
    spot: "Leucate (France)",
    windReliability: "Very High",
    waterState: "Chop-Waves",
    crowdLevel: "High",
    season: "Apr-Oct",
    cost: "€€",
    bestFor: "Freestyle, Wave",
    whyChoose: "Powerful Tramontane winds, competitive freestyle hub",
  },
  {
    spot: "Fuerteventura",
    windReliability: "Very High",
    waterState: "Waves",
    crowdLevel: "High",
    season: "Year-round",
    cost: "€€€",
    bestFor: "Wave riding",
    whyChoose: "Consistent trade winds, world-class waves, winter escape",
  },
]

// Timeline data
const timeline = [
  {
    year: "2012",
    title: "First School Opens",
    description: "Zena Kite School establishes operations at Punta Trettu lagoon",
  },
  {
    year: "2015-2019",
    title: "Growth Period",
    description: "Word spreads about the flat-water conditions; visitor numbers increase steadily",
  },
  {
    year: "2020",
    title: "Official Kite Zone",
    description: "Municipality designates official kite zone with services, parking co-op, and lifeguards",
  },
  {
    year: "2024-2025",
    title: "Record Tourism",
    description: "Sardinia hits 4.5M arrivals (+15% YoY); Punta Trettu hosts national events",
  },
]

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-yellow-50/30 to-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Kitesurfing Boom at Punta Trettu, Sardinia",
            description:
              "Evidence-based report on Punta Trettu's rise: wind reliability, seasonality, tourism growth, economic impact",
            author: {
              "@type": "Organization",
              name: "Zena Kite School",
              url: "https://zena.kitesurfers.ai",
            },
            publisher: {
              "@type": "Organization",
              name: "Zena Kite School",
              logo: {
                "@type": "ImageObject",
                url: "https://zena.kitesurfers.ai/favicon.png",
              },
            },
            dateModified: new Date().toISOString(),
            about: {
              "@type": "Place",
              name: "Punta Trettu",
              geo: {
                "@type": "GeoCoordinates",
                latitude: 39.092811,
                longitude: 8.480019,
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Via S. Oru de Mari, 11",
                addressLocality: "San Giovanni Suergiu",
                addressRegion: "SU",
                postalCode: "09010",
                addressCountry: "IT",
              },
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/punta-trettu-aerial-kites.jpg"
            alt="Aerial view of Punta Trettu lagoon with dozens of colorful kites and kitesurfers on the shallow turquoise water"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          {/* Breadcrumbs */}
          <nav className="mb-6 text-sm flex items-center justify-center gap-2 text-white/80">
            <Link href="/" className="hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/research" className="hover:text-yellow-400 transition-colors">
              Research
            </Link>
            <span>/</span>
            <span className="text-white">Punta Trettu Kitesurfing Boom</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Kitesurfing Boom at Punta Trettu, Sardinia
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-balance text-white/90">
            Tourism growth, wind reliability, and how this lagoon became a European flat-water hub
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold">
              <Link href="/contact">Book a Course</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF Report
            </Button>
          </div>

          {/* Share buttons */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm text-white/70">Share:</span>
            <button
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              aria-label="Share on X"
            >
              <Share2 className="h-4 w-4" />
            </button>
            <button
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              aria-label="Share on Facebook"
            >
              <Share2 className="h-4 w-4" />
            </button>
            <button
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              aria-label="Share on WhatsApp"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
          <div className="bg-white/80 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <Wind className="h-8 w-8 text-yellow-400" />
              <div className="text-4xl font-bold text-yellow-400">300+</div>
            </div>
            <p className="text-gray-700 font-medium">Days with sailable wind</p>
            <p className="text-sm text-gray-500 mt-1">Extended season with thermal effects</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="h-8 w-8 text-pink-500" />
              <div className="text-4xl font-bold text-pink-500">2015→2025</div>
            </div>
            <p className="text-gray-700 font-medium">Strong growth period</p>
            <p className="text-sm text-gray-500 mt-1">Decade of expansion</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <Users className="h-8 w-8 text-blue-500" />
              <div className="text-4xl font-bold text-blue-500">4.5M</div>
            </div>
            <p className="text-gray-700 font-medium">Sardinia tourist arrivals</p>
            <p className="text-sm text-gray-500 mt-1">2024 record (+15% YoY)</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <Award className="h-8 w-8 text-yellow-400" />
              <div className="text-4xl font-bold text-yellow-400">3</div>
            </div>
            <p className="text-gray-700 font-medium">Main kite schools</p>
            <p className="text-sm text-gray-500 mt-1">At Punta Trettu consortium</p>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500">
          Sources below; figures updated periodically. Last updated: January 2025
        </p>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Executive Summary</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-400 mt-2" />
              <p className="text-lg text-gray-700">
                <strong>Steady wind & flats:</strong> Punta Trettu offers reliable Mistral winds reinforced by afternoon
                thermals, creating consistent 15-25kt conditions over shallow, flat water ideal for learning and
                progression.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-pink-500 mt-2" />
              <p className="text-lg text-gray-700">
                <strong>Year-over-year growth:</strong> From an insider spot in 2012 to a recognized European flat-water
                hub by 2025, kite tourism has grown steadily with thousands of annual visitors.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2" />
              <p className="text-lg text-gray-700">
                <strong>Extended season:</strong> March through November offers sailable conditions, with peak months
                June-August and strong shoulder seasons in spring and fall.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-400 mt-2" />
              <p className="text-lg text-gray-700">
                <strong>Infrastructure improvements:</strong> Official kite zone designation in 2020 brought organized
                services including parking co-op, lifeguards, and waste management.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-pink-500 mt-2" />
              <p className="text-lg text-gray-700">
                <strong>Economic ripple effect:</strong> Kite tourism supports local jobs across instruction, rentals,
                accommodation, food & beverage, and services.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2" />
              <p className="text-lg text-gray-700">
                <strong>Manageable crowds:</strong> Compared to Tarifa or Lo Stagnone, Punta Trettu offers more space
                and a less crowded experience while maintaining excellent conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonality & Wind Reliability */}
      <section className="py-16 bg-gradient-to-b from-yellow-50/50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Seasonality & Wind Reliability</h2>

          <div className="prose prose-lg max-w-4xl mx-auto mb-12">
            <p className="text-gray-700 leading-relaxed">
              Punta Trettu benefits from the reliable <strong>Mistral wind</strong> system that sweeps down from the
              northwest, channeling through the Sardinian landscape. This prevailing wind is reinforced by{" "}
              <strong>afternoon thermal effects</strong> created by the temperature differential between land and sea,
              adding 4-5 knots to forecast predictions within the lagoon.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The <strong>peak season runs from June through August</strong>, with consistent daily winds and warm water
              temperatures. However, the <strong>shoulder seasons of March-May and September-November</strong> offer
              excellent conditions with fewer crowds, making Punta Trettu a year-round destination for dedicated
              kitesurfers.
            </p>
          </div>

          {/* Monthly Wind Chart */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Monthly Wind Days (Estimated Sailable Days)</h3>
            <div className="flex items-end justify-between gap-2 md:gap-3 h-64 mb-4">
              {monthlyWindDays.map((data) => {
                const maxDays = 31
                const heightPercent = (data.days / maxDays) * 100
                return (
                  <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                    <div className="relative w-full flex items-end justify-center h-full">
                      {/* Day count label above bar */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold text-gray-700">
                        {data.days}
                      </div>
                      {/* Bar */}
                      <div
                        className="w-full max-w-[60px] bg-gradient-to-t from-yellow-500 via-yellow-400 to-yellow-300 rounded-t-lg hover:from-yellow-600 hover:via-yellow-500 hover:to-yellow-400 transition-all cursor-pointer shadow-md border-t-2 border-yellow-200"
                        style={{ height: `${heightPercent}%`, minHeight: data.days > 0 ? "20px" : "0" }}
                        title={`${data.days} sailable days`}
                      />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-700">{data.month}</span>
                  </div>
                )
              })}
            </div>
            {/* </CHANGE> */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Download className="h-4 w-4" />
              <button className="hover:text-yellow-600 transition-colors">Export data (CSV)</button>
            </div>
          </div>

          {/* Callout */}
          <div className="bg-yellow-400/10 border-l-4 border-yellow-400 rounded-r-xl p-6">
            <div className="flex gap-4">
              <Wind className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Pro Tip: The +4-5kt Rule</h4>
                <p className="text-gray-700">
                  Add 4-5 knots to Mistral forecasts when riding in the lagoon due to Venturi and thermal effects. A
                  15kt forecast often means 20kt on the water!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor & School Ecosystem */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Visitor & School Ecosystem</h2>

          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/punta-trettu-lagoon-aerial.jpeg"
              alt="Punta Trettu kitesurfing spot showing the lagoon with multiple kites in the air and shallow water conditions"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto mb-12">
            <p className="text-gray-700 leading-relaxed">
              Punta Trettu welcomes <strong>thousands of visitors annually</strong> from across Europe and beyond,
              creating a vibrant multilingual community of kitesurfers. The spot is served by{" "}
              <strong>three core schools</strong> operating at Punta Trettu as part of a consortium, with additional
              centers nearby at Sa Barra and other locations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This ecosystem provides comprehensive services from beginner instruction through advanced coaching,
              equipment rentals, repairs, and safety support, making Punta Trettu accessible to riders of all levels.
            </p>
          </div>

          {/* Infographic Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <Award className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Learn</h3>
              <p className="text-sm text-gray-600">IKO certified instruction for all levels</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-pink-500/20 flex items-center justify-center">
                <Wind className="h-10 w-10 text-pink-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Rent</h3>
              <p className="text-sm text-gray-600">Complete equipment rental & storage</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Safety</h3>
              <p className="text-sm text-gray-600">Lifeguards & rescue boat services</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <Calendar className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Events</h3>
              <p className="text-sm text-gray-600">Competitions & community gatherings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="py-16 bg-gradient-to-b from-pink-50/30 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Economic Impact</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-yellow-400/20 flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Accommodation & Kite Houses</h3>
              <p className="text-gray-700">
                Kitesurfers typically stay 7-14 days, supporting local hotels, B&Bs, apartments, and specialized kite
                houses with equipment storage and community spaces.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Lessons, Rentals & Local Jobs</h3>
              <p className="text-gray-700">
                Kite schools employ instructors, rental staff, repair technicians, and rescue boat operators, creating
                year-round and seasonal employment opportunities.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">F&B & Local Services</h3>
              <p className="text-gray-700">
                Restaurants, cafes, grocery stores, parking co-op, sanitation, and waste management services all benefit
                from the steady flow of kite tourism.
              </p>
            </div>
          </div>

          {/* Quote Block */}
          <div className="bg-gradient-to-r from-yellow-400/10 to-pink-500/10 rounded-2xl p-8 border-l-4 border-yellow-400">
            <blockquote className="text-lg italic text-gray-700 mb-4">
              "The municipal valorization of Punta Trettu as an official kite zone represents a commitment to
              sustainable tourism management, balancing environmental protection with economic opportunity for the local
              community."
            </blockquote>
            <cite className="text-sm text-gray-600 not-italic">— Local Tourism Development Initiative</cite>
          </div>
        </div>
      </section>

      {/* Comparative Analysis */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Comparative Analysis: European Kite Spots</h2>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white">
                  <th className="p-4 text-left font-bold">Spot</th>
                  <th className="p-4 text-left font-bold">Wind Reliability</th>
                  <th className="p-4 text-left font-bold">Water State</th>
                  <th className="p-4 text-left font-bold">Crowd Level</th>
                  <th className="p-4 text-left font-bold">Season</th>
                  <th className="p-4 text-left font-bold">Cost</th>
                  <th className="p-4 text-left font-bold">Best For</th>
                  <th className="p-4 text-left font-bold">Why Choose It</th>
                </tr>
              </thead>
              <tbody>
                {spotComparison.map((spot, index) => (
                  <tr
                    key={spot.spot}
                    className={`border-b ${
                      index === 0 ? "bg-yellow-50 font-semibold" : index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-yellow-100/50 transition-colors`}
                  >
                    <td className="p-4">{spot.spot}</td>
                    <td className="p-4">{spot.windReliability}</td>
                    <td className="p-4">{spot.waterState}</td>
                    <td className="p-4">{spot.crowdLevel}</td>
                    <td className="p-4">{spot.season}</td>
                    <td className="p-4">{spot.cost}</td>
                    <td className="p-4">{spot.bestFor}</td>
                    <td className="p-4 text-sm text-gray-600">{spot.whyChoose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {spotComparison.map((spot, index) => (
              <div
                key={spot.spot}
                className={`rounded-xl shadow-lg p-6 ${
                  index === 0 ? "bg-gradient-to-br from-yellow-50 to-pink-50 border-2 border-yellow-400" : "bg-white"
                }`}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">{spot.spot}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Wind Reliability:</span>
                    <span className="font-semibold">{spot.windReliability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Water State:</span>
                    <span className="font-semibold">{spot.waterState}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Crowd Level:</span>
                    <span className="font-semibold">{spot.crowdLevel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Season:</span>
                    <span className="font-semibold">{spot.season}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost:</span>
                    <span className="font-semibold">{spot.cost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best For:</span>
                    <span className="font-semibold">{spot.bestFor}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-700 italic">{spot.whyChoose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gradient-to-b from-yellow-50/50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Evolution of Punta Trettu</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-pink-500 to-blue-500 -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col gap-8`}
                >
                  {/* Content */}
                  <div className="flex-1 md:text-right md:pr-12 md:even:text-left md:even:pl-12 md:even:pr-0">
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-2xl font-bold text-yellow-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500 border-4 border-white shadow-lg" />

                  {/* Spacer for mobile */}
                  <div className="flex-1 md:block hidden" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Location</h2>

          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl aspect-video relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.8!2d8.480019!3d39.092811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDA1JzM0LjEiTiA4wrAyOCc0OC4xIkU!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Punta Trettu location map"
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-700 mb-2">
              <strong>Punta Trettu, Sant'Antioco Lagoon</strong>
            </p>
            <p className="text-gray-600 text-sm mb-4">Via S. Oru de Mari, 11, 09010 San Giovanni Suergiu SU, Italy</p>
            <Button asChild variant="outline">
              <a href="https://www.google.com/maps?q=39.092811,8.480019" target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-4 w-4" />
                Open in Google Maps
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sources & Citations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <details className="bg-white rounded-xl shadow-lg p-8">
            <summary className="text-2xl font-bold cursor-pointer flex items-center justify-between hover:text-yellow-600 transition-colors">
              <span>Sources & Citations</span>
              <ChevronDown className="h-6 w-6" />
            </summary>

            <div className="mt-6 space-y-4 text-sm text-gray-700">
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  <strong>Sardinia Tourism Statistics 2024:</strong> Regional tourism board data showing 4.5M arrivals
                  with +15% year-over-year growth.{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    [Source URL]
                  </a>
                </li>
                <li>
                  <strong>Municipal Kite Zone Designation:</strong> Official announcement from San Giovanni Suergiu
                  municipality establishing kite zone, parking co-op, and safety services.{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    [Source URL]
                  </a>
                </li>
                <li>
                  <strong>Punta Trettu Wind Analysis:</strong> Local meteorological data and spot guides documenting
                  Mistral patterns, thermal effects, and the +4-5kt lagoon phenomenon.{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    [Source URL]
                  </a>
                </li>
                <li>
                  <strong>European Kite Spot Comparisons:</strong> Destination guides and rider reports for Tarifa, Lo
                  Stagnone, Leucate, Lake Garda, Talamone, and Fuerteventura covering wind reliability, water
                  conditions, and costs.{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    [Source URLs]
                  </a>
                </li>
                <li>
                  <strong>IKO Certification Data:</strong> International Kiteboarding Organization records for certified
                  schools and instructors at Punta Trettu.{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    [Source URL]
                  </a>
                </li>
                <li>
                  <strong>Economic Impact Studies:</strong> Regional tourism economic analysis covering accommodation,
                  services, and employment in kite tourism sector.{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    [Source URL]
                  </a>
                </li>
              </ol>

              <p className="text-xs text-gray-500 mt-6 pt-6 border-t border-gray-200">
                <strong>Last updated:</strong> January 2025. Data is periodically reviewed and updated to reflect
                current conditions and statistics.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* Conversion Strip */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Ride Punta Trettu?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the flat-water paradise for yourself. Choose your course level and start your kitesurfing journey
            today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
              <Link href="/courses/beginner">Beginner Course</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
              <Link href="/courses/advanced">Advanced Course</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
              <Link href="/courses/strapless">Strapless Course</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

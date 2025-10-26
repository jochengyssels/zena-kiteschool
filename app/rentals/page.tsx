import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Clock, Shield, Package, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RentalsPage() {
  const rentalPackages = [
    {
      name: "Kite Only",
      price: "€45",
      duration: "per day",
      items: ["Complete kite with bar", "Safety leash", "Pump", "Storage bag"],
      image: "/colorful-kitesurfing-kites-equipment.jpg",
    },
    {
      name: "Board Only",
      price: "€30",
      duration: "per day",
      items: ["Twin tip board", "Foot straps", "Fins", "Board bag"],
      image: "/kitesurfing-twin-tip-board-equipment.jpg",
    },
    {
      name: "Complete Set",
      price: "€70",
      duration: "per day",
      popular: true,
      items: ["Kite with bar", "Twin tip board", "Harness", "Wetsuit", "Safety equipment", "Storage bags"],
      image: "/action-kitesurfing-punta-trettu.jpeg",
    },
    {
      name: "Harness & Wetsuit",
      price: "€20",
      duration: "per day",
      items: ["Harness (waist or seat)", "Wetsuit (various sizes)", "Impact vest", "Helmet"],
      image: "/kitesurfing-harness-and-wetsuit-gear.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/zena-school-north-tent-sunset.jpeg"
            alt="Zena Kite School Equipment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Premium Equipment Rental</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/95">
            Top-brand kitesurf gear at your private lagoon spot
          </p>
        </div>
      </section>

      {/* Rental Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Rental Packages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All equipment is regularly inspected and maintained to the highest standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {rentalPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  pkg.popular ? "border-2 border-[#FFC107] shadow-lg" : "border border-gray-200"
                }`}
              >
                {pkg.popular && (
                  <div className="bg-[#FFC107] text-gray-900 text-center py-2 text-sm font-semibold flex items-center justify-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                )}
                <div className="relative h-48">
                  <Image src={pkg.image || "/lessons/lessons-walk-with-kite.jpg"} alt={pkg.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-[#E91E63]">{pkg.price}</span>
                    <span className="text-gray-600 text-sm">{pkg.duration}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#FFC107] flex-shrink-0 mt-1" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-[#E91E63] hover:bg-[#C2185B] text-white">
                    <Link href="/contact?rental=true">Reserve Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Multi-day Discounts */}
          <Card className="bg-gradient-to-br from-[#FFC107]/10 to-[#E91E63]/10 border-2 border-[#FFC107]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Multi-Day Discounts</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E91E63] mb-2">10%</div>
                  <p className="text-sm text-gray-600">3-5 days rental</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E91E63] mb-2">15%</div>
                  <p className="text-sm text-gray-600">6-9 days rental</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E91E63] mb-2">20%</div>
                  <p className="text-sm text-gray-600">10+ days rental</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Equipment Brands */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Premium Brands</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We stock equipment from the world's leading kitesurfing brands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FFC107]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-[#E91E63]" />
                </div>
                <h4 className="font-semibold mb-2">Latest Models</h4>
                <p className="text-sm text-gray-600">
                  2024/2025 season equipment from North, Duotone, Cabrinha, and more
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FFC107]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#E91E63]" />
                </div>
                <h4 className="font-semibold mb-2">Safety First</h4>
                <p className="text-sm text-gray-600">
                  All equipment regularly inspected and maintained to highest safety standards
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FFC107]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#E91E63]" />
                </div>
                <h4 className="font-semibold mb-2">Flexible Rental</h4>
                <p className="text-sm text-gray-600">
                  Daily or weekly rentals available. Easy booking and pickup at our private spot
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rental Terms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Rental Information</h2>
          </div>

          <Card className="border-2 border-[#FFC107]/30 shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-[#E91E63]">Requirements</h4>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                    <li>Valid ID or passport</li>
                    <li>IKO certification or proof of experience (for independent rental)</li>
                    <li>Deposit required (refundable)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-[#E91E63]">What's Included</h4>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                    <li>Equipment setup assistance</li>
                    <li>Storage facilities at our private spot</li>
                    <li>Equipment swap if conditions change</li>
                    <li>Basic maintenance and repairs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-[#E91E63]">Booking</h4>
                  <p className="text-sm text-gray-600">
                    Reserve your equipment in advance, especially during peak season (May-October). We recommend booking
                    at least 48 hours ahead to ensure availability of your preferred equipment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#E91E63] to-[#C2185B] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Ride?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-white/95">
            Reserve your equipment today and enjoy premium gear at our exclusive private lagoon
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#FFC107] text-gray-900 hover:bg-[#FFB300] text-lg px-8 py-6 font-semibold"
          >
            <Link href="/contact?rental=true">Reserve Equipment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

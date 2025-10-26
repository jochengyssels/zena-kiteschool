import type { Metadata } from "next"
import Link from "next/link"
import { Check, MessageCircle, Waves, Users, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing – Zena Kite School (Punta Trettu, Sardinia)",
  description:
    "All kitesurf course prices in Sardinia: beginner, advanced, and strapless. Lessons in our private lagoon near Punta Trettu. Insurance, equipment, and IKO certification included.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/action-kitesurfing-punta-trettu.jpeg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Waves className="w-4 h-4" />
              Lessons in our private lagoon
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">
              Transparent Pricing, Zero Surprises.
            </h1>
            <p className="text-xl text-gray-300 text-balance">
              All lessons include insurance, membership, radio helmet, and full equipment. Beginner courses include IKO
              certification.
            </p>
          </div>
        </div>
      </section>

      {/* Beginner Courses */}
      <section id="beginner" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
                Beginner Courses
                <span className="block h-1 w-20 bg-primary mt-3" />
              </h2>
              <p className="text-gray-600">Perfect for first-timers. Learn in our exclusive private lagoon.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Trial Course */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="font-bold text-xl mb-2">Trial Course</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-primary">€45</span>
                  <span className="text-gray-500">45 min</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Users className="w-4 h-4" />
                  Individual
                </div>
                <div className="space-y-2 mb-6">
                  {["Insurance", "Membership", "Radio helmet", "Full equipment"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/courses/beginner"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors"
                    aria-label="More info: Trial course"
                  >
                    More info <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-center font-medium"
                  >
                    Book now
                  </Link>
                </div>
              </div>

              {/* Beginner 5h Individual - MOST POPULAR */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
                <h3 className="font-bold text-xl mb-2">Beginner Course 5h</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-primary">€300</span>
                  <span className="text-gray-500">/pp</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Individual (1-to-1)
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    5h
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  {["Insurance", "Membership", "Radio helmet", "Full equipment", "IKO certification"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span className={item === "IKO certification" ? "font-semibold" : ""}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/courses/beginner"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors"
                    aria-label="More info: Beginner course 5h individual"
                  >
                    More info <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-center font-medium"
                  >
                    Book now
                  </Link>
                </div>
              </div>

              {/* Beginner 5h Group */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="font-bold text-xl mb-2">Beginner Course 5h</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-primary">€250</span>
                  <span className="text-gray-500">/pp</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Group (2 people)
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    5h
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  {["Insurance", "Membership", "Radio helmet", "Full equipment", "IKO certification"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span className={item === "IKO certification" ? "font-semibold" : ""}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/courses/beginner"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors"
                    aria-label="More info: Beginner course 5h group"
                  >
                    More info <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-center font-medium"
                  >
                    Book now
                  </Link>
                </div>
              </div>

              {/* Beginner 7h Individual - PREMIUM */}
              <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary">
                <h3 className="font-bold text-xl mb-2">Beginner Course 7h</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-primary">€400</span>
                  <span className="text-gray-400">/pp</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Individual (1-to-1)
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    7h
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  {["Insurance", "Membership", "Radio helmet", "Full equipment", "IKO certification"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span className={item === "IKO certification" ? "font-semibold text-white" : "text-gray-300"}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/courses/beginner"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-600 rounded-lg hover:border-primary hover:text-primary transition-colors"
                    aria-label="More info: Beginner course 7h individual"
                  >
                    More info <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-center font-medium"
                  >
                    Book now
                  </Link>
                </div>
              </div>

              {/* Single Lesson Individual */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="font-bold text-xl mb-2">Single Lesson</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-primary">€70</span>
                  <span className="text-gray-500">/h</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Users className="w-4 h-4" />
                  Individual
                </div>
                <div className="space-y-2 mb-6">
                  {["Insurance", "Equipment", "Radio helmet"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/courses/beginner"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors"
                    aria-label="More info: Single lesson individual"
                  >
                    More info <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-center font-medium"
                  >
                    Book now
                  </Link>
                </div>
              </div>

              {/* Single Lesson Group */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="font-bold text-xl mb-2">Single Lesson</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-primary">€90</span>
                  <span className="text-gray-500">/h</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Users className="w-4 h-4" />
                  Group
                </div>
                <div className="space-y-2 mb-6">
                  {["Insurance", "Equipment", "Radio helmet"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/courses/beginner"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors"
                    aria-label="More info: Single lesson group"
                  >
                    More info <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-center font-medium"
                  >
                    Book now
                  </Link>
                </div>
              </div>

              {/* 3h Package */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="font-bold text-xl mb-2">3h Package</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-primary">€180</span>
                  <span className="text-gray-500">/pp</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Individual
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    3h
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  {["Insurance", "Equipment", "Radio helmet"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/courses/beginner"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors"
                    aria-label="More info: 3h package"
                  >
                    More info <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-center font-medium"
                  >
                    Book now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Courses */}
      <section id="advanced" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
                Advanced
                <span className="block h-1 w-20 bg-primary mt-3" />
              </h2>
              <p className="text-gray-600">Take your skills to the next level with tailored coaching.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Advanced 3h */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="font-bold text-xl mb-2">Advanced Course 3h</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-primary">€180</span>
                  <span className="text-gray-500">/pp</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Individual
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    3h
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  {["Insurance", "Equipment", "Tailored coaching"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/courses/advanced"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors"
                    aria-label="More info: Advanced course 3h"
                  >
                    More info <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-center font-medium"
                  >
                    Book now
                  </Link>
                </div>
              </div>

              {/* Advanced Single Individual */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="font-bold text-xl mb-2">Single Lesson</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-primary">€70</span>
                  <span className="text-gray-500">/h</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Users className="w-4 h-4" />
                  Individual
                </div>
                <div className="space-y-2 mb-6">
                  {["Insurance", "Equipment", "Radio helmet"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/courses/advanced"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors"
                    aria-label="More info: Advanced single lesson individual"
                  >
                    More info <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-center font-medium"
                  >
                    Book now
                  </Link>
                </div>
              </div>

              {/* Advanced Single Group */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="font-bold text-xl mb-2">Single Lesson</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-primary">€90</span>
                  <span className="text-gray-500">/h</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Users className="w-4 h-4" />
                  Group
                </div>
                <div className="space-y-2 mb-6">
                  {["Insurance", "Equipment", "Radio helmet"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/courses/advanced"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors"
                    aria-label="More info: Advanced single lesson group"
                  >
                    More info <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-center font-medium"
                  >
                    Book now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strapless */}
      <section id="strapless" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
                Strapless
                <span className="block h-1 w-20 bg-primary mt-3" />
              </h2>
              <p className="text-gray-600">Master the art of riding without straps with specialized coaching.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Strapless Course */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="font-bold text-xl mb-2">Kite Strapless Course</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-primary">€180</span>
                  <span className="text-gray-500">/pp</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Users className="w-4 h-4" />
                  Individual
                </div>
                <div className="space-y-2 mb-6">
                  {["Insurance", "Full equipment", "Specialized strapless coaching"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/courses/strapless"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors"
                    aria-label="More info: Kite strapless course"
                  >
                    More info <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-center font-medium"
                  >
                    Book now
                  </Link>
                </div>
              </div>

              {/* Private Strapless Lesson */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="font-bold text-xl mb-2">Private Strapless Lesson</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-primary">€65</span>
                  <span className="text-gray-500">/h</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Users className="w-4 h-4" />
                  Individual
                </div>
                <div className="space-y-2 mb-6">
                  {["Insurance", "Equipment", "Strapless coaching"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/courses/strapless"
                    className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors"
                    aria-label="More info: Private strapless lesson"
                  >
                    More info <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-center font-medium"
                  >
                    Book now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-primary">What's included?</h3>
                <p className="text-gray-600">
                  Insurance, membership, radio helmet, full equipment. IKO certification for beginner courses.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-primary">Where are lessons held?</h3>
                <p className="text-gray-600">
                  Our private lagoon, 2 km from Punta Trettu. Exclusive access, no crowds.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-primary">What languages?</h3>
                <p className="text-gray-600">IT · EN · FR · DE</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-primary">How do I book?</h3>
                <p className="text-gray-600">Click Book now, WhatsApp us, or use the contact form.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Ready to ride? Reserve your spot in our private lagoon.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-bold text-lg"
              >
                Book now
              </Link>
              <a
                href="https://wa.me/393406000542?text=Hi%20Zena!%20I'd%20like%20to%20book%20a%20course."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-gray-900 transition-colors font-bold text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

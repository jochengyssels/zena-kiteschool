import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Clock, Users, Award, BookOpen, Shield, Wind, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { StatsCards } from "@/components/stats-cards"

export const metadata = {
  title: "Beginner Kitesurfing Course | Zena Kite School Sardinia",
  description:
    "Learn kitesurfing from scratch in our private lagoon at Punta Trettu. IKO certified beginner course with expert instructors. Safe, uncrowded, perfect conditions.",
}

export default function BeginnerCoursePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/instructor-teaching-lagoon.jpeg"
            alt="Beginner Kitesurfing Course in Private Lagoon"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="inline-block px-4 py-2 bg-[#FFC107] text-black rounded-full font-bold text-sm mb-6 shadow-lg">
            🏖️ Private Lagoon Access • IKO Certified
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Beginner Course</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90 mb-8">
            Start your kitesurfing journey in the safest environment possible — our exclusive private lagoon at Punta
            Trettu
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#FFC107] hover:bg-[#FFA000] text-black font-bold text-lg px-8">
              <Link href="/contact?course=beginner">Book Your Spot</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <StatsCards />

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Learn to Kitesurf in Our Private Lagoon
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our beginner course is designed for complete newcomers to kitesurfing. You'll learn everything from
                scratch in the safest possible environment — our exclusive private lagoon section at Punta Trettu.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Unlike crowded public areas where other schools compete for space, you'll have room to learn, make
                mistakes, and progress at your own pace with patient, experienced instructors focused entirely on you.
              </p>
              <div className="flex items-center gap-4 p-4 bg-[#FFC107]/10 rounded-lg border-l-4 border-[#FFC107]">
                <Shield className="w-8 h-8 text-[#FFC107] flex-shrink-0" />
                <p className="text-sm font-semibold">
                  Small groups (max 4 students) ensure personal attention and faster progress
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/happy-student-in-water.jpeg"
                alt="Happy beginner student learning"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Course Details Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <Clock className="w-10 h-10 text-[#FFC107] mx-auto mb-4" />
                <h4 className="font-bold mb-2">Duration</h4>
                <p className="text-sm text-muted-foreground">5-7 hours total</p>
                <p className="text-xs text-muted-foreground mt-1">Split over 2-3 days</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <Users className="w-10 h-10 text-[#FFC107] mx-auto mb-4" />
                <h4 className="font-bold mb-2">Group Size</h4>
                <p className="text-sm text-muted-foreground">Max 4 students</p>
                <p className="text-xs text-muted-foreground mt-1">Private lessons available</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <Award className="w-10 h-10 text-[#FFC107] mx-auto mb-4" />
                <h4 className="font-bold mb-2">Certification</h4>
                <p className="text-sm text-muted-foreground">IKO Level 1-2</p>
                <p className="text-xs text-muted-foreground mt-1">Internationally recognized</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <MapPin className="w-10 h-10 text-[#FFC107] mx-auto mb-4" />
                <h4 className="font-bold mb-2">Location</h4>
                <p className="text-sm text-muted-foreground">Private Lagoon</p>
                <p className="text-xs text-muted-foreground mt-1">Punta Trettu, Sardinia</p>
              </CardContent>
            </Card>
          </div>

          {/* What You'll Learn */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#FFC107]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-[#FFC107]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Day 1: Theory & Kite Control</h3>
                      <ul className="space-y-2">
                        {[
                          "Wind theory and weather reading",
                          "Equipment setup and safety systems",
                          "Kite control on land",
                          "Safety procedures and self-rescue",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#FFC107]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Wind className="w-6 h-6 text-[#FFC107]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Day 2: Water Skills</h3>
                      <ul className="space-y-2">
                        {[
                          "Kite control in water",
                          "Body dragging techniques",
                          "Water start preparation",
                          "Board positioning and control",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#FFC107]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-[#FFC107]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Day 3: First Rides</h3>
                      <ul className="space-y-2">
                        {[
                          "Water start technique",
                          "First successful rides",
                          "Basic board control",
                          "Stopping and direction changes",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#FFC107]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-[#FFC107]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Certification</h3>
                      <ul className="space-y-2">
                        {[
                          "IKO Level 1-2 certification",
                          "Digital certification card",
                          "Progress tracking and feedback",
                          "Recommendations for next steps",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Everything Included</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Wind,
                  title: "Premium Equipment",
                  description: "Latest North kites, boards, harnesses, wetsuits, and all safety gear",
                },
                {
                  icon: Award,
                  title: "IKO Certification",
                  description: "Internationally recognized certification upon successful completion",
                },
                {
                  icon: Users,
                  title: "Expert Instruction",
                  description: "IKO certified instructors with years of teaching experience",
                },
                {
                  icon: Shield,
                  title: "Insurance Coverage",
                  description: "Full liability and accident insurance included in course price",
                },
                {
                  icon: MapPin,
                  title: "Private Lagoon Access",
                  description: "Exclusive access to our private section — no crowds, more space",
                },
                {
                  icon: BookOpen,
                  title: "Theory Materials",
                  description: "Comprehensive learning materials and safety briefings",
                },
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <item.icon className="w-10 h-10 text-[#FFC107] mb-4" />
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Pricing Options */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Choose Your Format</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 border-[#FFC107] shadow-xl">
                <CardContent className="p-8">
                  <div className="inline-block px-4 py-1 bg-[#FFC107]/10 text-[#FFC107] rounded-full text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Individual Course</h3>
                  <p className="text-sm text-muted-foreground mb-6">One-on-one instruction for faster progress</p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-5xl font-bold text-[#FFC107]">€300</span>
                    <span className="text-muted-foreground">5 hours</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Private 1-on-1 instruction",
                      "Flexible scheduling",
                      "Personalized pace",
                      "Faster learning curve",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-[#FFC107] hover:bg-[#FFA000] text-black font-bold">
                    <Link href="/contact?course=beginner-individual">Book Individual Course</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <div className="inline-block px-4 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold mb-4">
                    Best Value
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Group Course</h3>
                  <p className="text-sm text-muted-foreground mb-6">Small groups (max 4 students)</p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-5xl font-bold text-[#FFC107]">€250</span>
                    <span className="text-muted-foreground">5 hours</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Max 4 students per instructor",
                      "Learn with others",
                      "Great value for money",
                      "Social experience",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107]/10 bg-transparent"
                  >
                    <Link href="/contact?course=beginner-group">Book Group Course</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Common Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "Do I need any prior experience?",
                  a: "No! This course is designed for complete beginners. We'll teach you everything from scratch in a safe, controlled environment.",
                },
                {
                  q: "What should I bring?",
                  a: "Just bring swimwear, sunscreen, and a towel. We provide all equipment including wetsuits, harnesses, kites, and boards.",
                },
                {
                  q: "What if the weather is bad?",
                  a: "We'll reschedule your lesson for another day with good conditions. Safety always comes first, and we want you to have the best learning experience.",
                },
                {
                  q: "Can I get certified in one course?",
                  a: "Most students achieve IKO Level 1-2 certification in the 5-7 hour beginner course. Progress depends on individual learning pace and conditions.",
                },
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2 text-lg">{item.q}</h4>
                    <p className="text-muted-foreground">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FFC107] to-[#FFA000]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-white/90">
            Book your beginner course today and learn kitesurfing in the safest, most beautiful environment in Sardinia
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#FFC107] hover:bg-white/90 text-lg px-8 font-bold">
              <Link href="/contact?course=beginner">Book Your Course</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
            >
              <Link href="https://wa.me/393406000542?text=Hi! I'm interested in the beginner kitesurfing course">
                WhatsApp Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

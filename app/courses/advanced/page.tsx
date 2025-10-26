import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Clock, Users, Award, Wind, Target, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { StatsCards } from "@/components/stats-cards"

export const metadata = {
  title: "Advanced Kitesurfing Course | Zena Kite School Sardinia",
  description:
    "Master advanced tricks and freestyle maneuvers with expert coaching in our private lagoon. Perfect for experienced riders looking to push their limits.",
}

export default function AdvancedCoursePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/action-kitesurfing-punta-trettu.jpeg"
            alt="Advanced Kitesurfing Course"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="inline-block px-4 py-2 bg-[#E91E63] text-white rounded-full font-bold text-sm mb-6 shadow-lg">
            🚀 Advanced Level • Expert Coaching
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Advanced Course</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90 mb-8">
            Push your limits and master advanced tricks with personalized coaching in our private lagoon
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#E91E63] hover:bg-[#C2185B] text-white font-bold text-lg px-8">
              <Link href="/contact?course=advanced">Book Advanced Course</Link>
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
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Take Your Skills to the Next Level</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our advanced course is designed for experienced riders who can ride upwind confidently and want to
                master freestyle tricks, jumps, and advanced maneuvers.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With personalized coaching in our private lagoon, you'll have the space and conditions to safely
                practice new tricks without the crowds and distractions of public areas.
              </p>
              <div className="flex items-center gap-4 p-4 bg-[#E91E63]/10 rounded-lg border-l-4 border-[#E91E63]">
                <Target className="w-8 h-8 text-[#E91E63] flex-shrink-0" />
                <p className="text-sm font-semibold">
                  1-on-1 or small group coaching (max 2 students) for focused, personalized instruction
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/advanced-kitesurfing-tricks-jumps.jpg"
                alt="Advanced kitesurfing tricks"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Prerequisites */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Prerequisites</h2>
            <Card className="border-none shadow-xl max-w-3xl mx-auto">
              <CardContent className="p-8">
                <p className="text-lg mb-6 text-center">
                  This course is for riders who already have solid kitesurfing fundamentals:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Can ride upwind confidently",
                    "Comfortable with board control",
                    "Can perform basic transitions",
                    "Understand safety procedures",
                    "IKO Level 3+ or equivalent",
                    "Ready to learn advanced tricks",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#E91E63] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What You'll Learn */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Master Advanced Techniques</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Jumping & Air Time",
                  items: ["Pop technique", "Board-off jumps", "Grab variations", "Landing control"],
                },
                {
                  icon: TrendingUp,
                  title: "Freestyle Tricks",
                  items: ["Backroll & frontroll", "Kiteloop variations", "Handle passes", "Rotation control"],
                },
                {
                  icon: Wind,
                  title: "Unhooked Riding",
                  items: ["Unhooked basics", "Railey technique", "S-bend variations", "Pop control"],
                },
                {
                  icon: Target,
                  title: "Wave Riding",
                  items: ["Wave positioning", "Bottom turns", "Top turns", "Wave selection"],
                },
                {
                  icon: Award,
                  title: "Advanced Transitions",
                  items: ["Blind judge", "Raley to blind", "S-bend to blind", "Smooth execution"],
                },
                {
                  icon: Users,
                  title: "Competition Prep",
                  items: ["Heat strategy", "Trick selection", "Consistency training", "Mental preparation"],
                },
              ].map((category, i) => (
                <Card key={i} className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <category.icon className="w-10 h-10 text-[#E91E63] mb-4" />
                    <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#E91E63] flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Course Details */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Course Details</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Clock className="w-10 h-10 text-[#E91E63] mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Duration</h4>
                  <p className="text-sm text-muted-foreground">3 hours minimum</p>
                  <p className="text-xs text-muted-foreground mt-1">Flexible scheduling</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="w-10 h-10 text-[#E91E63] mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Format</h4>
                  <p className="text-sm text-muted-foreground">1-on-1 or pairs</p>
                  <p className="text-xs text-muted-foreground mt-1">Personalized coaching</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Award className="w-10 h-10 text-[#E91E63] mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Level</h4>
                  <p className="text-sm text-muted-foreground">IKO Level 5+</p>
                  <p className="text-xs text-muted-foreground mt-1">Advanced riders</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Wind className="w-10 h-10 text-[#E91E63] mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Location</h4>
                  <p className="text-sm text-muted-foreground">Private Lagoon</p>
                  <p className="text-xs text-muted-foreground mt-1">Punta Trettu</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Pricing</h2>
            <Card className="border-2 border-[#E91E63] shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Advanced Coaching Session</h3>
                <div className="flex items-baseline justify-center gap-2 mb-6">
                  <span className="text-6xl font-bold text-[#E91E63]">€180</span>
                  <span className="text-muted-foreground">3 hours</span>
                </div>
                <p className="text-muted-foreground mb-8">Additional hours: €60/hour</p>
                <ul className="space-y-3 mb-8 text-left max-w-md mx-auto">
                  {[
                    "1-on-1 or small group (max 2)",
                    "Personalized trick progression",
                    "Video analysis and feedback",
                    "All equipment included",
                    "Private lagoon access",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#E91E63] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-[#E91E63] hover:bg-[#C2185B] text-white font-bold">
                  <Link href="/contact?course=advanced">Book Advanced Course</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Common Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "What level do I need to be?",
                  a: "You should be able to ride upwind confidently and have solid board control. IKO Level 3+ or equivalent experience is recommended.",
                },
                {
                  q: "Can I bring my own equipment?",
                  a: "Yes! You're welcome to use your own gear. We also have premium equipment available if you prefer.",
                },
                {
                  q: "Do you offer video analysis?",
                  a: "Yes! We use video analysis to help you understand your technique and make faster progress on advanced tricks.",
                },
                {
                  q: "How many sessions do I need?",
                  a: "It depends on your goals. Most riders book 3-6 hours to work on specific tricks, but you can book as many sessions as you need.",
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
      <section className="py-20 bg-gradient-to-r from-[#E91E63] to-[#C2185B]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Ready to Level Up?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-white/90">
            Book your advanced coaching session and master the tricks you've always wanted to learn
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#E91E63] hover:bg-white/90 text-lg px-8 font-bold">
              <Link href="/contact?course=advanced">Book Your Session</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
            >
              <Link href="https://wa.me/393406000542?text=Hi! I'm interested in the advanced kitesurfing course">
                WhatsApp Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

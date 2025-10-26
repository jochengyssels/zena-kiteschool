import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Clock, Users, Award, Wind, Waves, Target, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { StatsCards } from "@/components/stats-cards"

export const metadata = {
  title: "Strapless Kitesurfing Course | Zena Kite School Sardinia",
  description:
    "Learn strapless kitesurfing and surfboard riding with expert coaching. Master wave riding and directional board control in Sardinia.",
}

export default function StraplessCoursePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/action-kitesurfing-punta-trettu.jpeg"
            alt="Strapless Kitesurfing Course"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="inline-block px-4 py-2 bg-[#FFC107] text-black rounded-full font-bold text-sm mb-6 shadow-lg">
            🏄 Strapless • Wave Riding
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Strapless Course</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90 mb-8">
            Experience the pure freedom of strapless kitesurfing and master directional board riding
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#FFC107] hover:bg-[#FFA000] text-black font-bold text-lg px-8">
              <Link href="/contact?course=strapless">Book Strapless Course</Link>
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
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ride Like a Surfer, Powered by Wind</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Strapless kitesurfing combines the best of surfing and kiteboarding. Learn to ride directional boards
                without foot straps, opening up a whole new dimension of wave riding and freestyle possibilities.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our strapless course teaches you the unique techniques needed to control a surfboard-style board, from
                basic riding to advanced wave maneuvers and aerial tricks.
              </p>
              <div className="flex items-center gap-4 p-4 bg-[#FFC107]/10 rounded-lg border-l-4 border-[#FFC107]">
                <Waves className="w-8 h-8 text-[#FFC107] flex-shrink-0" />
                <p className="text-sm font-semibold">
                  Perfect for riders who want to explore wave riding or add a new dimension to their kitesurfing
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/corso-kitesurf-punta-trettu-scaled.jpg"
                alt="Strapless kitesurfing"
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
                  This course is for intermediate to advanced riders with solid kitesurfing fundamentals:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Confident riding upwind",
                    "Good kite control",
                    "Can perform transitions",
                    "IKO Level 3+ or equivalent",
                    "Comfortable in various conditions",
                    "Ready for a new challenge",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What You'll Learn */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Master Strapless Riding</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: "Board Control Basics",
                  items: ["Foot positioning", "Weight distribution", "Board feel and balance", "Stance adjustments"],
                },
                {
                  icon: Wind,
                  title: "Riding Techniques",
                  items: ["Toeside riding", "Heelside control", "Speed management", "Carving turns"],
                },
                {
                  icon: Waves,
                  title: "Wave Riding",
                  items: ["Wave selection", "Bottom turns", "Top turns", "Cutbacks"],
                },
                {
                  icon: TrendingUp,
                  title: "Transitions",
                  items: ["Tack transitions", "Jibe technique", "Smooth direction changes", "Flow maintenance"],
                },
                {
                  icon: Award,
                  title: "Aerial Tricks",
                  items: ["Board-off jumps", "Grab variations", "Landing technique", "Air control"],
                },
                {
                  icon: Users,
                  title: "Advanced Maneuvers",
                  items: ["Backside riding", "Switch stance", "Freestyle tricks", "Style development"],
                },
              ].map((category, i) => (
                <Card key={i} className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <category.icon className="w-10 h-10 text-[#FFC107] mb-4" />
                    <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#FFC107] flex-shrink-0 mt-0.5" />
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
                  <Clock className="w-10 h-10 text-[#FFC107] mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Duration</h4>
                  <p className="text-sm text-muted-foreground">3 hours minimum</p>
                  <p className="text-xs text-muted-foreground mt-1">Flexible scheduling</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="w-10 h-10 text-[#FFC107] mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Format</h4>
                  <p className="text-sm text-muted-foreground">1-on-1 or pairs</p>
                  <p className="text-xs text-muted-foreground mt-1">Personalized coaching</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Award className="w-10 h-10 text-[#FFC107] mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Level</h4>
                  <p className="text-sm text-muted-foreground">Intermediate+</p>
                  <p className="text-xs text-muted-foreground mt-1">IKO Level 3+</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <Waves className="w-10 h-10 text-[#FFC107] mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Equipment</h4>
                  <p className="text-sm text-muted-foreground">Surfboards provided</p>
                  <p className="text-xs text-muted-foreground mt-1">Various sizes available</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">What's Included</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Waves,
                  title: "Surfboards & Kites",
                  description: "Various directional boards and kites suited for strapless riding",
                },
                {
                  icon: Users,
                  title: "Expert Coaching",
                  description: "Specialized instruction from experienced strapless riders",
                },
                {
                  icon: Target,
                  title: "Video Analysis",
                  description: "Video feedback to help you understand and improve your technique",
                },
                {
                  icon: Wind,
                  title: "All Safety Gear",
                  description: "Harnesses, helmets, and all necessary safety equipment",
                },
                {
                  icon: Award,
                  title: "Private Lagoon",
                  description: "Exclusive access to practice in a safe, uncrowded environment",
                },
                {
                  icon: TrendingUp,
                  title: "Progression Plan",
                  description: "Personalized training plan based on your goals and skill level",
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

          {/* Pricing */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Pricing</h2>
            <Card className="border-2 border-[#FFC107] shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Strapless Coaching Session</h3>
                <div className="flex items-baseline justify-center gap-2 mb-6">
                  <span className="text-6xl font-bold text-[#FFC107]">€180</span>
                  <span className="text-muted-foreground">3 hours</span>
                </div>
                <p className="text-muted-foreground mb-8">Additional hours: €60/hour</p>
                <ul className="space-y-3 mb-8 text-left max-w-md mx-auto">
                  {[
                    "1-on-1 or small group (max 2)",
                    "Surfboards and kites included",
                    "Video analysis and feedback",
                    "All equipment and safety gear",
                    "Private lagoon access",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-[#FFC107] hover:bg-[#FFA000] text-black font-bold">
                  <Link href="/contact?course=strapless">Book Strapless Course</Link>
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
                  q: "Do I need surfing experience?",
                  a: "No, but it helps! We'll teach you everything you need to know about riding a directional board. Surfing experience can make the transition easier.",
                },
                {
                  q: "Can I use my own surfboard?",
                  a: "Yes! If you have a surfboard you're comfortable with, you're welcome to use it. We also have various boards available for you to try.",
                },
                {
                  q: "Is strapless harder than regular kitesurfing?",
                  a: "It's different, not necessarily harder. The learning curve depends on your existing skills. Most riders find it challenging but very rewarding.",
                },
                {
                  q: "How many sessions do I need?",
                  a: "Most riders need 3-6 hours to get comfortable with basic strapless riding. Advanced tricks and wave riding require more practice time.",
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
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Ready to Go Strapless?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-white/90">
            Experience the freedom of strapless kitesurfing with expert coaching in Sardinia's best conditions
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#FFC107] hover:bg-white/90 text-lg px-8 font-bold">
              <Link href="/contact?course=strapless">Book Your Course</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
            >
              <Link href="https://wa.me/393406000542?text=Hi! I'm interested in the strapless kitesurfing course">
                WhatsApp Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

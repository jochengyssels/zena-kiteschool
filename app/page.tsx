import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wind, Users, Award, MapPin, Calendar, Star, Waves, Sun, Shield, Zap, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { StatsCards } from "@/components/stats-cards"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden w-full">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            style={{
              width: "100%",
              height: "100%",
              minWidth: "100vw",
              minHeight: "100vh",
              objectFit: "cover",
              pointerEvents: "none",
              border: "none",
            }}
            src="https://www.youtube.com/embed/4V64ysrQ9Rc?autoplay=1&mute=1&loop=1&playlist=4V64ysrQ9Rc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="Kitesurfing at Punta Trettu"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          {/* Private Spot Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFC107]/20 backdrop-blur-sm border-2 border-[#FFC107] rounded-full mb-6 animate-fade-in">
            <Shield className="w-5 h-5 text-[#FFC107]" />
            <span className="text-[#FFC107] font-bold text-sm">Private Spot Access – Exclusive to Zena Students</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in drop-shadow-2xl">
            Ride the Wind. <span className="text-[#FFC107]">Feel the Freedom.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white drop-shadow-lg">
            Learn to kitesurf in Sardinia's only private lagoon — just you, the wind, and the sea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#E91E63] hover:bg-[#FFC107] text-white hover:text-black font-bold text-lg px-8 py-6 shadow-xl transition-all duration-300"
            >
              <Link href="/contact">Book Your Private Course</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white font-bold text-lg px-8 py-6 shadow-xl"
            >
              <Link href="#private-lagoon">Discover Our Private Lagoon</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#FFC107] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#FFC107] rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Cards Section */}
      <StatsCards />

      <section className="py-20 bg-white relative">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#FFFBF5]" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Why Zena?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The perfect combination that makes learning faster and more fun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-[#FFE082] shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFC107] to-[#FFD54F] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Waves className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Perfect Lagoon Conditions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Flat, shallow, and safe for all levels. No waves, no currents — just perfect wind.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE082] shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E91E63] to-[#F06292] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Certified Instructors</h3>
                <p className="text-muted-foreground leading-relaxed">
                  IKO-certified pros who teach with passion and years of experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE082] shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFC107] to-[#FFD54F] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Sun className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Authentic Sardinia Vibe</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Small groups, real smiles, big progress. Join our lagoon tribe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="private-lagoon" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFC107] via-[#E91E63] to-[#FFC107]" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image/Video */}
            <Link href="/spot" className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group block">
              <Image
                src="/punta-trettu-hero-lagoon-kites.jpeg"
                alt="Zena's Private Lagoon Area"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-[#FFC107] text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                🏝️ Private Area
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white font-bold text-xl mb-2">Explore Our Spot</p>
                  <p className="text-white/90 text-sm">View wind conditions & location details</p>
                </div>
              </div>
            </Link>

            {/* Right: Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Our Private Lagoon: <span className="text-[#FFC107]">Freedom Without Crowds</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Unlike most schools in Punta Trettu that share a busy public launch area, Zena Kite School operates from
                its own private section of the lagoon — reserved exclusively for our students.
              </p>

              <div className="grid grid-cols-1 gap-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-[#FFFBF5] rounded-lg border-l-4 border-[#FFC107]">
                  <div className="w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">More Safety and Comfort</h4>
                    <p className="text-muted-foreground text-sm">
                      No kite traffic, no collisions — just safe, stress-free learning
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#FFFBF5] rounded-lg border-l-4 border-[#E91E63]">
                  <div className="w-12 h-12 bg-[#E91E63] rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Faster Progress</h4>
                    <p className="text-muted-foreground text-sm">
                      Uninterrupted water time means you learn faster and more efficiently
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#FFFBF5] rounded-lg border-l-4 border-[#FFC107]">
                  <div className="w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Personalized Coaching</h4>
                    <p className="text-muted-foreground text-sm">
                      Calm environment allows instructors to focus entirely on you
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#FFFBF5] rounded-lg border-l-4 border-[#E91E63]">
                  <div className="w-12 h-12 bg-[#E91E63] rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Premium Experience</h4>
                    <p className="text-muted-foreground text-sm">
                      Your space, your wind — feel the difference quality makes
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#FFC107] hover:bg-[#FFA000] text-black font-bold">
                  <Link href="/spot">
                    <MapPin className="w-5 h-5 mr-2" />
                    Explore Our Spot
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#E91E63] text-[#E91E63] hover:bg-[#E91E63] hover:text-white font-bold bg-transparent"
                >
                  <Link href="/courses">View Courses</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Comparison Mini Map */}
          <div className="mt-16 p-8 bg-gradient-to-br from-[#FFFBF5] to-white rounded-2xl border-2 border-[#FFE082] shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-center mb-8">The Zena Advantage</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-muted-foreground mb-4">Public Area</h4>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-red-500">✗</span>
                  <span className="text-sm">Crowded with many schools</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-red-500">✗</span>
                  <span className="text-sm">Limited space for beginners</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-red-500">✗</span>
                  <span className="text-sm">Shared launch zones</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-red-500">✗</span>
                  <span className="text-sm">Mixed skill levels</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-lg text-[#FFC107] mb-4">Zena Private Area</h4>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#FFC107] flex-shrink-0" />
                  <span className="text-sm font-medium">Exclusive access for Zena students</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#FFC107] flex-shrink-0" />
                  <span className="text-sm font-medium">Full open-water freedom</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#FFC107] flex-shrink-0" />
                  <span className="text-sm font-medium">Dedicated beach & gear setup</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#FFC107] flex-shrink-0" />
                  <span className="text-sm font-medium">Safe environment, focused teaching</span>
                </div>
              </div>
            </div>
            <p className="text-center text-muted-foreground italic mt-6 text-sm">
              "At Zena, you're not one of many — you have your own space to learn, progress, and enjoy every session."
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFFBF5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Find the Perfect Course for Your Level</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All lessons take place in our private lagoon section — exclusive to Zena students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Beginner Course */}
            <Card className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 duration-300 relative">
              <div className="absolute top-4 right-4 z-10 bg-[#FFC107] text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                🏖️ Private Spot
              </div>
              <div className="relative h-48">
                <Image src="/instructor-teaching-lagoon.jpeg" alt="Beginner Course" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-bold mb-2">Beginner</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  Zero to hero in safe, shallow water
                </p>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#FFC107]" />
                    <span>3-5 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#FFC107]" />
                    <span>All levels welcome</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#FFC107]" />
                    <span>Private lagoon access</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-[#FFC107] hover:bg-[#FFA000] text-black font-bold">
                  <Link href="/courses#beginner">Book Private Lesson</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Advanced Course */}
            <Card className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 duration-300 relative">
              <div className="absolute top-4 right-4 z-10 bg-[#FFC107] text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                🏖️ Private Spot
              </div>
              <div className="relative h-48">
                <Image
                  src="/action-kitesurfing-punta-trettu.jpeg"
                  alt="Advanced Course"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-bold mb-2">Advanced</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">Master tricks and boost your style</p>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#E91E63]" />
                    <span>1-3 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#E91E63]" />
                    <span>Experienced riders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#E91E63]" />
                    <span>Private lagoon access</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-[#E91E63] hover:bg-[#C2185B] text-white font-bold">
                  <Link href="/courses#advanced">Book Private Lesson</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Strapless Course */}
            <Card className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 duration-300 relative">
              <div className="absolute top-4 right-4 z-10 bg-[#FFC107] text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                🏖️ Private Spot
              </div>
              <div className="relative h-48">
                <Image src="/happy-student-in-water.jpeg" alt="Strapless Course" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-bold mb-2">Strapless</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">Surf-style freedom on the water</p>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#FFC107]" />
                    <span>2-3 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#FFC107]" />
                    <span>Intermediate+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#FFC107]" />
                    <span>Private lagoon access</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-[#FFC107] hover:bg-[#FFA000] text-black font-bold">
                  <Link href="/courses#strapless">Book Private Lesson</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Private Lessons */}
            <Card className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 duration-300 relative border-2 border-[#FFC107]">
              <div className="absolute top-4 right-4 z-10 bg-[#E91E63] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                ⭐ Premium
              </div>
              <div className="relative h-48">
                <Image src="/team-group-photo-beach.jpeg" alt="Private Lessons" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-bold mb-2">Private</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">One-on-one focus, faster results</p>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#E91E63]" />
                    <span>Flexible schedule</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#E91E63]" />
                    <span>Any level</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#E91E63]" />
                    <span>Exclusive private area</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-[#E91E63] hover:bg-[#C2185B] text-white font-bold">
                  <Link href="/courses#private">Reserve Your Space</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Limited Spots Notice */}
          <div className="mt-12 text-center p-6 bg-gradient-to-r from-[#FFC107]/10 to-[#E91E63]/10 rounded-lg border-2 border-[#FFC107]">
            <p className="text-lg font-semibold text-muted-foreground">
              <Shield className="w-5 h-5 inline-block mr-2 text-[#FFC107]" />
              Limited daily spots — our private lagoon guarantees small groups and personal attention
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/zena-school-north-tent-sunset.jpeg"
                alt="Punta Trettu Lagoon at Sunset"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Sardinia's Kitesurf Paradise: <span className="text-[#FFC107]">Punta Trettu</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                No waves, no currents — just perfect wind and warm lagoon water. Punta Trettu offers the safest and most
                consistent kitesurf conditions in all of Sardinia.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center flex-shrink-0">
                    <Wind className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">300+ Days</p>
                    <p className="text-sm text-muted-foreground">Perfect wind year-round</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#E91E63] rounded-full flex items-center justify-center flex-shrink-0">
                    <Waves className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Flat Water</p>
                    <p className="text-sm text-muted-foreground">Shallow, safe lagoon</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center flex-shrink-0">
                    <Sun className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Warm Water</p>
                    <p className="text-sm text-muted-foreground">Mediterranean climate</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src="/happy-student-in-water.jpeg" alt="Sarah M." fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold">Sarah M.</p>
                    <p className="text-sm text-muted-foreground">Germany</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-[#FFC107] hover:bg-[#FFA000] text-black font-bold">
                <Link href="/spot">Explore the Spot</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFFBF5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Students Say It Best</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from real riders who learned with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-[#FFE082] shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "The best kitesurf experience ever! From zero to riding in 4 days. The instructors are amazing and the
                  spot is perfect."
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src="/happy-student-in-water.jpeg" alt="Sarah M." fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold">Sarah M.</p>
                    <p className="text-sm text-muted-foreground">Germany</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE082] shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "Perfect conditions, top equipment, and passionate teachers. I improved so much in just one week.
                  Highly recommend!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#E91E63] rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Marco R.</p>
                    <p className="text-sm text-muted-foreground">Italy</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFE082] shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "Best kite school in Sardinia! Small groups, friendly vibe, and the lagoon is absolutely stunning.
                  Can't wait to come back!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Emma L.</p>
                    <p className="text-sm text-muted-foreground">UK</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FFC107] via-[#FFD54F] to-[#E91E63] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 drop-shadow-lg">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Book your course today and feel the wind like never before
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#E91E63] hover:bg-gray-100 font-bold text-lg px-8 py-6 shadow-xl"
          >
            <Link href="/contact">Book Your Course</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

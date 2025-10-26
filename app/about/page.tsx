import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Heart, Target, Shield, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Your safety is our top priority. All equipment is regularly maintained and our instructors are trained in first aid and rescue procedures.",
    },
    {
      icon: Heart,
      title: "Passion for Teaching",
      description:
        "We love what we do and it shows. Our instructors are passionate about kitesurfing and dedicated to sharing that passion with you.",
    },
    {
      icon: Target,
      title: "Personalized Approach",
      description: "Every student is unique. We adapt our teaching methods to your learning style, pace, and goals.",
    },
    {
      icon: Users,
      title: "Community Spirit",
      description:
        "Join a welcoming community of kitesurfers. We organize events, trips, and social gatherings throughout the season.",
    },
  ]

  const team = [
    {
      name: "Marco Rossi",
      role: "Head Instructor & Founder",
      certification: "IKO Level 3 Instructor",
      experience: "15+ years",
      image: "/instructor-marco-kitesurfing-teacher.jpg",
    },
    {
      name: "Sofia Bianchi",
      role: "Senior Instructor",
      certification: "IKO Level 2 Instructor",
      experience: "10+ years",
      image: "/instructor-sofia-female-kitesurf-teacher.jpg",
    },
    {
      name: "Luca Conti",
      role: "Instructor",
      certification: "IKO Level 2 Instructor",
      experience: "8+ years",
      image: "/instructor-luca-kitesurf-coach.jpg",
    },
  ]

  const certifications = [
    "IKO (International Kiteboarding Organization) Certified Center",
    "All instructors are IKO certified professionals",
    "First Aid and CPR certified staff",
    "Insured and licensed operation",
    "Premium equipment from leading brands",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/team-group-photo-beach.jpeg"
            alt="Zena Kite School Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">About Zena Kite School</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90">
            Passionate instructors, premium equipment, and unforgettable experiences since 2010
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2010 by Marco Rossi, a passionate kitesurfer who fell in love with Punta Trettu's perfect
                conditions, Zena Kite School has grown from a small operation to one of Sardinia's most respected
                kitesurfing schools.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                <strong className="text-[#FFC107]">We believe in quality over quantity</strong> — that's why we invested
                in our own private lagoon area at Punta Trettu. Fewer kites, more space, better progress. This exclusive
                access allows us to provide a safer, more personalized learning experience that simply isn't possible in
                crowded public areas.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                What started as a dream to share the joy of kitesurfing has evolved into a thriving community of
                students, instructors, and enthusiasts who return year after year to experience the magic of our private
                lagoon.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're proud to have taught over 5,000 students from around the world, maintaining our commitment
                to safety, quality instruction, and creating unforgettable memories on the water.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/team-group-photo-beach.jpeg"
                alt="Zena Kite School Team in Private Area"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#FFC107] text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                🏝️ Our Private Area
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#E91E63]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-[#E91E63]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced, certified instructors dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-80">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-serif font-bold mb-1">{member.name}</h3>
                  <p className="text-[#FFC107] font-medium mb-3">{member.role}</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{member.certification}</p>
                    <p>{member.experience} experience</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-none shadow-lg bg-[#f8f9fa]">
            <CardContent className="p-8 text-center">
              <Award className="w-12 h-12 text-[#FFC107] mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold mb-4">Certifications & Standards</h3>
              <ul className="max-w-2xl mx-auto space-y-3">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-center justify-center gap-3">
                    <Star className="w-5 h-5 text-[#FFC107] flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#FFC107] to-[#E91E63] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">10+</div>
              <div className="text-lg text-white/90">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">720+</div>
              <div className="text-lg text-white/90">IKO Certified Students</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">300+</div>
              <div className="text-lg text-white/90">Wind Days Yearly</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">2km</div>
              <div className="text-lg text-white/90">From Punta Trettu</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our community and experience the thrill of kitesurfing with Sardinia's most trusted school
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#FFC107] hover:bg-[#E91E63] text-black hover:text-white text-lg px-8 py-6"
            >
              <Link href="/courses">View Courses</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[#E91E63] text-[#E91E63] hover:bg-[#E91E63] hover:text-white text-lg px-8 py-6 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

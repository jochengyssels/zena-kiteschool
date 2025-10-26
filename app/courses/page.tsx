import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Clock, Users, Wind, Award, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/kitesurf-courses-group-lesson-beach.jpg"
            alt="Kitesurf Courses"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Courses</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90">
            Professional IKO certified courses for every skill level
          </p>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">See Our Courses in Action</h2>
            <p className="text-lg text-muted-foreground">
              Watch how we teach kitesurfing in the perfect conditions of Punta Trettu
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              <div className="aspect-video">
                <iframe
                  title="Zena Kite School Courses at Punta Trettu"
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

      {/* Course Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Choose Your Path</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All courses include IKO certification, premium equipment, expert instruction, and exclusive access to our
              private lagoon
            </p>
          </div>

          {/* Beginner Course */}
          <div id="beginner" className="mb-20 scroll-mt-24">
            <Card className="overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <Image
                    src="/instructor-teaching-lagoon.jpeg"
                    alt="Beginner Course in Private Lagoon"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#FFC107] text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    🏖️ Private Lagoon Access
                  </div>
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-block px-4 py-1 bg-[#FFC107]/10 text-[#FFC107] rounded-full text-sm font-semibold mb-4 w-fit">
                    Most Popular
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">Beginner Course</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Perfect for those who have never tried kitesurfing. Learn all the fundamentals in our exclusive
                    private lagoon — a safe, uncrowded environment with patient instructors focused entirely on you.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#FFC107]" />
                      <span className="text-sm">3-5 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#FFC107]" />
                      <span className="text-sm">Max 4 students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#FFC107]" />
                      <span className="text-sm">12-15 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#FFC107]" />
                      <span className="text-sm">IKO Level 1-2</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {[
                        "Wind theory and weather conditions",
                        "Kite setup and safety systems",
                        "Kite control on land and water",
                        "Body dragging and water starts",
                        "First rides and board control",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold text-[#FFC107]">€350</span>
                    <span className="text-muted-foreground">per person</span>
                  </div>

                  <Button asChild size="lg" className="bg-[#FFC107] hover:bg-[#FFA000] text-black font-bold">
                    <Link href="/contact?course=beginner">Book Your Private Lesson</Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Intermediate Course */}
          <div id="intermediate" className="mb-20 scroll-mt-24">
            <Card className="overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto md:order-2">
                  <Image
                    src="/intermediate-kitesurfing-riding-waves.jpg"
                    alt="Intermediate Course in Private Lagoon"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#FFC107] text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    🏖️ Private Lagoon Access
                  </div>
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center md:order-1">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">Intermediate Course</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Take your skills to the next level. Perfect for riders who can ride upwind and want to improve
                    technique and learn new maneuvers in our exclusive private lagoon.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#FFC107]" />
                      <span className="text-sm">2-3 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#FFC107]" />
                      <span className="text-sm">Max 3 students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#FFC107]" />
                      <span className="text-sm">6-9 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#FFC107]" />
                      <span className="text-sm">IKO Level 3-4</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {[
                        "Advanced board control techniques",
                        "Transitions and direction changes",
                        "Jumping fundamentals",
                        "Wave riding basics",
                        "Self-rescue techniques",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold text-[#FFC107]">€250</span>
                    <span className="text-muted-foreground">per person</span>
                  </div>

                  <Button asChild size="lg" className="bg-[#FFC107] hover:bg-[#FFA000] text-black font-bold">
                    <Link href="/contact?course=intermediate">Book Intermediate Course</Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Advanced Course */}
          <div id="advanced" className="mb-20 scroll-mt-24">
            <Card className="overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <Image
                    src="/advanced-kitesurfing-tricks-jumps.jpg"
                    alt="Advanced Course in Private Lagoon"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#FFC107] text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    🏖️ Private Lagoon Access
                  </div>
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-block px-4 py-1 bg-[#FFC107]/10 text-[#FFC107] rounded-full text-sm font-semibold mb-4 w-fit">
                    Advanced Level
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">Advanced Course</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Master advanced tricks and freestyle maneuvers. For experienced riders looking to push their limits
                    with expert coaching in our exclusive private lagoon.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#FFC107]" />
                      <span className="text-sm">1-2 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#FFC107]" />
                      <span className="text-sm">1-on-1 or pairs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#FFC107]" />
                      <span className="text-sm">3-6 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#FFC107]" />
                      <span className="text-sm">IKO Level 5+</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {[
                        "Advanced jumping techniques",
                        "Freestyle tricks and rotations",
                        "Unhooked riding",
                        "Wave performance",
                        "Competition preparation",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold text-[#FFC107]">€200</span>
                    <span className="text-muted-foreground">per person</span>
                  </div>

                  <Button asChild size="lg" className="bg-[#FFC107] hover:bg-[#FFA000] text-black font-bold">
                    <Link href="/contact?course=advanced">Book Advanced Course</Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Private Lessons */}
          <div className="mb-20">
            <Card className="overflow-hidden shadow-xl border-2 border-[#ffd60a]">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="inline-block px-4 py-1 bg-[#ffd60a]/20 text-[#ffc300] rounded-full text-sm font-semibold mb-4">
                    Premium Option
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">Private Lessons</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Get personalized one-on-one instruction tailored to your specific goals and skill level in our
                    exclusive private lagoon.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#FFC107]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-[#FFC107]" />
                    </div>
                    <h4 className="font-semibold mb-2">1-on-1 Attention</h4>
                    <p className="text-sm text-muted-foreground">
                      Dedicated instructor focused solely on your progress
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#FFC107]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-[#FFC107]" />
                    </div>
                    <h4 className="font-semibold mb-2">Flexible Schedule</h4>
                    <p className="text-sm text-muted-foreground">Choose times that work best for you</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#FFC107]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wind className="w-8 h-8 text-[#FFC107]" />
                    </div>
                    <h4 className="font-semibold mb-2">Faster Progress</h4>
                    <p className="text-sm text-muted-foreground">Learn at your own pace with customized instruction</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-2 mb-6">
                    <span className="text-4xl font-bold text-[#FFC107]">€120</span>
                    <span className="text-muted-foreground">per hour</span>
                  </div>
                  <Button asChild size="lg" className="bg-[#ffd60a] text-foreground hover:bg-[#ffc300]">
                    <Link href="/contact?course=private">Book Private Lesson</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What's Included</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every course comes with everything you need for a safe and successful learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#FFC107]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-[#FFC107]" />
                </div>
                <h4 className="font-semibold mb-2">IKO Certification</h4>
                <p className="text-sm text-muted-foreground">
                  Internationally recognized certification upon completion
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#FFC107]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wind className="w-6 h-6 text-[#FFC107]" />
                </div>
                <h4 className="font-semibold mb-2">Premium Equipment</h4>
                <p className="text-sm text-muted-foreground">Latest kites, boards, harnesses, and safety gear</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#FFC107]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-[#FFC107]" />
                </div>
                <h4 className="font-semibold mb-2">Expert Instructors</h4>
                <p className="text-sm text-muted-foreground">IKO certified professionals with years of experience</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#FFC107]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-[#FFC107]" />
                </div>
                <h4 className="font-semibold mb-2">Theory Materials</h4>
                <p className="text-sm text-muted-foreground">Comprehensive learning materials and safety briefings</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#FFC107]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wind className="w-6 h-6 text-[#FFC107]" />
                </div>
                <h4 className="font-semibold mb-2">Private Lagoon Access</h4>
                <p className="text-sm text-muted-foreground">
                  Exclusive access to our private lagoon for a safe and uncrowded learning environment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FFC107] to-[#FFA000] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Not Sure Which Course?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-white/90">
            Contact us and we'll help you choose the perfect course for your skill level and goals in our exclusive
            private lagoon.
          </p>
          <Button asChild size="lg" className="bg-white text-[#FFC107] hover:bg-white/90 text-lg px-8 py-6">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function GalleryPage() {
  const galleryImages = [
    // Lessons folder
    { src: "/lessons/lesson-kite-launch-water.jpg", alt: "Kite launch training in water", category: "Lessons" },
    { src: "/lessons/lessons-kite-invert-loop.jpg", alt: "Advanced invert loop technique", category: "Lessons" },
    { src: "/lessons/lesson-waterstart-kite.jpg", alt: "Waterstart lesson", category: "Lessons" },
    { src: "/lessons/lessons-strapless-start.jpg", alt: "Strapless kitesurfing start", category: "Lessons" },
    { src: "/lessons/lesson-piloting-water.jpeg", alt: "Kite piloting in water", category: "Lessons" },
    { src: "/lessons/lessons-strapless-jump.jpg", alt: "Strapless jump training", category: "Lessons" },
    { src: "/lessons/lesson-jump.jpeg", alt: "Jump technique lesson", category: "Lessons" },

    // Team folder
    {
      src: "/team/team-matteo-sand-jump-board-grab.jpg",
      alt: "Matteo performing sand jump with board grab",
      category: "Team",
    },
    { src: "/team/team-instructor.jpg", alt: "IKO Level 1 Instructor Jochen", category: "Team" },
    { src: "/team/team-instructor-female.jpg", alt: "IKO Level 2 Instructor Carlo", category: "Team" },

    // Kite folder
    { src: "/kite/kite-sardinia-sunset.webp", alt: "Kitesurfing at sunset in Sardinia", category: "Kite" },

    // Vibe category (school atmosphere and community)
    { src: "/zena-school-north-tent-sunset.jpeg", alt: "School setup at sunset", category: "Vibe" },
    { src: "/team-group-photo-beach.jpeg", alt: "Team and students group photo", category: "Vibe" },
    { src: "/happy-student-in-water.jpeg", alt: "Happy student learning", category: "Vibe" },

    // Spots category (location and conditions)
    { src: "/punta-trettu-hero-lagoon-kites.jpeg", alt: "Punta Trettu lagoon with kites", category: "Spots" },
    { src: "/punta-trettu-aerial-kites.jpg", alt: "Aerial view of Punta Trettu", category: "Spots" },
    { src: "/punta-trettu-lagoon-aerial.jpeg", alt: "Lagoon aerial view", category: "Spots" },
    { src: "/action-kitesurfing-punta-trettu.jpeg", alt: "Kitesurfing action at Punta Trettu", category: "Spots" },

    // Rental category (equipment)
    { src: "/colorful-kitesurfing-kites-equipment.jpg", alt: "Colorful kites and equipment", category: "Rental" },
    { src: "/kitesurfing-twin-tip-board-equipment.jpg", alt: "Twin tip boards", category: "Rental" },
    { src: "/kitesurfing-harness-and-wetsuit-gear.jpg", alt: "Harness and wetsuit gear", category: "Rental" },

    // IKO category (IKO Instructor Course October 2025)
    {
      src: "/iko-course-oct-2025-group-1.jpeg",
      alt: "IKO Instructor Course participants group photo",
      category: "IKO",
    },
    {
      src: "/iko-course-oct-2025-lagoon-view.jpeg",
      alt: "Zena Kite School lagoon view during IKO course",
      category: "IKO",
    },
    {
      src: "/iko-course-oct-2025-kite-setup.jpeg",
      alt: "IKO instructors teaching kite setup techniques",
      category: "IKO",
    },
    { src: "/iko-course-oct-2025-group-2.jpeg", alt: "IKO course participants at the beach", category: "IKO" },
    { src: "/iko-course-oct-2025-sunset.jpeg", alt: "Sunset gathering during IKO instructor course", category: "IKO" },
    { src: "/iko-course-oct-2025-certificates-1.jpeg", alt: "IKO graduates with their certificates", category: "IKO" },
    {
      src: "/iko-course-oct-2025-certificates-2.jpeg",
      alt: "Successful IKO instructor certification",
      category: "IKO",
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", "Lessons", "Team", "Kite", "Vibe", "Spots", "Rental", "IKO"]

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const testimonials = [
    {
      name: "Emma Johnson",
      country: "United Kingdom",
      rating: 5,
      text: "Best kitesurfing school I've ever been to! The instructors are incredibly patient and knowledgeable. I went from zero to riding independently in just 3 days. The spot is absolutely perfect for learning.",
      image: "/testimonial-emma-uk-student.jpg",
    },
    {
      name: "Thomas Mueller",
      country: "Germany",
      rating: 5,
      text: "Amazing experience! Marco and his team are true professionals. The equipment is top quality and the location is stunning. I've been coming back for 3 years now and it never disappoints.",
      image: "/testimonial-thomas-germany-student.jpg",
    },
    {
      name: "Sophie Dubois",
      country: "France",
      rating: 5,
      text: "I was nervous about learning kitesurfing, but the team at Zena made me feel safe and confident from day one. The shallow water at Punta Trettu is perfect for beginners. Highly recommend!",
      image: "/testimonial-sophie-france-student.jpg",
    },
    {
      name: "Alex Petrov",
      country: "Russia",
      rating: 5,
      text: "Professional instructors, excellent equipment, and the best spot in Europe. I improved my skills significantly during my week here. The atmosphere is friendly and welcoming.",
      image: "/testimonial-alex-russia-student.jpg",
    },
    {
      name: "Maria Garcia",
      country: "Spain",
      rating: 5,
      text: "Fantastic school! I took the intermediate course and learned so much. The instructors really know how to push you to improve while keeping it fun and safe. Can't wait to come back!",
      image: "/testimonial-maria-spain-student.jpg",
    },
    {
      name: "James Wilson",
      country: "USA",
      rating: 5,
      text: "Zena Kite School exceeded all my expectations. The location is breathtaking, the instruction is world-class, and I made friends for life. This is kitesurfing paradise!",
      image: "/testimonial-james-usa-student.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/team-group-photo-beach.jpeg" alt="Gallery" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Gallery & Reviews</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90">
            See what makes Zena Kite School special
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Photo Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Moments captured at Punta Trettu with Zena Kite School
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-[#FFC107] hover:bg-[#FFB300] text-gray-900 font-medium"
                    : "border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107]/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{image.category}</p>
                    <p className="text-xs text-white/80">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Experience the Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch our students progress and enjoy the perfect conditions at Punta Trettu
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/4V64ysrQ9Rc?autoplay=1&mute=1&loop=1&playlist=4V64ysrQ9Rc&controls=1&modestbranding=1&rel=0"
                title="Zena Kite School - Experience the Action"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What Our Students Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real reviews from real students who learned with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#ffd60a] text-[#ffd60a]" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-[#00b4d8]/20 mb-2" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="inline-block border-none shadow-lg bg-[#f8f9fa]">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-8 h-8 fill-[#ffd60a] text-[#ffd60a]" />
                  <span className="text-4xl font-bold">4.9</span>
                </div>
                <p className="text-muted-foreground">Average rating from 500+ reviews</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00b4d8] to-[#0096c7] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Create Your Own Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-white/90">
            Join hundreds of satisfied students and start your kitesurfing adventure today
          </p>
          <Button asChild size="lg" className="bg-[#ffd60a] text-foreground hover:bg-[#ffc300] text-lg px-8 py-6">
            <Link href="/contact">Book Your Course</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

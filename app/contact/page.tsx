"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    dates: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.")
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+39 340 600 0542", "WhatsApp available"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@zenakiteschool.it"],
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Via S. Oru de Mari, 11", "09010 San Giovanni Suergiu SU"],
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["April - October: 9:00 - 19:00", "November - March: By appointment"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/team-group-photo-beach.jpeg"
            alt="Contact Zena Kite School Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90">
            Ready to start your kitesurfing adventure? We're here to help
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours. For urgent inquiries, please call or
                WhatsApp us directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+39 340 600 0542"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course">Interested In</Label>
                    <Select
                      value={formData.course}
                      onValueChange={(value) => setFormData({ ...formData, course: value })}
                    >
                      <SelectTrigger id="course" className="border-2">
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner Course</SelectItem>
                        <SelectItem value="intermediate">Intermediate Course</SelectItem>
                        <SelectItem value="advanced">Advanced Course</SelectItem>
                        <SelectItem value="private">Private Lessons</SelectItem>
                        <SelectItem value="rental">Equipment Rental</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dates">Preferred Dates</Label>
                  <Input
                    id="dates"
                    placeholder="e.g., June 15-20, 2025"
                    value={formData.dates}
                    onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                    className="border-2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your experience level, questions, or special requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="border-2 resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Contact Information</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We're available to answer your questions and help you plan your perfect kitesurfing experience.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-2 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{info.title}</h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-none shadow-lg bg-gradient-to-br from-accent to-accent/90 text-white">
                <CardContent className="p-8">
                  <MessageCircle className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Quick Response</h3>
                  <p className="text-white/90 mb-4 leading-relaxed">
                    Need an immediate answer? Contact us on WhatsApp for the fastest response during business hours.
                  </p>
                  <Button asChild size="lg" className="w-full bg-white text-accent hover:bg-white/90">
                    <a href="https://wa.me/393406000542" target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Located at the beautiful Punta Trettu lagoon in southwest Sardinia
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="relative h-96 bg-gray-200">
                <iframe
                  src="https://maps.google.com/maps?q=Zena%20Kite%20School%20asd%20ikocenter%20Sardegna&t=m&z=10&output=embed&iwloc=near"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zena Kite School Location"
                  className="absolute inset-0"
                />
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-2">From Cagliari Airport</h4>
                  <p className="text-sm text-muted-foreground">1 hour drive via SS195</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-2">Parking</h4>
                  <p className="text-sm text-muted-foreground">Free parking at the beach</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-2">Nearby Towns</h4>
                  <p className="text-sm text-muted-foreground">Sant'Antioco 15 min</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Quick answers to common questions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Do I need to book in advance?",
                a: "We recommend booking at least 1-2 weeks in advance, especially during peak season (June-August). However, we can sometimes accommodate last-minute bookings if spots are available.",
              },
              {
                q: "What should I bring?",
                a: "Bring swimwear, sunscreen, sunglasses, a towel, and water. We provide all kitesurfing equipment, wetsuits, and safety gear. A rash guard or UV shirt is recommended.",
              },
              {
                q: "What if the weather is bad?",
                a: "If conditions are unsafe, we'll reschedule your lesson at no extra cost. We monitor weather forecasts closely and will contact you in advance if changes are needed.",
              },
              {
                q: "Can I rent equipment without taking a course?",
                a: "Yes, but you must demonstrate adequate kitesurfing skills and provide proof of certification (IKO card or equivalent). A safety briefing is required for all rentals.",
              },
              {
                q: "Is there accommodation nearby?",
                a: "Yes, there are several hotels, B&Bs, and vacation rentals within 10-15 minutes of Punta Trettu. We can provide recommendations based on your budget and preferences.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-2 border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Don't wait - secure your spot at Sardinia's premier kitesurfing school
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90 text-lg px-8 py-6">
              <a href="tel:+393406000542">Call Now</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-foreground hover:bg-foreground hover:text-primary text-lg px-8 py-6 bg-transparent"
            >
              <a href="mailto:info@zenakiteschool.it">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

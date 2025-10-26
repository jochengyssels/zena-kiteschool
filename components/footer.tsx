import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin, Award, Waves, Users } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFC107] via-[#E91E63] to-[#FFC107]" />

      <div className="absolute top-8 right-8 opacity-5">
        <Image src="/zena-kite-logo.png" alt="Zena Kite School" width={200} height={80} className="object-contain" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-[#FFC107]">Zena</span> Kite School
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Born from wind, driven by passion. Your premium kitesurf school with exclusive private lagoon access in
              Sardinia.
            </p>
            <div className="flex flex-wrap gap-3 text-xs">
              <div className="flex items-center gap-1 text-[#FFC107]">
                <Award className="w-4 h-4" />
                <span>IKO Certified</span>
              </div>
              <div className="flex items-center gap-1 text-[#E91E63]">
                <Waves className="w-4 h-4" />
                <span>Private Lagoon</span>
              </div>
              <div className="flex items-center gap-1 text-[#FFC107]">
                <Users className="w-4 h-4" />
                <span>Small Groups</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#FFC107]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses" className="text-white/80 hover:text-[#E91E63] transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/80 hover:text-[#E91E63] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/spot" className="text-white/80 hover:text-[#E91E63] transition-colors">
                  The Spot
                </Link>
              </li>
              <li>
                <Link href="/rentals" className="text-white/80 hover:text-[#E91E63] transition-colors">
                  Equipment Rental
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-[#E91E63] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/80 hover:text-[#E91E63] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-[#E91E63] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#FFC107]">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-[#E91E63] flex-shrink-0" />
                <span className="text-white/80">Via S. Oru de Mari, 11, 09010 San Giovanni Suergiu SU</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E91E63] flex-shrink-0" />
                <a href="tel:+393406000542" className="text-white/80 hover:text-[#FFC107] transition-colors">
                  +39 340 600 0542
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E91E63] flex-shrink-0" />
                <a
                  href="mailto:info@zenakiteschool.it"
                  className="text-white/80 hover:text-[#FFC107] transition-colors"
                >
                  info@zenakiteschool.it
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#FFC107]">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://instagram.com/zenakiteschool"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E91E63] transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/zenakiteschool"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E91E63] transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div>
              <p className="text-xs text-white/60 mb-2">Language</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs bg-[#FFC107] text-gray-900 font-semibold rounded hover:bg-[#FFD700] transition-colors">
                  EN
                </button>
                <button className="px-3 py-1 text-xs bg-white/10 rounded hover:bg-white/20 transition-colors">
                  IT
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/90 font-semibold mb-2">
            Zena Kite School – Born from Wind, Driven by Passion.
          </p>
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Zena Kite School, Sardinia – All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

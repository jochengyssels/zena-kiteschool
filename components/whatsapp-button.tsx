"use client"

import { MessageCircle } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function WhatsAppButton() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)

  // Hide on contact/booking pages to avoid CTA duplication
  const shouldShow = !pathname.includes("/contact")

  useEffect(() => {
    // Delay appearance for smooth entry animation
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (!shouldShow) return null

  const phoneNumber = "393406000542" // Format: country code + number (no + or spaces)
  const message = encodeURIComponent("Hi! I'm interested in kitesurfing lessons at Zena Kite School. Can you help me?")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />

      {/* Pulse animation ring */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
    </a>
  )
}

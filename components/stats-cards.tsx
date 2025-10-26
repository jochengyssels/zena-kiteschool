"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Trophy, Users, Wind, MapPin } from "lucide-react"

interface StatCardProps {
  from?: number
  to: number
  duration?: number
  prefix?: string
  suffix?: string
  label: string
  icon: React.ReactNode
}

function StatCard({ from = 0, to, duration = 1400, prefix = "", suffix = "", label, icon }: StatCardProps) {
  const numberRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const card = cardRef.current
    const numberEl = numberRef.current
    if (!card || !numberEl) return

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    function animateCount() {
      if (!numberEl) return
      const start = performance.now()

      function frame(now: number) {
        const p = Math.min((now - start) / duration, 1)
        const value = Math.round(from + (to - from) * easeOutCubic(p))
        numberEl.textContent = `${prefix}${value}${suffix}`
        if (p < 1) requestAnimationFrame(frame)
      }
      requestAnimationFrame(frame)
    }

    // Check for IntersectionObserver support
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Check for reduced motion preference
              const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
              if (prefersReducedMotion) {
                numberEl.textContent = `${prefix}${to}${suffix}`
              } else {
                animateCount()
              }
              io.unobserve(entry.target)
            }
          })
        },
        { rootMargin: "0px 0px -10% 0px" },
      )

      io.observe(card)

      return () => io.disconnect()
    } else {
      // Fallback for browsers without IntersectionObserver
      numberEl.textContent = `${prefix}${to}${suffix}`
    }
  }, [from, to, duration, prefix, suffix])

  return (
    <article
      ref={cardRef}
      className="stat-card group relative rounded-xl p-3 md:p-4 text-center shadow-md bg-gradient-to-br from-white via-yellow-50/30 to-pink-50/20 backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400/60 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-out overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/3 via-transparent to-pink-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-yellow-400/10 to-pink-500/10 rounded-bl-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 mb-2 rounded-lg bg-gradient-to-br from-yellow-400 to-pink-500 shadow-md group-hover:scale-105 transition-transform duration-300">
          <div className="text-white scale-75">{icon}</div>
        </div>

        <div
          ref={numberRef}
          className="stat-number text-2xl md:text-3xl lg:text-4xl font-bold leading-none bg-gradient-to-br from-yellow-500 via-yellow-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300"
          aria-label={label}
        >
          0
        </div>

        <div className="stat-label mt-1.5 text-xs md:text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
          {label}
        </div>
      </div>
    </article>
  )
}

export function StatsCards() {
  return (
    <section aria-labelledby="zena-kpi-title" className="zena-kpis container mx-auto px-4 py-6">
      <h2 id="zena-kpi-title" className="sr-only">
        Key numbers
      </h2>

      <div className="stats-grid grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          to={10}
          suffix="+"
          label="Years of experience"
          duration={1400}
          icon={<Trophy className="w-4 h-4 md:w-5 md:h-5" />}
        />
        <StatCard
          to={720}
          suffix="+"
          label="IKO certified students"
          duration={1600}
          icon={<Users className="w-4 h-4 md:w-5 md:h-5" />}
        />
        <StatCard
          to={300}
          suffix="+"
          label="Days of wind yearly"
          duration={1600}
          icon={<Wind className="w-4 h-4 md:w-5 md:h-5" />}
        />
        <StatCard
          to={2}
          suffix=" km"
          label="From Punta Trettu"
          duration={1100}
          icon={<MapPin className="w-4 h-4 md:w-5 md:h-5" />}
        />
      </div>
    </section>
  )
}

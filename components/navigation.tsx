"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { createPortal } from "react-dom"

function MobileDrawer({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  if (!isOpen) return null

  // Render to document.body to avoid sticky nav stacking context issues
  return createPortal(
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-[998] bg-black/50 md:hidden" onClick={onClose} aria-hidden="true" />

      {/* Drawer (full screen) */}
      <div
        className="
          fixed inset-0 z-[999] md:hidden
          bg-white
          overscroll-contain
          overflow-y-auto
          pt-[calc(env(safe-area-inset-top)+96px)]
          pb-[env(safe-area-inset-bottom)]
        "
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="px-6 pb-8">{children}</div>
      </div>
    </>,
    document.body,
  )
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null)
  const pathname = usePathname()

  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const firstFocusableRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
      firstFocusableRef.current?.focus()

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsMobileMenuOpen(false)
        }
      }

      document.addEventListener("keydown", handleKeyDown)
      return () => {
        document.body.style.overflow = "unset"
        document.removeEventListener("keydown", handleKeyDown)
      }
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "/", label: "Home" },
    {
      href: "/courses",
      label: "Courses",
      submenu: [
        { href: "/courses", label: "All Courses" },
        { href: "/courses/beginner", label: "Beginner Course" },
        { href: "/courses/advanced", label: "Advanced Course" },
        { href: "/courses/strapless", label: "Strapless Course" },
      ],
    },
    { href: "/pricing", label: "Pricing" },
    { href: "/rentals", label: "Rentals" },
    {
      href: "/spot",
      label: "Spot & Forecast",
      submenu: [
        { href: "/spot", label: "Spot Overview" },
        { href: "/research", label: "Insights & Research" },
        { href: "/research/punta-trettu-kitesurfing-boom", label: "Kitesurfing Boom at Punta Trettu (2025)" },
      ],
    },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  const hasActiveSubmenu = (submenu?: { href: string; label: string }[]) => {
    if (!submenu) return false
    return submenu.some((item) => isActive(item.href))
  }

  const handleMouseEnter = (linkHref: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }

    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(linkHref)
    }, 150)
  }

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }

    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 250)
  }

  const handleDropdownKeyDown = (
    e: React.KeyboardEvent,
    linkHref: string,
    submenu: { href: string; label: string }[],
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      setOpenDropdown(openDropdown === linkHref ? null : linkHref)
    } else if (e.key === "Escape") {
      setOpenDropdown(null)
    } else if (e.key === "ArrowDown" && openDropdown === linkHref) {
      e.preventDefault()
      const firstItem = document.querySelector(`[data-submenu="${linkHref}"] a`) as HTMLElement
      firstItem?.focus()
    }
  }

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-[997] transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20"
          : "bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm"
      }`}
      aria-label="Main"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center shrink-0 min-w-[96px]">
            <Image
              src="/zena-kite-logo.png"
              alt="Zena Kite School"
              width={512}
              height={512}
              priority
              sizes="352px"
              className="h-[70px] w-auto shrink-0 select-none pointer-events-none"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8" role="menubar">
            {navLinks.map((link) =>
              link.submenu ? (
                <li key={link.href} role="none">
                  <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.href)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`text-sm font-semibold transition-colors hover:text-[#E91E63] flex items-center gap-1 ${
                        isScrolled ? "text-foreground" : "text-white drop-shadow-lg"
                      } ${hasActiveSubmenu(link.submenu) ? "text-[#FFC107] font-medium underline decoration-2 underline-offset-4" : ""}`}
                      aria-haspopup="menu"
                      aria-expanded={openDropdown === link.href}
                      aria-controls={`submenu-${link.href}`}
                      onKeyDown={(e) => handleDropdownKeyDown(e, link.href, link.submenu!)}
                      role="menuitem"
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {openDropdown === link.href && (
                      <ul
                        id={`submenu-${link.href}`}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                        role="menu"
                        data-submenu={link.href}
                      >
                        {link.submenu.map((sublink) => (
                          <li key={sublink.href} role="none">
                            <Link
                              href={sublink.href}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                isActive(sublink.href)
                                  ? "bg-[#FFC107]/20 text-[#E91E63] font-medium underline decoration-2 underline-offset-2 border-l-4 border-[#FFC107]"
                                  : "text-foreground hover:bg-[#FFC107]/10 hover:text-[#E91E63]"
                              }`}
                              role="menuitem"
                            >
                              {sublink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ) : (
                <li key={link.href} role="none">
                  <Link
                    href={link.href}
                    className={`text-sm font-semibold transition-colors hover:text-[#E91E63] ${
                      isScrolled ? "text-foreground" : "text-white drop-shadow-lg"
                    } ${isActive(link.href) ? "text-[#FFC107] font-medium underline decoration-2 underline-offset-4" : ""}`}
                    role="menuitem"
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
            <li role="none">
              <Button asChild className="bg-[#E91E63] text-white hover:bg-[#C2185B] font-bold shadow-lg">
                <Link href="/contact">Book Now</Link>
              </Button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            ref={firstFocusableRef}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-foreground" : "text-white drop-shadow-lg"} size={28} />
            ) : (
              <Menu className={isScrolled ? "text-foreground" : "text-white drop-shadow-lg"} size={28} />
            )}
          </button>
        </div>

        {/* Portal-based mobile drawer component for full-screen rendering */}
        <MobileDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) =>
              link.submenu ? (
                <div key={link.href}>
                  <button
                    onClick={() => setOpenMobileAccordion(openMobileAccordion === link.href ? null : link.href)}
                    className={`font-semibold flex items-center justify-between w-full transition-colors min-h-[44px] ${
                      hasActiveSubmenu(link.submenu)
                        ? "text-[#FFC107] underline decoration-2 underline-offset-4"
                        : "text-foreground hover:text-[#E91E63]"
                    }`}
                    aria-expanded={openMobileAccordion === link.href}
                    aria-controls={`mobile-submenu-${link.href}`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${openMobileAccordion === link.href ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openMobileAccordion === link.href && (
                    <div id={`mobile-submenu-${link.href}`} className="ml-4 mt-2 space-y-2">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          className={`block text-sm transition-colors min-h-[44px] flex items-center ${
                            isActive(sublink.href)
                              ? "text-[#E91E63] font-medium underline decoration-2 underline-offset-2 border-l-4 border-[#FFC107] pl-2"
                              : "text-muted-foreground hover:text-[#E91E63]"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-semibold transition-colors min-h-[44px] flex items-center ${
                    isActive(link.href)
                      ? "text-[#FFC107] underline decoration-2 underline-offset-4"
                      : "text-foreground hover:text-[#E91E63]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}

            <div className="mt-4 pt-4 border-t border-gray-200">
              <Button asChild className="w-full bg-[#E91E63] text-white hover:bg-[#C2185B] font-bold min-h-[44px]">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        </MobileDrawer>
      </div>
    </nav>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomepage = pathname === "/"

  useEffect(() => {
    if (!isHomepage) {
      setIsScrolledPastHero(true)
      return
    }

    const handleScroll = () => {
      const heroSection = document.getElementById("hero")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setIsScrolledPastHero(window.scrollY > heroBottom - 80)
      } else {
        setIsScrolledPastHero(window.scrollY > 100)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomepage])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const isDark = isHomepage && !isScrolledPastHero

  const handleWorkClick = (e: React.MouseEvent) => {
    if (isHomepage) {
      e.preventDefault()
      const workSection = document.getElementById("work")
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const navItems = [
    { label: "Work", href: "/#work", onClick: handleWorkClick },
    { label: "Resume", href: "/resume" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact Me", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isDark ? "bg-[#15171C]" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 -ml-2 group">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-QiKrtBLGvjESmURRpH0XW0iiBEaJL2.png"
            alt="Gizem Bolayir"
            className={`h-8 transition-all duration-300 md:h-12 w-auto max-w-[140px] md:max-w-none object-contain ${
              isDark
                ? "brightness-100 group-hover:brightness-150 group-hover:hue-rotate-[40deg] group-hover:saturate-150"
                : "invert group-hover:opacity-70"
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive =
              item.href === "/about"
                ? pathname === "/about"
                : item.href === "/resume"
                  ? pathname === "/resume"
                  : item.href === "/blog"
                    ? pathname === "/blog"
                    : item.href === "/contact"
                      ? pathname === "/contact"
                      : false

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={item.onClick}
                className={`text-base transition-all duration-300 relative pb-1 ${
                  isDark
                    ? isActive
                      ? "text-[#B7FF87] font-semibold"
                      : "text-white font-medium hover:text-[#B7FF87]"
                    : isActive
                      ? "text-gray-900 font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gray-900 after:rounded-full"
                      : "text-gray-700 font-medium hover:font-bold hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors duration-500 ${
            isDark ? "text-white" : "text-[#15171C]"
          }`}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] w-72 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${isDark ? "bg-[#15171C]" : "bg-white"} shadow-xl`}
      >
        <nav className="flex flex-col p-6 gap-6">
          {navItems.map((item) => {
            const isActive =
              item.href === "/about"
                ? pathname === "/about"
                : item.href === "/resume"
                  ? pathname === "/resume"
                  : item.href === "/blog"
                    ? pathname === "/blog"
                    : item.href === "/contact"
                      ? pathname === "/contact"
                      : false

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  item.onClick?.(e)
                  setIsMobileMenuOpen(false)
                }}
                className={`text-lg transition-all duration-300 relative w-fit ${
                  isDark
                    ? isActive
                      ? "text-[#B7FF87] font-semibold"
                      : "text-white font-medium"
                    : isActive
                      ? "text-gray-900 font-bold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gray-900 after:rounded-full"
                      : "text-gray-700 font-medium"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 bg-black/30 z-[-1]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  )
}

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

  const isDark = false

  const handleWorkClick = (e: React.MouseEvent) => {
    if (isHomepage) {
      e.preventDefault()
      const workSection = document.getElementById("work")
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const handleBlogClick = (e: React.MouseEvent) => {
    if (isHomepage) {
      e.preventDefault()
      const blogSection = document.getElementById("blog")
      if (blogSection) blogSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { label: "Me", href: "/#hero", onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { label: "Works", href: "/#work", onClick: handleWorkClick },
    { label: "Experience", href: "/#experience" },
    { label: "Blog", href: "/#blog", onClick: handleBlogClick },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-transparent px-4 pt-6 md:pt-8"
    >
      <div className="mx-auto flex h-14 max-w-fit items-center gap-2 rounded-[5px] border border-[#e5e3ef] bg-white/90 px-2 shadow-[0_12px_32px_rgba(72,60,150,0.1)] backdrop-blur-md md:h-16 md:gap-3 md:px-3">
        {/* Logo */}
        <Link href="/#hero" className="sr-only">Gizem Bolayir</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive =
              item.href === "/about"
                ? pathname === "/about"
                : item.href === "/resume"
                  ? pathname === "/resume"
                  : item.label === "Blog"
                    ? pathname === "/blog"
                    : item.href === "/contact"
                      ? pathname === "/contact"
                      : false

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={item.onClick}
                className={`relative rounded-[4px] px-3 py-2 text-sm transition-colors ${
                  item.label === "Me"
                    ? "bg-[#4f3df1] font-semibold text-white"
                    : "font-medium text-[#292747] hover:bg-[#f0eff8]"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <a href="/resume" className="resume-control text-sm text-[#292747]">
            <span>Resume</span>
            <span aria-hidden="true">↓</span>
          </a>
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
                  : item.label === "Blog"
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

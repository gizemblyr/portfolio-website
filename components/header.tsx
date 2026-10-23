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
    { label: "Blog", href: "/#blog", onClick: handleBlogClick },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-transparent px-4 pt-6 md:pt-8"
    >
      <div className="mx-auto flex h-14 w-full items-center justify-end gap-2 border border-transparent bg-transparent px-0 md:h-16 md:w-fit md:justify-normal md:gap-3 md:rounded-[5px] md:border-[#e5e3ef] md:bg-white/90 md:px-3 md:shadow-[0_12px_32px_rgba(72,60,150,0.1)] md:backdrop-blur-md">
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
          className={`menu-trigger md:hidden rounded-[5px] border border-[#e5e3ef] bg-white/90 p-2 shadow-[0_12px_32px_rgba(72,60,150,0.1)] backdrop-blur-md transition-colors duration-500 ${
            isDark ? "text-white" : "text-[#15171C]"
          }`}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        aria-hidden={!isMobileMenuOpen}
        className={`mobile-drawer md:hidden fixed right-0 top-0 z-[200] h-[100dvh] w-[min(85vw,380px)] border-l border-[#e5e3ef] bg-white px-7 pb-8 pt-24 shadow-[-16px_0_40px_rgba(20,18,45,0.12)] transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute right-6 top-6 rounded-[5px] border border-[#e5e3ef] bg-white p-2 text-[#15171C] shadow-[0_8px_22px_rgba(72,60,150,0.08)]"
        >
          <X className="h-5 w-5" />
        </button>
        <nav className="flex flex-col items-start gap-5">
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
          <a
            href="/resume"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-medium text-gray-700 transition-all duration-300"
          >
            Resume
          </a>
        </nav>
      </div>

      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={() => setIsMobileMenuOpen(false)}
        className={`mobile-backdrop md:hidden fixed inset-0 z-[190] bg-black/30 transition-opacity duration-350 ${
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </header>
  )
}

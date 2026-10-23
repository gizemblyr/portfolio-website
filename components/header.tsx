"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Download, Menu, X } from "lucide-react"

const sectionItems = [
  { label: "Works", id: "work" },
  { label: "Blog", id: "blog" },
  { label: "About", id: "about" },
  { label: "Tools", id: "tools" },
  { label: "Contact", id: "contact" },
]

function scrollToSection(id: string) {
  const section = document.getElementById(id)
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function Header() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleExternalSectionChange = (event: Event) => {
      setActiveSection((event as CustomEvent<string | null>).detail)
    }
    window.addEventListener("portfolio-section-change", handleExternalSectionChange)
    return () => window.removeEventListener("portfolio-section-change", handleExternalSectionChange)
  }, [])

  useEffect(() => {
    const sections = sectionItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: "-25% 0px -55%", threshold: [0.15, 0.35, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    const handleScroll = () => {
      if (window.scrollY < 220) setActiveSection(null)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const goHome = () => {
    setActiveSection(null)
    setIsMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
    window.dispatchEvent(new CustomEvent("portfolio-section-change", { detail: null }))
  }

  const selectSection = (id: string) => {
    setActiveSection(id)
    setIsMobileMenuOpen(false)
    window.dispatchEvent(new CustomEvent("portfolio-section-change", { detail: id }))
    window.requestAnimationFrame(() => scrollToSection(id))
  }

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 px-4 pt-6 md:pt-8">
      <div className="site-header-shell mx-auto flex h-14 w-full items-center justify-between rounded-[5px] border border-[#e1dfe8] bg-white/90 px-4 shadow-[0_12px_32px_rgba(72,60,150,0.1)] backdrop-blur-md md:h-16 md:max-w-[1285px] md:px-12">
        <button type="button" onClick={goHome} className="brand-wordmark" aria-label="Return to homepage">
          giz<span>.</span>
        </button>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary navigation">
          {sectionItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => selectSection(item.id)}
              className={`header-nav-link ${activeSection === item.id ? "is-active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a href="/Gizem-Bolayir-CV.pdf" download="Gizem-Bolayir-CV.pdf" className="resume-control hidden md:inline-flex" aria-label="Download resume">
          <span>Resume</span>
          <Download aria-hidden="true" size={16} />
        </a>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="menu-trigger rounded-[5px] border border-[#e1dfe8] bg-white p-2 shadow-[0_8px_22px_rgba(72,60,150,0.08)] md:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <div className={`mobile-backdrop md:hidden ${isMobileMenuOpen ? "is-open" : ""}`} onClick={() => setIsMobileMenuOpen(false)} aria-hidden="true" />
      <aside className={`mobile-drawer md:hidden ${isMobileMenuOpen ? "is-open" : ""}`} aria-hidden={!isMobileMenuOpen}>
        <div className="flex items-center justify-between">
          <button type="button" onClick={goHome} className="brand-wordmark" aria-label="Return to homepage">giz<span>.</span></button>
          <button type="button" onClick={() => setIsMobileMenuOpen(false)} className="rounded-[5px] border border-[#e1dfe8] bg-white p-2" aria-label="Close menu"><X size={20} /></button>
        </div>
        <nav className="mt-14 flex flex-col items-start gap-6" aria-label="Mobile navigation">
          {sectionItems.map((item) => (
            <button key={item.id} type="button" onClick={() => selectSection(item.id)} className={`mobile-nav-link ${activeSection === item.id ? "is-active" : ""}`}>
              {item.label}
            </button>
          ))}
          <a href="/Gizem-Bolayir-CV.pdf" download="Gizem-Bolayir-CV.pdf" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-link">Resume</a>
        </nav>
      </aside>
    </header>
  )
}

"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
  const pathname = usePathname()
  const isMonevo = ["/monevo-case-study", "/foodpanda-case-study", "/yemekcom-case-study", "/newage-case-study", "/foodpay-case-study"].includes(pathname)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const navigationItems = isMonevo ? [
    { label: "Problem", id: "problem" },
    { label: "Goals", id: "goals" },
    { label: "Approach", id: "approach" },
    { label: "Research", id: "research" },
    { label: "Design", id: "design" },
    { label: "Testing", id: "testing" },
    { label: "Impact", id: "impact" },
    { label: "Next Step", id: "next-step" },
  ] : sectionItems
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleExternalSectionChange = (event: Event) => {
      setActiveSection((event as CustomEvent<string | null>).detail)
    }
    window.addEventListener("portfolio-section-change", handleExternalSectionChange)
    return () => window.removeEventListener("portfolio-section-change", handleExternalSectionChange)
  }, [])

  useEffect(() => {
    const sections = navigationItems
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
  }, [isMonevo])

  const goHome = () => {
    setActiveSection(null)
    setIsMobileMenuOpen(false)
    if (isMonevo) {
      window.location.href = "/#work"
      return
    }
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
    <header className={`site-header ${isMonevo ? "monevo-site-header" : ""}`}>
      <div className={`site-header-shell ${isMonevo ? "monevo-header-shell" : ""}`}>
        {isMonevo ? (
          <a className="monevo-header-back" href="/#work" aria-label="Back to home"><span aria-hidden="true">←</span><span>Back to home</span></a>
        ) : (
          <div className="header-brand-group">
            <button type="button" onClick={goHome} className="brand-wordmark" aria-label="Return to homepage">
              giz<span>.</span>
            </button>
          </div>
        )}

        {!isMonevo && <nav className="header-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => selectSection(item.id)}
              className={`header-nav-link ${activeSection === item.id ? "is-active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>}

        {!isMonevo && <a href="/Gizem-Bolayir-CV.pdf" download="Gizem-Bolayir-CV.pdf" className="resume-control" aria-label="Download resume">
          <span>Resume</span>
          <Download aria-hidden="true" size={16} />
        </a>}

        {!isMonevo && <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="menu-trigger"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>}
      </div>

      {!isMonevo && <>
      <div className={`mobile-backdrop ${isMobileMenuOpen ? "is-open" : ""}`} onClick={() => setIsMobileMenuOpen(false)} aria-hidden="true" />
      <aside className={`mobile-drawer ${isMobileMenuOpen ? "is-open" : ""}`} aria-hidden={!isMobileMenuOpen}>
        <div className="mobile-drawer-top">
          <button type="button" onClick={() => setIsMobileMenuOpen(false)} className="mobile-drawer-close" aria-label="Close menu"><X size={18} /></button>
        </div>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigationItems.map((item) => (
            <button key={item.id} type="button" onClick={() => selectSection(item.id)} className={`mobile-nav-link ${activeSection === item.id ? "is-active" : ""}`}>
              {item.label}
            </button>
          ))}
          <a href="/Gizem-Bolayir-CV.pdf" download="Gizem-Bolayir-CV.pdf" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-link mobile-resume-link">
            <span>Resume</span>
            <Download aria-hidden="true" size={16} />
          </a>
        </nav>
      </aside>
      </>}
    </header>
  )
}

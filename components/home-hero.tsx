"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ArrowDown, Download } from "lucide-react"

function InspectorText({
  as: Tag,
  className,
  children,
  delay,
}: {
  as: "h1" | "h2" | "p"
  className: string
  children: React.ReactNode
  delay: string
}) {
  const elementRef = useRef<HTMLElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [metrics, setMetrics] = useState({ width: 0, height: 0, right: 0, bottom: 0 })

  const updateMetrics = useCallback(() => {
    const element = elementRef.current
    if (!element) return
    const rect = element.getBoundingClientRect()
    const heroBounds = element.closest(".home-hero")?.getBoundingClientRect()
    setMetrics({
      width: Math.round(rect.width),
      height: Math.round(rect.height),
      right: Math.max(0, Math.round((heroBounds?.right ?? rect.right) - rect.right)),
      bottom: Math.max(0, Math.round((heroBounds?.bottom ?? rect.bottom) - rect.bottom)),
    })
  }, [])

  useEffect(() => {
    if (!isHovered) return
    updateMetrics()
    const observer = new ResizeObserver(updateMetrics)
    const element = elementRef.current
    if (element) observer.observe(element)
    window.addEventListener("resize", updateMetrics)
    return () => {
      observer.disconnect()
      window.removeEventListener("resize", updateMetrics)
    }
  }, [isHovered, updateMetrics])

  return (
    <div
      className={`hero-line ${isHovered ? "is-inspecting" : ""}`}
      style={{ "--hero-delay": delay } as React.CSSProperties}
    >
      <div className="hero-line-mask">
        <Tag
          ref={elementRef}
          className={className}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
        >
          {children}
        </Tag>
      </div>
      <div
        className="hero-inspector"
        aria-hidden="true"
        style={{
          "--hero-right-distance": `${metrics.right}px`,
          "--hero-bottom-distance": `${metrics.bottom}px`,
        } as React.CSSProperties}
      >
        <span className="hero-inspector-label">&lt;{Tag} className=&quot;{className}&quot;&gt;</span>
        <span>{metrics.width}px × {metrics.height}px</span>
        <span className="hero-inspector-measure measure-right">{metrics.right}px</span>
        <span className="hero-inspector-measure measure-bottom">{metrics.bottom}px</span>
        <i className="hero-inspector-guide guide-right" />
        <i className="hero-inspector-guide guide-bottom" />
        <i className="hero-inspector-handle handle-top-left" />
        <i className="hero-inspector-handle handle-top-right" />
        <i className="hero-inspector-handle handle-bottom-left" />
        <i className="hero-inspector-handle handle-bottom-right" />
      </div>
    </div>
  )
}

export function HomeHero() {
  const handleViewProjects = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="home-hero">
      <div className="home-hero-grid" aria-hidden="true" />
      <div className="home-hero-content">
        <div className="hero-copy">
          <InspectorText as="h1" className="hero-title" delay="0ms">Hi, I&apos;m Gizem.</InspectorText>
          <InspectorText as="h2" className="hero-role" delay="110ms">Product Designer &amp; Builder.</InspectorText>
          <InspectorText as="p" className="hero-description" delay="220ms">Sr. Product Designer with a Computer Engineering background.</InspectorText>
        </div>
        <button type="button" className="hero-work-link" onClick={handleViewProjects}>
          <span>SEE MY WORK</span>
          <span className="hero-arrow-button"><ArrowDown aria-hidden="true" /></span>
        </button>
      </div>
    </section>
  )
}

export function WorkedWithMarquee() {
  const brands = ["Delivery Hero", "Yemeksepeti", "Yemek.com", "NewAge", "Monevo", "AgeSA", "Doğuş Teknoloji"]

  return (
    <section className="worked-with" aria-label="Worked with">
      <div className="worked-with-header">TRUSTED BY TEAMS AT</div>
      <div className="worked-with-viewport">
        <div className="worked-with-track">
          {[...brands, ...brands].map((brand, index) => (
            <span className="worked-with-brand" key={`${brand}-${index}`}>{brand}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ResumeControl() {
  return (
    <a href="/resume" className="resume-control">
      <span>Resume</span>
      <Download aria-hidden="true" />
    </a>
  )
}

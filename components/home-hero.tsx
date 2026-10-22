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
  const [metrics, setMetrics] = useState({ width: 0, height: 0, marginTop: "0px", marginBottom: "0px" })

  const updateMetrics = useCallback(() => {
    const element = elementRef.current
    if (!element) return
    const rect = element.getBoundingClientRect()
    const styles = window.getComputedStyle(element)
    setMetrics({
      width: Math.round(rect.width),
      height: Math.round(rect.height),
      marginTop: styles.marginTop,
      marginBottom: styles.marginBottom,
    })
  }, [])

  useEffect(() => {
    if (!isHovered) return
    updateMetrics()
    window.addEventListener("resize", updateMetrics)
    return () => window.removeEventListener("resize", updateMetrics)
  }, [isHovered, updateMetrics])

  return (
    <div
      className={`hero-line ${isHovered ? "is-inspecting" : ""}`}
      style={{ "--hero-delay": delay } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Tag ref={elementRef} className={className}>
        {children}
      </Tag>
      <div className="hero-inspector" aria-hidden="true">
        <span className="hero-inspector-label">&lt;{Tag} className=&quot;{className}&quot;&gt;</span>
        <span>{metrics.width}px × {metrics.height}px</span>
        <span>margin {metrics.marginTop} / {metrics.marginBottom}</span>
        <i className="hero-inspector-guide guide-top" />
        <i className="hero-inspector-guide guide-bottom" />
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

export function ResumeControl() {
  return (
    <a href="/resume" className="resume-control">
      <span>Resume</span>
      <Download aria-hidden="true" />
    </a>
  )
}

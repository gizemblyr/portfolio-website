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
  const brands = [
    {
      name: "Delivery Hero",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%2022%2C%202026%2C%2008_08_23%20PM-5%202-6ScrBXFdstckMSbfUeVUejfPMyMMdn.png",
    },
    {
      name: "Yemeksepeti",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%2022%2C%202026%2C%2008_08_26%20PM-7%202-rWN48QucSmLO3AL85o8nC2BqWpiMF0.png",
    },
    {
      name: "NewAge",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%2022%2C%202026%2C%2008_08_22%20PM-4%202-Y1csMqPI0UAltJGU1JqHxZQOYMYPhf.png",
    },
    {
      name: "AgeSA",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Minimal%20Gray%20AGESA%20Logo%20on%20Off-White%202-OP0MbAPdIIcaN9mrEXIrnOX7L1wP1l.png",
    },
    {
      name: "Doğuş Teknoloji",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%2022%2C%202026%2C%2008_08_21%20PM-3%202-xBfNO1f18qYo81Z4M3mhATAZWiMz9t.png",
    },
  ]

  return (
    <section className="worked-with" aria-label="Selected companies">
      <div className="worked-with-viewport">
        <div className="worked-with-track">
          {[...brands, ...brands].map((brand, index) => (
            <div className="worked-with-brand" key={`${brand.name}-${index}`}>
              <img src={brand.src} alt={brand.name} />
            </div>
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

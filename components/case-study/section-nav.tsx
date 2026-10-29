"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"

type Item = { id: string; label: string }

const height = (selector: string) => document.querySelector<HTMLElement>(selector)?.offsetHeight ?? 0

// Section menu: sticks under the header, highlights the section being read and
// slides a 1px accent line under the active tab.
export function SectionNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id)
  const [stuck, setStuck] = useState(false)
  const sentinel = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const indicator = useRef<HTMLSpanElement>(null)
  const placed = useRef(false)

  // Stuck once the spot the nav started from has scrolled under the header.
  useEffect(() => {
    const el = sentinel.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting && entry.boundingClientRect.top < window.innerHeight / 2),
      { rootMargin: `-${height(".cs-header")}px 0px 0px 0px` },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Active section: the first one whose content reaches the band just below the nav.
  useEffect(() => {
    const top = height(".cs-header") + height(".cs-section-nav") + 48
    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        const first = items.find((item) => visible.has(item.id))
        if (first) setActive(first.id)
      },
      { rootMargin: `-${top}px 0px -50% 0px` },
    )
    for (const item of items) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [items])

  // Move the accent line under the active tab, and keep that tab in view on mobile.
  useLayoutEffect(() => {
    const place = () => {
      const link = track.current?.querySelector<HTMLAnchorElement>("a.is-active")
      const line = indicator.current
      if (!link || !line) return
      line.style.width = `${link.offsetWidth}px`
      line.style.transform = `translateX(${link.offsetLeft}px)`
      // Only slide between tabs, not in from the edge on first paint.
      if (!placed.current) {
        line.style.transition = "none"
        line.getBoundingClientRect()
        line.style.transition = ""
        placed.current = true
      }
    }
    place()
    const scroller = track.current
    const link = scroller?.querySelector<HTMLAnchorElement>("a.is-active")
    if (scroller && link && scroller.scrollWidth > scroller.clientWidth) {
      const left = link.offsetLeft
      const right = left + link.offsetWidth
      const padding = 20
      if (left < scroller.scrollLeft + padding || right > scroller.scrollLeft + scroller.clientWidth - padding) {
        scroller.scrollTo({ left: left - padding, behavior: "smooth" })
      }
    }
    window.addEventListener("resize", place)
    return () => window.removeEventListener("resize", place)
  }, [active, stuck])

  return (
    <>
      <div ref={sentinel} className="cs-section-nav-sentinel" aria-hidden="true" />
      <nav className={stuck ? "cs-section-nav is-stuck" : "cs-section-nav"} aria-label="Case study sections">
        <div className="cs-section-nav-inner">
          <div ref={track} className="cs-section-nav-track">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={item.id === active ? "is-active" : undefined}
                aria-current={item.id === active ? "location" : undefined}
                onClick={() => setActive(item.id)}
              >
                {item.label}
              </a>
            ))}
            <span ref={indicator} className="cs-section-nav-indicator" aria-hidden="true" />
          </div>
        </div>
      </nav>
    </>
  )
}

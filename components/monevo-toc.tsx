'use client'

import { useEffect, useState } from "react"

const items = [
  ["overview", "Overview"],
  ["research", "Research"],
  ["design", "Design"],
  ["results", "Results"],
] as const

export function MonevoToc() {
  const [active, setActive] = useState("overview")

  useEffect(() => {
    const sections = items.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-20% 0px -68% 0px", threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.replaceState(null, "", `#${id}`)
  }

  return (
    <header className="monevo-case-header" aria-label="Case study navigation">
      <div className="monevo-case-header-inner">
        <a className="monevo-case-back" href="/" aria-label="Back to portfolio">
          <span aria-hidden="true">←</span><span>Back</span>
        </a>
        <nav aria-label="Project sections">
          {items.map(([id, label]) => (
            <a className={active === id ? "is-active" : ""} href={`#${id}`} key={id} onClick={scrollToSection(id)}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

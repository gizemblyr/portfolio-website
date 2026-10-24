'use client'

import { useEffect, useState } from "react"

const items = [
  ["overview", "Overview"],
  ["research", "Research & insights"],
  ["design", "Design strategy"],
  ["results", "Results"],
] as const

export function MonevoToc() {
  const [active, setActive] = useState("overview")

  useEffect(() => {
    const sections = items.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-18% 0px -65% 0px", threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <aside className="monevo-toc" aria-label="On this page">
      <p>On this page</p>
      <nav>
        {items.map(([id, label]) => (
          <a className={active === id ? "is-active" : ""} href={`#${id}`} key={id}>
            <span aria-hidden="true" />{label}
          </a>
        ))}
      </nav>
    </aside>
  )
}

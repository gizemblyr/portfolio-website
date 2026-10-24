"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "problem", label: "Problem" },
  { id: "goals", label: "Goals" },
  { id: "approach", label: "Approach" },
  { id: "research", label: "Research" },
  { id: "design", label: "Design" },
  { id: "testing", label: "Testing" },
  { id: "impact", label: "Impact" },
  { id: "next-step", label: "Next Step" },
]

export function MonevoToc() {
  const [activeId, setActiveId] = useState("problem")

  useEffect(() => {
    const headings = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]?.target.id) setActiveId(visible[0].target.id)
      },
      { rootMargin: "-92px 0px -58% 0px", threshold: 0 },
    )

    headings.forEach((heading) => observer.observe(heading))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="monevo-project-header">
      <div className="monevo-project-header-inner">
        <a className="monevo-project-back" href="/#work" aria-label="Back to Works">
          <span aria-hidden="true">←</span>
        </a>
        <nav aria-label="Monevo case study sections">
          {sections.map((section) => (
            <a
              key={section.id}
              className={activeId === section.id ? "is-active" : ""}
              href={`#${section.id}`}
              onClick={(event) => {
                event.preventDefault()
                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth", block: "start" })
                window.history.replaceState(null, "", `#${section.id}`)
              }}
            >
              {section.label}
            </a>
          ))}
        </nav>
        <span className="monevo-project-header-spacer" aria-hidden="true" />
      </div>
    </header>
  )
}

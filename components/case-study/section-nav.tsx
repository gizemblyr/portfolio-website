"use client"

import { useEffect, useState } from "react"

type Item = { id: string; label: string }

// Highlights the section currently under the top part of the viewport.
export function SectionNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id)

  useEffect(() => {
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
      { rootMargin: "0px 0px -60% 0px" },
    )
    for (const item of items) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [items])

  return (
    <nav className="cs-section-nav" aria-label="Case study sections">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={item.id === active ? "is-active" : undefined}
          aria-current={item.id === active ? "location" : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}

"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const projects = [
  {
    number: "01",
    meta: "FINTECH · MOBILE",
    title: "Monevo — Financial Habit",
    description: "Helping users build healthier financial habits through personalized, goal-oriented journeys.",
    href: "/monevo-case-study",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/monevo.png-dWUXfBOpNkxq0giVRxLczd9VnFs3lz.jpeg",
    alt: "Monevo Financial Habit mobile app interfaces",
    layout: "feature",
  },
  {
    number: "02",
    meta: "B2B · PLATFORM",
    title: "Foodpanda Partner — Vendor Portal",
    description: "Streamlining menu management for restaurant partners with clearer, faster workflows.",
    href: "/foodpanda-case-study",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu.png-cGs1WwFpzq2yEwyJE2zCa92kTCxmJR.jpeg",
    alt: "Foodpanda Partner vendor portal interface",
    layout: "column",
  },
  {
    number: "03",
    meta: "INSURANCE · ENTERPRISE",
    title: "VDF NewAge — Internal Platform",
    description: "Turning complex insurance operations into clear, status-driven experiences for teams.",
    href: "/newage-case-study",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vdf%20newage.png-yjPbRBxE05YQl5DUGcdn9lQR5aMcXS.jpeg",
    alt: "VDF NewAge internal insurance platform dashboard",
    layout: "column",
  },
  {
    number: "04",
    meta: "FINTECH · B2B",
    title: "FoodPay — Yemeksepeti",
    description: "A secure payment and virtual POS experience designed end to end for merchants.",
    href: "/foodpay-case-study",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yemekpay%201.png-fghqf84ooMdWHNSVVL12dSij3L3eRf.jpeg",
    alt: "FoodPay payment platform interface",
    layout: "feature",
  },
  {
    number: "05",
    meta: "CONTENT · MOBILE",
    title: "Yemek.com",
    description: "A clearer recipe discovery experience built around useful moments and everyday cooking.",
    href: "/yemekcom-case-study",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yemekcom.png-GOKRIIyWcjkOh4nPiVUo3L49DR9ri7.jpeg",
    alt: "Yemek.com recipe app interfaces",
    layout: "compact",
  },
]

function ProjectCover({ project }: { project: (typeof projects)[number] }) {
  const [pointer, setPointer] = useState({ x: 50, y: 50 })

  return (
    <Link
      href={project.href}
      className="editorial-project-cover"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        setPointer({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 })
      }}
      style={{ "--pointer-x": `${pointer.x}%`, "--pointer-y": `${pointer.y}%` } as React.CSSProperties}
      aria-label={`View ${project.title} case study`}
    >
      <Image src={project.image} alt={project.alt} fill sizes="(max-width: 767px) 100vw, 90vw" />
      <span className="editorial-project-cursor">View project ↗</span>
    </Link>
  )
}

function Project({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className={`editorial-project editorial-project-${project.layout}`}>
      <ProjectCover project={project} />
      <div className="editorial-project-info">
        <p className="editorial-project-meta">{project.number} / {project.meta}</p>
        <h3>{project.title}</h3>
        <p className="editorial-project-description">{project.description}</p>
      </div>
    </article>
  )
}

export function EditorialWork() {
  return (
    <section id="work" className="editorial-work" aria-labelledby="recent-work-title">
      <div className="editorial-work-inner">
        <header className="editorial-work-heading">
          <h2 id="recent-work-title">Some recent work</h2>
          <p>from full-time roles</p>
        </header>
        <div className="editorial-projects">
          {projects.map((project) => (
            <Project key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef, useState } from "react"

const workMethods = [
  {
    number: "01",
    title: "Understand the system",
    description:
      "I look at the product as a whole users, business goals, constraints, and how everything connects.",
    visual: "system",
  },
  {
    number: "02",
    title: "Make complexity easier to use",
    description:
      "I simplify dense flows, edge cases, and information-heavy experiences without losing what matters.",
    visual: "flow",
  },
  {
    number: "03",
    title: "Design with shipping in mind",
    description:
      "I work close to implementation, using reusable systems, prototypes, and collaboration with engineers to move ideas forward.",
    visual: "components",
  },
] as const

function MethodVisual({ type }: { type: (typeof workMethods)[number]["visual"] }) {
  if (type === "system") {
    return (
      <svg className="how-i-work-visual how-i-work-system" viewBox="0 0 280 150" aria-hidden="true">
        <g className="how-i-work-lines">
          <path d="M36 96 88 46 143 94 202 40 246 79" />
          <path d="M88 46 112 122 202 40 224 120" />
        </g>
        <g className="how-i-work-nodes">
          <circle cx="36" cy="96" r="6" /><circle cx="88" cy="46" r="8" /><circle cx="143" cy="94" r="6" />
          <circle cx="202" cy="40" r="8" /><circle cx="246" cy="79" r="6" /><circle cx="112" cy="122" r="5" /><circle cx="224" cy="120" r="5" />
        </g>
      </svg>
    )
  }

  if (type === "flow") {
    return (
      <svg className="how-i-work-visual how-i-work-flow" viewBox="0 0 280 150" aria-hidden="true">
        <g className="how-i-work-flow-messy">
          <path d="M24 40h48v32H40v34h58V70h45v46h53V84h60" />
          <path d="M24 112h28M88 24v28M132 36h24M180 26v38M240 48v40" />
          <circle cx="24" cy="40" r="5" /><circle cx="72" cy="72" r="5" /><circle cx="98" cy="116" r="5" /><circle cx="143" cy="70" r="5" /><circle cx="196" cy="116" r="5" /><circle cx="256" cy="84" r="5" />
        </g>
        <path className="how-i-work-flow-clean" d="M32 76h76l28-28 34 28h78" />
        <g className="how-i-work-clean-nodes"><circle cx="32" cy="76" r="7" /><circle cx="136" cy="48" r="7" /><circle cx="170" cy="76" r="7" /><circle cx="248" cy="76" r="7" /></g>
      </svg>
    )
  }

  return (
    <svg className="how-i-work-visual how-i-work-components" viewBox="0 0 280 150" aria-hidden="true">
      <g className="how-i-work-rough"><rect x="34" y="46" width="64" height="50" rx="4" /><rect x="108" y="28" width="54" height="82" rx="4" /><rect x="172" y="54" width="74" height="38" rx="4" /></g>
      <g className="how-i-work-component"><rect x="72" y="30" width="136" height="88" rx="12" /><path d="M92 54h54M92 70h92M92 88h62" /></g>
      <g className="how-i-work-refined"><rect x="48" y="44" width="184" height="62" rx="9" /><path d="M68 66h54M68 82h94M180 66h28M180 82h18" /></g>
    </svg>
  )
}

export function HowIWork() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { rootMargin: "0px 0px -18% 0px", threshold: 0.01 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`how-i-work${isActive ? " is-active" : ""}`} aria-labelledby="how-i-work-title">
      <div className="how-i-work-inner">
        <header className="how-i-work-heading">
          <h2 id="how-i-work-title">How I Work</h2>
          <p className="how-i-work-intro">A systems-minded approach to turning complex product problems into clear, shippable experiences.</p>
        </header>
        <div className="how-i-work-grid">
          {workMethods.map((method) => (
            <article className="how-i-work-card" key={method.number}>
              <div className="how-i-work-card-top"><span>{method.number}</span><span className="how-i-work-dot" /></div>
              <MethodVisual type={method.visual} />
              <div className="how-i-work-card-copy"><h3>{method.title}</h3><p>{method.description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const workMethods = [
  {
    number: "01",
    title: "Understand the system",
    description:
      "I look at the product as a whole — users, business goals, constraints, and how everything connects.",
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
        <defs><radialGradient id="system-sphere" cx="32%" cy="26%"><stop offset="0" stopColor="#b7afff" /><stop offset=".55" stopColor="#6d5ce7" /><stop offset="1" stopColor="#5042bc" /></radialGradient></defs>
        <g className="how-i-work-foundation" aria-hidden="true"><path d="M28 116 140 82 252 116 140 148Z" /><path d="M52 110 140 136 228 110M76 103 140 122 204 103M100 96 140 108 180 96" /><path d="M76 103 76 129M100 96 100 133M124 89 124 140M156 89 156 140M180 96 180 133M204 103 204 129" /></g>
        <g className="how-i-work-lines">
          <path d="M36 96 88 46 143 94 202 40 246 79" />
          <path d="M88 46 112 122 202 40 224 120" />
        </g>
        <g className="how-i-work-nodes">
          <g className="how-i-work-sphere"><circle cx="36" cy="96" r="6" /></g><g className="how-i-work-sphere"><circle cx="88" cy="46" r="8" /></g><g className="how-i-work-sphere"><circle cx="143" cy="94" r="6" /></g>
          <g className="how-i-work-sphere"><circle cx="202" cy="40" r="8" /></g><g className="how-i-work-sphere"><circle cx="246" cy="79" r="6" /></g><g className="how-i-work-sphere"><circle cx="112" cy="122" r="5" /></g><g className="how-i-work-sphere"><circle cx="224" cy="120" r="5" /></g>
        </g>
      </svg>
    )
  }

  if (type === "flow") {
    return (
      <svg className="how-i-work-visual how-i-work-flow" viewBox="0 0 280 150" aria-hidden="true">
        <defs><linearGradient id="flow-block" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8f83ed" /><stop offset="1" stopColor="#6255ce" /></linearGradient></defs>
        <g className="how-i-work-foundation" aria-hidden="true"><path d="M28 116 140 82 252 116 140 148Z" /><path d="M52 110 140 136 228 110M76 103 140 122 204 103M100 96 140 108 180 96" /><path d="M76 103 76 129M100 96 100 133M124 89 124 140M156 89 156 140M180 96 180 133M204 103 204 129" /></g>
        <g className="how-i-work-flow-messy">
          <path d="M24 40h48v32H40v34h58V70h45v46h53V84h60" />
          <path d="M24 112h28M88 24v28M132 36h24M180 26v38M240 48v40" />
          <g className="how-i-work-blocks"><path d="M18 37 24 34 30 37 24 40Z M24 40v7l6-3v-7Z M18 37v7l6 3v-7Z" /><path d="M66 69 72 66 78 69 72 72Z M72 72v7l6-3v-7Z M66 69v7l6 3v-7Z" /><path d="M92 113 98 110 104 113 98 116Z M98 116v7l6-3v-7Z M92 113v7l6 3v-7Z" /><path d="M137 67 143 64 149 67 143 70Z M143 70v7l6-3v-7Z M137 67v7l6 3v-7Z" /><path d="M190 113 196 110 202 113 196 116Z M196 116v7l6-3v-7Z M190 113v7l6 3v-7Z" /><path d="M250 81 256 78 262 81 256 84Z M256 84v7l6-3v-7Z M250 81v7l6 3v-7Z" /></g>
        </g>
        <path className="how-i-work-flow-clean" d="M32 76h76l28-28 34 28h78" />
        <g className="how-i-work-clean-nodes"><circle cx="32" cy="76" r="7" /><circle cx="136" cy="48" r="7" /><circle cx="170" cy="76" r="7" /><circle cx="248" cy="76" r="7" /></g>
      </svg>
    )
  }

  return (
    <svg className="how-i-work-visual how-i-work-components" viewBox="0 0 280 150" aria-hidden="true">
      <g className="how-i-work-foundation" aria-hidden="true"><path d="M28 116 140 82 252 116 140 148Z" /><path d="M52 110 140 136 228 110M76 103 140 122 204 103M100 96 140 108 180 96" /><path d="M76 103 76 129M100 96 100 133M124 89 124 140M156 89 156 140M180 96 180 133M204 103 204 129" /></g>
      <g className="how-i-work-rough"><path d="M34 46 43 40h64l-9 6v50l9-6H34Z" /><path d="M108 28 117 22h54l-9 6v82l9-6h-63Z" /><path d="M172 54 181 48h74l-9 6v38l9-6h-83Z" /></g>
      <g className="how-i-work-component"><rect x="72" y="30" width="136" height="88" rx="12" /><path d="M92 54h54M92 70h92M92 88h62" /></g>
      <g className="how-i-work-refined"><rect x="48" y="44" width="184" height="62" rx="9" /><path d="M68 66h54M68 82h94M180 66h28M180 82h18" /></g>
    </svg>
  )
}

export function HowIWork() {
  return (
    <section className="how-i-work" aria-labelledby="how-i-work-title">
      <div className="how-i-work-inner">
        <header className="how-i-work-heading">
          <p className="how-i-work-eyebrow">Approach</p>
          <h2 id="how-i-work-title">How I Work</h2>
          <p className="how-i-work-intro">A calm, systems-minded approach from first question to shipped experience.</p>
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

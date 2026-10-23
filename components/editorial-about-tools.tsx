"use client"

import { useState } from "react"
import { ArrowUpRight, Copy, Download } from "lucide-react"
import icons from "simple-icons/icons.json"

const tools = [
  ["Figma", "figma"], ["Sketch", "sketch"], ["Adobe XD", "adobexd"], ["Miro", "miro"], ["Maze", "maze"],
  ["Jira", "jira"], ["Confluence", "confluence"], ["Postman", "postman"], ["ChatGPT", "openai"], ["Claude", "anthropic"],
  ["Cursor", "cursor"], ["Vercel v0", "v0"], ["Lovable", "lovable"], ["HTML5", "html5"], ["CSS3", "css3"],
  ["JavaScript", "javascript"], ["React", "react"], ["SQL", "postgresql"],
] as const

const capabilities = [
  "Product Design", "Wireframing", "Prototyping", "Information Architecture", "Journey Mapping", "User Research",
  "User Interviews", "Usability Testing", "A/B Testing", "Design Systems", "Visual Design", "Data-Driven Optimization",
  "Coded Prototyping", "AI-assisted Workflows", "HTML / CSS", "JavaScript", "React Fundamentals", "SQL",
  "Functional Testing", "Cross-Platform UI Testing",
]

const email = "gizembolayir@gmail.com"
const iconAliases: Record<string, string> = { openai: "OpenAI", anthropic: "Claude", v0: "Vercel", postgresql: "PostgreSQL", adobexd: "Adobe XD" }
const toolIcons = new Map((icons as Array<{ title: string; path: string; hex: string }>).map((icon) => [icon.title, icon]))

export function EditorialAboutTools() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <section id="about" className="editorial-about-section" aria-label="About Me">
        <div className="editorial-section-inner editorial-about-layout">
          <div className="editorial-about-copy">
            <h2>About Me</h2>
            <div className="editorial-about-body">
              <p>Hi! I&apos;m a Product Designer who bridges the gap between logic and emotion, creating meaningful experiences through structured thinking and human empathy.</p>
              <p>With a background in Computer Engineering, I bring a systems-thinking mindset to product design — combining technical understanding with a strong focus on human needs.</p>
              <p>I&apos;ve worked across consumer and B2B products, from financial habits and insurance workflows to food and content experiences. I enjoy turning complex requirements into intuitive products and increasingly use prototyping, AI, and code as part of my design workflow.</p>
            </div>

            <div className="editorial-about-actions">
              <a className="editorial-action-primary" href="/Gizem-Bolayir-CV.pdf" download="Gizem-Bolayir-CV.pdf"><span>Resume</span><Download aria-hidden="true" size={14} /></a>
              <a className="editorial-action-secondary" href="https://www.linkedin.com/in/gizembolayir/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" size={14} /></a>
              <a className="editorial-action-secondary" href="https://github.com/gizembolayir" target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" size={14} /></a>
              <a className="editorial-action-secondary" href="https://medium.com/@gizembolayir" target="_blank" rel="noreferrer">Medium <ArrowUpRight aria-hidden="true" size={14} /></a>
              <a className="editorial-action-secondary" href="https://gizembolayir.substack.com" target="_blank" rel="noreferrer">Substack <ArrowUpRight aria-hidden="true" size={14} /></a>
            </div>
          </div>
          <div className="editorial-about-portrait">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778276557460-xpHkD2tqWuLyJDUM3u7nwkGzBvOKk3.png" alt="Gizem Bolayir in profile" />
          </div>
        </div>
      </section>

      <section id="tools" className="editorial-tools-section" aria-label="Tools and capabilities">
        <div className="editorial-section-inner">
          <h2>Tools &amp; Capabilities</h2>
          <p className="editorial-tools-intro">Design, prototyping, AI, and development tools I use to move from idea to working product.</p>
          <div className="editorial-tools-marquee" aria-label="Tools I use">
            <div className="editorial-tools-track">
              {[...tools, ...tools].map(([label, slug], index) => {
                const key = `${slug}-${index}`
              const icon = toolIcons.get(iconAliases[slug] ?? label)
                return <span className="editorial-tool" key={key}>
                {icon ? <svg className="editorial-tool-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={icon.path} fill={`#${icon.hex}`} /></svg> : null}
                <span>{label}</span>
              </span>
              })}
            </div>
          </div>
          <div className="editorial-capabilities" aria-label="Capabilities">
            {capabilities.map((capability) => <span className="editorial-capability" key={capability}>{capability}</span>)}
          </div>
        </div>
      </section>

      <section id="contact" className="editorial-connect-section" aria-label="Let's connect">
        <div className="editorial-section-inner editorial-connect-inner">
          <div>
            <h2>Contact Me</h2>
            <p className="editorial-connect-copy">If you&apos;d like to collaborate on a project, discuss ideas, or explore potential partnerships, feel free to reach out using the contact details below.</p>
          </div>
          <div className="editorial-connect-actions">
            <a href="https://www.linkedin.com/in/gizembolayir/" target="_blank" rel="noreferrer"><img className="editorial-social-icon" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Social-3-VoChMfnRBlMuqMePOmlKYlpcPNWT4Y.svg" alt="" aria-hidden="true" /><span><strong>LinkedIn</strong><small>linkedin.com/in/gizembolayir</small></span><ArrowUpRight aria-hidden="true" size={16} /></a>
            <button type="button" onClick={copyEmail}><img className="editorial-social-icon" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Social-2-7VR4fD9QZ8cuPHNqC1Vxh5XnfFtL9k.svg" alt="" aria-hidden="true" /><span><strong>Email</strong><small>{copied ? "Email copied" : email}</small></span>{copied ? <span className="editorial-copied">Copied</span> : <Copy aria-hidden="true" size={14} />}</button>
          </div>
        </div>
      </section>
    </>
  )
}

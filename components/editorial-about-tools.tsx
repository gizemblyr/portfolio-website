"use client"

import { useState } from "react"
import { ArrowUpRight, Copy, Download } from "lucide-react"
import * as simpleIcons from "simple-icons"

const tools = [
  ["Figma", "figma"], ["Sketch", "sketch"], ["Miro", "miro"], ["Maze", "maze"],
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
type BrandIcon = { title: string; path: string; hex: string }
const iconAliases: Record<string, string> = { openai: "ChatGPT", anthropic: "Claude", v0: "Vercel", postgresql: "PostgreSQL", css3: "CSS" }
const providedToolIcons: Record<string, string> = { openai: "/icons/chatgpt.svg", figma: "/icons/figma.svg", lovable: "/icons/lovable.svg", css3: "/icons/css.svg" }
const socialIcons: Record<string, string> = { LinkedIn: "/icons/linkedin.svg", GitHub: "/icons/github.svg", Medium: "/icons/medium.png", Substack: "/icons/substack.svg" }
const toolIcons = new Map((Object.values(simpleIcons) as BrandIcon[]).map((icon) => [icon.title, icon]))
const fallbackIcons: Record<string, { mark: string; color: string }> = {
  ChatGPT: { mark: "✦", color: "#10a37f" },
  Lovable: { mark: "L", color: "#ff5c35" },
  "Adobe XD": { mark: "Xd", color: "#ff61f6" },
}

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
              <p>With a background in Computer Engineering, I bring a systems-thinking mindset to product design combining technical understanding with a strong focus on human needs.</p>
              <p>I&apos;ve worked across consumer and B2B products, from financial habits and insurance workflows to food and content experiences. I enjoy turning complex requirements into intuitive products and increasingly use prototyping, AI, and code as part of my design workflow.</p>
            </div>

            <div className="editorial-about-actions">
              <a className="editorial-action-primary" href="/Gizem-Bolayir-CV.pdf" download="Gizem-Bolayir-CV.pdf"><span>Resume</span><Download aria-hidden="true" size={14} /></a>
              <a className="editorial-action-secondary" href="https://www.linkedin.com/in/gizembolayir/" target="_blank" rel="noreferrer"><img className="editorial-action-icon" src={socialIcons.LinkedIn} alt="" aria-hidden="true" />LinkedIn <ArrowUpRight aria-hidden="true" size={14} /></a>
              <a className="editorial-action-secondary" href="https://github.com/gizemblyr" target="_blank" rel="noreferrer"><img className="editorial-action-icon" src={socialIcons.GitHub} alt="" aria-hidden="true" />GitHub <ArrowUpRight aria-hidden="true" size={14} /></a>
              <a className="editorial-action-secondary" href="https://medium.com/@gizembolayir" target="_blank" rel="noreferrer"><img className="editorial-action-icon" src={socialIcons.Medium} alt="" aria-hidden="true" />Medium <ArrowUpRight aria-hidden="true" size={14} /></a>
              <a className="editorial-action-secondary" href="https://substack.com/@gizemblyr" target="_blank" rel="noreferrer"><img className="editorial-action-icon" src={socialIcons.Substack} alt="" aria-hidden="true" />Substack <ArrowUpRight aria-hidden="true" size={14} /></a>
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
              const iconName = iconAliases[slug] ?? label
              const icon = toolIcons.get(iconName)
              const fallback = fallbackIcons[iconName]
                return <span className="editorial-tool" key={key}>
                {providedToolIcons[slug] ? <img className="editorial-tool-icon" src={providedToolIcons[slug]} alt="" aria-hidden="true" /> : icon ? <svg className="editorial-tool-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={icon.path} fill={`#${icon.hex}`} /></svg> : fallback ? <span className="editorial-tool-fallback" style={{ color: fallback.color }} aria-hidden="true">{fallback.mark}</span> : null}
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
            <a href="https://www.linkedin.com/in/gizembolayir/" target="_blank" rel="noreferrer"><img className="editorial-social-icon" src="/icons/linkedin-purple.png" alt="" aria-hidden="true" /><span><strong>LinkedIn</strong><small>linkedin.com/in/gizembolayir</small></span><ArrowUpRight aria-hidden="true" size={16} /></a>
            <button type="button" onClick={copyEmail}><img className="editorial-social-icon" src="/icons/gmail-purple.png" alt="" aria-hidden="true" /><span><strong>Email</strong><small>{copied ? "Email copied" : email}</small></span>{copied ? <span className="editorial-copied">Copied</span> : <Copy aria-hidden="true" size={14} />}</button>
          </div>
        </div>
      </section>
    </>
  )
}

"use client"

import { useState } from "react"
import { ArrowUpRight, Copy, Download } from "lucide-react"
// Named imports only: `import * as` pulled all ~3,000 icons into the bundle.
import {
  siClaude, siConfluence, siCursor, siHtml5, siJavascript, siJira, siMaze, siMiro,
  siPostgresql, siPostman, siReact, siSketch, siVercel, type SimpleIcon,
} from "simple-icons"

// icon: a file in /public or a simple-icons glyph.
const tools: { label: string; icon: string | SimpleIcon }[] = [
  { label: "Figma", icon: "/icons/figma.svg" },
  { label: "Sketch", icon: siSketch },
  { label: "Miro", icon: siMiro },
  { label: "Maze", icon: siMaze },
  { label: "Jira", icon: siJira },
  { label: "Confluence", icon: siConfluence },
  { label: "Postman", icon: siPostman },
  { label: "ChatGPT", icon: "/icons/chatgpt.svg" },
  { label: "Claude", icon: siClaude },
  { label: "Cursor", icon: siCursor },
  { label: "Vercel v0", icon: siVercel },
  { label: "Lovable", icon: "/icons/lovable.svg" },
  { label: "HTML5", icon: siHtml5 },
  { label: "CSS3", icon: "/icons/css.svg" },
  { label: "JavaScript", icon: siJavascript },
  { label: "React", icon: siReact },
  { label: "SQL", icon: siPostgresql },
]

const capabilities = [
  "Product Design", "Wireframing", "Prototyping", "Information Architecture", "Journey Mapping", "User Research",
  "User Interviews", "Usability Testing", "A/B Testing", "Design Systems", "Visual Design", "Data-Driven Optimization",
  "Coded Prototyping", "AI-assisted Workflows", "HTML / CSS", "JavaScript", "React Fundamentals", "SQL",
  "Functional Testing", "Cross-Platform UI Testing",
]

const email = "gizembolayir@gmail.com"
const socialIcons: Record<string, string> = { LinkedIn: "/icons/linkedin.svg", GitHub: "/icons/github.svg", Medium: "/icons/medium.png", Substack: "/icons/substack.svg" }

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
        <div className="section-inner editorial-about-layout">
          <div className="editorial-about-copy">
            <h2 className="section-title">About Me</h2>
            <div className="editorial-about-body">
              <p>Hi! I&apos;m a Product Designer who bridges the gap between logic and emotion, creating meaningful experiences through structured thinking and human empathy.</p>
              <p>With a background in Computer Engineering, I bring a systems-thinking mindset to product design combining technical understanding with a strong focus on human needs.</p>
              <p>I&apos;ve worked across consumer and B2B products, from financial habits and insurance workflows to food and content experiences. I enjoy turning complex requirements into intuitive products and increasingly use prototyping, AI, and code as part of my design workflow.</p>
            </div>

            <div className="editorial-about-actions">
              <a className="editorial-about-action" href="/Gizem-Bolayir-CV.pdf" download="Gizem-Bolayir-CV.pdf"><span>Resume</span><Download aria-hidden="true" size={14} /></a>
              <a className="editorial-about-action" href="https://www.linkedin.com/in/gizembolayir/" target="_blank" rel="noreferrer"><img className="editorial-action-icon" src={socialIcons.LinkedIn} alt="" aria-hidden="true" />LinkedIn <ArrowUpRight aria-hidden="true" size={14} /></a>
              <a className="editorial-about-action" href="https://github.com/gizemblyr" target="_blank" rel="noreferrer"><img className="editorial-action-icon" src={socialIcons.GitHub} alt="" aria-hidden="true" />GitHub <ArrowUpRight aria-hidden="true" size={14} /></a>
              <a className="editorial-about-action" href="https://medium.com/@gizembolayir" target="_blank" rel="noreferrer"><img className="editorial-action-icon" src={socialIcons.Medium} alt="" aria-hidden="true" />Medium <ArrowUpRight aria-hidden="true" size={14} /></a>
              <a className="editorial-about-action" href="https://substack.com/@gizemblyr" target="_blank" rel="noreferrer"><img className="editorial-action-icon" src={socialIcons.Substack} alt="" aria-hidden="true" />Substack <ArrowUpRight aria-hidden="true" size={14} /></a>
            </div>
          </div>
          <div className="editorial-about-portrait">
            <img src="/images/about-portrait.png" alt="Gizem Bolayir in profile" />
          </div>
        </div>
      </section>

      <section id="tools" className="editorial-tools-section" aria-label="Tools and capabilities">
        <div className="section-inner">
          <h2 className="section-title">Tools &amp; Capabilities</h2>
          <p className="editorial-tools-intro">Design, prototyping, AI, and development tools I use to move from idea to working product.</p>
          <div className="editorial-tools-marquee" aria-label="Tools I use">
            <div className="editorial-tools-track">
              {[...tools, ...tools].map(({ label, icon }, index) => (
                <span className="editorial-tool" key={`${label}-${index}`}>
                  {typeof icon === "string" ? (
                    <img className="editorial-tool-icon" src={icon} alt="" aria-hidden="true" />
                  ) : (
                    <svg className="editorial-tool-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={icon.path} fill={`#${icon.hex}`} /></svg>
                  )}
                  <span>{label}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="editorial-capabilities" aria-label="Capabilities">
            {capabilities.map((capability) => <span className="editorial-capability" key={capability}>{capability}</span>)}
          </div>
        </div>
      </section>

      <section id="contact" className="editorial-connect-section" aria-label="Let's connect">
        <div className="section-inner editorial-connect-inner">
          <div>
            <h2 className="section-title">Contact Me</h2>
            <p className="editorial-connect-copy">If you&apos;d like to collaborate on a project, discuss ideas, or explore potential partnerships, feel free to reach out using the contact details below.</p>
          </div>
          <div className="editorial-connect-actions">
            <a className="editorial-connect-row" href="https://www.linkedin.com/in/gizembolayir/" target="_blank" rel="noreferrer"><img className="editorial-connect-icon" src="/icons/linkedin-purple.png" alt="" aria-hidden="true" /><span><strong>LinkedIn</strong><small>linkedin.com/in/gizembolayir</small></span><ArrowUpRight aria-hidden="true" size={16} /></a>
            <button type="button" className="editorial-connect-row" onClick={copyEmail}><img className="editorial-connect-icon" src="/icons/gmail-purple.png" alt="" aria-hidden="true" /><span><strong>Email</strong><small>{copied ? "Email copied" : email}</small></span>{copied ? <span className="editorial-copied">Copied</span> : <Copy aria-hidden="true" size={14} />}</button>
          </div>
        </div>
      </section>
    </>
  )
}

"use client"

import { useState } from "react"
import { Copy, Download, Github, Mail, ArrowUpRight } from "lucide-react"

const tools = [
  ["Figma", "figma"], ["Miro", "miro"], ["Maze", "maze"], ["Cursor", "cursor"],
  ["Claude", "anthropic"], ["ChatGPT", "openai"], ["Vercel v0", "vercel"], ["Lovable", "lovable"],
  ["HTML5", "html5"], ["CSS3", "css3"], ["JavaScript", "javascript"], ["React", "react"],
  ["SQL", "postgresql"], ["Postman", "postman"], ["Jira", "jira"], ["Confluence", "confluence"],
] as const

const toolSequence = [...tools, ...tools]
const email = "gizembolayir@gmail.com"

export function EditorialAboutTools() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section className="editorial-lower" aria-label="About and contact">
      <div className="editorial-about-panel">
        <div className="editorial-about-portrait">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778276557460-xpHkD2tqWuLyJDUM3u7nwkGzBvOKk3.png" alt="Gizem Bolayir in profile" />
        </div>
        <div className="editorial-about-copy">
          <p className="editorial-eyebrow">ABOUT</p>
          <h2>Hi! I&apos;m a Product Designer who bridges the gap between logic and emotion, creating meaningful experiences through structured thinking and human empathy.</h2>
          <div className="editorial-about-body">
            <p>With a background in Computer Engineering, I bring a systems-thinking mindset to product design — combining technical understanding with a strong focus on human needs.</p>
            <p>I&apos;ve worked across consumer and B2B products, from financial habits and insurance workflows to food and content experiences. I enjoy turning complex requirements into intuitive products and increasingly use prototyping, AI, and code as part of my design workflow.</p>
          </div>
          <p className="editorial-about-current">Currently working as a Senior Product Designer at Doğuş Teknoloji.</p>
          <div className="editorial-about-actions">
            <a className="editorial-action-primary" href="/resume">Download CV <Download aria-hidden="true" size={14} /></a>
            <a className="editorial-action-secondary" href="https://github.com/gizembolayir" target="_blank" rel="noreferrer">GitHub <Github aria-hidden="true" size={14} /></a>
          </div>
        </div>
      </div>

      <div className="editorial-lower-panels">
        <div className="editorial-tools-panel">
          <p className="editorial-eyebrow">TOOLS &amp; CAPABILITIES</p>
          <h2>Tools &amp; capabilities</h2>
          <p className="editorial-tools-intro">Design, prototyping, AI, and development tools I use to move from idea to working product.</p>
          <div className="editorial-tools-viewport" aria-label="Tools I use">
            <div className="editorial-tools-track">
              {toolSequence.map(([label, slug], index) => <span className="editorial-tool" key={`${slug}-${index}`}><img src={`https://cdn.simpleicons.org/${slug}`} alt="" aria-hidden="true" /><span>{label}</span></span>)}
            </div>
          </div>
          <p className="editorial-capabilities">Design Systems · Prototyping · User Research · Usability Testing · AI-assisted Workflows · Coded Prototyping · Data-informed Design</p>
        </div>

        <div className="editorial-connect-panel">
          <p className="editorial-eyebrow">CONTACT</p>
          <h2>Let&apos;s connect</h2>
          <p className="editorial-connect-copy">For collaborations, ideas, or opportunities, feel free to reach out.</p>
          <div className="editorial-connect-actions">
            <a href="https://www.linkedin.com/in/gizembolayir/" target="_blank" rel="noreferrer"><ArrowUpRight size={15} aria-hidden="true" /> LinkedIn</a>
            <button type="button" onClick={copyEmail}><Copy size={15} aria-hidden="true" /> {copied ? "Email copied" : "Copy my email"}</button>
          </div>
          <p className="editorial-connect-address"><Mail size={14} aria-hidden="true" /> {email}</p>
        </div>
      </div>
    </section>
  )
}

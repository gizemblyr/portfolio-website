"use client"

import Link from "next/link"
import { Download, ExternalLink, ArrowUpRight } from "lucide-react"

const tools = [
  ["Figma", "figma"], ["Miro", "miro"], ["Maze", "maze"],
  ["ChatGPT", "openai"], ["Claude", "anthropic"], ["Cursor", "cursor"],
  ["Vercel v0", "vercel"], ["Lovable", "lovable"], ["HTML5", "html5"],
  ["CSS3", "css3"], ["JavaScript", "javascript"], ["React", "react"],
  ["SQL", "postgresql"], ["Postman", "postman"], ["Jira", "jira"], ["Confluence", "confluence"],
] as const

const toolSequence = [...tools, ...tools]

export function EditorialAboutTools() {
  return (
    <>
      <section id="about" className="editorial-about">
        <div className="editorial-about-inner">
          <div className="editorial-about-portrait">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1778276557460-xpHkD2tqWuLyJDUM3u7nwkGzBvOKk3.png"
              alt="Gizem Bolayir in profile"
            />
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
              <a className="editorial-action-primary" href="/resume" download>
                Download CV <Download aria-hidden="true" size={14} />
              </a>
              <a href="https://www.linkedin.com/in/gizembolayir/" target="_blank" rel="noreferrer">LinkedIn <ExternalLink aria-hidden="true" size={13} /></a>
              <a href="https://github.com/gizembolayir" target="_blank" rel="noreferrer">GitHub <ExternalLink aria-hidden="true" size={13} /></a>
              <Link href="/contact">Contact <ArrowUpRight aria-hidden="true" size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="editorial-tools">
        <div className="editorial-tools-inner">
          <p className="editorial-eyebrow">TOOLS &amp; CAPABILITIES</p>
          <h2>Tools &amp; capabilities</h2>
          <p className="editorial-tools-intro">Design, prototyping, AI and development tools I use to move from idea to working product.</p>
        </div>
        <div className="editorial-tools-viewport" aria-label="Tools I use">
          <div className="editorial-tools-track">
            {toolSequence.map(([label, slug], index) => (
              <div className="editorial-tool" key={`${slug}-${index}`}>
                <img src={`https://cdn.simpleicons.org/${slug}`} alt="" aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="editorial-capabilities">Design Systems · Prototyping · User Research · Usability Testing · AI-assisted Workflows · Coded Prototyping · Data-informed Design</p>
      </section>
    </>
  )
}

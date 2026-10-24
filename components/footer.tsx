"use client"

import { useState } from "react"
import { ArrowUpRight, Download } from "lucide-react"

const navigation = [
  { label: "Works", id: "work" },
  { label: "Blog", id: "blog" },
  { label: "About", id: "about" },
  { label: "Tools", id: "tools" },
  { label: "Contact", id: "contact" },
]

function goToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  window.dispatchEvent(new CustomEvent("portfolio-section-change", { detail: id }))
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-grid">
          <div>
            <button type="button" className="brand-wordmark footer-brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>giz<span>.</span></button>
            <p className="footer-kicker">PRODUCT DESIGNER &amp; BUILDER</p>
            <p className="footer-description">Designing thoughtful digital products<br className="hidden sm:block" /> across design, AI, and technology.</p>
          </div>
          <div>
            <p className="footer-heading">Navigation</p>
            <nav className="footer-link-list" aria-label="Footer navigation">
              {navigation.map((item) => <button key={item.id} type="button" onClick={() => goToSection(item.id)}>{item.label}</button>)}
            </nav>
          </div>
          <div>
            <p className="footer-heading">Elsewhere</p>
            <div className="footer-link-list">
              <a href="https://www.linkedin.com/in/gizembolayir/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
              <a href="https://github.com/gizemblyr" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
              <a href="https://medium.com/@gizembolayir" target="_blank" rel="noreferrer">Medium <ArrowUpRight size={14} /></a>
              <a href="https://gizembolayir.substack.com" target="_blank" rel="noreferrer">Substack <ArrowUpRight size={14} /></a>
              <a href="/Gizem-Bolayir-CV.pdf" download="Gizem-Bolayir-CV.pdf">Resume <Download size={14} /></a>
            </div>
          </div>
        </div>
        <div className="site-footer-bottom">
          <span>© 2026 Gizem Bolayır</span>
          <span>Designed &amp; built with curiosity.</span>
        </div>
      </div>
    </footer>
  )
}

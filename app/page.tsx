"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeHero, WorkedWithMarquee } from "@/components/home-hero"
import { EditorialWork } from "@/components/editorial-work"
import { EditorialBlog } from "@/components/editorial-blog"
import { EditorialAboutTools } from "@/components/editorial-about-tools"
import { HowIWork } from "@/components/how-i-work"

export default function Portfolio() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      ".home-hero, .editorial-work, .how-i-work, .editorial-blog, .editorial-about-section, .editorial-tools-section, .editorial-connect-section",
    )

    sections.forEach((section) => section.classList.add("section-reveal"))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting)
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HomeHero />
      <WorkedWithMarquee />
      <EditorialWork />
      <HowIWork />
      <EditorialBlog />
      <EditorialAboutTools />

      <Footer />
    </div>
  )
}

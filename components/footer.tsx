"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname()
  const isHomepage = pathname === "/"

  const handleWorkClick = (e: React.MouseEvent) => {
    if (isHomepage) {
      e.preventDefault()
      const workSection = document.getElementById("work")
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="bg-[#15171C] py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src="/images/logo-signature.png"
              alt="Gizem Bolayir"
              className="h-10 md:h-14 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link
              href="/#work"
              onClick={handleWorkClick}
              className="text-base text-gray-400 hover:text-white transition-colors"
            >
              Work
            </Link>
            <Link href="/resume" className="text-base text-gray-400 hover:text-white transition-colors">
              Resume
            </Link>
            <Link href="/blog" className="text-base text-gray-400 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-base text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-base text-gray-400 hover:text-white transition-colors">
              Contact Me
            </Link>
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex items-center justify-center">
          <p className="text-sm text-gray-500">
            {"Gizem Bolayir. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}

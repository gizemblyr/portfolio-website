"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink } from "lucide-react"

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto pt-28 md:pt-32 pb-16 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-gray-600 text-base mb-12">
          Thoughts on design, process, and building better products.
        </p>

        {/* Blog Post Card */}
        <div className="space-y-6">
        <a
          href="https://medium.com/@gizembolayir/how-i-use-cursor-to-audit-my-design-system-bdf1b141a635"
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <article className="border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-[#15171C] hover:shadow-lg transition-all duration-300">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Design Systems</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">AI Tools</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Process</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#2630E9] transition-colors">
                  How I Use Cursor to Audit My Design System
                </h2>
                <p className="text-gray-600 text-base mb-4">
                  A practical guide on leveraging AI-powered tools to maintain consistency and quality across design system components.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>Published on Medium</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </article>
        </a>

                <a
          href="https://open.substack.com/pub/gizemblyr/p/building-an-end-to-end-transfer-booking?r=edek1&utm_campaign=post&utm_medium=web"
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <article className="border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-[#15171C] hover:shadow-lg transition-all duration-300">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Vibe Coding</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">AI Tools</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Lovable</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#2630E9] transition-colors">
                  Building an End-to-End Transfer Booking Product with Lovable
                </h2>
                <p className="text-gray-600 text-base mb-4">
                  A hands-on experiment with a transfer booking product, from interface and form logic to email integration, basic security, and early analytics.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>Published on Substack</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </article>
        </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}

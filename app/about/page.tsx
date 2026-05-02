"use client"

import { Heart, Code, Palette, Users } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* About Content */}
      <div className="max-w-4xl mx-auto pt-28 md:pt-32 pb-12 px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="text-center lg:text-left flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Hi!</h2>
              <p className="mb-0 text-gray-900 font-medium text-2xl">
                {"I'm a Product Designer who bridges the gap between logic and emotion, creating meaningful experiences through structured thinking and human empathy."}
              </p>
            </div>
          </div>
        </div>

        {/* My Story */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">My Story</h2>
          <div className="text-base max-w-none text-gray-600">
            <p className="mb-6">
              My journey into design began with a Computer Engineering degree, where I learned to think systematically and solve complex problems. This technical foundation gave me a unique perspective on how users interact with digital products and the constraints that shape great design..
            </p>
            <p className="mb-6">
              What drew me to product design was the realization that the most elegant technical solutions mean nothing
              if they don't serve real human needs. I discovered my passion for understanding user behavior, translating
              complex requirements into intuitive experiences, and advocating for users throughout the design process.
            </p>
            <p>
              Today, I specialize in designing products that are both functionally robust and emotionally resonant.
              Whether it's gamifying financial habits, streamlining B2B workflows, or reimagining recipe discovery, I
              approach each project with curiosity, empathy, and a commitment to creating meaningful impact.
            </p>
          </div>
        </section>

        {/* What Drives Me */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">What Drives Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Human-Centered Design</h3>
                <p className="text-gray-600 text-base">
                  I believe great design starts with deep empathy for users. Every decision should be grounded in real
                  user needs and validated through research and testing.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Code className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Understanding</h3>
                <p className="text-gray-600 text-base">
                  My engineering background helps me design solutions that are not only beautiful but also technically
                  feasible and scalable.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Palette className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Systematic Creativity</h3>
                <p className="text-gray-600 text-base">
                  I approach creativity with structure, using frameworks and methodologies to ensure innovative
                  solutions are also practical and effective.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaborative Spirit</h3>
                <p className="text-gray-600 text-base">
                  The best products emerge from diverse perspectives. I thrive in cross-functional teams where different
                  expertise comes together to solve complex challenges.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

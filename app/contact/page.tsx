"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-3xl mx-auto pt-28 md:pt-32 pb-16 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Me</h1>
        <p className="text-gray-600 text-base mb-12 max-w-2xl leading-relaxed">
          {"If you'd like to collaborate on a project, discuss ideas, or explore potential partnerships, feel free to reach out using the contact details below."}
        </p>

        <div className="space-y-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gizembolayir/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 border border-gray-200 rounded-2xl p-6 hover:border-[#15171C] hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 bg-[#15171C] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2630E9] transition-colors">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-lg">LinkedIn</p>
              <p className="text-gray-500 text-sm">linkedin.com/in/gizembolayir</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:gizembolayir@gmail.com"
            className="group flex items-center gap-5 border border-gray-200 rounded-2xl p-6 hover:border-[#15171C] hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 bg-[#15171C] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2630E9] transition-colors">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-lg">Email</p>
              <p className="text-gray-500 text-sm">gizembolayir@gmail.com</p>
            </div>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}

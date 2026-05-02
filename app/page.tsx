"use client"

import { ArrowRight, ArrowDown } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  const handleViewProjects = () => {
    const workSection = document.getElementById("work")
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="bg-[#15171C] pt-20 md:pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-16 items-center">
            {/* Left: Text + CTA */}
            <div className="flex flex-col gap-6 md:gap-8 max-w-[600px]">
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-snug mb-1 md:mb-3">{"Hi, I'm Gizem,"}</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#B7FF87] leading-snug mb-2 md:mb-5">
                  <span className="block mb-1 md:mb-3">{"Product &"}</span>
                  <span className="block">{"UX/UI Designer"}</span>
                </h1>
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-snug mb-1 md:mb-4 mt-0">{"with an Engineering Mindset"}</p>
              </div>

              <button
                onClick={handleViewProjects}
                className="group inline-flex items-center gap-3 border border-gray-600 px-8 h-[50px] text-base font-medium text-white hover:bg-[#15171C] hover:border-[#B7FF87] hover:text-[#B7FF87] transition-all duration-300 w-fit mt-3 rounded-xl"
              >
                View Projects
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Right: Illustration */}
            <div className="flex items-end justify-end flex-shrink-0">
              <img
                src="/images/hero-line-illustration.png"
                alt="Line art illustration of a designer working at a desk with a laptop"
                className="w-full max-w-[520px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16 md:mb-20">Selected Work</h2>
          <div className="space-y-16 md:space-y-24">
            {/* Monevo Project */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="lg:col-span-5">
                <Link href="/monevo-case-study">
                  <img
                    src="/images/monevo.png"
                    alt="Monevo Financial Habit App - Mobile interfaces showing balance tracking and gamified financial goals"
                    className="w-full h-auto object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </Link>
              </div>
              <div className="lg:col-span-7">
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">PROJECT 01</p>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Monevo - Financial Habit</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Gamification</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Financial Habits</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Mobile App</span>
                </div>
                <p className="text-gray-600 mb-6 text-base">
                  Gamified wireframes and user journeys were developed to encourage better money habits through
                  personalized tasks and goal-oriented progress tracking.
                </p>
                <Link href="/monevo-case-study" className="block w-full sm:inline-flex sm:w-auto">
                  <button className="w-full inline-flex items-center justify-center border border-gray-300 rounded-xl px-6 h-[50px] text-base font-medium text-gray-700 hover:bg-[#15171C] hover:text-[#B7FF87] hover:border-[#15171C] transition-colors">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Foodpanda Project */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="lg:col-span-5">
                <Link href="/foodpanda-case-study">
                  <img
                    src="/images/foodpanda-partner.png"
                    alt="Foodpanda Partner Vendor Portal - Desktop and mobile menu management interface"
                    className="w-full h-auto object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </Link>
              </div>
              <div className="lg:col-span-7">
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">PROJECT 02</p>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Foodpanda Partner - Vendor Portal (Menu Management)
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Menu Optimization</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">B2B SaaS Platform</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">AI Integration</span>
                </div>
                <p className="text-gray-600 mb-6 text-base">
                  The menu management flow was redesigned with AI-assisted photo and description suggestions to
                  streamline vendor operations and boost efficiency.
                </p>
                <Link href="/foodpanda-case-study" className="block w-full sm:inline-flex sm:w-auto">
                  <button className="w-full inline-flex items-center justify-center border border-gray-300 rounded-xl px-6 h-[50px] text-base font-medium text-gray-700 hover:bg-[#15171C] hover:text-[#B7FF87] hover:border-[#15171C] transition-colors">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>

            {/* VDF NewAge Project */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="lg:col-span-5">
                <Link href="/newage-case-study">
                  <img
                    src="/images/newage-case-study.png"
                    alt="VDF NewAge Internal Insurance Platform - Customer details dashboard with policy charts and management sidebar"
                    className="w-full h-auto object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </Link>
              </div>
              <div className="lg:col-span-7">
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">PROJECT 03</p>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  VDF NewAge - Internal Insurance Platform
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">B2B Platform</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Enterprise UX</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Insurance</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Process Design</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Web App</span>
                </div>
                <p className="text-gray-600 mb-6 text-base">
                  Redesigned complex insurance workflows into clear, status-driven experiences for sales and operations teams. Focused on customer 360, policy management, coverage mapping, and payment-related operational flows within an enterprise B2B system.
                </p>
                <Link href="/newage-case-study" className="block w-full sm:inline-flex sm:w-auto">
                  <button className="w-full inline-flex items-center justify-center border border-gray-300 rounded-xl px-6 h-[50px] text-base font-medium text-gray-700 hover:bg-[#15171C] hover:text-[#B7FF87] hover:border-[#15171C] transition-colors">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>

            {/* FoodPay Project */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="lg:col-span-5">
                <Link href="/foodpay-case-study">
                  <img
                    src="/images/foodpay-case-study.png"
                    alt="FoodPay by Yemeksepeti - Desktop and mobile payment platform interface"
                    className="w-full h-auto object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </Link>
              </div>
              <div className="lg:col-span-7">
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">PROJECT 04</p>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  FoodPay (Yemeksepeti)
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Fintech</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">B2B Platform</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Payment System</span>
                </div>
                <p className="text-gray-600 mb-6 text-base">
                  A secure payment and virtual POS platform designed from scratch for merchants, with end-to-end UX covering onboarding, dashboard, and reporting flows.
                </p>
                <Link href="/foodpay-case-study" className="block w-full sm:inline-flex sm:w-auto">
                  <button className="w-full inline-flex items-center justify-center border border-gray-300 rounded-xl px-6 h-[50px] text-base font-medium text-gray-700 hover:bg-[#15171C] hover:text-[#B7FF87] hover:border-[#15171C] transition-colors">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Yemek.com Project */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="lg:col-span-5">
                <Link href="/yemekcom-case-study">
                  <img
                    src="/images/yemekcom.png"
                    alt="Yemek.com Recipe App - Mobile interfaces showing recipe discovery and detailed recipe views"
                    className="w-full h-auto object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </Link>
              </div>
              <div className="lg:col-span-7">
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">PROJECT 05</p>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Yemek.com</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Recipe Platform</span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Mobile App</span>
                </div>
                <p className="text-gray-600 mb-6 text-base">
                  The recipe app experience was reimagined to enhance clarity, improve navigation, and foster user
                  engagement through data-informed design.
                </p>
                <Link href="/yemekcom-case-study" className="block w-full sm:inline-flex sm:w-auto">
                  <button className="w-full inline-flex items-center justify-center border border-gray-300 rounded-xl px-6 h-[50px] text-base font-medium text-gray-700 hover:bg-[#15171C] hover:text-[#B7FF87] hover:border-[#15171C] transition-colors">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

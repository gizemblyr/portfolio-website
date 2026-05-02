import { Clock, Users, Target, Star, Zap, ArrowRight, TrendingUp, Shield, Layers, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function FoodPayCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="overview" className="pt-28 md:pt-32 pb-12 md:pb-20 px-4 md:px-8 bg-gradient-to-br from-red-50 to-rose-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                FoodPay (YemeksepetiPay)
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                A secure payment and virtual POS platform designed from scratch for merchants, operating under TCMB regulations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>6 months</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Product Designer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  <span>Fintech / B2B</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201670-RpTTgXfj7qzJs9E2D7qnGy1K6iOSFc.png"
                alt="FoodPay - Desktop and mobile payment platform interface"
                className="w-full max-w-sm mx-auto lg:max-w-md rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Needs & Focus */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Design Needs & Focus
          </h2>
          <div className="bg-white/80 rounded-xl p-6 md:p-8 mb-8">
            <p className="text-gray-600 text-base leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              FoodPay (YemeksepetiPay) is a payment and virtual POS platform designed from scratch to enable businesses to receive online payments securely, operating under TCMB regulations. From day one, the product was shaped with a strong UX foundation, taking regulatory requirements, security considerations, and financial operations into account.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">The core design needs that guided the process:</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-4 bg-red-50/70 rounded-lg border border-red-100">
              <Shield className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-base">
                Building a secure and regulation-compliant payment infrastructure for merchants
              </span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-rose-50/70 rounded-lg border border-rose-100">
              <Star className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-base">
                Establishing trust at the very first point of contact in a fintech product
              </span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-orange-50/70 rounded-lg border border-orange-100">
              <Zap className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-base">
                Making security, verification, and error scenarios clear and understandable for users
              </span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-amber-50/70 rounded-lg border border-amber-100">
              <Layers className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-base">
                Presenting critical financial information such as payments, settlements, and reports in a simple and structured way
              </span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-red-50/70 rounded-lg border border-red-100">
              <Target className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-base">
                Creating a scalable and consistent UI structure suitable for a product developed from scratch
              </span>
            </div>
          </div>

          <p className="text-gray-600 text-base leading-relaxed mt-8 text-center max-w-3xl mx-auto">
            Based on these needs, the entire experience was handled end to end, from the landing page and merchant onboarding flow to the dashboard and reporting screens.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Approach</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            The product was approached not as a set of individual screens, but as a complete journey — from a merchant{"'"}s first interaction with the platform to actively receiving payments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3 p-5 bg-white rounded-xl border shadow-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 text-base">
                Trust, licensing information, and value propositions were clearly communicated on the landing page
              </span>
            </div>
            <div className="flex items-start gap-3 p-5 bg-white rounded-xl border shadow-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 text-base">
                The merchant onboarding process was divided into clear, manageable steps
              </span>
            </div>
            <div className="flex items-start gap-3 p-5 bg-white rounded-xl border shadow-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 text-base">
                Regulatory requirements were structured in a way that reduced cognitive load
              </span>
            </div>
            <div className="flex items-start gap-3 p-5 bg-white rounded-xl border shadow-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 text-base">
                Critical financial data was prioritized on dashboard and reporting screens
              </span>
            </div>
            <div className="flex items-start gap-3 p-5 bg-white rounded-xl border shadow-sm md:col-span-2 md:max-w-md md:mx-auto">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 text-base">
                Web and mobile web were designed together with a responsive-first mindset
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Mini Benchmark */}
      <section id="research" className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Research & Mini Benchmark
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            Since the product was built from scratch, a mini benchmark study was conducted to understand industry standards.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Platforms Reviewed */}
            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Search className="w-5 h-5 text-red-500" />
                Platforms Reviewed
              </h3>
              <div className="space-y-3">
                {["Iyzico", "Stripe", "PayPal"].map((platform) => (
                  <div key={platform} className="flex items-center gap-3 p-4 bg-white/80 rounded-lg border border-white/50">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-base font-medium">{platform}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus Areas */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-500" />
                Focus Areas
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-white/80 rounded-lg border border-white/50">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">Merchant onboarding and verification flows</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/80 rounded-lg border border-white/50">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">Document upload and approval processes</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/80 rounded-lg border border-white/50">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">How security and regulatory messages are communicated to users</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 text-center">
            <p className="text-gray-700 text-base leading-relaxed max-w-3xl mx-auto">
              The analysis showed that long and mandatory processes can be managed effectively through <strong>clear guidance</strong>, <strong>progress visibility</strong>, and <strong>well-crafted microcopy</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Wireframes */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Wireframes
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            Wireframe work covered the following key flows:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-white rounded-xl border shadow-sm text-center">
              <span className="text-gray-700 text-base">Landing page structure and navigation</span>
            </div>
            <div className="p-4 bg-white rounded-xl border shadow-sm text-center">
              <span className="text-gray-700 text-base">Sign-up and login flows</span>
            </div>
            <div className="p-4 bg-white rounded-xl border shadow-sm text-center">
              <span className="text-gray-700 text-base">Merchant onboarding (authorized person details, business info, document upload, agreements)</span>
            </div>
            <div className="p-4 bg-white rounded-xl border shadow-sm text-center">
              <span className="text-gray-700 text-base">Dashboard, transaction summaries, and reporting screens</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-6 text-center">
            <p className="text-gray-700 text-base leading-relaxed">
              A primary goal during onboarding was to clearly communicate <strong>where the user is in the process</strong> and <strong>what comes next</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section id="design" className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Design System
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            A compact design system was created to meet MVP needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 border border-red-100">
              <h3 className="font-semibold text-gray-900 mb-3">Standardized Components</h3>
              <p className="text-gray-600 text-base">
                Form fields, validation states, and error messages were standardized across all flows.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-3">Visual Hierarchy</h3>
              <p className="text-gray-600 text-base">
                A consistent typography and visual hierarchy were defined for financial data presentation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
              <h3 className="font-semibold text-gray-900 mb-3">Reusable Patterns</h3>
              <p className="text-gray-600 text-base">
                Reusable components were created for security and status messaging. The system was designed to support future growth.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <div className="bg-white rounded-2xl overflow-hidden border shadow-sm">
              <img
                src="/images/foodpay-design-system.png"
                alt="FoodPay Design System - Colors, typography, buttons, inputs, stepper menu, headers, system alerts, popups, menu elements, table components, icons, and other UI elements"
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-gray-600 text-sm mt-4 font-medium">Design System Overview</p>
          </div>
        </div>
      </section>

      {/* UI Screens */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            UI Screens
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            All screens were designed responsively for both web and mobile web. Below are the main screen groups designed for the product.
          </p>

          <div className="space-y-12">
            {/* Landing Pages - Web */}
            <div>
              <div className="bg-white rounded-2xl overflow-hidden border shadow-sm">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201674-DXJoiAVDczieqcAbez9Y00PwOiHvZG.png"
                  alt="FoodPay Landing Pages - Homepage, individual and business user pages, pricing page"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-gray-600 text-sm mt-4 font-medium">Landing Pages - Web</p>
            </div>

            {/* Landing Pages - Mobile Responsive */}
            <div>
              <div className="bg-white rounded-2xl overflow-hidden border shadow-sm">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile%20web%20dashboard-riWLTSpDY66Oy1JXorZjdME6giEpYw.png"
                  alt="FoodPay Landing Page Mobile Responsive - Hero section with CTAs, hamburger menu, features, how it works section, and footer"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-gray-600 text-sm mt-4 font-medium">Landing Page - Mobile Responsive</p>
            </div>

            {/* Sign Up & Login - Web */}
            <div>
              <div className="bg-white rounded-2xl overflow-hidden border shadow-sm">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201675-wLckfaYKy3p50n7KgviQD3rg05tNVm.png"
                  alt="FoodPay Sign Up and Login - Login, registration, and confirmation screens"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-gray-600 text-sm mt-4 font-medium">Sign Up & Login - Web</p>
            </div>

            {/* Sign Up, Login & Onboarding - Mobile Responsive */}
            <div>
              <div className="bg-white rounded-2xl overflow-hidden border shadow-sm">
                <img
                  src="/images/foodpay-mobile-signup-onboarding.png"
                  alt="FoodPay Sign Up, Login and Onboarding Mobile Responsive - Login and registration forms, 4-step merchant onboarding wizard with authorized info, commercial info, document upload, and identity verification"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-gray-600 text-sm mt-4 font-medium">Sign Up, Login & Onboarding - Mobile Responsive</p>
            </div>

            {/* Onboarding Pages - Web */}
            <div>
              <div className="bg-white rounded-2xl overflow-hidden border shadow-sm">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201676-Ie6LPIJ5wkiDdsMukcIhsqWd7Qo5ZP.png"
                  alt="FoodPay Onboarding - Application info, authorized person details, commercial info, document upload, and agreements"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-gray-600 text-sm mt-4 font-medium">Onboarding Pages - Web</p>
            </div>

            {/* Dashboard - Web */}
            <div>
              <div className="bg-white rounded-2xl overflow-hidden border shadow-sm">
                <img
                  src="/images/foodpay-dashboard.png"
                  alt="FoodPay Dashboard - Main dashboard with balance overview, daily performance chart, next payment status, transaction history, and financial transactions view"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-gray-600 text-sm mt-4 font-medium">Dashboard - Web</p>
            </div>

            {/* Dashboard - Mobile Responsive */}
            <div>
              <div className="bg-white rounded-2xl overflow-hidden border shadow-sm">
                <img
                  src="/images/foodpay-mobile-dashboard.png"
                  alt="FoodPay Dashboard Mobile Responsive - Sidebar navigation, balance and payment info, daily performance chart, recent transactions, withdrawal request, company info form, and profile settings"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-gray-600 text-sm mt-4 font-medium">Dashboard - Mobile Responsive</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Key Learnings */}
      <section id="results" className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            Impact & Key Learnings
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Impact */}
            <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-200/20 to-green-200/20 rounded-full translate-y-12 -translate-x-12"></div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center relative z-10 flex items-center justify-center gap-2">
                <TrendingUp className="w-6 h-6 text-green-600" />
                Impact
              </h3>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/50 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-green-50/70 rounded-lg border border-green-100">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-gray-800 text-base font-medium">
                      An end-to-end first product experience was successfully delivered for FoodPay
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-emerald-50/70 rounded-lg border border-emerald-100">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-gray-800 text-base font-medium">
                      A regulation-compliant, trust-focused, and scalable UI foundation was established
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-teal-50/70 rounded-lg border border-teal-100">
                    <div className="w-3 h-3 bg-teal-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-gray-800 text-base font-medium">
                      Complex financial processes were made manageable from a user perspective
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Learnings */}
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-200/20 to-blue-200/20 rounded-full translate-y-12 -translate-x-12"></div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center relative z-10 flex items-center justify-center gap-2">
                <Star className="w-6 h-6 text-blue-600" />
                Key Learnings
              </h3>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/50 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-blue-50/70 rounded-lg border border-blue-100">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-gray-800 text-base font-medium">
                      In financial products, user experience affects not only users but also operational and support teams
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-indigo-50/70 rounded-lg border border-indigo-100">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-gray-800 text-base font-medium">
                      Poorly structured onboarding increases long-term support load and operational costs
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-blue-50/70 rounded-lg border border-blue-100">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-gray-800 text-base font-medium">
                      Trust is not built on a single screen, but through consistent and coherent flows across the entire experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

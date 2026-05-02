import { Clock, Users, Target, Star, TrendingUp, Shield, Layers, Eye, GitBranch, CreditCard, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NewAgeCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="overview" className="pt-28 md:pt-32 pb-12 md:pb-20 px-4 md:px-8 bg-gradient-to-br from-cyan-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                VDF NewAge
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                Internal Insurance Platform for Volkswagen Finans
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>5 months</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Product Designer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  <span>Enterprise B2B / Insurance</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Macbook%20Pro%2013_%20Mockup-JDiDqDGFVQke61m5pZqHIV0cRzLFQO.png"
                alt="VDF NewAge - Internal Insurance Platform dashboard showing customer details with policy charts"
                className="w-full max-w-sm mx-auto lg:max-w-md rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Project Overview
          </h2>
          <div className="bg-white/80 rounded-xl p-6 md:p-8 mb-8">
            <p className="text-gray-600 text-base leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              VDF NewAge is an internal B2B insurance platform used by Volkswagen Dogus Finans sales and operations teams.
              The system supports complex insurance processes under regulatory constraints, covering customer management, policy creation, payments, and operational tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Process Context */}
      <section id="process" className="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Process Context</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            From lead creation to policy issuance, the product follows a multi-stage lifecycle. At a system level, this lifecycle is represented through a progress-based structure, enabling agents to track advancement across Lead, Offer, and Policy stages at a glance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center gap-4 p-5 bg-white rounded-xl border shadow-sm">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-cyan-600 font-bold text-lg">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Lead</h4>
                <p className="text-gray-600 text-sm">Initial customer contact and qualification</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-white rounded-xl border shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-lg">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Offer</h4>
                <p className="text-gray-600 text-sm">Policy configuration and proposal creation</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-white rounded-xl border shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-indigo-600 font-bold text-lg">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Policy</h4>
                <p className="text-gray-600 text-sm">Issuance, payment, and operational tracking</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
              <p className="text-gray-700 text-base leading-relaxed">
                This approach improves follow-up clarity and cross-team alignment.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <p className="text-gray-700 text-base leading-relaxed">
                Detailed Lead and Offer management interfaces were designed by other teams and are outside the scope of my contribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scope of My Work */}
      <section id="scope" className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Scope of My Work
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            My contribution focused on areas where operational complexity and error risk are highest.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-4 bg-cyan-50/70 rounded-lg border border-cyan-100">
              <Eye className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-base">
                Customer 360 experience design
              </span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-blue-50/70 rounded-lg border border-blue-100">
              <GitBranch className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-base">
                Policy lifecycle and status management
              </span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-indigo-50/70 rounded-lg border border-indigo-100">
              <Shield className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-base">
                Coverage and guarantee mapping
              </span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-cyan-50/70 rounded-lg border border-cyan-100">
              <CreditCard className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-base">
                Payment confirmation and reconciliation flows
              </span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-blue-50/70 rounded-lg border border-blue-100">
              <Layers className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-base">
                Data-dense, operational UI screens
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Customer 360 Experience */}
      <section id="design" className="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Customer 360 Experience
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            A unified Customer 360 view was designed as a single source of truth, bringing together all customer-related data.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3 p-5 bg-white rounded-xl border shadow-sm">
              <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 text-base">Individual and corporate customer information</span>
            </div>
            <div className="flex items-start gap-3 p-5 bg-white rounded-xl border shadow-sm">
              <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 text-base">Active and past policies</span>
            </div>
            <div className="flex items-start gap-3 p-5 bg-white rounded-xl border shadow-sm">
              <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 text-base">Payment and settlement history</span>
            </div>
            <div className="flex items-start gap-3 p-5 bg-white rounded-xl border shadow-sm">
              <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 text-base">Coverage and guarantee relationships</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 text-center">
            <p className="text-gray-700 text-base leading-relaxed max-w-3xl mx-auto">
              This reduced context switching and supported faster, more confident decision-making.
            </p>
          </div>

          {/* Customer 360 Design */}
          <div className="mt-10">
            <div className="bg-white rounded-2xl overflow-hidden border shadow-sm">
              <img
                src="/images/newage-customer-360.png"
                alt="Customer 360 view - Unified customer details page with personal info, vehicle assets, policy distribution charts, and system information"
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-gray-600 text-sm mt-4 font-medium">Customer 360 - Unified Customer Detail View</p>
          </div>
        </div>
      </section>

      {/* Policy & Payment Management */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Policy & Payment Management
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            Policy-related experiences were designed to clearly separate commercial approval from operational and financial completion.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Payment Scenarios */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-cyan-600" />
                Payment Scenarios
              </h3>
              <div className="space-y-3">
                {["Credit Card", "Bank Transfer (EFT)", "Open Account (with reconciliation)"].map((scenario) => (
                  <div key={scenario} className="flex items-center gap-3 p-4 bg-white/80 rounded-lg border border-white/50">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-base font-medium">{scenario}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Design */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-blue-600" />
                Status-Based Design
              </h3>
              <div className="space-y-3">
                {["Pending", "Success", "Failure"].map((status) => (
                  <div key={status} className="flex items-center gap-3 p-4 bg-white/80 rounded-lg border border-white/50">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      status === "Pending" ? "bg-yellow-500" : status === "Success" ? "bg-green-500" : "bg-red-500"
                    }`}></div>
                    <span className="text-gray-700 text-base font-medium">{status} state</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 text-center">
            <p className="text-gray-700 text-base leading-relaxed max-w-3xl mx-auto">
              Each scenario includes explicit pending, success, and failure states to <strong>prevent ambiguity</strong> in operational workflows.
            </p>
          </div>

          {/* Payment Flow Designs */}
          <div className="mt-10 space-y-10">
            <div>
              <div className="bg-white rounded-2xl overflow-hidden border shadow-sm">
                <img
                  src="/images/newage-credit-card.png"
                  alt="Credit Card payment flow - Payment method selection, credit card form, success and failure confirmation states"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-gray-600 text-sm mt-4 font-medium">Credit Card Payment Flow</p>
            </div>

            <div>
              <div className="bg-white rounded-2xl overflow-hidden border shadow-sm">
                <img
                  src="/images/newage-ivr-payment.png"
                  alt="IVR Payment flow - Installment selection, IVR payment confirmation, and success state"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-gray-600 text-sm mt-4 font-medium">IVR Payment Flow</p>
            </div>

            <div>
              <div className="bg-white rounded-2xl overflow-hidden border shadow-sm">
                <img
                  src="/images/newage-bank-transfer.png"
                  alt="Bank Transfer (EFT) payment flow - Offer creation, bank transfer details, payment confirmation, success and error states"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-gray-600 text-sm mt-4 font-medium">Bank Transfer (EFT) Payment Flow</p>
            </div>

            <div>
              <div className="bg-white rounded-2xl overflow-hidden border shadow-sm">
                <img
                  src="/images/newage-open-account.png"
                  alt="Open Account payment flow - Policy listing, payment reconciliation, confirmation and document sharing states"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-gray-600 text-sm mt-4 font-medium">Open Account Payment Flow</p>
            </div>

            <div>
              <div className="bg-white rounded-2xl overflow-hidden border shadow-sm">
                <img
                  src="/images/newage-view-policy-details.png"
                  alt="View Policy Details - Policy listing, detailed policy view with coverage info, share/send offer functionality, and document preview"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-gray-600 text-sm mt-4 font-medium">View Policy Details & Documents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage & Guarantee Mapping */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Coverage & Guarantee Mapping
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            Coverage and guarantee structures were designed to be explicit, reusable, and scalable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
              <h3 className="font-semibold text-gray-900 mb-3">Clear Relationships</h3>
              <p className="text-gray-600 text-base">
                Clear coverage-policy relationships to reduce confusion in complex insurance structures.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-3">Rule-Based Configurations</h3>
              <p className="text-gray-600 text-base">
                Structured rule-based configurations that support operational consistency across teams.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
              <h3 className="font-semibold text-gray-900 mb-3">Reduced Dependencies</h3>
              <p className="text-gray-600 text-base">
                Reduced dependency on agent memory or experience, enabling faster onboarding of new team members.
              </p>
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
                      Improved operational clarity in policy and payment stages
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-emerald-50/70 rounded-lg border border-emerald-100">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-gray-800 text-base font-medium">
                      Reduced configuration and payment-related errors
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-teal-50/70 rounded-lg border border-teal-100">
                    <div className="w-3 h-3 bg-teal-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-gray-800 text-base font-medium">
                      Clearer separation between sales, policy, and finance workflows
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
                      In enterprise insurance platforms, clarity is driven by process visibility
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-indigo-50/70 rounded-lg border border-indigo-100">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-gray-800 text-base font-medium">
                      Status-based UX is critical for operational trust
                    </span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-blue-50/70 rounded-lg border border-blue-100">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-gray-800 text-base font-medium">
                      Customer-centric architecture reduces agent errors
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

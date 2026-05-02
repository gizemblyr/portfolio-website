"use client"

import { Award, Briefcase, GraduationCap, Calendar } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Resume() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto pt-28 md:pt-32 pb-12 px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{`Gizem Bolayır`}</h1>
          <p className="text-xl text-gray-600 mb-4">Senior UI/UX Designer</p>
          <p className="text-sm text-gray-500">{""}</p>
        </div>

        {/* Profile */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile</h2>
          <p className="text-gray-600 leading-relaxed text-base">
            {"Senior Product Designer with 6+ years of experience across fintech, food-tech, and enterprise platforms, consumer products, and B2B SaaS. Focuses on understanding real user needs and turning them into design decisions that hold up in usability testing. Works closely with engineering throughout the process, taking ownership of product areas from discovery through delivery. Actively working with LLM-powered interfaces and AI-assisted design workflows."}
          </p>
        </section>

        {/* Key Achievements */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Award className="w-6 h-6" />
            Key Achievements
          </h2>
          <ul className="text-gray-600 leading-relaxed list-disc pl-5 space-y-2">
            <li>
              <strong>{"Monevo (B2C \u00B7 Fintech):"}</strong> {"Increased onboarding completion from 47.4% to 70% and task completion from 8.1% to 15% through a gamified task series, token-based design system, and AI chat interface."}
            </li>
            <li>
              <strong>{"Foodpanda Vendor Portal (B2B SaaS):"}</strong> {"Increased task completion from 60% to 91% by introducing two editing modes, bulk editing, and AI-powered content suggestions in a mobile-first redesign."}
            </li>
            <li>
              <strong>{"Yemek.com (B2C \u00B7 Consumer):"}</strong> {"Full end-to-end redesign across search, navigation, cooking mode, recipe management, social features, and a scalable design system improving discoverability and task completion across the platform."}
            </li>
          </ul>
        </section>

        {/* Professional Experience */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6" />
            Professional Experience
          </h2>

          <div className="space-y-8">
            {/* Dogus Technology */}
            <div className="border-l-4 border-gray-300 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">Sr. UI/UX Designer</h3>
                <div className="flex items-center gap-2 text-gray-600 text-base">
                  <Calendar className="w-4 h-4" />
                  <span>November 2024 - Present</span>
                </div>
              </div>
              <p className="text-gray-900 font-medium mb-1">{`Doğuş Technology \u00B7 Dortnoktasıfır Engineering`}</p>
              <p className="text-gray-500 text-sm mb-3">{`Fintech & Insurance`}</p>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-800 font-medium text-base italic">{`AgeSA (B2C \u00B7 Fintech / Insurance)`}</p>
                  <ul className="text-gray-600 space-y-1 text-base list-disc pl-5 mt-1">
                    <li>{"Improved risk profiling, fund guidance, calculation tools, and consent approval flows on mobile and web; restructured information hierarchy to reduce user error rates across regulated financial journeys."}</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-800 font-medium text-base italic">{`Monevo (B2C \u00B7 Financial Habit App)`}</p>
                  <ul className="text-gray-600 space-y-1 text-base list-disc pl-5 mt-1">
                    <li>{"Led UX, UI, and token-based design system for a gamified financial habit app; restructured onboarding as an interactive task series with a branded mascot and AI chat interface. Validated through usability testing with 7 users, improving onboarding completion from 47.4% to 70% and task completion from 8.1% to 15%. Built a scalable, token-based design system to ensure consistency across all screens."}</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-800 font-medium text-base italic">{`VDF NewAge (B2B \u00B7 Enterprise Insurance Platform)`}</p>
                  <ul className="text-gray-600 space-y-1 text-base list-disc pl-5 mt-1">
                    <li>{"Designed the full Customer 360 experience, policy lifecycle management, coverage and guarantee mapping, and multi-scenario payment flows (credit card, EFT, IVR, open account) for Volkswagen Doğuş Finans sales and operations teams; introduced status-based UI to eliminate ambiguity in operational workflows and reduce configuration errors."}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Self-Employment */}
            <div className="border-l-4 border-gray-300 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">Sr. Product Designer</h3>
                <div className="flex items-center gap-2 text-gray-600 text-base">
                  <Calendar className="w-4 h-4" />
                  <span>August 2023 - November 2024</span>
                </div>
              </div>
              <p className="text-gray-900 font-medium mb-1">Self-Employment</p>
              <p className="text-gray-500 text-sm mb-3">{`Consumer & Marketplace Products`}</p>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-800 font-medium text-base italic">{`LetsParky (B2C \u00B7 Consumer)`}</p>
                  <ul className="text-gray-600 space-y-1 text-base list-disc pl-5 mt-1">
                    <li>{"Designed and prototyped a parking reservation system for Istanbul Airport, testing multiple interaction models for slot selection and booking confirmation."}</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-800 font-medium text-base italic">{`LetShape (B2C \u00B7 Marketplace)`}</p>
                  <ul className="text-gray-600 space-y-1 text-base list-disc pl-5 mt-1">
                    <li>{"Designed end-to-end flows for a 3D printing marketplace connecting printer owners with clients, optimising the request-to-quote interaction pattern."}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Delivery Hero */}
            <div className="border-l-4 border-gray-300 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">Sr. Product Designer</h3>
                <div className="flex items-center gap-2 text-gray-600 text-base">
                  <Calendar className="w-4 h-4" />
                  <span>March 2021 - August 2023</span>
                </div>
              </div>
              <p className="text-gray-900 font-medium mb-1">{`Delivery Hero Tech Hub \u00B7 Yemeksepeti`}</p>
              <p className="text-gray-500 text-sm mb-3">{`Food-Tech & E-Commerce`}</p>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-800 font-medium text-base italic">{`Foodpanda Vendor Portal (B2B SaaS \u00B7 Vendor Operations)`}</p>
                  <ul className="text-gray-600 space-y-1 text-base list-disc pl-5 mt-1">
                    <li>{"Redesigned the menu management module with a mobile-first approach; introduced two distinct editing modes (Quick Edit for high-frequency actions, Detailed Edit for full item setup), bulk editing, and AI-powered photo and description suggestions. Redesign increased task completion from 60% to 91% in usability testing with 8 vendors."}</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-800 font-medium text-base italic">{`Yemek.com (B2C \u00B7 Recipe Platform)`}</p>
                  <ul className="text-gray-600 space-y-1 text-base list-disc pl-5 mt-1">
                    <li>{"Led full end-to-end redesign; rebuilt IA, search and multi-dimensional filtering, cooking mode, recipe management, social profiles, and recipe creation flow. Informed by interviews with 14 users. Delivered a design system."}</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-800 font-medium text-base italic">{`FoodPay (B2B SaaS \u00B7 Fintech / Payment)`}</p>
                  <ul className="text-gray-600 space-y-1 text-base list-disc pl-5 mt-1">
                    <li>{"Designed the entire platform from scratch under TCMB regulations; landing pages, merchant onboarding, dashboard, transaction summaries, and reporting. Delivered responsive web and mobile web with a compact design system."}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fibabanka */}
            <div className="border-l-4 border-gray-300 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">UI/UX Designer</h3>
                <div className="flex items-center gap-2 text-gray-600 text-base">
                  <Calendar className="w-4 h-4" />
                  <span>November 2019 - March 2021</span>
                </div>
              </div>
              <p className="text-gray-900 font-medium mb-1">Fibabanka</p>
              <p className="text-gray-500 text-sm mb-3">{`Fintech & Banking`}</p>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-800 font-medium text-base italic">{`Piri (B2B Internal)`}</p>
                  <ul className="text-gray-600 space-y-1 text-base list-disc pl-5 mt-1">
                    <li>{"Redesigned the mobile sales app for field sales teams; optimised key flows (customer lookup, offer presentation, contract initiation) and built an accessible design system adopted across internal product teams."}</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-800 font-medium text-base italic">Symphony (Internal Tool)</p>
                  <ul className="text-gray-600 space-y-1 text-base list-disc pl-5 mt-1">
                    <li>{"Designed a unified internal platform consolidating reporting, HR workflows, and social features for all Fibabanka employees, reducing cross-tool friction."}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Garanti BBVA */}
            <div className="border-l-4 border-gray-300 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">QA Engineer</h3>
                <div className="flex items-center gap-2 text-gray-600 text-base">
                  <Calendar className="w-4 h-4" />
                  <span>December 2018 - November 2019</span>
                </div>
              </div>
              <p className="text-gray-900 font-medium mb-1">Garanti BBVA Technology</p>
              <p className="text-gray-500 text-sm mb-3">{`Fintech / Banking`}</p>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-800 font-medium text-base italic">{`CRM\u2013IVR`}</p>
                  <ul className="text-gray-600 space-y-1 text-base list-disc pl-5 mt-1">
                    <li>{"Functional, regression, and integration testing; SQL backend validation and UAT support with dev and call center teams."}</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-800 font-medium text-base italic">Garanti STEP (Tablet Onboarding)</p>
                  <ul className="text-gray-600 space-y-1 text-base list-disc pl-5 mt-1">
                    <li>{"End-to-end onboarding testing on tablet; surfaced UX-breaking edge cases and resolved pre-release with product and engineering."}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Innova IT */}
            <div className="border-l-4 border-gray-300 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">QA Engineer</h3>
                <div className="flex items-center gap-2 text-gray-600 text-base">
                  <Calendar className="w-4 h-4" />
                  <span>April 2016 - December 2018</span>
                </div>
              </div>
              <p className="text-gray-900 font-medium mb-1">Innova IT</p>
              <p className="text-gray-500 text-sm mb-3">{`Fintech / Telco`}</p>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-800 font-medium text-base italic">{`PayFlex Instant Loan`}</p>
                  <ul className="text-gray-600 space-y-1 text-base list-disc pl-5 mt-1">
                    <li>{"Functional and regression testing on loan flows; validated bank integrations using SQL, SOAP UI, and Postman."}</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-800 font-medium text-base italic">{`Vodafone & Turk Telekom BPPS`}</p>
                  <ul className="text-gray-600 space-y-1 text-base list-disc pl-5 mt-1">
                    <li>{"Tested payment, refund, and inquiry flows; verified fraud checks and encryption rules; managed defects in Jira."}</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-800 font-medium text-base italic">Tax Free Zone</p>
                  <ul className="text-gray-600 space-y-1 text-base list-disc pl-5 mt-1">
                    <li>{"Backend testing for digital tax refund flows and edge cases; SQL data validation and UAT support."}</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-800 font-medium text-base italic">TTNET Brand Integrations</p>
                  <ul className="text-gray-600 space-y-1 text-base list-disc pl-5 mt-1">
                    <li>{"Integration testing between TTNET billing/CRM and partner systems; validated campaign enrollment, cancellation, and billing accuracy."}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6" />
            Education
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-gray-400 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">B.Sc. Computer Engineering</h3>
                <div className="flex items-center gap-2 text-gray-600 text-base">
                  <Calendar className="w-4 h-4" />
                  <span>September 2009 - January 2015</span>
                </div>
              </div>
              <p className="text-gray-600 font-medium">{`TOBB University of Economics and Technology, T\u00FCrkiye`}</p>
            </div>

            <div className="border-l-4 border-gray-400 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">Web Development</h3>
                <div className="flex items-center gap-2 text-gray-600 text-base">
                  <Calendar className="w-4 h-4" />
                  <span>March 2025 - January 2026</span>
                </div>
              </div>
              <p className="text-gray-600 font-medium mb-1">GoIT</p>
              <p className="text-gray-600 text-base">HTML5, CSS3, JavaScript, React, Node.js</p>
            </div>

            <div className="border-l-4 border-gray-400 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">Learn JavaScript</h3>
                <div className="flex items-center gap-2 text-gray-600 text-base">
                  <Calendar className="w-4 h-4" />
                  <span>December 2025 - Present</span>
                </div>
              </div>
              <p className="text-gray-600 font-medium">Scrimba</p>
            </div>

            <div className="border-l-4 border-gray-400 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">English, Academic Year Programme</h3>
                <div className="flex items-center gap-2 text-gray-600 text-base">
                  <Calendar className="w-4 h-4" />
                  <span>November 2023 - June 2024</span>
                </div>
              </div>
              <p className="text-gray-600 font-medium">{`Emerald Cultural Institute, Dublin, Ireland`}</p>
            </div>
          </div>
        </section>

        {/* Skills & Tools */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{`Skills & Tools`}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Design</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Interaction Design",
                  "Prototyping",
                  "Information Architecture",
                  "Journey Mapping",
                  "Design Systems",
                  "A/B Testing",
                  "Usability Testing",
                  "User Research",
                  "Visual Design",
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-base">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{`AI & Emerging Tech`}</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "LLM Prompt Design",
                  "Vercel v0",
                  "Cursor",
                  "Lovable",
                  "Uizard",
                  "FlowMap",
                  "Napkin AI",
                  "ChatGPT",
                  "Claude",
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-base">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Development</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML5/CSS3", "JavaScript", "React", "Node.js (in progress)", "SQL"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-base">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Design Tools</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Figma",
                  "Sketch",
                  "Adobe XD",
                  "Maze",
                  "Miro",
                  "Balsamiq",
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-base">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Process</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Jira",
                  "Confluence",
                  "Postman",
                  "Agile / Sprint Delivery",
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-base">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">English Upper Intermediate B2+</h3>
              <p className="text-gray-600 text-base">TIE Exam</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">German Elementary A2</h3>
              <p className="text-gray-600 text-base">Goethe-Institut</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

import { Clock, Users, Target, Star, Zap, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function FoodpandaCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-20 px-4 md:px-8 bg-gradient-to-br from-pink-50 to-pink-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                AI-Driven Redesign of Foodpanda's Vendor Menu Module
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                Mobile-first redesign leveraging AI to improve UX, streamline workflows, and reduce manual effort.
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
                  <span>B2B Platform</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/design-mode/dh.png"
                alt="Foodpanda Partner Menu Management - Desktop and mobile interface showing vendor portal with menu items and toggle controls"
                className="w-full max-w-sm mx-auto lg:max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section id="problem" className="py-16 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-red-50 via-orange-50 to-pink-50 rounded-2xl p-6 md:p-8  relative overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center relative z-10">
              Problem Statement
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/50 relative z-10">
              <p className="text-gray-700 mb-6 text-base leading-relaxed">
                Although vendors were expected to manage their menus independently, many relied heavily on support due
                to the system's complexity, lack of clarity, and poor mobile performance. Analytics showed that{" "}
                <strong> over 60% </strong> of interactions focused on just two routine tasks—product availability
                changes <strong> (30.9%)</strong> and variant price updates <strong>(29.8%) </strong>—while all other
                functions saw minimal usage. This suggested that advanced features were either hard to find, difficult
                to understand, or inefficient to use without assistance.
              </p>

              <h3 className="font-semibold text-gray-900 mb-4">Key Pain Points:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 p-3 bg-red-50/70 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">
                    <strong>Feature Underutilization: </strong> <strong>Over 60%</strong> of actions were limited to
                    product availability <strong> (30.9%)</strong> and price changes <strong>(29.8%)</strong>, while all
                    other features remained <strong>below 5% </strong>usage—indicating usability and discoverability
                    issues.
                  </span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-orange-50/70 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">
                    <strong>Support Dependency: </strong> Despite being a self-service tool, many vendors relied on
                    support to complete tasks due to unclear flows and complex interfaces.
                  </span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-pink-50/70 rounded-lg">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">
                    <strong>Poor Mobile Experience:</strong> Vendors found the UI hard to use on mobile, making
                    on-the-go management frustrating.
                  </span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-red-50/70 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">
                    <strong>Choice Group Confusion:</strong> Users struggled to differentiate between choice groups and
                    variations, often misapplying them or avoiding them altogether.
                  </span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-red-50/70 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">
                    <strong>No Efficient Bulk Editing:</strong>Vendors had to edit items individually, increasing time
                    spent on routine tasks.
                  </span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-red-50/70 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">
                    <strong>Approval Process Issues:</strong>Price and image updates were frequently rejected without
                    clear reasoning, causing delays and frustration.
                  </span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-red-50/70 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">
                    <strong>Image Upload Barrier:</strong>Vendors rarely uploaded photos due to high rejection rates and
                    the difficulty of taking images that met MQC standards—leading to low adoption and overreliance on
                    support.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Goals & Success Metrics */}
      <section className="py-2 md:py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            Goals & Success Metrics
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Goals */}
            <div className="bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center relative z-10 flex items-center justify-center gap-2">
                <Target className="w-6 h-6 text-blue-600" />
                Project Goals
              </h3>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/50 relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 p-3 bg-blue-50/70 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">
                      Enable vendors to complete key tasks without support.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-blue-50/70 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">
                      Simplify frequent actions like availability and price updates.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-blue-50/70 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">Clarify complex features (e.g., choice groups).</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-blue-50/70 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">Improve mobile usability.</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-blue-50/70 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">Increase adoption of underused features.</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-blue-50/70 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">Integrate AI to ease content creation.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="bg-gradient-to-br from-green-50 via-green-50 to-teal-50 rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center relative z-10 flex items-center justify-center gap-2">
                <TrendingUp className="w-6 h-6 text-green-600" />
                Success Metrics
              </h3>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/50 relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 p-3 bg-green-50/70 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">
                      <strong>Task Completion Rate:</strong> Targeted +25% increase in self-served completion for core
                      actions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-green-50/70 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">
                      <strong>Support Ticket Volume:</strong> To be monitored post-launch for reduction in menu-related
                      requests.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-green-50/70 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">
                      <strong>Time on Task:</strong> Will be measured after go-live to assess workflow efficiency.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-green-50/70 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">
                      <strong>Approval Error Rate:</strong> Tracked post-launch to reduce rejections on images and
                      pricing.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-green-50/70 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">
                      <strong>Feature Adoption:</strong> Expected growth in usage of image uploads, bulk editing, and
                      product creation (tracked via analytics after release).
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Research & Insights</h3>
              <p className="text-gray-600 text-base">
                Conducted benchmarking, user interviews, and journey mapping to uncover key friction points—such as poor
                navigation, mobile usability issues, and underutilized features due to complexity.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Design Strategy</h3>
              <p className="text-gray-600 text-base">
                Developed lo-fi wireframes and a mobile-first UI focused on simplifying high-frequency tasks (e.g.
                availability/price updates), improving discoverability, and introducing AI-driven tools for photo and
                content suggestions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Validation & Iteration</h3>
              <p className="text-gray-600 text-base">
                Ran usability tests with 8 vendors to validate the redesigned flows, leading to refinements that
                improved clarity, reduced support dependency, and increased feature adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & User Insights */}
      <section className="py-12 md:py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Research & User Insights
          </h2>

          <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">Benchmarking</h3>

          <p className="text-gray-600 text-center mb-8 text-base">
            We conducted a comprehensive benchmark analysis with leading food delivery platforms including UberEats,
            DoorDash, Grubhub, and Just Eat to understand industry standards and identify opportunities for improvement.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <img
                  src="/images/ubereats-logo.png"
                  alt="UberEats logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h4 className="font-semibold mb-2">UberEats</h4>
              <p className="text-gray-600 text-base">
                Supports multi-menu creation and bulk linking of customizations, but lacks clear editing modes and
                offers only menu-level availability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <img
                  src="/images/doordash-logo-round.png"
                  alt="DoorDash logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="font-semibold mb-2">DoorDash</h4>
              <p className="text-gray-600 text-base">
                Limited bulk editing capabilities and no support for reusable modifiers make menu management
                inefficient, especially for larger catalogs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <img src="/images/grab-logo.png" alt="Grab logo" className="w-full h-full object-contain rounded-lg" />
              </div>
              <h4 className="font-semibold mb-2">Grab</h4>
              <p className="text-gray-600 text-base">
                Offers detailed availability scheduling and bulk editing, but the interface remains complex and the
                editing modes require better clarity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <img src="/images/justeat-logo.png" alt="Just Eat logo" className="w-full h-full object-contain" />
              </div>
              <h4 className="font-semibold mb-2">Deliveroo</h4>
              <p className="text-gray-600 text-base">
                Supports multiple menu creation and category-level option groups, yet lacks smart tools like AI
                suggestions and advanced reuse logic.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="p-6 md:p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Key Insights</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Editing flows are cluttered:</h4>
                  <p className="text-gray-600 text-base">
                    Uber Eats and DoorDash combine too many tasks in a single flow. Grab and Deliveroo are slightly
                    clearer but still not optimal.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Availability control is limited on most platforms
                  </h4>
                  <p className="text-gray-600 text-base">
                    Only Grab offers product-level availability;others rely on less flexible menu/category-level setups.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Customization systems are inconsistent </h4>
                  <p className="text-gray-600 text-base">
                    Different terms (Modifiers, Option Groups, etc.) and levels cause confusion; DoorDash lacks bulk
                    linking.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Editing and availability modes are often merged</h4>
                  <p className="text-gray-600 text-base">
                    → Only Grab and Deliveroo clearly separate them for better task focus.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Reusability features vary widely</h4>
                  <p className="text-gray-600 text-base">
                    Uber Eats allows reuse across categories; others are more restricted.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">No platform supports AI-based content creation</h4>
                  <p className="text-gray-600 text-base">
                    Image uploads and descriptions remain manual, causing friction.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Design Opportunities</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Separate Quick vs Detailed Edit modes</h4>
                  <p className="text-gray-700 text-base">→ Simplify frequent tasks and reduce cognitive load.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Design mobile-first experiences</h4>
                  <p className="text-gray-700 text-base">→ Ensure smooth access and interaction on mobile devices.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Clarify and streamline choice group logic</h4>
                  <p className="text-gray-700 text-base">→ Use consistent naming and support reuse across items.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Strengthen bulk editing capabilities</h4>
                  <p className="text-gray-700 text-base">
                    → Enable batch updates for availability, pricing, and links.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Introduce AI-powered content suggestions</h4>
                  <p className="text-gray-700 text-base">→ Help vendors overcome photo upload and approval barriers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* User Persona */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">User Persona</h3>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              {/* Profile */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-pink-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Restaurant Owner Profile</h4>
                </div>
                <p className="text-gray-600 text-base">
                  Single-outlet restaurant owner using Talabat via Vendor Portal. Primarily uses mobile with moderate
                  tech proficiency.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Goals */}
                <div>
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-600" />
                    Goals
                  </h5>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-green-800 text-base">Quickly update availability and prices</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-green-800 text-base">Add/edit items without needing support</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-green-800 text-base">Understand and pass photo approvals</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-green-800 text-base">Manage everything easily on mobile</p>
                    </div>
                  </div>
                </div>

                {/* Pain Points */}
                <div>
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-red-600" />
                    Pain Points
                  </h5>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <p className="text-red-800 text-base">Confused by Choice Groups vs Variations</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <p className="text-red-800 text-base">Photo uploads often rejected without clear reason</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <p className="text-red-800 text-base">Hard to find basic actions (add/edit)</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <p className="text-red-800 text-base">Interface feels complex on mobile</p>
                    </div>
                  </div>
                </div>

                {/* Needs */}
                <div>
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-blue-600" />
                    Needs
                  </h5>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-blue-800 text-base">Fast, focused flows for daily tasks</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-blue-800 text-base">Clear feedback on actions and approvals</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-blue-800 text-base">Simple UI with tooltips and smart suggestions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* User Journey */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">User Journey</h3>
            <p className="text-gray-600 text-center mb-8 text-base">
              Conducted user interviews sessions with 8 vendors—all owners or managers of single-location restaurants—to
              deeply understand their workflows, challenges, and expectations. Creating a user journey helped in gaining
              insights into vendor behavior, identifying pain points, informing design decisions, highlighting
              improvement opportunities, and validating design solutions throughout the project's lifecycle.
            </p>
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="overflow-hidden rounded-xl shadow-lg max-w-4xl">
                <img
                  src="/images/user-research.png"
                  alt="User research findings and journey mapping"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            {/* Key Findings & Workshop */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Key Findings */}
              <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">Key Findings</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">
                      Confusing navigation; vendors often struggled to locate core features
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">
                      Lack of mobile optimization made it hard to complete tasks on phones
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">Difficulty adding new items or categories</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">Limited freedom in menu structuring</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">
                      Long approval times, with unclear or unconvincing rejection reasons
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">Confusion between "variations" and "choice groups"</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <p className="text-gray-800 text-base italic">
                    <strong>Vendor Quote:</strong> "Choice groups give me headaches."
                  </p>
                </div>
              </div>

              {/* Workshop for Defining Goals & Constraints */}
              <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-xl border border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-4 ">Workshop for Defining Goals & Constraints</h4>
                <p className="text-slate-700 text-base">
                  A collaborative workshop was conducted with designers and stakeholders to define clear goals and
                  constraints. This ensured alignment on expectations, provided direction for the design and development
                  process, supported efficient resource use, mitigated risks, and established measurable success
                  criteria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section id="design" className="py-6 md:py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Usability Testing & Outcomes */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
              Usability Testing & Outcomes
            </h2>

            {/* Test Overview */}
            <div className="mb-12 md:mb-16">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Test Overview</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-base">
                          <strong>Participants:</strong> 8 users
                        </span>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="text-gray-700 text-base">
                          <strong>Demographics:</strong> Aged 26–52, including small restaurant owners, franchise
                          managers, cafe operators
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="text-gray-700 text-base">
                          <strong>Scenarios Tested:</strong>
                          <ul className="text-gray-600 space-y-2 text-base mt-2">
                            <li>• Menu creation & editing</li>
                            <li>• Bulk actions (multi-item selection, batch editing)</li>
                            <li>• AI-generated item descriptions & images</li>
                            <li>• Preview & publish flows</li>
                            <li>• Mobile vs. Web experience</li>
                            <li>• Categorization & visibility settings</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Key Outcomes</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="text-gray-700 text-base font-medium">Task Completion Rate Increased from</span>
                        <span className="text-green-600 font-bold">60% to 91% (+51.6%)</span>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <span className="text-gray-700 text-base font-medium">
                          Positive Feedback on New Categorization Flow and AI-generated item descriptions & images
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4">User Feedback</h4>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                    <ul className="text-gray-600 space-y-2 text-base">
                      <li>• "The AI suggestions saved me hours — especially the auto-description feature."</li>
                      <li>• "Bulk editing was frustrating before. Now, I can update all prices in one go."</li>
                      <li>• "Mobile version feels much smoother than before. I can do everything on the go."</li>
                      <li>• "Seeing real-time preview before publishing made me feel more confident."</li>
                      <li>• "It was confusing before to find visibility settings. Now it's clearly labeled."</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Validated through usability testing */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
              Validated Through Usability Testing
            </h2>

            {/* Two Editing Modes & Adding New Item */}
            <div className="mb-12 md:mb-16">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">
                Two Editing Modes & Adding New Item
              </h3>
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="overflow-hidden rounded-xl  max-w-6xl">
                  <img
                    src="/images/edit-mode-new.png"
                    alt="Two editing modes interface showing quick edit for toggling availability and detailed edit for full item setup across three mobile screens"
                    className="w-full h-auto object-cover bg-transparent"
                    style={{ backgroundColor: "transparent" }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-blue-900 mb-3">Why it was designed</h4>
                  <p className="text-gray-700 text-base mb-4">
                    Vendors struggled with mixed edit flows, causing confusion and delays.
                  </p>
                  <p className="text-gray-700 text-base mb-4">We introduced Two Editing Modes:</p>
                  <ul className="text-gray-700 space-y-2 text-base mb-4">
                    <li>• Quick Edit for high-frequency actions like toggling availability</li>
                    <li>• Detailed Edit for tasks like changing prices, descriptions, or images</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-green-900 mb-3">Testing Results</h4>
                  <ul className="text-gray-700 space-y-3 text-base">
                    <li>• 7/8 found the edit button on their own</li>
                    <li>• 8/8 completed add item task</li>
                    <li>• ~90% overall task completion rate</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-purple-900 mb-3">User Feedback Highlights</h4>
                  <ul className="text-gray-700 space-y-3 text-base">
                    <li>• "It's clear what to do now. I don't have to scroll or guess."</li>
                    <li>• "I liked that I didn't have to go through too many steps just to add a dish."</li>
                    <li>• "The toggle for availability is much easier than before."</li>
                    <li>• "It's good to have both modes. I only use the simple one most of the time."</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Choice Groups (Size Options) */}
            <div className="mb-12 md:mb-16">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">
                Choice Groups (Size Options)
              </h3>
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="overflow-hidden rounded-xl shadow-lg max-w-4xl">
                  <img
                    src="/images/mobile-choice-groups.png"
                    alt="Choice groups interface for creating menu items with different sizes"
                    className="w-full h-auto object-cover bg-transparent"
                    style={{ backgroundColor: "transparent" }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-blue-900 mb-3">Why it was designed</h4>
                  <p className="text-gray-700 text-base">
                    Vendors often created separate products for different sizes instead of using modifiers due to
                    unclear group setup. The redesign introduced a cleaner, mobile-friendly way to create size-based
                    options with clearer labels, pricing, and selection rules.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-green-900 mb-3">Testing Results</h4>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li>• 6 out of 8 vendors created size options (e.g., Regular/Large) successfully</li>
                    <li>• Most found the "Create New" flow easy; some missed "From Products" at first</li>
                    <li>• Reduced duplication behavior compared to earlier design</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-purple-900 mb-3">User Feedback</h4>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li>• "Creating size options directly here is much faster."</li>
                    <li>• "I didn't realize I could reuse existing products at first."</li>
                    <li>• "The layout is clearer now—especially the required and max selection part."</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Choice Groups vs Variations */}
            <div className="mb-12 md:mb-16">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">
                Choice Groups vs Variations
              </h3>
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="overflow-hidden rounded-xl shadow-lg max-w-4xl">
                  <img
                    src="/images/mobile-choice-editing.png"
                    alt="Choice groups vs variations interface showing linking and management options"
                    className="w-full h-auto object-cover bg-transparent"
                    style={{ backgroundColor: "transparent" }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-blue-900 mb-3">Why it was designed</h4>
                  <p className="text-gray-700 text-base">
                    Vendors were unclear about when to use Choice Groups versus Variations, often duplicating products
                    instead of using modifiers. The redesign clarified this by streamlining group creation, linking, and
                    making modifier logic more intuitive and reusable.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-green-900 mb-3">Testing Results</h4>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li>• 5 out of 8 vendors used Choice Groups correctly</li>
                    <li>• 3 vendors hesitated or reverted to old habits (like duplicating items)</li>
                    <li>• Reusability and linking features were better understood than before</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-purple-900 mb-3">User Feedback</h4>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li>• "This helps me avoid creating the same product twice."</li>
                    <li>• "Linking products is easier now, but I didn't see the button right away."</li>
                    <li>• "I still confuse variations and options sometimes, but it's more usable."</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AI Content Suggestions */}
            <div className="mb-12 md:mb-16">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">
                AI Content Suggestions - From Insight to Design
              </h3>
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="overflow-hidden rounded-xl shadow-lg max-w-6xl">
                  <img
                    src="/images/ai-photo-suggestions.png"
                    alt="AI content suggestions interface showing AI-generated photos and menu completion features"
                    className="w-full h-auto object-cover bg-transparent"
                    style={{ backgroundColor: "transparent" }}
                  />
                </div>
              </div>

              <div className="flex justify-center mb-6 md:mb-8">
                <div className="overflow-hidden rounded-xl shadow-lg max-w-6xl">
                  <img
                    src="/images/ai-photo-suggestions-web1.png"
                    alt="AI photo suggestion interface showing multiple AI-generated burger photos in a grid layout with selection options"
                    className="w-full h-auto object-cover bg-transparent"
                    style={{ backgroundColor: "transparent" }}
                  />
                </div>
              </div>

              <div className="flex justify-center mb-6 md:mb-8">
                <div className="overflow-hidden rounded-xl shadow-lg max-w-6xl">
                  <img
                    src="/images/ai-photo-suggestions-web2.png"
                    alt="AI suggestion completion flow showing success message and progress tracking with next suggestion option"
                    className="w-full h-auto object-cover bg-transparent"
                    style={{ backgroundColor: "transparent" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-blue-900 mb-3">Why it was designed</h4>
                  <p className="text-gray-700 text-base">
                    During early usability testing, vendors were asked whether they would consider using AI-generated
                    images and descriptions.
                  </p>
                  <p className="text-gray-700 text-base mt-2">
                    5 out of 8 vendors expressed interest—mainly to save time and avoid photo rejections—but also voiced
                    concerns about authenticity.
                  </p>
                  <p className="text-gray-700 text-base mt-2">
                    This insight informed the design of a suggestion system that balances automation with control.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-green-900 mb-3">Testing Results (Follow-up usability sessions)</h4>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li>• 100% of vendors completed the AI suggestion task with ease</li>
                    <li>• All participants found and used the feature intuitively</li>
                    <li>• No confusion was observed during use</li>
                    <li>• Vendors easily recognized and managed AI-tagged content</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-purple-900 mb-3">User Feedback</h4>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li>• "This saves me so much time—I don't have to take my own photos."</li>
                    <li>• "As long as it looks like my dish, I'm okay using it."</li>
                    <li>• "The suggestion label is helpful. I know which items still need edits."</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            Impact & Key Learnings
          </h2>

          <div className="mb-8 md:mb-12">
            <p className="text-sm md:text-base text-gray-600 text-center mx-auto leading-relaxed">
              Successfully redesigned the Foodpanda Vendor Portal with a focus on mobile-first design, AI integration,
              and streamlined workflows. The new system significantly improved vendor satisfaction while reducing
              operational costs through intelligent automation. The project demonstrated the power of combining
              user-centered design with cutting-edge AI technology to solve real business problems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
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
                      ~90% task completion rate achieved in usability testing across core flows
                    </span>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-emerald-50/70 rounded-lg border border-emerald-100">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-gray-800 text-base font-medium">
                      Vendors completed key tasks (availability toggle, add/edit item, use choice groups) without
                      support
                    </span>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-teal-50/70 rounded-lg border border-teal-100">
                    <div className="w-3 h-3 bg-teal-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-gray-800 text-base font-medium">
                      Introduction of AI content suggestions was successfully adopted and reduced friction in content
                      creation
                    </span>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-green-50/70 rounded-lg border border-green-100">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-gray-800 text-base font-medium">
                      Clear separation of Quick vs Detailed Edit modes improved mobile usability and reduced confusion
                    </span>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-emerald-50/70 rounded-lg border border-emerald-100">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-gray-800 text-base font-medium">
                      Vendors began using Choice Groups instead of duplicating products, indicating better feature
                      understanding
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
                      Even small structural changes (e.g. edit mode separation) can significantly improve clarity and
                      speed
                    </span>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-indigo-50/70 rounded-lg border border-indigo-100">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-gray-800 text-base font-medium">
                      Visual guidance and labels reduce hesitation, especially on mobile
                    </span>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-purple-50/70 rounded-lg border border-purple-100">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-gray-800 text-base font-medium">
                      Giving vendors control over AI suggestions builds trust and encourages adoption
                    </span>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-blue-50/70 rounded-lg border border-blue-100">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-gray-800 text-base font-medium">
                      Some areas like choice group reuse still need clearer onboarding or contextual hints
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 md:p-8 rounded-2xl">
            <h2 className="w-full text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center relative z-10">
              Next Step
            </h2>
            <p className="text-gray-600 mb-8 text-base md:text-base text-center">
              To further validate and scale the redesign, upcoming efforts will focus on
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-lg">Validation & Testing</h4>
                <ul className="text-gray-700 space-y-3 text-base">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium">Conducting usability tests with chain restaurant vendors</span>
                      <p className="text-gray-600 text-base mt-1">
                        → To evaluate how the new structure supports more complex operational needs and team-based
                        workflows
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium">Testing with vendors managing multiple menus</span>
                      <p className="text-gray-600 text-base mt-1">
                        → To ensure flexibility and clarity for locations that require separate menus by branch, time,
                        or brand
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-lg">Feature Enhancements</h4>
                <ul className="text-gray-700 space-y-3 text-base">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium">Expanding AI content suggestions</span>
                      <p className="text-gray-600 text-base mt-1">
                        → Including more localized image sets and tailored descriptions based on cuisine type
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium">Collaborating on onboarding improvements</span>
                      <p className="text-gray-600 text-base mt-1">
                        → Although onboarding is owned by a separate team, our changes impact early user experience.
                        We've shared findings with their designers and will continue to collaborate to integrate
                        insights—especially around advanced features like Variations—into their flows.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

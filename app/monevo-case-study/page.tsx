import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, Target, Lightbulb, Award, PieChart } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExploreMoreWork } from "@/components/explore-more-work"
import { MonevoLightboxImage } from "@/components/monevo-lightbox-image"

export default function MonevoCaseStudy() {
  return (
    <div className="min-h-screen bg-white monevo-palette monevo-detail px-4 md:px-0">
      <Header />

      {/* Hero Section */}
      <section className="monevo-hero pt-28 md:pt-32 pb-12 md:pb-20 px-0 md:px-8 bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Monevo: Gamified Financial Habits
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                Designing a gamified approach to financial wellness that helps users distinguish between wants and needs
                while building healthy spending habits through engaging interactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>3 months</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>UX/UI Designer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  <span>FinTech Mobile App</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="max-w-lg mx-auto lg:max-w-xl">
                <MonevoLightboxImage
                  src="/images/design-mode/herosection.png"
                  alt="Monevo app interface showing light and dark mode dashboards with balance information and gamified task series"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section id="problem" className="py-12 md:py-16 px-0 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Problem Statement */}
          <div className="m-flat bg-gradient-to-br from-red-50 via-orange-50 to-pink-50 rounded-2xl p-4 md:p-8 mb-12 relative overflow-hidden">
            {/* Decorative Elements */}


            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center relative z-10">
              Problem Statement
            </h2>

            <div className="m-flat bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/50 relative z-10">
              <p className="text-gray-700 mb-6 text-base leading-relaxed">
                Monevo faced poor onboarding completion, low user engagement, and weak motivation mechanisms. Users
                struggled with understanding financial concepts, navigating the app, and staying committed to tasks
                leading to high abandonment and retention issues.
              </p>

              <h3 className="font-semibold text-gray-900 mb-4">Key Pain Points:</h3>
              <ul className="space-y-3">
                <li className="m-flat flex items-start gap-3 p-3 bg-red-50/70 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">
                    <strong>High Onboarding Drop-off: </strong> <span className="font-bold text-red-600">52.6% </span>{" "}
                    of users abandoned the welcome screen; only{" "}
                    <span className="font-bold text-green-600"> 47.4% </span>completed onboarding.
                  </span>
                </li>
                <li className="m-flat flex items-start gap-3 p-3 bg-orange-50/70 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">
                    <strong>Sharp Retention Decline: </strong> Retention dropped from{" "}
                    <span className="font-bold text-red-600">85.3%</span> (first open) to{" "}
                    <span className="font-bold text-green-600"> 28.8%</span> (onboarding complete).
                  </span>
                </li>
                <li className="m-flat flex items-start gap-3 p-3 bg-pink-50/70 rounded-lg">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">
                    <strong> Low Task Engagement:</strong> Only <span className="font-bold text-red-600">32.6%</span> of
                    users accessed the task list, with a task completion rate of{" "}
                    <span className="font-bold text-green-600">8.1%.</span>
                  </span>
                </li>
                <li className="m-flat flex items-start gap-3 p-3 bg-red-50/70 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">
                    <strong> Generic & Unclear Guidance:</strong> Users were confused by financial terms, unengaging
                    tasks, and the lack of personalized onboarding.
                  </span>
                </li>
                <li className="m-flat flex items-start gap-3 p-3 bg-red-50/70 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">
                    <strong> Wasted Acquisition Costs: </strong>Poor onboarding and retention undermined user
                    acquisition efforts and revenue opportunities.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Goals & Success Metrics */}
          <div className="m-flat bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-2xl p-4 md:p-8 mb-12">
            <h2 id="goals" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
              Goals & Success Metrics
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Project Goals */}
              <div className="m-flat bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">Project Goals</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">Reduce onboarding abandonment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">Improve task discoverability and engagement</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">Increase task completion and retention</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">Personalize and gamify the experience</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-base">Simplify onboarding flow</span>
                  </div>
                </div>
              </div>

              {/* Success Metrics */}
              <div className="m-flat bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">Success Metrics</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700 text-base font-medium">Onboarding Completion Increased to</span>
                    <span className="text-green-600 font-bold text-lg">70%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700 text-base font-medium">
                      Task Engagement Reached (Measurable on Live)
                    </span>
                    <span className="text-blue-600 font-bold text-lg">50%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-gray-700 text-base font-medium">Task Completion Rose To</span>
                    <span className="text-purple-600 font-bold text-lg">15%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700 text-base font-medium">
                      Users successfully completed onboarding and explored key features
                    </span>
                    <span className="text-green-600 font-bold text-lg">85.7%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-gray-700 text-base font-medium">
                      Retention Drop Target (Measurable on Live)
                    </span>
                    <span className="text-purple-600 font-bold text-lg">30%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Approach */}
            <div className="m-flat bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/50 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center" id="approach">Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="text-center">
                  <div className="monevo-approach-number w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-blue-600 font-bold text-xl">1</span>
                  </div>
                  <h4 className="font-bold text-lg mb-3">Research & Discovery</h4>
                  <p className="text-gray-600 text-base">
                    Benchmarked gamified and financial apps, mapped user journeys, and reviewed analytics to identify
                    pain points and motivation gaps.
                  </p>
                </div>
                <div className="text-center">
                  <div className="monevo-approach-number w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-green-600 font-bold text-xl">2</span>
                  </div>
                  <h4 className="font-bold text-lg mb-3">Ideation & Design</h4>
                  <p className="text-gray-600 text-base">
                    Created wireframes and task flows focused on gamification and clarity, including personalized tasks
                    and streamlined onboarding.
                  </p>
                </div>
                <div className="text-center">
                  <div className="monevo-approach-number w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-purple-600 font-bold text-xl">3</span>
                  </div>
                  <h4 className="font-bold text-lg mb-3">Validation & Iteration</h4>
                  <p className="text-gray-600 text-base">
                    Tested with users and collected feedback through wireframe testing sessions and iterated designs
                    based on user insights and engagement metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="m-nobg py-12 md:py-16 px-0 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            Research & User Insights
          </h2>

          {/* Benchmark Analysis */}
          <div className="m-flat bg-gray-50 rounded-2xl p-4 md:p-8 mb-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">Benchmarking</h3>
            <div className="overflow-x-auto">
              <MonevoLightboxImage
                src="/images/monevo-benchmark.png"
                alt="Competitive Analysis comparing Duolingo, Cleo, and Revolut"
                className="w-full min-w-[800px] md:min-w-0 rounded-xl shadow-lg"
              />
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Key Insights</h4>
                <ul className="text-gray-600 space-y-2 text-base">
                  <li>• Duolingo's gamification model proves highly effective for habit formation</li>
                  <li>• Cleo's conversational interface engages users but lacks comprehensive tools</li>
                  <li>• Revolut offers robust features but can overwhelm new users</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Our Differentiators</h4>
                <ul className="text-gray-600 space-y-2 text-base">
                  <li>• Focus on want vs. need categorization</li>
                  <li>• Educational content integrated into daily interactions</li>
                  <li>
                    • Potential for cashback and brand based rewards, offering real world value to users unlike most
                    competitor apps.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* User Personas */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">User Persona</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-lg">Home Economists</h4>
                </div>
                <p className="text-gray-700 text-base mb-3">
                  <span className="font-medium text-base">Age range:</span> 32-50 years old
                </p>
                <p className="text-gray-600 text-base">
                  Users managing family finances, looking for practical savings tips and stress-free budgeting tools.
                </p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-lg">Professionals</h4>
                </div>
                <p className="text-gray-700 text-base mb-3">
                  <span className="font-medium text-base">Age range:</span> 23-32 years old
                </p>
                <p className="text-gray-600 text-base">
                  Career driven individuals seeking, paying off debt or loans, smart financial management, tend to
                  purchase more than they actually need, motivated by rewards and goal tracking.
                </p>
              </div>
            </div>
            <p className="text-gray-600 mt-6 text-base">
              These personas, based on client led research, ensured the onboarding, gamified task system, and financial
              content were tailored to meet diverse user needs.
            </p>
          </div>

          {/* User Journey */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">User Journey Mapping</h3>
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-4 md:p-6 rounded-xl border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-3">Key Insights</h4>
              <p className="text-gray-700 text-base leading-relaxed">
                Users faced unclear guidance, overwhelming onboarding, low motivation, confusing visual design, and a
                lack of understanding around key features like the Monay Score. Our research highlighted the need for
                simpler language, streamlined flows, personalized goal setting, and clearer visual hierarchy to improve
                the overall experience and drive engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section id="design" className="py-12 md:py-16 px-0 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Design Strategy */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Design Strategy</h2>
            <div className="m-flat bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Lightbulb className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Progressive Learning</h4>
                      <p className="text-gray-600 text-base">
                        Broke down complex financial concepts into small, manageable steps to reduce cognitive load.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Award className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Gamification</h4>
                      <p className="text-gray-600 text-base">
                        Built habit loops using points, badges, and rewards to drive ongoing engagement.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Personalization</h4>
                      <p className="text-gray-600 text-base">
                        Tailored tasks and goals based on user types, aligned with AI logic through collaboration with
                        developers.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <PieChart className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Visual Clarity</h4>
                      <p className="text-gray-600 text-base">
                        Used a clean visual hierarchy and chat based guidance to improve comprehension and ease of use.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Guided Structure</h4>
                      <p className="text-gray-600 text-base">
                        After testing sequential and open task flows, we moved forward with a structured approach to
                        support goal setting and reduce decision fatigue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Design Solutions */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
              Key Design Solutions
            </h2>
            <div className="m-flat bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-2xl p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 text-base md:text-base">
                    Step by step onboarding clarified concepts like Wants vs. Needs, reducing drop-off.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 text-base md:text-base">
                    Gamified task system with points, rewards, and progress flow increased engagement and completion.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 text-base md:text-base">
                    Clear visual hierarchy and chat cues improved navigation and understanding.
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">
                    Personalized task flows based on user types, aligned with AI through dev collaboration.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">
                    Motivational chat reminders helped users stay on track with spending and task completion.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">
                    Enhanced reports showed key spending categories, completed tasks, and earned points.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">
                    Reward choice at series end boosted autonomy and user motivation.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="impact" className="m-nobg py-12 md:py-16 px-0 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            Usability Testing & Outcomes
          </h2>

          {/* Usability Test Overview */}
          <div className="mb-12 md:mb-16">
            <div className="m-flat bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Test Overview</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-base">
                        <strong>Participants:</strong> 7 users (3 potential + 4 existing)
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="text-gray-700 text-base">
                        <strong>Demographics:</strong> Aged 23–49, including students, doctors, police officers, IT
                        specialists, and bankers
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="text-gray-700 text-base">
                        <strong>Scenarios Tested:</strong>
                        <ul className="text-gray-600 space-y-2 text-base">
                          <li>• Onboarding & welcome screens</li>
                          <li>• Getting to know you series</li>
                          <li>• Expense entry & categorization (Wants vs. Needs)</li>
                          <li>• Navigating My Monay World</li>
                          <li>• Viewing reports & identifying spending patterns</li>
                          <li>• UI feedback on homepage alternatives</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Key Outcomes</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-700 text-base font-medium">Onboarding Completion Increased from</span>
                      <span className="monevo-metric-value text-green-600 font-bold">47.4% to 70% (+47.6%)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-700 text-base font-medium">Users Accessing Monay World Reached</span>
                      <span className="monevo-metric-value text-green-600 font-bold">85.7% (newly introduced)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-700 text-base font-medium">Task Completion Increased from</span>
                      <span className="monevo-metric-value text-green-600 font-bold">8.1% to 15% (+85.2%)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-700 text-base font-medium">Users Understanding Reports Achieved</span>
                      <span className="monevo-metric-value text-green-600 font-bold">85.7% (newly introduced)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-700 text-base font-medium">
                        Positive Feedback on Homepage UI Options
                      </span>
                      <span className="monevo-metric-value text-green-600 font-bold">85.7%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4">User Feedback</h4>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                  <ul className="text-gray-600 space-y-2 text-base">
                    <li>• "I didn't understand what Wants vs. Needs meant at first the explanation helped a lot."</li>
                    <li>• "The chat reminders felt like a coach guiding me through."</li>
                    <li>• "Seeing my most spent category made me rethink my priorities."</li>
                    <li>• "I liked being able to choose my own reward it felt more personal."</li>
                    <li>
                      • "Without the visual cues, I wouldn't have known where to go next. This version made it obvious."
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Validated through usability testing */}
          <div className="mb-12 md:mb-16">
            <h2 id="testing" className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
              Validated Through Usability
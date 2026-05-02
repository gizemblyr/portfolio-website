import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, Target } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function YemekcomCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-20 px-4 md:px-8 bg-gradient-to-br from-red-50 to-orange-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Redesigning Yemek.com: A Modern Recipe Platform
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                The recipe app experience was reimagined to enhance clarity, improve navigation, and foster user
                engagement through data-informed design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>6 months</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>UX/UI Designer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  <span>Recipe Platform</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/yemekcom-hero-mockup.png"
                alt="Yemek.com Recipe App - Mobile interfaces showing recipe discovery and detailed recipe views"
                className="w-full max-w-lg mx-auto lg:max-w-xl rounded-lg "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section id="overview" className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Problem Statement */}
          <div className="bg-gradient-to-br from-red-50 via-orange-50 to-pink-50 rounded-2xl p-6 md:p-8 mb-12 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-200/20 to-orange-200/20 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-200/20 to-red-200/20 rounded-full translate-y-16 -translate-x-16"></div>
            <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-orange-300/30 rounded-full"></div>
            <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-red-300/30 rounded-full"></div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center relative z-10">
              Problem Statement
            </h2>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/50 relative z-10">
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                Yemek.com users faced significant challenges in discovering relevant recipes, managing their personal
                recipe collections, and navigating the platform efficiently. The existing interface lacked modern design
                principles and failed to meet user expectations for a contemporary recipe platform.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-4">Current Challenges</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 p-3 bg-red-50/70 rounded-lg">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-base">Complex and outdated user interface design</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-orange-50/70 rounded-lg">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-base">Limited search and filtering capabilities</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-pink-50/70 rounded-lg">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-base">Poor recipe discovery and recommendation system</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-red-50/70 rounded-lg">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-base">Inadequate mobile experience and responsiveness</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-orange-50/70 rounded-lg">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-base">Lack of personalized user experience</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-4">Key Pain Points</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-gray-600 text-base font-medium">Navigation Difficulty</span>
                        <span className="text-red-600 font-semibold text-sm">High</span>
                      </div>
                      <p className="text-gray-600 text-base">
                        User interviews highlighted frequent confusion in navigating core categories.
                      </p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-gray-600 text-base font-medium">Search Effectiveness</span>
                        <span className="text-orange-600 font-semibold text-sm">High</span>
                      </div>
                      <p className="text-gray-600 text-base">
                        Many users needed multiple keywords to find relevant recipes.
                      </p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-gray-600 text-base font-medium">Mobile Usability</span>
                        <span className="text-red-600 font-semibold text-sm">High</span>
                      </div>
                      <p className="text-gray-600 text-base">
                        Session durations on mobile were 30% shorter than desktop.
                      </p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-gray-600 text-base font-medium">Recipe Organization</span>
                        <span className="text-orange-600 font-semibold text-sm">Moderate</span>
                      </div>
                      <p className="text-gray-600 text-base">Users lacked folders or tagging for saved recipes.</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-gray-600 text-base font-medium">Recipe Discovery</span>
                        <span className="text-red-600 font-semibold text-sm">Moderate</span>
                      </div>
                      <p className="text-gray-600 text-base">
                        Category pages had a bounce rate over 50%, indicating low content relevance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Goals & Success Metrics */}
          <div className="bg-white border rounded-2xl p-6 md:p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
              Goals & Success Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-4">Project Goals</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <p className="text-gray-800 text-base">
                      Modernize the Yemek.com platform to meet current UX/UI standards.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <p className="text-gray-800 text-base">
                      Enhance search and filtering for quicker recipe discovery.
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <p className="text-gray-800 text-base">
                      Improve mobile usability to increase engagement on smaller devices.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-gray-800 text-base">
                      Create a personalized user experience tailored to cooking preferences.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-gray-800 text-base">
                      Increase content accessibility and visibility across categories.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <p className="text-gray-800 text-base">Build a scalable UI system for consistent future updates.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-4">Success Metrics</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Time on Site</h4>
                    <p className="text-gray-800 text-base">
                      <strong>Goal:</strong> Increase average session duration on mobile by +20%, indicating improved
                      engagement.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Bounce Rate (Category Pages)</h4>
                    <p className="text-gray-800 text-base">
                      <strong>Goal:</strong> Reduce bounce rate from category pages by 15% through better content
                      relevance.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Search-to-Recipe Success Rate</h4>
                    <p className="text-gray-800 text-base">
                      <strong>Goal:</strong> Improve successful recipe finds per search session by +25% based on user
                      flow tracking.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Saved Recipes Interaction</h4>
                    <p className="text-gray-800 text-base">
                      <strong>Goal:</strong> Track increased use of the "Save" feature post-redesign, targeting a +30%
                      increase.
                    </p>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-teal-900 mb-2">User Satisfaction</h4>
                    <p className="text-gray-800 text-base">
                      <strong>Goal:</strong> Achieve 80%+ satisfaction in post-launch user surveys regarding navigation
                      and mobile usability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            Research & User Insights
          </h2>

          {/* User Research */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">Persona</h3>
            <div className="bg-white p-6 md:p-8 rounded-2xl">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👩‍🍳</span>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-gray-900">Seren – The Practical Home Cook</h5>
                    <p className="text-gray-600 text-base">Age: 29</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="font-semibold text-gray-700 min-w-[80px]">Occupation:</span>
                      <span className="text-gray-600 text-base">Marketing Specialist (Works full-time)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-semibold text-gray-700 min-w-[80px]">Location:</span>
                      <span className="text-gray-600 text-base">İstanbul</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-semibold text-gray-700 min-w-[80px]">Household:</span>
                      <span className="text-gray-600 text-base">Lives with partner</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="font-semibold text-gray-700 min-w-[80px]">Tech Use:</span>
                      <span className="text-gray-600 text-base">
                        Active smartphone user, uses apps for cooking, shopping, and planning
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-semibold text-gray-700 min-w-[80px]">Cooking:</span>
                      <span className="text-gray-600 text-base">Cooks 4–5 times a week</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/70 p-4 rounded-lg">
                    <h6 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span>🧠</span> Goals
                    </h6>
                    <ul className="text-gray-600 space-y-2 text-base">
                      <li>• Find quick, reliable, and healthy recipes after work</li>
                      <li>• Discover new meal ideas based on what's in the fridge</li>
                      <li>• Save and organize go-to recipes for reuse</li>
                      <li>• Share successful recipes with friends or on social media</li>
                    </ul>
                  </div>

                  <div className="bg-white/70 p-4 rounded-lg">
                    <h6 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span>😖</span> Pain Points
                    </h6>
                    <ul className="text-gray-600 space-y-2 text-base">
                      <li>• Recipe platforms are cluttered and hard to navigate</li>
                      <li>• Most platforms don't allow saving or categorizing favorite recipes</li>
                      <li>• Lacks filters to sort by ingredients on hand or prep time</li>
                      <li>• Gets overwhelmed by long blog-style introductions in recipes</li>
                      <li>• Mobile experience is not optimized — hard to use while cooking</li>
                    </ul>
                  </div>

                  <div className="bg-white/70 p-4 rounded-lg">
                    <h6 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span>📱</span> App Usage Behavior
                    </h6>
                    <ul className="text-gray-600 space-y-2 text-base">
                      <li>• Uses recipe apps like Yemek.com, Nefis Yemek Tarifleri, Instagram food creators</li>
                      <li>• Searches by ingredient first ("What can I cook with eggplant and yogurt?")</li>
                      <li>• Often filters for "under 30 minutes" or "low calorie" meals</li>
                      <li>• Scrolls for visuals first before reading details</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Interview Insights */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">User Interview Insights</h3>
            <div className="bg-white p-6 md:p-8 rounded-2xl">
              <p className="text-gray-600 mb-6 text-base">
                We conducted interviews with 14 users based on our defined personas. The goal was to understand their
                cooking habits, app usage behavior, and expectations from a recipe platform.
              </p>

              <h4 className="font-semibold text-lg mb-4">Key insights included:</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-base">
                      Many users search for recipes based on available ingredients, not just dish names.
                    </span>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-base">
                      Meal categories like "quick meals" or "budget-friendly" were preferred over traditional
                      categories.
                    </span>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-base">
                      Users wanted to save recipes more easily and organize them into folders (e.g., "weeknight
                      dinners," "diet meals").
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-base">
                      Search and filter experience felt overwhelming or not specific enough.
                    </span>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-base">
                      A strong preference for visually appealing, step-by-step guidance while cooking.
                    </span>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-base">
                      Some users mentioned they rarely interact with the community, but they trust recipes with high
                      ratings and real user photos.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Affinity Mapping */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">Affinity Mapping</h3>
            <div className="bg-white p-6 md:p-8 rounded-2xl">
              <p className="text-gray-600 mb-6 text-base">
                To deeply understand user needs, pain points, and feature expectations, we conducted 14 user interviews
                and analyzed over 100 user comments gathered from Google Play, App Store, and other public platforms.
                These insights were grouped using an affinity map to uncover recurring patterns and prioritize design
                decisions.
              </p>

              <div className="flex justify-center mb-6 md:mb-8">
                <div className="overflow-hidden rounded-xl shadow-lg max-w-6xl">
                  <img
                    src="/images/yemekcom-affinity-mapping.png"
                    alt="Affinity mapping exercise showing user feedback organized into categories: Reason for Preferences, Paint Points, and User Requirements with color-coded sticky notes and star ratings"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <h4 className="font-semibold text-lg mb-4">Key Findings:</h4>

              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-900 mb-2">Discovery & Search Frustration:</h5>
                  <p className="text-gray-600 text-base mb-2">
                    Users had trouble finding what they were looking for due to limited filters and a lack of visual
                    categorization.
                  </p>
                  <p className="text-gray-600 text-base italic">
                    "I wish I could just filter by cooking time or ingredients I already have."
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-900 mb-2">Organization & Recipe Management:</h5>
                  <p className="text-gray-600 text-base mb-2">
                    Many users wanted better tools to save, organize, and access favorite recipes.
                  </p>
                  <p className="text-gray-600 text-base italic">
                    "I save so many recipes, but can't find them later unless I scroll forever."
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-900 mb-2">Cooking Experience Issues:</h5>
                  <p className="text-gray-600 text-base mb-2">
                    Users found long recipe blocks hard to follow while cooking. They preferred step-by-step
                    instructions with images.
                  </p>
                  <p className="text-gray-600 text-base italic">
                    "I want clear steps and photos. I can't scroll and stir at the same time."
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-orange-900 mb-2">Desire for Personalization:</h5>
                  <p className="text-gray-600 text-base mb-2">
                    There was high interest in features that adapt to individual needs like dietary preferences or
                    cooking goals.
                  </p>
                  <p className="text-gray-600 text-base italic">
                    "I'm vegan — I wish it didn't always show me meat recipes first."
                  </p>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-teal-900 mb-2">Trust through Community Content:</h5>
                  <p className="text-gray-600 text-base mb-2">
                    People trusted recipes more when they included user comments or photos.
                  </p>
                  <p className="text-gray-600 text-base italic">
                    "If I see others tried it and shared pictures, I trust it more."
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 text-base">
                  These insights formed the foundation for our design strategy and helped us prioritize solutions that
                  would create a more intuitive, personalized, and motivating cooking experience.
                </p>
              </div>
            </div>
          </div>

          {/* Competitive Analysis */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">Competitive Analysis</h3>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="overflow-x-auto mb-6">
                <img
                  src="/images/yemekcom-detailed-competitive-analysis.png"
                  alt="Detailed competitive analysis comparing recipe app features across search, recipe details, actions, display modes, and profile features"
                  className="w-full min-w-[800px] md:min-w-0 rounded-xl shadow-lg"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Market Analysis</h4>
                  <ul className="text-gray-600 space-y-3 text-base">
                    <li>• Analyzed leading recipe platforms and their feature sets</li>
                    <li>• Identified gaps in current market offerings</li>
                    <li>• Evaluated user experience patterns across competitors</li>
                    <li>• Assessed mobile vs desktop usage trends</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Key Differentiators</h4>
                  <ul className="text-gray-600 space-y-3 text-base">
                    <li>• Enhanced search with photo recognition capabilities</li>
                    <li>• Comprehensive recipe management system</li>
                    <li>• Advanced filtering and categorization options</li>
                    <li>• Integrated social features for recipe sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section id="design" className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Design Solutions</h2>

          {/* Information Architecture */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">Information Architecture</h3>
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="overflow-hidden rounded-xl shadow-lg max-w-6xl">
                <img
                  src="/images/yemekcom-information-architecture.png"
                  alt="Information architecture diagram showing Yemek.com's sitemap with main navigation structure including Home Page, Search, My Recipes, Create, and Profile sections, along with Sign In and Sign Up flows"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Wireframes */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">Wireframes</h3>
            <p className="text-gray-600 text-center mb-8 text-base">
              Low-fidelity wireframes were created to outline core layouts and user flows. The focus was on improving
              recipe discovery, search usability, and personal recipe management. These wireframes helped validate ideas
              early and served as a foundation for the final UI design.
            </p>

            {/* Wireframes & Information Architecture */}
          </div>
          <div className="mb-12 md:mb-16">
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="overflow-hidden rounded-xl shadow-lg max-w-6xl">
                <img
                  src="/images/yemekcom-wireframes.png"
                  alt="Comprehensive wireframes showing all app screens and user flows"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Design System */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">Design System</h3>
            <p className="text-gray-600 text-center mb-8 text-base">
              A scalable UI library was created to ensure consistency across the app. It included:
            </p>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Core Components</h4>
                  <ul className="text-gray-600 space-y-3 text-base">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Base styles for colors, typography, spacing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Core components like buttons, inputs, tags</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>App-specific elements such as recipe cards and timers</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Implementation Benefits</h4>
                  <p className="text-gray-600 text-base leading-relaxed mb-4">
                    Responsive variants and interactive states were defined to support mobile use and developer handoff.
                  </p>
                  <p className="text-gray-600 text-base leading-relaxed">
                    This design system streamlined the UI process and supports future growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* UI Design */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-8 md:mb-12 text-center">UI Design</h3>

            {/* Home & Search Experience */}
            <div className="mb-12 md:mb-16">
              <h4 className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-center">Home & Search Experience</h4>
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="overflow-hidden rounded-xl shadow-lg max-w-4xl">
                  <img
                    src="/images/yemekcom-home-search.png"
                    alt="Home page and search functionality with filtering options"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h5 className="font-semibold text-blue-900 mb-3">Why It Was Designed</h5>
                  <p className="text-gray-600 text-base">
                    Users had difficulty discovering relevant recipes due to limited filtering, non-visual category
                    lists, and a basic search experience. Comments and analytics showed users often abandoned search
                    when they couldn't find what they were looking for quickly or visually.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h5 className="font-semibold text-green-900 mb-3">What Improved</h5>
                  <p className="text-gray-600 text-base">
                    We redesigned the filter panel to allow multi-dimensional sorting (meal type, prep time, cooking
                    method, diet). Categories were restructured visually for easier scanning. Smart search suggestions
                    were added to improve speed and accuracy in finding recipes.
                  </p>
                </div>
              </div>
            </div>

            {/* Recipe Details & Cooking Mode */}
            <div className="mb-12 md:mb-16">
              <h4 className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-center">
                Recipe Details & Cooking Mode
              </h4>
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="overflow-hidden rounded-xl shadow-lg max-w-4xl">
                  <img
                    src="/images/yemekcom-recipe-details.png"
                    alt="Detailed recipe view with ingredients, instructions, and cooking mode"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h5 className="font-semibold text-blue-900 mb-3">Why It Was Designed</h5>
                  <p className="text-gray-600 text-base">
                    Users needed a clearer, distraction-free cooking flow and struggled to follow long recipe texts. The
                    old layout didn't support step tracking, didn't highlight similar recipes, and lacked visible
                    community feedback.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h5 className="font-semibold text-green-900 mb-3">What Improved</h5>
                  <ul className="text-gray-600 space-y-2 text-base">
                    <li>• Added a scrollable Cooking Mode for step-by-step instructions</li>
                    <li>• Improved layout clarity for ingredients and timing</li>
                    <li>• Highlighted user comments and similar recipes</li>
                    <li>• Included clear CTAs like "Start" and "Finish" for better flow</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Recipe Management */}
            <div className="mb-12 md:mb-16">
              <h4 className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-center">Recipe Management & Lists</h4>
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="overflow-hidden rounded-xl shadow-lg max-w-4xl">
                  <img
                    src="/images/yemekcom-recipe-lists.png"
                    alt="Recipe list management and favorites organization"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h5 className="font-semibold text-blue-900 mb-3"> Why it was designed</h5>
                  <p className="text-gray-600 text-base">
                    Users wanted a better way to organize and revisit recipes. The old system lacked grouping, public
                    sharing, and easy access to saved content, making management difficult.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h5 className="font-semibold text-green-900 mb-3">What Improved</h5>
                  <ul className="text-gray-600 space-y-2 text-base">
                    <li>• Introduced custom recipe lists with editable titles</li>
                    <li>• Added favorites tab for quick access</li>
                    <li>• Enabled public/private toggle for shared inspiration</li>
                    <li>• Created a clean, visual layout for list previews</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Recipe Creation & Sharing */}
            <div className="mb-12 md:mb-16">
              <h4 className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-center">Recipe Creation & Sharing</h4>
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="overflow-hidden rounded-xl shadow-lg max-w-4xl">
                  <img
                    src="/images/yemekcom-recipe-sharing.png"
                    alt="Recipe creation workflow with step-by-step guidance"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h5 className="font-semibold text-blue-900 mb-3">Why It Was Designed</h5>
                  <ul className="text-gray-600 space-y-2 text-base">
                    <li>• Users needed a structured and flexible way to share recipes.</li>
                    <li>• Existing flow lacked step-by-step clarity and visual cues.</li>
                    <li>• No space for tips or serving suggestions.</li>
                    <li>• Users wanted reassurance that their content wouldn't be lost mid-entry.</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h5 className="font-semibold text-green-900 mb-3">What Improved</h5>
                  <ul className="text-gray-600 space-y-2 text-base">
                    <li>• Added multiple steps with optional images.</li>
                    <li>• Included optional fields: tips, serving suggestions, and recipe intro.</li>
                    <li>• Step-by-step navigation with Back/Next buttons.</li>
                    <li>• Auto-save feature with visible timestamp.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Profiles & Social Features */}
            <div className="mb-12 md:mb-16">
              <h4 className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-center">
                User Profiles & Social Features
              </h4>
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="overflow-hidden rounded-xl shadow-lg max-w-4xl">
                  <img
                    src="/images/yemekcom-user-profiles.png"
                    alt="User profile management and social interaction features"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h5 className="font-semibold text-blue-900 mb-3">Why It Was Designed</h5>
                  <ul className="text-gray-600 space-y-2 text-base">
                    <li>• Users wanted to showcase their shared recipes under their own profiles.</li>
                    <li>• There was no way to explore others' recipe collections or follow favorite authors.</li>
                    <li>• Lack of social presence reduced engagement and repeat visits.</li>
                    <li>• Users asked for a simple space to edit their profile and track content.</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h5 className="font-semibold text-green-900 mb-3">What Improved</h5>
                  <ul className="text-gray-600 space-y-2 text-base">
                    <li>• Introduced public user profiles with follower/following counts.</li>
                    <li>• Enabled recipe list sharing for other users to browse and save.</li>
                    <li>• Added a clear toggle between "Shared Recipes" and "Recipe List."</li>
                    <li>• Included social links and easy-to-use "Edit Profile" and "Follow" buttons.</li>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-6">Impact</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Enhanced Recipe Discoverability</h4>
                  <p className="text-gray-600 text-base">
                    Improved recipe discoverability through enhanced search, filtering, and tag systems.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Increased Feature Usage</h4>
                  <p className="text-gray-600 text-base">
                    Post-launch data showed a 32% increase in users utilizing advanced search filters (e.g., cooking
                    time, ingredients).
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Improved Task Completion</h4>
                  <p className="text-gray-600 text-base">
                    Simplified navigation contributed to a +28% increase in successful task completion for key actions
                    like saving or sharing a recipe.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Higher User Engagement</h4>
                  <p className="text-gray-600 text-base">
                    The redesigned layout and visuals resulted in higher engagement, with users spending more time
                    exploring new categories and community content.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-6">Key Learnings</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Personalization Matters</h4>
                  <p className="text-gray-600 text-base">
                    Ingredient-based search and "just for you" sections resonated strongly with users.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Structured Cooking Mode</h4>
                  <p className="text-gray-600 text-base">
                    A structured, visually clear cooking mode improves usability and reduces cognitive load, especially
                    on mobile.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Social Features Drive Engagement</h4>
                  <p className="text-gray-600 text-base">
                    Social and community features (like recipe sharing and following) help build long-term engagement
                    when made easy to discover.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Small UI Improvements Matter</h4>
                  <p className="text-gray-600 text-base">
                    Even small UI improvements (e.g., favorites tab, recipe folders) can significantly impact retention
                    when tied to user needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 md:p-8 rounded-2xl mb-12">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">Next Steps</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/70 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Monitor Key Metrics
                </h4>
                <p className="text-gray-600 text-base">
                  We've already begun tracking key metrics such as recipe discovery and completion rates. This tracking
                  will continue to validate design impact with real user data.
                </p>
              </div>

              <div className="bg-white/70 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Iterate Based on Live Feedback
                </h4>
                <p className="text-gray-600 text-base">
                  Continuous improvements will be made based on user behavior analytics and feedback collected from the
                  live platform.
                </p>
              </div>

              <div className="bg-white/70 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Expand Personalization Features
                </h4>
                <p className="text-gray-600 text-base">
                  Work will continue on refining personalized content and recommendations to increase engagement and
                  relevance for individual users.
                </p>
              </div>

              <div className="bg-white/70 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  Explore Recipe Creation Flow
                </h4>
                <p className="text-gray-600 text-base">
                  Further research, including user interviews and usability testing, will be conducted to improve the
                  recipe creation experience.
                </p>
              </div>
            </div>
          </div>

          {/* Download App Section */}
          <div className="bg-white border rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">Download the App</h3>
            <p className="text-gray-600 text-center mb-6 text-base">
              Experience the redesigned Yemek.com app with enhanced recipe discovery and improved user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://apps.apple.com/app/yemek-com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors min-w-[200px]">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.yemeksepeti.yemekcom&hl=tr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors min-w-[200px]">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

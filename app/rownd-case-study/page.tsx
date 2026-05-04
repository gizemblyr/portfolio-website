import { Clock, Users, Target, Settings, Shield, Layers } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function RowndCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-20 px-4 md:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Internal 3D Printing Machine Control Interface
          </h1>
          <p className="text-lg md:text-xl text-purple-200 mb-6 md:mb-8">
            UI/UX improvements for a tablet-based precision machine control interface
          </p>
          <p className="text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto">
            I worked on UI/UX improvements for an internal 3D printing machine control interface designed for tablet use. The product includes technical workflows such as axis control, machine movement, settings, system updates, safety alerts, and machine state feedback.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-purple-200">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Internal Project</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>UI/UX Designer</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span>Technical Interface</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview and My Role */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Overview */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                My work focused on making the interface clearer, more editable, and easier to follow for tablet-based use. Since the product controls a physical machine, the experience needed to support accuracy, quick system feedback, and safer decision-making during machine-related actions.
              </p>
            </div>

            {/* My Role */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My Role</h2>
              <p className="text-gray-600 mb-4">UI/UX Designer</p>
              <p className="text-gray-700 mb-4">
                I worked on both interaction logic and visual refinement across selected areas of the app.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Editable X, Y, Z axis input states
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Precision numeric controls
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Main control panel improvements
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Settings and system update UX flow
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Toast messages, pop ups, and bottom sheets
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Safety and warning dialogs
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Compact design system foundation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  Color styles and token structure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Challenge</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The interface included many technical controls, so the challenge was not only visual consistency. Users needed clear feedback when entering values, triggering actions, updating the system, or seeing safety warnings. The goal was to make complex machine-control flows easier to understand without making the interface feel heavier on a tablet screen.
            </p>
          </div>
        </div>
      </section>

      {/* Key Improvements */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Key Improvements</h2>

          {/* Improvement 1: Control Panel and Precision Input Combined */}
          <div className="mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Control Panel Improvements and Precision Input States</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              I refined the main control panel and updated the X, Y, and Z axis areas to support editable input states. I also worked on the top tab area and additional controls such as ATC and supporting machine control modules. I improved precision input components for values such as RPM, movement increments, and speed/feed settings. I also refined action states for controls like Go, Zero, Home, and Zero All.
            </p>
            <img
              src="/images/rownd-control-panel.png"
              alt="Editable axis controls, updated top area, expanded machine control modules, and precision input states"
              className="w-full rounded-xl"
            />
            <p className="text-sm text-gray-500 mt-3">
              Editable axis controls, updated top area, expanded machine control modules, and precision input states
            </p>
          </div>

          {/* Improvement 2: Settings and System Update */}
          <div className="mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Layers className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Settings and System Update UX Flow</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              I worked on the Settings area and the full system update flow, including update availability, version details, download states, progress feedback, restart prompts, success messages, toast notifications, and final up-to-date confirmation. The goal was to make the update process clear and predictable.
            </p>
            <div className="space-y-6">
              <div>
                <img
                  src="/images/rownd-settings-update.png"
                  alt="Settings and system update flow screens"
                  className="w-full rounded-xl"
                />
                <p className="text-sm text-gray-500 mt-3">
                  Settings and system update flow screens
                </p>
              </div>
              <div>
                <img
                  src="/images/rownd-update-flow.png"
                  alt="Version download, progress states, restart prompts, and success feedback"
                  className="w-full rounded-xl"
                />
                <p className="text-sm text-gray-500 mt-3">
                  Version download, progress states, restart prompts, and success feedback
                </p>
              </div>
            </div>
          </div>

          {/* Improvement 3: Safety and Warning States */}
          <div className="mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Safety and Warning States</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              I worked on warning and safety dialogs such as Axis Limit Reached and Lid Is Open. These states were designed to explain machine-related issues clearly and guide the user toward the next safe action.
            </p>
            <img
              src="/images/rownd-safety-dialogs.png"
              alt="Safety and warning dialogs for machine-related states and edge conditions"
              className="w-full rounded-xl"
            />
            <p className="text-sm text-gray-500 mt-3">
              Safety and warning dialogs for machine-related states and edge conditions
            </p>
          </div>
        </div>
      </section>

      {/* Compact Design System */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Compact Design System</h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto text-center mb-10">
            I helped create a compact design system foundation with color styles, reusable component states, and token structure. It included buttons, tabs, toggles, numeric steppers, editable inputs, keyboard patterns, toast messages, update cards, pop ups, and bottom sheets.
          </p>

          <div className="space-y-8">
            <div>
              <img
                src="/images/rownd-ui-components.png"
                alt="Compact component system with reusable states and technical control patterns"
                className="w-full rounded-xl"
              />
              <p className="text-sm text-gray-400 mt-3">
                Compact component system with reusable states and technical control patterns
              </p>
            </div>
            <div>
              <img
                src="/images/rownd-color-tokens.png"
                alt="Color styles and token structure"
                className="w-full rounded-xl"
              />
              <p className="text-sm text-gray-400 mt-3">
                Color styles and token structure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Next Steps</h2>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 md:p-8">
              <p className="text-gray-700 leading-relaxed">
                The next phase will include user interviews to better understand how users interact with the home screen and main control areas on tablet. Based on these insights, home screen improvements will continue through iterative design updates, usability testing, and refinement. Error states and edge cases will also be reviewed in more detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

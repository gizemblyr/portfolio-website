import type { CaseStudy } from "./types"
import monevoBenchmark from "@/public/images/monevo-benchmark.png"
import monevoWelcome from "@/public/images/monevo-welcome.png"
import monevoOnboardingSeries from "@/public/images/monevo-onboarding-series.png"
import monevoWorld from "@/public/images/monevo-world.png"
import monevoReceipt from "@/public/images/monevo-receipt.png"
import monevoSeries from "@/public/images/monevo-series.png"
import monevoHomepageVariants from "@/public/images/monevo-homepage-variants.png"
import monevoMostSpent from "@/public/images/monevo-most-spent.png"
import monevoReminders from "@/public/images/monevo-reminders.png"
import monevoHero from "@/public/images/monevo-hero.png"
import monevoCover from "@/public/images/projects/monevo-cover.jpg"

// Copy is taken verbatim from docs/case-study/reference/monevo-desktop.html.
export const monevo: CaseStudy = {
  slug: "monevo",
  href: "/monevo-case-study",
  category: "Fintech · Mobile app",
  title: "Monevo: Gamified Financial Habits",
  summary: "Designing a gamified approach to financial wellness that helps users distinguish between wants and needs while building healthy spending habits through engaging interactions.",
  meta: [
    {
      label: "Role",
      value: "UX/UI Designer"
    },
    {
      label: "Duration",
      value: "3 months"
    },
    {
      label: "Platform",
      value: "Mobile app"
    },
    {
      label: "Scope",
      value: { desktop: "Benchmarking, journey mapping, wireframes, usability testing", mobile: "Benchmarking, journey mapping, wireframes, testing" }
    }
  ],
  hero: {
    src: monevoHero,
    alt: "Monevo dashboards in light and dark mode with balance and gamified task series"
  },
  glance: [
    {
      title: "Problem",
      text: "Over half of new users left at the welcome screen, and only 8.1% completed tasks. Onboarding asked for everything upfront."
    },
    {
      title: "What I did",
      text: "Rebuilt onboarding as a short gamified task series, added a reward store and goal-based task flows, and tested two homepage structures."
    },
    {
      title: "Outcome",
      text: "In usability testing with 7 participants, onboarding completion reached 70% and task completion 15%."
    }
  ],
  sections: [
    {
      id: "problem",
      label: "Problem",
      title: "Understanding the Problem Through Metrics",
      blocks: [
        {
          type: "paragraph",
          text: "Monevo faced poor onboarding completion, low user engagement and weak motivation mechanisms. Users struggled with understanding financial concepts, navigating the app and staying committed to tasks, leading to high abandonment and retention issues.",
          lead: true
        },
        {
          type: "metrics",
          columns: 2,
          items: [
            {
              value: "52.6%",
              label: "abandoned the welcome screen; only 47.4% completed onboarding"
            },
            {
              value: { desktop: "85.3% → 28.8%", mobile: "28.8%" },
              label: { desktop: "retention from first open to onboarding complete", mobile: "retained after onboarding, from 85.3% at first open" }
            },
            {
              value: "32.6%",
              label: "of users accessed the task list"
            },
            {
              value: "8.1%",
              label: "task completion rate"
            }
          ],
          source: "Source: live product analytics before the redesign."
        },
        {
          type: "list",
          items: [
            {
              title: "Generic and unclear guidance.",
              text: "Users were confused by financial terms, unengaging tasks and the lack of personalised onboarding."
            },
            {
              title: "Wasted acquisition costs.",
              text: "Poor onboarding and retention undermined user acquisition efforts and revenue opportunities."
            }
          ]
        }
      ]
    },
    {
      id: "goals",
      label: "Goals",
      title: "Goals and Success Metrics",
      blocks: [
        {
          type: "twoLists",
          lists: [
            {
              title: "Project goals",
              items: [
                "Reduce onboarding abandonment",
                "Improve task discoverability and engagement",
                "Increase task completion and retention",
                "Personalise and gamify the experience",
                "Simplify the onboarding flow"
              ],
              dense: true
            },
            {
              title: "Success metrics",
              items: [
                "Onboarding completion: 70%",
                { desktop: "Task engagement: 50%", mobile: "Task engagement: 50% (measurable on live)" },
                "Task completion: 15%",
                "Completed onboarding and explored key features: 85.7%",
                { desktop: "Retention drop target: 30%", mobile: "Retention drop target: 30% (measurable on live)" }
              ],
              dense: true
            }
          ]
        }
      ]
    },
    {
      id: "approach",
      label: "Approach",
      title: "Research, Design, Validate",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Research and discovery",
              text: "Benchmarked gamified and financial apps, mapped user journeys and reviewed analytics to identify pain points and motivation gaps."
            },
            {
              title: "Ideation and design",
              text: "Created wireframes and task flows focused on gamification and clarity, including personalised tasks and streamlined onboarding."
            },
            {
              title: "Validation and iteration",
              text: "Tested with users, collected feedback through wireframe testing sessions and iterated designs based on user insights and engagement metrics."
            }
          ]
        }
      ]
    },
    {
      id: "research",
      label: "Research",
      title: "Research and User Insights",
      blocks: [
        {
          type: "subheading",
          text: "Benchmarking"
        },
        {
          type: "figure",
          image: {
            src: monevoBenchmark,
            alt: "Benchmark comparison of Duolingo, Cleo and Revolut"
          }
        },
        {
          type: "twoLists",
          lists: [
            {
              title: "Key insights",
              items: [
                "Duolingo's gamification model proves highly effective for habit formation",
                "Cleo's conversational interface engages users but lacks comprehensive tools",
                "Revolut offers robust features but can overwhelm new users"
              ]
            },
            {
              title: "Our differentiators",
              items: [
                "Focus on wants vs. needs categorisation",
                "Educational content integrated into daily interactions",
                "Potential for cashback and brand-based rewards, offering real-world value unlike most competitor apps"
              ]
            }
          ]
        },
        {
          type: "subheading",
          text: "User personas"
        },
        {
          type: "personas",
          items: [
            {
              name: "Home economists",
              meta: "32–50 years old",
              text: "Users managing family finances, looking for practical savings tips and stress-free budgeting tools."
            },
            {
              name: "Professionals",
              meta: "23–32 years old",
              text: "Career-driven individuals paying off debt or loans and seeking smart financial management. They tend to buy more than they need and are motivated by rewards and goal tracking."
            }
          ]
        },
        {
          type: "paragraph",
          text: "These personas, based on client-led research, ensured the onboarding, gamified task system and financial content were tailored to diverse user needs."
        },
        {
          type: "subheading",
          text: "User journey mapping"
        },
        {
          type: "paragraph",
          text: "Users faced unclear guidance, overwhelming onboarding, low motivation, confusing visual design and a lack of understanding around key features like the Monevo Score. The research highlighted the need for simpler language, streamlined flows, personalised goal setting and a clearer visual hierarchy."
        }
      ]
    },
    {
      id: "design",
      label: "Strategy",
      title: "Design Strategy",
      blocks: [
        {
          type: "principles",
          columns: 3,
          items: [
            {
              title: "Progressive learning",
              text: "Broke complex financial concepts into small, manageable steps to reduce cognitive load."
            },
            {
              title: "Gamification",
              text: "Built habit loops using points, badges and rewards to drive ongoing engagement."
            },
            {
              title: "Personalisation",
              text: "Tailored tasks and goals to user types, aligned with AI logic through collaboration with developers."
            },
            {
              title: "Visual clarity",
              text: "A clean visual hierarchy and chat-based guidance improved comprehension and ease of use."
            },
            {
              title: "Guided structure",
              text: "After testing sequential and open task flows, we chose a structured approach that supports goal setting and reduces decision fatigue."
            }
          ]
        },
        {
          type: "subheading",
          text: "Key design solutions"
        },
        {
          type: "list",
          items: [
            "Step-by-step onboarding clarified concepts like wants vs. needs, reducing drop-off",
            "A gamified task system with points, rewards and progress flow increased engagement and completion",
            "Clear visual hierarchy and chat cues improved navigation and understanding",
            "Personalised task flows based on user types, aligned with AI through dev collaboration",
            "Motivational chat reminders helped users stay on track with spending and tasks",
            "Enhanced reports showed key spending categories, completed tasks and earned points",
            "Reward choice at the end of a series boosted autonomy and motivation"
          ]
        }
      ]
    },
    {
      id: "testing",
      label: "Design & Testing",
      title: "Validated Through Usability Testing",
      blocks: [
        {
          type: "solution",
          title: "Welcome screens",
          images: [
            {
              src: monevoWelcome,
              alt: "Redesigned Monevo welcome screens"
            }
          ],
          columns: [
            {
              title: "Why",
              text: "The old welcome screen lacked clarity and failed to explain the app's value, leading to early drop-offs. We redesigned it to showcase key features like gamification and financial education using visuals and app previews, so users quickly understand what to expect."
            },
            {
              title: "Testing results",
              items: [
                "Before: over 50% did not proceed after the first open (live)",
                "After: 70% of participants continued into the first series",
                "85.7% described it as \"inviting\" or \"clearer than expected\""
              ]
            },
            {
              title: "What users said",
              quotes: [
                "\"I understood what the app was about before signing up, that made a difference.\"",
                "\"The visuals helped me see that it wasn't just another finance app.\"",
                "\"I felt like I was being introduced, not just dropped into something.\""
              ]
            }
          ]
        },
        {
          type: "solution",
          title: "Gamified onboarding via \"Getting to know you\" series",
          images: [
            {
              src: monevoOnboardingSeries,
              alt: "Gamified onboarding task series screens"
            }
          ],
          columns: [
            {
              title: "Why",
              text: "The old app asked for personal and financial information right after opening, leading to a 52.6% drop-off at the welcome screen. We restructured onboarding as a gamified task series: small interactive tasks (e.g. \"Tell us about your financial goals\") that earn points. This reduced friction and gave users an early sense of achievement."
            },
            {
              title: "Testing results",
              items: [
                "Onboarding completion: 47.4% → 70% (+47.6%)",
                "Welcome screen drop-off: 52.6% → under 30%",
                "85.7% called onboarding \"clear and engaging\""
              ]
            },
            {
              title: "What users said",
              quotes: [
                "\"It felt like a journey, not a boring form.\"",
                "\"I wanted to keep going to see what came next and get the points.\"",
                "\"Much better than being asked for everything upfront. I actually completed it.\""
              ]
            }
          ]
        },
        {
          type: "solution",
          title: "My Monevo World",
          images: [
            {
              src: monevoWorld,
              alt: "My Monevo World progress screens"
            }
          ],
          columns: [
            {
              title: "Why",
              text: "Created to help users visually track progress and stay motivated through a gamified journey. It also serves users who prefer a practical, finance-focused approach: quick actions like viewing insights, accessing expert advice or buying precious metals, without relying on gamification."
            },
            {
              title: "Testing results",
              items: [
                "85.7% accessed and explored My Monevo World",
                "85.7% understood their progress and rewards",
                "Task motivation increased, based on post-task interviews"
              ]
            },
            {
              title: "What users said",
              quotes: [
                "\"I loved seeing my progress. It felt like I was actually getting somewhere.\"",
                "\"This made the app feel more fun and less stressful.\"",
                "\"I like that I can both track and take action without digging through menus.\""
              ]
            }
          ]
        },
        {
          type: "solution",
          title: "Receipt-based expense input",
          images: [
            {
              src: monevoReceipt,
              alt: "Uploading and scanning receipts to add expenses"
            }
          ],
          columns: [
            {
              title: "Why",
              text: "Manual expense entry was time-consuming and often skipped. A receipt-based option lets users upload or scan receipts directly, which also helps with shared or recurring expenses."
            },
            {
              title: "Testing results",
              items: [
                "71.4% preferred receipt input over manual entry",
                "85.7% found it \"easy\" or \"very easy\"",
                "72% said it made monthly tracking feel more reliable"
              ]
            },
            {
              title: "What users said",
              quotes: [
                "\"Uploading a receipt felt faster and easier than typing everything.\"",
                "\"It's helpful when I split bills with someone.\"",
                "\"This saves me from forgetting what I spent on.\""
              ]
            }
          ]
        },
        {
          type: "solution",
          title: "Goal-based task series and reward system",
          images: [
            {
              src: monevoSeries,
              alt: "Goal based task series and reward store screens"
            }
          ],
          columns: [
            {
              title: "Why",
              text: "Users earned points but couldn't spend them, so the system felt empty. We added a store to redeem points and goal-based series (e.g. expense tracking for users paying off debt), each with 5–6 short tasks and mini quizzes. At the end, users get a congratulation, points and a reward of their choice."
            },
            {
              title: "Testing results",
              items: [
                "Task completion within series: 8.1% → 15% (+85.2%)",
                "71.4% preferred series over isolated tasks"
              ]
            },
            {
              title: "What users said",
              quotes: [
                "\"It was satisfying to finish a full series. It felt like a win.\"",
                "\"I actually care about the points now because I can use them.\"",
                "\"Choosing my own reward made it feel more personal and fun.\""
              ]
            }
          ]
        },
        {
          type: "solution",
          title: "Testing two homepage variants",
          images: [
            {
              src: monevoHomepageVariants,
              alt: "Sequential and open access homepage variants"
            }
          ],
          columns: [
            {
              title: "Why",
              text: "The original homepage lacked structure; users didn't know where to start. We tested two variants: sequential task cards and open access task blocks, to find the layout that best supports engagement and navigation."
            },
            {
              title: "Testing results",
              items: [
                "3 of 7 preferred sequential tasks",
                "2 of 7 preferred open access",
                "1 liked both equally",
                "Decision: sequential layout, to guide users step by step and reduce decision fatigue"
              ]
            },
            {
              title: "What users said",
              quotes: [
                "\"The step by step layout made me feel more focused.\"",
                "\"I liked having everything visible, but I wasn't sure where to begin.\"",
                "\"The card based version felt more like a journey, which helped me stay on track.\""
              ]
            }
          ]
        },
        {
          type: "solution",
          title: "Feature enhancements based on testing",
          images: [
            {
              src: monevoMostSpent,
              alt: "Report highlighting the most spent category"
            },
            {
              src: monevoReminders,
              alt: "Smart reminders delivered through the chat assistant"
            }
          ],
          features: [
            {
              title: "Most-spent category in reports",
              text: "Users wanted a clearer view of where they overspent. Reports now highlight the most-spent category with clear labels and visual cues.",
              quote: "\"I want to know instantly where my money went the most.\"",
              impactLabel: "Expected impact",
              impact: "Stronger spending awareness and better monthly planning, by drawing attention to problem areas without overwhelming users."
            },
            {
              title: "Smart reminders via chat assistant",
              text: "Push notifications were mostly ignored. In-app chat reminders, triggered by unclassified spending or inactivity, felt more personal.",
              quote: "\"Push notifications feel robotic, but in-chat felt like someone was guiding me.\"",
              impactLabel: "Expected impact",
              impact: "Higher task completion, more accurate expense categorisation and less drop-off in journey-based task flows."
            }
          ]
        },
        {
          type: "subsection",
          text: "Usability testing and outcomes"
        },
        {
          type: "labelValue",
          items: [
            {
              label: "Participants",
              value: "7 users (3 potential, 4 existing)"
            },
            {
              label: "Demographics",
              value: "Aged 23–49: students, doctors, police officers, IT specialists and bankers"
            },
            {
              label: "Scenarios",
              value: "Onboarding and welcome screens; \"Getting to know you\" series; expense entry and wants vs. needs; navigating My Monevo World; viewing reports and spending patterns; feedback on homepage alternatives"
            }
          ]
        },
        {
          type: "table",
          head: [
            "Metric",
            { desktop: "Before (live)", mobile: "Live" },
            { desktop: "In testing", mobile: "Test" },
            "Change"
          ],
          rows: [
            [
              "Onboarding completion",
              "47.4%",
              "70%",
              "+47.6%"
            ],
            [
              "Task completion",
              "8.1%",
              "15%",
              "+85.2%"
            ],
            [
              "Users accessing My Monevo World",
              "New",
              "85.7%",
              "Newly introduced"
            ],
            [
              "Users understanding reports",
              "New",
              "85.7%",
              "Newly introduced"
            ],
            [
              "Positive feedback on homepage UI options",
              "n/a",
              "85.7%",
              "n/a"
            ]
          ]
        },
        {
          type: "quotes",
          title: "What users said",
          items: [
            "\"I didn't understand what wants vs. needs meant at first. The explanation helped a lot.\"",
            "\"The chat reminders felt like a coach guiding me through.\"",
            "\"Seeing my most spent category made me rethink my priorities.\"",
            "\"I liked being able to choose my own reward. It felt more personal.\"",
            "\"Without the visual cues, I wouldn't have known where to go next. This version made it obvious.\""
          ]
        }
      ]
    },
    {
      id: "impact",
      label: "Impact",
      title: "Impact and Key Learnings",
      blocks: [
        {
          type: "stack",
          items: [
            {
              title: "Improved task and onboarding completion",
              text: "Usability tests showed a clear increase in task completion during onboarding. Step-by-step guidance and integrated task flows helped users complete more actions independently and with greater confidence. In testing, 85.7% of participants completed onboarding and explored key features."
            },
            {
              title: "Purposeful gamification",
              text: "Gamified elements boosted engagement only when tied to clear goals, real rewards and visible progress. Decorative gamification alone was not effective."
            },
            {
              title: "Clarity leads to action",
              text: "Users responded better to visual insights than raw data. Features like \"Most spent category\" and a clear hierarchy helped users take action and stay engaged."
            }
          ]
        }
      ]
    },
    {
      id: "next",
      label: "Next steps",
      title: "Next Steps",
      blocks: [
        {
          type: "twoLists",
          lists: [
            {
              title: "Immediate roadmap",
              items: [
                "Finalise and apply the new design system across all UI screens",
                "Develop validated UI designs based on tested low-fidelity wireframes",
                "AI-powered spending predictions and alerts"
              ],
              dense: true
            },
            {
              title: "Long-term vision",
              items: [
                "Monitor onboarding, task engagement and retention using live metrics",
                "Experiment with adaptive task series tailored to user goals (e.g. debt payoff, savings)",
                "Test diverse and customisable rewards (financial tools, expert sessions)"
              ],
              dense: true
            }
          ]
        }
      ]
    }
  ],
  card: {
    title: "Monevo, Financial Habits",
    category: "Fintech · Mobile app",
    cover: {
      src: monevoCover,
      alt: "Monevo app on two phones"
    }
  }
}

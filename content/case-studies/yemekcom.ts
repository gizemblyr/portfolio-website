import type { CaseStudy } from "./types"
import yemekcomAffinityMapping from "@/public/images/yemekcom-affinity-mapping.png"
import yemekcomDetailedCompetitiveAnalysis from "@/public/images/yemekcom-detailed-competitive-analysis.png"
import yemekcomInformationArchitecture from "@/public/images/yemekcom-information-architecture.png"
import yemekcomWireframes from "@/public/images/yemekcom-wireframes.png"
import yemekcomHomeSearch from "@/public/images/yemekcom-home-search.png"
import yemekcomRecipeDetails from "@/public/images/yemekcom-recipe-details.png"
import yemekcomRecipeLists from "@/public/images/yemekcom-recipe-lists.png"
import yemekcomRecipeSharing from "@/public/images/yemekcom-recipe-sharing.png"
import yemekcomUserProfiles from "@/public/images/yemekcom-user-profiles.png"
import yemekcomHeroMockup from "@/public/images/yemekcom-hero-mockup.png"
import yemekcomCover from "@/public/images/projects/yemekcom-cover.jpg"

// Copy is taken verbatim from docs/case-study/reference/yemekcom-desktop.html.
export const yemekcom: CaseStudy = {
  slug: "yemekcom",
  href: "/yemekcom-case-study",
  category: "Content · Mobile app",
  title: "Redesigning Yemek.com: A Modern Recipe Platform",
  summary: "The recipe app experience was reimagined to enhance clarity, improve navigation and foster user engagement through data-informed design.",
  meta: [
    {
      label: "Role",
      value: "UX/UI Designer"
    },
    {
      label: "Duration",
      value: "6 months"
    },
    {
      label: "Platform",
      value: "Recipe platform, mobile app"
    },
    {
      label: "Scope",
      value: { desktop: "Interviews, affinity mapping, IA, wireframes, design system, UI", mobile: "Research, IA, design system, UI" }
    }
  ],
  hero: {
    src: yemekcomHeroMockup,
    alt: "Yemek.com recipe app on two phones"
  },
  glance: [
    {
      title: "Problem",
      text: "Users struggled to find relevant recipes, manage their collections and navigate the platform. Mobile sessions were 30% shorter than desktop."
    },
    {
      title: "What I did",
      text: "Rebuilt search and filters, added a cooking mode, recipe lists, recipe creation and user profiles, on a scalable UI library."
    },
    {
      title: "Outcome",
      text: "In usability testing, use of advanced search filters rose 32% and successful completion of key actions rose 28%."
    }
  ],
  sections: [
    {
      id: "problem",
      label: "Problem",
      title: "Hard to Find, Hard to Keep, Hard to Use on a Phone",
      blocks: [
        {
          type: "paragraph",
          text: "Yemek.com users faced significant challenges in discovering relevant recipes, managing their personal recipe collections and navigating the platform efficiently. The existing interface lacked modern design principles and failed to meet expectations for a contemporary recipe platform.",
          lead: true
        },
        {
          type: "list",
          title: "Current challenges",
          items: [
            "Complex and outdated user interface",
            "Limited search and filtering",
            "Poor recipe discovery and recommendations",
            "Inadequate mobile experience and responsiveness",
            "Lack of personalisation"
          ],
          dense: true
        },
        {
          type: "table",
          title: "Key pain points",
          stackOnMobile: true,
          head: [
            "Pain point",
            "Severity",
            "Evidence"
          ],
          rows: [
            [
              "Navigation difficulty",
              "High",
              "Interviews showed frequent confusion in navigating core categories"
            ],
            [
              "Search effectiveness",
              "High",
              "Many users needed multiple keywords to find relevant recipes"
            ],
            [
              "Mobile usability",
              "High",
              "Mobile sessions were 30% shorter than desktop"
            ],
            [
              "Recipe organisation",
              "Moderate",
              "No folders or tags for saved recipes"
            ],
            [
              "Recipe discovery",
              "Moderate",
              "Category pages had a bounce rate over 50%"
            ]
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
                "Modernise the platform to current UX/UI standards",
                "Enhance search and filtering for quicker discovery",
                "Improve mobile usability to increase engagement",
                "Personalise the experience around cooking preferences",
                "Increase content accessibility across categories",
                "Build a scalable UI system for future updates"
              ],
              small: true
            },
            {
              title: "Success metrics",
              items: [
                "Time on site: +20% mobile session duration",
                "Bounce rate on category pages: −15%",
                "Search-to-recipe success: +25% successful finds per search session",
                "Saved recipes: +30% use of \"Save\"",
                "User satisfaction: 80%+ in post-launch surveys on navigation and mobile usability"
              ],
              small: true
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
          text: "Persona: Seren, the practical home cook"
        },
        {
          type: "labelValue",
          profile: true,
          items: [
            {
              label: "Age",
              value: "29"
            },
            {
              label: "Occupation",
              value: "Marketing specialist, works full-time"
            },
            {
              label: "Location",
              value: "İstanbul"
            },
            {
              label: "Household",
              value: "Lives with partner"
            },
            {
              label: "Tech use",
              value: "Active smartphone user; uses apps for cooking, shopping and planning"
            },
            {
              label: "Cooking",
              value: "4–5 times a week"
            }
          ]
        },
        {
          type: "columns",
          columns: [
            {
              title: "Goals",
              items: [
                "Find quick, reliable and healthy recipes after work",
                "Discover meal ideas based on what's in the fridge",
                "Save and organise go-to recipes",
                "Share successful recipes with friends or on social media"
              ]
            },
            {
              title: "Pain points",
              items: [
                "Recipe platforms are cluttered and hard to navigate",
                "Most don't allow saving or categorising favourites",
                "No filters for ingredients on hand or prep time",
                "Long blog-style introductions before recipes",
                "Mobile isn't optimised for use while cooking"
              ]
            },
            {
              title: "App usage behaviour",
              items: [
                "Uses Yemek.com, Nefis Yemek Tarifleri and Instagram food creators",
                "Searches by ingredient first (\"What can I cook with eggplant and yogurt?\")",
                "Filters for \"under 30 minutes\" or \"low calorie\"",
                "Scrolls for visuals before reading details"
              ]
            }
          ]
        },
        {
          type: "subheading",
          text: "User interview insights"
        },
        {
          type: "paragraph",
          text: "Interviews with 14 users based on the defined personas, to understand their cooking habits, app usage and expectations from a recipe platform."
        },
        {
          type: "list",
          items: [
            "Many users search by available ingredients, not just dish names",
            "Categories like \"quick meals\" or \"budget-friendly\" were preferred over traditional ones",
            "Users wanted to save recipes more easily and organise them into folders (e.g. \"weeknight dinners\", \"diet meals\")",
            "Search and filters felt overwhelming or not specific enough",
            "Strong preference for visual, step-by-step guidance while cooking",
            "Few interact with the community, but they trust recipes with high ratings and real user photos"
          ]
        },
        {
          type: "subheading",
          text: "Affinity mapping"
        },
        {
          type: "paragraph",
          text: "14 user interviews and over 100 user comments from Google Play, the App Store and other public platforms were grouped in an affinity map to uncover recurring patterns and prioritise design decisions."
        },
        {
          type: "figure",
          image: {
            src: yemekcomAffinityMapping,
            alt: "Affinity map of user interview and review insights"
          }
        },
        {
          type: "stack",
          title: "Key findings",
          items: [
            {
              title: "Discovery and search frustration",
              text: "Limited filters and no visual categorisation made it hard to find things.",
              quote: "\"I wish I could just filter by cooking time or ingredients I already have.\""
            },
            {
              title: "Organisation and recipe management",
              text: "Users wanted better tools to save, organise and access favourite recipes.",
              quote: "\"I save so many recipes, but can't find them later unless I scroll forever.\""
            },
            {
              title: "Cooking experience issues",
              text: "Long recipe blocks were hard to follow while cooking; users preferred step-by-step instructions with images.",
              quote: "\"I want clear steps and photos. I can't scroll and stir at the same time.\""
            },
            {
              title: "Desire for personalisation",
              text: "High interest in features that adapt to dietary preferences or cooking goals.",
              quote: "\"I'm vegan. I wish it didn't always show me meat recipes first.\""
            },
            {
              title: "Trust through community content",
              text: "Recipes with user comments or photos were trusted more.",
              quote: "\"If I see others tried it and shared pictures, I trust it more.\""
            }
          ]
        },
        {
          type: "paragraph",
          text: "These insights formed the foundation of the design strategy and helped prioritise solutions for a more intuitive, personalised and motivating cooking experience."
        },
        {
          type: "subheading",
          text: "Competitive analysis"
        },
        {
          type: "figure",
          image: {
            src: yemekcomDetailedCompetitiveAnalysis,
            alt: "Detailed competitive analysis of recipe platforms"
          }
        },
        {
          type: "twoLists",
          lists: [
            {
              title: "Market analysis",
              items: [
                "Analysed leading recipe platforms and their features",
                "Identified gaps in current offerings",
                "Evaluated UX patterns across competitors",
                "Assessed mobile vs. desktop usage trends"
              ],
              small: true,
              dense: true
            },
            {
              title: "Key differentiators",
              items: [
                "Enhanced search with photo recognition",
                "Comprehensive recipe management",
                "Advanced filtering and categorisation",
                "Integrated social features for sharing"
              ],
              small: true,
              dense: true
            }
          ]
        }
      ]
    },
    {
      id: "design",
      label: "Design",
      title: "Design Solutions",
      blocks: [
        {
          type: "subheading",
          text: "Information architecture"
        },
        {
          type: "figure",
          image: {
            src: yemekcomInformationArchitecture,
            alt: "Yemek.com information architecture"
          }
        },
        {
          type: "subheading",
          text: "Wireframes"
        },
        {
          type: "paragraph",
          text: "Low-fidelity wireframes outlined core layouts and flows, focused on recipe discovery, search usability and personal recipe management. They validated ideas early and became the foundation for the final UI."
        },
        {
          type: "figure",
          image: {
            src: yemekcomWireframes,
            alt: "Low fidelity wireframes"
          }
        },
        {
          type: "subheading",
          text: "Design system"
        },
        {
          type: "paragraph",
          text: "A scalable UI library to keep the app consistent."
        },
        {
          type: "columns",
          columns: [
            {
              title: "Core components",
              items: [
                "Base styles for colour, typography and spacing",
                "Core components like buttons, inputs and tags",
                "App-specific elements such as recipe cards and timers"
              ],
              dense: true
            },
            {
              title: "Implementation benefits",
              text: "Responsive variants and interactive states supported mobile use and developer handoff. The system streamlined the UI process and supports future growth."
            }
          ]
        },
        {
          type: "subheading",
          text: "UI design"
        },
        {
          type: "solution",
          title: "Home and search experience",
          images: [
            {
              src: yemekcomHomeSearch,
              alt: "Home and search screens"
            }
          ],
          columns: [
            {
              title: "Why",
              text: "Limited filtering, non-visual category lists and a basic search made discovery hard. Comments and analytics showed users often abandoned search when they couldn't find something quickly or visually."
            },
            {
              title: "What improved",
              text: "The filter panel allows multi-dimensional sorting (meal type, prep time, cooking method, diet). Categories were restructured visually for easier scanning, and smart search suggestions improve speed and accuracy."
            }
          ]
        },
        {
          type: "solution",
          title: "Recipe details and cooking mode",
          images: [
            {
              src: yemekcomRecipeDetails,
              alt: "Recipe details and cooking mode screens"
            }
          ],
          columns: [
            {
              title: "Why",
              text: "Users needed a clearer, distraction-free cooking flow and struggled with long recipe texts. The old layout didn't track steps, didn't surface similar recipes and hid community feedback."
            },
            {
              title: "What improved",
              items: [
                "A scrollable cooking mode with step-by-step instructions",
                "Clearer layout for ingredients and timing",
                "User comments and similar recipes highlighted",
                "Clear \"Start\" and \"Finish\" calls to action"
              ],
              dense: true
            }
          ]
        },
        {
          type: "solution",
          title: "Recipe management and lists",
          images: [
            {
              src: yemekcomRecipeLists,
              alt: "Recipe lists and favourites screens"
            }
          ],
          columns: [
            {
              title: "Why",
              text: "Users wanted a better way to organise and revisit recipes. The old system had no grouping, no public sharing and no easy access to saved content."
            },
            {
              title: "What improved",
              items: [
                "Custom recipe lists with editable titles",
                "A favourites tab for quick access",
                "Public/private toggle for shared inspiration",
                "A clean, visual layout for list previews"
              ],
              dense: true
            }
          ]
        },
        {
          type: "solution",
          title: "Recipe creation and sharing",
          images: [
            {
              src: yemekcomRecipeSharing,
              alt: "Step by step recipe creation screens"
            }
          ],
          columns: [
            {
              title: "Why",
              items: [
                "Users needed a structured, flexible way to share recipes",
                "The existing flow lacked step-by-step clarity and visual cues",
                "There was no space for tips or serving suggestions",
                "Users wanted reassurance their content wouldn't be lost mid-entry"
              ],
              dense: true
            },
            {
              title: "What improved",
              items: [
                "Multiple steps with optional images",
                "Optional fields for tips, serving suggestions and an intro",
                "Step-by-step navigation with Back and Next",
                "Auto-save with a visible timestamp"
              ],
              dense: true
            }
          ]
        },
        {
          type: "solution",
          title: "User profiles and social features",
          images: [
            {
              src: yemekcomUserProfiles,
              alt: "User profile and social screens"
            }
          ],
          columns: [
            {
              title: "Why",
              items: [
                "Users wanted to showcase shared recipes under their own profiles",
                "There was no way to explore others' collections or follow authors",
                "Lack of social presence reduced engagement and repeat visits",
                "Users asked for a simple space to edit their profile and track content"
              ],
              dense: true
            },
            {
              title: "What improved",
              items: [
                "Public profiles with follower and following counts",
                "Recipe lists others can browse and save",
                "A clear toggle between \"Shared Recipes\" and \"Recipe List\"",
                "Social links plus \"Edit Profile\" and \"Follow\" buttons"
              ],
              dense: true
            }
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
          type: "metrics",
          columns: 2,
          items: [
            {
              value: "+32%",
              label: { desktop: "users using advanced search filters (cooking time, ingredients)", mobile: "users using advanced search filters" }
            },
            {
              value: "+28%",
              label: { desktop: "successful task completion for key actions like saving or sharing", mobile: "successful completion of key actions" }
            }
          ],
          source: "Source: usability testing."
        },
        {
          type: "list",
          items: [
            {
              title: "Enhanced recipe discoverability",
              text: "through better search, filtering and tags."
            },
            {
              title: "Higher user engagement.",
              text: "Users spent more time exploring new categories and community content."
            }
          ]
        },
        {
          type: "stack",
          title: "Key learnings",
          items: [
            {
              title: "Personalisation matters",
              text: "Ingredient-based search and \"just for you\" sections resonated strongly."
            },
            {
              title: "Structured cooking mode",
              text: "A visually clear cooking mode improves usability and reduces cognitive load, especially on mobile."
            },
            {
              title: "Social features drive engagement",
              text: "Sharing and following build long-term engagement when they are easy to discover."
            },
            {
              title: "Small UI improvements matter",
              text: "A favourites tab or recipe folders can significantly affect retention when tied to real user needs."
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
          type: "steps",
          items: [
            {
              title: "Monitor key metrics",
              text: "Tracking of recipe discovery and completion rates has started and will continue to validate impact with real user data."
            },
            {
              title: "Iterate based on live feedback",
              text: "Continuous improvements based on behaviour analytics and feedback from the live platform."
            },
            {
              title: "Expand personalisation",
              text: "Refining personalised content and recommendations to increase relevance."
            },
            {
              title: "Explore the recipe creation flow",
              text: "More interviews and usability testing to improve recipe creation."
            }
          ]
        },
        {
          type: "paragraph",
          text: "The redesigned app is available on the [App Store](https://apps.apple.com/app/yemek-com) and [Google Play](https://play.google.com/store/apps/details?id=com.yemeksepeti.yemekcom&hl=tr)."
        }
      ]
    }
  ],
  card: {
    title: "Yemek.com",
    category: "Recipe platform · Mobile app",
    cover: {
      src: yemekcomCover,
      alt: "Yemek.com recipe app screens"
    }
  }
}

import type { CaseStudy } from "./types"
import userResearch from "@/public/images/user-research.png"
import editModeNew from "@/public/images/edit-mode-new.png"
import mobileChoiceGroups from "@/public/images/mobile-choice-groups.png"
import mobileChoiceEditing from "@/public/images/mobile-choice-editing.png"
import aiPhotoSuggestions from "@/public/images/ai-photo-suggestions.png"
import foodpandaHero from "@/public/images/foodpanda-hero.png"
import foodpandaCover from "@/public/images/projects/foodpanda-cover.jpg"

// Copy is taken verbatim from docs/case-study/reference/foodpanda-desktop.html.
export const foodpanda: CaseStudy = {
  slug: "foodpanda",
  href: "/foodpanda-case-study",
  category: "B2B SaaS · Food delivery",
  title: "AI Driven Redesign of Foodpanda's Vendor Menu Module",
  summary: "Mobile first redesign leveraging AI to improve UX, streamline workflows and reduce manual effort.",
  meta: [
    {
      label: "Role",
      value: "Product Designer"
    },
    {
      label: "Duration",
      value: "5 months"
    },
    {
      label: "Platform",
      value: "B2B platform, mobile first"
    },
    {
      label: "Scope",
      value: { desktop: "Benchmarking, interviews, journey mapping, usability testing, AI features", mobile: "Research, testing, AI features" }
    }
  ],
  hero: {
    src: foodpandaHero,
    alt: "Foodpanda Partner menu management on a laptop and a phone"
  },
  glance: [
    {
      title: "Problem",
      text: "Vendors leaned on support to manage their own menus. Over 60% of all actions were just two tasks: availability and price changes."
    },
    {
      title: "What I did",
      text: "Split quick and detailed editing, clarified choice groups, designed mobile first and added AI photo and description suggestions."
    },
    {
      title: "Outcome",
      text: "In usability testing with 8 vendors, task completion rose from 60% to 91%."
    }
  ],
  sections: [
    {
      id: "problem",
      label: "Problem",
      title: "A Self-service Tool That Vendors Couldn't Use on Their Own",
      blocks: [
        {
          type: "paragraph",
          text: "Although vendors were expected to manage their menus independently, many relied heavily on support due to the system's complexity, lack of clarity and poor mobile performance. Over 60% of interactions focused on just two routine tasks, while all other functions saw minimal usage. Advanced features were either hard to find, difficult to understand or inefficient to use without assistance.",
          lead: true
        },
        {
          type: "metrics",
          columns: 3,
          items: [
            {
              value: "30.9%",
              label: "of interactions were product availability changes"
            },
            {
              value: "29.8%",
              label: "were variant price updates"
            },
            {
              value: "<5%",
              label: "usage for every other feature"
            }
          ],
          source: "Source: vendor portal analytics before the redesign."
        },
        {
          type: "list",
          title: "Key pain points",
          items: [
            {
              title: "Feature underutilisation.",
              text: "Everything beyond availability and price changes stayed below 5% usage, pointing to usability and discoverability issues."
            },
            {
              title: "Support dependency.",
              text: "Despite being a self-service tool, many vendors needed support to complete tasks due to unclear flows and complex interfaces."
            },
            {
              title: "Poor mobile experience.",
              text: "The UI was hard to use on mobile, making on-the-go management frustrating."
            },
            {
              title: "Choice group confusion.",
              text: "Users struggled to tell choice groups from variations, often misapplying or avoiding them."
            },
            {
              title: "No efficient bulk editing.",
              text: "Items had to be edited one by one, increasing time spent on routine tasks."
            },
            {
              title: "Approval process issues.",
              text: "Price and image updates were frequently rejected without clear reasoning."
            },
            {
              title: "Image upload barrier.",
              text: "High rejection rates and strict quality standards meant vendors rarely uploaded photos."
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
                "Enable vendors to complete key tasks without support",
                "Simplify frequent actions like availability and price updates",
                "Clarify complex features such as choice groups",
                "Improve mobile usability",
                "Increase adoption of underused features",
                "Integrate AI to ease content creation"
              ],
              dense: true
            },
            {
              title: "Success metrics",
              items: [
                "Task completion: +25% self-served completion for core actions",
                "Support ticket volume: monitored after launch",
                "Time on task: measured after go-live",
                "Approval error rate: tracked after launch",
                "Feature adoption: image uploads, bulk editing and product creation, tracked after release"
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
              title: "Research and insights",
              text: "Benchmarking, user interviews and journey mapping uncovered friction points such as poor navigation, mobile usability issues and features left unused due to complexity."
            },
            {
              title: "Design strategy",
              text: "Lo-fi wireframes and a mobile first UI focused on simplifying high-frequency tasks, improving discoverability and introducing AI-driven tools for photo and content suggestions."
            },
            {
              title: "Validation and iteration",
              text: "Usability tests with 8 vendors validated the redesigned flows and led to refinements that improved clarity, reduced support dependency and increased feature adoption."
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
          type: "paragraph",
          text: "A benchmark of leading food delivery platforms to understand industry standards and find opportunities for improvement."
        },
        {
          type: "principles",
          columns: 4,
          items: [
            {
              title: "Uber Eats",
              text: "Supports multiple menus and bulk linking of customisations, but lacks clear editing modes and offers only menu-level availability."
            },
            {
              title: "DoorDash",
              text: "Limited bulk editing and no reusable modifiers make menu management inefficient, especially for larger catalogues."
            },
            {
              title: "Grab",
              text: "Detailed availability scheduling and bulk editing, but a complex interface and editing modes that need more clarity."
            },
            {
              title: "Deliveroo",
              text: "Multiple menus and category-level option groups, yet no smart tools like AI suggestions or advanced reuse logic."
            }
          ]
        },
        {
          type: "twoLists",
          lists: [
            {
              title: "Key insights",
              items: [
                {
                  title: "Editing flows are cluttered.",
                  text: "Uber Eats and DoorDash combine too many tasks in one flow; Grab and Deliveroo are clearer but not optimal."
                },
                {
                  title: "Availability control is limited.",
                  text: "Only Grab offers product-level availability."
                },
                {
                  title: "Customisation systems are inconsistent.",
                  text: "Different terms and levels cause confusion; DoorDash lacks bulk linking."
                },
                {
                  title: "Editing and availability are often merged.",
                  text: "Only Grab and Deliveroo separate them."
                },
                {
                  title: "Reusability varies widely.",
                  text: "Uber Eats allows reuse across categories; others are more restricted."
                },
                {
                  title: "No AI content creation.",
                  text: "Image uploads and descriptions remain manual everywhere."
                }
              ],
              small: true
            },
            {
              title: "Design opportunities",
              items: [
                {
                  title: "Separate quick vs. detailed edit modes",
                  text: "to simplify frequent tasks and reduce cognitive load."
                },
                {
                  title: "Design mobile first",
                  text: "for smooth access on phones."
                },
                {
                  title: "Clarify choice group logic",
                  text: "with consistent naming and reuse across items."
                },
                {
                  title: "Strengthen bulk editing",
                  text: "for availability, pricing and links."
                },
                {
                  title: "Introduce AI content suggestions",
                  text: "to overcome photo upload and approval barriers."
                }
              ],
              small: true
            }
          ]
        },
        {
          type: "subheading",
          text: "User persona: restaurant owner"
        },
        {
          type: "paragraph",
          text: "Single-outlet restaurant owner using the Vendor Portal. Primarily on mobile, with moderate tech proficiency."
        },
        {
          type: "columns",
          columns: [
            {
              title: "Goals",
              items: [
                "Quickly update availability and prices",
                "Add and edit items without support",
                "Understand and pass photo approvals",
                "Manage everything easily on mobile"
              ],
              dense: true
            },
            {
              title: "Pain points",
              items: [
                "Confused by choice groups vs. variations",
                "Photo uploads often rejected without a clear reason",
                "Hard to find basic actions (add, edit)",
                "Interface feels complex on mobile"
              ],
              dense: true
            },
            {
              title: "Needs",
              items: [
                "Fast, focused flows for daily tasks",
                "Clear feedback on actions and approvals",
                "Simple UI with tooltips and smart suggestions"
              ],
              dense: true
            }
          ]
        },
        {
          type: "subheading",
          text: "User journey"
        },
        {
          type: "paragraph",
          text: "Interviews with 8 vendors, all owners or managers of single-location restaurants, to understand their workflows, challenges and expectations. The journey map helped identify pain points, inform design decisions and validate solutions throughout the project."
        },
        {
          type: "figure",
          image: {
            src: userResearch,
            alt: "Vendor user journey map"
          }
        },
        {
          type: "list",
          title: "Key findings",
          items: [
            "Confusing navigation; vendors often struggled to locate core features",
            "Lack of mobile optimisation made it hard to complete tasks on phones",
            "Difficulty adding new items or categories",
            "Limited freedom in menu structuring",
            "Long approval times with unclear or unconvincing rejection reasons",
            "Confusion between \"variations\" and \"choice groups\""
          ],
          dense: true
        },
        {
          type: "quote",
          text: "\"Choice groups give me headaches.\"",
          source: "Vendor, during interviews"
        },
        {
          type: "subheading",
          text: "Workshop for defining goals and constraints"
        },
        {
          type: "paragraph",
          text: "A collaborative workshop with designers and stakeholders defined clear goals and constraints. It aligned expectations, gave direction to design and development, supported efficient use of resources, reduced risk and set measurable success criteria."
        }
      ]
    },
    {
      id: "design",
      label: "Design & Testing",
      title: "Validated Through Usability Testing",
      blocks: [
        {
          type: "solution",
          title: "Two editing modes and adding a new item",
          images: [
            {
              src: editModeNew,
              alt: "Quick edit and detailed edit modes with the add item flow"
            }
          ],
          columns: [
            {
              title: "Why",
              text: "Vendors struggled with mixed edit flows, causing confusion and delays. We introduced two editing modes: Quick Edit for high-frequency actions like toggling availability, and Detailed Edit for prices, descriptions and images."
            },
            {
              title: "Testing results",
              items: [
                "7 of 8 found the edit button on their own",
                "8 of 8 completed the add item task",
                "~90% overall task completion"
              ]
            },
            {
              title: "What vendors said",
              quotes: [
                "\"It's clear what to do now. I don't have to scroll or guess.\"",
                "\"I liked that I didn't have to go through too many steps just to add a dish.\"",
                "\"The toggle for availability is much easier than before.\"",
                "\"It's good to have both modes. I only use the simple one most of the time.\""
              ]
            }
          ]
        },
        {
          type: "solution",
          title: "Choice groups (size options)",
          images: [
            {
              src: mobileChoiceGroups,
              alt: "Creating size based choice groups on mobile"
            }
          ],
          columns: [
            {
              title: "Why",
              text: "Vendors often created separate products for each size instead of using modifiers, because group setup was unclear. The redesign introduced a cleaner, mobile friendly way to create size options with clearer labels, pricing and selection rules."
            },
            {
              title: "Testing results",
              items: [
                "6 of 8 created size options (e.g. Regular, Large) successfully",
                "Most found \"Create New\" easy; some missed \"From Products\" at first",
                "Less duplication than with the earlier design"
              ]
            },
            {
              title: "What vendors said",
              quotes: [
                "\"Creating size options directly here is much faster.\"",
                "\"I didn't realise I could reuse existing products at first.\"",
                "\"The layout is clearer now, especially the required and max selection part.\""
              ]
            }
          ]
        },
        {
          type: "solution",
          title: "Choice groups vs. variations",
          images: [
            {
              src: mobileChoiceEditing,
              alt: "Editing and linking choice groups on mobile"
            }
          ],
          columns: [
            {
              title: "Why",
              text: "Vendors were unclear about when to use choice groups vs. variations, often duplicating products instead of using modifiers. The redesign streamlined group creation and linking, and made modifier logic more intuitive and reusable."
            },
            {
              title: "Testing results",
              items: [
                "5 of 8 used choice groups correctly",
                "3 hesitated or reverted to old habits, like duplicating items",
                "Reuse and linking were better understood than before"
              ]
            },
            {
              title: "What vendors said",
              quotes: [
                "\"This helps me avoid creating the same product twice.\"",
                "\"Linking products is easier now, but I didn't see the button right away.\"",
                "\"I still confuse variations and options sometimes, but it's more usable.\""
              ]
            }
          ]
        },
        {
          type: "solution",
          title: "AI content suggestions: from insight to design",
          images: [
            {
              src: aiPhotoSuggestions,
              alt: "AI suggested photos and descriptions for menu items"
            }
          ],
          columns: [
            {
              title: "Why",
              text: "In early testing, vendors were asked whether they would use AI-generated images and descriptions. 5 of 8 were interested, mainly to save time and avoid photo rejections, but worried about authenticity. This shaped a suggestion system that balances automation with control."
            },
            {
              title: "Testing results (follow-up sessions)",
              items: [
                "All vendors completed the AI suggestion task with ease",
                "All found and used the feature intuitively",
                "No confusion observed during use",
                "Vendors recognised and managed AI-tagged content easily"
              ]
            },
            {
              title: "What vendors said",
              quotes: [
                "\"This saves me so much time. I don't have to take my own photos.\"",
                "\"As long as it looks like my dish, I'm okay using it.\"",
                "\"The suggestion label is helpful. I know which items still need edits.\""
              ]
            }
          ]
        }
      ]
    },
    {
      id: "testing",
      label: "Test Results",
      title: "Usability Testing and Outcomes",
      blocks: [
        {
          type: "labelValue",
          items: [
            {
              label: "Participants",
              value: "8 users"
            },
            {
              label: "Demographics",
              value: "Aged 26–52: small restaurant owners, franchise managers and café operators"
            },
            {
              label: "Scenarios",
              value: "Menu creation and editing; bulk actions (multi-item selection, batch editing); AI-generated descriptions and images; preview and publish; mobile vs. web; categorisation and visibility settings"
            }
          ]
        },
        {
          type: "table",
          head: [
            "Outcome",
            "Result"
          ],
          rows: [
            [
              "Task completion rate",
              "60% → 91%"
            ],
            [
              { desktop: "New categorisation flow and AI-generated descriptions and images", mobile: "New categorisation flow and AI descriptions and images" },
              "Positive feedback"
            ]
          ]
        },
        {
          type: "quotes",
          title: "What vendors said",
          items: [
            "\"The AI suggestions saved me hours, especially the auto description feature.\"",
            "\"Bulk editing was frustrating before. Now I can update all prices in one go.\"",
            "\"Mobile version feels much smoother than before. I can do everything on the go.\"",
            "\"Seeing a real time preview before publishing made me feel more confident.\"",
            "\"It was confusing before to find visibility settings. Now it's clearly labelled.\""
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
          type: "paragraph",
          text: "The Vendor Portal was redesigned with a focus on mobile first design, AI integration and streamlined workflows, combining user-centred design with AI to solve real business problems.",
          lead: true
        },
        {
          type: "twoLists",
          lists: [
            {
              title: "Impact",
              items: [
                "~90% task completion in usability testing across core flows",
                "Vendors completed key tasks (availability, add/edit item, choice groups) without support",
                "AI content suggestions were adopted and reduced friction in content creation",
                "Separating quick and detailed edit modes improved mobile usability",
                "Vendors began using choice groups instead of duplicating products"
              ],
              small: true
            },
            {
              title: "Key learnings",
              items: [
                "Small structural changes, like separating edit modes, can significantly improve clarity and speed",
                "Visual guidance and labels reduce hesitation, especially on mobile",
                "Giving vendors control over AI suggestions builds trust and encourages adoption",
                "Choice group reuse still needs clearer onboarding or contextual hints"
              ],
              small: true
            }
          ]
        }
      ]
    },
    {
      id: "next",
      label: "Next steps",
      title: "Validating and Scaling the Redesign",
      blocks: [
        {
          type: "twoLists",
          lists: [
            {
              title: "Validation and testing",
              items: [
                "Usability tests with chain restaurant vendors, to see how the structure supports complex operations and team workflows",
                "Tests with vendors managing multiple menus, by branch, time or brand"
              ],
              small: true
            },
            {
              title: "Feature enhancements",
              items: [
                "Expand AI content suggestions with localised image sets and descriptions per cuisine",
                "Collaborate with the onboarding team, sharing findings on advanced features like variations"
              ],
              small: true
            }
          ]
        }
      ]
    }
  ],
  card: {
    title: "Foodpanda Partner, Menu Management",
    category: "B2B SaaS · AI integration",
    cover: {
      src: foodpandaCover,
      alt: "Foodpanda Partner vendor portal menu management screens"
    }
  }
}

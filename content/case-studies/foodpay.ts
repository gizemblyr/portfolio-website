import type { CaseStudy } from "./types"
import foodpayDesignSystem from "@/public/images/foodpay-design-system.png"
import foodpayLanding from "@/public/images/foodpay-landing.png"
import foodpayMobileLanding from "@/public/images/foodpay-mobile-landing.png"
import foodpaySignupLogin from "@/public/images/foodpay-signup-login.png"
import foodpayMobileSignupOnboarding from "@/public/images/foodpay-mobile-signup-onboarding.png"
import foodpayOnboarding from "@/public/images/foodpay-onboarding.png"
import foodpayDashboard from "@/public/images/foodpay-dashboard.png"
import foodpayMobileDashboard from "@/public/images/foodpay-mobile-dashboard.png"
import foodpayHero from "@/public/images/projects/foodpay-hero.png"
import foodpayCover from "@/public/images/projects/foodpay-cover.jpg"

// Copy is taken verbatim from docs/case-study/reference/foodpay-desktop.html.
export const foodpay: CaseStudy = {
  slug: "foodpay",
  href: "/foodpay-case-study",
  category: "Fintech · B2B",
  title: "FoodPay (YemeksepetiPay)",
  summary: "A secure payment and virtual POS platform designed from scratch for merchants, operating under TCMB regulations.",
  meta: [
    {
      label: "Role",
      value: "Product Designer"
    },
    {
      label: "Duration",
      value: "6 months"
    },
    {
      label: "Platform",
      value: "Web and mobile web"
    },
    {
      label: "Scope",
      value: { desktop: "Landing, onboarding, dashboard, reporting, design system", mobile: "Landing, onboarding, dashboard, design system" }
    }
  ],
  hero: {
    src: foodpayHero,
    alt: "FoodPay landing page on a laptop and a phone"
  },
  glance: [
    {
      title: "Problem",
      text: "Merchants needed to receive online payments securely, in a new product built from scratch under TCMB regulations."
    },
    {
      title: "What I did",
      text: "Designed the experience end to end, from landing page and merchant onboarding to dashboard and reporting, plus a compact design system."
    },
    {
      title: "Outcome",
      text: "A first product experience delivered on a regulation-compliant, trust-focused and scalable UI foundation."
    }
  ],
  sections: [
    {
      id: "overview",
      label: "Overview",
      title: "Design Needs and Focus",
      blocks: [
        {
          type: "paragraph",
          text: "FoodPay (YemeksepetiPay) is a payment and virtual POS platform designed from scratch to let businesses receive online payments securely, operating under TCMB regulations. From day one, the product was shaped with a strong UX foundation that took regulatory requirements, security and financial operations into account.",
          lead: true
        },
        {
          type: "list",
          title: "Core design needs",
          items: [
            "Build a secure, regulation-compliant payment infrastructure for merchants",
            "Establish trust at the very first point of contact in a fintech product",
            "Make security, verification and error scenarios clear and understandable",
            "Present critical financial information such as payments, settlements and reports in a simple, structured way",
            "Create a scalable, consistent UI structure for a product built from scratch"
          ]
        },
        {
          type: "paragraph",
          text: "Based on these needs, the entire experience was handled end to end, from the landing page and merchant onboarding to the dashboard and reporting screens."
        }
      ]
    },
    {
      id: "approach",
      label: "Approach",
      title: "Approach",
      blocks: [
        {
          type: "steps",
          items: [
            {
              text: "Trust, licensing information and value propositions were clearly communicated on the landing page"
            },
            {
              text: "Merchant onboarding was divided into clear, manageable steps"
            },
            {
              text: "Regulatory requirements were structured to reduce cognitive load"
            },
            {
              text: "Critical financial data was prioritised on dashboard and reporting screens"
            },
            {
              text: "Web and mobile web were designed together with a responsive-first mindset"
            }
          ]
        }
      ]
    },
    {
      id: "research",
      label: "Research",
      title: "Research and Mini Benchmark",
      blocks: [
        {
          type: "paragraph",
          text: "Since the product was built from scratch, a mini benchmark study was conducted to understand industry standards.",
          lead: true
        },
        {
          type: "twoLists",
          lists: [
            {
              title: "Platforms reviewed",
              items: [
                "iyzico",
                "Stripe",
                "PayPal"
              ],
              dense: true
            },
            {
              title: "Focus areas",
              items: [
                "Merchant onboarding and verification flows",
                "Document upload and approval processes",
                "How security and regulatory messages are communicated"
              ],
              dense: true
            }
          ]
        },
        {
          type: "paragraph",
          text: "The analysis showed that long, mandatory processes can be managed effectively through clear guidance, progress visibility and well-crafted microcopy."
        }
      ]
    },
    {
      id: "wireframes",
      label: "Wireframes",
      title: "Wireframes",
      blocks: [
        {
          type: "paragraph",
          text: "Wireframe work covered the key flows:",
          lead: true
        },
        {
          type: "list",
          items: [
            "Landing page structure and navigation",
            "Sign-up and login flows",
            "Merchant onboarding: authorised person details, business info, document upload, agreements",
            "Dashboard, transaction summaries and reporting screens"
          ],
          dense: true
        },
        {
          type: "paragraph",
          text: "A primary goal during onboarding was to clearly communicate where the user is in the process and what comes next."
        }
      ]
    },
    {
      id: "system",
      label: "Design system",
      title: "A Compact Design System for the MVP",
      blocks: [
        {
          type: "principles",
          columns: 3,
          items: [
            {
              title: "Standardised components",
              text: "Form fields, validation states and error messages were standardised across all flows."
            },
            {
              title: "Visual hierarchy",
              text: "Consistent typography and hierarchy were defined for presenting financial data."
            },
            {
              title: "Reusable patterns",
              text: "Reusable components for security and status messaging, designed to support future growth."
            }
          ]
        },
        {
          type: "figure",
          image: {
            src: foodpayDesignSystem,
            alt: "FoodPay design system overview"
          },
          caption: "Design system overview"
        }
      ]
    },
    {
      id: "screens",
      label: "UI Design",
      title: "UI Screens",
      blocks: [
        {
          type: "paragraph",
          text: "All screens were designed responsively for web and mobile web. These are the main screen groups.",
          lead: true
        },
        {
          type: "figure",
          image: {
            src: foodpayLanding,
            alt: "FoodPay landing pages on web"
          },
          caption: "Landing pages, web"
        },
        {
          type: "figure",
          image: {
            src: foodpayMobileLanding,
            alt: "FoodPay landing page on mobile"
          },
          caption: "Landing page, mobile responsive"
        },
        {
          type: "figure",
          image: {
            src: foodpaySignupLogin,
            alt: "FoodPay sign up and login on web"
          },
          caption: "Sign up and login, web"
        },
        {
          type: "figure",
          image: {
            src: foodpayMobileSignupOnboarding,
            alt: "FoodPay sign up, login and onboarding on mobile"
          },
          caption: "Sign up, login and onboarding, mobile responsive"
        },
        {
          type: "figure",
          image: {
            src: foodpayOnboarding,
            alt: "FoodPay merchant onboarding on web"
          },
          caption: "Onboarding pages, web"
        },
        {
          type: "figure",
          image: {
            src: foodpayDashboard,
            alt: "FoodPay dashboard on web"
          },
          caption: "Dashboard, web"
        },
        {
          type: "figure",
          image: {
            src: foodpayMobileDashboard,
            alt: "FoodPay dashboard on mobile"
          },
          caption: "Dashboard, mobile responsive"
        }
      ]
    },
    {
      id: "impact",
      label: "Impact",
      title: "Impact and Key Learnings",
      blocks: [
        {
          type: "twoLists",
          lists: [
            {
              title: "Impact",
              items: [
                "An end-to-end first product experience was delivered for FoodPay",
                "A regulation-compliant, trust-focused and scalable UI foundation was established",
                "Complex financial processes were made manageable from a user perspective"
              ]
            },
            {
              title: "Key learnings",
              items: [
                "In financial products, UX affects not only users but also operational and support teams",
                "Poorly structured onboarding increases long-term support load and operational costs",
                "Trust is not built on a single screen, but through consistent, coherent flows across the whole experience"
              ]
            }
          ]
        }
      ]
    }
  ],
  card: {
    title: "FoodPay (Yemeksepeti)",
    category: "Fintech · Payment system",
    cover: {
      src: foodpayCover,
      alt: "FoodPay merchant payment platform on desktop and mobile"
    }
  }
}

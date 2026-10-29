import type { CaseStudy } from "./types"
import newageCustomer360 from "@/public/images/newage-customer-360.png"
import newageCreditCard from "@/public/images/newage-credit-card.png"
import newageIvrPayment from "@/public/images/newage-ivr-payment.png"
import newageBankTransfer from "@/public/images/newage-bank-transfer.png"
import newageOpenAccount from "@/public/images/newage-open-account.png"
import newageViewPolicyDetails from "@/public/images/newage-view-policy-details.png"
import newageHero from "@/public/images/projects/newage-hero.png"
import newageCover from "@/public/images/projects/newage-cover.jpg"

// Copy is taken verbatim from docs/case-study/reference/newage-desktop.html.
export const newage: CaseStudy = {
  slug: "newage",
  href: "/newage-case-study",
  category: "Enterprise B2B · Insurance",
  title: "VDF NewAge",
  summary: "Internal insurance platform for Volkswagen Doğuş Finans.",
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
      label: "Client",
      value: "Volkswagen Doğuş Finans"
    },
    {
      label: "Scope",
      value: { desktop: "Customer 360, policy and payment flows, coverage mapping", mobile: "Customer 360, policy and payment flows, coverage" }
    }
  ],
  hero: {
    src: newageHero,
    alt: "VDF NewAge customer details dashboard on a laptop"
  },
  glance: [
    {
      title: "Problem",
      text: "A complex insurance lifecycle under regulatory constraints, shared across sales, operations and finance teams."
    },
    {
      title: "What I did",
      text: "Designed a Customer 360 view, status-based policy and payment flows for four payment methods, and coverage mapping."
    },
    {
      title: "Outcome",
      text: "Clearer separation of sales, policy and finance workflows, and fewer configuration and payment-related errors."
    }
  ],
  sections: [
    {
      id: "overview",
      label: "Overview",
      title: "Project Overview",
      blocks: [
        {
          type: "paragraph",
          text: "VDF NewAge is an internal B2B insurance platform used by Volkswagen Doğuş Finans sales and operations teams. The system supports complex insurance processes under regulatory constraints, covering customer management, policy creation, payments and operational tracking.",
          lead: true
        }
      ]
    },
    {
      id: "context",
      label: "Process context",
      title: "From Lead to Policy",
      blocks: [
        {
          type: "paragraph",
          text: "From lead creation to policy issuance, the product follows a multi-stage lifecycle. At a system level it is represented through a progress-based structure, so agents can track advancement across the Lead, Offer and Policy stages at a glance.",
          lead: true
        },
        {
          type: "steps",
          items: [
            {
              title: "Lead",
              text: "Initial customer contact and qualification"
            },
            {
              title: "Offer",
              text: "Policy configuration and proposal creation"
            },
            {
              title: "Policy",
              text: "Issuance, payment and operational tracking"
            }
          ]
        },
        {
          type: "paragraph",
          text: "This approach improves follow-up clarity and cross-team alignment."
        },
        {
          type: "note",
          text: "Detailed Lead and Offer management interfaces were designed by other teams and are outside the scope of my contribution."
        }
      ]
    },
    {
      id: "scope",
      label: "Scope",
      title: "Scope of My Work",
      blocks: [
        {
          type: "paragraph",
          text: "My contribution focused on the areas where operational complexity and error risk are highest.",
          lead: true
        },
        {
          type: "list",
          items: [
            "Customer 360 experience design",
            "Policy lifecycle and status management",
            "Coverage and guarantee mapping",
            "Payment confirmation and reconciliation flows",
            "Data-dense, operational UI screens"
          ],
          dense: true
        }
      ]
    },
    {
      id: "design",
      label: "Design",
      title: "UI Design",
      blocks: [
        {
          type: "paragraph",
          text: "A unified Customer 360 view was designed as a single source of truth, bringing together all customer-related data.",
          lead: true
        },
        {
          type: "list",
          items: [
            "Individual and corporate customer information",
            "Active and past policies",
            "Payment and settlement history",
            "Coverage and guarantee relationships"
          ],
          dense: true
        },
        {
          type: "paragraph",
          text: "This reduced context switching and supported faster, more confident decision-making."
        },
        {
          type: "figure",
          image: {
            src: newageCustomer360,
            alt: "Customer 360 unified customer detail view"
          },
          caption: "Customer 360, unified customer detail view"
        },
        {
          type: "subsection",
          text: "Policy and Payment Management"
        },
        {
          type: "paragraph",
          text: "Policy-related experiences were designed to clearly separate commercial approval from operational and financial completion.",
          lead: true
        },
        {
          type: "subheading",
          text: "Payment scenarios, status-based design"
        },
        {
          type: "paragraph",
          text: "Each scenario includes explicit pending, success and failure states to prevent ambiguity in operational workflows."
        },
        {
          type: "figure",
          image: {
            src: newageCreditCard,
            alt: "Credit card payment flow"
          },
          caption: "Credit card payment flow"
        },
        {
          type: "figure",
          image: {
            src: newageIvrPayment,
            alt: "IVR payment flow"
          },
          caption: "IVR payment flow"
        },
        {
          type: "figure",
          image: {
            src: newageBankTransfer,
            alt: "Bank transfer payment flow"
          },
          caption: "Bank transfer (EFT) payment flow"
        },
        {
          type: "figure",
          image: {
            src: newageOpenAccount,
            alt: "Open account payment flow"
          },
          caption: "Open account payment flow"
        },
        {
          type: "figure",
          image: {
            src: newageViewPolicyDetails,
            alt: "Policy details and documents screens"
          },
          caption: "View policy details and documents"
        },
        {
          type: "subsection",
          text: "Coverage and Guarantee Mapping"
        },
        {
          type: "paragraph",
          text: "Coverage and guarantee structures were designed to be explicit, reusable and scalable.",
          lead: true
        },
        {
          type: "principles",
          columns: 3,
          items: [
            {
              title: "Clear relationships",
              text: "Clear coverage-policy relationships to reduce confusion in complex insurance structures."
            },
            {
              title: "Rule-based configurations",
              text: "Structured, rule-based configurations that support operational consistency across teams."
            },
            {
              title: "Reduced dependencies",
              text: "Less reliance on agent memory or experience, enabling faster onboarding of new team members."
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
          type: "twoLists",
          lists: [
            {
              title: "Impact",
              items: [
                "Improved operational clarity in policy and payment stages",
                "Reduced configuration and payment-related errors",
                "Clearer separation between sales, policy and finance workflows"
              ]
            },
            {
              title: "Key learnings",
              items: [
                "In enterprise insurance platforms, clarity is driven by process visibility",
                "Status-based UX is critical for operational trust",
                "Customer-centric architecture reduces agent errors"
              ]
            }
          ]
        }
      ]
    }
  ],
  card: {
    title: "VDF NewAge, Internal Insurance Platform",
    category: "Enterprise UX · Insurance",
    cover: {
      src: newageCover,
      alt: "VDF NewAge customer details dashboard"
    }
  }
}

import type { StaticImageData } from "next/image"

/** Copy that differs between desktop and the 390px layout (shorter labels on mobile). */
export type Copy = string | { desktop: string; mobile: string }

export type Image = { src: StaticImageData; alt: string }

/** A bullet with an optional bold lead-in, e.g. "Wasted acquisition costs." + explanation. */
export type ListItem = Copy | { title: string; text: string }

/** small: 15px bullets. dense: short items set tight, without extra space between bullets. */
type ListStyle = { small?: boolean; dense?: boolean }

/** One column of a solution or a persona grid: muted label + text, bullets or quotes. */
export type Column = { title: string; text?: string; items?: ListItem[]; dense?: boolean; quotes?: string[] }

export type Block =
  /** Links are written inline as [label](https://...). */
  | { type: "paragraph"; text: string; lead?: boolean }
  | { type: "note"; text: string }
  | { type: "subheading"; text: string }
  /** Unlabeled continuation inside a section (e.g. "Policy and Payment Management"). */
  | { type: "subsection"; text: string }
  | ({ type: "list"; title?: string; items: ListItem[] } & ListStyle)
  | { type: "twoLists"; lists: ({ title: string; items: ListItem[] } & ListStyle)[] }
  | { type: "metrics"; columns: 2 | 3; items: { value: Copy; label: Copy }[]; source: string }
  | { type: "steps"; items: { title?: string; text: string }[] }
  | { type: "principles"; columns: 3 | 4; items: { title: string; text: string }[] }
  /** profile: short persona facts in a tighter grid that stays two-column on mobile. */
  | { type: "labelValue"; items: { label: string; value: string }[]; profile?: boolean }
  /** stackOnMobile turns each row into "first cell · second cell" + third cell below it. */
  | { type: "table"; title?: string; head: Copy[]; rows: Copy[][]; stackOnMobile?: boolean }
  | { type: "quote"; text: string; source: string }
  | { type: "quotes"; title?: string; items: string[] }
  | { type: "figure"; image: Image; caption?: string }
  | { type: "personas"; items: { name: string; meta: string; text: string }[] }
  | { type: "columns"; columns: Column[] }
  | { type: "stack"; title?: string; items: { title: string; text: string; quote?: string }[] }
  | {
      type: "solution"
      title: string
      /** One image, or two shown side by side (a figure pair). */
      images: Image[]
      columns?: Column[]
      features?: { title: string; text: string; quote: string; impactLabel: string; impact: string }[]
    }

export type Section = {
  id: string
  /** Shown in the section menu and, numbered, as the section eyebrow ("01 Problem"). */
  label: string
  /** H2, Title Case. */
  title: string
  blocks: Block[]
}

export type CaseStudy = {
  slug: string
  href: string
  category: string
  title: string
  summary: string
  meta: { label: string; value: Copy }[]
  hero: Image
  glance: { title: string; text: string }[]
  sections: Section[]
  /** How the project appears in "Other Projects". */
  card: { title: string; category: string; cover: Image }
}

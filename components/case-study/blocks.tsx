import Image from "next/image"
import type { Block, Column, Copy, Image as ImageT, ListItem } from "@/content/case-studies/types"

// Right-column width (1120 - 240 - 48) on desktop; images run edge to edge on mobile.
const CONTENT_SIZES = "(min-width: 768px) 832px, 100vw"

export function CopyText({ value }: { value: Copy }) {
  if (typeof value === "string") return value
  return (
    <>
      <span className="cs-desktop-only">{value.desktop}</span>
      <span className="cs-mobile-only">{value.mobile}</span>
    </>
  )
}

// Renders "[label](href)" spans in content copy as links.
function RichText({ text }: { text: string }) {
  const parts = text.split(/\[([^\]]+)\]\(([^)]+)\)/)
  return parts.map((part, i) => {
    if (i % 3 === 1) return <a key={i} href={parts[i + 1]} target="_blank" rel="noreferrer">{part}</a>
    if (i % 3 === 2) return null
    return part
  })
}

function Item({ item }: { item: ListItem }) {
  if (typeof item === "object" && "title" in item) {
    return (
      <li>
        <strong>{item.title}</strong> {item.text}
      </li>
    )
  }
  return (
    <li>
      <CopyText value={item} />
    </li>
  )
}

function List({ items, className }: { items: ListItem[]; className: string }) {
  return (
    <ul className={className}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </ul>
  )
}

const listClass = (base: string, { small, dense }: { small?: boolean; dense?: boolean }) =>
  [base, small && "is-small", dense && "is-dense"].filter(Boolean).join(" ")

function ContentImage({ image, sizes = CONTENT_SIZES }: { image: ImageT; sizes?: string }) {
  return <Image src={image.src} alt={image.alt} sizes={sizes} className="cs-image" />
}

function ColumnContent({ column }: { column: Column }) {
  return (
    <div>
      <h4 className="cs-column-title">{column.title}</h4>
      {column.text && <p className="cs-column-text">{column.text}</p>}
      {column.items && <List items={column.items} className={listClass("cs-column-list", column)} />}
      {column.quotes && <List items={column.quotes} className="cs-column-quotes" />}
    </div>
  )
}

export function CaseStudyBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className={block.lead ? "cs-paragraph is-lead" : "cs-paragraph"}>
          <RichText text={block.text} />
        </p>
      )

    case "note":
      return <p className="cs-note">{block.text}</p>

    case "subheading":
      return <h3 className="cs-subheading">{block.text}</h3>

    case "subsection":
      return <h3 className="cs-subsection">{block.text}</h3>

    case "list":
      return (
        <div className={block.title ? "cs-list-block has-title" : "cs-list-block"}>
          {block.title && <h3 className="cs-list-title">{block.title}</h3>}
          <List items={block.items} className={listClass("cs-list", block)} />
        </div>
      )

    case "twoLists":
      return (
        <div className="cs-two-lists">
          {block.lists.map((list) => (
            <div key={list.title}>
              <h3 className="cs-list-title">{list.title}</h3>
              <List items={list.items} className={listClass("cs-list", list)} />
            </div>
          ))}
        </div>
      )

    case "metrics":
      return (
        <div className="cs-metrics">
          <div className={`cs-metrics-grid cols-${block.columns}`}>
            {block.items.map((item, i) => (
              <div key={i} className="cs-metric">
                <p className="cs-metric-value">
                  <CopyText value={item.value} />
                </p>
                <p className="cs-metric-label">
                  <CopyText value={item.label} />
                </p>
              </div>
            ))}
          </div>
          <p className="cs-source">{block.source}</p>
        </div>
      )

    case "steps":
      return (
        <ol className={block.items.some((step) => step.title) ? "cs-steps" : "cs-steps is-plain"}>
          {block.items.map((step, i) => (
            <li key={i}>
              <span className="cs-step-number">{i + 1}</span>
              {step.title ? (
                <div>
                  <h3 className="cs-step-title">{step.title}</h3>
                  <p className="cs-step-text">{step.text}</p>
                </div>
              ) : (
                <p className="cs-step-text is-only">{step.text}</p>
              )}
            </li>
          ))}
        </ol>
      )

    case "principles":
      return (
        <div className={`cs-principles cols-${block.columns}`}>
          {block.items.map((item) => (
            <div key={item.title}>
              <h3 className="cs-principle-title">{item.title}</h3>
              <p className="cs-principle-text">{item.text}</p>
            </div>
          ))}
        </div>
      )

    case "labelValue":
      return (
        <dl className={block.profile ? "cs-label-value is-profile" : "cs-label-value"}>
          {block.items.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      )

    case "table":
      return (
        <div className={block.title ? "cs-table-block has-title" : "cs-table-block"}>
          {block.title && <h3 className="cs-list-title">{block.title}</h3>}
          <div className={block.stackOnMobile ? "cs-table-scroll is-stacked" : "cs-table-scroll"}>
            <table className="cs-table">
              <thead>
                <tr>
                  {block.head.map((cell, i) => (
                    <th key={i} scope="col">
                      <CopyText value={cell} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>
                        <CopyText value={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )

    case "quote":
      return (
        <figure className="cs-quote">
          <blockquote>{block.text}</blockquote>
          <figcaption>{block.source}</figcaption>
        </figure>
      )

    case "quotes":
      return (
        <div className={block.title ? "cs-quotes-block has-title" : "cs-quotes-block"}>
          {block.title && <h3 className="cs-quotes-title">{block.title}</h3>}
          <List items={block.items} className="cs-quotes" />
        </div>
      )

    case "figure":
      return (
        <figure className="cs-figure">
          <ContentImage image={block.image} />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      )

    case "personas":
      return (
        <div className="cs-personas">
          {block.items.map((p) => (
            <div key={p.name}>
              <h4 className="cs-persona-name">{p.name}</h4>
              <p className="cs-persona-meta">{p.meta}</p>
              <p className="cs-persona-text">{p.text}</p>
            </div>
          ))}
        </div>
      )

    case "columns":
      return (
        <div className={`cs-columns cols-${block.columns.length}`}>
          {block.columns.map((column) => (
            <ColumnContent key={column.title} column={column} />
          ))}
        </div>
      )

    case "stack":
      return (
        <div className={block.title ? "cs-stack has-title" : "cs-stack"}>
          {block.title && <h3 className="cs-list-title">{block.title}</h3>}
          <div className="cs-stack-items">
            {block.items.map((item) => (
              <div key={item.title}>
                <h4 className="cs-stack-title">{item.title}</h4>
                <p className="cs-stack-text">{item.text}</p>
                {item.quote && <p className="cs-stack-quote">{item.quote}</p>}
              </div>
            ))}
          </div>
        </div>
      )

    case "solution":
      return <Solution block={block} />
  }
}

function Solution({ block }: { block: Extract<Block, { type: "solution" }> }) {
  // A figure pair: on mobile each image sits above the feature it illustrates.
  if (block.features) {
    return (
      <article className="cs-solution">
        <h3 className="cs-solution-title">{block.title}</h3>
        <div className="cs-features">
          {block.features.map((feature, i) => (
            <div key={feature.title} className="cs-feature">
              <figure className="cs-solution-figure">
                <ContentImage image={block.images[i]} sizes="(min-width: 768px) 404px, 100vw" />
              </figure>
              <div className="cs-feature-body">
                <h4 className="cs-feature-title">{feature.title}</h4>
                <p className="cs-feature-text">{feature.text}</p>
                <p className="cs-feature-quote">{feature.quote}</p>
                <h5 className="cs-feature-label">{feature.impactLabel}</h5>
                <p className="cs-feature-impact">{feature.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    )
  }
  return (
    <article className="cs-solution">
      <h3 className="cs-solution-title">{block.title}</h3>
      <figure className="cs-solution-figure">
        <ContentImage image={block.images[0]} />
      </figure>
      {block.columns && (
        <div className={`cs-columns cs-solution-columns cols-${block.columns.length}`}>
          {block.columns.map((column) => (
            <ColumnContent key={column.title} column={column} />
          ))}
        </div>
      )}
    </article>
  )
}

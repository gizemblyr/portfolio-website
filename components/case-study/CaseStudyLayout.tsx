import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { caseStudies } from "@/content/case-studies"
import type { CaseStudy } from "@/content/case-studies/types"
import { CaseStudyBlock, CopyText } from "./blocks"
import { SectionNav } from "./section-nav"

const pad = (n: number) => String(n).padStart(2, "0")

export function CaseStudyLayout({ study }: { study: CaseStudy }) {
  const others = caseStudies.filter((s) => s.slug !== study.slug)

  return (
    <div className="cs-page">
      <Header />

      <main>
        <div className="cs-container">
          <section className="cs-intro">
            <p className="cs-category">{study.category}</p>
            <h1 className="cs-title">{study.title}</h1>
            <p className="cs-summary">{study.summary}</p>
            <dl className="cs-meta">
              {study.meta.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>
                    <CopyText value={item.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <figure
            className="cs-hero"
            style={
              study.heroMaxHeight
                ? ({ "--cs-hero-max-h": `${study.heroMaxHeight}px` } as React.CSSProperties)
                : undefined
            }
          >
            <Image src={study.hero.src} alt={study.hero.alt} sizes="(min-width: 768px) 992px, 100vw" priority />
          </figure>

          <section className="cs-glance" aria-labelledby="glance">
            <h2 id="glance">At a glance</h2>
            {study.glance.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </section>
        </div>

        {/* The section menu sticks for the rest of the page, so it shares a parent with everything below it. */}
        <div className="cs-body">
          <SectionNav items={study.sections.map(({ id, label }) => ({ id, label }))} />
          <div className="cs-container">
            {study.sections.map((section, i) => (
              <section key={section.id} id={section.id} className="cs-section">
                <p className="cs-eyebrow">
                  <span>
                    {pad(i + 1)} {section.label}
                  </span>
                  <span className="cs-eyebrow-rule" aria-hidden="true" />
                </p>
                <div className="cs-section-body">
                  <h2 className="cs-h2">{section.title}</h2>
                  {section.blocks.map((block, j) => (
                    <CaseStudyBlock key={j} block={block} />
                  ))}
                </div>
              </section>
            ))}

            <section className="cs-others" aria-labelledby="others">
              <h2 id="others">Other Projects</h2>
              <div className="cs-others-grid">
                {others.map((other) => (
                  <Link key={other.slug} href={other.href} className="cs-other">
                    <span className="cs-other-cover">
                      <Image
                        src={other.card.cover.src}
                        alt={other.card.cover.alt}
                        sizes="(min-width: 768px) 540px, 100vw"
                      />
                    </span>
                    <span className="cs-other-text">
                      <span className="cs-other-title">{other.card.title}</span>
                      <span className="cs-other-category">{other.card.category}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

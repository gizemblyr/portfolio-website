import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const articles = [
  {
    source: "SUBSTACK",
    title: "Building a Product from Scratch with Lovable: An End-to-End Transfer Booking Flow",
    description: "A product designer's notes on turning an AI-assisted experiment into a working, end-to-end booking flow.",
    href: "https://substack.com/home/post/p-196515301",
    image: "/images/blog-substack.png",
    alt: "Abstract editorial composition about building a product with AI",
  },
  {
    source: "MEDIUM",
    title: "How I Use Cursor to Audit My Design System",
    description: "Using Cursor to audit design-system consistency and identify styling drift across real design files.",
    href: "https://medium.com/muzli-design-inspiration/how-i-use-cursor-to-audit-my-design-system-bdf1b141a635",
    image: "/images/blog-cursor.png",
    alt: "Abstract design system audit with a cursor and component grid",
  },
  {
    source: "MEDIUM",
    title: "From Interfaces to Protocols: How AI Agents Are Changing the Way They Interact with the Web",
    description: "Exploring how AI agents may shift digital products from interface-driven interactions toward capabilities, permissions, and protocols.",
    href: "https://medium.com/muzli-design-inspiration/from-interfaces-to-protocols-how-ai-agents-are-changing-the-way-they-interact-with-the-web-50e3d0613944",
    image: "/images/blog-agents.png",
    alt: "Abstract connected browser and protocol lines",
  },
]

export function EditorialBlog() {
  return (
    <section id="blog" className="editorial-blog" aria-labelledby="blog-title">
      <div className="editorial-blog-inner">
        <header className="editorial-blog-heading">
          <h2 id="blog-title">Blog on Design, AI &amp; Tech</h2>
        </header>
        <div className="editorial-articles">
          {articles.map((article) => (
            <a
              key={article.href}
              className="editorial-article"
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="editorial-article-image">
                <Image src={article.image} alt={article.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
              </div>
              <div className="editorial-article-copy">
                <p className="editorial-article-source">{article.source}</p>
                <h3>{article.title}</h3>
                <p className="editorial-article-description">{article.description}</p>
                <span className="editorial-article-link" aria-hidden="true"><ArrowUpRight size={18} /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

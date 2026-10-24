import Image from "next/image"
import Link from "next/link"

const projects = [
  { key: "monevo", title: "Monevo, Financial Habit", meta: "FINTECH · MOBILE", href: "/monevo-case-study", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/monevo.png-dWUXfBOpNkxq0giVRxLczd9VnFs3lz.jpeg", alt: "Monevo Financial Habit mobile app interfaces" },
  { key: "foodpanda", title: "Foodpanda Partner, Vendor Portal", meta: "B2B · PLATFORM", href: "/foodpanda-case-study", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu.png-cGs1WwFpzq2yEwyJE2zCa92kTCxmJR.jpeg", alt: "Foodpanda Partner vendor portal interface" },
  { key: "newage", title: "VDF NewAge, Internal Platform", meta: "INSURANCE · ENTERPRISE", href: "/newage-case-study", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vdf%20newage.png-yjPbRBxE05YQl5DUGcdn9lQR5aMcXS.jpeg", alt: "VDF NewAge internal insurance platform dashboard" },
  { key: "foodpay", title: "FoodPay, Yemeksepeti", meta: "FINTECH · B2B", href: "/foodpay-case-study", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yemekpay%201.png-fghqf84ooMdWHNSVVL12dSij3L3eRf.jpeg", alt: "FoodPay payment platform interface" },
  { key: "yemekcom", title: "Yemek.com", meta: "CONTENT · MOBILE", href: "/yemekcom-case-study", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yemekcom.png-GOKRIIyWcjkOh4nPiVUo3L49DR9ri7.jpeg", alt: "Yemek.com recipe app interfaces" },
]

export function ExploreMoreWork({ current }: { current: string }) {
  return (
    <section className="explore-more-work" aria-labelledby="explore-more-work-title">
      <div className="explore-more-work-inner">
        <h2 id="explore-more-work-title">Explore more work</h2>
        <div className="explore-more-work-grid">
          {projects.filter((project) => project.key !== current).map((project) => (
            <Link key={project.key} href={project.href} className="explore-more-work-card">
              <div className="explore-more-work-image"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 767px) 100vw, 33vw" /></div>
              <p>{project.meta}</p>
              <h3>{project.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

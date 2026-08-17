import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { CTABanner } from "@/components/cta-banner"
import { StaggeredGrid } from "@/components/staggered-grid"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Portfolio | Widle.ai",
<<<<<<< HEAD
  description: "View our expansive portfolio of custom software, AI implementations, and cloud-native solutions delivered by Widle.",
}

import { PORTFOLIO_DATA } from '@/lib/portfolio-data'
const portfolioItems = [
  {
    title: "Xaver Sports",
    category: "Retool SaaS Platform",
    image: "/images/portfolio/Xaver-Sport.png",
    description: "A high-performance sports management platform built for scalability and real-time data tracking.",
    slug: "xaver-sport-retool"
  },
  {
    title: "Scalers",
<<<<<<< HEAD
    category: "Internal Tooling & Automation",
    image: "/images/portfolio/Scalers-Case.png",
=======
    category: "RETOOL",
    image: "/images/portfolio/scaler-retool.png",
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
    description: "Cloud-native architecture optimization allowing for elastic scaling during peak user loads.",
    slug: "scaler-retool"
  },
  {
<<<<<<< HEAD
    title: "Instacoach Platform",
    category: "Mobile & Web Booking Platform",
    image: "/images/portfolio/Instacoach-Case.png",
=======
    title: "Instacoach",
    category: "RETOOL",
    image: "/images/portfolio/instacoach-retool.png",
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
    description: "A comprehensive booking and coaching platform integrating complex payment gateways and scheduling algorithms.",
    slug: "instacoach-retool"
  },
  {
    title: "UXDX",
<<<<<<< HEAD
    category: "High-Performance ReactJS Website",
    image: "/images/portfolio/uxdx-g.png",
=======
    category: "REACT JS, WEBSITE",
    image: "/images/portfolio/uxdx.png",
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
    description: "A dynamic, high-performance front-end architecture for a premier product design conference.",
    slug: "uxdx"
  },
  {
    title: "Dexter Angels",
<<<<<<< HEAD
    category: "Corporate Investment Platform",
    image: "/images/portfolio/dexterangels-g.png",
=======
    category: "WEBSITE",
    image: "/images/portfolio/dexter-angels.png",
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
    description: "Secure, highly-available corporate platform designed for angel investors and syndicates.",
    slug: "dexter-angels"
  },
  {
    title: "YOYPR",
<<<<<<< HEAD
    category: "Angular Backend Architecture",
    image: "/images/portfolio/yoypr-g.png",
    description: "Enterprise-grade Angular backend architecture built to handle complex, asynchronous data routing.",
    slug: "yoypr"
=======
    category: "ANGULAR, BACKEND, WEBSITE",
    image: "/images/portfolio/yoypr.png",
    description: "Enterprise-grade Angular backend architecture built to handle complex, asynchronous data routing.",
    slug: "yoypr"
  },
  {
    title: "Krushin",
    category: "BACKEND, FLUTTER, LARAVEL, MOBILE APP",
    image: "/images/portfolio/krushin.png",
    description: "An innovative project leveraging BACKEND, FLUTTER, LARAVEL technologies to deliver exceptional user experiences.",
    slug: "krushin"
  },
  {
    title: "24ent",
    category: "ANGULAR, BACKEND, MOBILE APP, WEBSITE",
    image: "/images/portfolio/24ent.png",
    description: "An innovative project leveraging ANGULAR, BACKEND, MOBILE APP technologies to deliver exceptional user experiences.",
    slug: "24ent"
  },
  {
    title: "CLE Companion",
    category: "BACKEND, WEBSITE, WORDPRESS",
    image: "/images/portfolio/cle-companion.png",
    description: "An innovative project leveraging BACKEND, WEBSITE, WORDPRESS technologies to deliver exceptional user experiences.",
    slug: "cle-companion"
  },
  {
    title: "Safelet",
    category: "ANGULAR, BACKEND, MOBILE APP, NODE JS, WEBSITE",
    image: "/images/portfolio/safelet.png",
    description: "An innovative project leveraging ANGULAR, BACKEND, MOBILE APP technologies to deliver exceptional user experiences.",
    slug: "safelet"
  },
  {
    title: "RealEstateCake",
    category: "BACKEND, MOBILE APP, REACT JS, WEBSITE",
    image: "/images/portfolio/realestatecake.png",
    description: "An innovative project leveraging BACKEND, MOBILE APP, REACT JS technologies to deliver exceptional user experiences.",
    slug: "realestatecake"
  },
  {
    title: "NewzKast",
    category: "ANGULAR, BACKEND, MOBILE APP, WEBSITE",
    image: "/images/portfolio/newzkast.png",
    description: "An innovative project leveraging ANGULAR, BACKEND, MOBILE APP technologies to deliver exceptional user experiences.",
    slug: "newzkast"
  },
  {
    title: "StaffMerge",
    category: "ANGULAR, BACKEND, LARAVEL, MOBILE APP, WEBSITE",
    image: "/images/portfolio/staffmerge.png",
    description: "An innovative project leveraging ANGULAR, BACKEND, LARAVEL technologies to deliver exceptional user experiences.",
    slug: "staffmerge"
  },
  {
    title: "EverKnock",
    category: "JEKYll, HTML5, SASS, JAVASCRIPT, FIGMA, GITHUB",
    image: "/images/portfolio/everknock.png",
    description: "An innovative project leveraging JEKYll, HTML5, SASS technologies to deliver exceptional user experiences.",
    slug: "everknock"
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
  }
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Work"
<<<<<<< HEAD
            headline="Widle Portfolio"
=======
            headline="Widle Studio Portfolio"
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
            subtext="Discover a selection of our most impactful projects spanning AI, Cloud Software, and Retool integrations."
          />

          <StaggeredGrid className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
<<<<<<< HEAD
            {portfolioItems.map((item, idx) => (
=======
            {PORTFOLIO_DATA.map((item, idx) => (
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
              <Link href={`/portfolio/${item.slug}`} key={idx} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md hover:-translate-y-1 block cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted flex items-center justify-center p-6">
                  {/* Many of the extracted logos are transparent PNGs or raw logos, so we use object-contain and a nice background */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-6 border-t border-border/50">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                    {item.category}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </StaggeredGrid>
        </div>
      </main>

      <CTABanner
        headline="Ready to build your next big project?"
        description="Let's discuss how our engineering expertise can bring your vision to life."
        buttonText="Get in Touch"
        buttonHref="/contact"
        variant="primary"
      />

      <Footer />
    </div>
  )
}

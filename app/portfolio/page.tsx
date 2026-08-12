import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { CTABanner } from "@/components/cta-banner"
import { StaggeredGrid } from "@/components/staggered-grid"
import Image from "next/image"

export const metadata = {
  title: "Portfolio | Widle.ai",
  description: "View our expansive portfolio of custom software, AI implementations, and cloud-native solutions delivered by Widle Studio.",
}

const portfolioItems = [
  {
    title: "Xaver Sports",
    category: "Retool Application",
    image: "/images/portfolio/Xaver-Sport.png",
    description: "A high-performance sports management platform built for scalability and real-time data tracking.",
  },
  {
    title: "Scalers Case",
    category: "Retool Application",
    image: "/images/portfolio/Scalers-Case.png",
    description: "Cloud-native architecture optimization allowing for elastic scaling during peak user loads.",
  },
  {
    title: "Instacoach Platform",
    category: "Retool Application",
    image: "/images/portfolio/Instacoach-Case.png",
    description: "A comprehensive booking and coaching platform integrating complex payment gateways and scheduling algorithms.",
  },
  {
    title: "Houst Management",
    category: "Internal Tooling",
    image: "/images/portfolio/Houst-Case.png",
    description: "Custom internal dashboards built with Retool to streamline operations and property management.",
  },
  {
    title: "UXDX",
    category: "ReactJS Website",
    image: "/images/portfolio/uxdx-g.png",
    description: "A dynamic, high-performance front-end architecture for a premier product design conference.",
  },
  {
    title: "Dexter Angels",
    category: "Website & Architecture",
    image: "/images/portfolio/dexterangels-g.png",
    description: "Secure, highly-available corporate platform designed for angel investors and syndicates.",
  },
  {
    title: "YOYPR",
    category: "Angular Backend Website",
    image: "/images/portfolio/yoypr-g.png",
    description: "Enterprise-grade Angular backend architecture built to handle complex, asynchronous data routing.",
  },
  {
    title: "Safelet Dashboard",
    category: "Security & Analytics",
    image: "/images/portfolio/Safelet-Dashboard.png",
    description: "Secure, real-time analytics dashboard providing instant visibility into critical user metrics.",
  },
  {
    title: "Maverick App",
    category: "Custom Software",
    image: "/images/portfolio/Maverick-Mockup-2.png",
    description: "End-to-end custom application development with a focus on seamless UX and robust backend performance.",
  },
  {
    title: "24ent",
    category: "Custom Solution",
    image: "/images/portfolio/24ent-g.png",
    description: "Scalable platform designed to aggregate and distribute multimedia content securely.",
  },
  {
    title: "StaffMerge",
    category: "Enterprise Tooling",
    image: "/images/portfolio/StaffMerge-g.png",
    description: "An automated HR and recruitment platform utilizing intelligent data parsing and matching.",
  },
  {
    title: "Newzkast",
    category: "Media & Publishing",
    image: "/images/portfolio/newzkast-g.png",
    description: "High-throughput content delivery system engineered for real-time news publishing.",
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
            headline="Widle Studio Portfolio"
            subtext="Discover a selection of our most impactful projects spanning AI, Cloud Software, and Retool integrations."
          />

          <StaggeredGrid className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md">
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
              </div>
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

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { CTABanner } from "@/components/cta-banner"
import { StaggeredGrid } from "@/components/staggered-grid"
import Image from "next/image"

export const metadata = {
  title: "Portfolio | Widle Studio",
  description: "View our portfolio of custom software, AI implementations, and cloud-native solutions delivered by Widle Studio.",
}

const portfolioItems = [
  {
    title: "Xaver Sports",
    category: "Web Application",
    image: "https://widle.studio/assets/images/Xaver-Sport.png",
    description: "A high-performance sports management platform built for scalability and real-time data tracking.",
  },
  {
    title: "Scalers Case",
    category: "Cloud Infrastructure",
    image: "https://widle.studio/assets/images/Scalers-Case.png",
    description: "Cloud-native architecture optimization allowing for elastic scaling during peak user loads.",
  },
  {
    title: "Instacoach Platform",
    category: "Mobile & Web",
    image: "https://widle.studio/assets/images/Instacoach-Case.png",
    description: "A comprehensive booking and coaching platform integrating complex payment gateways and scheduling algorithms.",
  },
  {
    title: "Houst Management",
    category: "Internal Tooling / Retool",
    image: "https://widle.studio/assets/images/Houst-Case.png",
    description: "Custom internal dashboards built with Retool to streamline operations and property management.",
  },
  {
    title: "Safelet Dashboard",
    category: "Security & Analytics",
    image: "https://widle.studio/assets/images/Safelet+Dashboard.png",
    description: "Secure, real-time analytics dashboard providing instant visibility into critical user metrics.",
  },
  {
    title: "Maverick App",
    category: "Custom Software",
    image: "https://widle.studio/assets/images/Maverick+Mockup+2.png",
    description: "End-to-end custom application development with a focus on seamless UX and robust backend performance.",
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
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-6">
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

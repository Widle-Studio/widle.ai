import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { CTABanner } from "@/components/cta-banner"
import { StaggeredGrid } from "@/components/staggered-grid"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Portfolio | Widle.ai",
  description: "View our expansive portfolio of custom software, AI implementations, and cloud-native solutions delivered by Widle Studio.",
}

import { PORTFOLIO_DATA } from '@/lib/portfolio-data'

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
            {PORTFOLIO_DATA.map((item, idx) => (
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

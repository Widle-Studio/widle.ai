import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { CaseStudyCard } from "@/components/case-study-card"
import { CTABanner } from "@/components/cta-banner"

export const metadata = {
  title: "Case Studies & Client Success Stories",
  description: "Read how Widle Studio has helped enterprises across industries implement AI solutions for measurable business impact.",
}

export default function CaseStudiesPage() {
  const studiesData = [
    {
      id: "1",
      title: "MedTech AI Diagnostics",
      industry: "Healthcare",
      metric_highlight: "Reduced diagnostic time by 40% using custom Computer Vision models.",
      slug: "medtech-ai-diagnostics",
      image_url: "/placeholder.svg?height=400&width=600"
    },
    {
      id: "2",
      title: "FinTech Fraud Detection",
      industry: "Finance",
      metric_highlight: "Identified anomalous transactions in real-time, saving $2M annually.",
      slug: "fintech-fraud-detection",
      image_url: "/placeholder.svg?height=400&width=600"
    },
    {
      id: "3",
      title: "Retail Demand Forecasting",
      industry: "Retail",
      metric_highlight: "Optimized supply chain inventory with 95% predictive accuracy.",
      slug: "retail-demand-forecasting",
      image_url: "/placeholder.svg?height=400&width=600"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case Studies"
            headline="Proven Impact Across Industries"
            subtext="Explore real-world examples of how our AI solutions have driven efficiency, innovation, and measurable ROI for our clients."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {studiesData && studiesData.length > 0 ? (
              studiesData.map((study) => (
                <CaseStudyCard
                  key={study.id}
                  title={study.title}
                  tag={study.industry}
                  description={study.metric_highlight}
                  href={`/case-studies/${study.slug}`}
                  image={study.image_url || "/placeholder.svg"}
                />
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-muted-foreground">
                <p>New case studies are being documented. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <CTABanner
        headline="Start Your Own Success Story"
        description="Partner with us to build custom AI solutions that deliver real business value."
        buttonText="Get a Free Consultation"
        buttonHref="/#contact"
        variant="accent"
      />

      <Footer />
    </div>
  )
}

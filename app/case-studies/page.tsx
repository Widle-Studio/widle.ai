import { Navbar } from "@/components/navbar"
import { StaggeredGrid } from "@/components/staggered-grid"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { CaseStudyCard } from "@/components/case-study-card"
import { CTABanner } from "@/components/cta-banner"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

export const metadata = {
  title: "Case Studies & Insights",
<<<<<<< HEAD
  description: "Read how Widle has helped enterprises across industries implement AI solutions for measurable business impact, and discover our latest insights.",
=======
  description: "Read how Widle Studio has helped enterprises across industries implement AI solutions for measurable business impact, and discover our latest insights.",
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
}

export default function CaseStudiesPage() {
  const studiesData = [
    {
      id: "1",
      title: "MedTech AI Diagnostics",
      industry: "Healthcare",
      metric_highlight: "Reduced diagnostic time by 40% using custom Computer Vision models.",
      slug: "medtech-ai-diagnostics",
      image_url: "/images/Widle-Logo.jpg"
    },
    {
      id: "2",
      title: "FinTech Fraud Detection",
      industry: "Finance",
      metric_highlight: "Identified anomalous transactions in real-time, saving $2M annually.",
      slug: "fintech-fraud-detection",
      image_url: "/images/Widle-Logo.jpg"
    },
    {
      id: "3",
      title: "Retail Demand Forecasting",
      industry: "Retail",
      metric_highlight: "Optimized supply chain inventory with 95% predictive accuracy.",
      slug: "retail-demand-forecasting",
      image_url: "/images/Widle-Logo.jpg"
    }
  ]

  const postsData = [
    {
      id: "1",
      slug: "future-generative-ai",
      title: "The Future of Generative AI in the Enterprise",
      published_at: "2023-10-12T00:00:00Z",
      excerpt: "Explore how generative models are moving from novelties to core business tools.",
      content: "Explore how generative models are moving from novelties to core business tools."
    },
    {
      id: "2",
      slug: "trust-in-ai",
      title: "Building Trust in AI Systems",
      published_at: "2023-09-28T00:00:00Z",
      excerpt: "Why transparency and explainability are crucial for enterprise AI adoption.",
      content: "Why transparency and explainability are crucial for enterprise AI adoption."
    },
    {
      id: "3",
      slug: "mlops-guide",
      title: "A Guide to MLOps for Scale",
      published_at: "2023-09-15T00:00:00Z",
      excerpt: "Best practices for deploying and monitoring machine learning models in production.",
      content: "Best practices for deploying and monitoring machine learning models in production."
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

          <StaggeredGrid className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <StaggeredGrid className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {studiesData && studiesData.length > 0 ? (
              studiesData.map((study) => (
                <CaseStudyCard
                  key={study.id}
                  title={study.title}
                  tag={study.industry}
                  description={study.metric_highlight}
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
          </StaggeredGrid>
        </div>

        <div className="mx-auto mt-24 max-w-7xl px-4 sm:mt-32 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Insights & Research"
            headline="The Latest in Enterprise AI"
            subtext="Stay up to date with our latest research, thought leadership, and practical guides on implementing AI in the enterprise."
          />

          <StaggeredGrid className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {postsData && postsData.length > 0 ? (
              postsData.map((post) => (
                <Link key={post.id} href={`/case-studies/${post.slug || post.id}`} className="group flex flex-col justify-between overflow-hidden rounded-2xl border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.published_at}>
                        {new Date(post.published_at).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </time>
                    </div>
                    <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt || post.content.substring(0, 150) + "..."}
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="flex items-center text-sm font-medium text-primary">
                      Read full article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-muted-foreground">
                <p>New insights are being drafted. Check back soon!</p>
              </div>
            )}
          </StaggeredGrid>
        </div>

        <div className="mx-auto mt-24 max-w-7xl px-4 sm:mt-32 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Insights & Research"
            headline="The Latest in Enterprise AI"
            subtext="Stay up to date with our latest research, thought leadership, and practical guides on implementing AI in the enterprise."
          />

          <StaggeredGrid className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {postsData && postsData.length > 0 ? (
              postsData.map((post) => (
                <Link key={post.id} href={`/case-studies/${post.slug || post.id}`} className="group flex flex-col justify-between overflow-hidden rounded-2xl border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.published_at}>
                        {new Date(post.published_at).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </time>
                    </div>
                    <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt || post.content.substring(0, 150) + "..."}
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="flex items-center text-sm font-medium text-primary">
                      Read full article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-muted-foreground">
                <p>New insights are being drafted. Check back soon!</p>
              </div>
            )}
          </StaggeredGrid>
        </div>

        <div className="mx-auto mt-24 max-w-7xl px-4 sm:mt-32 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Insights & Research"
            headline="The Latest in Enterprise AI"
            subtext="Stay up to date with our latest research, thought leadership, and practical guides on implementing AI in the enterprise."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {postsData && postsData.length > 0 ? (
              postsData.map((post) => (
                <Link key={post.id} href={`/insights/${post.slug || post.id}`} className="group flex flex-col justify-between overflow-hidden rounded-2xl border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.published_at}>
                        {new Date(post.published_at).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </time>
                    </div>
                    <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt || post.content.substring(0, 150) + "..."}
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="flex items-center text-sm font-medium text-primary">
                      Read full article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-muted-foreground">
                <p>New insights are being drafted. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <CTABanner
        headline="Start Your Own Success Story"
        description="Partner with us to build custom AI solutions that deliver real business value."
        buttonText="Get a Free Consultation"
        buttonHref="/contact"
        variant="accent"
      />

      <Footer />
    </div>
  )
}

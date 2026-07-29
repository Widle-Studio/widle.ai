import { createClient } from "@/lib/supabase/server"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServiceCard } from "@/components/service-card"
import { CaseStudyCard } from "@/components/case-study-card"
import { StatsBanner } from "@/components/stats-banner"
import { PartnerLogo } from "@/components/partner-logo"
import { SectionHeader } from "@/components/section-header"
import { CTABanner } from "@/components/cta-banner"
import { LogoMarquee } from "@/components/logo-marquee"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { BlogCard } from "@/components/blog-card"
import { Brain, Bot, Cog, Eye, TrendingUp, Lightbulb } from "lucide-react"

// Partner Logos data (2 rows = 12 logos)
const partnerLogos = [
  { src: "/placeholder.svg?height=48&width=140", alt: "Amazon Web Services" },
  { src: "/placeholder.svg?height=48&width=140", alt: "Google Cloud" },
  { src: "/placeholder.svg?height=48&width=140", alt: "Microsoft Azure" },
  { src: "/placeholder.svg?height=48&width=140", alt: "NVIDIA" },
  { src: "/placeholder.svg?height=48&width=140", alt: "OpenAI" },
  { src: "/placeholder.svg?height=48&width=140", alt: "Anthropic" },
  { src: "/placeholder.svg?height=48&width=140", alt: "Databricks" },
  { src: "/placeholder.svg?height=48&width=140", alt: "Snowflake" },
  { src: "/placeholder.svg?height=48&width=140", alt: "MongoDB" },
  { src: "/placeholder.svg?height=48&width=140", alt: "Hugging Face" },
  { src: "/placeholder.svg?height=48&width=140", alt: "Weights & Biases" },
  { src: "/placeholder.svg?height=48&width=140", alt: "Scale AI" },
]

// Stats data
const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "AI Experts" },
  { value: "5+", label: "Years Experience" },
]

// Map icon names to components for dynamic rendering
const iconMap: Record<string, any> = {
  "Brain": Brain,
  "Bot": Bot,
  "Cog": Cog,
  "Eye": Eye,
  "TrendingUp": TrendingUp,
  "Lightbulb": Lightbulb,
}

export default async function Home() {
  const supabase = await createClient()

  // Fetch dynamic data from Supabase
  const [
    { data: servicesData },
    { data: caseStudiesData },
    { data: testimonialsData },
    { data: postsData }
  ] = await Promise.all([
    supabase.from("services").select("*").eq("status", "Published").order("created_at", { ascending: true }).limit(6),
    supabase.from("case_studies").select("*").eq("published", true).order("created_at", { ascending: false }).limit(3),
    supabase.from("testimonials").select("*").order("order", { ascending: true }),
    supabase.from("posts").select("*").eq("published", true).order("date", { ascending: false }).limit(3)
  ])

  // Fallback data if DB fetch fails or is empty
  const services = servicesData && servicesData.length > 0 ? servicesData.map(s => ({
    icon: iconMap[s.icon_name] || Brain, // Using Brain as fallback icon if none specified
    title: s.title,
    description: s.overview || "Professional AI solutions tailored to your enterprise needs.",
    href: `/services/${s.slug}`,
  })) : []

  const caseStudies = caseStudiesData && caseStudiesData.length > 0 ? caseStudiesData.map(c => ({
    image: c.thumbnail || "/placeholder.svg?height=400&width=640",
    tag: c.industry || "Enterprise",
    title: c.title,
    description: c.challenge || "Learn how we delivered measurable ROI through advanced AI implementation.",
    href: `/case-studies/${c.slug || c.id}`,
  })) : []

  const testimonials = testimonialsData && testimonialsData.length > 0 ? testimonialsData.map(t => ({
    quote: t.quote || "widle.ai transformed our approach to data. The ROI has been remarkable.",
    clientName: t.client_name,
    role: t.role,
    companyLogo: "/placeholder.svg?height=32&width=120", // Hardcoded placeholder for now
    companyName: t.company_name,
  })) : []

  const insights = postsData && postsData.length > 0 ? postsData.map(p => ({
    image: p.thumbnail || "/placeholder.svg?height=360&width=640",
    category: p.category,
    title: p.title,
    excerpt: p.excerpt || "A comprehensive guide on AI adoption and implementation.",
    date: p.date,
    href: `/insights/${p.slug || p.id}`,
  })) : []

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* 1. Hero Section */}
      <HeroSection
        headline="Unlock the Full Potential of AI for"
        highlightedText="Your Business"
        subheadline="We partner with forward-thinking enterprises to design, build, and deploy AI solutions that transform operations and unlock new possibilities."
        primaryCTA={{ text: "Get Started", href: "/contact" }}
        secondaryCTA={{ text: "View Our Work", href: "/case-studies" }}
        eyebrow="Enterprise AI Solutions"
      />

      {/* 2. Stats Banner */}
      <StatsBanner stats={stats} />

      {/* 3. Logo Marquee */}
      <LogoMarquee speed="normal" />

      {/* 4. Services Grid */}
      {services.length > 0 && (
        <section className="bg-background py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Our Services"
              headline="AI Solutions Tailored to Your Needs"
              subtext="From strategy to deployment, we offer end-to-end AI services that drive measurable business outcomes."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Case Studies Row */}
      {caseStudies.length > 0 && (
        <section className="bg-secondary/20 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Case Studies"
              headline="Real Results, Real Impact"
              subtext="Explore how we've helped industry leaders achieve breakthrough results with AI."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <CaseStudyCard key={study.title} {...study} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Testimonials Carousel */}
      {testimonials.length > 0 && (
        <section className="bg-background py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Testimonials"
              headline="Trusted by Industry Leaders"
              subtext="Hear what our clients have to say about working with widle.ai."
            />
            <div className="mt-12 lg:mt-16">
              <TestimonialsCarousel testimonials={testimonials} />
            </div>
          </div>
        </section>
      )}

      {/* 7. Partner Logos Grid */}
      <section className="border-y border-border bg-secondary/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-10 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Technology Partners & Platforms We Work With
          </p>
          <div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {partnerLogos.map((logo, index) => (
              <PartnerLogo key={index} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Insights Row */}
      {insights.length > 0 && (
        <section className="bg-background py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Insights"
              headline="Latest from Our Blog"
              subtext="Stay informed with our latest articles on AI trends, best practices, and industry insights."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              {insights.map((post) => (
                <BlogCard key={post.title} {...post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. CTA Banner */}
      <CTABanner
        headline="Ready to build with AI?"
        description="Schedule a free consultation with our experts and discover how AI can accelerate your business growth."
        buttonText="Contact Us"
        buttonHref="/contact"
        variant="primary"
      />

      <Footer />
    </div>
  )
}

import { createClient } from "@/lib/supabase/server"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServiceCard } from "@/components/service-card"
import { SolutionCard } from "@/components/solution-card"
import { FAQAccordion } from "@/components/faq-accordion"
import { SectionHeader } from "@/components/section-header"
import { CTABanner } from "@/components/cta-banner"
import { LogoMarquee } from "@/components/logo-marquee"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { BlogCard } from "@/components/blog-card"
import { Brain, Bot, Cog, Eye, TrendingUp, Lightbulb, type LucideIcon } from "lucide-react"

// Map icon names to components for dynamic rendering
const iconMap: Record<string, LucideIcon> = {
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
    { data: testimonialsData },
    { data: postsData },
    { data: partnersData },
    { data: solutionsData },
    { data: faqsData },
  ] = await Promise.all([
    supabase.from("services").select("*").eq("status", "Published").order("created_at", { ascending: true }).limit(6),
    supabase.from("testimonials").select("*").order("order", { ascending: true }),
    supabase.from("posts").select("*").eq("published", true).order("date", { ascending: false }).limit(3),
    supabase.from("partners").select("*").order("order_index", { ascending: true }),
    supabase.from("solutions").select("*").eq("status", "Published").order("order_index", { ascending: true }),
    supabase.from("faqs").select("*").order("order_index", { ascending: true }),
  ])

  // Fallback / Formatting
  const services = servicesData && servicesData.length > 0 ? servicesData.map(s => ({
    icon: iconMap[s.icon_name] || Brain,
    title: s.title,
    description: s.overview || "Professional AI solutions tailored to your enterprise needs.",
    href: `/services/${s.slug}`,
  })) : []

  const testimonials = testimonialsData && testimonialsData.length > 0 ? testimonialsData.map(t => ({
    quote: t.quote || "The predictive models built by widle.ai increased our efficiency.",
    clientName: t.client_name,
    role: t.role,
    companyLogo: "/placeholder.svg?height=32&width=120",
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

  const partners = partnersData && partnersData.length > 0 ? partnersData.map(p => ({
    src: p.logo_url,
    alt: p.name,
  })) : []

  const solutions = solutionsData && solutionsData.length > 0 ? solutionsData.map(s => ({
    title: s.title,
    description: s.description,
    icon: iconMap[s.icon_name] || Brain,
  })) : []

  const faqs = faqsData && faqsData.length > 0 ? faqsData.map(f => ({
    question: f.question,
    answer: f.answer,
  })) : []

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        headline="Unlock the Full Potential of AI for"
        highlightedText="Your Business"
        subheadline="We partner with forward-thinking enterprises to design, build, and deploy AI solutions that transform operations and unlock new possibilities."
        primaryCTA={{ text: "Get Started", href: "/contact" }}
        secondaryCTA={{ text: "View Our Work", href: "/case-studies" }}
        eyebrow="Enterprise AI Solutions"
      />

      {/* Official Partners / Clients Logos Marquee */}
      {partners.length > 0 && (
        <LogoMarquee logos={partners} speed="normal" />
      )}

      {/* Services Grid */}
      {services.length > 0 && (
        <section className="bg-background py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Our Services"
              headline="Services We Provide"
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

      {/* Solutions Tailored To Your Needs */}
      {solutions.length > 0 && (
        <section className="bg-secondary/20 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Solutions"
              headline="Solutions Tailored To Your Needs"
              subtext="Powerful capabilities designed to solve complex challenges across industries."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
              {solutions.map((solution, idx) => (
                <SolutionCard key={idx} {...solution} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Carousel */}
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

      {/* Blog Posts */}
      {insights.length > 0 && (
        <section className="bg-secondary/20 py-20 sm:py-24">
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

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="bg-background py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="FAQ"
              headline="Frequently Asked Questions"
              subtext="Find answers to common questions about our services and processes."
            />
            <div className="mt-12 lg:mt-16">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
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

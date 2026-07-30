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
import { StatsSection } from "@/components/stats-section"
import { Brain, Bot, Cog, Eye, TrendingUp, Lightbulb, Cloud, Code, type LucideIcon } from "lucide-react"

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
  })) : [
    {
      title: "Generative AI & LLMs",
      description: "Design and deploy enterprise-grade Large Language Models and custom RAG architectures to automate reasoning and semantic data retrieval.",
      icon: Bot,
      href: "/services/gen-ai-llms",
    },
    {
      title: "MLOps & AI Infrastructure",
      description: "Automate the entire machine learning lifecycle. We architect resilient CI/CD pipelines for models, ensuring scalable deployment and monitoring.",
      icon: Cog,
      href: "/services/mlops",
    },
    {
      title: "Computer Vision & Edge AI",
      description: "Develop high-throughput visual processing systems. We deploy optimized models for real-time anomaly detection and autonomous tracking.",
      icon: Eye,
      href: "/services/computer-vision",
    },
    {
      title: "Cloud-Native Software Engineering",
      description: "Architect scalable, serverless, and microservices-based backend systems on AWS, GCP, and Azure using Terraform.",
      icon: Cloud,
      href: "/services/cloud-software",
    },
    {
      title: "Internal Tooling & Retool",
      description: "Accelerate your operational efficiency with highly customized, secure internal dashboards integrating complex databases and APIs.",
      icon: Code,
      href: "/services/internal-tooling",
    },
    {
      title: "Predictive Analytics",
      description: "Harness statistical modeling and deep learning to forecast market trends, optimize operations, and execute real-time fraud detection.",
      icon: TrendingUp,
      href: "/services/predictive-analytics",
    }
  ]

  const testimonials = testimonialsData && testimonialsData.length > 0 ? testimonialsData.map(t => ({
    quote: t.quote || "The predictive models built by widle.ai increased our efficiency.",
    clientName: t.client_name,
    role: t.role,
    companyLogo: "/placeholder.svg?height=32&width=120",
    companyName: t.company_name,
  })) : [
    {
      quote: "Widle.ai transformed our customer service operations with their custom NLP solution. We've seen a 40% reduction in response times and a significant boost in customer satisfaction.",
      clientName: "Sarah Jenkins",
      role: "VP of Customer Success",
      companyName: "TechFlow Solutions",
      companyLogo: "/placeholder.svg?height=32&width=120"
    },
    {
      quote: "Their machine learning models helped us predict supply chain disruptions weeks in advance. It's not just technology; it's a strategic advantage.",
      clientName: "David Chen",
      role: "COO",
      companyName: "Global Logistics Inc.",
      companyLogo: "/placeholder.svg?height=32&width=120"
    },
    {
      quote: "The team at widle.ai really understands enterprise constraints. They delivered a secure, scalable computer vision system that integrated flawlessly with our legacy hardware.",
      clientName: "Elena Rodriguez",
      role: "CTO",
      companyName: "Manufacturing Dynamics",
      companyLogo: "/placeholder.svg?height=32&width=120"
    }
  ]

  const insights = postsData && postsData.length > 0 ? postsData.map(p => ({
    image: p.thumbnail || "/placeholder.svg?height=360&width=640",
    category: p.category,
    title: p.title,
    excerpt: p.excerpt || "A comprehensive guide on AI adoption and implementation.",
    date: p.date,
    href: `/insights/${p.slug || p.id}`,
  })) : [
    {
      title: "The Future of Generative AI in the Enterprise",
      category: "Trends",
      date: "Oct 12, 2023",
      excerpt: "Explore how generative models are moving from novelties to core business tools.",
      image: "/placeholder.svg?height=360&width=640",
      href: "/insights/future-generative-ai"
    },
    {
      title: "Building Trust in AI Systems",
      category: "Ethics",
      date: "Sep 28, 2023",
      excerpt: "Why transparency and explainability are crucial for enterprise AI adoption.",
      image: "/placeholder.svg?height=360&width=640",
      href: "/insights/trust-in-ai"
    },
    {
      title: "A Guide to MLOps for Scale",
      category: "Engineering",
      date: "Sep 15, 2023",
      excerpt: "Best practices for deploying and monitoring machine learning models in production.",
      image: "/placeholder.svg?height=360&width=640",
      href: "/insights/mlops-guide"
    }
  ]

  const partners = partnersData && partnersData.length > 0 ? partnersData.map(p => ({
    src: p.logo_url,
    alt: p.name,
  })) : [
    { src: "/placeholder.svg?height=40&width=160&text=Microsoft", alt: "Microsoft" },
    { src: "/placeholder.svg?height=40&width=160&text=Google", alt: "Google" },
    { src: "/placeholder.svg?height=40&width=160&text=AWS", alt: "AWS" },
    { src: "/placeholder.svg?height=40&width=160&text=NVIDIA", alt: "NVIDIA" },
    { src: "/placeholder.svg?height=40&width=160&text=IBM", alt: "IBM" },
    { src: "/placeholder.svg?height=40&width=160&text=Snowflake", alt: "Snowflake" },
  ]

  const solutions = solutionsData && solutionsData.length > 0 ? solutionsData.map(s => ({
    title: s.title,
    description: s.description,
    icon: iconMap[s.icon_name] || Brain,
  })) : [
    {
      title: "Predictive Maintenance",
      description: "AI-driven insights to predict equipment failures before they happen, reducing downtime and costs.",
      icon: Cog
    },
    {
      title: "Document Automation",
      description: "Extract data and process complex documents automatically using advanced optical character recognition.",
      icon: Bot
    },
    {
      title: "Demand Forecasting",
      description: "Accurately predict customer demand to optimize inventory and supply chain operations.",
      icon: TrendingUp
    },
    {
      title: "Fraud Detection",
      description: "Real-time anomaly detection systems that identify and prevent fraudulent transactions.",
      icon: Eye
    }
  ]

  const faqs = faqsData && faqsData.length > 0 ? faqsData.map(f => ({
    question: f.question,
    answer: f.answer,
  })) : [
    {
      question: "How long does a typical AI implementation take?",
      answer: "A standard implementation typically takes 3-6 months from strategy to initial deployment, depending on data readiness and project complexity."
    },
    {
      question: "Do we need in-house AI expertise to use your solutions?",
      answer: "No. We build turnkey solutions that integrate smoothly with your existing systems. We also provide training and ongoing support for your team."
    },
    {
      question: "How do you ensure data privacy and security?",
      answer: "Security is built-in. We employ enterprise-grade encryption, role-based access control, and comply with SOC2, GDPR, and other relevant regulatory standards."
    },
    {
      question: "Can your AI solutions integrate with our legacy software?",
      answer: "Yes. Our architecture is designed to be highly interoperable, utilizing custom APIs and middleware to communicate with legacy systems seamlessly."
    }
  ]

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

      {/* Stats Section */}
      <StatsSection />

      {/* Official Partners / Clients Logos Marquee */}
      {partners.length > 0 && (
        <div className="pt-16 pb-8 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          TECHNOLOGY PARTNERS & PLATFORMS WE WORK WITH
        </div>
      )}
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

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
import { Bot, Cog, Eye, TrendingUp, Cloud, Code } from "lucide-react"

export default function Home() {
  const services = [
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

  const testimonials = [
    {
      quote: "Widle.ai transformed our customer service operations with their custom NLP solution. We've seen a 40% reduction in response times and a significant boost in customer satisfaction.",
      clientName: "Sarah Jenkins",
      role: "VP of Customer Success",
      companyName: "TechFlow Solutions",
      companyLogo: "/images/Widle-Logo.jpg"
    },
    {
      quote: "Their machine learning models helped us predict supply chain disruptions weeks in advance. It's not just technology; it's a strategic advantage.",
      clientName: "David Chen",
      role: "COO",
      companyName: "Global Logistics Inc.",
      companyLogo: "/images/Widle-Logo.jpg"
    },
    {
      quote: "The team at widle.ai really understands enterprise constraints. They delivered a secure, scalable computer vision system that integrated flawlessly with our legacy hardware.",
      clientName: "Elena Rodriguez",
      role: "CTO",
      companyName: "Manufacturing Dynamics",
      companyLogo: "/images/Widle-Logo.jpg"
    }
  ]

  const insights = [
    {
      title: "The Future of Generative AI in the Enterprise",
      category: "Trends",
      date: "Oct 12, 2023",
      excerpt: "Explore how generative models are moving from novelties to core business tools.",
      image: "/images/Widle-Logo.jpg",
      href: "/insights/future-generative-ai"
    },
    {
      title: "Building Trust in AI Systems",
      category: "Ethics",
      date: "Sep 28, 2023",
      excerpt: "Why transparency and explainability are crucial for enterprise AI adoption.",
      image: "/images/Widle-Logo.jpg",
      href: "/insights/trust-in-ai"
    },
    {
      title: "A Guide to MLOps for Scale",
      category: "Engineering",
      date: "Sep 15, 2023",
      excerpt: "Best practices for deploying and monitoring machine learning models in production.",
      image: "/images/Widle-Logo.jpg",
      href: "/insights/mlops-guide"
    }
  ]

  const partners = [
    { src: "/placeholder.svg?height=40&width=160&text=Microsoft", alt: "Microsoft" },
    { src: "/placeholder.svg?height=40&width=160&text=Google", alt: "Google" },
    { src: "/placeholder.svg?height=40&width=160&text=AWS", alt: "AWS" },
    { src: "/placeholder.svg?height=40&width=160&text=NVIDIA", alt: "NVIDIA" },
    { src: "/placeholder.svg?height=40&width=160&text=IBM", alt: "IBM" },
    { src: "/placeholder.svg?height=40&width=160&text=Snowflake", alt: "Snowflake" },
  ]

  const solutions = [
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

  const faqs = [
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
        headline="Engineering Custom AI & Cloud"
        highlightedText="Software Solutions"
        subheadline="We specialize in LLMs, MLOps, computer vision, and AI-powered automation to drive business growth. Partner with Widle to architect and deploy highly scalable enterprise systems."
        primaryCTA={{ text: "Schedule Technical Discovery", href: "/contact" }}
        secondaryCTA={{ text: "View Success Stories", href: "/case-studies" }}
        eyebrow="Widle Studio"
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
              eyebrow="Our Technical Expertise"
              headline="Custom Enterprise AI Services"
              subtext="From predictive analytics to multi-agent LLM systems, we build resilient, secure solutions."
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

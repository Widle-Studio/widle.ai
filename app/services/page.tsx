import { Navbar } from "@/components/navbar"
import { StaggeredGrid } from "@/components/staggered-grid"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { ServiceCard } from "@/components/service-card"
import { CTABanner } from "@/components/cta-banner"
import Link from "next/link"
import { Bot, Cog, Eye, TrendingUp, Workflow, Building2, Users, Cloud, Code, Code2 } from "lucide-react"
import { Bot, Cog, Eye, TrendingUp, Workflow, Building2, Users, Cloud, Code, Code2 } from "lucide-react"

export const metadata = {
  title: "Our Technical Expertise in Applied AI Solutions | Widle",
  description: "Explore all the technology expertise we have to develop custom AI solutions, cloud infrastructures, and internal tooling for your enterprise.",
}

const services = [
  {
    title: "Generative AI & LLMs",
    description: "Design and deploy enterprise-grade Large Language Models and custom RAG architectures to automate reasoning, content generation, and semantic data retrieval with zero-hallucination guarantees.",
    icon: Bot,
    href: "/services/llms-rag",
    href: "/services/llms-rag",
  },
  {
    title: "MLOps & AI Infrastructure",
    description: "Automate the entire machine learning lifecycle. We architect resilient CI/CD pipelines for models, ensuring scalable deployment, continuous monitoring, and automated retraining on cloud infrastructure.",
    icon: Cog,
    href: "/services/mlops",
  },
  {
    title: "Computer Vision & Edge AI",
    description: "Develop high-throughput visual processing systems. From CNNs to Vision Transformers, we deploy optimized models for real-time anomaly detection, autonomous tracking, and edge device inference.",
    icon: Eye,
    href: "/services/computer-vision",
  },
  {
    title: "Cloud-Native Software Engineering",
    description: "Architect scalable, serverless, and microservices-based backend systems on AWS, GCP, and Azure. We build fault-tolerant infrastructures using Terraform for high-availability enterprise applications.",
    icon: Cloud,
    href: "/services/cloud-software",
  },
  {
    title: "Internal Tooling & Retool",
    description: "Accelerate your operational efficiency with highly customized, secure internal dashboards. We integrate complex SQL/NoSQL databases and APIs into unified interfaces using Retool.",
    icon: Code,
    href: "/services/internal-tooling",
    badgeImage: "/images/partners/retool-badge.png",
    badgeText: "Widle Exclusive Partnership",
  },
  {
    title: "Retool Custom Components",
    description: "Extend Retool's capabilities with our library of custom-built React components. From advanced data tables to interactive maps, each component is designed to solve real business problems.",
    icon: Code2,
    href: "/services/retool-custom-components",
    badgeImage: "/images/partners/retool-badge.png",
    badgeText: "Widle Exclusive Partnership",
  },
  {
    title: "Retool Custom Components",
    description: "Extend Retool's capabilities with our library of custom-built React components. From advanced data tables to interactive maps, each component is designed to solve real business problems.",
    icon: Code2,
    href: "/services/retool-custom-components",
  },
  {
    title: "Predictive Analytics",
    description: "Harness statistical modeling and deep learning to forecast market trends, optimize supply chain operations, and execute real-time fraud detection with deterministic reliability.",
    icon: TrendingUp,
    href: "/services/predictive-analytics",
  }
]

export default function ServicesPage() {

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeader
            eyebrow="Tech Expertise"
            headline="Engineering Custom AI & Cloud Solutions"
            subtext="Discover our core technical competencies used to architect and deploy highly scalable enterprise systems."
          />

          <StaggeredGrid className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </StaggeredGrid>

        </div>

        <section className="mt-32 border-t border-border bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Workflow className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Deploy Agentic RAG Pipelines & Scalable Architectures
              </h2>
              <p className="max-w-2xl text-lg text-muted-foreground mb-8">
                Delivering tailored engineering services across strategy, implementation, and support to provide you with a competitive advantage. Unlock the full potential of your data today.
              </p>

      {/* Industries We Serve Section */}
      <section className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Industries"
            headline="Tailored for Your Sector"
            subtext="We adapt our capabilities to match the nuances of your industry."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/industries/healthcare-and-life-sciences" className="bg-background p-6 rounded-2xl border border-border hover:border-primary transition-all hover:-translate-y-1">
              <h3 className="font-bold text-lg mb-2">Healthcare</h3>
              <p className="text-muted-foreground text-sm">HIPAA-compliant data pipelines and predictive diagnostics.</p>
            </Link>
            <Link href="/industries/financial-services-and-banking" className="bg-background p-6 rounded-2xl border border-border hover:border-primary transition-all hover:-translate-y-1">
              <h3 className="font-bold text-lg mb-2">Finance</h3>
              <p className="text-muted-foreground text-sm">Fraud detection and real-time algorithmic trading tools.</p>
            </Link>
            <Link href="/industries/software-as-a-service-saas" className="bg-background p-6 rounded-2xl border border-border hover:border-primary transition-all hover:-translate-y-1">
              <h3 className="font-bold text-lg mb-2">SaaS</h3>
              <p className="text-muted-foreground text-sm">Scalable LLM integrations and custom Internal Tooling.</p>
            </Link>
            <Link href="/industries/manufacturing-and-supply-chain" className="bg-background p-6 rounded-2xl border border-border hover:border-primary transition-all hover:-translate-y-1">
              <h3 className="font-bold text-lg mb-2">Manufacturing</h3>
              <p className="text-muted-foreground text-sm">Computer Vision quality control and predictive maintenance.</p>
            </Link>
          </div>
          <div className="mt-12">
            <Link href="/industries" className="text-primary font-medium hover:underline inline-flex items-center">
              View all 15 Industries We Serve
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
                headline="Discover Our Engineering Philosophy"
                description="Get to know us, our leadership, development direction, and why we call ourselves applied AI and Cloud experts."
                buttonText="Learn More About Us"
                buttonHref="/company"
                variant="accent"
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <Building2 className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Experience Across Industries
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  With deep domain knowledge across multiple sectors, we engineer solutions tailored to your specific regulatory, computational, and operational needs.
                </p>
                <a href="/industries" className="text-primary font-medium hover:underline inline-flex items-center">
                  Explore our industry expertise →
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="rounded-xl border bg-card p-6 text-center">
                   <p className="font-semibold">Finance & FinTech</p>
                 </div>
                 <div className="rounded-xl border bg-card p-6 text-center">
                   <p className="font-semibold">Healthcare & MedTech</p>
                 </div>
                 <div className="rounded-xl border bg-card p-6 text-center">
                   <p className="font-semibold">Manufacturing</p>
                 </div>
                 <div className="rounded-xl border bg-card p-6 text-center">
                   <p className="font-semibold">Logistics & Retail</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-muted py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
             <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Join the Applied Engineering Revolution!
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
              Look at our open positions and join a team that is delivering real, measurable business impact through software and AI across the globe.
            </p>
             <a href="/careers" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                View Open Positions
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

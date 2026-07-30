import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { ServiceCard } from "@/components/service-card"
import { CTABanner } from "@/components/cta-banner"
import { Brain, Bot, Cog, Eye, TrendingUp, Lightbulb, Workflow, Building2, Users, Cloud, Code } from "lucide-react"

export const metadata = {
  title: "Our Technical Expertise in Applied AI Solutions | Widle Studio",
  description: "Explore all the technology expertise we have to develop custom AI solutions, cloud infrastructures, and internal tooling for your enterprise.",
}

const services = [
  {
    title: "Generative AI & LLMs",
    description: "Design and deploy enterprise-grade Large Language Models and custom RAG architectures to automate reasoning, content generation, and semantic data retrieval with zero-hallucination guarantees.",
    icon: Bot,
    href: "/services/gen-ai-llms",
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
  },
  {
    title: "Predictive Analytics",
    description: "Harness statistical modeling and deep learning to forecast market trends, optimize supply chain operations, and execute real-time fraud detection with deterministic reliability.",
    icon: TrendingUp,
    href: "/services/predictive-analytics",
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Main Hero Header matching DeepSense */}
          <SectionHeader
            eyebrow="Tech Expertise"
            headline="Engineering Custom AI & Cloud Solutions"
            subtext="Discover our core technical competencies used to architect and deploy highly scalable enterprise systems."
          />

          {/* Main Services Grid */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

        </div>

        {/* Additional Sections Emulating DeepSense Structure */}

        {/* Ragbits / RAG Pipelines Section */}
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

        {/* Industries Cross-link Section */}
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

        {/* Careers Cross-link Section */}
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

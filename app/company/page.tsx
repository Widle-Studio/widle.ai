import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { StatsBanner } from "@/components/stats-banner"
import { ProcessCard } from "@/components/process-card"
import { CTABanner } from "@/components/cta-banner"
import {
  Brain,
  Cloud,
  Database,
  Code,
  ShieldCheck,
  Cpu,
  Search,
  Target,
  Lightbulb,
  Code2,
  TestTube2,
  Rocket,
  Building2,
} from "lucide-react"

export const metadata = {
  title: "About Widle.ai | Custom AI & Cloud Software Solutions",
  description:
    "Widle.ai is the applied-AI studio of Widle Studio, engineering custom artificial intelligence, MLOps, and cloud solutions for enterprise automation.",
}

export default function CompanyPage() {
  const expertiseAreas = [
    {
      title: "Generative AI & LLMs",
      description: "We architect distributed AI pipelines utilizing state-of-the-art transformer models. Our Retrieval-Augmented Generation (RAG) implementations leverage vector databases and semantic search to ground foundation models in enterprise-specific data corpora, ensuring zero-hallucination inference.",
      icon: Brain
    },
    {
      title: "MLOps & Continuous Training",
      description: "Productionizing ML models requires rigorous lifecycle management. We build automated CI/CD pipelines for machine learning, integrating data drift detection, automated retraining triggers, and distributed model serving infrastructure on Kubernetes.",
      icon: Database
    },
    {
      title: "Computer Vision & Edge AI",
      description: "From CNNs to Vision Transformers, we deploy high-throughput, low-latency visual processing systems. We optimize models using quantization and pruning (TensorRT, ONNX) for deployment on edge devices and custom silicon accelerators.",
      icon: Cpu
    },
    {
      title: "Cloud-Native Architectures",
      description: "We design resilient, serverless, and microservices-based backend architectures on AWS, GCP, and Azure. Our cloud infrastructure is deployed via IaC (Terraform) to guarantee reproducibility, horizontal scalability, and multi-region high availability.",
      icon: Cloud
    },
    {
      title: "Internal Tooling & Retool",
      description: "We accelerate operational efficiency by developing highly customized, secure internal dashboards and admin panels using Retool. We integrate disparate SQL/NoSQL databases, REST/GraphQL APIs, and legacy systems into unified interfaces.",
      icon: Code
    },
    {
      title: "Enterprise Security & Compliance",
      description: "Security is foundational. We implement zero-trust architectures, end-to-end encryption (at rest and in transit), and strict RBAC. Our AI pipelines are designed to comply with SOC2, HIPAA, and GDPR data residency and privacy constraints.",
      icon: ShieldCheck
    }
  ]

  // NOTE: Placeholder figures — swap in Widle's actual verified metrics before shipping.
  const stats = [
    { value: "50+", label: "Products Shipped" },
    { value: "15+", label: "Engineers & Strategists" },
    { value: "5+", label: "Years Building Software" },
  ]

  const processSteps = [
    {
      step: 1,
      icon: Search,
      title: "Discover",
      description: "We start by understanding where you are today — your goals, constraints, and what success actually looks like for your team.",
    },
    {
      step: 2,
      icon: Target,
      title: "Study the Landscape",
      description: "We map your market, your users, and your competitors so every recommendation is grounded in context, not guesswork.",
    },
    {
      step: 3,
      icon: Lightbulb,
      title: "Propose",
      description: "We bring options, not a single fixed plan — weighing strategy, architecture, security, and cost so you can make an informed call.",
    },
    {
      step: 4,
      icon: Code2,
      title: "Build",
      description: "From the first line of copy to the last line of code, we work in short sprints and favor steady evolution over risky big-bang releases.",
    },
    {
      step: 5,
      icon: TestTube2,
      title: "Test",
      description: "Every release is validated before it reaches your users, so what ships is dependable — not just demo-ready.",
    },
    {
      step: 6,
      icon: Rocket,
      title: "Launch & Grow",
      description: "We fold in your feedback post-launch and stay close as a long-term partner, not a vendor that disappears after go-live.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="About Widle.ai"
            headline="Engineering the Future of Enterprise AI"
            subtext="Widle.ai operates at the intersection of deep learning research and production-grade software engineering. We architect custom AI ecosystems, robust cloud infrastructures, and high-performance automation systems to drive measurable business transformation."
          />

          {/* Mission Statement */}
          <div className="mx-auto mt-16 max-w-4xl">
            <blockquote className="relative rounded-2xl border border-border bg-secondary/10 px-8 py-10 sm:px-12 sm:py-14">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                Our Mission
              </p>
              <p className="mt-4 text-balance text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                &ldquo;To give ambitious teams a dependable engineering partner
                that turns AI ambition into production reality.&rdquo;
              </p>
              <p className="mt-4 text-muted-foreground">
                We stay focused on applied, production-grade AI — not research
                for its own sake — so every engagement translates directly into
                measurable business value.
              </p>
            </blockquote>
          </div>

          {/* Vision & Mission */}
          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-8 items-center border-b border-border pb-20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our Engineering Philosophy</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  At Widle.ai, we recognize that deploying artificial intelligence in a production environment is fundamentally a systems engineering challenge. We go beyond theoretical data science to build fault-tolerant, scalable, and secure AI architectures.
                </p>
                <p>
                  Our DNA is a synthesis of advanced algorithmic capabilities and the pragmatic, rapid-deployment cloud software expertise of Widle Studio. We specialize in operationalizing AI: transforming raw computational models into resilient microservices that integrate seamlessly with your existing tech stack.
                </p>
                <p>
                  Whether it is deploying custom Large Language Models (LLMs) with strict data governance, building automated MLOps pipelines, or developing secure internal tooling via Retool, our solutions are engineered for maximum ROI and deterministic reliability.
                </p>
              </div>
            </div>
            <div className="relative aspect-square sm:aspect-video lg:aspect-square overflow-hidden rounded-2xl border bg-muted group">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center p-8">
                <div className="font-mono text-sm text-zinc-400 space-y-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  <p className="text-emerald-400">~/widle-ai/core-engine $</p>
                  <p>Initializing distributed neural cluster...</p>
                  <p>Loading weights [===============&gt;] 100%</p>
                  <p>Optimizing tensor operations via CUDA...</p>
                  <p>Establishing secure gRPC channels...</p>
                  <p>MLOps pipeline status: <span className="text-emerald-400">ACTIVE</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <StatsBanner stats={stats} />

        {/* Powered by Widle Studio */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Building2 className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Backed by Widle Studio</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Widle.ai is the applied-AI studio of{" "}
                  <a
                    href="https://widle.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
                  >
                    Widle Studio
                  </a>
                  , our parent software house. Widle Studio has spent years
                  shipping custom web apps, SaaS products, and Retool-based
                  internal tools for clients ranging from early-stage startups
                  to established enterprises.
                </p>
                <p>
                  That track record in full-stack product engineering — front
                  end, back end, cloud infrastructure, and delivery discipline
                  — is the foundation Widle.ai builds on. We add the applied-AI
                  layer: LLMs, MLOps, and computer vision, engineered with the
                  same sprint-based, evolution-over-revolution approach that
                  defines how the Widle Studio team ships software.
                </p>
                <p>
                  In short: Widle Studio builds the product, Widle.ai makes it
                  intelligent — and both are held to the same bar for quality,
                  security, and attention to detail.
                </p>
              </div>
            </div>
            <div className="relative aspect-square sm:aspect-video lg:aspect-square overflow-hidden rounded-2xl border bg-muted">
              <div className="absolute inset-0 bg-zinc-900 flex flex-col items-center justify-center p-8">
                <div className="grid grid-cols-1 gap-4 w-full h-full">
                  <div className="flex flex-1 flex-col items-center justify-center rounded-xl border border-zinc-700/50 bg-zinc-800/50 p-6 text-center">
                    <span className="text-lg font-semibold text-white">Widle Studio</span>
                    <span className="mt-1 text-xs font-mono text-zinc-400">Full-stack product &amp; cloud engineering</span>
                  </div>
                  <div className="flex items-center justify-center text-zinc-600">
                    <span className="text-2xl">↓</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-center rounded-xl border border-primary/40 bg-primary/10 p-6 text-center">
                    <span className="text-lg font-semibold text-white">Widle.ai</span>
                    <span className="mt-1 text-xs font-mono text-zinc-400">Applied AI, MLOps &amp; automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div className="bg-secondary/10 py-20 mt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="How We Work"
              headline="A Disciplined, Sprint-Based Process"
              subtext="Every engagement follows the same proven rhythm — inherited from Widle Studio's years of client delivery — from first discovery call to post-launch iteration."
            />
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step) => (
                <ProcessCard
                  key={step.step}
                  step={step.step}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Core Expertise */}
        <div className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Technical Expertise</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We leverage a modern, high-performance technology stack to deliver end-to-end solutions, from data ingestion to edge inference.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {expertiseAreas.map((area, index) => {
                const Icon = area.icon
                return (
                  <div key={index} className="relative p-8 bg-background rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Why Partner With Us */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 relative aspect-square overflow-hidden rounded-2xl border bg-muted">
              <div className="absolute inset-0 bg-zinc-900 flex flex-col items-center justify-center p-8">
                 <div className="grid grid-cols-2 gap-4 w-full h-full">
                    <div className="bg-zinc-800/50 rounded-xl border border-zinc-700/50 flex items-center justify-center flex-col p-4">
                      <span className="text-3xl font-bold text-white mb-2">99.99%</span>
                      <span className="text-xs text-zinc-400 font-mono text-center">Service Availability</span>
                    </div>
                    <div className="bg-zinc-800/50 rounded-xl border border-zinc-700/50 flex items-center justify-center flex-col p-4">
                      <span className="text-3xl font-bold text-white mb-2">&lt;50ms</span>
                      <span className="text-xs text-zinc-400 font-mono text-center">P95 Inference Latency</span>
                    </div>
                    <div className="bg-zinc-800/50 rounded-xl border border-zinc-700/50 flex items-center justify-center flex-col p-4">
                      <span className="text-3xl font-bold text-white mb-2">Zero</span>
                      <span className="text-xs text-zinc-400 font-mono text-center">Data Retention in Transit</span>
                    </div>
                    <div className="bg-zinc-800/50 rounded-xl border border-zinc-700/50 flex items-center justify-center flex-col p-4">
                      <span className="text-3xl font-bold text-white mb-2">SOC2</span>
                      <span className="text-xs text-zinc-400 font-mono text-center">Compliant Architecture</span>
                    </div>
                 </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight mb-6">Why Partner With Widle.ai?</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-sm font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">End-to-End Execution</h4>
                    <p className="mt-1 text-muted-foreground">We handle the entire lifecycle—from exploratory data analysis and model architecture design to infrastructure provisioning, deployment, and continuous monitoring.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-sm font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Bespoke, Not Boilerplate</h4>
                    <p className="mt-1 text-muted-foreground">We do not force-fit off-the-shelf wrappers. We engineer custom architectures optimized specifically for your domain&apos;s computational constraints, latency requirements, and data privacy needs.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-sm font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Cloud & Tooling Agnostic</h4>
                    <p className="mt-1 text-muted-foreground">Our expertise spans AWS, GCP, and Azure. We seamlessly integrate with your existing DevOps pipelines, data warehouses, and utilize platforms like Retool for rapid internal interface development.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </main>

      <CTABanner
        headline="Ready to Engineer Your AI Advantage?"
        description="Connect with our technical architects to discuss your infrastructure requirements, model specifications, and integration strategy."
        buttonText="Schedule Technical Discovery"
        buttonHref="/contact"
        variant="primary"
      />

      <Footer />
    </div>
  )
}

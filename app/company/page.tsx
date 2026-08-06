import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { CTABanner } from "@/components/cta-banner"
import { Brain, Cloud, Database, Code, ShieldCheck, Cpu } from "lucide-react"

export const metadata = {
  title: "About Widle.ai | Custom AI & Cloud Software Solutions",
  description: "Widle.ai engineers custom artificial intelligence solutions, leveraging LLMs, MLOps, computer vision, and cloud architectures for enterprise automation.",
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

        {/* Core Expertise */}
        <div className="bg-secondary/10 py-20 mt-12">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
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

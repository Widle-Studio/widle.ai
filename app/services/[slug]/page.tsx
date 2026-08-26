import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Brain, CheckCircle2 } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

const serviceData: Record<string, { title: string; description: string; content: string; capabilities: string[] }> = {
  "generative-ai": {
    title: "Generative AI",
    description: "Automate complex workflows and unlock creativity with custom large language models.",
    content: "Generative AI is shifting paradigms across industries. We go beyond simple API wrappers to build robust, secure, and highly customized generative systems. Whether you need a private, fine-tuned LLM that understands your proprietary codebase, or a multi-agent system capable of autonomous research and reasoning, we engineer solutions that integrate flawlessly into your existing ecosystem.",
    capabilities: [
      "Custom LLM fine-tuning (Llama 3, Mistral, etc.)",
      "Retrieval-Augmented Generation (RAG) for accurate, private QA",
      "Agentic workflows using LangChain and AutoGen",
      "Automated code, text, and asset generation pipelines"
    ]
  },
  "computer-vision": {
    title: "Computer Vision",
    description: "Extract actionable intelligence from visual data in real-time.",
    content: "Our computer vision systems give your business eyes. We design and deploy high-throughput visual processing models that run efficiently on edge devices or scale infinitely in the cloud. From monitoring manufacturing lines for microscopic defects to analyzing satellite imagery for agricultural insights, we turn pixels into predictive data.",
    capabilities: [
      "Real-time object detection and segmentation (YOLO, Mask R-CNN)",
      "Facial recognition and secure biometric analysis",
      "Automated defect detection and quality assurance",
      "Video stream analytics and anomaly detection"
    ]
  },
  "predictive-ai": {
    title: "Predictive AI",
    description: "Forecast outcomes and make data-driven decisions with deterministic accuracy.",
    content: "Stop reacting and start predicting. We utilize advanced statistical modeling, deep learning, and time-series analysis to help enterprises forecast market dynamics, customer behaviors, and operational bottlenecks before they occur. Our models are built for high accuracy, explainability, and seamless integration into BI dashboards.",
    capabilities: [
      "Demand forecasting and inventory optimization",
      "Predictive maintenance for heavy machinery and IoT",
      "Customer churn prediction and LTV modeling",
      "Algorithmic trading and automated risk assessment"
    ]
  },
  "nlp": {
    title: "Natural Language Processing",
    description: "Process, analyze, and understand human language at an enterprise scale.",
    content: "Unstructured text holds massive value. Our NLP solutions bridge the gap between human communication and machine understanding. We build systems capable of digesting millions of documents to extract structured metadata, gauge sentiment, or provide semantic search capabilities that keyword search simply cannot match.",
    capabilities: [
      "Semantic search and neural information retrieval",
      "High-accuracy Optical Character Recognition (OCR) pipelines",
      "Sentiment analysis, entity extraction, and classification",
      "Enterprise-grade conversational AI and virtual assistants"
    ]
  },
  "data-engineering": {
    title: "Data Engineering",
    description: "The scalable, fault-tolerant infrastructure required for modern AI.",
    content: "AI is only as good as the data it consumes. We architect resilient data pipelines that ingest, clean, and harmonize data from siloed sources across your organization. We build modern data lakes and warehouses that serve as the single source of truth, ensuring your models are trained on accurate, up-to-date, and secure information.",
    capabilities: [
      "Modern data stack architecture (Snowflake, Databricks, BigQuery)",
      "Real-time streaming and event-driven pipelines",
      "Complex ETL/ELT process automation",
      "Data governance, compliance, and quality monitoring"
    ]
  },
  "mlops": {
    title: "AI Infrastructure & MLOps",
    description: "Deploy, monitor, and scale machine learning systems with confidence.",
    content: "Deploying a model is just the beginning. We implement rigorous MLOps practices to ensure your AI systems remain accurate, performant, and cost-effective in production over time. We automate retraining, monitor for data drift, and optimize cloud infrastructure to handle fluctuating inference workloads seamlessly.",
    capabilities: [
      "Automated CI/CD pipelines specifically for ML models",
      "Real-time model monitoring and data drift detection",
      "Kubernetes and serverless deployment architectures",
      "GPU resource management and inference cost optimization"
    ]
  }
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug]

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen relative bg-background text-foreground">
      {/* Background Decorators */}
      <div className="fixed inset-0 -z-10 bg-grid opacity-60" />
      <div className="fixed top-[-20%] right-[-10%] -z-10 w-[60%] h-[60%] rounded-full bg-primary/15 blur-[120px] mix-blend-screen" />

      {/* Minimal Nav */}
      <nav className="glass-nav sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <Brain className="size-4" />
            </span>
            <span className="text-xl tracking-tighter font-bold hidden sm:inline-block">widle<span className="text-primary">.ai</span></span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/services">
                <ArrowLeft className="mr-2 size-4" /> Back to Services
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="relative mx-auto max-w-4xl px-5 pt-20 pb-32 lg:px-8 lg:pt-28">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md">
          Service Deep Dive
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
          {service.title}
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-12">
          {service.description}
        </p>

        <div className="glass-panel p-8 sm:p-10 mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-border/50 pb-4">Overview</h2>
          <p className="text-lg leading-8 text-foreground/90">
            {service.content}
          </p>
        </div>

        <div className="glass-panel bg-primary/5 border-primary/20 p-8 sm:p-10 mb-16">
          <h2 className="text-2xl font-bold mb-8">Core Capabilities</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {service.capabilities.map((cap, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <CheckCircle2 className="size-6 text-primary shrink-0 mt-0.5" />
                <p className="font-medium leading-relaxed">{cap}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to implement {service.title}?</h3>
          <Button size="lg" asChild className="rounded-full shadow-lg shadow-primary/25">
            <Link href="/contact">
              Schedule a Technical Consultation <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/50 backdrop-blur-md py-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} widle.ai. Intelligence engineered.</p>
        </div>
      </footer>
    </main>
  )
}

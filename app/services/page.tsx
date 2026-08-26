import { ArrowRight, Brain, Database, Eye, LineChart, Network, Sparkles } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

const services = [
  {
    title: "Generative AI",
    slug: "generative-ai",
    icon: Sparkles,
    description: "Unlock the potential of Large Language Models (LLMs) and custom foundation models.",
    details: [
      "Custom LLM fine-tuning and deployment",
      "Retrieval-Augmented Generation (RAG) systems",
      "Multi-agent autonomous workflows",
      "Content and code generation pipelines"
    ]
  },
  {
    title: "Computer Vision",
    slug: "computer-vision",
    icon: Eye,
    description: "Transform visual data into actionable intelligence across your operations.",
    details: [
      "Real-time object detection and tracking",
      "Facial recognition and biometric analysis",
      "Defect detection for manufacturing",
      "Edge AI optimization"
    ]
  },
  {
    title: "Predictive AI",
    slug: "predictive-ai",
    icon: LineChart,
    description: "Forecast future outcomes and optimize decision-making using historical data.",
    details: [
      "Demand forecasting and supply chain optimization",
      "Predictive maintenance for industrial IoT",
      "Customer churn prediction",
      "Algorithmic trading and risk assessment"
    ]
  },
  {
    title: "Natural Language Processing",
    slug: "nlp",
    icon: Brain,
    description: "Extract meaning, sentiment, and structured data from unstructured text.",
    details: [
      "Semantic search and enterprise knowledge bases",
      "Automated document processing (OCR & NLP)",
      "Sentiment analysis and social listening",
      "Conversational AI and virtual assistants"
    ]
  },
  {
    title: "Data Engineering",
    slug: "data-engineering",
    icon: Database,
    description: "Architect robust, scalable data infrastructure to power your AI initiatives.",
    details: [
      "Data lake and warehouse architecture",
      "Real-time streaming pipelines (Kafka, Flink)",
      "ETL/ELT process automation",
      "Data governance and quality assurance"
    ]
  },
  {
    title: "AI Infrastructure & MLOps",
    slug: "mlops",
    icon: Network,
    description: "Deploy, monitor, and scale machine learning models reliably in production.",
    details: [
      "CI/CD pipelines for machine learning",
      "Model monitoring and drift detection",
      "Cloud-native deployment (AWS, GCP, Azure)",
      "Cost optimization for AI workloads"
    ]
  }
]

export default function ServicesIndex() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background text-foreground flex flex-col">
      {/* Background Decorators */}
      <div className="fixed inset-0 -z-10 bg-grid opacity-60" />
      <div className="fixed top-[20%] left-[50%] -z-10 w-[80%] h-[80%] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px] mix-blend-screen" />

      {/* Minimal Nav */}
      <nav className="glass-nav sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="text-xl tracking-tighter font-bold">widle<span className="text-primary">.ai</span></span>
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="relative mx-auto max-w-7xl px-5 pt-20 pb-24 lg:px-8 lg:pt-24 lg:pb-32 flex-grow">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Comprehensive <span className="text-gradient">AI Services</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We deliver end-to-end artificial intelligence solutions. From foundational data engineering to deploying advanced generative models, our full-stack expertise ensures your AI initiatives drive real business value.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group outline-none block h-full">
              <article className="glass-card h-full flex flex-col p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="size-6" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                      <div className="mt-1 size-1.5 rounded-full bg-primary/50 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center font-semibold text-sm text-primary">
                  View full service details <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/50 backdrop-blur-md py-8 mt-auto">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} widle.ai. Intelligence engineered.</p>
        </div>
      </footer>
    </main>
  )
}

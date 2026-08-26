import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Brain, CheckCircle2 } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

const industryData: Record<string, { title: string; description: string; content: string; capabilities: string[] }> = {
  "healthcare": {
    title: "Healthcare & Life Sciences",
    description: "Accelerate clinical trials, optimize patient care, and automate medical imaging analysis.",
    content: "The healthcare sector requires AI that is both highly accurate and deeply explainable. We build compliant machine learning pipelines for pharmaceutical companies and healthcare providers. From protein folding predictions and molecular dynamics to automated patient triage and EHR metadata extraction, our systems are built strictly according to HIPAA and GDPR standards.",
    capabilities: [
      "Medical Image Analysis (MRI, X-Ray) using Vision Transformers",
      "Clinical Trial Patient Matching via NLP",
      "Predictive Patient Outcome Modeling",
      "Automated Regulatory Compliance Workflows"
    ]
  },
  "finance": {
    title: "Financial & Insurance",
    description: "Detect fraud in real-time, automate claims processing, and build robust algorithmic trading strategies.",
    content: "In finance, milliseconds and basis points matter. We deploy low-latency predictive models and highly secure generative AI tools for quantitative hedge funds, retail banks, and insurance giants. Our AI architectures help analysts digest thousands of earnings reports instantly, identify anomalous transaction patterns, and dynamically price risk.",
    capabilities: [
      "Real-time Fraud Detection using Graph Neural Networks",
      "Automated Claims Processing and Underwriting",
      "LLM-powered Equity Research Assistants",
      "Algorithmic Trading & Time Series Forecasting"
    ]
  },
  "manufacturing": {
    title: "Manufacturing",
    description: "Implement predictive maintenance and edge-deployed computer vision for defect detection.",
    content: "Modernize the factory floor with Industry 4.0 solutions. We deploy AI at the edge to ensure high-throughput manufacturing lines operate without interruption. By analyzing sensor telemetry and high-speed camera feeds, our models predict equipment failures before they happen and remove defective products from the line autonomously.",
    capabilities: [
      "Edge-deployed Computer Vision for Quality Assurance",
      "Predictive Maintenance for Heavy Machinery",
      "Supply Chain & Inventory Forecasting",
      "Robotic Process Automation (RPA) Integration"
    ]
  },
  "technology": {
    title: "Software & Technology",
    description: "Enhance your SaaS products with embedded AI agents, LLM integrations, and robust MLOps.",
    content: "We partner with ambitious tech companies to embed intelligence directly into their core products. Whether you are a startup needing a scalable MLOps infrastructure or an enterprise SaaS looking to add a natural language interface to your database, we provide the specialized engineering capacity to get it to production fast.",
    capabilities: [
      "Embedded LLM Features (Copilots & Agents)",
      "Custom MCP Servers and Tool Use",
      "Scalable MLOps and Infrastructure as Code",
      "Synthetic Data Generation for Model Training"
    ]
  },
  "telecom": {
    title: "Telecoms & Media",
    description: "Analyze network anomalies in real-time and hyper-personalize content delivery at scale.",
    content: "Telecommunications and media companies generate petabytes of data. We build distributed AI systems that can parse this data in real-time to optimize network routing, predict outages, and deliver hyper-personalized content recommendations to millions of concurrent users.",
    capabilities: [
      "Real-time Network Anomaly Detection",
      "Customer Churn Prediction Modeling",
      "Hyper-personalized Content Recommendation Engines",
      "Automated Customer Service Voicebots"
    ]
  },
  "pe-vc": {
    title: "Private Equity & VC",
    description: "Automate technical due diligence and unlock scalable value creation roadmaps.",
    content: "Data-driven investing requires data-driven analysis. We provide PE and VC firms with AI-powered tools to automate technical due diligence on target companies. Post-acquisition, we work with portfolio companies to identify and implement AI strategies that drive rapid value creation and operational efficiency.",
    capabilities: [
      "Automated Technical & Codebase Due Diligence",
      "Portfolio Company AI Readiness Assessments",
      "AI Value Creation Roadmapping",
      "Market Sentiment & Alternative Data Analysis"
    ]
  }
}

export default function IndustryDetail({ params }: { params: { slug: string } }) {
  const industry = industryData[params.slug]

  if (!industry) {
    notFound()
  }

  return (
    <main className="min-h-screen relative bg-background text-foreground">
      <div className="fixed inset-0 -z-10 bg-grid opacity-60" />
      <div className="fixed top-[-20%] right-[-10%] -z-10 w-[60%] h-[60%] rounded-full bg-primary/15 blur-[120px] mix-blend-screen" />

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
              <Link href="/industries">
                <ArrowLeft className="mr-2 size-4" /> Back to Industries
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="relative mx-auto max-w-4xl px-5 pt-20 pb-32 lg:px-8 lg:pt-28">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md">
          Industry Solutions
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
          {industry.title}
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-12">
          {industry.description}
        </p>

        <div className="glass-panel p-8 sm:p-10 mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-border/50 pb-4">Industry Context</h2>
          <p className="text-lg leading-8 text-foreground/90">
            {industry.content}
          </p>
        </div>

        <div className="glass-panel bg-primary/5 border-primary/20 p-8 sm:p-10 mb-16">
          <h2 className="text-2xl font-bold mb-8">Specialized Capabilities</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {industry.capabilities.map((cap, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <CheckCircle2 className="size-6 text-primary shrink-0 mt-0.5" />
                <p className="font-medium leading-relaxed">{cap}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to transform your operations?</h3>
          <Button size="lg" asChild className="rounded-full shadow-lg shadow-primary/25">
            <Link href="/contact">
              Discuss Your Use Case <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border/40 bg-background/50 backdrop-blur-md py-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} widle.ai. Intelligence engineered.</p>
        </div>
      </footer>
    </main>
  )
}

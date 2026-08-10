import { notFound } from "next/navigation"
import {
  Brain,
  Bot,
  Cog,
  Eye,
  TrendingUp,
  Lightbulb,
  Search,
  Layers,
  Rocket,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/service-hero"
import { SectionHeader } from "@/components/section-header"
import { ProcessCard } from "@/components/process-card"
import { CaseStudyCard } from "@/components/case-study-card"
import { CTABanner } from "@/components/cta-banner"

// Service data (would come from CMS in production)
interface ProcessStep {
  icon: LucideIcon
  title: string
  description: string
}

interface ServiceData {
  title: string
  subtitle: string
  icon: LucideIcon
  overview: string
  process: ProcessStep[]
  relatedCaseStudies: {
    image: string
    tag: string
    title: string
    description: string
    href: string
  }[]
}

const servicesData: Record<string, ServiceData> = {
  "llms-rag": {
    title: "LLMs & RAG",
    subtitle: "Large Language Models & Retrieval-Augmented Generation",
    icon: Brain,
    overview:
      "Harness the power of large language models combined with your proprietary data through Retrieval-Augmented Generation. Our LLM solutions enable intelligent document search, automated content generation, conversational AI assistants, and knowledge management systems that understand context and deliver accurate, relevant responses. We fine-tune models to your domain, implement robust RAG pipelines, and ensure your AI systems maintain accuracy while reducing hallucinations.",
    process: [
      {
        icon: Search,
        title: "Discovery & Data Audit",
        description:
          "We analyze your existing data sources, document repositories, and knowledge bases to design the optimal retrieval architecture for your use case.",
      },
      {
        icon: Layers,
        title: "Architecture & Development",
        description:
          "Our team builds custom embedding pipelines, vector databases, and LLM orchestration layers tailored to your performance and accuracy requirements.",
      },
      {
        icon: Rocket,
        title: "Deployment & Optimization",
        description:
          "We deploy your solution with monitoring, implement feedback loops for continuous improvement, and optimize for cost-efficiency at scale.",
      },
    ],
    relatedCaseStudies: [
      {
        image: "/images/Widle-Logo.jpg",
        tag: "Legal Tech",
        title: "AI-Powered Contract Analysis",
        description:
          "Reduced contract review time by 80% for a Fortune 500 law firm using custom RAG pipelines.",
        href: "/case-studies/contract-analysis",
      },
      {
        image: "/images/Widle-Logo.jpg",
        tag: "Healthcare",
        title: "Medical Knowledge Assistant",
        description:
          "Built a HIPAA-compliant AI assistant that helps clinicians access medical literature instantly.",
        href: "/case-studies/medical-assistant",
      },
    ],
  },
  "ai-agents": {
    title: "AI Agents",
    subtitle: "Autonomous AI Systems for Complex Tasks",
    icon: Bot,
    overview:
      "Deploy intelligent AI agents that can reason, plan, and execute multi-step tasks autonomously. Our AI agent solutions handle complex workflows, integrate with your existing tools, and learn from interactions to continuously improve. From customer service automation to internal process optimization, our agents work alongside your team to amplify productivity and handle tasks that previously required significant human intervention.",
    process: [
      {
        icon: Search,
        title: "Workflow Analysis",
        description:
          "We map your existing processes, identify automation opportunities, and define the decision-making framework for your AI agents.",
      },
      {
        icon: Layers,
        title: "Agent Development",
        description:
          "Our engineers build custom agents with tool-use capabilities, memory systems, and safety guardrails aligned with your business rules.",
      },
      {
        icon: Rocket,
        title: "Integration & Scaling",
        description:
          "We integrate agents into your tech stack, establish human-in-the-loop controls, and scale agent capabilities as trust is established.",
      },
    ],
    relatedCaseStudies: [
      {
        image: "/images/Widle-Logo.jpg",
        tag: "E-commerce",
        title: "Autonomous Customer Support",
        description:
          "Deployed AI agents that handle 70% of customer inquiries with 95% satisfaction rates.",
        href: "/case-studies/customer-support",
      },
      {
        image: "/images/Widle-Logo.jpg",
        tag: "Finance",
        title: "Automated Due Diligence",
        description:
          "AI agents that research, compile, and summarize due diligence reports for investment teams.",
        href: "/case-studies/due-diligence",
      },
    ],
  },
  mlops: {
    title: "MLOps",
    subtitle: "Machine Learning Operations & Infrastructure",
    icon: Cog,
    overview:
      "Build robust, scalable machine learning infrastructure that takes models from experiment to production with confidence. Our MLOps practice establishes automated pipelines for training, testing, deploying, and monitoring ML models. We implement feature stores, model registries, A/B testing frameworks, and observability systems that ensure your ML investments deliver consistent, reliable value while maintaining governance and compliance requirements.",
    process: [
      {
        icon: Search,
        title: "Infrastructure Assessment",
        description:
          "We evaluate your current ML infrastructure, identify bottlenecks, and design a target architecture for scalable model operations.",
      },
      {
        icon: Layers,
        title: "Pipeline Development",
        description:
          "Our team builds CI/CD pipelines for ML, implements feature stores, and establishes automated testing and validation frameworks.",
      },
      {
        icon: Rocket,
        title: "Operationalization",
        description:
          "We deploy monitoring dashboards, set up alerting systems, and establish runbooks for maintaining models in production.",
      },
    ],
    relatedCaseStudies: [
      {
        image: "/images/Widle-Logo.jpg",
        tag: "Technology",
        title: "Enterprise ML Platform",
        description:
          "Built a self-service ML platform that reduced model deployment time from weeks to hours.",
        href: "/case-studies/ml-platform",
      },
      {
        image: "/images/Widle-Logo.jpg",
        tag: "Retail",
        title: "Real-Time Recommendation Engine",
        description:
          "MLOps infrastructure supporting millions of daily predictions for personalized recommendations.",
        href: "/case-studies/recommendations",
      },
    ],
  },
  "computer-vision": {
    title: "Computer Vision",
    subtitle: "Visual AI for Image & Video Analysis",
    icon: Eye,
    overview:
      "Transform visual data into actionable intelligence with custom computer vision solutions. Our expertise spans object detection, image classification, facial recognition, OCR, video analytics, and 3D vision systems. We build solutions that automate visual inspection, enable smart surveillance, power augmented reality experiences, and extract insights from imagery across industries including manufacturing, retail, healthcare, and autonomous systems.",
    process: [
      {
        icon: Search,
        title: "Visual Data Analysis",
        description:
          "We audit your image and video data sources, define detection/classification requirements, and establish accuracy benchmarks.",
      },
      {
        icon: Layers,
        title: "Model Development",
        description:
          "Our CV engineers train and fine-tune models using state-of-the-art architectures, with careful attention to edge cases and bias mitigation.",
      },
      {
        icon: Rocket,
        title: "Edge & Cloud Deployment",
        description:
          "We optimize models for your deployment environment whether cloud, edge, or hybrid and implement real-time processing pipelines.",
      },
    ],
    relatedCaseStudies: [
      {
        image: "/images/Widle-Logo.jpg",
        tag: "Manufacturing",
        title: "Automated Quality Inspection",
        description:
          "Vision AI system that detects defects with 99.5% accuracy, reducing manual inspection by 90%.",
        href: "/case-studies/quality-inspection",
      },
      {
        image: "/images/Widle-Logo.jpg",
        tag: "Retail",
        title: "Smart Inventory Management",
        description:
          "Computer vision solution for real-time shelf monitoring and automated restocking alerts.",
        href: "/case-studies/inventory-vision",
      },
    ],
  },
  "predictive-analytics": {
    title: "Predictive Analytics",
    subtitle: "Data-Driven Forecasting & Insights",
    icon: TrendingUp,
    overview:
      "Unlock the predictive power of your data to anticipate trends, optimize operations, and make proactive decisions. Our predictive analytics solutions combine statistical modeling, machine learning, and domain expertise to forecast demand, predict customer behavior, identify risks, and optimize resource allocation. We build interpretable models that not only predict outcomes but explain the factors driving those predictions, enabling confident decision-making.",
    process: [
      {
        icon: Search,
        title: "Data Discovery",
        description:
          "We explore your historical data, identify predictive signals, and define the business outcomes you want to forecast.",
      },
      {
        icon: Layers,
        title: "Model Engineering",
        description:
          "Our data scientists build and validate predictive models, ensuring accuracy, interpretability, and robustness to data drift.",
      },
      {
        icon: Rocket,
        title: "Insight Delivery",
        description:
          "We integrate predictions into your workflows, build dashboards for decision-makers, and establish retraining schedules.",
      },
    ],
    relatedCaseStudies: [
      {
        image: "/images/Widle-Logo.jpg",
        tag: "Supply Chain",
        title: "Demand Forecasting System",
        description:
          "ML-powered forecasting that improved inventory efficiency by 35% and reduced stockouts by 60%.",
        href: "/case-studies/demand-forecasting",
      },
      {
        image: "/images/Widle-Logo.jpg",
        tag: "Finance",
        title: "Credit Risk Modeling",
        description:
          "Explainable AI models for credit decisions that improved approval rates while reducing defaults.",
        href: "/case-studies/credit-risk",
      },
    ],
  },
  "ai-consulting": {
    title: "AI Consulting",
    subtitle: "Strategic AI Advisory & Roadmap Planning",
    icon: Lightbulb,
    overview:
      "Navigate your AI transformation with expert guidance from strategy to execution. Our consulting practice helps organizations identify high-impact AI opportunities, build business cases, establish AI governance frameworks, and develop actionable roadmaps. We bridge the gap between business objectives and technical possibilities, helping you prioritize investments, avoid common pitfalls, and build internal AI capabilities that deliver sustainable competitive advantage.",
    process: [
      {
        icon: Search,
        title: "Opportunity Assessment",
        description:
          "We evaluate your business processes, data assets, and competitive landscape to identify the highest-ROI AI opportunities.",
      },
      {
        icon: Layers,
        title: "Strategy & Roadmap",
        description:
          "Our consultants develop a phased AI strategy with clear milestones, resource requirements, and success metrics.",
      },
      {
        icon: Rocket,
        title: "Execution Support",
        description:
          "We provide hands-on guidance during implementation, help build your AI team, and establish governance frameworks.",
      },
    ],
    relatedCaseStudies: [
      {
        image: "/images/Widle-Logo.jpg",
        tag: "Enterprise",
        title: "AI Transformation Roadmap",
        description:
          "Guided a Fortune 100 company through their 3-year AI transformation, delivering $50M in value.",
        href: "/case-studies/ai-transformation",
      },
      {
        image: "/images/Widle-Logo.jpg",
        tag: "Financial Services",
        title: "AI Center of Excellence",
        description:
          "Established an internal AI CoE that accelerated time-to-value for AI projects by 60%.",
        href: "/case-studies/ai-coe",
      },
    ],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero with service title + breadcrumb */}
        <ServiceHero
          title={service.title}
          subtitle={service.subtitle}
          icon={service.icon}
        />

        {/* 2. Overview paragraph */}
        <section className="border-b border-border bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-2xl font-semibold text-foreground">
                Overview
              </h2>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                {service.overview}
              </p>
            </div>
          </div>
        </section>

        {/* 3. How we do it - 3-step process cards */}
        <section className="border-b border-border bg-card py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Our Approach"
              headline="How We Deliver Results"
              subtext="A proven methodology that ensures successful outcomes for every engagement."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
              {service.process.map((step, index) => (
                <ProcessCard
                  key={step.title}
                  step={index + 1}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. Related case studies (2 cards) */}
        <section className="border-b border-border bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Success Stories"
              headline="Related Case Studies"
              subtext="See how we've helped organizations achieve their goals with this service."
            />

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-16">
              {service.relatedCaseStudies.map((caseStudy) => (
                <CaseStudyCard
                  key={caseStudy.title}
                  image={caseStudy.image}
                  tag={caseStudy.tag}
                  title={caseStudy.title}
                  description={caseStudy.description}
                  href={caseStudy.href}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 5. CTA to Contact Us */}
        <CTABanner
          headline="Ready to Get Started?"
          description={`Let's discuss how ${service.title} can transform your business.`}
          buttonText="Contact Us"
          buttonHref="/contact"
          variant="primary"
        />
      </main>
      <Footer />
    </>
  )
}

// Generate static params for all services
export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }))
}

// Generate metadata for each service page
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) {
    return { title: "Service Not Found | widle.ai" }
  }

  return {
    title: `${service.title} | widle.ai Services`,
    description: service.overview.slice(0, 160),
  }
}

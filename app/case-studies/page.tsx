import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navbar } from "@/components/navbar"

const cases = [
  {
    title: "Enabling highly targeted, optimized campaigns",
    category: "Marketing",
    description: "Nielsen needed to enable brands and agencies to carry out targeted advertising campaigns using computer vision.",
    slug: "nielsen"
  },
  {
    title: "Xaver Sports",
    category: "Retool SaaS Platform",
    description: "A high-performance sports management platform built for scalability and real-time data tracking.",
    slug: "xaver-sport-retool"
  },
  {
    title: "Scalers",
    category: "RETOOL",
    description: "Cloud-native architecture optimization allowing for elastic scaling during peak user loads.",
    slug: "scaler-retool"
  },
  {
    title: "Instacoach",
    category: "RETOOL",
    description: "A comprehensive booking and coaching platform integrating complex payment gateways and scheduling algorithms.",
    slug: "instacoach-retool"
  },
  {
    title: "UXDX",
    category: "REACT JS, WEBSITE",
    description: "A dynamic, high-performance front-end architecture for a premier product design conference.",
    slug: "uxdx"
  },
  {
    title: "Dexter Angels",
    category: "WEBSITE",
    description: "Secure, highly-available corporate platform designed for angel investors and syndicates.",
    slug: "dexter-angels"
  },
  {
    title: "YOYPR",
    category: "Angular Backend Architecture",
    description: "Enterprise-grade Angular backend architecture built to handle complex, asynchronous data routing.",
    slug: "yoypr"
  },
  {
    title: "Automating Financial Risk Assessment with LLMs",
    category: "Generative AI",
    description: "How a global fintech reduced manual compliance review times by 60% using a secure, fine-tuned large language model pipeline.",
    slug: "fintech-risk-llm"
  },
  {
    title: "Defect Detection in Manufacturing at the Edge",
    category: "Computer Vision",
    description: "Deploying a real-time computer vision system on factory lines to detect microscopic anomalies, achieving 99.8% accuracy.",
    slug: "manufacturing-vision"
  },
  {
    title: "Predictive Supply Chain Optimization",
    category: "Predictive AI",
    description: "Building a deterministic forecasting model that reduced inventory waste by 35% for a multinational retailer.",
    slug: "retail-predictive"
  }
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background text-foreground flex flex-col">
      {/* Background Decorators */}
      <div className="fixed inset-0 -z-10 bg-grid opacity-60" />
      <div className="fixed top-[-20%] left-[-20%] -z-10 w-[70%] h-[70%] rounded-full bg-accent/10 blur-[150px] mix-blend-screen" />

      {/* Nav */}
      <Navbar />

      <section className="relative mx-auto max-w-7xl px-5 pt-28 pb-24 lg:px-8 lg:pt-32 lg:pb-32 flex-grow">
        <div className="max-w-3xl mb-16">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md">
            Our Work
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Proven <span className="text-primary">Outcomes.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore how we&apos;ve engineered solutions that solve real, complex enterprise challenges. We don&apos;t just build models; we build systems that drive measurable business value.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((study) => (
            <Link key={study.slug} href={`/portfolio/${study.slug}`} className="group outline-none block h-full">
              <article className="glass-panel h-full flex flex-col p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary/50">
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <BookOpen className="size-3" /> {study.category}
                </div>
                <h2 className="text-xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">
                  {study.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-8 flex-grow leading-relaxed">
                  {study.description}
                </p>
                <div className="mt-auto flex items-center font-semibold text-sm text-primary">
                  View Project <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
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

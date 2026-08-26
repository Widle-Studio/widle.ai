import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const cases = [
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

      {/* Minimal Nav */}
      <nav className="glass-nav sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="text-xl tracking-tighter font-bold">widle<span className="text-primary">.ai</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/services" className="text-muted-foreground hover:text-foreground">Services</Link>
            <Link href="/company" className="text-muted-foreground hover:text-foreground">Company</Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="relative mx-auto max-w-7xl px-5 pt-20 pb-24 lg:px-8 lg:pt-24 lg:pb-32 flex-grow">
        <div className="max-w-3xl mb-16">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md">
            Our Work
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Proven <span className="text-gradient">Outcomes.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore how we&apos;ve engineered AI solutions that solve real, complex enterprise challenges. We don&apos;t just build models; we build systems that drive measurable business value.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((study) => (
            <Link key={study.slug} href={`/contact`} className="group outline-none block h-full">
              <article className="glass-card h-full flex flex-col p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary/50">
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
                  Request Case Study <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
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

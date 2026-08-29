import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { Building2, Stethoscope, Briefcase, Code, Factory, Radio } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const industries = [
  {
    title: "Healthcare & Life Sciences",
    slug: "healthcare",
    icon: Stethoscope,
    description: "Accelerate clinical trials, optimize patient care, and automate medical imaging analysis using advanced AI models."
  },
  {
    title: "Financial & Insurance",
    slug: "finance",
    icon: Briefcase,
    description: "Detect fraud in real-time, automate claims processing, and build robust algorithmic trading strategies."
  },
  {
    title: "Manufacturing",
    slug: "manufacturing",
    icon: Factory,
    description: "Implement predictive maintenance and edge-deployed computer vision for defect detection on the factory floor."
  },
  {
    title: "Software & Technology",
    slug: "technology",
    icon: Code,
    description: "Enhance your SaaS products with embedded AI agents, LLM integrations, and robust MLOps infrastructure."
  },
  {
    title: "Telecoms & Media",
    slug: "telecom",
    icon: Radio,
    description: "Analyze network anomalies in real-time and hyper-personalize content delivery at scale."
  },
  {
    title: "Private Equity & VC",
    slug: "pe-vc",
    icon: Building2,
    description: "Automate technical due diligence and unlock scalable value creation roadmaps for portfolio companies."
  }
]

export default function IndustriesIndex() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background text-foreground flex flex-col">
      <div className="fixed inset-0 -z-10 bg-grid opacity-60" />
      <div className="fixed top-[20%] left-[50%] -z-10 w-[80%] h-[80%] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px] mix-blend-screen" />

      <Navbar />

      <section className="relative mx-auto max-w-7xl px-5 pt-20 pb-24 lg:px-8 lg:pt-24 lg:pb-32 flex-grow">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            AI for <span className="text-gradient">Every Industry.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With cross-domain expertise, we deliver impactful, production-ready AI projects tailored to the specific regulatory and operational requirements of your sector.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <Link key={ind.slug} href={`/industries/${ind.slug}`} className="group outline-none block h-full">
              <article className="glass-card h-full flex flex-col p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ind.icon className="size-6" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {ind.title}
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground mb-6 flex-grow">
                  {ind.description}
                </p>
                <div className="mt-auto font-semibold text-sm text-primary">
                  Explore Solutions &rarr;
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-border/40 bg-background/50 backdrop-blur-md py-8 mt-auto">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} widle.ai. Intelligence engineered.</p>
        </div>
      </footer>
    </main>
  )
}

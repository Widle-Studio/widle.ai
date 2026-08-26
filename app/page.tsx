import { ArrowRight, Brain, Database, Eye, MessageSquare, Network, Sparkles, ChevronRight, BarChart } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

const coreServices = [
  {
    title: "Generative AI",
    description: "Harness the power of LLMs and foundation models to automate content, code, and complex workflows. We build custom multi-agent architectures that reason and act upon your proprietary data.",
    icon: Sparkles,
    href: "/services/generative-ai",
  },
  {
    title: "Computer Vision",
    description: "Extract actionable intelligence from images and video streams. We deploy robust object detection, facial recognition, and real-time anomaly detection pipelines optimized for the edge or cloud.",
    icon: Eye,
    href: "/services/computer-vision",
  },
  {
    title: "Predictive AI",
    description: "Anticipate market trends, customer behavior, and system failures. Our statistical modeling and machine learning algorithms turn historical data into deterministic forecasts.",
    icon: BarChart,
    href: "/services/predictive-ai",
  },
  {
    title: "Natural Language Processing",
    description: "Understand and process human language at scale. From semantic search engines to automated customer service bots, we bridge the gap between structured algorithms and unstructured text.",
    icon: MessageSquare,
    href: "/services/nlp",
  },
  {
    title: "Data Engineering",
    description: "The foundation of all AI. We architect scalable, fault-tolerant data pipelines and data lakes ensuring your data is clean, accessible, and ready for advanced analytics and model training.",
    icon: Database,
    href: "/services/data-engineering",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background text-foreground">
      {/* Background Decorators */}
      <div className="fixed inset-0 -z-10 bg-grid opacity-60" />

      {/* Ambient glowing blobs behind everything */}
      <div className="fixed top-[-10%] left-[-10%] -z-10 w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen" />
      <div className="fixed bottom-[-10%] right-[-10%] -z-10 w-[50%] h-[50%] rounded-full bg-accent/20 blur-[120px] mix-blend-screen" />

      {/* Navigation */}
      <nav className="glass-nav sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <Brain className="size-4" />
            </span>
            <span className="text-xl tracking-tighter font-bold">widle<span className="text-primary">.ai</span></span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <Link href="#services" className="transition hover:text-foreground hover:scale-105">Services</Link>
            <Link href="/case-studies" className="transition hover:text-foreground hover:scale-105">Case Studies</Link>
            <Link href="/company" className="transition hover:text-foreground hover:scale-105">Company</Link>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild className="hidden sm:inline-flex">
              <Link href="/contact">
                Talk to us <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-5 pt-24 pb-32 lg:px-8 lg:pt-36 lg:pb-40">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2 bg-primary"></span>
            </span>
            Empowering Ambition with AI
          </div>

          <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl leading-[1.1]">
            Intelligence <br className="hidden sm:block" />
            <span className="text-gradient">Engineered.</span>
          </h1>

          <p className="mt-8 text-pretty text-lg sm:text-xl leading-8 text-muted-foreground max-w-2xl">
            We design, build, and deploy custom Artificial Intelligence systems. Inspired by data, driven by rigorous engineering, we transform complex enterprise challenges into measurable advantages.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild className="rounded-full shadow-lg shadow-primary/25 group">
              <Link href="/contact">
                Discover Possibilities
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="glass" asChild className="rounded-full">
              <Link href="#services">Our Capabilities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="border-y border-border/50 bg-background/30 backdrop-blur-sm py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-5 text-sm font-semibold uppercase tracking-[.2em] text-muted-foreground/60 lg:px-8">
          <span>Trusted by Innovators</span>
          <span className="text-foreground/80 flex items-center gap-2"><Network className="size-4" /> Global Tech</span>
          <span className="text-foreground/80 flex items-center gap-2"><Database className="size-4" /> Enterprise Finance</span>
          <span className="text-foreground/80 flex items-center gap-2"><Brain className="size-4" /> Health AI</span>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="eyebrow mb-4 inline-block">Our Expertise</h2>
          <h3 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            End-to-End AI Solutions.
          </h3>
          <p className="mt-6 text-lg text-muted-foreground">
            From raw data infrastructure to cutting-edge generative models, we provide comprehensive engineering services to make your business smarter, faster, and more resilient.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service) => (
            <Link key={service.title} href={service.href} className="group outline-none">
              <article className="glass-card h-full flex flex-col p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary">
                <div className="mb-8 inline-flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-7" />
                </div>
                <h4 className="text-xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground flex-grow">
                  {service.description}
                </p>
                <div className="mt-8 flex items-center text-sm font-semibold text-primary opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Explore Service <ChevronRight className="ml-1 size-4" />
                </div>
              </article>
            </Link>
          ))}

          {/* Contact/CTA Card within services grid */}
          <article className="glass-card bg-primary/5 border-primary/20 flex flex-col items-center justify-center p-8 text-center sm:col-span-2 lg:col-span-1">
            <h4 className="text-2xl font-bold tracking-tight mb-4">Have a unique challenge?</h4>
            <p className="text-sm text-muted-foreground mb-8">We architect custom AI systems tailored to highly specific operational needs.</p>
            <Button asChild>
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </article>
        </div>
      </section>

      {/* Value Proposition / Methodology */}
      <section className="relative py-24 lg:py-32 border-t border-border/50">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">How We Work</p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                Science Meets <br/><span className="text-primary">Software Engineering.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Building AI isn&apos;t just about training models; it&apos;s about integrating them securely and reliably into production. We bridge the gap between academic machine learning research and enterprise-grade software development.
              </p>
              <ul className="space-y-4">
                {[
                  "Security and privacy built-in from day one.",
                  "Scalable cloud-native architectures.",
                  "Rigorous testing and continuous deployment (MLOps).",
                  "Transparent models with clear ROI."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Sparkles className="size-3" />
                    </span>
                    <span className="font-medium text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="glass-panel p-8 md:p-12 relative z-10">
                <div className="space-y-6">
                  {/* Mock Code Block / Terminal */}
                  <div className="rounded-lg bg-black/90 p-4 font-mono text-sm text-green-400 overflow-hidden border border-white/10 shadow-2xl">
                    <div className="flex gap-2 mb-4 border-b border-white/10 pb-2">
                      <div className="size-3 rounded-full bg-red-500/80" />
                      <div className="size-3 rounded-full bg-yellow-500/80" />
                      <div className="size-3 rounded-full bg-green-500/80" />
                    </div>
                    <p className="text-white/50">$ initialize_training_pipeline</p>
                    <p className="mt-2">[INFO] Loading deep learning framework...</p>
                    <p>[INFO] Connecting to high-performance cluster...</p>
                    <p>[INFO] Epoch 1/100: loss=0.4532, accuracy=0.884</p>
                    <p className="text-primary mt-2">Model optimization complete. Ready for inference.</p>
                  </div>
                </div>
              </div>

              {/* Decorative background shapes for the card */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/30 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/30 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <footer className="border-t border-border/40 bg-background/50 backdrop-blur-md pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight mb-4">
                <Brain className="size-5 text-primary" /> widle.ai
              </Link>
              <p className="text-sm text-muted-foreground">
                Intelligence engineered. We build bespoke AI solutions for the modern enterprise.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/services/generative-ai" className="hover:text-primary transition-colors">Generative AI</Link></li>
                <li><Link href="/services/computer-vision" className="hover:text-primary transition-colors">Computer Vision</Link></li>
                <li><Link href="/services/predictive-ai" className="hover:text-primary transition-colors">Predictive AI</Link></li>
                <li><Link href="/services/nlp" className="hover:text-primary transition-colors">NLP</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
                <li><Link href="/company" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} widle.ai. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="/disclaimer" className="hover:text-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

import { ArrowRight, Brain, Database, Eye, Network, Sparkles, BarChart, Stethoscope, Factory, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

const coreServices = [
  {
    title: "Generative AI & Agents",
    description: "Harness LLMs to automate complex reasoning workflows. We build custom multi-agent architectures that act upon your proprietary data securely.",
    icon: Sparkles,
    href: "/services/generative-ai",
  },
  {
    title: "Computer Vision",
    description: "Extract actionable intelligence from visual streams. We deploy robust object detection and real-time anomaly pipelines optimized for the edge.",
    icon: Eye,
    href: "/services/computer-vision",
  },
  {
    title: "Predictive Analytics",
    description: "Anticipate market trends and system failures. Our statistical modeling turns historical data into deterministic forecasts.",
    icon: BarChart,
    href: "/services/predictive-ai",
  },
  {
    title: "AI Infrastructure & MLOps",
    description: "The foundation of reliable AI. We architect scalable, fault-tolerant data pipelines and robust model deployment strategies.",
    icon: Database,
    href: "/services/data-engineering",
  },
]

const industries = [
  { title: "Healthcare & Life Sciences", icon: Stethoscope, href: "/industries/healthcare" },
  { title: "Financial & Insurance", icon: Briefcase, href: "/industries/finance" },
  { title: "Manufacturing", icon: Factory, href: "/industries/manufacturing" },
  { title: "Software & Technology", icon: Network, href: "/industries/technology" },
]

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background text-foreground">
      {/* Background Decorators */}
      <div className="fixed inset-0 -z-10 bg-grid opacity-60" />
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
            <Link href="/services" className="transition hover:text-foreground hover:scale-105">Tech Expertise</Link>
            <Link href="/industries" className="transition hover:text-foreground hover:scale-105">Industries</Link>
            <Link href="/case-studies" className="transition hover:text-foreground hover:scale-105">Case Studies</Link>
            <Link href="/resources" className="transition hover:text-foreground hover:scale-105">Resources</Link>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col items-start text-left max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-muted-foreground border-b border-muted-foreground/30 pb-2">
              A Creative Software Engineering Agency!
            </div>

            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-[1.1] text-[#3b6df8]">
              We Build.<br />We Scale.<br />We Automate!
            </h1>

            <p className="mt-6 text-pretty text-2xl sm:text-3xl leading-snug text-foreground font-semibold">
              Innovative software solutions<br />& Retool expertise to power<br />your business!
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button size="lg" variant="outline" asChild className="rounded-full border-primary/50 hover:bg-primary/10 transition-colors">
                <Link href="/case-studies">
                  View Projects
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[#3b6df8]/10 blur-[100px] rounded-full -z-10" />
            <div className="relative w-full h-full max-h-[500px] max-w-[500px]">
              <Image src="/hero-image.png" alt="Hero Graphic" fill className="object-contain drop-shadow-2xl" priority />
            </div>
          </div>
        </div>
      </section>

      {/* DeepSense-style Trust/Stats Banner */}
      <section className="border-y border-border/50 bg-background/30 backdrop-blur-sm py-12">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-center gap-12 sm:gap-24 px-5 text-center lg:px-8">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Commercial AI Projects</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-border/50" />
          <div>
            <div className="text-4xl font-bold text-primary mb-2">120+</div>
            <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">World-Class AI Experts</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-border/50" />
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10</div>
            <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Years of AI Expertise</div>
          </div>
        </div>
      </section>

      {/* Tech Expertise Section */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="eyebrow mb-4 inline-block">Tech Expertise</h2>
            <h3 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Engineered for Production.
            </h3>
            <p className="mt-6 text-lg text-muted-foreground">
              Explore the technology expertise we leverage to develop scalable, secure AI solutions for ambitious enterprises.
            </p>
          </div>
          <Button variant="outline" asChild className="shrink-0">
            <Link href="/services">Explore All Expertise</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreServices.map((service) => (
            <Link key={service.title} href={service.href} className="group outline-none">
              <article className="glass-card h-full flex flex-col p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary">
                <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-6" />
                </div>
                <h4 className="text-xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground flex-grow">
                  {service.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Industries Grid */}
      <section className="relative py-24 lg:py-32 border-t border-border/50">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="eyebrow mb-4 inline-block">Industries</h2>
            <h3 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Cross-Domain Impact.
            </h3>
            <p className="mt-6 text-lg text-muted-foreground">
              With experience across rigorous industries, we deliver impactful projects tailored to highly specific operational sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <Link key={ind.title} href={ind.href} className="group glass-panel p-6 flex flex-col items-center justify-center text-center hover:bg-primary/5 hover:border-primary/30 transition-colors">
                <ind.icon className="size-8 text-primary mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                <span className="font-semibold">{ind.title}</span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="link" asChild>
              <Link href="/industries">View all industries <ArrowRight className="ml-1 size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Credentials Banner */}
      <section className="border-y border-border/50 bg-background/30 backdrop-blur-sm py-12">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-8 px-5 lg:px-8">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold tracking-tight mb-2">Our Credentials</h3>
            <p className="text-muted-foreground">We partner with the leading AI laboratories to bring state-of-the-art models securely into your enterprise.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <Link href="/credentials">Anthropic Partner</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/credentials">OpenAI Partner</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <footer className="bg-background pt-16 pb-8 border-t border-border/40">
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
              <h4 className="font-semibold mb-4">Tech Expertise</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/services/generative-ai" className="hover:text-primary transition-colors">AI Agents & GenAI</Link></li>
                <li><Link href="/services/computer-vision" className="hover:text-primary transition-colors">Computer Vision</Link></li>
                <li><Link href="/services/predictive-ai" className="hover:text-primary transition-colors">Predictive Analytics</Link></li>
                <li><Link href="/services/mlops" className="hover:text-primary transition-colors">MLOps</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
                <li><Link href="/company" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/credentials" className="hover:text-primary transition-colors">Credentials</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
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


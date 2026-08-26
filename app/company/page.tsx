import Link from "next/link"
import { Brain } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function CompanyPage() {
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
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/services" className="text-muted-foreground hover:text-foreground">Services</Link>
            <Link href="/case-studies" className="text-muted-foreground hover:text-foreground">Case Studies</Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="relative mx-auto max-w-4xl px-5 pt-20 pb-24 lg:px-8 lg:pt-24 lg:pb-32 flex-grow">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md">
          About Us
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
          Engineering the <span className="text-gradient">Future of AI.</span>
        </h1>

        <p className="text-xl text-muted-foreground leading-relaxed mb-12">
          At widle.ai, we are a team of data scientists, ML engineers, and system architects dedicated to solving complex enterprise challenges through rigorous artificial intelligence.
        </p>

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <div className="glass-panel p-8">
            <Brain className="size-8 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To bridge the gap between academic machine learning research and enterprise software development, building reliable, secure, and transparent AI systems.
            </p>
          </div>
          <div className="glass-panel p-8">
            <h3 className="text-xl font-bold mb-3">Core Values</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2"><div className="size-1.5 rounded-full bg-primary" /> Engineering Excellence</li>
              <li className="flex items-center gap-2"><div className="size-1.5 rounded-full bg-primary" /> Data Privacy & Security</li>
              <li className="flex items-center gap-2"><div className="size-1.5 rounded-full bg-primary" /> Measurable ROI</li>
              <li className="flex items-center gap-2"><div className="size-1.5 rounded-full bg-primary" /> Explainable AI</li>
            </ul>
          </div>
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

import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Eye,
  Gauge,
  Menu,
  Network,
  Sparkles,
  TrendingUp,
  Workflow,
  X,
} from "lucide-react"

const services: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "MLOps & AI Infrastructure", description: "Production-grade pipelines that keep every model observable, resilient, and ready to scale.", icon: Gauge },
  { title: "Computer Vision & Edge AI", description: "Real-time visual intelligence, optimized for your cameras, devices, and operating environment.", icon: Eye },
  { title: "Cloud-Native Engineering", description: "Fault-tolerant systems on AWS, GCP, and Azure, shaped around how your business actually works.", icon: Cloud },
  { title: "Internal Tooling", description: "Secure operational dashboards that turn complex data and APIs into clear decisions.", icon: Code2 },
  { title: "Custom AI Components", description: "Flexible React building blocks that make your internal products faster and more capable.", icon: Network },
  { title: "Predictive Analytics", description: "Forecast demand, risk, and performance with models built for deterministic business outcomes.", icon: TrendingUp },
]

const solutions = ["Predictive maintenance", "Document automation", "Demand forecasting", "Fraud detection"]

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="fixed inset-0 -z-10 bg-grid opacity-40" />
      <div className="fixed left-1/2 top-[-18rem] -z-10 h-[36rem] w-[48rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight"><span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20"><Sparkles className="size-4" /></span><span className="text-lg">w<span className="text-primary">i</span>dle.ai</span></a>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex"><a href="#services" className="transition hover:text-foreground">Expertise</a><a href="#solutions" className="transition hover:text-foreground">Solutions</a><a href="#insights" className="transition hover:text-foreground">Insights</a><a href="#faq" className="transition hover:text-foreground">FAQ</a></div>
        <a href="#contact" className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:bg-primary hover:text-primary-foreground sm:block">Start a conversation <ArrowRight className="ml-2 inline size-4" /></a>
        <button className="rounded-full border border-border/70 p-2 md:hidden" aria-label="Open navigation"><Menu className="size-5" /></button>
      </nav>

      <section id="top" className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-16 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:pb-32 lg:pt-24">
        <div><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"><span className="size-1.5 rounded-full bg-primary" /> Intelligence, engineered for impact</div><h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.03] tracking-[-0.06em] sm:text-7xl">Make complexity <span className="text-primary">work for you.</span></h1><p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">We build custom AI systems for ambitious enterprises — from the first useful insight to infrastructure that performs at scale.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#contact" className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition hover:-translate-y-0.5">Build with widle <ArrowRight className="ml-2 inline size-4" /></a><a href="#services" className="rounded-full border border-border/80 bg-card/40 px-6 py-3.5 text-sm font-semibold transition hover:bg-card">Explore expertise</a></div><div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground"><span><strong className="text-2xl font-semibold text-foreground">40%</strong><br />faster response times</span><span className="h-10 w-px bg-border" /><span><strong className="text-2xl font-semibold text-foreground">3–6 mo</strong><br />to initial deployment</span></div></div>
        <div className="relative"><div className="glass-panel relative min-h-[26rem] overflow-hidden p-6 sm:p-8"><div className="flex items-center justify-between text-xs text-muted-foreground"><span className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary" /> widle / intelligence layer</span><span>LIVE SYSTEM</span></div><div className="mt-14"><BrainCircuit className="size-12 text-primary" /><h2 className="mt-6 text-3xl font-semibold tracking-tight">From raw signal<br />to <span className="text-primary">clear action.</span></h2><p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">A connected intelligence layer for your people, processes, and products.</p></div><div className="absolute bottom-6 left-6 right-6 flex items-end gap-2 sm:left-8 sm:right-8"><div className="h-12 flex-1 rounded-t-lg bg-primary/20" /><div className="h-20 flex-1 rounded-t-lg bg-primary/35" /><div className="h-28 flex-1 rounded-t-lg bg-primary/55" /><div className="h-40 flex-1 rounded-t-lg bg-primary" /></div></div><div className="glass-panel absolute -bottom-5 -left-5 flex items-center gap-3 px-4 py-3 shadow-xl"><span className="grid size-9 place-items-center rounded-full bg-primary/15 text-primary"><Check className="size-4" /></span><span className="text-xs font-medium">Model health<br /><span className="text-primary">All systems nominal</span></span></div></div>
      </section>

      <section className="border-y border-border/60 bg-card/20 py-6"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 text-xs font-medium uppercase tracking-[.18em] text-muted-foreground lg:justify-between lg:px-8"><span>Trusted technology</span><span>Microsoft</span><span>Google Cloud</span><span>AWS</span><span>NVIDIA</span><span>Snowflake</span><span>Retool</span></div></section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="max-w-2xl"><p className="eyebrow">What we do</p><h2 className="section-title">The hard parts, handled.</h2><p className="section-copy">Deep technical expertise, translated into systems your team can trust and use every day.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map(({ title, description, icon: Icon }) => <article key={title} className="glass-panel group p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40"><div className="mb-12 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="size-5" /></div><h3 className="text-lg font-semibold tracking-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p><ArrowRight className="mt-6 size-4 text-primary opacity-0 transition group-hover:opacity-100" /></article>)}</div></section>

      <section id="solutions" className="bg-foreground py-24 text-background lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p className="eyebrow text-primary">Built around outcomes</p><h2 className="section-title">AI that earns its place in the room.</h2><p className="mt-6 text-base leading-7 text-background/60">We don&apos;t ship experiments. We partner with your team to create measurable advantage, with the guardrails to make it last.</p><a href="#contact" className="mt-8 inline-block rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Talk to an expert <ArrowRight className="ml-2 inline size-4" /></a></div><div className="grid gap-3 sm:grid-cols-2">{solutions.map((solution, i) => <div key={solution} className="flex items-center gap-4 rounded-2xl border border-background/15 bg-background/5 p-5"><span className="font-mono text-xs text-primary">0{i + 1}</span><span className="font-medium">{solution}</span></div>)}</div></div></section>

      <section id="insights" className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow">Our perspective</p><h2 className="section-title">Signals worth sharing.</h2></div><a href="#contact" className="text-sm font-medium text-primary">View all insights <ArrowRight className="ml-1 inline size-4" /></a></div><div className="mt-12 grid gap-4 md:grid-cols-3">{["The future of generative AI in the enterprise", "Building trust in intelligent systems", "A practical guide to MLOps at scale"].map((title, i) => <article key={title} className="glass-panel p-6"><div className="mb-14 flex justify-between text-xs text-muted-foreground"><span className="text-primary">0{i + 1} / INSIGHT</span><span>2026</span></div><h3 className="text-xl font-semibold leading-7 tracking-tight">{title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">Ideas and field notes for teams building what&apos;s next.</p><ArrowRight className="mt-7 size-4 text-primary" /></article>)}</div></section>

      <section id="faq" className="mx-auto max-w-3xl px-5 py-16 lg:py-24"><p className="eyebrow text-center">Good questions</p><h2 className="section-title text-center">Before we begin.</h2><div className="mt-10 divide-y divide-border/70 border-y border-border/70">{["How long does a typical AI implementation take?", "Do we need in-house AI expertise?", "How do you ensure data privacy and security?", "Can you integrate with legacy software?"].map(q => <details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between font-medium"><span>{q}</span><ChevronDown className="size-4 text-muted-foreground transition group-open:rotate-180" /></summary><p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">We shape the engagement around your data readiness, systems, and goals, with security and knowledge transfer built in from day one.</p></details>)}</div></section>

      <section id="contact" className="mx-5 mb-12 overflow-hidden rounded-3xl bg-primary px-6 py-16 text-primary-foreground sm:px-12 lg:mx-auto lg:max-w-7xl lg:py-20"><div className="flex flex-col justify-between gap-10 md:flex-row md:items-end"><div><p className="mb-5 text-xs font-semibold uppercase tracking-[.2em] text-primary-foreground/70">Make the next move</p><h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Ready to make AI useful?</h2><p className="mt-5 max-w-lg leading-7 text-primary-foreground/75">Tell us where you&apos;re headed. We&apos;ll help you find the most intelligent way there.</p></div><a href="mailto:hello@widle.ai" className="shrink-0 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background">Start a conversation <ArrowRight className="ml-2 inline size-4" /></a></div></section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-5 pb-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© 2026 widle.ai</span><span>Intelligence, engineered for impact.</span></footer>
    </main>
  )
}

// hidden import guard for design-system icon bundlers
void Bot
void Workflow
void X

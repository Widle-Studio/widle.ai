import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { BookOpen, FileText, Video, PlayCircle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const resources = [
  {
    type: "Blog",
    title: "Deploying Agentic RAG Pipelines in Minutes",
    description: "A technical deep dive into architectural patterns for enterprise RAG.",
    icon: BookOpen
  },
  {
    type: "Paper",
    title: "LLM Structured Querying Benchmarks",
    description: "Evaluating model accuracy across complex SQL generation tasks.",
    icon: FileText
  },
  {
    type: "Webinar",
    title: "GenAI Monitor Framework Demo",
    description: "Learn how to detect hallucinations and drift in production LLMs.",
    icon: Video
  },
  {
    type: "Interview",
    title: "AI Leaders: The Future of MLOps",
    description: "A discussion on scaling AI infrastructure efficiently.",
    icon: PlayCircle
  }
]

export default function ResourcesIndex() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background text-foreground flex flex-col">
      <div className="fixed inset-0 -z-10 bg-grid opacity-60" />
      <div className="fixed top-[-10%] right-[-10%] -z-10 w-[60%] h-[60%] rounded-full bg-accent/15 blur-[120px] mix-blend-screen" />

      <Navbar />

      <section className="relative mx-auto max-w-7xl px-5 pt-20 pb-24 lg:px-8 lg:pt-24 lg:pb-32 flex-grow">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Applied AI <span className="text-gradient">Hub.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Technical insights, academic papers, cookbooks, and webinars from our AI engineering teams.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((res, idx) => (
            <Link key={idx} href={`/contact`} className="group outline-none block h-full">
              <article className="glass-card h-full flex flex-col p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary/50">
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <res.icon className="size-4" /> {res.type}
                </div>
                <h2 className="text-xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {res.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  {res.description}
                </p>
                <div className="mt-auto font-semibold text-sm text-primary">
                  Read More &rarr;
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

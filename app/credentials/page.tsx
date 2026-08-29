import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { ShieldCheck, Award, Network } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function CredentialsPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background text-foreground flex flex-col">
      <div className="fixed inset-0 -z-10 bg-grid opacity-60" />
      <div className="fixed top-[-20%] left-[-20%] -z-10 w-[70%] h-[70%] rounded-full bg-primary/10 blur-[150px] mix-blend-screen" />

      <Navbar />

      <section className="relative mx-auto max-w-7xl px-5 pt-20 pb-24 lg:px-8 lg:pt-24 lg:pb-32 flex-grow">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Our <span className="text-gradient">Credentials.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are trusted by industry leaders and hold partnerships with the most advanced AI laboratories and cloud providers in the world.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="glass-panel p-8 flex flex-col items-center text-center">
            <ShieldCheck className="size-12 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-3">Anthropic Service Partner</h3>
            <p className="text-sm text-muted-foreground">Certified experts in deploying and evaluating Claude 3 for enterprise workflows.</p>
          </div>
          <div className="glass-panel p-8 flex flex-col items-center text-center">
            <Network className="size-12 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-3">OpenAI Services Partner</h3>
            <p className="text-sm text-muted-foreground">Specialized in fine-tuning and integrating GPT-4o into secure business environments.</p>
          </div>
          <div className="glass-panel p-8 flex flex-col items-center text-center">
            <Award className="size-12 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-3">ISO 27001 Certified</h3>
            <p className="text-sm text-muted-foreground">Maintaining the highest international standards for information security management.</p>
          </div>
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

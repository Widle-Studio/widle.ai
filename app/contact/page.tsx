import Link from "next/link"
import { ArrowRight, Mail, MapPin } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background text-foreground flex flex-col">
      {/* Background Decorators */}
      <div className="fixed inset-0 -z-10 bg-grid opacity-60" />
      <div className="fixed top-[-10%] right-[-10%] -z-10 w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen" />

      {/* Minimal Nav */}
      <nav className="glass-nav sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="text-xl tracking-tighter font-bold">widle<span className="text-primary">.ai</span></span>
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="relative mx-auto max-w-7xl px-5 pt-20 pb-24 lg:px-8 lg:pt-24 lg:pb-32 flex-grow">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md">
              Get in Touch
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Let&apos;s build <br/><span className="text-gradient">intelligence.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Ready to transform your operations with custom AI? Reach out to schedule a technical consultation with our engineering team.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="size-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <a href="mailto:hello@widle.ai" className="text-muted-foreground hover:text-primary transition-colors">hello@widle.ai</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Headquarters</h3>
                  <p className="text-muted-foreground">San Francisco, CA<br/>Remote Operations Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 sm:p-10">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                  <input id="firstName" className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-2.5 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                  <input id="lastName" className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-2.5 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Work Email</label>
                <input id="email" type="email" className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-2.5 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Project Details</label>
                <textarea id="message" rows={4} className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-2.5 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none" />
              </div>
              <Button type="button" size="lg" className="w-full rounded-xl">
                Submit Inquiry <ArrowRight className="ml-2 size-4" />
              </Button>
            </form>
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

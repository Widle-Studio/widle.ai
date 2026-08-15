import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { CTABanner } from "@/components/cta-banner"
import { Cloud, ShieldCheck, Code2, DatabaseZap, Workflow, MessageSquare } from "lucide-react"

export const metadata = {
  title: "About Widle.ai | Innovative Software Solutions",
  description: "Widle design, brands, build, deploy, and promotes, offering end-to-end solutions, agility in execution, and depth of specialization.",
}

export default function CompanyPage() {
  const processSteps = [
    {
      title: "Tell Us What You Need",
      description: "We specialize in developing applications that evolve seamlessly with your business.",
      icon: MessageSquare
    },
    {
      title: "Quick Call",
      description: "We assist you in building architectures that scale rapidly with your business.",
      icon: Code2
    },
    {
      title: "Detailed Price Quotation",
      description: "Comprehensive estimates tailored precisely to your project needs.",
      icon: DatabaseZap
    },
    {
      title: "Start of Work",
      description: "Initiate your journey toward success with a dedicated team of engineers.",
      icon: Workflow
    },
    {
      title: "Receive Delivery",
      description: "We provide comprehensive training and execution to launch your application.",
      icon: Cloud
    },
    {
      title: "Support for the Future",
      description: "We provide ongoing training and robust support for all our clients.",
      icon: ShieldCheck
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="A Creative Software Engineering Agency!"
            headline="We Build. We Scale. We Automate!"
            subtext="Innovative AI, Cloud software solutions & Retool expertise to power your business! Widle design, brands, build, deploy, and promotes, offering end-to-end solutions, agility in execution, and depth of specialization."
          />

          {/* Vision & Mission */}
          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-8 items-center border-b border-border pb-20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Your Retool & Cloud Partner</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  At Widle, we recognize that deploying artificial intelligence and robust internal software in a production environment is fundamentally a systems engineering challenge. We go beyond theoretical data science to build fault-tolerant, scalable, and secure AI architectures.
                </p>
                <ul className="list-none space-y-4 mt-6 text-foreground font-medium">
                  <li className="flex items-center gap-3">
                    <span className="text-xl">🖤</span> Speed up time-to-market
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-xl">📈</span> Increase agility
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-xl">💰</span> Lower development costs
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative aspect-square sm:aspect-video lg:aspect-square overflow-hidden rounded-2xl border bg-muted group">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center p-8">
                <div className="font-mono text-sm text-zinc-400 space-y-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  <p className="text-emerald-400">~/widle/core-engine $</p>
                  <p>Initializing cloud infrastructure...</p>
                  <p>Loading Retool components [===============&gt;] 100%</p>
                  <p>Optimizing serverless deployments...</p>
                  <p>Establishing secure API channels...</p>
                  <p>System status: <span className="text-emerald-400">ACTIVE</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How do we do? */}
        <div className="bg-secondary/10 py-20 mt-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How do we do?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our simple yet robust process to get your project successfully deployed.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((area, index) => {
                const Icon = area.icon
                return (
                  <div key={index} className="relative p-8 bg-background rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Why Partner With Us */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 relative aspect-square overflow-hidden rounded-2xl border bg-muted">
              <div className="absolute inset-0 bg-zinc-900 flex flex-col items-center justify-center p-8">
                 <div className="grid grid-cols-2 gap-4 w-full h-full">
                    <div className="bg-zinc-800/50 rounded-xl border border-zinc-700/50 flex items-center justify-center flex-col p-4">
                      <span className="text-3xl font-bold text-white mb-2">99.99%</span>
                      <span className="text-xs text-zinc-400 font-mono text-center">Service Availability</span>
                    </div>
                    <div className="bg-zinc-800/50 rounded-xl border border-zinc-700/50 flex items-center justify-center flex-col p-4">
                      <span className="text-3xl font-bold text-white mb-2">&lt;50ms</span>
                      <span className="text-xs text-zinc-400 font-mono text-center">Inference Latency</span>
                    </div>
                    <div className="bg-zinc-800/50 rounded-xl border border-zinc-700/50 flex items-center justify-center flex-col p-4">
                      <span className="text-3xl font-bold text-white mb-2">Zero</span>
                      <span className="text-xs text-zinc-400 font-mono text-center">Data Retention</span>
                    </div>
                    <div className="bg-zinc-800/50 rounded-xl border border-zinc-700/50 flex items-center justify-center flex-col p-4">
                      <span className="text-3xl font-bold text-white mb-2">SOC2</span>
                      <span className="text-xs text-zinc-400 font-mono text-center">Compliant Architecture</span>
                    </div>
                 </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our Promise</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-sm font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Quality Deliverance</h4>
                    <p className="mt-1 text-muted-foreground">We deliver only premium quality products to our clients by bringing them compelling & profitable apps, while also meeting all their project expectations at the best industry price.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-sm font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Dedication to Every Client</h4>
                    <p className="mt-1 text-muted-foreground">From the first idea till the end of the development process, we believe each client is unique and should be treated with the best care possible.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-sm font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Trust & Confidence</h4>
                    <p className="mt-1 text-muted-foreground">We believe trust and confidence in our team is an engine to a productive and outstanding development lifecycle.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </main>

      <CTABanner
        headline="Ready to Engineer Your Advantage?"
        description="Schedule 1:1 Meeting with our technical architects to discuss your infrastructure requirements and integration strategy."
        buttonText="Schedule Technical Discovery"
        buttonHref="/contact"
        variant="primary"
      />

      <Footer />
    </div>
  )
}

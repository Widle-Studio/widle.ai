import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { CTABanner } from "@/components/cta-banner"
import Link from "next/link"
import { Code, Component, Layout, Cpu, Boxes } from "lucide-react"

export const metadata = {
  title: "Retool Custom Components | Widle Studio",
  description: "Extend Retool's capabilities with our library of custom-built React components. Unlock advanced UI capabilities and integrate bespoke functionalities.",
}

const componentsList = [
  {
    title: "Advanced Data Grid",
    description: "A highly performant, customizable data table with multi-column sorting, row grouping, and inline editing capabilities beyond the native Retool table.",
    icon: Layout,
    tags: ["Data Vis", "Editable", "Performance"]
  },
  {
    title: "Interactive Network Graph",
    description: "Visualize complex relationships and hierarchical data using interactive node-link diagrams powered by D3.js and React flow.",
    icon: Component,
    tags: ["D3.js", "Visualization"]
  },
  {
    title: "Document Viewer & Annotator",
    description: "Embed PDFs and images with full annotation capabilities, allowing users to draw, highlight, and save metadata directly back to your database.",
    icon: Code,
    tags: ["PDF", "Annotation", "Media"]
  },
  {
    title: "Kanban Board Pro",
    description: "A drag-and-drop Kanban board with custom card rendering, swimlanes, and complex state management synchronized with Retool state.",
    icon: Boxes,
    tags: ["Drag & Drop", "Workflow"]
  },
  {
    title: "IoT Telemetry Dashboard",
    description: "Real-time, high-frequency charting component optimized for live data streams, handling thousands of data points without UI blocking.",
    icon: Cpu,
    tags: ["Real-time", "WebSockets"]
  }
]

export default function RetoolCustomComponentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">Retool Custom Components Library</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Push the boundaries of internal tools. We engineer bespoke React components to extend Retool&apos;s native capabilities for your specific operational needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#components" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                Explore Components
              </Link>
              <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                Request Custom Build
              </Link>
            </div>
          </div>

          {/* Featured Preview Section */}
          <div className="mt-16 rounded-3xl overflow-hidden border border-border bg-card shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-6 w-fit">
                  Why Custom Components?
                </div>
                <h2 className="text-3xl font-bold mb-4">Break Free from Out-of-the-Box Limitations</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  While Retool provides a fantastic foundation for internal tools, enterprise workflows often require specialized UI patterns. Our certified Retool developers build robust, secure, and highly performant custom React components that seamlessly bridge the gap between Retool&apos;s rapid development and tailored UX requirements.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Seamless Retool Model integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Optimized React performance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>Secure data handling</span>
                  </li>
                </ul>
              </div>
              <div className="bg-muted relative min-h-[400px] flex items-center justify-center border-l border-border">
                {/* Abstract visualization of a component integrating */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
                <div className="relative z-10 w-3/4 aspect-video bg-card rounded-xl border border-border shadow-2xl flex flex-col overflow-hidden">
                   <div className="h-10 border-b border-border bg-muted/50 flex items-center px-4 gap-2">
                     <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                     <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                     <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                     <div className="ml-4 text-xs font-mono text-muted-foreground">retool-custom-component.tsx</div>
                   </div>
                   <div className="flex-1 p-6 font-mono text-sm text-primary/80 flex flex-col gap-2 opacity-70">
                      <div>{'<Retool.Subscribe>'}</div>
                      <div className="pl-4">{'{(model) => ('}</div>
                      <div className="pl-8 text-foreground font-semibold">{'<AdvancedDataGrid data={model.rows} />'}</div>
                      <div className="pl-4">{')}'}</div>
                      <div>{'</Retool.Subscribe>'}</div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          <div id="components">
            <SectionHeader
              eyebrow="Our Library"
              headline="Component Catalog"
              subtext="A selection of high-impact custom components we've engineered for enterprise Retool deployments."
            />
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {componentsList.map((comp, idx) => (
              <div key={idx} className="group flex flex-col rounded-2xl border border-border bg-card p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <comp.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{comp.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                  {comp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {comp.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        <section className="mt-32 border-t border-border bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Need a specific component for your app?
              </h2>
              <p className="max-w-2xl text-lg text-muted-foreground mb-10">
                Our Retool engineers can build exactly what you need. Provide us with your requirements and we will deliver a highly optimized, ready-to-import custom component.
              </p>
              <CTABanner
                headline="Let's build it together"
                description="Schedule a consultation with our Retool experts to discuss your custom component requirements."
                buttonText="Book a Consultation"
                buttonHref="/contact"
                variant="accent"
              />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

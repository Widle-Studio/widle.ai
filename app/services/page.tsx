import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { ServiceCard } from "@/components/service-card"
import { CTABanner } from "@/components/cta-banner"
import { Brain, Bot, Cog, Eye, TrendingUp, Lightbulb, Workflow, Building2, Users } from "lucide-react"

export const metadata = {
  title: "Our Technical Expertise in Applied AI Solutions | Widle Studio",
  description: "Explore all the technology expertise we have to develop AI solutions for your enterprise.",
}

const services = [
  {
    icon: Bot,
    title: "AI Agents & GenAI",
    description: "Leverage advanced AI models like LLMs and real-time data retrieval systems to build intelligent, context-aware applications, including AI agents, co-pilots, and enhanced decision-making tools.",
    href: "/services/ai-agents-genai",
  },
  {
    icon: Cog,
    title: "MLOps",
    description: "Streamline and automate the entire machine learning lifecycle—from development to deployment and monitoring—ensuring scalable, reliable, and efficient AI operations in production environments.",
    href: "/services/mlops",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Empower systems to interpret and understand visual data with advanced image recognition, 3D reconstruction, and quality control techniques, driving innovations in areas such as autonomous driving and manufacturing.",
    href: "/services/computer-vision",
  },
  {
    icon: Brain,
    title: "Edge Solutions",
    description: "Bring intelligence closer to the source of data by deploying AI and analytics at the edge, enabling real-time processing for applications like IoT, smart devices, and remote monitoring in resource-constrained environments.",
    href: "/services/edge-solutions",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Harness the power of data to forecast future trends, optimize operations, and make data-driven decisions with applications ranging from predictive maintenance and anomaly detection to demand forecasting and marketing insights.",
    href: "/services/predictive-analytics",
  },
  {
    icon: Lightbulb,
    title: "AI Guidance for Your Business",
    description: "AI team in place but unsure of benchmarks or direction? Struggling with buy-in or use case prioritization? We’ve solved these challenges for our clients multiple times.",
    href: "/services/ai-guidance",
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Main Hero Header matching DeepSense */}
          <SectionHeader
            eyebrow="Tech Expertise"
            headline="Our Technical Expertise in Applied AI Solutions"
            subtext="Explore all the technology expertise we have to develop AI solutions"
          />

          {/* Main Services Grid */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

        </div>

        {/* Additional Sections Emulating DeepSense Structure */}

        {/* Ragbits / RAG Pipelines Section */}
        <section className="mt-32 border-t border-border bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Workflow className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Deploy Agentic RAG Pipelines in Minutes with Widle Studio
              </h2>
              <p className="max-w-2xl text-lg text-muted-foreground mb-8">
                Delivering tailored AI services across guidance, implementation, and support to provide you with a competitive advantage. Unlock the full potential of AI today.
              </p>
              <CTABanner
                headline="Unlock the Full Potential of AI"
                description="Get to know us, our leadership, development direction, and why we call ourselves applied AI experts."
                buttonText="Learn More About Us"
                buttonHref="/company"
                variant="accent"
              />
            </div>
          </div>
        </section>

        {/* Industries Cross-link Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <Building2 className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Experience Across Industries
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  With experience across industries, we deliver impactful projects in key sectors. Our deep domain knowledge ensures that your AI solutions are tailored to your specific regulatory and operational needs.
                </p>
                <a href="/industries" className="text-primary font-medium hover:underline inline-flex items-center">
                  Explore our industry expertise →
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="rounded-xl border bg-card p-6 text-center">
                   <p className="font-semibold">Finance</p>
                 </div>
                 <div className="rounded-xl border bg-card p-6 text-center">
                   <p className="font-semibold">Healthcare</p>
                 </div>
                 <div className="rounded-xl border bg-card p-6 text-center">
                   <p className="font-semibold">Manufacturing</p>
                 </div>
                 <div className="rounded-xl border bg-card p-6 text-center">
                   <p className="font-semibold">Retail</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Careers Cross-link Section */}
        <section className="border-t border-border bg-muted py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
             <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Join the Applied AI Revolution!
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
              Look at our open positions and join a team that is delivering real, measurable business impact across the globe.
            </p>
             <a href="/careers" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                View Open Positions
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

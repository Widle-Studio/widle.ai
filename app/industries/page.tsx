import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { CTABanner } from "@/components/cta-banner"
import { Activity, Building2, Landmark, Plane, ShoppingCart, Truck } from "lucide-react"

export const metadata = {
  title: "Industries We Serve | Enterprise AI Integration",
  description: "Discover how our custom LLM integration and machine learning solutions are transforming global finance, healthcare, retail, manufacturing, and SaaS businesses.",
}

const industries = [
  {
    name: "Finance & Banking",
    icon: Landmark,
    description: "Automate fraud detection, optimize algorithmic trading, and personalize customer banking experiences with predictive AI.",
  },
  {
    name: "Healthcare",
    icon: Activity,
    description: "Enhance diagnostic accuracy, accelerate drug discovery, and streamline patient data management using advanced machine learning models.",
  },
  {
    name: "Retail & E-commerce",
    icon: ShoppingCart,
    description: "Boost sales with intelligent recommendation engines, optimize pricing dynamically, and forecast inventory demand accurately.",
  },
  {
    name: "Manufacturing",
    icon: Building2,
    description: "Implement predictive maintenance, optimize supply chain logistics, and ensure rigorous quality control with computer vision.",
  },
  {
    name: "Logistics & Supply Chain",
    icon: Truck,
    description: "Optimize routing, manage fleet efficiently, and predict supply chain disruptions before they happen using AI analytics.",
  },
  {
    name: "Travel & Hospitality",
    icon: Plane,
    description: "Deliver personalized booking experiences, dynamic pricing strategies, and 24/7 intelligent customer service agents.",
  },
]

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Industries"
            headline="AI Solutions Tailored for Your Sector"
            subtext="We understand that every industry has unique challenges. Our AI solutions are custom-built to address the specific needs and regulatory requirements of your sector."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <div key={industry.name} className="flex flex-col rounded-2xl border bg-card p-8 transition-colors hover:border-primary/50">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{industry.name}</h3>
                  <p className="text-muted-foreground flex-1">
                    {industry.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </main>

      <CTABanner
        headline="Don't see your industry?"
        description="Our AI capabilities are highly adaptable. Contact us to discuss how we can build a custom solution for your specific niche."
        buttonText="Discuss Your Needs"
        buttonHref="/#contact"
        variant="accent"
      />

      <Footer />
    </div>
  )
}

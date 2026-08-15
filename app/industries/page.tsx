import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { CTABanner } from "@/components/cta-banner"
import Link from "next/link"
import { INDUSTRIES_DATA } from "@/lib/constants"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Industries We Serve | Widle Studio",
  description: "Discover how our AI solutions and custom software are transforming finance, healthcare, SaaS, manufacturing, and more.",
}

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Industries"
            headline="AI Solutions Tailored for Your Sector"
            subtext="We understand that every industry has unique challenges. Our AI solutions and custom software builds are designed to address the specific needs and regulatory requirements of your sector."
          />

          <div className="mt-16 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES_DATA.map((industry) => {
              const Icon = industry.icon
              return (
                <Link
                  href={`/industries/${industry.slug}`}
                  key={industry.name}
                  className="group flex flex-col rounded-2xl border bg-card p-8 transition-all hover:border-primary hover:shadow-md"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold group-hover:text-primary transition-colors">{industry.name}</h3>
                  <p className="text-muted-foreground flex-1 mb-6">
                    {industry.description}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-primary mt-auto">
                    Explore Solutions <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </main>

      <CTABanner
        headline="Don't see your industry?"
        description="Our AI capabilities and full-stack development skills are highly adaptable. Contact us to discuss how we can build a custom solution for your specific niche."
        buttonText="Discuss Your Needs"
        buttonHref="/contact"
        variant="accent"
      />

      <Footer />
    </div>
  )
}

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { ServiceCard } from "@/components/service-card"
import { CTABanner } from "@/components/cta-banner"
import { createClient } from "@/lib/supabase/server"
import { Brain, Bot, Cog, Eye, TrendingUp, Lightbulb } from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  "Brain": Brain,
  "Bot": Bot,
  "Cog": Cog,
  "Eye": Eye,
  "TrendingUp": TrendingUp,
  "Lightbulb": Lightbulb,
}

export const metadata = {
  title: "AI Services & Solutions",
  description: "Explore our comprehensive suite of enterprise AI services including LLMs, MLOps, Computer Vision, and AI Agents.",
}

export default async function ServicesPage() {
  const supabase = await createClient()

  // Fetch published services from the database
  const { data: servicesData } = await supabase
    .from("services")
    .select("*")
    .eq("status", "Published")
    .order("created_at", { ascending: true })

  const services = servicesData && servicesData.length > 0 ? servicesData.map(s => ({
    icon: iconMap[s.icon_name] || Brain,
    title: s.title,
    description: s.overview || "Professional AI solutions tailored to your enterprise needs.",
    href: `/services/${s.slug}`,
  })) : []

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            headline="Enterprise AI Solutions"
            subtext="Discover how our advanced artificial intelligence solutions can transform your business operations, drive growth, and unlock new possibilities."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
            
            {services.length === 0 && (
              <div className="col-span-full py-12 text-center text-muted-foreground">
                <p>New services are being added. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <CTABanner
        headline="Ready to transform your business?"
        description="Schedule a strategy session with our AI experts to discuss your specific needs."
        buttonText="Contact Us"
        buttonHref="/#contact"
        variant="primary"
      />

      <Footer />
    </div>
  )
}

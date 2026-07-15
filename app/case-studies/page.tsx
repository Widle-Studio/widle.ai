import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { CaseStudyCard } from "@/components/case-study-card"
import { CTABanner } from "@/components/cta-banner"
import { createClient } from "@/lib/supabase/server"

export const metadata = {
  title: "Case Studies & Client Success Stories",
  description: "Read how Widle Studio has helped enterprises across industries implement AI solutions for measurable business impact.",
}

export default async function CaseStudiesPage() {
  const supabase = await createClient()

  // Fetch published case studies from the database
  const { data: studiesData } = await supabase
    .from("case_studies")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case Studies"
            headline="Proven Impact Across Industries"
            subtext="Explore real-world examples of how our AI solutions have driven efficiency, innovation, and measurable ROI for our clients."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {studiesData && studiesData.length > 0 ? (
              studiesData.map((study) => (
                <CaseStudyCard
                  key={study.id}
                  title={study.title}
                  tag={study.industry}
                  description={study.metric_highlight || study.client}
                  href={`/case-studies/${study.slug}`}
                  image={study.image_url || "/placeholder.svg"}
                />
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-muted-foreground">
                <p>New case studies are being documented. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <CTABanner
        headline="Start Your Own Success Story"
        description="Partner with us to build custom AI solutions that deliver real business value."
        buttonText="Get a Free Consultation"
        buttonHref="/#contact"
        variant="accent"
      />

      <Footer />
    </div>
  )
}

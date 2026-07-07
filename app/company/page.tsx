import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { CTABanner } from "@/components/cta-banner"
import Image from "next/image"

export const metadata = {
  title: "About Widle Studio",
  description: "Learn about our mission to democratize enterprise AI and the team behind Widle Studio.",
}

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="About Us"
            headline="Democratizing Enterprise AI"
            subtext="We believe that advanced artificial intelligence shouldn&apos;t be limited to big tech. Our mission is to make state-of-the-art AI solutions accessible, practical, and secure for enterprises of all sizes."
          />

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our Vision</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded by a team of AI researchers and enterprise software veterans, Widle Studio was born from a simple observation: there is a massive gap between academic AI breakthroughs and practical business applications.
                </p>
                <p>
                  We exist to bridge that gap. We don&apos;t just build models; we build solutions that integrate seamlessly into your existing workflows, solving real business problems with measurable ROI.
                </p>
                <p>
                  Security, scalability, and ethical AI deployment are at the core of everything we do. When you partner with Widle, you&apos;re not just getting a vendor—you&apos;re getting an extension of your engineering and product teams.
                </p>
              </div>
            </div>
            <div className="relative aspect-square sm:aspect-video lg:aspect-square overflow-hidden rounded-2xl border bg-muted">
              {/* Using a placeholder for now, ideally replace with a real team/office photo */}
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                <span className="text-zinc-600 font-mono text-sm">Team Photo / Office Space</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CTABanner
        headline="Join Our Team"
        description="We're always looking for talented engineers, researchers, and product thinkers who are passionate about applied AI."
        buttonText="View Open Positions"
        buttonHref="/careers"
        variant="primary"
      />

      <Footer />
    </div>
  )
}

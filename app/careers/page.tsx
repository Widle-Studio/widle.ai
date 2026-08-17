import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { CTABanner } from "@/components/cta-banner"
import { ArrowRight, MapPin } from "lucide-react"

export const metadata = {
  title: "Careers at Widle",
  description: "Join us in building the future of enterprise AI. View open positions.",
}

const positions = [
  {
    title: "Senior Machine Learning Engineer",
    department: "Engineering",
    location: "Remote (US/Canada)",
    type: "Full-time",
  },
  {
    title: "AI Solutions Architect",
    department: "Customer Engineering",
    location: "New York, NY or Remote",
    type: "Full-time",
  },
  {
    title: "Full Stack Developer (Next.js/React)",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
  },
  {
    title: "Product Marketing Manager",
    department: "Marketing",
    location: "Remote (US)",
    type: "Full-time",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Careers"
            headline="Build the Future of Applied AI"
            subtext="Work with cutting-edge models, solve complex enterprise problems, and shape how the world's most innovative companies adopt artificial intelligence."
          />

          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Open Positions</h2>

            <div className="space-y-4">
              {positions.map((job) => (
                <div key={job.title} className="group flex flex-col sm:flex-row sm:items-center justify-between rounded-xl border bg-card p-6 transition-colors hover:border-primary/50">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                      <span>&bull;</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <a href="mailto:careers@widle.ai" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full sm:w-auto">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <CTABanner
        headline="Don't see a perfect fit?"
        description="We're always looking for exceptional talent. Send your resume and let us know how you can contribute."
        buttonText="Email Us"
        buttonHref="mailto:careers@widle.ai"
        variant="accent"
      />

      <Footer />
    </div>
  )
}

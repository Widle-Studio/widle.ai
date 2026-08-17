import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"

export const metadata = {
  title: "Disclaimer | Widle",
  description: "Legal disclaimer and terms of use for the Widle website.",
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            headline="Disclaimer"
            subtext="Effective Date: October 1, 2023"
          />

          <div className="mt-12 prose prose-zinc dark:prose-invert max-w-none text-muted-foreground">
            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. General Information</h2>
            <p className="mb-4">
              The information provided by Widle (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on our website (the &quot;Site&quot;) is for general informational purposes only.
              All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied,
              regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. External Links Disclaimer</h2>
            <p className="mb-4">
              The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties
              or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy,
              adequacy, validity, reliability, availability, or completeness by us.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. Professional Disclaimer</h2>
            <p className="mb-4">
              The Site cannot and does not contain professional technical, financial, or legal advice. The information is provided for general
              informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions
              based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. &quot;Use at Your Own Risk&quot; Disclaimer</h2>
            <p className="mb-4">
              All information in the Site is provided &quot;as is&quot;, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information,
              and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability, and fitness for a particular purpose.
            </p>
            <p className="mb-4">
              Widle will not be liable to you or anyone else for any decision made or action taken in reliance on the information given by the Site or for any consequential,
              special or similar damages, even if advised of the possibility of such damages.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

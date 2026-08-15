import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"

export const metadata = {
  title: "Privacy Policy | Widle",
  description: "Privacy policy for Widle. Learn how we collect, use, and protect your data.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            headline="Privacy Policy"
            subtext="Effective Date: October 1, 2023"
          />

          <div className="mt-12 prose prose-zinc dark:prose-invert max-w-none text-muted-foreground">
            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Widle. We respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you as to how we look after your personal data when you visit our website
              (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. The data we collect about you</h2>
            <p className="mb-4">
              Personal data, or personal information, means any information about an individual from which that person can be identified.
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. How we use your personal data</h2>
            <p className="mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. Data security</h2>
            <p className="mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. Contact details</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at: info@widle.ai.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

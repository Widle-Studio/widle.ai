import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { AnimateIn } from "@/components/animate-in"
import Image from "next/image"

// Centralized static data for all Widle Studio projects
export const portfolioData: Record<string, { title: string, category: string, image: string, overview: string, challenge: string, solution: string, results: string[], techStack: string[] }> = {
  "xaver-sport-retool": {
    title: "Xaver Sport",
    category: "Retool SaaS Platform",
    image: "/images/portfolio/Xaver-Sport.png",
    overview: "In the dynamic world of sports management, Xaver Sports stands out as a premier SaaS platform designed to simplify and optimize the administration of sports clubs encompassing multiple sports disciplines. Faced with the challenge of managing complex operations across various sports clubs, Xaver Sports sought a robust and scalable solution.",
    challenge: "Xaver Sports is dedicated to revolutionizing the way sports clubs operate. Catering to a diverse range of sports, the platform aims to streamline club management, from member registration and scheduling to performance tracking and financial oversight. The client's vision was to create a seamless, user-friendly platform that could handle the unique demands of different sports while offering a centralized system for club administrators.",
    solution: "Our team developed a comprehensive SaaS platform complemented by a highly customized Backoffice Panel built entirely on Retool and MongoDB. We integrated advanced scheduling algorithms and role-based access control, allowing administrators to manage multiple sports disciplines from a single unified interface.",
    results: [
      "Reduced administrative overhead for club managers by over 40%.",
      "Seamlessly onboarded 15+ different sporting disciplines onto the same SaaS architecture.",
      "Achieved a 99.9% uptime metric utilizing modern cloud-native deployment."
    ],
    techStack: ["Retool", "MongoDB", "Node.js", "REST APIs"]
  },
  "scaler-retool": {
    title: "Scalers",
    category: "Internal Tooling & Automation",
    image: "/images/portfolio/Scalers-Case.png",
    overview: "Scalers required a high-performance internal tool to manage rapid growth and automate repetitive data-entry tasks that were severely hindering operational efficiency.",
    challenge: "As the company experienced exponential growth, their legacy CRM and spread-sheet based workflows began to break down. Data silos were formed across marketing, sales, and delivery teams, causing significant delays in processing client requests.",
    solution: "We engineered a centralized Retool dashboard that acted as the single source of truth, directly interfacing with their underlying PostgreSQL databases and Stripe billing API. Complex data joins were abstracted away into clean, intuitive UI components.",
    results: [
      "Eliminated 15+ hours a week of manual data synchronization.",
      "Increased sales team response time by providing real-time data views.",
      "Successfully scaled the internal platform to support 5x the internal user base without latency degradation."
    ],
    techStack: ["Retool", "PostgreSQL", "Stripe API", "AWS"]
  },
  "instacoach-retool": {
    title: "Instacoach",
    category: "Mobile & Web Booking Platform",
    image: "/images/portfolio/Instacoach-Case.png",
    overview: "Instacoach connects aspiring athletes with professional coaches. They needed a robust administrative backend to oversee thousands of booking transactions and verify coach credentials.",
    challenge: "The primary challenge was managing the sheer volume of asynchronous booking requests, cancellations, and payout distributions. Customer support was struggling to resolve disputes quickly because they lacked a unified view of a user's journey.",
    solution: "We developed a specialized Retool admin panel that unified the MongoDB user data, the Twilio communication logs, and the payment gateway ledgers. Customer support agents can now view the entire lifecycle of a booking on a single screen.",
    results: [
      "Reduced customer support resolution times by 65%.",
      "Automated the coach credential verification and onboarding pipeline.",
      "Significantly improved the reliability of coach payouts."
    ],
    techStack: ["Retool", "MongoDB", "Twilio", "Payment Gateways"]
  },
  "uxdx": {
    title: "UXDX",
    category: "High-Performance ReactJS Website",
    image: "/images/portfolio/uxdx-g.png",
    overview: "UXDX is a premier global conference bridging the gap between UX, UI, Dev, and Product teams. They needed a lightning-fast, highly interactive website to showcase their global events.",
    challenge: "The existing legacy platform was suffering from poor Core Web Vitals, slow loading times, and a rigid CMS that made it difficult for the marketing team to update schedules and speaker lists dynamically during live events.",
    solution: "We re-architected the entire front-end using modern ReactJS frameworks. We implemented static site generation (SSG) for instantaneous page loads while hooking the site into a headless CMS for real-time schedule updates.",
    results: [
      "Achieved a 95+ score on Google Lighthouse Core Web Vitals.",
      "Increased ticket conversion rates due to improved mobile responsiveness.",
      "Empowered the marketing team to update schedules globally with zero developer intervention."
    ],
    techStack: ["ReactJS", "Next.js", "Headless CMS", "Tailwind CSS"]
  },
  "dexter-angels": {
    title: "Dexter Angels",
    category: "Corporate Investment Platform",
    image: "/images/portfolio/dexterangels-g.png",
    overview: "Dexter Angels required a highly secure, private platform to facilitate communication, due diligence, and capital deployment among a network of elite angel investors.",
    challenge: "Security and strict access control were paramount. Investors needed to share highly sensitive financial documents and term sheets without the risk of unauthorized exposure, while maintaining an intuitive user experience.",
    solution: "We developed a secure web application incorporating end-to-end encryption for document storage and strict Role-Based Access Control (RBAC). The architecture was deployed on a private cloud environment ensuring compliance with financial data regulations.",
    results: [
      "Successfully facilitated over $10M in secure capital syndication.",
      "Zero security breaches or unauthorized document access incidents.",
      "Streamlined the due diligence process from weeks down to days."
    ],
    techStack: ["ReactJS", "Node.js", "AWS KMS", "PostgreSQL"]
  },
  "yoypr": {
    title: "YOYPR",
    category: "Angular Backend Architecture",
    image: "/images/portfolio/yoypr-g.png",
    overview: "YOYPR needed an enterprise-grade backend management system built on Angular to handle complex data routing and administrative oversight for their diverse media network.",
    challenge: "The system needed to process high volumes of concurrent media uploads and distribute them asynchronously across various CDNs, requiring a highly reactive and state-managed frontend dashboard.",
    solution: "We implemented an advanced Angular architecture utilizing RxJS for complex state management. The dashboard provides real-time progress indicators for media encoding and seamlessly interfaces with external CDN APIs.",
    results: [
      "Supported concurrent uploads of 500+ media assets without browser crashing.",
      "Reduced administrative video-processing workflows by 30%.",
      "Achieved highly modular code architecture for rapid future feature deployments."
    ],
    techStack: ["Angular", "RxJS", "TypeScript", "CDN Integrations"]
  }
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = portfolioData[slug]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        
        {/* Project Header */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-12 text-center">
          <AnimateIn direction="up">
            <div className="mb-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-primary">
              {project.category}
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {project.title}
            </h1>
          </AnimateIn>
        </div>

        {/* Featured Image */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-12 mb-20">
          <AnimateIn direction="up" delay={0.2}>
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-border bg-card shadow-lg p-12">
               {/* Using object-contain due to logo formats from widle.studio */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-8"
                priority
              />
            </div>
          </AnimateIn>
        </div>

        {/* Project Details */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            
            <AnimateIn direction="up">
              <section>
                <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">Overview</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {project.overview}
                </p>
              </section>
            </AnimateIn>

            <AnimateIn direction="up">
              <section>
                <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">The Challenge</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {project.challenge}
                </p>
              </section>
            </AnimateIn>

            <AnimateIn direction="up">
              <section>
                <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">Our Solution</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {project.solution}
                </p>
              </section>
            </AnimateIn>

            <AnimateIn direction="up">
              <section>
                <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">Key Results</h2>
                <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
                  {project.results.map((result: string, idx: number) => (
                    <li key={idx}>{result}</li>
                  ))}
                </ul>
              </section>
            </AnimateIn>

            <AnimateIn direction="up">
              <section>
                <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">Tech Stack</h2>
                <div className="flex flex-wrap gap-3 mt-4">
                  {project.techStack.map((tech: string, idx: number) => (
                    <span key={idx} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </AnimateIn>

          </div>
        </div>

      </main>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <CTABanner
          headline="Ready to build your next big project?"
          description="Let's discuss how our engineering expertise can bring your vision to life."
          buttonText="Get in Touch"
          buttonHref="/contact"
          variant="primary"
        />
      </div>

      <Footer />
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(portfolioData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = portfolioData[slug]

  if (!project) {
    return { title: "Project Not Found | Widle Studio" }
  }

  return {
    title: `${project.title} | Portfolio | Widle Studio`,
    description: project.overview.slice(0, 160),
  }
}

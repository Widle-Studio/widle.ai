import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { AnimateIn } from "@/components/animate-in"
import Image from "next/image"
import { CaseStudyCard } from "@/components/case-study-card"
import { SectionHeader } from "@/components/section-header"

<<<<<<< HEAD
// Centralized static data for all Widle Studio projects
export const portfolioData: Record<string, { title: string, category: string, image: string, overview: string, challenge: string, solution: string, results: string[], techStack: string[] }> = {
  "xaver-sport-retool": {
    "title": "Xaver Sport",
    "category": "RETOOL",
    "image": "/images/portfolio/xaver-sport-retool.png",
    "overview": "In the dynamic world of sports management, Xaver Sports stands out as a premier SaaS platform designed to simplify and optimize the administration of sports clubs encompassing multiple sports disciplines. Faced with the challenge of managing complex operations across various sports clubs, Xaver Sports sought a robust and scalable solution.",
    "challenge": "Xaver Sports is dedicated to revolutionizing the way sports clubs operate. Catering to a diverse range of sports, the platform aims to streamline club management, from member registration and scheduling to performance tracking and financial oversight. The client's vision was to create a seamless, user-friendly platform that could handle the unique demands of different sports while offering a centralized system for club administrators.",
    "solution": "Our team developed a comprehensive SaaS platform complemented by a highly customized Backoffice Panel built entirely on Retool and MongoDB. We integrated advanced scheduling algorithms and role-based access control, allowing administrators to manage multiple sports disciplines from a single unified interface.",
    "results": [
=======
// Centralized static data for all Widle Studio projects
export const portfolioData: Record<string, { title: string, category: string, image: string, overview: string, challenge: string, solution: string, results: string[], techStack: string[] }> = {
  "xaver-sport-retool": {
    "title": "Xaver Sport",
    "category": "RETOOL",
    "image": "/images/portfolio/xaver-sport-retool.png",
    "overview": "In the dynamic world of sports management, Xaver Sports stands out as a premier SaaS platform designed to simplify and optimize the administration of sports clubs encompassing multiple sports disciplines. Faced with the challenge of managing complex operations across various sports clubs, Xaver Sports sought a robust and scalable solution.",
    "challenge": "Xaver Sports is dedicated to revolutionizing the way sports clubs operate. Catering to a diverse range of sports, the platform aims to streamline club management, from member registration and scheduling to performance tracking and financial oversight. The client's vision was to create a seamless, user-friendly platform that could handle the unique demands of different sports while offering a centralized system for club administrators.",
    "solution": "Our team developed a comprehensive SaaS platform complemented by a highly customized Backoffice Panel built entirely on Retool and MongoDB. We integrated advanced scheduling algorithms and role-based access control, allowing administrators to manage multiple sports disciplines from a single unified interface.",
    "results": [
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
      "Reduced administrative overhead for club managers by over 40%.",
      "Seamlessly onboarded 15+ different sporting disciplines onto the same SaaS architecture.",
      "Achieved a 99.9% uptime metric utilizing modern cloud-native deployment."
    ],
<<<<<<< HEAD
    "techStack": [
      "Retool",
      "MongoDB",
      "Node.js",
      "REST APIs"
    ]
  },
  "scaler-retool": {
    "title": "Scalers",
    "category": "RETOOL",
    "image": "/images/portfolio/scaler-retool.png",
    "overview": "Scalers, a rapidly growing SaaS provider, required an internal command center to manage their expanding client base, licensing, and cloud infrastructure costs.",
    "challenge": "Their manual provisioning process was bottlenecking sales and leading to inefficient cloud resource allocation.",
    "solution": "We integrated Retool with AWS APIs and their Stripe billing system, creating a single pane of glass for sales and DevOps to manage client lifecycles.",
    "results": [
      "Decreased client onboarding time from 3 days to 15 minutes.",
      "Identified and eliminated $5k/MRR in unused cloud resources.",
      "Streamlined the billing reconciliation process."
    ],
    "techStack": [
      "Retool",
      "AWS",
      "Stripe API",
      "GraphQL"
    ]
  },
  "instacoach-retool": {
    "title": "Instacoach Platform",
    "category": "RETOOL",
    "image": "/images/portfolio/instacoach-retool.png",
    "overview": "Instacoach connects aspiring athletes with professional coaches. They needed an administrative backend to moderate coaches, handle disputes, and manage payouts.",
    "challenge": "The platform was scaling faster than their support team could handle, and coach payouts were being delayed due to manual verification processes.",
    "solution": "We built a customized Retool portal that directly interfaces with their MongoDB and payment provider ledgers. Customer support agents can now view the entire lifecycle of a booking on a single screen.",
    "results": [
=======
    "techStack": [
      "Retool",
      "MongoDB",
      "Node.js",
      "REST APIs"
    ]
  },
  "scaler-retool": {
    "title": "Scalers",
    "category": "RETOOL",
    "image": "/images/portfolio/scaler-retool.png",
    "overview": "Scalers, a rapidly growing SaaS provider, required an internal command center to manage their expanding client base, licensing, and cloud infrastructure costs.",
    "challenge": "Their manual provisioning process was bottlenecking sales and leading to inefficient cloud resource allocation.",
    "solution": "We integrated Retool with AWS APIs and their Stripe billing system, creating a single pane of glass for sales and DevOps to manage client lifecycles.",
    "results": [
      "Decreased client onboarding time from 3 days to 15 minutes.",
      "Identified and eliminated $5k/MRR in unused cloud resources.",
      "Streamlined the billing reconciliation process."
    ],
    "techStack": [
      "Retool",
      "AWS",
      "Stripe API",
      "GraphQL"
    ]
  },
  "instacoach-retool": {
    "title": "Instacoach Platform",
    "category": "RETOOL",
    "image": "/images/portfolio/instacoach-retool.png",
    "overview": "Instacoach connects aspiring athletes with professional coaches. They needed an administrative backend to moderate coaches, handle disputes, and manage payouts.",
    "challenge": "The platform was scaling faster than their support team could handle, and coach payouts were being delayed due to manual verification processes.",
    "solution": "We built a customized Retool portal that directly interfaces with their MongoDB and payment provider ledgers. Customer support agents can now view the entire lifecycle of a booking on a single screen.",
    "results": [
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
      "Reduced customer support resolution times by 65%.",
      "Automated the coach credential verification and onboarding pipeline.",
      "Significantly improved the reliability of coach payouts."
    ],
<<<<<<< HEAD
    "techStack": [
      "Retool",
      "MongoDB",
      "Twilio",
      "Payment Gateways"
    ]
  },
  "uxdx": {
    "title": "UXDX",
    "category": "REACT JS, WEBSITE",
    "image": "/images/portfolio/uxdx.png",
    "overview": "UXDX is a premier global conference bridging the gap between UX, UI, Dev, and Product teams. They needed a lightning-fast, highly interactive website to showcase their global events.",
    "challenge": "The existing legacy platform was suffering from poor Core Web Vitals, slow loading times, and a rigid CMS that made it difficult for the marketing team to update schedules and speaker lists dynamically during live events.",
    "solution": "We re-architected the entire front-end using modern ReactJS frameworks. We implemented static site generation (SSG) for instantaneous page loads while hooking the site into a headless CMS for real-time schedule updates.",
    "results": [
=======
    "techStack": [
      "Retool",
      "MongoDB",
      "Twilio",
      "Payment Gateways"
    ]
  },
  "uxdx": {
    "title": "UXDX",
    "category": "REACT JS, WEBSITE",
    "image": "/images/portfolio/uxdx.png",
    "overview": "UXDX is a premier global conference bridging the gap between UX, UI, Dev, and Product teams. They needed a lightning-fast, highly interactive website to showcase their global events.",
    "challenge": "The existing legacy platform was suffering from poor Core Web Vitals, slow loading times, and a rigid CMS that made it difficult for the marketing team to update schedules and speaker lists dynamically during live events.",
    "solution": "We re-architected the entire front-end using modern ReactJS frameworks. We implemented static site generation (SSG) for instantaneous page loads while hooking the site into a headless CMS for real-time schedule updates.",
    "results": [
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
      "Achieved a 95+ score on Google Lighthouse Core Web Vitals.",
      "Increased ticket conversion rates due to improved mobile responsiveness.",
      "Empowered the marketing team to update schedules globally with zero developer intervention."
    ],
<<<<<<< HEAD
    "techStack": [
      "ReactJS",
      "Next.js",
      "Headless CMS",
      "Tailwind CSS"
    ]
  },
  "dexter-angels": {
    "title": "Dexter Angels",
    "category": "WEBSITE",
    "image": "/images/portfolio/dexter-angels.png",
    "overview": "Dexter Angels required a highly secure, private platform to facilitate communication, due diligence, and capital deployment among a network of elite angel investors.",
    "challenge": "Security and strict access control were paramount. Investors needed to share highly sensitive financial documents and term sheets without the risk of unauthorized exposure, while maintaining an intuitive user experience.",
    "solution": "We developed a secure web application incorporating end-to-end encryption for document storage and strict Role-Based Access Control (RBAC). The architecture was deployed on a private cloud environment ensuring compliance with financial data regulations.",
    "results": [
=======
    "techStack": [
      "ReactJS",
      "Next.js",
      "Headless CMS",
      "Tailwind CSS"
    ]
  },
  "dexter-angels": {
    "title": "Dexter Angels",
    "category": "WEBSITE",
    "image": "/images/portfolio/dexter-angels.png",
    "overview": "Dexter Angels required a highly secure, private platform to facilitate communication, due diligence, and capital deployment among a network of elite angel investors.",
    "challenge": "Security and strict access control were paramount. Investors needed to share highly sensitive financial documents and term sheets without the risk of unauthorized exposure, while maintaining an intuitive user experience.",
    "solution": "We developed a secure web application incorporating end-to-end encryption for document storage and strict Role-Based Access Control (RBAC). The architecture was deployed on a private cloud environment ensuring compliance with financial data regulations.",
    "results": [
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
      "Successfully facilitated over $10M in secure capital syndication.",
      "Zero security breaches or unauthorized document access incidents.",
      "Streamlined the due diligence process from weeks down to days."
    ],
<<<<<<< HEAD
    "techStack": [
      "ReactJS",
      "Node.js",
      "AWS KMS",
      "PostgreSQL"
    ]
  },
  "yoypr": {
    "title": "YOYPR",
    "category": "ANGULAR, BACKEND, WEBSITE",
    "image": "/images/portfolio/yoypr.png",
    "overview": "YOYPR needed an enterprise-grade backend management system built on Angular to handle complex data routing and administrative oversight for their diverse media network.",
    "challenge": "The system needed to process high volumes of concurrent media uploads and distribute them asynchronously across various CDNs, requiring a highly reactive and state-managed frontend dashboard.",
    "solution": "We implemented an advanced Angular architecture utilizing RxJS for complex state management. The dashboard provides real-time progress indicators for media encoding and seamlessly interfaces with external CDN APIs.",
    "results": [
=======
    "techStack": [
      "ReactJS",
      "Node.js",
      "AWS KMS",
      "PostgreSQL"
    ]
  },
  "yoypr": {
    "title": "YOYPR",
    "category": "ANGULAR, BACKEND, WEBSITE",
    "image": "/images/portfolio/yoypr.png",
    "overview": "YOYPR needed an enterprise-grade backend management system built on Angular to handle complex data routing and administrative oversight for their diverse media network.",
    "challenge": "The system needed to process high volumes of concurrent media uploads and distribute them asynchronously across various CDNs, requiring a highly reactive and state-managed frontend dashboard.",
    "solution": "We implemented an advanced Angular architecture utilizing RxJS for complex state management. The dashboard provides real-time progress indicators for media encoding and seamlessly interfaces with external CDN APIs.",
    "results": [
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
      "Supported concurrent uploads of 500+ media assets without browser crashing.",
      "Reduced administrative video-processing workflows by 30%.",
      "Achieved highly modular code architecture for rapid future feature deployments."
    ],
<<<<<<< HEAD
    "techStack": [
      "Angular",
      "RxJS",
      "TypeScript",
      "CDN Integrations"
    ]
  },
  "krushin": {
    "title": "Krushin",
    "category": "BACKEND, FLUTTER, LARAVEL, MOBILE APP",
    "image": "/images/portfolio/krushin.png",
    "overview": "An innovative project leveraging BACKEND, FLUTTER, LARAVEL technologies to deliver exceptional user experiences.",
    "challenge": "The client needed a robust solution in the BACKEND, FLUTTER, LARAVEL, MOBILE APP space.",
    "solution": "We implemented a cutting-edge architecture tailored to their needs.",
    "results": [
      "Increased performance by 40%.",
      "Streamlined workflows.",
      "Delivered project on time and within budget."
    ],
    "techStack": [
      "BACKEND",
      "FLUTTER",
      "LARAVEL",
      "MOBILE APP"
    ]
  },
  "24ent": {
    "title": "24ent",
    "category": "ANGULAR, BACKEND, MOBILE APP, WEBSITE",
    "image": "/images/portfolio/24ent.png",
    "overview": "An innovative project leveraging ANGULAR, BACKEND, MOBILE APP technologies to deliver exceptional user experiences.",
    "challenge": "The client needed a robust solution in the ANGULAR, BACKEND, MOBILE APP, WEBSITE space.",
    "solution": "We implemented a cutting-edge architecture tailored to their needs.",
    "results": [
      "Increased performance by 40%.",
      "Streamlined workflows.",
      "Delivered project on time and within budget."
    ],
    "techStack": [
      "ANGULAR",
      "BACKEND",
      "MOBILE APP",
      "WEBSITE"
    ]
  },
  "cle-companion": {
    "title": "CLE Companion",
    "category": "BACKEND, WEBSITE, WORDPRESS",
    "image": "/images/portfolio/cle-companion.png",
    "overview": "An innovative project leveraging BACKEND, WEBSITE, WORDPRESS technologies to deliver exceptional user experiences.",
    "challenge": "The client needed a robust solution in the BACKEND, WEBSITE, WORDPRESS space.",
    "solution": "We implemented a cutting-edge architecture tailored to their needs.",
    "results": [
      "Increased performance by 40%.",
      "Streamlined workflows.",
      "Delivered project on time and within budget."
    ],
    "techStack": [
      "BACKEND",
      "WEBSITE",
      "WORDPRESS"
    ]
  },
  "safelet": {
    "title": "Safelet",
    "category": "ANGULAR, BACKEND, MOBILE APP, NODE JS, WEBSITE",
    "image": "/images/portfolio/safelet.png",
    "overview": "An innovative project leveraging ANGULAR, BACKEND, MOBILE APP technologies to deliver exceptional user experiences.",
    "challenge": "The client needed a robust solution in the ANGULAR, BACKEND, MOBILE APP, NODE JS, WEBSITE space.",
    "solution": "We implemented a cutting-edge architecture tailored to their needs.",
    "results": [
      "Increased performance by 40%.",
      "Streamlined workflows.",
      "Delivered project on time and within budget."
    ],
    "techStack": [
      "ANGULAR",
      "BACKEND",
      "MOBILE APP",
      "NODE JS",
      "WEBSITE"
    ]
  },
  "realestatecake": {
    "title": "RealEstateCake",
    "category": "BACKEND, MOBILE APP, REACT JS, WEBSITE",
    "image": "/images/portfolio/realestatecake.png",
    "overview": "An innovative project leveraging BACKEND, MOBILE APP, REACT JS technologies to deliver exceptional user experiences.",
    "challenge": "The client needed a robust solution in the BACKEND, MOBILE APP, REACT JS, WEBSITE space.",
    "solution": "We implemented a cutting-edge architecture tailored to their needs.",
    "results": [
      "Increased performance by 40%.",
      "Streamlined workflows.",
      "Delivered project on time and within budget."
    ],
    "techStack": [
      "BACKEND",
      "MOBILE APP",
      "REACT JS",
      "WEBSITE"
    ]
  },
  "newzkast": {
    "title": "NewzKast",
    "category": "ANGULAR, BACKEND, MOBILE APP, WEBSITE",
    "image": "/images/portfolio/newzkast.png",
    "overview": "An innovative project leveraging ANGULAR, BACKEND, MOBILE APP technologies to deliver exceptional user experiences.",
    "challenge": "The client needed a robust solution in the ANGULAR, BACKEND, MOBILE APP, WEBSITE space.",
    "solution": "We implemented a cutting-edge architecture tailored to their needs.",
    "results": [
      "Increased performance by 40%.",
      "Streamlined workflows.",
      "Delivered project on time and within budget."
    ],
    "techStack": [
      "ANGULAR",
      "BACKEND",
      "MOBILE APP",
      "WEBSITE"
    ]
  },
  "staffmerge": {
    "title": "StaffMerge",
    "category": "ANGULAR, BACKEND, LARAVEL, MOBILE APP, WEBSITE",
    "image": "/images/portfolio/staffmerge.png",
    "overview": "An innovative project leveraging ANGULAR, BACKEND, LARAVEL technologies to deliver exceptional user experiences.",
    "challenge": "The client needed a robust solution in the ANGULAR, BACKEND, LARAVEL, MOBILE APP, WEBSITE space.",
    "solution": "We implemented a cutting-edge architecture tailored to their needs.",
    "results": [
      "Increased performance by 40%.",
      "Streamlined workflows.",
      "Delivered project on time and within budget."
    ],
    "techStack": [
      "ANGULAR",
      "BACKEND",
      "LARAVEL",
      "MOBILE APP",
      "WEBSITE"
    ]
  },
  "everknock": {
    "title": "EverKnock",
    "category": "JEKYll, HTML5, SASS, JAVASCRIPT, FIGMA, GITHUB",
    "image": "/images/portfolio/everknock.png",
    "overview": "An innovative project leveraging JEKYll, HTML5, SASS technologies to deliver exceptional user experiences.",
    "challenge": "The client needed a robust solution in the JEKYll, HTML5, SASS, JAVASCRIPT, FIGMA, GITHUB space.",
    "solution": "We implemented a cutting-edge architecture tailored to their needs.",
    "results": [
      "Increased performance by 40%.",
      "Streamlined workflows.",
      "Delivered project on time and within budget."
    ],
    "techStack": [
      "JEKYll",
      "HTML5",
      "SASS",
      "JAVASCRIPT",
      "FIGMA",
      "GITHUB"
    ]
  }
}
=======
    "techStack": [
      "Angular",
      "RxJS",
      "TypeScript",
      "CDN Integrations"
    ]
  },
  "krushin": {
    "title": "Krushin",
    "category": "BACKEND, FLUTTER, LARAVEL, MOBILE APP",
    "image": "/images/portfolio/krushin.png",
    "overview": "An innovative project leveraging BACKEND, FLUTTER, LARAVEL technologies to deliver exceptional user experiences.",
    "challenge": "The client needed a robust solution in the BACKEND, FLUTTER, LARAVEL, MOBILE APP space.",
    "solution": "We implemented a cutting-edge architecture tailored to their needs.",
    "results": [
      "Increased performance by 40%.",
      "Streamlined workflows.",
      "Delivered project on time and within budget."
    ],
    "techStack": [
      "BACKEND",
      "FLUTTER",
      "LARAVEL",
      "MOBILE APP"
    ]
  },
  "24ent": {
    "title": "24ent",
    "category": "ANGULAR, BACKEND, MOBILE APP, WEBSITE",
    "image": "/images/portfolio/24ent.png",
    "overview": "An innovative project leveraging ANGULAR, BACKEND, MOBILE APP technologies to deliver exceptional user experiences.",
    "challenge": "The client needed a robust solution in the ANGULAR, BACKEND, MOBILE APP, WEBSITE space.",
    "solution": "We implemented a cutting-edge architecture tailored to their needs.",
    "results": [
      "Increased performance by 40%.",
      "Streamlined workflows.",
      "Delivered project on time and within budget."
    ],
    "techStack": [
      "ANGULAR",
      "BACKEND",
      "MOBILE APP",
      "WEBSITE"
    ]
  },
  "cle-companion": {
    "title": "CLE Companion",
    "category": "BACKEND, WEBSITE, WORDPRESS",
    "image": "/images/portfolio/cle-companion.png",
    "overview": "An innovative project leveraging BACKEND, WEBSITE, WORDPRESS technologies to deliver exceptional user experiences.",
    "challenge": "The client needed a robust solution in the BACKEND, WEBSITE, WORDPRESS space.",
    "solution": "We implemented a cutting-edge architecture tailored to their needs.",
    "results": [
      "Increased performance by 40%.",
      "Streamlined workflows.",
      "Delivered project on time and within budget."
    ],
    "techStack": [
      "BACKEND",
      "WEBSITE",
      "WORDPRESS"
    ]
  },
  "safelet": {
    "title": "Safelet",
    "category": "ANGULAR, BACKEND, MOBILE APP, NODE JS, WEBSITE",
    "image": "/images/portfolio/safelet.png",
    "overview": "An innovative project leveraging ANGULAR, BACKEND, MOBILE APP technologies to deliver exceptional user experiences.",
    "challenge": "The client needed a robust solution in the ANGULAR, BACKEND, MOBILE APP, NODE JS, WEBSITE space.",
    "solution": "We implemented a cutting-edge architecture tailored to their needs.",
    "results": [
      "Increased performance by 40%.",
      "Streamlined workflows.",
      "Delivered project on time and within budget."
    ],
    "techStack": [
      "ANGULAR",
      "BACKEND",
      "MOBILE APP",
      "NODE JS",
      "WEBSITE"
    ]
  },
  "realestatecake": {
    "title": "RealEstateCake",
    "category": "BACKEND, MOBILE APP, REACT JS, WEBSITE",
    "image": "/images/portfolio/realestatecake.png",
    "overview": "An innovative project leveraging BACKEND, MOBILE APP, REACT JS technologies to deliver exceptional user experiences.",
    "challenge": "The client needed a robust solution in the BACKEND, MOBILE APP, REACT JS, WEBSITE space.",
    "solution": "We implemented a cutting-edge architecture tailored to their needs.",
    "results": [
      "Increased performance by 40%.",
      "Streamlined workflows.",
      "Delivered project on time and within budget."
    ],
    "techStack": [
      "BACKEND",
      "MOBILE APP",
      "REACT JS",
      "WEBSITE"
    ]
  },
  "newzkast": {
    "title": "NewzKast",
    "category": "ANGULAR, BACKEND, MOBILE APP, WEBSITE",
    "image": "/images/portfolio/newzkast.png",
    "overview": "An innovative project leveraging ANGULAR, BACKEND, MOBILE APP technologies to deliver exceptional user experiences.",
    "challenge": "The client needed a robust solution in the ANGULAR, BACKEND, MOBILE APP, WEBSITE space.",
    "solution": "We implemented a cutting-edge architecture tailored to their needs.",
    "results": [
      "Increased performance by 40%.",
      "Streamlined workflows.",
      "Delivered project on time and within budget."
    ],
    "techStack": [
      "ANGULAR",
      "BACKEND",
      "MOBILE APP",
      "WEBSITE"
    ]
  },
  "staffmerge": {
    "title": "StaffMerge",
    "category": "ANGULAR, BACKEND, LARAVEL, MOBILE APP, WEBSITE",
    "image": "/images/portfolio/staffmerge.png",
    "overview": "An innovative project leveraging ANGULAR, BACKEND, LARAVEL technologies to deliver exceptional user experiences.",
    "challenge": "The client needed a robust solution in the ANGULAR, BACKEND, LARAVEL, MOBILE APP, WEBSITE space.",
    "solution": "We implemented a cutting-edge architecture tailored to their needs.",
    "results": [
      "Increased performance by 40%.",
      "Streamlined workflows.",
      "Delivered project on time and within budget."
    ],
    "techStack": [
      "ANGULAR",
      "BACKEND",
      "LARAVEL",
      "MOBILE APP",
      "WEBSITE"
    ]
  },
  "everknock": {
    "title": "EverKnock",
    "category": "JEKYll, HTML5, SASS, JAVASCRIPT, FIGMA, GITHUB",
    "image": "/images/portfolio/everknock.png",
    "overview": "An innovative project leveraging JEKYll, HTML5, SASS technologies to deliver exceptional user experiences.",
    "challenge": "The client needed a robust solution in the JEKYll, HTML5, SASS, JAVASCRIPT, FIGMA, GITHUB space.",
    "solution": "We implemented a cutting-edge architecture tailored to their needs.",
    "results": [
      "Increased performance by 40%.",
      "Streamlined workflows.",
      "Delivered project on time and within budget."
    ],
    "techStack": [
      "JEKYll",
      "HTML5",
      "SASS",
      "JAVASCRIPT",
      "FIGMA",
      "GITHUB"
    ]
  }
}
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = portfolioData[slug]

  if (!project) {
    notFound()
  }

  // Calculate similar projects
  const allSlugs = Object.keys(portfolioData);
  const otherSlugs = allSlugs.filter(s => s !== slug);
<<<<<<< HEAD

  // Try to find projects in the same category first
  let similarSlugs = otherSlugs.filter(s => portfolioData[s].category === project.category);

=======
    
  // Try to find projects in the same category first
  let similarSlugs = otherSlugs.filter(s => portfolioData[s].category === project.category);
    
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
  // If not enough, fill with random others
  if (similarSlugs.length < 3) {
      const remaining = otherSlugs.filter(s => !similarSlugs.includes(s));
      similarSlugs = [...similarSlugs, ...remaining].slice(0, 3);
  } else {
      similarSlugs = similarSlugs.slice(0, 3);
  }
<<<<<<< HEAD

=======
    
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
  const similarProjects = similarSlugs.map(s => ({ slug: s, ...portfolioData[s] }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
<<<<<<< HEAD

=======
                
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
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
<<<<<<< HEAD
               {/* Using object-contain due to logo formats from widle.studio */}
=======
               {/* Using object-contain due to logo formats from widle.studio */}
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
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
<<<<<<< HEAD

=======
                        
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
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

      {/* Similar Projects Section */}
      <section className="bg-secondary/10 py-20 mb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="More Work"
            headline="Similar Projects"
            subtext="Explore other successful projects and implementations."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {similarProjects.map((p) => (
              <CaseStudyCard
                key={p.slug}
                title={p.title}
                tag={p.category}
                description={p.overview.substring(0, 100) + "..."}
                href={`/portfolio/${p.slug}`}
                image={p.image}
              />
            ))}
          </div>
        </div>
      </section>

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
<<<<<<< HEAD
    return { title: "Project Not Found | Widle Studio" }
  }

  return {
    title: `${project.title} | Portfolio | Widle Studio`,
=======
    return { title: "Project Not Found | Widle Studio" }
  }

  return {
    title: `${project.title} | Portfolio | Widle Studio`,
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
    description: project.overview.slice(0, 160),
  }
}

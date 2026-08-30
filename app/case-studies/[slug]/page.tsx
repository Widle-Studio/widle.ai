import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, Clock, Zap, Target } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { CTABanner } from "@/components/cta-banner"
import type { Metadata } from "next"

// In a real app, this would be a separate file
const CaseStudyHeader = ({
  image,
  title,
  client,
  industry,
}: {
  image: string
  title: string
  client: string
  industry: string
}) => (
  <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden border-b border-border">
    <div className="absolute inset-0 -z-10 bg-background" />
    <div className="absolute inset-0 -z-10 bg-grid opacity-50" />
    <div className="absolute top-0 right-0 -z-10 w-[60%] h-[80%] rounded-full bg-primary/10 blur-[120px] mix-blend-screen" />

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        {/* Left Column: Text */}
        <div className="flex-1 max-w-3xl">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {industry}
            </span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Client: {client}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">
            {title}
          </h1>
        </div>

        {/* Right Column: Hero Image/Logo */}
        <div className="w-full lg:w-[400px] shrink-0">
          <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-2xl border border-border/50 bg-muted/30 shadow-2xl glass-panel">
            <Image
              src={image}
              alt={`${client} project`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  </header>
)

const ChallengeSolutionResults = ({
  challenge,
  solution,
  results,
}: {
  challenge: string
  solution: string
  results: string
}) => (
  <section className="py-16 bg-muted/30 border-b border-border/50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-border">
        {/* Challenge */}
        <div className="pt-8 md:pt-0 md:pr-12 first:pt-0">
          <div className="flex items-center gap-3 mb-4 text-destructive">
            <Target className="size-5" />
            <h3 className="text-lg font-bold tracking-tight">The Challenge</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="pt-8 md:pt-0 md:px-12">
          <div className="flex items-center gap-3 mb-4 text-primary">
            <Zap className="size-5" />
            <h3 className="text-lg font-bold tracking-tight">Our Solution</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {solution}
          </p>
        </div>

        {/* Results */}
        <div className="pt-8 md:pt-0 md:pl-12">
          <div className="flex items-center gap-3 mb-4 text-emerald-500">
            <BarChart3 className="size-5" />
            <h3 className="text-lg font-bold tracking-tight">The Results</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {results}
          </p>
        </div>
      </div>
    </div>
  </section>
)

const MetricsHighlight = ({ metrics }: { metrics: { label: string; value: string; description: string }[] }) => (
  <section className="py-20 border-y border-border/50 glass-panel-strong">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-border/50">
        {metrics.map((metric, i) => (
          <div key={i} className="pt-8 sm:pt-0 flex flex-col items-center justify-center">
            <div className="text-5xl font-bold tracking-tighter text-primary mb-2">{metric.value}</div>
            <div className="text-lg font-semibold text-foreground mb-1">{metric.label}</div>
            <div className="text-sm text-muted-foreground">{metric.description}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const RichTextContent = ({ children }: { children: React.ReactNode }) => (
  <section className="py-16 sm:py-24">
    <div className="mx-auto max-w-[800px] px-4 sm:px-6">
      <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
        {children}
      </div>
    </div>
  </section>
)

const ContentHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold tracking-tight mt-16 mb-6">{children}</h2>
)

const ContentSubheading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xl font-bold tracking-tight mt-12 mb-4">{children}</h3>
)

const ContentParagraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg text-muted-foreground leading-relaxed mb-6">{children}</p>
)

const ContentList = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground mb-8">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
)

const ContentBlockquote = ({ children, author }: { children: React.ReactNode; author?: string }) => (
  <blockquote className="my-12 border-l-4 border-primary pl-6 italic text-xl text-foreground font-medium">
    <p>&quot;{children}&quot;</p>
    {author && (
      <footer className="mt-4 text-base text-muted-foreground font-normal not-italic">
        — {author}
      </footer>
    )}
  </blockquote>
)

const ContentImage = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <figure className="my-12">
    <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
    {caption && (
      <figcaption className="mt-4 text-center text-sm text-muted-foreground">
        {caption}
      </figcaption>
    )}
  </figure>
)

const CaseStudyCard = ({
  title,
  description,
  image,
  tag,
  href
}: {
  title: string
  description: string
  image: string
  tag: string
  href: string
}) => (
  <Link href={href} className="group block h-full outline-none">
    <article className="glass-panel h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-primary/50">
      <div className="relative aspect-video overflow-hidden border-b border-border">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
          {tag}
        </div>
        <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground flex-grow line-clamp-3">
          {description}
        </p>
        <div className="mt-6 flex items-center font-semibold text-sm text-primary">
          Read Case Study <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  </Link>
)


// Mock data (in a real app, this would come from a CMS or database)
const caseStudies = {
  "mcp-server-beverage-manufacturing": {
    title: "MCP Server for Conversational Analytics in Beverage Manufacturing",
    client: "Global Beverage Manufacturer",
    industry: "Manufacturing",
    image: "/images/Widle-Logo.jpg",
    challenge:
      "The client struggled with accessing and interpreting complex manufacturing and supply chain data, often requiring specialized analysts to generate reports, delaying decision-making.",
    solution:
      "We engineered a Model Context Protocol (MCP) server that securely connects enterprise databases and APIs to a conversational LLM interface, allowing managers to query data naturally.",
    results:
      "Reduced time-to-insight from days to seconds, democratized data access across the organization, and improved operational agility on the factory floor.",
    metrics: [
      { value: "90%", label: "Faster Insights", description: "Query response time reduced" },
      { value: "100%", label: "Data Security", description: "Enterprise-grade MCP compliance" },
    ],
    content: {
      sections: [
        {
          type: "heading",
          text: "The Challenge",
        },
        {
          type: "paragraph",
          text: "In the fast-paced beverage manufacturing sector, real-time insights into production line efficiency, supply chain logistics, and inventory levels are critical. However, this data was siloed across multiple legacy systems.",
        },
        {
          type: "paragraph",
          text: "Factory managers had to rely on specialized data engineering teams to write SQL queries and generate dashboards. This bottleneck meant that by the time insights were delivered, the operational window to act on them had often closed.",
        },
        {
          type: "heading",
          text: "Our Approach",
        },
        {
          type: "paragraph",
          text: "To bridge this gap, Widle.ai leveraged the Model Context Protocol (MCP), an open standard that allows Large Language Models (LLMs) to securely and contextually interface with external data sources.",
        },
        {
          type: "list",
          items: [
            "Developed a custom MCP Server connecting directly to the client's Snowflake data warehouse and production REST APIs.",
            "Configured strict role-based access control (RBAC) ensuring the LLM only retrieved data the querying user was authorized to see.",
            "Integrated the MCP Server with a conversational frontend, enabling users to ask complex analytical questions (e.g., 'What was the yield of line B yesterday compared to last month?').",
            "Implemented real-time data fetching to ensure the LLM responses were grounded in the most current manufacturing data, eliminating hallucinations.",
          ],
        },
        {
          type: "heading",
          text: "Results & Impact",
        },
        {
          type: "paragraph",
          text: "The deployment of the MCP-powered conversational analytics system transformed daily operations. Plant managers can now retrieve deep, contextual insights instantly through natural language on their mobile devices right from the factory floor.",
        },
      ],
    },
    relatedCaseStudies: ["retail-demand-forecasting", "nielsen"],
  },
  "nielsen": {
    title: "Enabling highly targeted, optimized campaigns",
    client: "Nielsen",
    industry: "Marketing",
    image: "/images/Nielson-logo.jpg",
    challenge:
      "Nielsen needed to enable brands and agencies to carry out targeted advertising campaigns using computer vision and large-scale data processing without compromising privacy.",
    solution:
      "We developed advanced computer vision models to accurately identify brand contexts and consumer behavior at scale while ensuring strict anonymization of PII.",
    results:
      "Enabled highly targeted and optimized campaigns for Nielsen’s clients, significantly increasing ad ROI.",
    metrics: [
      { value: "3x", label: "ROI Increase", description: "Improved ad spend efficiency" },
      { value: "100%", label: "Privacy Compliant", description: "Zero PII leakage" },
    ],
    content: {
      sections: [
        {
          type: "heading",
          text: "The Challenge",
        },
        {
          type: "paragraph",
          text: "In the modern digital advertising landscape, contextual relevance is king. However, identifying the right context across billions of images and videos while maintaining strict user privacy is a massive technical challenge.",
        },
      ],
    },
    relatedCaseStudies: ["medtech-ai-diagnostics"],
  },
  "medtech-ai-diagnostics": {
    title: "Accelerating Rare Disease Diagnosis with Computer Vision",
    client: "Global MedTech Solutions",
    industry: "Healthcare",
    image: "/images/Widle-Logo.jpg",
    challenge:
      "A leading medical technology provider struggled with high error rates (15%) and slow processing times (avg. 48 hours) in identifying rare tissue anomalies from digital pathology slides.",
    solution:
      "We engineered a secure, HIPAA-compliant computer vision pipeline using state-of-the-art CNNs, trained on their proprietary dataset, wrapped in a scalable cloud architecture.",
    results:
      "The AI-assisted workflow reduced diagnostic turnaround time to under 2 hours and improved accuracy to 99.1%, fundamentally transforming patient care pathways.",
    metrics: [
      { value: "99.1%", label: "Diagnostic Accuracy", description: "Up from 85% baseline" },
      { value: "46h", label: "Time Saved", description: "Per batch of 100 slides" },
      { value: "$2.4M", label: "Cost Reduction", description: "Annual operational savings" },
    ],
    content: {
      sections: [
        {
          type: "heading",
          text: "Our Approach",
        },
        {
          type: "paragraph",
          text: "Widle.ai implemented state-of-the-art computer vision models trained specifically for brand safety and contextual targeting. The pipeline was designed to operate entirely on the edge or in secure enclaves, ensuring data privacy.",
        },
        {
          type: "image",
          src: "/images/Nielson-logo.jpg",
          alt: "Nielsen Contextual Targeting",
        },
      ],
    },
    relatedCaseStudies: ["medtech-ai-diagnostics"],
  },
  "medtech-ai-diagnostics": {
    title: "Accelerating Rare Disease Diagnosis with Computer Vision",
    client: "Global MedTech Solutions",
    industry: "Healthcare",
    image: "/images/Widle-Logo.jpg",
    challenge:
      "A leading medical technology provider struggled with high error rates (15%) and slow processing times (avg. 48 hours) in identifying rare tissue anomalies from digital pathology slides.",
    solution:
      "We engineered a secure, HIPAA-compliant computer vision pipeline using state-of-the-art CNNs, trained on their proprietary dataset, wrapped in a scalable cloud architecture.",
    results:
      "The AI-assisted workflow reduced diagnostic turnaround time to under 2 hours and improved accuracy to 99.1%, fundamentally transforming patient care pathways.",
    metrics: [
      { value: "99.1%", label: "Diagnostic Accuracy", description: "Up from 85% baseline" },
      { value: "46h", label: "Time Saved", description: "Per batch of 100 slides" },
      { value: "$2.4M", label: "Cost Reduction", description: "Annual operational savings" },
    ],
    content: {
      sections: [
        {
          type: "heading",
          text: "The Challenge",
        },
      ],
    },
    relatedCaseStudies: ["medtech-ai-diagnostics"],
  },
  "medtech-ai-diagnostics": {
    title: "Accelerating Rare Disease Diagnosis with Computer Vision",
    client: "Global MedTech Solutions",
    industry: "Healthcare",
    image: "/images/Widle-Logo.jpg",
    challenge:
      "A leading medical technology provider struggled with high error rates (15%) and slow processing times (avg. 48 hours) in identifying rare tissue anomalies from digital pathology slides.",
    solution:
      "We engineered a secure, HIPAA-compliant computer vision pipeline using state-of-the-art CNNs, trained on their proprietary dataset, wrapped in a scalable cloud architecture.",
    results:
      "The AI-assisted workflow reduced diagnostic turnaround time to under 2 hours and improved accuracy to 99.1%, fundamentally transforming patient care pathways.",
    metrics: [
      { value: "99.1%", label: "Diagnostic Accuracy", description: "Up from 85% baseline" },
      { value: "46h", label: "Time Saved", description: "Per batch of 100 slides" },
      { value: "$2.4M", label: "Cost Reduction", description: "Annual operational savings" },
    ],
    content: {
      sections: [
        {
          type: "paragraph",
          text: "Pathologists at Global MedTech Solutions were spending thousands of hours manually reviewing high-resolution digital slides. The process was not only expensive and slow, but the cognitive fatigue led to an unacceptable 15% error rate in detecting a specific class of rare cellular anomalies.",
        },
        {
          type: "paragraph",
          type: "heading",
          text: "The Challenge",
        },
        {
          type: "paragraph",
          text: "Pathologists at Global MedTech Solutions were spending thousands of hours manually reviewing high-resolution digital slides. The process was not only expensive and slow, but the cognitive fatigue led to an unacceptable 15% error rate in detecting a specific class of rare cellular anomalies.",
        },
        {
          type: "paragraph",
          text: "They needed a solution that could pre-screen slides, highlight areas of interest, and integrate seamlessly into their existing FDA-approved diagnostic software—without compromising patient data security.",
        },
        {
          type: "heading",
          text: "Our Approach",
        },
        {
          type: "paragraph",
          text: "Our engineering team started by establishing a secure, air-gapped data pipeline to anonymize and process over 100,000 historical slides. We then customized and fine-tuned a state-of-the-art Convolutional Neural Network (CNN).",
        },
        {
          type: "list",
          items: [
            "Implemented a tile-based processing approach to handle multi-gigabyte slide images.",
            "Utilized active learning to help expert pathologists label the most challenging edge cases.",
            "Deployed the model using TensorRT on optimized GPU instances for real-time inference.",
            "Built a custom API gateway compliant with strict healthcare regulations (HIPAA/HITRUST).",
          ],
        },
        {
          type: "blockquote",
          text: "Widle.ai didn't just give us an algorithm; they delivered a production-ready system that our pathologists actually want to use.",
          author: "Dr. Sarah Chen, Chief Medical Officer",
        },
        {
          type: "heading",
          text: "Results & Impact",
        },
        {
          type: "paragraph",
          text: "The system is now deployed across 45 regional labs. It acts as a highly accurate 'second pair of eyes,' reducing the average time to diagnosis from 48 hours to under 2 hours. By catching anomalies early and accurately, Global MedTech has improved patient outcomes while saving an estimated $2.4M annually in operational costs.",
        },
      ],
    },
    relatedCaseStudies: ["fintech-fraud-detection", "retail-demand-forecasting"],
  },
  "fintech-fraud-detection": {
    title: "Real-time Fraud Prevention using Graph Neural Networks",
    client: "GlobalBank Corp",
    industry: "Financial Services",
    image: "/images/Widle-Logo.jpg",
    challenge:
      "GlobalBank Corp was losing $40M annually to sophisticated, coordinated fraud rings that traditional rule-based detection systems failed to catch.",
    solution:
      "We deployed a Graph Neural Network (GNN) architecture that analyzes the topology of transaction networks in real-time, identifying complex patterns of money laundering and fraud.",
    results:
      "The system increased fraud detection rates by 40% while reducing false positives by 60%, saving the bank $28M in the first year of operation.",
    metrics: [
      { value: "$28M", label: "Fraud Prevented", description: "In the first 12 months" },
      { value: "60%", label: "False Positives Drop", description: "Improving customer experience" },
      { value: "<50ms", label: "Inference Latency", description: "Real-time transaction blocking" },
    ],
    content: {
      sections: [
        {
          type: "heading",
          text: "The Challenge",
        },
        {
          type: "paragraph",
          text: "As digital transaction volumes surged, GlobalBank Corp was facing an escalating fraud crisis. Sophisticated criminal networks had learned to exploit gaps in their legacy rule-based detection systems.",
        },
        {
          type: "paragraph",
          text: "The bank's existing system relied on 3,000+ manually crafted rules that were increasingly ineffective against emerging fraud patterns. Meanwhile, the high false positive rate was frustrating customers and overwhelming the fraud investigation team with legitimate transactions.",
        },
        {
          type: "heading",
          text: "Our Approach",
        },
        {
          type: "paragraph",
          text: "Our solution combined three complementary AI approaches: graph neural networks to detect suspicious relationship patterns, behavioral anomaly detection to identify unusual activity, and NLP analysis to flag suspicious transaction descriptions—all operating in real-time at massive scale.",
        },
        {
          type: "blockquote",
          text: "The widle.ai team delivered a system that not only stopped fraud but actually improved our customer experience. That's the kind of innovation that changes the game.",
          author: "James Morrison, EVP Risk Management, GlobalBank Corp",
        },
        {
          type: "heading",
          text: "Results & Impact",
        },
        {
          type: "paragraph",
          text: "The new AI-powered platform processes transactions 200x faster than the legacy system while catching 40% more fraud. The dramatic reduction in false positives has improved customer NPS by 15 points.",
        },
      ],
    },
    relatedCaseStudies: ["medtech-ai-diagnostics", "retail-demand-forecasting"],
  },
  "retail-demand-forecasting": {
    title: "AI Demand Forecasting Cuts Inventory Costs by $12M",
    client: "RetailMax",
    industry: "Retail",
    image: "/images/Widle-Logo.jpg",
    challenge:
      "RetailMax, a 500-store retail chain, was struggling with inventory management. Overstock situations tied up $80M in working capital while stockouts were costing an estimated $25M in lost sales annually.",
    solution:
      "We developed an AI-powered demand forecasting system that analyzes 200+ variables including historical sales, weather patterns, local events, social media trends, and economic indicators to predict demand at the SKU-store level.",
    results:
      "The system now achieves 94% forecast accuracy (up from 73%), reducing excess inventory by $12M while simultaneously cutting stockouts by 65%. The improved cash flow enabled RetailMax to accelerate their expansion plans.",
    metrics: [
      { value: "$12M", label: "Inventory Savings", description: "Reduced carrying costs" },
      { value: "94%", label: "Forecast Accuracy", description: "Up from 73% baseline" },
      { value: "65%", label: "Fewer Stockouts", description: "Improved availability" },
    ],
    content: {
      sections: [
        {
          type: "heading",
          text: "The Challenge",
        },
        {
          type: "paragraph",
          text: "RetailMax's supply chain team was caught in an impossible balancing act. Their legacy forecasting system—based on simple moving averages and buyer intuition—consistently missed the mark, leading to a costly cycle of overstock and stockouts.",
        },
        {
          type: "paragraph",
          text: "With 500 stores carrying 45,000 unique SKUs, the complexity was overwhelming. Regional variations, seasonal patterns, and unpredictable demand drivers made accurate forecasting seem impossible.",
        },
        {
          type: "heading",
          text: "Our Approach",
        },
        {
          type: "paragraph",
          text: "We built a hierarchical forecasting system that generates predictions at multiple levels—from corporate aggregates down to individual SKU-store combinations—ensuring coherent planning across the organization. Machine learning models learn from diverse data sources to capture demand drivers that traditional methods miss.",
        },
        {
          type: "blockquote",
          text: "We've been in retail for 40 years and never had this kind of visibility into demand. It's transformed how we think about inventory.",
          author: "Patricia Reynolds, COO, RetailMax",
        },
        {
          type: "heading",
          text: "Results & Impact",
        },
        {
          type: "paragraph",
          text: "Within one year, RetailMax reduced inventory holding costs by $12M while improving in-stock rates from 91% to 97%. The freed-up capital has funded the opening of 25 new stores.",
        },
      ],
    },
    relatedCaseStudies: ["medtech-ai-diagnostics", "fintech-fraud-detection"],
  },
}

type Slug = keyof typeof caseStudies

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = caseStudies[slug as Slug]

  if (!caseStudy) {
    return { title: "Case Study Not Found | widle.ai" }
  }

  return {
    title: `${caseStudy.client} Case Study | widle.ai`,
    description: caseStudy.title,
  }
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caseStudy = caseStudies[slug as Slug]

  if (!caseStudy) {
    notFound()
  }

  // Get related case studies
  const relatedCaseStudiesData = caseStudy.relatedCaseStudies.map((relatedSlug) => ({
    slug: relatedSlug,
    ...caseStudies[relatedSlug as Slug],
  }))

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://widle.ai'

  // Structured Data (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title,
    image: `${baseUrl}${caseStudy.image}`,
    author: {
      '@type': 'Organization',
      name: 'widle.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'widle.ai',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/icon.svg`,
      },
    },
    description: caseStudy.challenge.substring(0, 160) + '...',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* 1. Full-width Header */}
        <CaseStudyHeader
          image={caseStudy.image}
          title={caseStudy.title}
          client={caseStudy.client}
          industry={caseStudy.industry}
        />

        {/* 2. Challenge / Solution / Results */}
        <ChallengeSolutionResults
          challenge={caseStudy.challenge}
          solution={caseStudy.solution}
          results={caseStudy.results}
        />

        {/* 3. Long-form Body Content */}
        <RichTextContent>
          {caseStudy.content.sections.map((section: { type: string; content?: string; text?: string; items?: string[]; quote?: string; author?: string; role?: string; image?: string; alt?: string; caption?: string }, index) => {
            switch (section.type) {
              case "heading":
                return <ContentHeading key={index}>{section.text}</ContentHeading>
              case "subheading":
                return <ContentSubheading key={index}>{section.text}</ContentSubheading>
              case "paragraph":
                return <ContentParagraph key={index}>{section.text}</ContentParagraph>
              case "list":
                return <ContentList key={index} items={section.items as string[]} />
              case "blockquote":
                return (
                  <ContentBlockquote
                    key={index}
                    author={(section as { type: string; text: string; author?: string }).author}
                  >
                    {section.text}
                  </ContentBlockquote>
                )
              case "image":
                return (
                  <ContentImage
                    key={index}
                    src={(section as { type: string; src: string; alt: string; caption?: string }).src}
                    alt={(section as { type: string; src: string; alt: string; caption?: string }).alt}
                    caption={(section as { type: string; src: string; alt: string; caption?: string }).caption}
                  />
                )
              default:
                return null
            }
          })}
        </RichTextContent>

        {/* 4. Metrics Highlight Band */}
        <MetricsHighlight metrics={caseStudy.metrics} />

        {/* 5. Related Case Studies */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Explore More"
              headline="Related Case Studies"
              subtext="Discover how we've helped other organizations achieve similar results."
            />

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {relatedCaseStudiesData.map((related) => (
                <CaseStudyCard
                  key={related.slug}
                  image={related.image}
                  tag={related.industry}
                  title={related.title}
                  description={related.challenge.slice(0, 150) + "..."}
                  href={`/case-studies/${related.slug}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA */}
        <CTABanner
          headline="Ready to achieve similar results?"
          description={`See how widle.ai can transform your ${caseStudy.industry.toLowerCase()} operations with AI.`}
          buttonText="Contact Us"
          buttonHref="/contact"
          variant="accent"
        />
      </main>
      <Footer />
    </>
  )
}

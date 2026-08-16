import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CaseStudyHeader } from "@/components/case-study-header"
import { ChallengeSolutionResults } from "@/components/challenge-solution-results"
import {
  RichTextContent,
  ContentHeading,
  ContentSubheading,
  ContentParagraph,
  ContentList,
  ContentBlockquote,
  ContentImage,
} from "@/components/rich-text-content"
import { MetricsHighlight } from "@/components/metrics-highlight"
import { CaseStudyCard } from "@/components/case-study-card"
import { SectionHeader } from "@/components/section-header"
import { CTABanner } from "@/components/cta-banner"

// Simulated CMS data
const caseStudies = {
  "medtech-ai-diagnostics": {
    title: "AI-Powered Diagnostics Platform Reduces Detection Time by 85%",
    client: "MedTech Innovations",
    industry: "Healthcare",
    image: "/images/Widle-Logo.jpg",
    challenge:
      "MedTech Innovations faced a critical bottleneck in their diagnostic workflow. Manual analysis of medical imaging took an average of 45 minutes per scan, creating delays in patient care and limiting throughput to just 30 patients per day.",
    solution:
      "We developed a custom computer vision model trained on over 2 million annotated medical images. The AI system integrates seamlessly with existing PACS infrastructure and provides real-time analysis with explainable AI outputs for clinician review.",
    results:
      "The platform now processes scans in under 7 minutes with 97.3% accuracy, enabling the clinic to serve 3x more patients while improving diagnostic confidence and reducing physician burnout.",
    metrics: [
      { value: "85%", label: "Faster Diagnostics", description: "Reduced from 45 min to 7 min" },
      { value: "97.3%", label: "Accuracy Rate", description: "Validated against expert panel" },
      { value: "3x", label: "Patient Throughput", description: "From 30 to 90+ patients/day" },
    ],
    content: {
      sections: [
        {
          type: "heading",
          text: "The Challenge",
        },
        {
          type: "paragraph",
          text: "MedTech Innovations, a leading regional healthcare network with 12 diagnostic centers, was struggling to meet growing demand for medical imaging analysis. Their team of radiologists was overwhelmed, leading to extended wait times and delayed diagnoses that directly impacted patient outcomes.",
        },
        {
          type: "paragraph",
          text: "The existing workflow required a radiologist to manually review each scan, annotate findings, and generate reports—a process that averaged 45 minutes per patient. With only 8 radiologists serving the entire network, the backlog was growing by hundreds of cases each month.",
        },
        {
          type: "subheading",
          text: "Key Pain Points Identified",
        },
        {
          type: "list",
          items: [
            "Average 72-hour wait time for diagnostic reports",
            "Radiologist burnout leading to 23% annual turnover",
            "Inconsistent analysis quality across different shifts",
            "Inability to scale without proportionally increasing staff costs",
          ],
        },
        {
          type: "heading",
          text: "Our Approach",
        },
        {
          type: "paragraph",
          text: "After a comprehensive discovery phase that included shadowing radiologists and analyzing 6 months of historical data, our team designed a three-phase implementation strategy that prioritized clinical accuracy while minimizing disruption to existing workflows.",
        },
        {
          type: "image",
          src: "/placeholder.svg?height=500&width=900",
          alt: "AI diagnostic workflow diagram",
          caption: "The hybrid human-AI workflow ensures clinical oversight while maximizing efficiency",
        },
        {
          type: "subheading",
          text: "Phase 1: Data Infrastructure",
        },
        {
          type: "paragraph",
          text: "We established a HIPAA-compliant data pipeline that connected to MedTech's existing PACS system. Our team worked with in-house IT to create anonymization protocols and secure model training environments, ensuring patient data never left their controlled infrastructure.",
        },
        {
          type: "subheading",
          text: "Phase 2: Model Development",
        },
        {
          type: "paragraph",
          text: "Using a foundation model pretrained on public medical imaging datasets, we fine-tuned the AI on MedTech's proprietary historical data. This transfer learning approach allowed us to achieve production-ready accuracy in just 8 weeks rather than the typical 6-12 months.",
        },
        {
          type: "blockquote",
          text: "The widle.ai team understood that we weren't just building technology—we were building trust. Their focus on explainable AI gave our radiologists confidence in the system from day one.",
          author: "Dr. Sarah Chen, Chief Medical Officer, MedTech Innovations",
        },
        {
          type: "subheading",
          text: "Phase 3: Clinical Integration",
        },
        {
          type: "paragraph",
          text: "Rather than replacing radiologists, the AI system was designed as a 'first reader' that pre-screens scans, highlights areas of concern, and generates preliminary reports. Radiologists then review AI findings, make final determinations, and provide feedback that continuously improves model performance.",
        },
        {
          type: "heading",
          text: "Results & Impact",
        },
        {
          type: "paragraph",
          text: "Within 6 months of full deployment, MedTech Innovations transformed their diagnostic operations. The AI system now handles initial screening for 95% of incoming scans, freeing radiologists to focus on complex cases and patient consultations.",
        },
        {
          type: "list",
          items: [
            "Report turnaround reduced from 72 hours to under 24 hours",
            "Radiologist satisfaction scores increased 40%",
            "Zero missed critical findings in 50,000+ AI-screened cases",
            "ROI achieved within 14 months of initial deployment",
          ],
        },
        {
          type: "paragraph",
          text: "The success of this engagement has led MedTech to expand AI integration to two additional diagnostic modalities, with widle.ai continuing as their strategic AI partner.",
        },
      ],
    },
    relatedCaseStudies: ["fintech-fraud-detection", "retail-demand-forecasting"],
  },
  "fintech-fraud-detection": {
    title: "Real-Time Fraud Detection Saves $47M Annually for Global Bank",
    client: "GlobalBank Corp",
    industry: "Finance",
    image: "/images/Widle-Logo.jpg",
    challenge:
      "GlobalBank Corp was losing an estimated $62M annually to sophisticated fraud schemes that their rule-based detection systems couldn't catch. False positives were also creating customer friction, blocking 12% of legitimate transactions.",
    solution:
      "We built a multi-model ensemble system combining graph neural networks for relationship analysis, anomaly detection for behavioral patterns, and NLP for transaction description analysis. The system processes 50,000 transactions per second in real-time.",
    results:
      "The AI fraud detection platform now catches 94% of fraudulent transactions while reducing false positives by 78%, saving $47M in fraud losses and improving customer satisfaction scores by 23%.",
    metrics: [
      { value: "$47M", label: "Annual Savings", description: "Direct fraud prevention" },
      { value: "94%", label: "Fraud Detection", description: "Up from 67% baseline" },
      { value: "78%", label: "Fewer False Positives", description: "Improved customer experience" },
    ],
    content: {
      sections: [
        {
          type: "heading",
          text: "The Challenge",
        },
        {
          type: "paragraph",
          text: "GlobalBank Corp, a top-20 international financial institution processing over 4 billion transactions annually, was facing an escalating fraud crisis. Sophisticated criminal networks had learned to exploit gaps in their legacy rule-based detection systems.",
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

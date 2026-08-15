import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"
import { INDUSTRIES_DATA } from "@/lib/constants"
import { fetchMediumArticles } from "@/lib/medium"
import { getPortfolioByIndustry } from "@/lib/portfolio-data"
import { getCaseStudiesByIndustry } from "@/lib/case-studies-data"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, ArrowUpRight } from "lucide-react"

export const revalidate = 3600;

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map(industry => ({
    slug: industry.slug,
  }));
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industryData = INDUSTRIES_DATA.find(i => i.slug === slug);

  if (!industryData) {
    notFound();
  }

  // Fetch related data
  const articles = await fetchMediumArticles();
  const relatedArticles = articles.filter(a => a.industry === industryData.name).slice(0, 3);

  const relatedPortfolio = getPortfolioByIndustry(industryData.name).slice(0, 3);
  const relatedCaseStudies = getCaseStudiesByIndustry(industryData.name).slice(0, 3);

  const Icon = industryData.icon;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="max-w-3xl mb-20">
            <Link href="/industries" className="text-sm font-medium text-primary hover:underline mb-8 inline-block">
              ← Back to all Industries
            </Link>
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-8 w-8" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              AI Solutions for <br /><span className="text-primary">{industryData.name}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {industryData.description}
            </p>
          </div>

          <div className="space-y-32">

            {/* Case Studies */}
            {relatedCaseStudies.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-10 border-b border-border pb-4">
                  <h2 className="text-3xl font-bold">Case Studies</h2>
                  <Link href="/case-studies" className="text-primary font-medium hover:underline hidden sm:block">View all case studies</Link>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedCaseStudies.map(study => (
                    <Link key={study.id} href={`/case-studies/${study.slug}`} className="group block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-md transition-all">
                      <div className="relative h-48 bg-muted overflow-hidden">
                        <Image src={study.image_url} alt={study.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{study.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{study.metric_highlight}</p>
                        <div className="text-primary font-medium text-sm flex items-center">
                          Read Case Study <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Portfolio */}
            {relatedPortfolio.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-10 border-b border-border pb-4">
                  <h2 className="text-3xl font-bold">Featured Work</h2>
                  <Link href="/portfolio" className="text-primary font-medium hover:underline hidden sm:block">View all projects</Link>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPortfolio.map(project => (
                    <Link key={project.slug} href={`/portfolio/${project.slug}`} className="group block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-md transition-all">
                      <div className="relative h-56 bg-muted overflow-hidden">
                        <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowUpRight className="w-4 h-4 text-foreground" />
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{project.category}</div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Blog Articles */}
            {relatedArticles.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-10 border-b border-border pb-4">
                  <h2 className="text-3xl font-bold">Latest Insights</h2>
                  <Link href={`/blog?industry=${encodeURIComponent(industryData.name)}`} className="text-primary font-medium hover:underline hidden sm:block">View all insights</Link>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedArticles.map(article => (
                    <Link key={article.id} href={`/blog/${article.slug}`} className="group block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-md transition-all flex flex-col h-full">
                      <div className="relative h-48 bg-muted overflow-hidden shrink-0">
                        <Image src={article.thumbnail} alt={article.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
                      </div>
                      <div className="p-6 flex flex-col flex-1 justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(article.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </div>
                          <h3 className="text-lg font-bold mb-4 line-clamp-2 group-hover:text-primary transition-colors">{article.title}</h3>
                        </div>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                          <span className="text-sm text-muted-foreground truncate max-w-[150px]">{article.author}</span>
                          <span className="text-primary group-hover:translate-x-1 transition-transform">
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

"use client"

import { useState, useMemo } from 'react'
import { MediumArticle } from '@/lib/medium'
import Link from 'next/link'
import Image from 'next/image'
import { LayoutGrid, List as ListIcon, Calendar, Folder, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BlogClient({ initialArticles }: { initialArticles: MediumArticle[] }) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)

  // Extract all unique industries and their counts
  const industryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    initialArticles.forEach(article => {
      counts[article.industry] = (counts[article.industry] || 0) + 1
    })
    return counts
  }, [initialArticles])

  // Filter articles based on selection
  const filteredArticles = useMemo(() => {
    if (!selectedIndustry) return initialArticles;
    return initialArticles.filter(a => a.industry === selectedIndustry);
  }, [initialArticles, selectedIndustry])

  const latestArticle = filteredArticles[0];
  const remainingArticles = filteredArticles.slice(1);

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Sidebar Filters */}
      <aside className="lg:w-64 shrink-0">
        <div className="sticky top-28 space-y-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Filter by Industry</h3>
              {selectedIndustry && (
                <button
                  onClick={() => setSelectedIndustry(null)}
                  className="text-xs text-primary hover:underline"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedIndustry(null)}
                className={cn(
                  "w-full text-left flex items-center justify-between px-3 py-2 rounded-md transition-colors text-sm",
                  selectedIndustry === null
                    ? "bg-primary text-primary-foreground font-medium"
                    : "hover:bg-muted text-muted-foreground"
                )}
              >
                <span>All Industries</span>
                <span className="opacity-70 bg-black/10 px-2 py-0.5 rounded-full text-xs">
                  {initialArticles.length}
                </span>
              </button>
              {Object.entries(industryCounts).map(([industry, count]) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={cn(
                    "w-full text-left flex items-center justify-between px-3 py-2 rounded-md transition-colors text-sm",
                    selectedIndustry === industry
                      ? "bg-primary text-primary-foreground font-medium"
                      : "hover:bg-muted text-muted-foreground"
                  )}
                >
                  <span className="truncate mr-2">{industry}</span>
                  <span className={cn(
                    "px-2 py-0.5 rounded-full text-xs shrink-0",
                    selectedIndustry === industry ? "bg-black/10" : "bg-muted-foreground/10"
                  )}>
                    {count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">View Mode</h3>
            <div className="flex bg-muted p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-all",
                  viewMode === 'grid' ? "bg-background shadow text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <LayoutGrid className="w-4 h-4" /> Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-all",
                  viewMode === 'list' ? "bg-background shadow text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <ListIcon className="w-4 h-4" /> List
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-muted/30 rounded-2xl border border-dashed border-border">
            <h3 className="text-xl font-medium mb-2">No articles found</h3>
            <p className="text-muted-foreground">Check back later or try selecting a different industry.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Highlighted Latest Article */}
            {latestArticle && (
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all">
                <Link href={`/blog/${latestArticle.slug}`} className="flex flex-col md:flex-row absolute inset-0 z-10">
                  <span className="sr-only">Read {latestArticle.title}</span>
                </Link>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden bg-muted">
                    <Image
                      src={latestArticle.thumbnail}
                      alt={latestArticle.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized // Since Medium images are external
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
                        Latest
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Folder className="w-4 h-4" />
                        {latestArticle.industry}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(latestArticle.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 line-clamp-3 group-hover:text-primary transition-colors">
                      {latestArticle.title}
                    </h2>
                    <div className="flex items-center gap-3 mt-auto pt-6">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {latestArticle.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{latestArticle.author}</p>
                        <p className="text-xs text-muted-foreground">Author</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Remaining Articles */}
            {remainingArticles.length > 0 && (
              <div className={cn(
                "grid gap-8",
                viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
              )}>
                {remainingArticles.map(article => (
                  <div
                    key={article.id}
                    className={cn(
                      "group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-all flex",
                      viewMode === 'grid' ? "flex-col" : "flex-col sm:flex-row h-full sm:h-48"
                    )}
                  >
                    <Link href={`/blog/${article.slug}`} className="absolute inset-0 z-10">
                      <span className="sr-only">Read {article.title}</span>
                    </Link>

                    <div className={cn(
                      "relative bg-muted overflow-hidden shrink-0",
                      viewMode === 'grid' ? "h-48 w-full" : "h-48 sm:h-full w-full sm:w-48 md:w-64"
                    )}>
                      <Image
                        src={article.thumbnail}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                      />
                    </div>

                    <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 flex-wrap">
                          <span className="bg-muted px-2 py-1 rounded-md text-foreground font-medium truncate max-w-[150px]">
                            {article.industry}
                          </span>
                          <span className="flex items-center gap-1 whitespace-nowrap">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(article.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                            {article.author.charAt(0)}
                          </div>
                          <span className="text-sm text-muted-foreground truncate max-w-[100px]">{article.author}</span>
                        </div>
                        <span className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import { useState, useMemo, useEffect } from 'react'
import { MediumArticle } from '@/lib/medium'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'
import { LayoutGrid, List as ListIcon, Calendar, Folder, ArrowRight, User, Tag, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BlogClient({ initialArticles }: { initialArticles: MediumArticle[] }) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null)

  // Sync state with URL params on load/change
  useEffect(() => {
    const timer = setTimeout(() => {
    const timeout = setTimeout(() => {
      setSelectedIndustry(searchParams.get('industry'))
      setSelectedTag(searchParams.get('tag'))
      setSelectedAuthor(searchParams.get('author'))
    }, 0)
    return () => clearTimeout(timer)
    return () => clearTimeout(timeout)
  }, [searchParams])

  const updateFilters = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    router.push(`/blog?${params.toString()}`, { scroll: false })
  }

  // Extract all unique filters and their counts
  const { industryCounts, tagCounts, authorCounts } = useMemo(() => {
    const iCounts: Record<string, number> = {}
    const tCounts: Record<string, number> = {}
    const aCounts: Record<string, number> = {}

    initialArticles.forEach(article => {
      iCounts[article.industry] = (iCounts[article.industry] || 0) + 1
      aCounts[article.author] = (aCounts[article.author] || 0) + 1
      article.categories.forEach(cat => {
        tCounts[cat] = (tCounts[cat] || 0) + 1
      })
    })
    return { industryCounts: iCounts, tagCounts: tCounts, authorCounts: aCounts }
  }, [initialArticles])

  // Filter articles based on all selections
  const filteredArticles = useMemo(() => {
    return initialArticles.filter(a => {
      const matchIndustry = !selectedIndustry || a.industry === selectedIndustry;
      const matchAuthor = !selectedAuthor || a.author === selectedAuthor;
      const matchTag = !selectedTag || a.categories.includes(selectedTag);
      return matchIndustry && matchAuthor && matchTag;
    });
  }, [initialArticles, selectedIndustry, selectedAuthor, selectedTag])

  const latestArticle = filteredArticles[0];
  const remainingArticles = filteredArticles.slice(1);

  // Take top 10 tags for sidebar to avoid clutter
  const topTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Sidebar Filters */}
      <aside className="lg:w-64 shrink-0">
        <div className="sticky top-28 space-y-8">

          {/* Active Filters Summary */}
          {(selectedIndustry || selectedTag || selectedAuthor) && (
            <div className="bg-primary/5 border border-primary/20 p-4 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-sm text-primary">Active Filters</h3>
                <button
                  onClick={() => router.push('/blog', { scroll: false })}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear All
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedIndustry && (
                  <span className="inline-flex items-center gap-1 bg-background text-xs px-2 py-1 rounded-md border border-border">
                    <Folder className="w-3 h-3" /> {selectedIndustry}
                    <button onClick={() => updateFilters('industry', null)}><X className="w-3 h-3 hover:text-destructive" /></button>
                  </span>
                )}
                {selectedAuthor && (
                  <span className="inline-flex items-center gap-1 bg-background text-xs px-2 py-1 rounded-md border border-border">
                    <User className="w-3 h-3" /> {selectedAuthor}
                    <button onClick={() => updateFilters('author', null)}><X className="w-3 h-3 hover:text-destructive" /></button>
                  </span>
                )}
                {selectedTag && (
                  <span className="inline-flex items-center gap-1 bg-background text-xs px-2 py-1 rounded-md border border-border">
                    <Tag className="w-3 h-3" /> {selectedTag}
                    <button onClick={() => updateFilters('tag', null)}><X className="w-3 h-3 hover:text-destructive" /></button>
                  </span>
                )}
              </div>
            </div>
          )}

          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2"><Folder className="w-4 h-4 text-muted-foreground" /> Industry</h3>
            <div className="space-y-1">
              <button
                onClick={() => updateFilters('industry', null)}
                className={cn(
                  "w-full text-left flex items-center justify-between px-3 py-2 rounded-md transition-colors text-sm",
                  selectedIndustry === null
                    ? "bg-primary/10 text-primary font-medium"
                    : "hover:bg-muted text-muted-foreground"
                )}
              >
                <span>All Industries</span>
                <span className="opacity-70 text-xs">{initialArticles.length}</span>
              </button>
              {Object.entries(industryCounts).map(([industry, count]) => (
                <button
                  key={industry}
                  onClick={() => updateFilters('industry', industry)}
                  className={cn(
                    "w-full text-left flex items-center justify-between px-3 py-2 rounded-md transition-colors text-sm",
                    selectedIndustry === industry
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-muted text-muted-foreground"
                  )}
                >
                  <span className="truncate mr-2">{industry}</span>
                  <span className={cn(
                    "px-2 py-0.5 rounded-full text-xs shrink-0",
                    selectedIndustry === industry ? "bg-primary/20" : "bg-muted-foreground/10"
                  )}>
                    {count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2"><User className="w-4 h-4 text-muted-foreground" /> Author</h3>
            <div className="space-y-1">
              {Object.entries(authorCounts).map(([author, count]) => (
                <button
                  key={author}
                  onClick={() => updateFilters('author', author)}
                  className={cn(
                    "w-full text-left flex items-center justify-between px-3 py-2 rounded-md transition-colors text-sm",
                    selectedAuthor === author
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-muted text-muted-foreground"
                  )}
                >
                  <span className="truncate mr-2">{author}</span>
                  <span className={cn(
                    "px-2 py-0.5 rounded-full text-xs shrink-0",
                    selectedAuthor === author ? "bg-primary/20" : "bg-muted-foreground/10"
                  )}>
                    {count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2"><Tag className="w-4 h-4 text-muted-foreground" /> Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {topTags.map(([tag, count]) => (
                <button
                  key={tag}
                  onClick={() => updateFilters('tag', tag)}
                  className={cn(
                    "text-left flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors text-xs",
                    selectedTag === tag
                      ? "bg-primary text-primary-foreground font-medium"
                      : "bg-muted hover:bg-muted/80 text-muted-foreground"
                  )}
                >
                  <span>{tag}</span>
                  <span className="opacity-70 ml-1">({count})</span>
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
            <p className="text-muted-foreground">Try clearing your filters to see more articles.</p>
            <button
              onClick={() => router.push('/blog', { scroll: false })}
              className="mt-6 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Clear Filters
            </button>
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
                      unoptimized
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
                        Featured
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
                    <div className="flex items-center gap-3 mt-auto pt-6 z-20">
                      <button
                        onClick={(e) => { e.preventDefault(); updateFilters('author', latestArticle.author); }}
                        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          {latestArticle.author.charAt(0)}
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-medium">{latestArticle.author}</p>
                          <p className="text-xs text-muted-foreground">Author</p>
                        </div>
                      </button>
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

                      <div className="flex items-center justify-between mt-4 z-20">
                        <button
                          onClick={(e) => { e.preventDefault(); updateFilters('author', article.author); }}
                          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                        >
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                            {article.author.charAt(0)}
                          </div>
                          <span className="text-sm text-muted-foreground truncate max-w-[100px]">{article.author}</span>
                        </button>
                        <span className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none">
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

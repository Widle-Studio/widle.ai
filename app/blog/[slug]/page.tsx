import { fetchMediumArticles } from '@/lib/medium'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Folder, ArrowRight, User } from 'lucide-react'
import { ReadingProgress } from './reading-progress'
import { AnimateIn } from '@/components/animate-in'
import { StaggeredGrid } from '@/components/staggered-grid'

export const revalidate = 3600;

export async function generateStaticParams() {
  const articles = await fetchMediumArticles();
  return articles.map(article => ({
    slug: article.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articles = await fetchMediumArticles();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Determine suggestions: latest article, and up to 2 related by industry
  const latestArticle = articles[0];
  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.id !== latestArticle?.id && a.industry === article.industry)
    .slice(0, 2);

  const suggestions = Array.from(new Set([latestArticle, ...relatedArticles].filter(Boolean)))
    .filter(a => a.id !== article.id)
    .slice(0, 3); // Ensure max 3

  if (suggestions.length < 3) {
    const additional = articles
      .filter(a => a.id !== article.id && !suggestions.some(s => s.id === a.id))
      .slice(0, 3 - suggestions.length);
    suggestions.push(...additional);
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <ReadingProgress />

      <main className="flex-grow pt-24 pb-16 sm:pt-32 sm:pb-20">
        <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <AnimateIn direction="up">
          <header className="mb-12 text-center max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
              <Link
                href={`/blog?industry=${encodeURIComponent(article.industry)}`}
                className="flex items-center gap-1 bg-muted hover:bg-muted/80 transition-colors px-3 py-1 rounded-full text-foreground font-medium"
              >
                <Folder className="w-4 h-4" />
                {article.industry}
              </Link>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(article.pubDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight leading-tight">{article.title}</h1>

            <Link
              href={`/blog?author=${encodeURIComponent(article.author)}`}
              className="inline-flex items-center justify-center gap-4 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                {article.author.charAt(0)}
              </div>
              <div className="text-left">
                <p className="font-semibold text-lg text-foreground">{article.author}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <User className="w-3 h-3" /> View all posts
                </p>
              </div>
            </Link>
          </header>
          </AnimateIn>

          </AnimateIn>

          <AnimateIn direction="up" delay={0.2}>
          <div className="relative w-full max-w-5xl mx-auto h-[300px] sm:h-[400px] lg:h-[550px] rounded-2xl overflow-hidden mb-16 bg-muted shadow-lg border border-border">
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          </AnimateIn>

          <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto relative px-4">

          </AnimateIn>

          <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto relative px-4">

            <AnimateIn direction="left" delay={0.3}>
            {/* Table of Contents Sidebar */}
            {article.toc && article.toc.length > 0 && (
              <aside className="lg:w-64 shrink-0 hidden lg:block">
                <div className="sticky top-28 border border-border rounded-xl p-6 bg-card shadow-sm">
                  <h3 className="font-bold text-lg mb-4 text-foreground">Table of Contents</h3>
                  <ul className="space-y-3 text-sm">
                    {article.toc.map((item, idx) => (
                      <li key={idx} className={`${item.level === 3 ? 'ml-4' : ''}`}>
                        <a
                          href={`#${item.id}`}
                          className="text-muted-foreground hover:text-primary transition-colors line-clamp-2 leading-relaxed"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            )}
            </AnimateIn>

            <AnimateIn direction="up" delay={0.4} className="flex-1 min-w-0">
            {/* Main Article Content */}
            <div>
              <div
                className="prose prose-lg dark:prose-invert max-w-none
                  prose-headings:scroll-mt-24
                  prose-img:mx-auto prose-img:block
                  prose-a:text-primary hover:prose-a:text-primary/80 prose-a:underline-offset-4
                  prose-blockquote:border-l-primary prose-blockquote:bg-muted/30 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:font-normal prose-blockquote:not-italic
            </AnimateIn>

            <AnimateIn direction="up" delay={0.4} className="flex-1 min-w-0">
            {/* Main Article Content */}
            <div>
              <div
                className="prose prose-lg dark:prose-invert max-w-none
                  prose-p:leading-loose prose-p:my-8 prose-p:text-lg
                  prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:mt-16 prose-headings:mb-6
                  prose-h2:text-3xl prose-h3:text-2xl
                  prose-img:mx-auto prose-img:block prose-img:rounded-2xl prose-img:my-12 prose-img:shadow-xl
                  prose-a:text-primary hover:prose-a:text-primary/80 prose-a:underline-offset-4 prose-a:font-medium
                  prose-blockquote:border-l-4 prose-blockquote:border-l-primary prose-blockquote:bg-muted/40 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-lg prose-blockquote:my-10
                  prose-ul:my-8 prose-li:my-3 prose-li:leading-relaxed
                  prose-li:marker:text-primary"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              {/* Divider before tags is already handled by border-t in tags div, no need for gradient divider here unless we remove border-t */}
              {article.categories.length > 0 && (
                <div className="mt-16 pt-8 border-t border-border">
                  <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">Related Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.categories.map((cat, idx) => (
                      <Link
                        key={idx}
                        href={`/blog?tag=${encodeURIComponent(cat)}`}
                        className="bg-muted hover:bg-primary/10 hover:text-primary transition-colors px-4 py-1.5 rounded-full text-sm border border-border/50"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            </AnimateIn>

          </div>
        </article>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 pt-16 border-t border-border">
            <AnimateIn direction="up">
            <h2 className="text-3xl font-bold mb-10 text-center">Read Next</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateIn direction="up">
            <h2 className="text-3xl font-bold mb-10 text-center">Read Next</h2>
            </AnimateIn>
            <StaggeredGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {suggestions.map(suggest => (
                <div key={suggest.id} className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-all flex flex-col h-full">
                  <Link href={`/blog/${suggest.slug}`} className="absolute inset-0 z-10">
                    <span className="sr-only">Read {suggest.title}</span>
                  </Link>
                  <div className="relative h-48 w-full bg-muted overflow-hidden shrink-0">
                    <Image
                      src={suggest.thumbnail}
                      alt={suggest.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 flex-wrap">
                        <span className="bg-muted px-2 py-1 rounded-md text-foreground font-medium truncate max-w-[150px]">
                          {suggest.industry}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {suggest.title}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-muted-foreground truncate max-w-[150px]">{suggest.author}</span>
                      <span className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </StaggeredGrid>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}

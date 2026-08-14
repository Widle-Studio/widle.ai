import { fetchMediumArticles } from '@/lib/medium'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Folder, ArrowRight } from 'lucide-react'

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

  // Since we might not get enough related, pad with other recent articles
  if (suggestions.length < 3) {
    const additional = articles
      .filter(a => a.id !== article.id && !suggestions.some(s => s.id === a.id))
      .slice(0, 3 - suggestions.length);
    suggestions.push(...additional);
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 sm:pt-32 sm:pb-20">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <header className="mb-12 text-center">
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
                <Folder className="w-4 h-4" />
                {article.industry}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(article.pubDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight">{article.title}</h1>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                {article.author.charAt(0)}
              </div>
              <div className="text-left">
                <p className="font-semibold text-lg">{article.author}</p>
                <p className="text-sm text-muted-foreground">Author</p>
              </div>
            </div>
          </header>

          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-12 bg-muted">
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div
            className="prose prose-lg dark:prose-invert max-w-none prose-img:rounded-xl prose-img:shadow-md prose-a:text-primary hover:prose-a:text-primary/80"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          {article.categories.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.categories.map((cat, idx) => (
                  <span key={idx} className="bg-muted px-3 py-1 rounded-md text-sm">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 pt-16 border-t border-border">
            <h2 className="text-3xl font-bold mb-10 text-center">Read Next</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}

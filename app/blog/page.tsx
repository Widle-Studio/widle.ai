import { fetchMediumArticles } from '@/lib/medium'
import { BlogClient } from './blog-client'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionHeader } from '@/components/section-header'

// Ensure we get fresh data occasionally but benefit from ISR
export const revalidate = 3600; // revalidate at most every hour

export default async function BlogPage() {
  const articles = await fetchMediumArticles()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Insights"
            headline="Our Latest Thinking"
            subtext="Explore insights, tutorials, and case studies on AI, workflow automation, and custom software development."
          />

          <div className="mt-12">
            <BlogClient initialArticles={articles} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

import { fetchMediumArticles } from '@/lib/medium'
import { BlogClient } from './blog-client'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionHeader } from '@/components/section-header'
import { Suspense } from 'react'

export const revalidate = 3600;

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
            <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading articles...</div>}>
              <BlogClient initialArticles={articles} />
            </Suspense>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

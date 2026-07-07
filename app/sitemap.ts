import { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase/server'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://widle.ai'
  const supabase = await createClient()

  // Define static routes
  const staticRoutes = [
    '',
    '/services',
    '/industries',
    '/case-studies',
    '/insights',
    '/company',
    '/careers',
    '/contact',
    '/ai-readiness-quiz',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  try {
    // Fetch dynamic routes from Supabase
    const [
      { data: services },
      { data: caseStudies },
      { data: posts }
    ] = await Promise.all([
      supabase.from('services').select('slug, updated_at').eq('status', 'Published'),
      supabase.from('case_studies').select('slug, updated_at').eq('published', true),
      supabase.from('posts').select('slug, updated_at').eq('published', true),
    ])

    const dynamicServiceRoutes = (services || []).map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(service.updated_at || new Date()),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

    const dynamicCaseStudyRoutes = (caseStudies || []).map((study) => ({
      url: `${baseUrl}/case-studies/${study.slug}`,
      lastModified: new Date(study.updated_at || new Date()),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    const dynamicPostRoutes = (posts || []).map((post) => ({
      url: `${baseUrl}/insights/${post.slug}`,
      lastModified: new Date(post.updated_at || new Date()),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    return [
      ...staticRoutes,
      ...dynamicServiceRoutes,
      ...dynamicCaseStudyRoutes,
      ...dynamicPostRoutes,
    ]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return staticRoutes
  }
}

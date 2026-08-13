import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://widle.ai'

  // Define static routes
  const staticRoutes = [
    '',
    '/services',
    '/industries',
    '/portfolio',
    '/case-studies',
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

  const dynamicServiceRoutes = [
    '/services/gen-ai-llms',
    '/services/mlops',
    '/services/computer-vision',
    '/services/cloud-software',
    '/services/internal-tooling',
    '/services/retool-custom-components',
    '/services/predictive-analytics'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const dynamicCaseStudyRoutes = [
    '/case-studies/medtech-ai-diagnostics',
    '/case-studies/fintech-fraud-detection',
    '/case-studies/retail-demand-forecasting'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  const dynamicPostRoutes = [
    '/insights/future-generative-ai',
    '/insights/trust-in-ai',
    '/insights/mlops-guide'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticRoutes,
    ...dynamicServiceRoutes,
    ...dynamicCaseStudyRoutes,
    ...dynamicPostRoutes,
  ]
}

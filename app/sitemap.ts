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
    '/privacy-policy',
    '/disclaimer',
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
<<<<<<< HEAD
    '/case-studies/retail-demand-forecasting'
=======
    '/case-studies/retail-demand-forecasting',
    '/case-studies/future-generative-ai',
    '/case-studies/trust-in-ai',
    '/case-studies/mlops-guide'
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

<<<<<<< HEAD
  const dynamicPostRoutes = [
    '/case-studies/future-generative-ai',
    '/case-studies/trust-in-ai',
    '/case-studies/mlops-guide'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

=======
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
  return [
    ...staticRoutes,
    ...dynamicServiceRoutes,
    ...dynamicCaseStudyRoutes,
<<<<<<< HEAD
    ...dynamicPostRoutes,
=======
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
  ]
}

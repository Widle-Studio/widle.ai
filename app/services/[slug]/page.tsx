<<<<<<< SEARCH
// Generate metadata for each service page
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) {
    return { title: "Service Not Found | widle.ai" }
  }

  return {
    title: `${service.title} | widle.ai Services`,
    description: service.overview.slice(0, 160),
  }
}
=======
// Generate metadata for each service page
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) {
    return { title: "Service Not Found | wide.ai" }
  }

  return {
    title: `${service.title} Consulting & Development Services | wide.ai`,
    description: service.overview.length > 155 ? `${service.overview.slice(0, 155)}...` : service.overview,
    keywords: [`${service.title} Agency`, `${service.title} Consulting`, 'Enterprise AI Services', 'B2B AI Development'],
    alternates: {
      canonical: `/services/${slug}`,
    }
  }
}
>>>>>>> REPLACE
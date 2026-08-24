// Generate metadata for each service page

interface PageProps {
  params: Promise<{ slug: string }>
}

const servicesData: Record<string, any> = {}

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

export default function Page() {
    return <div>Service</div>
}

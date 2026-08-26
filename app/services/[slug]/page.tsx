import { notFound } from "next/navigation"

export default function ServicePage({ params }: { params: { slug: string } }) {
  // Use slug dynamically but for now fallback
  if (!params.slug) {
    notFound()
  }

  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {params.slug.replace(/-/g, ' ')}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Service details and configuration for {params.slug}.
        </p>
      </div>
    </div>
  )
}

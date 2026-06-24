import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface CaseStudyHeaderProps {
  image: string
  title: string
  client: string
  industry: string
}

export function CaseStudyHeader({
  image,
  title,
  client,
  industry,
}: CaseStudyHeaderProps) {
  return (
    <header className="relative">
      {/* Full-width Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full lg:h-[60vh]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-x-0 bottom-0 pb-12 pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/"
              className="transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href="/case-studies"
              className="transition-colors hover:text-foreground"
            >
              Case Studies
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{client}</span>
          </nav>

          {/* Industry Tag */}
          <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
            {industry}
          </span>

          {/* Title */}
          <h1 className="max-w-4xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>

          {/* Client */}
          <p className="mt-4 text-lg text-muted-foreground">
            Client: <span className="font-medium text-foreground">{client}</span>
          </p>
        </div>
      </div>
    </header>
  )
}

import Image from "next/image"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  clientName: string
  role: string
  companyLogo: string
  companyName: string
}

export function TestimonialCard({
  quote,
  clientName,
  role,
  companyLogo,
  companyName,
}: TestimonialCardProps) {
  return (
    <div className="relative rounded-xl border border-border bg-card p-6 sm:p-8">
      {/* Quote Icon */}
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
        <Quote className="h-5 w-5 text-primary" />
      </div>

      {/* Quote Text */}
      <blockquote className="mb-6 text-pretty text-base leading-relaxed text-card-foreground sm:text-lg">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Client Info */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-card-foreground">{clientName}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>

        {/* Company Logo */}
        <div className="flex h-8 items-center">
          <Image
            src={companyLogo}
            alt={companyName}
            width={100}
            height={32}
            className="h-6 w-auto object-contain opacity-60 grayscale sm:h-8"
          />
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { AnimateIn } from "./animate-in"

import Image from "next/image"

interface ServiceCardProps {
  badgeImage?: string
  badgeText?: string

  icon: LucideIcon
  title: string
  description: string
  href: string
}

export function ServiceCard({ icon: Icon, title, description, href, badgeImage, badgeText }: ServiceCardProps) {
  return (
    <AnimateIn direction="up">
      <div className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/80">
        {/* Gradient Glow */}
        <div className="absolute -inset-px -z-10 rounded-xl bg-gradient-to-b from-primary/20 to-transparent opacity-0 blur-xl transition-opacity group-hover:opacity-100" />

<<<<<<< HEAD

=======
                
>>>>>>> f9e3c0d4346569bd0ae0be3564ebdd45f623edbd
        {/* Partnership Badge */}
        {(badgeImage || badgeText) && (
          <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
             {badgeImage && (
               <div className="relative h-10 w-24">
                 <Image src={badgeImage} alt={badgeText || "Partner Badge"} fill className="object-contain object-right opacity-90 transition-opacity group-hover:opacity-100" />
               </div>
             )}
             {badgeText && (
               <span className="text-[10px] font-bold uppercase tracking-wider text-primary/80">
                 {badgeText}
               </span>
             )}
          </div>
        )}

        {/* Icon */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-6 w-6" />
        </div>

        {/* Title */}
        <h3 className="mb-2 text-lg font-semibold text-card-foreground">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* Read More Link */}
        <Link
          href={href}
          className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-accent/80"
        >
          Read More
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </AnimateIn>
  )
}
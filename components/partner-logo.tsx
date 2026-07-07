import Image from "next/image"

interface PartnerLogoProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export function PartnerLogo({
  src,
  alt,
  width = 140,
  height = 48,
}: PartnerLogoProps) {
  return (
    <div className="group flex items-center justify-center p-4">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-8 w-auto object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:h-10"
      />
    </div>
  )
}

interface PartnerLogosGridProps {
  logos: Array<{
    src: string
    alt: string
  }>
}

export function PartnerLogosGrid({ logos }: PartnerLogosGridProps) {
  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by innovative companies
        </p>
        <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-4 lg:grid-cols-6">
          {logos.map((logo, index) => (
            <PartnerLogo key={index} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  )
}

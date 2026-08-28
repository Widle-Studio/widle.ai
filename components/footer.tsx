import Link from "next/link"
import { ExternalLink } from "lucide-react"

const serviceLinks = [
  { label: "LLMs & RAG", href: "/services/generative-ai" },
  { label: "AI Agents", href: "/services/generative-ai" },
  { label: "MLOps", href: "/services/mlops" },
  { label: "Computer Vision", href: "/services/computer-vision" },
  { label: "Predictive Analytics", href: "/services/predictive-ai" },
]

const companyLinks = [
  { label: "Company", href: "/company" },
  { label: "Blog", href: "/resources" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  
  { label: "Industries", href: "/industries" },
  { label: "AI Readiness Quiz", href: "/ai-readiness-quiz" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
]

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/widlestudio/", icon: ExternalLink },
  { label: "GitHub", href: "https://github.com/Widle-Studio", icon: ExternalLink },
  { label: "X (Twitter)", href: "https://x.com/widle_ai", icon: ExternalLink },
  { label: "Instagram", href: "https://instagram.com/widle.ai", icon: ExternalLink },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCyD_47xWqS5yV1R45uQzMaw", icon: ExternalLink },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">W</span>
              </div>
              <span className="text-xl font-semibold tracking-tight text-foreground">
                widle<span className="text-primary">.ai</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Transforming enterprises with intelligent AI solutions. Building the future of business, one algorithm at a time.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-accent hover:bg-accent/10 hover:text-accent"
                >
                  <span className="sr-only">{social.label}</span>
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="mt-6" id="contact-footer">
              <p className="text-sm text-muted-foreground">
                Contact us at
              </p>
              <a
                href="mailto:info@widle.ai"
                className="text-sm font-medium text-accent hover:underline"
              >

                info@widle.ai
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} widle.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

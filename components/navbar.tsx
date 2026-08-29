"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"
import { Menu, X, Brain, ChevronDown } from "lucide-react"
import { Menu, X, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  {
    label: "Tech Expertise",
    href: "/services",
    subItems: [
      { label: "Generative AI", href: "/services/generative-ai" },
      { label: "Computer Vision", href: "/services/computer-vision" },
      { label: "Predictive AI", href: "/services/predictive-ai" },
      { label: "NLP", href: "/services/nlp" },
      { label: "Data Engineering", href: "/services/data-engineering" },
      { label: "MLOps", href: "/services/mlops" },
    ]
  },
  {
    label: "Industries",
    href: "/industries",
    subItems: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Finance", href: "/industries/finance" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Technology", href: "/industries/technology" },
      { label: "Telecom", href: "/industries/telecom" },
      { label: "PE/VC", href: "/industries/pe-vc" },
    ]
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Portfolio", href: "/portfolio" },
  {
    label: "Company",
    href: "/company",
    subItems: [
      { label: "About Us", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "Credentials", href: "/credentials" },
    ]
  },
  {
    label: "Resources",
    href: "/resources",
    subItems: [
      { label: "Insights", href: "/insights" },
      { label: "AI Readiness Quiz", href: "/ai-readiness-quiz" },
    ]
  },
  { label: "Tech Expertise", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Company", href: "/company" },
  { label: "Resources", href: "/resources" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel-strong border-b-0 rounded-none">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
            <Brain className="size-4" />
          </span>
          <span className="text-xl tracking-tighter font-bold">widle<span className="text-primary">.ai</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground lg:flex">
          {navItems.map((item) => (
            item.subItems ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger className="flex items-center gap-1 transition hover:text-foreground hover:scale-105 outline-none">
                  {item.label} <ChevronDown className="size-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-background/95 backdrop-blur-md">
                  <DropdownMenuItem className="font-semibold text-primary cursor-pointer p-0">
                    <Link href={item.href} className="w-full h-full px-2 py-1.5">Overview</Link>
                  </DropdownMenuItem>
                  {item.subItems.map(subItem => (
                    <DropdownMenuItem key={subItem.label} className="cursor-pointer p-0">
                      <Link href={subItem.href} className="w-full h-full px-2 py-1.5">{subItem.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-foreground hover:scale-105"
              >
                {item.label}
              </Link>
            )
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-foreground hover:scale-105"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA & Theme Button */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Button asChild>
            <Link href="/contact">Talk to us</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden max-h-[80vh] overflow-y-auto">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.subItems && (
                  <div className="pl-6 space-y-1 mt-1">
                    {item.subItems.map(subItem => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 pb-6">
            <div className="pt-4">
              <Button className="w-full">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Talk to us</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

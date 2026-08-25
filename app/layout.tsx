import { Metadata } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wide.ai'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'wide.ai | Custom AI & LLM Development Agency',
    template: '%s | wide.ai - Enterprise AI Solutions',
  },
  description: 'wide.ai is a premier AI and tech service agency specializing in custom LLM development, AI consulting, machine learning solutions, and workflow automation for global B2B enterprises.',
  keywords: ['AI Agency', 'Custom LLM Development', 'AI Consulting', 'Machine Learning Solutions', 'AI Workflow Automation', 'Enterprise AI Services', 'B2B Tech Agency'],
  authors: [{ name: 'wide.ai Team' }],
  creator: 'wide.ai',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'wide.ai | Custom AI & LLM Development Agency',
    description: 'Transform your business with cutting-edge AI solutions. wide.ai delivers enterprise-grade artificial intelligence services including custom LLMs, Computer Vision, and MLOps.',
    siteName: 'wide.ai',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'wide.ai - Enterprise AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'wide.ai | Custom AI & LLM Development Agency',
    description: 'Transform your business with cutting-edge AI solutions. wide.ai delivers enterprise-grade artificial intelligence services.',
    images: ['/og-image.png'],
    creator: '@wideai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

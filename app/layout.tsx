import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ChatWidget } from '@/components/chat-widget'
import { CookieConsent } from '@/components/cookie-consent'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://widle.ai'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'widle.ai | Enterprise AI Solutions',
    template: '%s | widle.ai',
  },
  description: 'Transform your business with cutting-edge AI solutions. widle.ai delivers enterprise-grade artificial intelligence services including LLMs, Computer Vision, and MLOps.',
  keywords: ['AI', 'Artificial Intelligence', 'Enterprise AI', 'LLM', 'Machine Learning', 'Computer Vision', 'RAG'],
  authors: [{ name: 'widle.ai' }],
  creator: 'widle.ai',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'widle.ai | Enterprise AI Solutions',
    description: 'Transform your business with cutting-edge AI solutions. widle.ai delivers enterprise-grade artificial intelligence services.',
    siteName: 'widle.ai',
    images: [
      {
        url: '/og-image.png', // We'll assume this image exists or will be added
        width: 1200,
        height: 630,
        alt: 'widle.ai - Enterprise AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'widle.ai | Enterprise AI Solutions',
    description: 'Transform your business with cutting-edge AI solutions.',
    images: ['/og-image.png'],
    creator: '@widleai',
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
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <ChatWidget />
        <CookieConsent />
      </body>
    </html>
  )
}

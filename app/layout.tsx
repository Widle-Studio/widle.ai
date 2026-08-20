import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ChatWidget } from '@/components/chat-widget'
import { CookieConsent } from '@/components/cookie-consent'



const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://widle.ai'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Widle Studio | Enterprise AI & Tech Innovation Agency',
    template: '%s | Widle Studio',
  },
  description: 'Global tech agency specializing in Enterprise AI, Machine Learning consulting, LLM integration, and custom cloud architectures to scale and automate your business operations.',
  keywords: ['Enterprise AI', 'Machine Learning Consulting', 'LLM Integration', 'Tech Agency', 'Cloud Software Architecture', 'Custom Retool Dashboard', 'Global IT Consulting', 'Widle'],
  authors: [{ name: 'Widle Studio' }],
  creator: 'Widle Studio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'Widle Studio | Enterprise AI & Tech Innovation Agency',
    description: 'Global tech agency specializing in Enterprise AI, Machine Learning consulting, LLM integration, and custom cloud architectures to scale and automate your business operations.',
    siteName: 'Widle Studio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Widle Studio - Enterprise AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Widle Studio | Enterprise AI & Tech Innovation Agency',
    description: 'Global tech agency specializing in Enterprise AI, Machine Learning consulting, and custom cloud architectures.',
    images: ['/og-image.png'],
    creator: '@widlestudio',
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

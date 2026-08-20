<<<<<<< SEARCH
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
=======
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
>>>>>>> REPLACE
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import CustomNavigation from '@/components/CustomNavigation'
import PageTransition from '@/components/PageTransition'
import ErrorBoundary from '@/components/ErrorBoundary'
import StructuredData from '@/components/StructuredData'
import LoadingOverlay from '@/components/LoadingOverlay'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  preload: true,
  fallback: ['monospace'],
})

export const metadata: Metadata = {
  title: 'Nathan Samson – Full Stack Engineer Portfolio',
  description: 'Portfolio showcasing full stack development, AI systems, and platform architecture by Nathan Samson, a senior software engineer specializing in scalable distributed systems.',
  keywords: ['systems architect', 'software engineering', 'distributed systems', 'cloud architecture', 'portfolio'],
  authors: [{ name: 'Nathan Samson' }],
  creator: 'Nathan Samson',
  publisher: 'Nathan Samson',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nathansamson.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nathan Samson – Full Stack Engineer Portfolio',
    description: 'Portfolio showcasing full stack development, AI systems, and platform architecture by Nathan Samson, a senior software engineer specializing in scalable distributed systems.',
    url: 'https://nathansamson.dev',
    siteName: 'Nathan Samson Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nathan Samson - Systems Architect Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nathan Samson – Systems Architect Portfolio',
    description: 'Portfolio showcasing systems architecture, engineering excellence, and innovative solutions.',
    creator: '@nathan_samson',
    images: ['/og-image.png'],
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
  verification: {
    google: 'your-google-site-verification-code',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <StructuredData metadata={metadata} type="person" />
        <LoadingOverlay />
        <div className="min-h-screen bg-background">
          <CustomNavigation />
          <ErrorBoundary>
            <main id="main-content" className="transition-all duration-300">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
          </ErrorBoundary>
        </div>
      </body>
    </html>
  )
}


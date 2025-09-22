import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ConditionalLayout from '@/components/ConditionalLayout'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata = {
  title: {
    default: 'PGC Jhang - Excellence in Education Since 1958',
    template: '%s | PGC Jhang'
  },
  description: 'Punjab Group of Colleges Jhang - Providing quality intermediate education in Pre-Medical, Pre-Engineering, ICS, and Commerce programs since 1958.',
  keywords: ['PGC Jhang', 'Punjab Group of Colleges', 'Intermediate Education', 'FSc Pre-Medical', 'FSc Pre-Engineering', 'ICS', 'I.Com', 'Jhang', 'Pakistan'],
  authors: [{ name: 'PGC Jhang' }],
  creator: 'PGC Jhang',
  publisher: 'PGC Jhang',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.png', type: 'image/png', sizes: '16x16' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://pgcjhang.com',
    siteName: 'PGC Jhang',
    title: 'PGC Jhang - Excellence in Education Since 1958',
    description: 'Punjab Group of Colleges Jhang - Providing quality intermediate education since 1958.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'PGC Jhang Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PGC Jhang - Excellence in Education Since 1958',
    description: 'Punjab Group of Colleges Jhang - Providing quality intermediate education since 1958.',
    images: ['/images/logo.png'],
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
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#ffffff',
              color: '#1f2937',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.15)',
            },
            success: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#ffffff',
              },
            },
            error: {
              iconTheme: {
                primary: '#dc2626',
                secondary: '#ffffff',
              },
            },
          }}
        />
      </body>
    </html>
  )
}

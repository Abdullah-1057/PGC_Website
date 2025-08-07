import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata = {
  title: {
    default: 'PGC Dhamyal - Excellence in Education Since 1958',
    template: '%s | PGC Dhamyal'
  },
  description: 'Punjab Group of Colleges Dhamyal - Providing quality intermediate education in Pre-Medical, Pre-Engineering, ICS, and Commerce programs since 1958.',
  keywords: ['PGC Dhamyal', 'Punjab Group of Colleges', 'Intermediate Education', 'FSc Pre-Medical', 'FSc Pre-Engineering', 'ICS', 'I.Com', 'Rawalpindi', 'Pakistan'],
  authors: [{ name: 'PGC Dhamyal' }],
  creator: 'PGC Dhamyal',
  publisher: 'PGC Dhamyal',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://pgcdhamyal.edu.pk',
    siteName: 'PGC Dhamyal',
    title: 'PGC Dhamyal - Excellence in Education Since 1958',
    description: 'Punjab Group of Colleges Dhamyal - Providing quality intermediate education since 1958.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'PGC Dhamyal Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PGC Dhamyal - Excellence in Education Since 1958',
    description: 'Punjab Group of Colleges Dhamyal - Providing quality intermediate education since 1958.',
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
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-white dark:bg-brand-bg-dark">
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
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
        </div>
      </body>
    </html>
  )
}

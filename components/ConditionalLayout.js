'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ConditionalLayout({ children }) {
  const pathname = usePathname()
  
  // Login page check commented out - login page now redirects to home
  // Don't show navbar and footer on login page
  // if (pathname === '/login') {
  //   return <>{children}</>
  // }
  
  // Show navbar and footer on all pages (including login redirect)
  return (
    <div className="min-h-screen bg-white dark:bg-brand-bg-dark">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

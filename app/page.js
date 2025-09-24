'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { isAuthenticated } from '@/lib/auth'
import Hero from '@/components/sections/Hero'
import ProgramsOverview from '@/components/sections/ProgramsOverview'
import WhyPGC from '@/components/sections/WhyPGC'
import LabsShowcase from '@/components/sections/LabsShowcase'
import StatsForTrust from '@/components/sections/StatsForTrust'
import EventsNotices from '@/components/sections/EventsNotices'
import LeadershipMessages from '@/components/sections/LeadershipMessages'
import AffiliatedPrograms from '@/components/sections/AffiliatedPrograms'
import AdmissionsCTA from '@/components/sections/AdmissionsCTA'

export default function Home() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = isAuthenticated()
      
      if (authStatus) {
        setIsAuth(true)
      } else {
        window.location.href = '/login'
      }
      setIsLoading(false)
    }

    // Add a small delay to ensure localStorage is available
    setTimeout(checkAuth, 100)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-navy-900 to-brand-navy-950 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuth) {
    return null
  }

  return (
    <>
      <Hero />
      <LeadershipMessages />
      <ProgramsOverview />
      <AffiliatedPrograms />
      <WhyPGC />
      <LabsShowcase />
      <StatsForTrust />
      <EventsNotices />
      <AdmissionsCTA />
    </>
  )
}

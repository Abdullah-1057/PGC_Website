import Hero from '@/components/sections/Hero'
import ProgramsOverview from '@/components/sections/ProgramsOverview'
import WhyPGC from '@/components/sections/WhyPGC'
import LabsShowcase from '@/components/sections/LabsShowcase'
import StatsForTrust from '@/components/sections/StatsForTrust'
import EventsNotices from '@/components/sections/EventsNotices'
import AdmissionsCTA from '@/components/sections/AdmissionsCTA'

export const metadata = {
  title: 'Home',
  description: 'PGC Jhang - Excellence in Education Since 1958. Join thousands of successful students in our comprehensive intermediate programs.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <ProgramsOverview />
      <WhyPGC />
      <LabsShowcase />
      <StatsForTrust />
      <EventsNotices />
      <AdmissionsCTA />
    </>
  )
}

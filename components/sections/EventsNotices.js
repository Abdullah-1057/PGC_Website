'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Container from '../Container'
import Section from '../Section'
import EventCard from '../EventCard'
import Reveal from '../Reveal'
import { eventsData } from '@/data/events'

export default function EventsNotices() {
  // Get sports gala events specifically
  const sportsGalaEvents = eventsData.filter(event => 
    event.title.toLowerCase().includes('sports gala') && 
    !event.title.toLowerCase().includes('opening') && 
    !event.title.toLowerCase().includes('closing') &&
    !event.title.toLowerCase().includes('group')
  ).slice(0, 2)
  
  const upcomingEvents = eventsData.slice(0, 3)

  return (
    <Section background="white" padding="lg">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Events */}
          <div>
          <Reveal>
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-2 bg-brand-secondary-100 text-brand-secondary-700 rounded-full text-sm font-semibold mb-6"
              >
                📅 What's Happening
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-secondary-500 mb-6 heading-gradient">
                Sports Gala Highlights
              </h2>
              <p className="text-lg text-brand-muted-600 leading-relaxed">
                Experience the excitement of our annual sports gala with thrilling competitions, 
                athletic events, and memorable moments that showcase student talent and sportsmanship.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {sportsGalaEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/events"
                  className="inline-flex items-center text-brand-primary-500 hover:text-brand-primary-600 font-semibold text-lg group"
                >
                  <span>View All Events</span>
                  <motion.svg 
                    className="ml-2 h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
              </motion.div>
            </div>
          </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}
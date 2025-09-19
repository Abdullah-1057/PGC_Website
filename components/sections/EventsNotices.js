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
                <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-secondary-900 mb-6 heading-gradient">
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

          {/* Important Notices */}
          <div>
            <Reveal>
              <div className="mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-block px-4 py-2 bg-brand-accent-100 text-brand-accent-700 rounded-full text-sm font-semibold mb-6"
                >
                  📢 Important Updates
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-secondary-900 mb-6 heading-gradient">
                  Latest Notices
                </h2>
                <p className="text-lg text-brand-muted-600 leading-relaxed">
                  Key announcements and updates for students, parents, and faculty members.
                </p>
              </div>
            </Reveal>

            <motion.div 
              className="bg-gradient-soft rounded-2xl p-8 shadow-soft"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6">
                {[
                  {
                    title: 'Admission Open for Session 2025-25',
                    date: '2025-01-15',
                    urgent: true,
                    icon: '🎓'
                  },
                  {
                    title: 'Annual Sports Day - February 20th',
                    date: '2025-01-10',
                    urgent: false,
                    icon: '🏆'
                  },
                  {
                    title: 'Parent-Teacher Meeting Schedule',
                    date: '2025-01-08',
                    urgent: false,
                    icon: '👥'
                  },
                  {
                    title: 'Fee Submission Deadline Extended',
                    date: '2025-01-05',
                    urgent: true,
                    icon: '💰'
                  }
                ].map((notice, index) => (
                  <motion.div
                    key={notice.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group"
                  >
                    <motion.div
                      className="flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-medium transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="text-2xl">{notice.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-brand-secondary-900 group-hover:text-brand-primary-500 transition-colors">
                            {notice.title}
                          </h4>
                          {notice.urgent && (
                            <motion.span
                              className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full"
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              Urgent
                            </motion.span>
                          )}
                        </div>
                        <p className="text-sm text-brand-muted-500">
                          {new Date(notice.date).toLocaleDateString('en-PK', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 5 }}
                      >
                        <svg className="w-5 h-5 text-brand-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 pt-6 border-t border-brand-muted-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  href="/notices"
                  className="inline-flex items-center text-brand-primary-500 hover:text-brand-primary-600 font-medium group"
                >
                  <span>View All Notices</span>
                  <motion.svg 
                    className="ml-2 h-4 w-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

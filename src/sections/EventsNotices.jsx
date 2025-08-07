import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import Section from '../components/Section';
import EventCard from '../components/EventCard';
import Reveal from '../components/Reveal';
import { eventsData } from '../data/events';

export default function EventsNotices() {
  const upcomingEvents = eventsData.slice(0, 3);

  return (
    <Section background="white" padding="lg">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Events */}
          <div>
            <Reveal>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-brand-secondary-900 mb-4">
                  Upcoming Events
                </h2>
                <p className="text-lg text-brand-muted-600">
                  Stay updated with our latest events, workshops, and important announcements.
                </p>
              </div>
            </Reveal>

            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <EventCard event={event} />
                </motion.div>
              ))}
            </div>

            <Reveal delay={0.4}>
              <div className="mt-8">
                <Link
                  to="/events"
                  className="inline-flex items-center text-brand-primary-500 hover:text-brand-primary-600 font-semibold group"
                >
                  View All Events
                  <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Important Notices */}
          <div>
            <Reveal>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-brand-secondary-900 mb-4">
                  Important Notices
                </h2>
                <p className="text-lg text-brand-muted-600">
                  Key announcements and updates for students and parents.
                </p>
              </div>
            </Reveal>

            <div className="bg-brand-muted-50 rounded-xl p-6">
              <div className="space-y-4">
                {[
                  {
                    title: 'Admission Open for Session 2024-25',
                    date: '2024-01-15',
                    urgent: true
                  },
                  {
                    title: 'Annual Sports Day - February 20th',
                    date: '2024-01-10',
                    urgent: false
                  },
                  {
                    title: 'Parent-Teacher Meeting Schedule',
                    date: '2024-01-08',
                    urgent: false
                  },
                  {
                    title: 'Fee Submission Deadline Extended',
                    date: '2024-01-05',
                    urgent: true
                  }
                ].map((notice, index) => (
                  <motion.div
                    key={notice.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-3 bg-white rounded-lg hover:shadow-sm transition-shadow"
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      notice.urgent ? 'bg-red-500' : 'bg-brand-primary-500'
                    }`}></div>
                    <div className="flex-1">
                      <h4 className="font-medium text-brand-secondary-900 mb-1">
                        {notice.title}
                      </h4>
                      <p className="text-sm text-brand-muted-500">
                        {new Date(notice.date).toLocaleDateString('en-PK', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

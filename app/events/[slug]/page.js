import { notFound } from 'next/navigation'
import Image from 'next/image'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Badge from '@/components/Badge'
import Reveal from '@/components/Reveal'
import { eventsData } from '@/data/events'

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }))
}

export async function generateMetadata({ params }) {
  const event = eventsData.find(event => event.slug === params.slug)
  
  if (!event) {
    return {
      title: 'Event Not Found',
    }
  }

  return {
    title: event.title,
    description: event.description,
  }
}

export default function EventDetail({ params }) {
  const event = eventsData.find(event => event.slug === params.slug)
  
  if (!event) {
    notFound()
  }

  const eventDate = new Date(event.date)

  return (
    <div className="pt-16">
      <Section background="white" padding="lg">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Reveal>
              <div className="mb-8">
                <Button 
                  href="/events" 
                  variant="outline"
                  className="inline-flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Events
                </Button>
              </div>
            </Reveal>

            {/* Event Header */}
            <Reveal>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="primary">{event.category}</Badge>
                  <span className="text-sm text-brand-muted-600">
                    {eventDate.toLocaleDateString('en-PK', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-display text-brand-secondary-900 mb-4">
                  {event.title}
                </h1>
                <p className="text-xl text-brand-muted-600">
                  {event.description}
                </p>
              </div>
            </Reveal>

            {/* Event Image */}
            <Reveal delay={0.2}>
              <div className="mb-8">
                <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </Reveal>

            {/* Event Details */}
            <Reveal delay={0.3}>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-brand-muted-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-brand-secondary-900 mb-4">
                    Event Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-brand-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-brand-muted-600">Date:</span>
                      <span className="ml-2 font-semibold">
                        {eventDate.toLocaleDateString('en-PK', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-brand-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-brand-muted-600">Location:</span>
                      <span className="ml-2 font-semibold">{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-brand-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      <span className="text-brand-muted-600">Category:</span>
                      <span className="ml-2 font-semibold">{event.category}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-primary-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-brand-secondary-900 mb-4">
                    Join This Event
                  </h3>
                  <p className="text-brand-muted-600 mb-6">
                    Don't miss out on this exciting event! Register now to secure your spot.
                  </p>
                  <div className="space-y-3">
                    <Button href="/contact" className="w-full" size="lg">
                      Register Now
                    </Button>
                    <Button 
                      href="/contact" 
                      variant="outline" 
                      className="w-full"
                    >
                      Get More Information
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Event Description */}
            <Reveal delay={0.4}>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-secondary-900 mb-6">
                  About This Event
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-brand-muted-600 leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <p className="text-brand-muted-600 leading-relaxed">
                    This event is part of our ongoing commitment to providing students with 
                    enriching experiences beyond the classroom. We believe in holistic education 
                    that combines academic excellence with co-curricular activities that help 
                    students develop essential life skills, leadership qualities, and a sense of 
                    community.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Related Events */}
            <Reveal delay={0.5}>
              <div className="border-t border-brand-muted-200 pt-12">
                <h2 className="text-3xl font-bold text-brand-secondary-900 mb-8">
                  Other Events
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {eventsData
                    .filter(e => e.id !== event.id)
                    .slice(0, 3)
                    .map((relatedEvent) => (
                      <div key={relatedEvent.id} className="bg-white rounded-xl shadow-sm border border-brand-muted-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative h-32 w-full">
                          <Image
                            src={relatedEvent.image}
                            alt={relatedEvent.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <Badge variant="primary" className="text-xs mb-2">
                            {relatedEvent.category}
                          </Badge>
                          <h3 className="font-semibold text-brand-secondary-900 mb-2 line-clamp-2">
                            {relatedEvent.title}
                          </h3>
                          <p className="text-sm text-brand-muted-600 line-clamp-2">
                            {relatedEvent.description}
                          </p>
                          <Button 
                            href={`/events/${relatedEvent.slug}`} 
                            variant="outline" 
                            size="sm" 
                            className="mt-3 w-full"
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </div>
  )
}

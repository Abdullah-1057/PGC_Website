import Container from '../components/Container';
import Section from '../components/Section';
import EventCard from '../components/EventCard';
import Reveal from '../components/Reveal';
import { eventsData } from '../data/events';

export default function Events() {
  return (
    <div className="pt-16">
      <Section background="white" padding="lg">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold font-display text-brand-secondary-900 mb-6">
                Events & Activities
              </h1>
              <p className="text-xl text-brand-muted-600 max-w-3xl mx-auto">
                Stay updated with our latest events, workshops, seminars, and 
                co-curricular activities happening at PGC Dhamyal.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.map((event, index) => (
              <Reveal key={event.id} delay={index * 0.1}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}

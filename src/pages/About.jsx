import Container from '../components/Container';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

export default function About() {
  return (
    <div className="pt-16">
      <Section background="white" padding="lg">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold font-display text-brand-secondary-900 mb-6">
                About PGC Dhamyal
              </h1>
              <p className="text-xl text-brand-muted-600 max-w-3xl mx-auto">
                Established in 1958, Punjab Group of Colleges Dhamyal has been a beacon 
                of educational excellence for over six decades.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <Reveal>
              <div>
                <h2 className="text-3xl font-bold text-brand-secondary-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-brand-muted-600 mb-4">
                  To provide quality education that empowers students with knowledge, 
                  skills, and values necessary for success in higher education and 
                  professional life.
                </p>
                <p className="text-lg text-brand-muted-600">
                  We are committed to fostering an environment of academic excellence, 
                  character development, and social responsibility.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <img 
                src="/college-mission-vision.png"
                alt="Our Mission" 
                className="rounded-xl shadow-lg"
              />
            </Reveal>
          </div>

          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-brand-secondary-900 mb-8">
                Our Facilities
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Science Laboratories',
                description: 'Modern physics, chemistry, and biology labs with latest equipment.',
                image: '/science-laboratory.png'
              },
              {
                title: 'Computer Lab',
                description: 'State-of-the-art computer lab with high-speed internet.',
                image: '/computer-laboratory.png'
              },
              {
                title: 'Library',
                description: 'Comprehensive library with books, journals, and digital resources.',
                image: '/college-library.png'
              },
              {
                title: 'Sports Complex',
                description: 'Indoor and outdoor sports facilities for various games.',
                image: '/modern-sports-complex.png'
              },
              {
                title: 'Auditorium',
                description: 'Modern auditorium for events, seminars, and cultural activities.',
                image: '/college-auditorium.png'
              },
              {
                title: 'Cafeteria',
                description: 'Hygienic cafeteria serving nutritious meals and snacks.',
                image: '/bustling-college-cafeteria.png'
              }
            ].map((facility, index) => (
              <Reveal key={facility.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-sm border border-brand-muted-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-brand-secondary-900 mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-brand-muted-600">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}

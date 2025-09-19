import Image from 'next/image'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Reveal from '@/components/Reveal'

export const metadata = {
  title: 'About Us',
  description: 'Learn about PGC Jhang - our mission, facilities, and commitment to educational excellence since 1958.',
}

export default function About() {
  return (
    <div className="pt-16">
      <Section background="white" padding="lg">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold font-display text-brand-secondary-900 mb-6">
                About PGC Jhang
              </h1>
              <p className="text-xl text-brand-muted-600 max-w-3xl mx-auto">
                Established in 1958, Punjab Group of Colleges Jhang has been a beacon 
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
              <Image 
                src="/placeholder.png?height=400&width=600&text=Our+Mission"
                alt="Our Mission" 
                width={600}
                height={400}
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
                image: '/Images/Labs/science-lab-1.jpeg'
              },
              {
                title: 'Advanced Science Lab',
                description: 'Fully equipped laboratory for advanced scientific experiments and research.',
                image: '/Images/Labs/science-lab-2.jpeg'
              },
              {
                title: 'Computer Lab',
                description: 'State-of-the-art computer lab with high-speed internet and modern technology.',
                image: '/Images/Labs/computer-lab-1.jpeg'
              },
              {
                title: 'Advanced Computer Lab',
                description: 'Cutting-edge computer facility with latest hardware and software.',
                image: '/Images/Labs/computer-lab-2.jpeg'
              },
              {
                title: 'Library',
                description: 'Comprehensive library with books, journals, and digital resources.',
                image: '/college-library.png'
              },
            ].map((facility, index) => (
              <Reveal key={facility.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-sm border border-brand-muted-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <Image 
                    src={facility.image || "/placeholder.png"}
                    alt={facility.title}
                    width={300}
                    height={200}
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
  )
}

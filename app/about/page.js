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
              <h1 className="text-4xl md:text-5xl font-bold font-display text-brand-secondary-500 mb-6">
                About PGC Jhang
              </h1>
              <p className="text-xl text-brand-muted-600 max-w-3xl mx-auto">
                Established in 1958, Punjab Group of Colleges Jhang has been a beacon 
                of educational excellence for over six decades.
                Hear from our leadership team about their vision and commitment to educational excellence.

              </p>
            </div>
          </Reveal>


          {/* Leadership Messages Section */}
          {/* <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-brand-secondary-500 mb-8">
                Leadership Messages
              </h2>
              <p className="text-lg text-brand-muted-600 max-w-3xl mx-auto">
                Hear from our leadership team about their vision and commitment to educational excellence.
              </p>
            </div>
          </Reveal> */}

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Director Message */}
            <Reveal delay={0.1}>
              <div className="bg-white rounded-xl shadow-sm border border-brand-muted-200 p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center mb-6">
                  <Image 
                    src="/about/1about.jpeg"
                    alt="Colonel Ahmad Khan - Director"
                    width={120}
                    height={120}
                    className="rounded-full object-cover mb-4 border-4 border-brand-primary-100"
                  />
                  <h3 className="text-xl font-bold text-brand-secondary-500 mb-2">
                    Colonel Ahmad Khan
                  </h3>
                  <p className="text-brand-primary-500 font-semibold">
                    Director, Punjab College Jhang
                  </p>
                </div>
                <blockquote className="text-brand-muted-600 italic leading-relaxed">
                  "Welcome to Punjab College Jhang, where we are committed to shaping the next generation of legal minds. Our focus is on providing a strong foundation in legal theory, practical skills, and ethical values. With experienced faculty, dynamic programs, and hands-on learning opportunities, we prepare students to lead with integrity in the legal profession. We invite you to be part of this journey of growth and knowledge."
                </blockquote>
              </div>
            </Reveal>

            {/* Executive Director Message */}
            <Reveal delay={0.2}>
              <div className="bg-white rounded-xl shadow-sm border border-brand-muted-200 p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center mb-6">
                  <Image 
                    src="/about/2about.jpeg"
                    alt="Shiekh Abdul Waheed - Executive Director"
                    width={120}
                    height={120}
                    className="rounded-full object-cover mb-4 border-4 border-brand-primary-100"
                  />
                  <h3 className="text-xl font-bold text-brand-secondary-500 mb-2">
                    Shiekh Abdul Waheed
                  </h3>
                  <p className="text-brand-primary-500 font-semibold">
                    Executive Director, Punjab College Jhang
                  </p>
                </div>
                <blockquote className="text-brand-muted-600 italic leading-relaxed">
                  "Punjab College Jhang offers a dynamic and rigorous legal education that prepares you for the challenges of the modern legal landscape. Our expert faculty, practical curriculum, and strong alumni network provide the perfect foundation for your future."
                </blockquote>
              </div>
            </Reveal>

            {/* Principal Message */}
            <Reveal delay={0.3}>
              <div className="bg-white rounded-xl shadow-sm border border-brand-muted-200 p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center mb-6">
                  <Image 
                    src="/about/3about.jpeg"
                    alt="Shabbar Abbas - Principal"
                    width={120}
                    height={120}
                    className="rounded-full object-cover mb-4 border-4 border-brand-primary-100"
                  />
                  <h3 className="text-xl font-bold text-brand-secondary-500 mb-2">
                    Shabbar Abbas
                  </h3>
                  <p className="text-brand-primary-500 font-semibold">
                    Principal, Punjab College Jhang
                  </p>
                </div>
                <blockquote className="text-brand-muted-600 italic leading-relaxed">
                  "It is with great pride and purpose that I welcome you to our institution—a place where minds are nurtured, values are instilled, and futures are shaped. At the heart of our academic community lies a commitment to excellence, innovation, and integrity. We believe that education is not merely about acquiring knowledge, but about developing character, critical thinking, and a sense of responsibility toward society."
                </blockquote>
              </div>
            </Reveal>

            {/* University Coordinator Message */}
            <Reveal delay={0.4}>
              <div className="bg-white rounded-xl shadow-sm border border-brand-muted-200 p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center mb-6">
                  <Image 
                    src="/about/4about.jpeg"
                    alt="Hafiz Muhammad Masood - University Coordinator"
                    width={120}
                    height={120}
                    className="rounded-full object-cover mb-4 border-4 border-brand-primary-100"
                  />
                  <h3 className="text-xl font-bold text-brand-secondary-500 mb-2">
                    Hafiz Muhammad Masood
                  </h3>
                  <p className="text-brand-primary-500 font-semibold">
                    University Coordinator, Punjab College Jhang
                  </p>
                </div>
                <blockquote className="text-brand-muted-600 italic leading-relaxed">
                  "As University Coordinator at Punjab College Jhang, my focus is on guiding students towards academic excellence and professional growth. We strive to maintain a supportive learning environment, ensure academic standards, and prepare our students with the skills, ethics, and confidence needed for success in the legal profession."
                </blockquote>
              </div>
            </Reveal>
          </div>

          {/* <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-brand-secondary-500 mb-8">
                Our Facilities
              </h2>
            </div>
          </Reveal> */}

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <h3 className="text-xl font-semibold text-brand-secondary-500 mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-brand-muted-600">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div> */}
        </Container>
      </Section>
    </div>
  )
}

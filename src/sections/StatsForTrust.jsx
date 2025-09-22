import Container from '../components/Container';
import Section from '../components/Section';
import Counter from '../components/Counter';
import Reveal from '../components/Reveal';

const stats = [
  { label: 'Years of Excellence', value: 65, suffix: '+' },
  { label: 'Students Enrolled', value: 5000, suffix: '+' },
  { label: 'Qualified Faculty', value: 150, suffix: '+' },
  { label: 'Success Rate', value: 95, suffix: '%' },
];

export default function StatsForTrust() {
  return (
    <Section background="primary" padding="lg">
      <Container>
        <div className="text-center text-white">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-white/90 mb-16 max-w-3xl mx-auto">
              Our track record speaks for itself. Join the legacy of excellence 
              that has shaped countless successful careers.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold font-display mb-2 text-yellow-300">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-lg" style={{ color: 'white' }}>
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

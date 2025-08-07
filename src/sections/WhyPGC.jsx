import { 
  BeakerIcon, 
  BookOpenIcon, 
  UserGroupIcon, 
  TrophyIcon 
} from '@heroicons/react/24/outline';
import Container from '../components/Container';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';
import Reveal from '../components/Reveal';

const features = [
  {
    title: 'Modern Labs & Library',
    description: 'State-of-the-art science laboratories and a comprehensive library with digital resources.',
    icon: BeakerIcon,
  },
  {
    title: 'Qualified Faculty',
    description: 'Experienced teachers with advanced degrees committed to student success.',
    icon: BookOpenIcon,
  },
  {
    title: 'Co-curricular Activities',
    description: 'Sports, debates, cultural events, and clubs to develop well-rounded personalities.',
    icon: UserGroupIcon,
  },
  {
    title: 'Outstanding Results',
    description: 'Consistent high performance in board examinations and university admissions.',
    icon: TrophyIcon,
  },
];

export default function WhyPGC() {
  return (
    <Section background="muted" padding="lg">
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-brand-secondary-900 mb-4">
              Why Choose PGC Dhamyal?
            </h2>
            <p className="text-xl text-brand-muted-600 max-w-3xl mx-auto">
              We provide a comprehensive educational experience that goes beyond textbooks, 
              preparing students for success in academics and life.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

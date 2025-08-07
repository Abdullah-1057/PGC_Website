import Hero from '../sections/Hero';
import ProgramsOverview from '../sections/ProgramsOverview';
import WhyPGC from '../sections/WhyPGC';
import StatsForTrust from '../sections/StatsForTrust';
import EventsNotices from '../sections/EventsNotices';
import AdmissionsCTA from '../sections/AdmissionsCTA';

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <ProgramsOverview />
      <WhyPGC />
      <StatsForTrust />
      <EventsNotices />
      <AdmissionsCTA />
    </div>
  );
}

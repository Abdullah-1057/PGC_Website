import { motion } from 'framer-motion';
import Container from '../components/Container';
import Section from '../components/Section';
import CourseCard from '../components/CourseCard';
import Reveal from '../components/Reveal';
import { coursesData } from '../data/courses';

export default function ProgramsOverview() {
  const featuredCourses = coursesData.slice(0, 6);

  return (
    <Section background="white" padding="lg">
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-brand-secondary-900 mb-4">
              Our Academic Programs
            </h2>
            <p className="text-xl text-brand-muted-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of intermediate programs designed 
              to prepare you for higher education and professional success.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="text-center mt-12">
            <motion.a
              href="/courses"
              className="inline-flex items-center text-brand-primary-500 hover:text-brand-primary-600 font-semibold text-lg group"
              whileHover={{ x: 5 }}
            >
              View All Programs
              <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

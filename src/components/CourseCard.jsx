import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Card from './Card';

export default function CourseCard({ course }) {
  return (
    <Card className="p-6 h-full flex flex-col">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-brand-secondary-900 mb-3">
          {course.title}
        </h3>
        <p className="text-brand-muted-600 mb-4 line-clamp-3">
          {course.description}
        </p>
        <div className="flex items-center justify-between text-sm text-brand-muted-500 mb-4">
          <span>Duration: {course.duration}</span>
          <span>Fee: ₨{course.fee?.toLocaleString('en-PK')}</span>
        </div>
      </div>
      <Link
        to={`/courses/${course.slug}`}
        className="inline-flex items-center text-brand-primary-500 hover:text-brand-primary-600 font-medium group"
      >
        View Details
        <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Card>
  );
}

import { notFound } from 'next/navigation'
import { coursesData } from '@/data/courses'
import CourseDetailClient from './CourseDetailClient'

export default function CourseDetailPage({ params }) {
  const course = coursesData.find((c) => c.slug === params.slug)
  if (!course) notFound()
  return <CourseDetailClient course={course} />
}

export async function generateStaticParams() {
  return coursesData.map((course) => ({ slug: course.slug }))
}

export async function generateMetadata({ params }) {
  const course = coursesData.find((c) => c.slug === params.slug)
  if (!course) {
    return { title: 'Course Not Found' }
  }
  return {
    title: course.title,
    description: course.description,
  }
}

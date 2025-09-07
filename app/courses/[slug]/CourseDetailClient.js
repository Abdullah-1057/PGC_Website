"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Reveal from "@/components/Reveal";

export default function CourseDetailClient({ course }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="pt-16">
      <Section background="white" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Reveal>
                <div className="mb-8">
                  <Badge variant="primary" className="mb-4">
                    {course.category}
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold font-display text-brand-secondary-900 mb-4">
                    {course.title}
                  </h1>
                  <p className="text-xl text-brand-muted-600">
                    {course.description}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mb-8">
                  <img
                    src={`/placeholder.png?key=ccc07&height=400&width=800&text=${encodeURIComponent(
                      course.title + " course"
                    )}`}
                    alt={course.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              </Reveal>

              {/* Course Overview */}
              <Reveal delay={0.3}>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-brand-secondary-900 mb-4">
                    Course Overview
                  </h2>
                  <p className="text-brand-muted-600 leading-relaxed">
                    {course.overview ||
                      `The ${course.title} program is designed to provide students with a comprehensive foundation in their chosen field. Our experienced faculty and modern facilities ensure that students receive the best possible education to prepare them for higher studies and future careers.`}
                  </p>
                </div>
              </Reveal>

              {/* Curriculum Accordion */}
              <Reveal delay={0.4}>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-brand-secondary-900 mb-6">
                    Curriculum
                  </h2>
                  <div className="space-y-4">
                    {course.curriculum?.length ? (
                      course.curriculum.map((item, index) => (
                        <div
                          key={index}
                          className="border border-brand-muted-200 rounded-lg"
                        >
                          <button
                            onClick={() => toggleSection(`curriculum-${index}`)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-brand-muted-50 transition-colors"
                          >
                            <span className="font-semibold text-brand-secondary-900">
                              {item.subject}
                            </span>
                            {openSection === `curriculum-${index}` ? (
                              <ChevronUpIcon className="h-5 w-5 text-brand-muted-500" />
                            ) : (
                              <ChevronDownIcon className="h-5 w-5 text-brand-muted-500" />
                            )}
                          </button>
                          {openSection === `curriculum-${index}` && (
                            <div className="px-6 pb-4">
                              <p className="text-brand-muted-600">
                                {item.description}
                              </p>
                              {item.topics && (
                                <ul className="mt-3 space-y-1">
                                  {item.topics.map((topic, i) => (
                                    <li
                                      key={i}
                                      className="text-sm text-brand-muted-600 flex items-center"
                                    >
                                      <span className="w-2 h-2 bg-brand-primary-500 rounded-full mr-3" />
                                      {topic}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <div className="text-brand-muted-600">
                        Detailed curriculum information will be provided upon
                        enrollment.
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>

              {/* Career Outcomes */}
              <Reveal delay={0.5}>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-brand-secondary-900 mb-4">
                    Career Outcomes
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {course.careerOutcomes?.length ? (
                      course.careerOutcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-brand-primary-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-brand-muted-600">
                            {outcome}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-brand-muted-600">
                        Graduates can pursue higher education in universities or
                        enter professional fields related to their
                        specialization.
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Reveal delay={0.3}>
                <div className="bg-brand-muted-50 rounded-xl p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-brand-secondary-900 mb-6">
                    Course Details
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="text-brand-muted-600">Duration:</span>
                      <span className="font-semibold text-brand-secondary-900">
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-muted-600">Fee:</span>
                      <span className="font-semibold text-brand-secondary-900">
                        ₨{course.fee?.toLocaleString("en-PK")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-muted-600">Category:</span>
                      <Badge variant="primary">{course.category}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-muted-600">Eligibility:</span>
                      <span className="font-semibold text-brand-secondary-900">
                        {course.eligibility || "Matriculation"}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button href="/admissions" className="w-full" size="lg">
                      Apply Now
                    </Button>
                    <Button
                      href="/contact"
                      variant="outline"
                      className="w-full"
                    >
                      Get More Info
                    </Button>
                  </div>

                  <div className="mt-8 pt-6 border-t border-brand-muted-200">
                    <h4 className="font-semibold text-brand-secondary-900 mb-3">
                      Need Help?
                    </h4>
                    <p className="text-sm text-brand-muted-600 mb-3">
                      Have questions about this course? Our admissions team is
                      here to help.
                    </p>
                    <div className="text-sm">
                      <p className="text-brand-muted-600">
                        Call: +92 51 123 4567
                      </p>
                      <p className="text-brand-muted-600">
                        Email: admissions@pgcJhang.edu.pk
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

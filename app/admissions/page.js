'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Select from '@/components/Select'
import Textarea from '@/components/Textarea'
import Reveal from '@/components/Reveal'

export default function Admissions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    city: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.program) {
      toast.error('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, type: 'admission' }),
      })

      if (response.ok) {
        toast.success('Application submitted successfully! We\'ll contact you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          program: '',
          city: '',
          message: ''
        })
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-16">
      <Section background="white" padding="lg">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold font-display text-brand-secondary-500 mb-6">
                Admissions
              </h1>
              <p className="text-xl text-brand-muted-600 max-w-3xl mx-auto">
                Start your journey towards academic excellence. Apply now for admission 
                to PGC Jhang and join thousands of successful students.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Application Form */}
            <Reveal>
              <div className="bg-white rounded-xl shadow-lg border border-brand-muted-200 p-8">
                <h2 className="text-2xl font-bold text-brand-secondary-500 mb-6">
                  Application Form
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Full Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Email Address *"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                    <Input
                      label="Phone Number *"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0312-7773517"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Select
                      label="Program *"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a program</option>
                      <option value="fsc-pre-medical">FSc Pre-Medical</option>
                      <option value="fsc-pre-engineering">FSc Pre-Engineering</option>
                      <option value="ics">ICS (Computer Science)</option>
                      <option value="icom">I.Com (Commerce)</option>
                      <option value="fa">FA (Arts)</option>
                    </Select>
                    <Input
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Your city"
                    />
                  </div>

                  <Textarea
                    label="Message (Optional)"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any additional information or questions..."
                    rows={4}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </form>
              </div>
            </Reveal>

            {/* Admission Information */}
            <div className="space-y-8">
              <Reveal delay={0.2}>
                <div className="bg-brand-primary-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-brand-secondary-500 mb-4">
                    Admission Requirements
                  </h3>
                  <ul className="space-y-2 text-brand-muted-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Matriculation certificate with minimum 60% marks
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Original and photocopies of all academic documents
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      CNIC copy of student and guardian
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Recent passport-size photographs
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Character certificate from previous institution
                    </li>
                  </ul>
                </div>
              </Reveal>

              {/* <Reveal delay={0.3}>
                <div className="bg-brand-secondary-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-brand-secondary-500 mb-4">
                    Important Dates
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-brand-muted-700">Application Start:</span>
                      <span className="font-semibold">January 15, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-muted-700">Application Deadline:</span>
                      <span className="font-semibold">March 31, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-muted-700">Merit List:</span>
                      <span className="font-semibold">April 15, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-muted-700">Classes Start:</span>
                      <span className="font-semibold">May 1, 2025</span>
                    </div>
                  </div>
                </div>
              </Reveal> */}

              <Reveal delay={0.4}>
                <div className="bg-brand-accent-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-brand-secondary-500 mb-4">
                    Contact Admissions Office
                  </h3>
                  <div className="space-y-3 text-brand-muted-700">
                    <p><strong>Phone:</strong> 0312-7773517, 047-7630499, 047-7630503</p>
                    <p><strong>Email:</strong> info@pgcjhang.com</p>
                    <p><strong>Working Days:</strong> Monday to Saturday, Sunday Closed</p>
                    <p><strong>Address:</strong> 4KM, Gojra Road, Opposite Ghazali Degree College, Jhang</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}

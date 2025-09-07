'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import Link from 'next/link'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon 
} from '@heroicons/react/24/outline'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import Reveal from '@/components/Reveal'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    
    if (!formData.name || !formData.email || !formData.message) {
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
        body: JSON.stringify({ ...formData, type: 'contact' }),
      })

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.')
        setFormData({
          name: '',
          email: '',
          subject: '',
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
              <h1 className="text-4xl md:text-5xl font-bold font-display text-brand-secondary-900 mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-brand-muted-600 max-w-3xl mx-auto">
                Get in touch with us for any questions, concerns, or information 
                about our programs and admissions.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Reveal>
              <div className="bg-white rounded-xl shadow-lg border border-brand-muted-200 p-8">
                <h2 className="text-2xl font-bold text-brand-secondary-900 mb-6">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Full Name *"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                    <Input
                      label="Email Address *"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <Input
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                  />

                  <Textarea
                    label="Message *"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={6}
                    required
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </Reveal>

            {/* Contact Information */}
            <div className="space-y-8">
              <Reveal delay={0.2}>
                <div className="bg-brand-primary-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-brand-secondary-900 mb-6">
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPinIcon className="h-6 w-6 text-brand-primary-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-brand-secondary-900">Address</h4>
                        <p className="text-brand-muted-600">
                          Jhang Campus, Rawalpindi<br />
                          Punjab, Pakistan
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <PhoneIcon className="h-6 w-6 text-brand-primary-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-brand-secondary-900">Phone</h4>
                        <p className="text-brand-muted-600">+92 51 123 4567</p>
                        <p className="text-brand-muted-600">+92 300 1234567 (WhatsApp)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <EnvelopeIcon className="h-6 w-6 text-brand-primary-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-brand-secondary-900">Email</h4>
                        <p className="text-brand-muted-600">info@pgcJhang.edu.pk</p>
                        <p className="text-brand-muted-600">admissions@pgcJhang.edu.pk</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <ClockIcon className="h-6 w-6 text-brand-primary-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-brand-secondary-900">Office Hours</h4>
                        <p className="text-brand-muted-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
                        <p className="text-brand-muted-600">Saturday: 8:00 AM - 12:00 PM</p>
                        <p className="text-brand-muted-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="bg-brand-secondary-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-brand-secondary-900 mb-4">
                    Quick Contact
                  </h3>
                  <p className="text-brand-muted-600 mb-4">
                    For immediate assistance, you can also reach us through:
                  </p>
                  <div className="space-y-2">
                    <Link 
                      href="tel:+92511234567"
                      className="flex items-center w-full px-4 py-3 border border-brand-muted-300 rounded-lg hover:bg-brand-muted-50 transition-colors"
                    >
                      <PhoneIcon className="h-4 w-4 mr-2" />
                      Call Now
                    </Link>
                    <Link 
                      href="https://wa.me/923001234567"
                      className="flex items-center w-full px-4 py-3 border border-brand-muted-300 rounded-lg hover:bg-brand-muted-50 transition-colors"
                    >
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      WhatsApp
                    </Link>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="bg-brand-muted-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-brand-secondary-900 mb-4">
                    Location Map
                  </h3>
                  <div className="aspect-video bg-brand-muted-200 rounded-lg flex items-center justify-center">
                    <p className="text-brand-muted-600">Interactive map will be embedded here</p>
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

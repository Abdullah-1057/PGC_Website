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
              <h1 className="text-4xl md:text-5xl font-bold font-display text-brand-secondary-500 mb-6">
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
                <h2 className="text-2xl font-bold text-brand-secondary-500 mb-6">
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
                  <h3 className="text-xl font-bold text-brand-secondary-500 mb-6">
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPinIcon className="h-6 w-6 text-brand-primary-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-brand-secondary-500">Address</h4>
                        <p className="text-brand-muted-600">
                          4KM, Gojra Road, Opposite Ghazali Degree College<br />
                          Jhang, Punjab, Pakistan
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <PhoneIcon className="h-6 w-6 text-brand-primary-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-brand-secondary-500">Phone</h4>
                        <p className="text-brand-muted-600">0312-7773517</p>
                        <p className="text-brand-muted-600">047-7630499</p>
                        <p className="text-brand-muted-600">047-7630503</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <EnvelopeIcon className="h-6 w-6 text-brand-primary-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-brand-secondary-500">Email</h4>
                        <p className="text-brand-muted-600">info@pgcjhang.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <ClockIcon className="h-6 w-6 text-brand-primary-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-brand-secondary-500">Working Days</h4>
                        <p className="text-brand-muted-600">Monday to Saturday: 8:00 AM - 4:00 PM</p>
                        <p className="text-brand-muted-600">Sunday Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* <Reveal delay={0.3}>
                <div className="bg-brand-secondary-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-brand-secondary-500 mb-4">
                    Quick Contact
                  </h3>
                  <p className="text-brand-muted-600 mb-4">
                    For immediate assistance, you can also reach us through:
                  </p>
                  <div className="space-y-2">
                    <Link 
                      href="tel:03127773517"
                      className="flex items-center w-full px-4 py-3 border border-brand-muted-300 rounded-lg hover:bg-brand-muted-50 transition-colors"
                    >
                      <PhoneIcon className="h-4 w-4 mr-2" />
                      Call Now (0312-7773517)
                    </Link>
                    <Link 
                      href="tel:0477630499"
                      className="flex items-center w-full px-4 py-3 border border-brand-muted-300 rounded-lg hover:bg-brand-muted-50 transition-colors"
                    >
                      <PhoneIcon className="h-4 w-4 mr-2" />
                      Call Now (047-7630499)
                    </Link>
                  </div>
                </div>
              </Reveal> */}

              <Reveal delay={0.4}>
                <div className="bg-brand-muted-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-brand-secondary-500 mb-4">
                    Location Map
                  </h3>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.123456789!2d72.3625138!3d31.2551057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3923a258aa79b43d%3A0xe21707e992ae1b8b!2sPunjab%20College%20of%20Science%20Jhang!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="PGC Jhang Location"
                    ></iframe>
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

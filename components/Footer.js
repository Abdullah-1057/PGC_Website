'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon 
} from '@heroicons/react/24/outline'

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Faculty', href: '/faculty' },
    { name: 'Events', href: '/events' },
    { name: 'Fee Structure', href: '/pricing' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Contact', href: '/contact' },
  ],
  courses: [
    { name: 'FSc Pre-Medical', href: '/courses/fsc-medical' },
    { name: 'FSc Pre-Engineering', href: '/courses/fsc-engineering' },
    { name: 'ICS', href: '/courses/ics' },
    { name: 'FA', href: '/courses/fa' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-navy-900 via-brand-navy-950 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="flex items-center space-x-3 mb-6 group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image 
                    src="/images/logo.png" 
                    alt="PGC Jhang" 
                    width={40}
                    height={40}
                    className="h-10 w-auto"
                    style={{
                      filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.9)) drop-shadow(0 0 2px rgba(255,255,255,0.7))',
                      WebkitFilter: 'drop-shadow(0 0 1px rgba(255,255,255,0.9)) drop-shadow(0 0 2px rgba(255,255,255,0.7))'
                    }}
                  />
                </motion.div>
                <span className="font-display font-bold text-2xl group-hover:text-brand-primary-500 transition-colors">
                  PGC Jhang
                </span>
              </Link>
              <p className="text-brand-muted-300 leading-relaxed mb-6">
                Empowering students with quality education since 1958. 
                Building futures, creating leaders, and shaping tomorrow's Pakistan.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-bold text-xl mb-6 text-brand-primary-500">Quick Links</h3>
              <ul className="space-y-3">
                {navigation.main.map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="text-brand-muted-300 hover:text-white hover:translate-x-2 transition-all duration-200 inline-block"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-bold text-xl mb-6 text-brand-primary-500">Popular Courses</h3>
              <ul className="space-y-3">
                {navigation.courses.map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="text-brand-muted-300 hover:text-white hover:translate-x-2 transition-all duration-200 inline-block"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-bold text-xl mb-6 text-brand-primary-500">Contact Info</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: MapPinIcon,
                    content: '4KM, Gojra Road, Opposite Ghazali Degree College, Jhang, Punjab, Pakistan'
                  },
                  {
                    icon: PhoneIcon,
                    content: '0312-7773517\n047-7630499\n047-7630503'
                  },
                  {
                    icon: EnvelopeIcon,
                    content: 'info@pcj.com.pk'
                  },
                  {
                    icon: ClockIcon,
                    content: 'Monday to Saturday: 8:00 AM - 4:00 PM\nSunday Closed'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <item.icon className="h-5 w-5 text-brand-primary-500 mt-1 flex-shrink-0" />
                    <p className="text-brand-muted-300 text-sm leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Social Media Section */}
          <motion.div
            className="lg:col-span-4 mt-8 pt-8 border-t border-brand-navy-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <h3 className="font-bold text-xl mb-6 text-brand-primary-500">Follow Us</h3>
              <div className="flex justify-center space-x-6">
                <motion.a
                  href="https://www.facebook.com/share/14K6ihC33SG/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-full transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/punjabcollege.jhang?igsh=MXc1dWZocHZ4dXNnZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
              </div>
              <p className="text-brand-muted-400 text-sm mt-4">
                Stay connected for latest updates and news
              </p>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div 
            className="border-t border-brand-navy-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-brand-muted-400 text-sm">
              © {new Date().getFullYear()} Punjab Group of Colleges, Jhang. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="/privacy" className="text-brand-muted-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-brand-muted-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

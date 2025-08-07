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
    { name: 'Pricing', href: '/pricing' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Contact', href: '/contact' },
  ],
  courses: [
    { name: 'FSc Pre-Medical', href: '/courses/fsc-pre-medical' },
    { name: 'FSc Pre-Engineering', href: '/courses/fsc-pre-engineering' },
    { name: 'ICS', href: '/courses/ics' },
    { name: 'I.Com', href: '/courses/icom' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-secondary-800 via-brand-secondary-900 to-brand-secondary-950 text-white relative overflow-hidden">
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
                    alt="PGC Dhamyal" 
                    width={40}
                    height={40}
                    className="h-10 w-auto"
                  />
                </motion.div>
                <span className="font-display font-bold text-2xl group-hover:text-brand-primary-400 transition-colors">
                  PGC Dhamyal
                </span>
              </Link>
              <p className="text-brand-muted-300 leading-relaxed mb-6">
                Empowering students with quality education since 1958. 
                Building futures, creating leaders, and shaping tomorrow's Pakistan.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'youtube'].map((social, index) => (
                  <motion.a
                    key={social}
                    href={`#${social}`}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-primary-500 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="text-sm">📱</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-bold text-xl mb-6 text-brand-primary-400">Quick Links</h3>
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
              <h3 className="font-bold text-xl mb-6 text-brand-primary-400">Popular Courses</h3>
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
              <h3 className="font-bold text-xl mb-6 text-brand-primary-400">Contact Info</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: MapPinIcon,
                    content: 'Dhamyal Campus, Rawalpindi, Punjab, Pakistan'
                  },
                  {
                    icon: PhoneIcon,
                    content: '+92 51 123 4567'
                  },
                  {
                    icon: EnvelopeIcon,
                    content: 'info@pgcdhamyal.edu.pk'
                  },
                  {
                    icon: ClockIcon,
                    content: 'Mon - Fri: 8:00 AM - 4:00 PM\nSat: 8:00 AM - 12:00 PM'
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
                    <item.icon className="h-5 w-5 text-brand-primary-400 mt-1 flex-shrink-0" />
                    <p className="text-brand-muted-300 text-sm leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div 
            className="border-t border-brand-secondary-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-brand-muted-400 text-sm">
              © {new Date().getFullYear()} Punjab Group of Colleges, Dhamyal. All rights reserved.
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

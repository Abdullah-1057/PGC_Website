import { Link } from 'react-router-dom';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon 
} from '@heroicons/react/24/outline';

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
};

export default function Footer() {
  return (
    <footer className="bg-brand-secondary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/images/logo.png" 
                alt="PGC Jhang" 
                className="h-8 w-auto"
              />
              <span className="font-display font-bold text-xl">
                PGC Jhang
              </span>
            </Link>
            <p className="text-brand-muted-300 text-sm leading-relaxed">
              Empowering students with quality education since 1958. 
              Building futures, creating leaders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-brand-muted-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              {navigation.courses.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-brand-muted-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-brand-primary-400 mt-0.5 flex-shrink-0" />
                <p className="text-brand-muted-300 text-sm">
                  Jhang Campus, Jhang, Punjab, Pakistan
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-brand-primary-400 flex-shrink-0" />
                <p className="text-brand-muted-300 text-sm">
                  +92 51 123 4567
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-brand-primary-400 flex-shrink-0" />
                <p className="text-brand-muted-300 text-sm">
                  info@pgcJhang.edu.pk
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <ClockIcon className="h-5 w-5 text-brand-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-brand-muted-300 text-sm">
                  <p>Mon - Fri: 8:00 AM - 4:00 PM</p>
                  <p>Sat: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-secondary-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-brand-muted-400 text-sm">
            © {new Date().getFullYear()} Punjab Group of Colleges, Jhang. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-brand-muted-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-brand-muted-400 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

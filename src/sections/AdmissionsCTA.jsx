import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import Container from '../components/Container';
import Section from '../components/Section';
import Button from '../components/Button';
import Input from '../components/Input';
import Reveal from '../components/Reveal';

export default function AdmissionsCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, type: 'quick-contact' }),
      });

      if (response.ok) {
        toast.success('Thank you! We\'ll contact you soon.');
        setEmail('');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section background="primary" padding="lg">
      <Container>
        <div className="text-center text-white">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of successful students who chose PGC Dhamyal for their 
              intermediate education. Get started with your admission process today.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="max-w-md mx-auto mb-8">
              <form onSubmit={handleSubmit} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/60 focus:bg-white/20"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  disabled={isSubmitting}
                  className="bg-white text-brand-primary-500 hover:bg-white/90 px-6"
                >
                  {isSubmitting ? 'Sending...' : 'Get Info'}
                </Button>
              </form>
              <p className="text-sm text-white/70 mt-3">
                Get admission information and important updates directly in your inbox.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/admissions" 
                variant="secondary" 
                size="lg"
                className="bg-white text-brand-primary-500 hover:bg-white/90"
              >
                Apply Now
              </Button>
              <Button 
                href="/contact" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-primary-500"
              >
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

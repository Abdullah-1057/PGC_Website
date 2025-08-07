import { motion } from 'framer-motion';
import Button from '../components/Button';
import Container from '../components/Container';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-primary-500 to-brand-accent-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Excellence in Education Since{' '}
              <span className="text-yellow-300">1958</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At PGC Dhamyal, we're not just means to education but a family that cares, 
              grooms and helps unlock the true potential of our students.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                href="/admissions" 
                variant="secondary" 
                size="lg"
                className="bg-white text-brand-primary-500 hover:bg-white/90"
              >
                Start Admissions
              </Button>
              <Button 
                href="/courses" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-primary-500"
              >
                View Courses
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/placeholder-2bx2y.png"
                alt="PGC Dhamyal Campus" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-primary-500">65+</div>
                <div className="text-sm text-brand-muted-600">Years of Excellence</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-primary-500">5000+</div>
                <div className="text-sm text-brand-muted-600">Students</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

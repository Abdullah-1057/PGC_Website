'use client'

import { motion } from 'framer-motion'

export default function UnderConstructionClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-primary-400 to-brand-primary-600 flex items-center justify-center">
      <div className="text-center text-white max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="text-6xl mb-4">🚧</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Under Construction
          </h1>
          <p className="text-lg text-white/90 mb-8">
            We're working hard to bring you something amazing. 
            Please check back soon!
          </p>
        </motion.div>

      </div>
    </div>
  )
}
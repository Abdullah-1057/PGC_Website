'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Counter({ value, suffix = '', duration = 2.5 }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { 
    duration: duration * 1000,
    bounce: 0.2
  })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString('en-PK') + suffix
      }
    })
  }, [springValue, suffix])

  return (
    <motion.span 
      ref={ref}
      className="inline-block"
      initial={{ scale: 0.8 }}
      animate={isInView ? { scale: 1 } : {}}
      transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
    >
      0{suffix}
    </motion.span>
  )
}

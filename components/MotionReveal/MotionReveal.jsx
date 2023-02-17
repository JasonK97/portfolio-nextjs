import React from 'react'
import { motion } from 'framer-motion'

export const MotionReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

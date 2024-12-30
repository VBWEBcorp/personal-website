'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  initial?: any
  animate?: any
  transition?: any
  whileHover?: any
  whileTap?: any
}

export default function AnimatedSection({
  children,
  className = '',
  initial,
  animate,
  transition,
  whileHover,
  whileTap
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </motion.div>
  )
}

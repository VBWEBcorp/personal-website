'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { NeuralBackground } from './NeuralBackground'

interface HeroSectionProps {
  title: ReactNode
  subtitle: ReactNode
}

const AnimatedSection = motion.div

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center text-center px-4 pt-16">
      <NeuralBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Glowing Lines */}
        <AnimatedSection 
          className="absolute -inset-4 border border-accent/30 rounded-lg"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="p-8 backdrop-blur-sm rounded-lg bg-primary/10">
          <AnimatedSection 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </AnimatedSection>
          <AnimatedSection 
            className="text-xl md:text-2xl text-gray-300 mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

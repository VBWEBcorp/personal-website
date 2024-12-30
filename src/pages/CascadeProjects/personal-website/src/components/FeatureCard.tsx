'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { SubtleNeuralBackground } from './SubtleNeuralBackground'

interface FeatureCardProps {
  title: string
  description: string
  features: string[]
  icon: ReactNode
  index: number
}

const AnimatedSection = motion.div

export default function FeatureCard({ title, description, features, icon, index }: FeatureCardProps) {
  return (
    <AnimatedSection
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative h-full"
    >
      <div className="relative h-full overflow-hidden rounded-xl border border-accent/10 backdrop-blur-sm">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <SubtleNeuralBackground />
        </div>

        {/* Hover Glow Effect */}
        <div 
          className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(45deg, rgba(78, 186, 236, 0.15), rgba(78, 186, 236, 0.05))',
            filter: 'blur(2px)'
          }}
        />

        {/* Content */}
        <div className="relative p-8 z-10 flex flex-col h-full">
          {/* Icon with glow */}
          <AnimatedSection
            className="mb-6 relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl" />
            {icon}
          </AnimatedSection>

          {/* Title with gradient */}
          <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 mb-6">
            {description}
          </p>

          {/* Features List */}
          <ul className="space-y-3 mt-auto">
            {features.map((item, fIndex) => (
              <li key={fIndex} className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  )
}

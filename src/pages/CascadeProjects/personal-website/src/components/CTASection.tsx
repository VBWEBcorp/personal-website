'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { NeuralBackground } from './NeuralBackground'

const AnimatedSection = motion.div
const AnimatedButton = motion.button

export default function CTASection() {
  return (
    <section className="relative py-16 px-4">
      <NeuralBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatedSection 
          className="text-3xl font-bold mb-6 text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Prêt à lancer votre projet ?
        </AnimatedSection>
        <AnimatedSection 
          className="text-xl text-gray-300 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discutons de votre projet et créons ensemble un site web qui vous ressemble
        </AnimatedSection>
        <Link href="/contact">
          <AnimatedButton className="px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors">
            Demander un devis gratuit
          </AnimatedButton>
        </Link>
      </div>
    </section>
  )
}

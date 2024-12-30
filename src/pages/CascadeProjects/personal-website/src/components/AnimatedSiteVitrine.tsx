'use client'

import { motion } from 'framer-motion'
import NeuralBackground from './NeuralBackground'

const AnimatedSection = motion.div
const AnimatedCard = motion.div

interface Props {
  features: {
    title: string
    description: string
    features: string[]
  }[]
}

export default function AnimatedSiteVitrine({ features }: Props) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#040911] via-[#071018] to-[#0A1525] overflow-hidden">
      {/* Hero Section avec Features intégrées */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-12 px-4">
        <NeuralBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary z-0"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* Hero Content */}
          <AnimatedSection 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block">
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
              <h1 className="relative text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent leading-tight p-4">
                Sites Vitrine Professionnels
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Créez une présence en ligne qui vous démarque avec un site web moderne et performant
            </p>
          </AnimatedSection>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {features.map((feature, index) => (
              <AnimatedCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-xl border border-accent/10 bg-primary/5 backdrop-blur-sm p-8">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-px bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.features.map((item, fIndex) => (
                        <li key={fIndex} className="flex items-center text-gray-300">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.2 + fIndex * 0.1 }}
                          >
                            <svg className="w-5 h-5 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                          <span className="bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <NeuralBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white">
              Prêt à lancer votre projet ?
            </h2>
            <p className="text-xl text-gray-300">
              Discutons de votre projet et créons ensemble un site web qui vous ressemble
            </p>
            <motion.a 
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demander un devis gratuit
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}

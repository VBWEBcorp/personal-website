'use client'

import { motion } from 'framer-motion'
import { NeuralBackground } from './NeuralBackground'

const AnimatedSection = motion.div
const AnimatedButton = motion.button

export default function SiteVitrineContent() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-4 pt-16">
        <NeuralBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
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
              Sites Vitrine Professionnels
            </AnimatedSection>
            <AnimatedSection 
              className="text-xl md:text-2xl text-gray-300 mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Créez une présence en ligne qui vous démarque avec un site web moderne et performant
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 px-4">
        <div className="absolute inset-0 bg-primary/95" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Design Moderne",
                description: "Une interface élégante et intuitive qui reflète votre identité",
                features: [
                  "Design sur-mesure",
                  "Responsive design",
                  "Animations fluides",
                  "Identité visuelle unique"
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "Performance Optimale",
                description: "Un site rapide et optimisé pour une expérience utilisateur exceptionnelle",
                features: [
                  "Temps de chargement rapide",
                  "SEO optimisé",
                  "Hébergement premium",
                  "Certificat SSL"
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Maintenance Continue",
                description: "Un suivi régulier pour garder votre site à jour et sécurisé",
                features: [
                  "Mises à jour régulières",
                  "Support technique",
                  "Sauvegardes automatiques",
                  "Sécurité renforcée"
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <AnimatedSection
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative h-full"
              >
                <div className="relative h-full overflow-hidden rounded-xl border border-accent/10 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-primary/20" />

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
                      {feature.icon}
                    </AnimatedSection>

                    {/* Title with gradient */}
                    <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-6">
                      {feature.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mt-auto">
                      {feature.features.map((item, fIndex) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
          <AnimatedButton className="px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors">
            Demander un devis gratuit
          </AnimatedButton>
        </div>
      </section>
    </main>
  )
}

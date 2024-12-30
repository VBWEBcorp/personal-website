'use client'

import { motion } from 'framer-motion'
import NeuralBackground from './NeuralBackground'

const AnimatedSection = motion.div
const AnimatedCard = motion.div

const seoFeatures = [
  {
    title: "Audit & Stratégie",
    description: "Analyse complète de votre site et élaboration d'une stratégie sur-mesure",
    features: [
      "Audit SEO technique détaillé",
      "Recherche de mots-clés ciblés",
      "Plan d'action personnalisé",
      "Recommandations prioritaires"
    ]
  },
  {
    title: "Accompagnement SEO",
    description: "Optimisation continue adaptée à votre budget avec suivi des performances",
    features: [
      "Création de contenu optimisé",
      "Stratégie de netlinking",
      "Dashboard VBWEB personnalisé",
      "Rapports trimestriels détaillés"
    ]
  },
  {
    title: "Formation & Support",
    description: "Accompagnement de vos équipes pour une meilleure compréhension du SEO",
    features: [
      "Formation sur-mesure",
      "Support technique",
      "Guides et ressources",
      "Conseils stratégiques"
    ]
  }
]

const comparisons = [
  {
    title: "Consultant SEO Indépendant",
    description: "Une approche personnalisée avec un expert dédié",
    features: [
      "Contact direct avec l'expert",
      "Flexibilité et réactivité",
      "Transparence totale",
      "Accompagnement sur-mesure"
    ]
  },
  {
    title: "Agence SEO",
    description: "Structure plus importante avec processus standardisés",
    features: [
      "Équipe pluridisciplinaire",
      "Processus formalisés",
      "Coûts plus élevés",
      "Communication intermédiaire"
    ]
  },
  {
    title: "SEO en Interne",
    description: "Gestion autonome de votre référencement",
    features: [
      "Contrôle total des actions",
      "Apprentissage progressif",
      "Temps d'adaptation long",
      "Risque d'erreurs techniques"
    ]
  }
]

export default function AnimatedSEOPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#040911] via-[#071018] to-[#0A1525] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <NeuralBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <AnimatedSection 
            className="mb-12"
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
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent leading-tight p-4">
                Référencement SEO
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Propulsez votre site web vers les sommets des moteurs de recherche avec une stratégie SEO sur-mesure
            </p>
            <motion.a
              href="/seo-packs.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-accent text-white rounded-lg font-medium mt-8 hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger les Packs SEO
            </motion.a>
          </AnimatedSection>

          {/* SEO Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            {seoFeatures.map((feature, index) => (
              <AnimatedCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-xl border border-accent/10 bg-primary/5 backdrop-blur-sm p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-px bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
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
                          <span>{item}</span>
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

      {/* Comparisons Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprendre les Différentes Approches SEO
            </h2>
            <p className="text-xl text-gray-300">
              Découvrez les avantages et spécificités de chaque approche pour mieux comprendre le SEO
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {comparisons.map((comparison, index) => (
              <AnimatedCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative overflow-hidden rounded-xl border border-accent/10 bg-primary/5 backdrop-blur-sm p-8"
              >
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
                  {comparison.title}
                </h3>
                <p className="text-gray-300 mb-6">{comparison.description}</p>
                <ul className="space-y-3">
                  {comparison.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
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
              Prêt à Améliorer Votre Visibilité ?
            </h2>
            <p className="text-xl text-gray-300">
              Discutons de votre projet et définissons ensemble la meilleure stratégie SEO pour votre entreprise
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a 
                href="/contact"
                className="px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Demander un Devis
              </motion.a>
              <motion.a 
                href="/seo-packs.pdf"
                download
                className="px-8 py-4 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Voir les Packs SEO
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}

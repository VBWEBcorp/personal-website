'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import NeuralBackground from '@/components/NeuralBackground';

const seoServices = [
  {
    title: "Audit SEO Complet",
    description: "Analyse approfondie de votre présence en ligne",
    features: [
      "Analyse technique du site",
      "Étude des mots-clés",
      "Audit de contenu",
      "Analyse des backlinks"
    ],
    icon: (
      <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Optimisation Technique",
    description: "Amélioration des performances de votre site",
    features: [
      "Optimisation de la vitesse",
      "Structure des URLs",
      "Balisage sémantique",
      "Mobile-first"
    ],
    icon: (
      <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Netlinking",
    description: "Stratégie de liens efficace et naturelle",
    features: [
      "Analyse des backlinks",
      "Création de liens qualifiés",
      "Outreach personnalisé",
      "Suivi et reporting"
    ],
    icon: (
      <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    )
  },
  {
    title: "Optimisation du Contenu",
    description: "Création de contenu optimisé pour les moteurs",
    features: [
      "Stratégie de contenu",
      "Rédaction SEO",
      "Optimisation des images",
      "Structure des titres"
    ],
    icon: (
      <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
];

export default function SeoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#040911] via-[#071018] to-[#0A1525]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-12 px-4">
        <NeuralBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Référencement SEO
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Améliorez votre visibilité en ligne et attirez plus de clients qualifiés
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              seoServices[0], // Audit SEO
              seoServices[1], // Optimisation Technique
              seoServices[3], // Optimisation du Contenu
              seoServices[2], // Netlinking
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-8 rounded-lg border border-accent/20 backdrop-blur-sm relative overflow-hidden group hover:border-accent/40 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Notre Processus</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Audit", desc: "Analyse complète de votre site" },
              { step: "2", title: "Stratégie", desc: "Plan d'action personnalisé" },
              { step: "3", title: "Optimisation", desc: "Mise en place des améliorations" },
              { step: "4", title: "Suivi", desc: "Analyse des résultats" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Pourquoi Choisir Notre Service SEO ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise Technique",
                description: "Notre équipe maîtrise les dernières techniques SEO et les meilleures pratiques du secteur."
              },
              {
                title: "Approche Sur Mesure",
                description: "Chaque stratégie est adaptée à vos objectifs spécifiques et à votre secteur d'activité."
              },
              {
                title: "Résultats Mesurables",
                description: "Suivez vos progrès avec des rapports détaillés et des métriques claires."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg border border-accent/20 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Packages Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Accompagnement Mensuel</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Au-delà de l'audit initial, nous proposons des packages mensuels personnalisés pour assurer une amélioration continue de votre référencement.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link href="/seo-packages">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Découvrir nos packages mensuels
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-accent/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Image/Illustration */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-primary/50 backdrop-blur-sm rounded-lg p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-2 w-20 bg-accent/40 rounded animate-pulse"></div>
                    <div className="h-2 w-28 bg-accent/30 rounded animate-pulse delay-100"></div>
                    <div className="h-2 w-24 bg-accent/20 rounded animate-pulse delay-200"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 w-24 bg-accent/40 rounded animate-pulse"></div>
                    <div className="h-2 w-20 bg-accent/30 rounded animate-pulse delay-100"></div>
                    <div className="h-2 w-28 bg-accent/20 rounded animate-pulse delay-200"></div>
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <div className="h-32 w-32 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="text-center md:text-left">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Boostez Votre Classement Google
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Obtenez une analyse détaillée de votre site et un plan d'action personnalisé pour améliorer votre positionnement.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors group"
                >
                  <span>Audit SEO Gratuit</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

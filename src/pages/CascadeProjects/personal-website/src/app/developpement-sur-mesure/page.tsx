'use client';

import { motion } from 'framer-motion'
import Link from 'next/link'
import NeuralBackground from '@/components/NeuralBackground';

const devServices = [
  {
    title: "Applications Web",
    description: "Applications web modernes et performantes",
    features: [
      "Interface utilisateur intuitive",
      "Performance optimisée",
      "Sécurité renforcée",
      "Scalabilité"
    ],
    icon: (
      <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Outils Métier",
    description: "Automatisation et optimisation de vos processus",
    features: [
      "Gain de productivité",
      "Réduction des erreurs",
      "Tableaux de bord",
      "Rapports personnalisés"
    ],
    icon: (
      <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    title: "Intégrations",
    description: "Connection avec vos outils existants",
    features: [
      "APIs sur mesure",
      "Synchronisation des données",
      "Workflow automatisé",
      "Maintenance simplifiée"
    ],
    icon: (
      <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function DeveloppementSurMesure() {
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
            Développement Sur Mesure
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Des solutions web personnalisées pour répondre à vos besoins spécifiques
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {devServices.map((service, index) => (
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
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Analyse", desc: "Compréhension de vos besoins" },
              { step: "2", title: "Conception", desc: "Architecture de la solution" },
              { step: "3", title: "Développement", desc: "Codage et tests" },
              { step: "4", title: "Tests", desc: "Validation complète" },
              { step: "5", title: "Déploiement", desc: "Mise en production" }
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

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Prêt à démarrer votre projet ?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Discutons de vos besoins et trouvons ensemble la solution idéale
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Planifier un appel découverte
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

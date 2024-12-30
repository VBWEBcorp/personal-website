'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const NeuralBackground = dynamic(() => import('@/components/NeuralBackground'), { ssr: false });

const websiteServices = [
  {
    title: "Site Vitrine Professionnel",
    description: "Une présence en ligne élégante et efficace",
    features: [
      "Design sur mesure",
      "Responsive design",
      "Optimisation SEO",
      "Performances optimales"
    ],
    icon: (
      <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Portfolio Créatif",
    description: "Mettez en valeur vos réalisations",
    features: [
      "Galerie interactive",
      "Animations fluides",
      "Interface intuitive",
      "Design moderne"
    ],
    icon: (
      <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Site Institutionnel",
    description: "Une image professionnelle pour votre entreprise",
    features: [
      "Architecture claire",
      "Contenu structuré",
      "Image de marque",
      "Contact facilité"
    ],
    icon: (
      <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Landing Page",
    description: "Convertissez vos visiteurs en clients",
    features: [
      "Call-to-action efficaces",
      "Design conversion",
      "A/B testing",
      "Analytics intégrés"
    ],
    icon: (
      <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    )
  }
];

export default function SiteVitrine() {
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
            Sites Vitrine
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Donnez vie à votre présence en ligne avec un site web professionnel
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {websiteServices.map((service, index) => (
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
              { step: "1", title: "Brief", desc: "Définition de vos objectifs" },
              { step: "2", title: "Design", desc: "Création de maquettes" },
              { step: "3", title: "Développement", desc: "Intégration du site" },
              { step: "4", title: "Lancement", desc: "Mise en ligne" }
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
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Pourquoi Nous Choisir ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Design Unique",
                description: "Un site web qui vous ressemble, conçu sur mesure pour refléter votre identité."
              },
              {
                title: "Performance",
                description: "Des sites web rapides et optimisés pour une expérience utilisateur exceptionnelle."
              },
              {
                title: "SEO Optimisé",
                description: "Une visibilité accrue grâce à un référencement naturel optimisé dès la conception."
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

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Prêt à Créer Votre Site Web ?</h2>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-white rounded-lg font-bold hover:bg-accent/90 transition-colors"
            >
              Contactez-nous
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  );
}

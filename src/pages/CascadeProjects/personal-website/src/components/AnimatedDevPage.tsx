'use client'

const devServices = [
  {
    title: "Applications SaaS",
    description: "Développement de solutions cloud innovantes et évolutives",
    features: [
      "Architecture cloud moderne",
      "Interfaces utilisateur intuitives",
      "Système de paiement intégré",
      "Évolution continue"
    ],
    icon: (
      <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Applications Mobiles",
    description: "Apps natives et cross-platform pour iOS et Android",
    features: [
      "Design mobile-first",
      "Performance optimale",
      "Synchronisation cloud",
      "Notifications push"
    ],
    icon: (
      <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "CRM & Outils Internes",
    description: "Solutions métier personnalisées pour optimiser vos processus",
    features: [
      "Workflows automatisés",
      "Tableaux de bord personnalisés",
      "Intégration avec vos outils",
      "Formation des équipes"
    ],
    icon: (
      <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
]

const benefits = [
  {
    title: "Automatisation Intelligente",
    description: "Libérez le potentiel de vos équipes en automatisant les tâches répétitives",
    features: [
      "Réduction des tâches manuelles",
      "Diminution des erreurs",
      "Processus standardisés",
      "Gain de productivité"
    ]
  },
  {
    title: "Flexibilité Maximale",
    description: "Des solutions qui s'adaptent parfaitement à vos besoins spécifiques",
    features: [
      "Personnalisation complète",
      "Évolution selon vos besoins",
      "Intégration sur mesure",
      "Scalabilité garantie"
    ]
  },
  {
    title: "ROI Optimisé",
    description: "Maximisez votre retour sur investissement avec des outils parfaitement adaptés",
    features: [
      "Efficacité accrue",
      "Réduction des coûts",
      "Processus optimisés",
      "Performance mesurable"
    ]
  }
]

export default function AnimatedDevPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#040911] via-[#071018] to-[#0A1525] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <div className="relative inline-block">
              <div className="absolute -inset-4 border border-accent/30 rounded-lg" />
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent leading-tight p-4">
                Développement Sur Mesure
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Des solutions web et mobiles personnalisées pour transformer vos idées en réalité
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            {devServices.map((service, index) => (
              <div
                key={index}
                className="group relative hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-full overflow-hidden rounded-xl border border-accent/10 bg-primary/5 backdrop-blur-sm p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-px bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  
                  <div className="relative z-10">
                    <div className="mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((item, fIndex) => (
                        <li key={fIndex} className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Pourquoi Choisir le Sur Mesure ?
            </h2>
            <p className="text-xl text-gray-300">
              Des solutions parfaitement adaptées à vos besoins pour une efficacité maximale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl border border-accent/10 bg-primary/5 backdrop-blur-sm p-8 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 mb-6">{benefit.description}</p>
                <ul className="space-y-3">
                  {benefit.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Un Projet Sur Mesure ?
            </h2>
            <p className="text-xl text-gray-300">
              Discutons de vos besoins et créons ensemble la solution qui vous correspond parfaitement
            </p>
            <a 
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors hover:scale-105 active:scale-95 transform duration-200"
            >
              Démarrer Votre Projet
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

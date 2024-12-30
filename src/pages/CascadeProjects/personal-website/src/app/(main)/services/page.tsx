import Image from 'next/image'

export default function ServicesPage() {
  const services = [
    {
      title: "Création de Sites Internet",
      description: "Des sites web modernes, responsifs et optimisés pour convertir vos visiteurs en clients.",
      features: [
        "Sites vitrines professionnels",
        "E-commerce sur mesure",
        "Applications web complexes",
        "Design moderne et responsive",
      ],
    },
    {
      title: "Référencement SEO",
      description: "Optimisation de votre visibilité en ligne pour attirer plus de clients qualifiés.",
      features: [
        "Audit SEO complet",
        "Optimisation on-page",
        "Stratégie de contenu",
        "Suivi des performances",
      ],
    },
    {
      title: "Développement Sur Mesure",
      description: "Solutions personnalisées pour répondre à vos besoins spécifiques.",
      features: [
        "Applications web complexes",
        "Intégration API",
        "Solutions métier",
        "Maintenance et support",
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nos Services
        </h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">
          Des solutions web professionnelles pour développer votre présence en ligne
        </p>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white/10 hover:bg-white/15 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-accent">
                {service.title}
              </h3>
              <p className="mb-6 text-gray-300">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <svg 
                      className="w-5 h-5 text-accent mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <a 
            href="/contact" 
            className="btn-primary text-lg px-8 py-3"
          >
            Demander un devis
          </a>
        </div>
      </section>
    </div>
  )
}

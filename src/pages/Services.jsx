import { motion } from 'framer-motion';

const services = [
  {
    title: "Compositions personnalisées",
    description: "Créez des arrangements floraux uniques selon vos envies et votre style",
    price: "À partir de 45€",
    icon: "🌸"
  },
  {
    title: "Événements spéciaux",
    description: "Mariages, anniversaires, cérémonies - nous sublimerons vos moments importants",
    price: "Sur devis",
    icon: "💐"
  },
  {
    title: "Abonnement mensuel",
    description: "Recevez chaque mois une création florale unique à votre domicile",
    price: "À partir de 59€/mois",
    icon: "🌺"
  },
  {
    title: "Ateliers créatifs",
    description: "Apprenez l'art floral avec nos experts lors d'ateliers conviviaux",
    price: "35€/session",
    icon: "🎨"
  },
  {
    title: "Décoration d'intérieur",
    description: "Conseil et création de compositions adaptées à votre espace",
    price: "Sur devis",
    icon: "🏡"
  },
  {
    title: "Entreprises",
    description: "Solutions florales pour bureaux, hôtels et restaurants",
    price: "Contrat annuel",
    icon: "🏢"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Nos Services
          </h1>
          <p className="text-xl text-gray-300">
            Des solutions florales pour toutes vos envies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 1), duration: 0.8 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>
              <p className="text-rose-400 font-semibold">
                {service.price}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-16 text-center bg-gray-800 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Vous avez un projet spécial ?
          </h2>
          <p className="text-gray-300 mb-6">
            Contactez-nous pour discuter de vos besoins spécifiques
          </p>
          <button className="bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition-colors duration-300">
            Demander un devis
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

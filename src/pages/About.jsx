import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Sophie Martin",
    role: "Maître Fleuriste",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    description: "Plus de 15 ans d'expérience dans l'art floral"
  },
  {
    name: "Lucas Dubois",
    role: "Designer Floral",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    description: "Spécialiste des compositions modernes"
  },
  {
    name: "Emma Bernard",
    role: "Experte en Événementiel",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    description: "Créatrice de moments magiques"
  }
];

const milestones = [
  {
    year: "2010",
    title: "Création",
    description: "Ouverture de notre première boutique"
  },
  {
    year: "2015",
    title: "Expansion",
    description: "Lancement de notre service événementiel"
  },
  {
    year: "2018",
    title: "Innovation",
    description: "Introduction des ateliers créatifs"
  },
  {
    year: "2023",
    title: "Communauté",
    description: "Création de notre plateforme en ligne"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Notre Histoire
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Depuis plus de 10 ans, nous créons des compositions florales uniques 
            qui racontent des histoires et touchent les cœurs.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <span className="text-4xl mb-4 block">🌱</span>
            <h3 className="text-xl font-bold text-white mb-2">Passion</h3>
            <p className="text-gray-300">
              Chaque fleur est choisie avec amour et attention
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <span className="text-4xl mb-4 block">🎨</span>
            <h3 className="text-xl font-bold text-white mb-2">Créativité</h3>
            <p className="text-gray-300">
              Des compositions uniques et personnalisées
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <span className="text-4xl mb-4 block">💚</span>
            <h3 className="text-xl font-bold text-white mb-2">Durabilité</h3>
            <p className="text-gray-300">
              Respect de l'environnement et des saisons
            </p>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Notre Équipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (index + 1), duration: 0.8 }}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-rose-400 mb-2">{member.role}</p>
                  <p className="text-gray-300">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Notre Parcours
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * (index + 1), duration: 0.8 }}
                className="flex items-center gap-8"
              >
                <div className="w-24 text-2xl font-bold text-rose-400">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center bg-gray-800 p-12 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Rejoignez l'Aventure
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Partagez votre passion pour les fleurs et contribuez à créer 
            des moments inoubliables avec notre communauté.
          </p>
          <button className="bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition-colors duration-300">
            Contactez-nous
          </button>
        </motion.div>
      </div>
    </div>
  );
}

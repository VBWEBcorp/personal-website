import { motion } from 'framer-motion';
import { useState } from 'react';

const galleryItems = [
  {
    id: 1,
    title: "Vue sur la Plage",
    category: "Vue Mer",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format",
    description: "Vue panoramique sur la plage"
  },
  {
    id: 2,
    title: "Dîner Vue Mer",
    category: "Vue Mer",
    image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?w=800&auto=format",
    description: "Table dressée avec vue panoramique sur l'océan"
  },
  {
    id: 3,
    title: "Coucher de Soleil",
    category: "Vue Mer",
    image: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?w=800&auto=format",
    description: "Magnifique coucher de soleil sur l'océan"
  },
  {
    id: 4,
    title: "Terrasse Marine",
    category: "Vue Mer",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format",
    description: "Notre terrasse avec vue imprenable"
  }
];

const categories = [
  "Toutes",
  "Vue Mer",
  "Mariages",
  "Réceptions"
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = selectedCategory === "Toutes"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Galerie Photos
          </h1>
          <p className="text-xl text-gray-300">
            Découvrez nos plus beaux moments en images
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index % 6), duration: 0.8 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:transform hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative pb-[75%]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-2">{item.description}</p>
                <span className="text-sm text-blue-400">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white text-xl"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

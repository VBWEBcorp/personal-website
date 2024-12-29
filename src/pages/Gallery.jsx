import { motion } from 'framer-motion';
import { useState } from 'react';
import { storage } from '../config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Image from 'next/image';

const categories = [
  "Toutes",
  "Mariages",
  "Réceptions",
  "Vue Mer",
  "Décorations",
  "Saisonnières"
];

const galleryItems = [
  {
    id: 'boat-on-logo',
    src: '/images/boat-on-logo.png',
    alt: 'Boat On Beach Club Logo',
    category: 'mariage',
    title: 'Logo Boat On Beach Club'
  },
  {
    id: 'vbweb-logo',
    src: '/images/vbweb-caraibes.png',
    alt: 'VB Web Caraibes Logo',
    category: 'mariage',
    title: 'VB Web Caraibes'
  },
  {
    id: 1,
    title: "Dîner Vue Mer",
    category: "Vue Mer",
    image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80",
    description: "Table dressée avec vue panoramique sur l'océan"
  },
  {
    id: 2,
    title: "Réception Caraïbes",
    category: "Réceptions",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80",
    description: "Ambiance tropicale et élégante"
  },
  {
    id: 3,
    title: "Mariage Bord de Mer",
    category: "Mariages",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80",
    description: "Cérémonie avec vue sur l'horizon"
  },
  {
    id: 4,
    title: "Décoration Palmiers",
    category: "Décorations",
    image: "https://images.unsplash.com/photo-1602513755741-0b4714a0cb96?q=80",
    description: "Ambiance exotique et raffinée"
  },
  {
    id: 5,
    title: "Sunset Reception",
    category: "Vue Mer",
    image: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?q=80",
    description: "Dîner au coucher du soleil"
  },
  {
    id: 6,
    title: "Arche Tropicale",
    category: "Mariages",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80",
    description: "Arche de mariage style tropical"
  },
  {
    id: 7,
    title: "Table d'Honneur",
    category: "Réceptions",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80",
    description: "Décoration raffinée en bord de mer"
  },
  {
    id: 8,
    title: "Cocktail Océan",
    category: "Vue Mer",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80",
    description: "Espace cocktail vue panoramique"
  },
  {
    id: 9,
    title: "Centre de Table Exotique",
    category: "Décorations",
    image: "https://images.unsplash.com/photo-1602513755741-0b4714a0cb96?q=80",
    description: "Compositions florales tropicales"
  },
  {
    id: 10,
    title: "Soirée Étoilée",
    category: "Saisonnières",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80",
    description: "Réception nocturne en bord de mer"
  }
];

const ImageUploader = ({ onImageUploaded }) => {
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      // Créer une référence unique pour l'image
      const imageRef = ref(storage, `gallery/mariages/${Date.now()}-${file.name}`);
      
      // Upload vers Firebase
      await uploadBytes(imageRef, file);
      
      // Obtenir l'URL
      const url = await getDownloadURL(imageRef);
      
      // Ajouter à la galerie
      onImageUploaded({
        id: Date.now().toString(),
        src: url,
        alt: file.name,
        category: 'mariage',
        title: 'Nouvelle image de mariage'
      });
    } catch (error) {
      console.error('Erreur upload:', error);
    }
    setUploading(false);
  };

  return (
    <div className="mb-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
        id="image-upload"
      />
      <label
        htmlFor="image-upload"
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {uploading ? 'Upload en cours...' : 'Ajouter une image'}
      </label>
    </div>
  );
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState(galleryItems);

  const filteredItems = selectedCategory === "Toutes"
    ? images
    : images.filter(item => item.category === selectedCategory);

  const handleNewImage = (newImage) => {
    setImages(prev => [newImage, ...prev]);
  };

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
            Mariages & Réceptions de Rêve
          </h1>
          <p className="text-xl text-gray-300">
            Des moments magiques en bord de mer
          </p>
          <ImageUploader onImageUploaded={handleNewImage} />
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
              className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative pb-[75%]">
                <img
                  src={item.image || item.src}
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
              className="bg-gray-800 rounded-lg overflow-hidden max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedImage.image || selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-[600px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300 mb-2">{selectedImage.description}</p>
                <span className="text-sm text-blue-400">{selectedImage.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center bg-gray-800 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Imaginez votre mariage de rêve
          </h2>
          <p className="text-gray-300 mb-6">
            Laissez-nous créer un moment magique pour votre journée spéciale
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Demander un devis
          </button>
        </motion.div>
      </div>
    </div>
  );
}

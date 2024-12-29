import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const galleryItems = [
  {
    id: 'boat-on-logo',
    image: 'https://firebasestorage.googleapis.com/v0/b/showcase-dashboard-4e8a5.appspot.com/o/boat-on-logo.png?alt=media',
    alt: 'Boat On Beach Club Logo',
    category: 'Logo',
    title: 'Logo Boat On'
  },
  {
    id: 'vbweb-logo',
    image: 'https://firebasestorage.googleapis.com/v0/b/showcase-dashboard-4e8a5.appspot.com/o/vbweb-caraibes.png?alt=media',
    alt: 'VB Web Caraibes Logo',
    category: 'Logo',
    title: 'VB Web Caraibes'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Galerie
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleImageClick(item)}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={handleCloseModal}
          >
            <div
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
                onClick={handleCloseModal}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

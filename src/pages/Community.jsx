import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';

export default function Community() {
  const [compositions, setCompositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCompositions();
  }, []);

  const loadCompositions = async () => {
    try {
      const q = query(
        collection(db, 'compositions'),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      const allCompositions = [];
      querySnapshot.forEach((doc) => {
        allCompositions.push({ id: doc.id, ...doc.data() });
      });
      setCompositions(allCompositions);
    } catch (error) {
      console.error('Error loading compositions:', error);
    } finally {
      setLoading(false);
    }
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
            Galerie de la Communauté
          </h1>
          <p className="text-xl text-gray-300">
            Découvrez les plus belles créations de nos artistes fleuristes
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center text-gray-300">
            Chargement des compositions...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {compositions.map((composition, index) => (
              <motion.div
                key={composition.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index % 6), duration: 0.8 }}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={composition.imageUrl}
                  alt={composition.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {composition.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {composition.description}
                  </p>
                  <p className="text-sm text-gray-400">
                    {new Date(composition.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && compositions.length === 0 && (
          <div className="text-center text-gray-300">
            Aucune composition n'a encore été partagée.
            Soyez le premier à partager votre création !
          </div>
        )}
      </div>
    </div>
  );
}

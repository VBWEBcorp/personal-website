'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';

const tabs = [
  { id: 'ebooks', label: 'E-books' },
  { id: 'videos', label: 'Vidéos' },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('ebooks');
  const [userName, setUserName] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    if (user?.displayName) {
      setUserName(user.displayName);
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Message de bienvenue */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800">
            Bienvenue {userName ? userName : 'dans votre espace'} 👋
          </h1>
          <p className="text-gray-600 mt-2">
            Accédez à tous vos contenus premium en un seul endroit
          </p>
        </motion.div>

        {/* Onglets */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex space-x-1 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? 'bg-indigo-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                } px-6 py-3 rounded-lg font-medium transition-all duration-200`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Contenu des onglets */}
          <div className="mt-6">
            {activeTab === 'ebooks' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {/* Example E-book cards */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="aspect-[3/4] bg-gray-200 rounded-lg mb-4"></div>
                    <h3 className="font-semibold text-gray-800">E-book {i}</h3>
                    <p className="text-gray-600 text-sm mt-2">Description de l'e-book {i}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'videos' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {/* Example Video cards */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="aspect-video bg-gray-200 rounded-lg mb-4"></div>
                    <h3 className="font-semibold text-gray-800">Vidéo {i}</h3>
                    <p className="text-gray-600 text-sm mt-2">Description de la vidéo {i}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { auth, logOut } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';

export default function Dashboard() {
  const router = useRouter();
  const { user } = useAuth();

  const handleLogout = async () => {
    const { error } = await logOut();
    if (!error) {
      router.push('/espace-client');
    }
  };

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-gradient-to-b from-[#040911] via-[#071018] to-[#0A1525]">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-white"
            >
              Tableau de bord
            </motion.h1>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="px-4 py-2 bg-accent/20 hover:bg-accent/30 text-accent rounded-lg transition-colors"
            >
              Déconnexion
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Welcome Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="col-span-full bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-accent/20"
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                Bienvenue, {user?.email}
              </h2>
              <p className="text-gray-400">
                Accédez à tous vos services et informations depuis votre tableau de bord personnel.
              </p>
            </motion.div>

            {/* Stats Cards */}
            {[
              { title: 'Projets en cours', value: '0', color: 'from-blue-500 to-blue-600' },
              { title: 'Messages', value: '0', color: 'from-green-500 to-green-600' },
              { title: 'Factures', value: '0', color: 'from-purple-500 to-purple-600' }
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-accent/20"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}>
                  <span className="text-white text-lg font-bold">{stat.value}</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{stat.title}</h3>
                <p className="text-gray-400 text-sm">
                  Aucun {stat.title.toLowerCase()} pour le moment
                </p>
              </motion.div>
            ))}
          </div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-accent/20"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Activité récente</h2>
            <div className="text-gray-400 text-center py-8">
              Aucune activité récente à afficher
            </div>
          </motion.div>
        </div>
      </main>
    </ProtectedRoute>
  );
}

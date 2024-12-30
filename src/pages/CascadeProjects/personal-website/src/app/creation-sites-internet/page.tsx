'use client';

import { motion } from 'framer-motion';
import NeuralBackground from '@/components/NeuralBackground';

export default function CreationSitesInternet() {
  return (
    <main className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <NeuralBackground />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/80 to-primary"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Création de Sites Internet
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Des sites web modernes et performants qui convertissent vos visiteurs en clients.
          </p>

          {/* Services Details */}
          <div className="grid gap-8 mt-12">
            {/* Add your detailed services content here */}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

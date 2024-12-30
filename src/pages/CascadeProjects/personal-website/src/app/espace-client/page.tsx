'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { signUp, signIn } from '@/lib/firebase';

const NeuralBackground = dynamic(() => import('@/components/NeuralBackground'), { ssr: false });

export default function ClientSpace() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = isLogin 
        ? await signIn(email, password)
        : await signUp(email, password);

      if (result.error) {
        setError(result.error);
      } else {
        // Redirection vers le dashboard après connexion réussie
        window.location.href = '/dashboard';
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#040911] via-[#071018] to-[#0A1525] relative">
      <NeuralBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary z-0"></div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
              Espace Client
            </h1>
            <p className="text-gray-300 text-lg">
              {isLogin ? 'Connectez-vous à votre compte' : 'Créez votre compte'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-accent/20"
          >
            {/* Toggle Buttons */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 p-1 rounded-lg">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`px-4 py-2 rounded-md transition-all ${
                    isLogin
                      ? 'bg-accent text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Connexion
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`px-4 py-2 rounded-md transition-all ${
                    !isLogin
                      ? 'bg-accent text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Inscription
                </button>
              </div>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-accent/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="vous@exemple.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-accent/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
                    />
                    <label htmlFor="remember" className="ml-2 block text-gray-300">
                      Se souvenir de moi
                    </label>
                  </div>
                  <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                    Mot de passe oublié ?
                  </a>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Chargement...
                  </span>
                ) : (
                  isLogin ? 'Se connecter' : 'Créer un compte'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 gap-6"
          >
            {[
              {
                title: "Tableau de bord",
                description: "Suivez vos projets en temps réel"
              },
              {
                title: "Support dédié",
                description: "Une équipe à votre écoute"
              },
              {
                title: "Documents",
                description: "Accédez à vos fichiers"
              },
              {
                title: "Facturation",
                description: "Gérez vos paiements"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-accent/20 backdrop-blur-sm text-center"
              >
                <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}

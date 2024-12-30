'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent rounded-xl blur-xl"></div>
      <form onSubmit={handleSubmit} className="relative bg-primary/30 backdrop-blur-md p-8 rounded-xl border border-accent/10">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Nom
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-primary/50 border border-accent/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent/50 transition-colors"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-primary/50 border border-accent/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent/50 transition-colors"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
              Service
            </label>
            <motion.select
              whileFocus={{ scale: 1.01 }}
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-primary/50 border border-accent/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent/50 transition-colors"
            >
              <option value="" className="bg-primary">Sélectionnez un service</option>
              <option value="site-vitrine" className="bg-primary">Site Vitrine</option>
              <option value="referencement-seo" className="bg-primary">Référencement SEO</option>
              <option value="developpement-sur-mesure" className="bg-primary">Développement Sur Mesure</option>
            </motion.select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-primary/50 border border-accent/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent/50 transition-colors resize-none"
              placeholder="Votre message..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full px-8 py-4 bg-accent/80 hover:bg-accent text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 group"
          >
            <span>Envoyer</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;

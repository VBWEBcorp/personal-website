'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactForm from './ContactForm';

export default function Footer() {
  return (
    <footer className="relative bg-primary/95 pt-20 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div>
            <motion.h3 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Commencer un projet
            </motion.h3>
            <ContactForm />
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/site-vitrine" className="text-gray-400 hover:text-accent transition-colors">
                    Site Vitrine
                  </Link>
                </li>
                <li>
                  <Link href="/developpement-sur-mesure" className="text-gray-400 hover:text-accent transition-colors">
                    Développement sur mesure
                  </Link>
                </li>
                <li>
                  <Link href="/referencement-seo" className="text-gray-400 hover:text-accent transition-colors">
                    Référencement SEO
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Liens utiles</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/espace-client" className="text-gray-400 hover:text-accent transition-colors">
                    Espace Client
                  </Link>
                </li>
                <li>
                  <Link href="/mentions-legales" className="text-gray-400 hover:text-accent transition-colors">
                    Mentions Légales
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Victor Béasse. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

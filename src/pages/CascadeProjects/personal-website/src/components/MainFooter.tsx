'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const stats = [
  { number: '65+', label: 'Avis Google' },
  { number: '80+', label: 'Sites Internet Construits' },
  { number: '150+', label: 'Clients Accompagnés en SEO' },
  { number: '10+', label: 'Plateformes Web Créées' },
]

export default function MainFooter() {
  return (
    <footer className="relative bg-primary/90 border-t border-accent/10">
      <div className="absolute inset-0 bg-gradient-to-t from-[#040911] to-transparent opacity-50"></div>
      
      {/* Stats Section */}
      <div className="relative z-10 max-w-7xl mx-auto pt-16 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 py-8 border-t border-accent/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent mb-4 block">
              Victor Béasse
            </Link>
            <p className="text-gray-400 max-w-md">
              Développeur web freelance spécialisé dans la création de sites vitrine, le SEO et les plateformes web sur-mesure.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sites-vitrine" className="text-gray-400 hover:text-accent transition-colors">
                  Sites Vitrine
                </Link>
              </li>
              <li>
                <Link href="/seo" className="text-gray-400 hover:text-accent transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="/plateformes" className="text-gray-400 hover:text-accent transition-colors">
                  Plateformes Web
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-accent transition-colors">
                  Demander un devis
                </Link>
              </li>
              <li>
                <a href="mailto:contact@victorbeasse.com" className="text-gray-400 hover:text-accent transition-colors">
                  contact@victorbeasse.com
                </a>
              </li>
              <li>
                <a href="tel:+33600000000" className="text-gray-400 hover:text-accent transition-colors">
                  +33 6 00 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-6 border-t border-accent/10">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Victor Béasse. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

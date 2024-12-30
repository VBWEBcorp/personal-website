'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/sites-vitrine', label: 'Site Vitrine' },
    { href: '/referencement-seo', label: 'SEO' },
    { href: '/developpement-sur-mesure', label: 'Développement Web' },
    { 
      href: '/espace-client', 
      label: 'Espace Client',
      className: 'bg-accent text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-accent/80 transition-colors',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <nav className="fixed w-full z-50">
      <div className="relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/40 backdrop-blur-md border-b border-accent/10"></div>
        
        {/* Navigation content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="group relative">
              <div className="absolute -inset-2 bg-accent/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
                VBWEB
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative group ${item.className || 'text-gray-300 hover:text-accent transition-colors'}`}
                >
                  <div className="absolute -inset-2 bg-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative group p-2"
            >
              <div className="absolute inset-0 bg-accent/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { opacity: 1, height: "auto", marginBottom: "1rem" },
              closed: { opacity: 0, height: 0, marginBottom: 0 }
            }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-2 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-lg group ${
                    item.className || 'text-gray-300 hover:text-accent transition-colors'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="absolute -inset-2 bg-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

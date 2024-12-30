'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MainHeader() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const navItems = [
    { href: '/developpement', label: 'Développement' },
    { href: '/referencement-seo', label: 'SEO' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-lg border-b border-accent/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
            VBWEB
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isActive ? 'text-accent' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <motion.button
            className="md:hidden text-white"
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </nav>
      </div>
    </motion.header>
  )
}

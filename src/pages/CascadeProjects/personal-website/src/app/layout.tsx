'use client';

import './globals.css'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/context/AuthContext';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="fr">
      <body className={inter.className}>
        <AuthProvider>
          {!isHomePage && <Navigation />}
          {children}
          {!isHomePage && <Footer />}
        </AuthProvider>
      </body>
    </html>
  );
}

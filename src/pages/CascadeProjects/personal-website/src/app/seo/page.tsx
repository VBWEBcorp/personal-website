import { Metadata } from 'next'
import dynamic from 'next/dynamic'

const AnimatedSEOPage = dynamic(() => import('@/components/AnimatedSEOPage'), {
  ssr: false
})

export const metadata: Metadata = {
  title: 'Services SEO & Référencement Naturel | VBWEB',
  description: 'Expert en référencement naturel (SEO) à Nantes. Audit SEO, optimisation de contenu et stratégie de netlinking pour améliorer votre visibilité en ligne.',
  keywords: 'seo, référencement naturel, audit seo, optimisation site web, netlinking, consultant seo nantes',
}

export default function SEOPage() {
  return <AnimatedSEOPage />
}

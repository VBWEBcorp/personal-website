'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import NeuralBackground from '@/components/NeuralBackground';
import SubtleNeuralBackground from '@/components/SubtleNeuralBackground';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-primary">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pb-2">
        {/* Neural Background */}
        <div className="absolute inset-0">
          <NeuralBackground />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white bg-300% animate-gradient-shift mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
            >
              Booster votre présence grâce au digital
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: 0.3,
                type: "spring"
              }}
            >
              Créons ensemble votre succès digital avec des solutions web sur mesure
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: 0.6,
                type: "spring"
              }}
            >
              <motion.button
                onClick={() => scrollToSection('services')}
                className="px-8 py-3 rounded-lg bg-accent/90 text-white font-medium flex items-center gap-2 group relative overflow-hidden animate-pulse-glow hover:bg-accent transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Les Services</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 animate-shimmer"></div>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 rounded-lg border border-accent text-white font-medium bg-transparent group relative overflow-hidden hover:bg-accent/10 transition-all duration-300 inline-flex items-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Commencer un projet</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform relative z-10 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative -mt-32 px-4">
        {/* Background */}
        <div className="absolute inset-0">
          <SubtleNeuralBackground />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/95 to-primary"></div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Création de Sites Internet",
                  description: "Des sites web modernes et performants qui convertissent vos visiteurs en clients.",
                  cta: "Je veux être visible",
                  icon: (
                    <div className="group">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )
                },
                {
                  title: "Référencement SEO",
                  description: "Optimisez votre visibilité en ligne et attirez plus de clients qualifiés.",
                  cta: "Je veux convertir",
                  icon: (
                    <div className="group">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  )
                },
                {
                  title: "Développement Sur Mesure",
                  description: "Des solutions web personnalisées pour répondre à vos besoins spécifiques.",
                  cta: "Je veux gagner en productivité",
                  icon: (
                    <div className="group">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  )
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group relative h-full"
                >
                  {/* Content Container */}
                  <div className="relative h-full overflow-hidden rounded-xl border border-accent/10 backdrop-blur-sm bg-primary/30">
                    {/* Content */}
                    <div className="relative p-6 z-10 flex flex-col h-full">
                      {/* Icon with glow */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="mb-4 relative"
                      >
                        {service.icon}
                      </motion.div>

                      {/* Title with gradient */}
                      <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 text-sm">
                        {service.description}
                      </p>

                      {/* CTA Button */}
                      <div className="mt-auto">
                        <Link href={service.title === "Création de Sites Internet" ? "/sites-vitrine" :
                                  service.title === "Référencement SEO" ? "/referencement-seo" :
                                  "/developpement"} className="group relative block">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative w-full py-2 px-4 rounded-lg border border-accent/30 hover:border-accent text-accent text-sm font-medium transition-colors bg-primary/30 hover:bg-primary/50"
                          >
                            {service.cta}
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-primary/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Commencer un projet
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Prêt à donner vie à votre projet ? Contactez-nous pour en discuter.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

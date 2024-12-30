'use client';

import { motion } from 'framer-motion';

const AnimatedWebIcon = () => {
  const iconVariants = {
    animate: {
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const codeLineVariants = {
    animate: (i: number) => ({
      scaleX: [0, 1, 1, 0],
      x: [0, 0, 200, 200],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay: i * 0.2,
        ease: "easeInOut"
      }
    })
  };

  return (
    <motion.div
      className="w-24 h-24 mb-8 mx-auto relative"
      animate="animate"
      variants={iconVariants}
    >
      {/* Monitor frame */}
      <motion.div className="absolute inset-0 border-4 border-accent rounded-lg overflow-hidden">
        {/* Screen content */}
        <div className="absolute inset-2 bg-primary/50 rounded">
          {/* Animated code lines */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-1 bg-accent/30 rounded mt-2 mx-2"
              custom={i}
              animate="animate"
              variants={codeLineVariants}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Stand */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-4 bg-accent/80 rounded-t-lg" />
        <div className="w-12 h-1 bg-accent/80 rounded-lg mt-1" />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute -right-2 -top-2 w-4 h-4 rounded-full border-2 border-accent"
        animate={{
          y: [-4, 4, -4],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute -left-2 -bottom-2 w-3 h-3 bg-accent/30 rounded"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default AnimatedWebIcon;

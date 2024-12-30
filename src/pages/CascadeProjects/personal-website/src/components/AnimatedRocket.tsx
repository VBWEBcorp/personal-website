'use client';

import { motion } from 'framer-motion';

const AnimatedRocket = () => {
  return (
    <motion.div
      className="w-32 h-32 mb-8 mx-auto relative"
      initial={{ y: 100 }}
      animate={{
        y: [-20, -150],
        x: [0, 20, -20, 0],
      }}
      transition={{
        y: {
          duration: 2,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 1
        },
        x: {
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }
      }}
    >
      {/* Rocket Body */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: [0, -15, 15, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Rocket Nose */}
        <motion.div 
          className="w-8 h-12 bg-accent rounded-t-full mx-auto"
          style={{
            background: 'linear-gradient(135deg, #4EBAEC 0%, #264060 100%)',
          }}
        />
        
        {/* Main Body */}
        <motion.div 
          className="w-16 h-20 bg-white rounded-lg relative"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #4EBAEC 100%)',
          }}
        >
          {/* Window */}
          <motion.div 
            className="w-8 h-8 rounded-full bg-primary absolute left-1/2 top-4 -translate-x-1/2"
            animate={{
              boxShadow: [
                '0 0 10px #4EBAEC',
                '0 0 20px #4EBAEC',
                '0 0 10px #4EBAEC'
              ]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div 
              className="w-6 h-6 rounded-full bg-accent/30 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Fins */}
        <div className="absolute -left-4 bottom-0 w-4 h-8 bg-accent skew-x-[30deg]" />
        <div className="absolute -right-4 bottom-0 w-4 h-8 bg-accent skew-x-[-30deg]" />

        {/* Rocket Flames */}
        <motion.div 
          className="absolute -bottom-12 left-1/2 -translate-x-1/2"
          animate={{
            scaleY: [1, 1.5, 1],
            scaleX: [1, 0.8, 1],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-8 h-16 bg-gradient-to-b from-[#FF5722] via-[#FFA000] to-transparent rounded-b-full opacity-90" />
          <div className="w-6 h-12 bg-gradient-to-b from-[#FFEB3B] via-[#FFA000] to-transparent rounded-b-full absolute top-2 left-1/2 -translate-x-1/2 opacity-80" />
        </motion.div>
      </motion.div>

      {/* Launch Smoke Effect */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            width: `${8 + Math.random() * 12}px`,
            height: `${8 + Math.random() * 12}px`,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, 100 + Math.random() * 50],
            x: [0, (Math.random() - 0.5) * 40],
            opacity: [0, 0.5, 0],
            scale: [1, 2, 3],
          }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeOut"
          }}
        />
      ))}
    </motion.div>
  );
};

export default AnimatedRocket;

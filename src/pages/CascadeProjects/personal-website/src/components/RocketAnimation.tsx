'use client';

import { motion } from 'framer-motion';

const RocketAnimation = () => {
  return (
    <motion.div
      className="w-40 h-40 mx-auto mb-8 relative"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          animate={{
            y: [-4, 4, -4],
            rotate: [-2, 2, -2],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        >
          {/* Rocket Body */}
          <motion.path
            d="M12 2L8 12H16L12 2Z"
            fill="#4EBAEC"
            className="drop-shadow-glow"
          />
          <motion.path
            d="M8.5 12H15.5L16.5 19H7.5L8.5 12Z"
            fill="#4EBAEC"
            className="drop-shadow-glow"
          />
          
          {/* Windows */}
          <motion.circle
            cx="12"
            cy="9"
            r="1.5"
            fill="#264060"
            className="drop-shadow-glow"
          />
          
          {/* Fins */}
          <motion.path
            d="M7 12L5 15V19L7.5 19L8.5 12"
            fill="#4EBAEC"
            className="drop-shadow-glow"
          />
          <motion.path
            d="M17 12L19 15V19L16.5 19L15.5 12"
            fill="#4EBAEC"
            className="drop-shadow-glow"
          />

          {/* Flames */}
          <motion.path
            d="M10.5 19H13.5L12 22L10.5 19Z"
            animate={{
              fill: ['#FF5722', '#FFA000', '#FF5722'],
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="drop-shadow-glow"
          />
        </motion.g>

        {/* Particle Effects */}
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={i}
            cx={12}
            cy={22}
            r={0.5}
            fill="#FFA000"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 2],
              y: [-2, -10 - i * 4],
              x: [0, (i % 2 === 0 ? 2 : -2) * (i + 1)],
            }}
            transition={{
              repeat: Infinity,
              duration: 1 + i * 0.2,
              delay: i * 0.1,
              ease: "easeOut",
            }}
            className="drop-shadow-glow"
          />
        ))}
      </svg>
    </motion.div>
  );
};

export default RocketAnimation;

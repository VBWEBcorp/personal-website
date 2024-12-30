'use client';

import Lottie from 'lottie-react';
import rocketAnimation from './rocket-launch.json';

const RocketLottie = () => {
  return (
    <div className="w-48 h-48 mx-auto mb-8">
      <Lottie
        animationData={rocketAnimation}
        loop={true}
        autoplay={true}
      />
    </div>
  );
};

export default RocketLottie;

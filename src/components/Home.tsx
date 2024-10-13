import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full overflow-hidden">
          <img
            src="https://ik.imagekit.io/pradeeth/tr:w-1920/Header.jpg"
            alt="Background"
            className="w-full h-full object-cover animate-ken-burns"
          />
        </div>
      </div>
      <div className="relative z-10 text-center text-white">
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TorqueX
        </motion.h1>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Enhancing Vehicle Efficiency, with Real-Time Torque Optimization
        </motion.p>
      </div>
    </div>
  );
};

export default Home;

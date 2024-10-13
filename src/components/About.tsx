import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We are a team of electrical students from Thiagarajar College of Engineering, Madurai. Our project provides real-time monitoring and control over critical vehicle parameters such as motor torque, road angle, battery SOC, speed, and vehicle load. This allows drivers to optimize performance while climbing hills, ensuring efficient torque distribution for a smoother, safer, and more fuel-efficient drive. Whether you're navigating steep inclines or cruising city roads, our solution maximizes your vehicle's potential with advanced technology at your fingertips.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
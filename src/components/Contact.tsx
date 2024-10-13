import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Mail className="w-6 h-6 mr-2 text-black-600" />
            <span>torquexindia@gmail.com</span>
          </motion.div>
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Phone className="w-6 h-6 mr-2 text-black-600" />
            <span>+91 8428910949</span>
          </motion.div>
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MapPin className="w-6 h-6 mr-2 text-black-600" />
            <span>
              Thiagarajar College of Engineering, Madurai - 625015, Tamil Nadu,
              India
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const Languages: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Globe className="text-secondary mb-4 md:mb-0 md:mr-6" size={24} />
          <p className="text-center md:text-left text-lg">
            English <span className="mx-2 text-secondary">|</span> 
            Hindi <span className="mx-2 text-secondary">|</span> 
            Gujarati
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Languages;
import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const PricingBar: React.FC = () => {
  return (
    <section id="consultation" className="py-8 bg-secondary">
      <div className="container">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center w-full">
            <span className="font-semibold text-lg text-center">Open to collaborations, speaking engagements, and consulting. <a href="#contact" className="underline hover:text-primary ml-2">Let's connect!</a></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingBar;
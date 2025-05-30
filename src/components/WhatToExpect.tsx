import React from 'react';
import { motion } from 'framer-motion';

const WhatToExpect: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="practice" className="split-section bg-gradient-to-b from-white to-light/80 py-10">
      <motion.div 
        className="split-section-col bg-white p-10 md:p-20 lg:p-28"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="section-title text-3xl md:text-4xl font-serif font-bold text-dark mb-6 tracking-wide drop-shadow-lg">My Approach</h2>
          <p className="mb-6 leading-relaxed text-gray-700 text-lg md:text-xl">
            I believe in a personalized, evidence-based approach to dentistry—never one-size-fits-all. My goal is to empower patients with knowledge, confidence, and a sense of partnership in their oral health journey.
          </p>
          <p className="mb-6 leading-relaxed text-gray-700 text-lg md:text-xl">
            My practice is grounded in empathy, professionalism, and clear communication. I strive to make every patient feel informed, respected, and comfortable, blending clinical excellence with a human touch.
          </p>
          <p className="mb-8 leading-relaxed text-gray-700 text-lg md:text-xl">
            I am committed to lifelong learning, modern techniques, and a collaborative approach—so you always feel supported and understood.
          </p>

          <h3 className="section-title text-2xl font-serif font-semibold text-secondary mb-4">Let's Connect</h3>
          <p className="leading-relaxed text-gray-700 text-lg">
            Interested in my work or want to discuss a project? Use the form below to get in touch.
          </p>
        </motion.div>
      </motion.div>
      <motion.div 
        className="split-section-col bg-gray-100 flex items-center justify-center"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <img 
          src="/dentist_action.jpg" 
          alt="Dental practice" 
          className="w-full h-full object-cover grayscale contrast-125 rounded-xl border-4 border-white shadow-xl max-w-md"
        />
      </motion.div>
    </section>
  );
};

export default WhatToExpect;
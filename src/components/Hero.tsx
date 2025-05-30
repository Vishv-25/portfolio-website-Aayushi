import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Stethoscope, Heart, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Blurred and enhanced background image */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: 'url("/assets/dentist_action.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'top -100px center',
          filter: 'blur(3px)'
        }}
        aria-hidden="true"
      />
      {/* Optional: subtle overlay for extra enhancement */}
      <div className="absolute inset-0 bg-black/60 z-0" aria-hidden="true" />
      <motion.div 
        className="text-center z-10 px-2 sm:px-4 max-w-full sm:max-w-3xl mx-auto flex flex-col items-center justify-center h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-2 sm:mb-4 drop-shadow-xl tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Dental Surgeon
        </motion.h1>
        <motion.h2
          className="text-lg xs:text-xl md:text-2xl font-serif font-semibold text-secondary mb-4 sm:mb-6 drop-shadow-md tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Dr. Aayushi Magarvadia, BDS
        </motion.h2>
        <motion.p
          className="text-base xs:text-lg md:text-2xl font-sans text-white/90 mb-6 sm:mb-8 drop-shadow-md max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Empowering smiles through evidence-based, compassionate dentistry. Dedicated to lifelong learning, patient-centered care, and clinical excellence.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 w-full max-w-xs sm:max-w-none mx-auto">
          <motion.a
            href="#about"
            className="inline-block bg-secondary text-dark font-semibold text-base xs:text-lg px-6 py-3 rounded-full shadow-lg hover:bg-secondary-dark transition-colors duration-200 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="/assets/Aayushi_magarvadia_resume.pdf" target="_blank" rel="noopener noreferrer"
            download="Aayushi_Magarvadia_CV.pdf"
            className="inline-block border-2 border-secondary text-secondary font-semibold text-base xs:text-lg px-6 py-3 rounded-full shadow-lg hover:bg-secondary hover:text-dark transition-colors duration-200 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Download CV
          </motion.a>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <ArrowDown className="text-white/60" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
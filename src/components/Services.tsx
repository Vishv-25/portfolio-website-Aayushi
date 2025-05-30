import React from 'react';
import AccordionItem from './AccordionItem';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Services: React.FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-light to-white/80">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div className="flex flex-col items-center mb-10">
            <Sparkles size={44} className="text-secondary mb-4 animate-pulse" />
            <motion.h2 
              className="section-title text-center mx-auto text-4xl md:text-5xl font-serif font-bold text-dark mb-4 drop-shadow-lg tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Expertise
            </motion.h2>
            <div className="w-32 h-1 bg-gradient-to-r from-secondary to-secondary/50 rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg md:text-xl font-sans text-center max-w-2xl">
              My clinical strengths, research, and professional development.
            </p>
          </motion.div>
          <motion.div 
            className="max-w-3xl mx-auto mt-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <AccordionItem title="Clinical Skills" defaultOpen={true}>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Restorative & Cosmetic Dentistry</li>
                  <li>Oral Surgery (extractions, suturing, alveoloplasty)</li>
                  <li>Endodontics (rotary RCT, anterior built-up, post & core)</li>
                  <li>Prosthodontics (crowns, bridges, removable appliances)</li>
                  <li>Periodontics (scaling, root planing, frenectomy, flap surgeries)</li>
                </ul>
              </AccordionItem>
            </motion.div>
            <motion.div variants={itemVariants}>
              <AccordionItem title="Research & Publications">
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Published procedural protocols on patient-centered care & minimally invasive techniques</li>
                  <li>Research on integrative, evidence-based dental care</li>
                </ul>
              </AccordionItem>
            </motion.div>
            <motion.div variants={itemVariants}>
              <AccordionItem title="Professional Philosophy">
                <p className="text-gray-700">
                  Integrative, evidence-based care with emphasis on compassion, modern technology, and lifelong learning.
                </p>
              </AccordionItem>
            </motion.div>
          </motion.div>
          <div className="flex justify-center mt-12">
            <a href="#consultation" className="bg-secondary text-dark font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-secondary-dark transition-colors duration-200">
              Book Your Appointment
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
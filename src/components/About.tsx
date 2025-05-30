import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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
    <section id="about" className="split-section">
      <motion.div 
        className="split-section-col bg-secondary-light flex items-center justify-center"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <img 
          src="/Aayushi_profile3.jpg" 
          alt="Dr. Aayushi Magarvadia" 
          className="w-full h-full object-cover object-center rounded-xl border-4 border-white shadow-xl max-w-md" style={{objectPosition: 'center 60%'}}
        />
      </motion.div>
      <motion.div 
        className="split-section-col bg-white p-10 md:p-20 lg:p-28"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="font-serif text-3xl md:text-4xl font-bold mb-4 tracking-wide text-dark drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Dr. Aayushi Magarvadia, BDS
          </motion.h2>
          <motion.p 
            className="text-gray-700 mb-8 text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Licensed Dental Surgeon | Ahmedabad, India
          </motion.p>
          <motion.blockquote className="italic text-secondary text-lg md:text-xl mb-8">“My mission is to blend science, skill, and empathy to create healthy, confident smiles.”</motion.blockquote>
        </motion.div>

        <motion.ul 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="text-secondary mr-2">•</span>
            <p>BDS, College of Dental Science & Research Center, Ahmedabad (2022)</p>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="text-secondary mr-2">•</span>
            <p>4 years clinical experience across restorative, surgical, endodontic, prosthodontic and periodontic specialties</p>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="text-secondary mr-2">•</span>
            <p>Internships at Government Dental College & Hospital; Avadhot Dental Clinic; Akshar Dental Clinic</p>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="text-secondary mr-2">•</span>
            <p>Published procedural protocols on patient‑centered care & minimally invasive techniques</p>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="text-secondary mr-2">•</span>
            <p>Licensed by Gujarat Dental Council since 2022</p>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="text-secondary mr-2">•</span>
            <p>My philosophy: integrative, evidence‑based care with emphasis on compassion and modern technology</p>
          </motion.li>
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default About;
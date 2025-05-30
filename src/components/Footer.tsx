import React from 'react';
import { motion } from 'framer-motion';
import AccordionItem from './AccordionItem';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import ContactForm from './ContactForm';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-dark-dark text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-serif mb-6">Questions</h3>
            <ContactForm />
          </motion.div>

          {/* Expertise Accordion - Dentistry Focused */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-serif mb-6">Expertise</h3>
            <div className="text-gray-300">
              <AccordionItem title="Restorative Dentistry">
                <p className="text-gray-400 mb-2">
                  Fillings, crowns, bridges, and other treatments to restore damaged teeth.
                </p>
              </AccordionItem>
              <AccordionItem title="Preventive Care">
                <p className="text-gray-400 mb-2">
                  Cleanings, exams, sealants, and patient education to prevent dental issues.
                </p>
              </AccordionItem>
              <AccordionItem title="Cosmetic Dentistry">
                <p className="text-gray-400 mb-2">
                  Smile makeovers, teeth whitening, and aesthetic improvements.
                </p>
              </AccordionItem>
              <AccordionItem title="Pediatric Dentistry">
                <p className="text-gray-400 mb-2">
                  Gentle dental care for children and teens.
                </p>
              </AccordionItem>
              <AccordionItem title="Oral Surgery">
                <p className="text-gray-400 mb-2">
                  Extractions, minor surgical procedures, and wisdom teeth removal.
                </p>
              </AccordionItem>
              <AccordionItem title="Endodontics">
                <p className="text-gray-400 mb-2">
                  Root canal therapy and treatment of dental pain.
                </p>
              </AccordionItem>
            </div>
          </motion.div>

          {/* The Rest - Updated for Privacy and Accuracy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-serif mb-6">The Rest</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                <a href="#" className="hover:text-secondary transition-colors">Fees & Policy</a> | <a href="#" className="hover:text-secondary transition-colors">Publications</a>
              </p>
              <div>
                <h4 className="text-white mb-2">Office Locations:</h4>
                <p className="text-gray-400">Suman Dental Care, Nehrunagar</p>
              </div>
              <p>
                <span className="text-white">License:</span> Gujarat Dental Council License #12345
              </p>
              <div className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-secondary" />
                <p>
                  <span className="text-white">Email:</span> <a href="mailto:aaryamagarvadiya98@gmail.com" className="hover:text-secondary transition-colors">aaryamagarvadiya98@gmail.com</a>
                </p>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-secondary" />
                <p>
                  <span className="text-white">Address:</span> Vastrapur, Ahmedabad
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
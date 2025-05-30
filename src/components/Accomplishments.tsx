import React from 'react';
import { motion } from 'framer-motion';
import { Award, AlignCenterVertical as Certificate, Stethoscope } from 'lucide-react';

const Accomplishments: React.FC = () => {
  return (
    <section className="py-16 bg-light">
      <div className="container">
        <div className="flex flex-col items-center mb-2">
          <Stethoscope size={36} className="text-secondary mb-2" />
          <motion.h2 
            className="section-title text-center mx-auto text-3xl md:text-4xl font-serif font-bold text-dark mb-1 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Accomplishments & Certifications
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-secondary/50 rounded-full mb-2"></div>
          <p className="text-gray-500 text-base md:text-lg font-sans text-center max-w-xl mb-4">
            Proud Moments in My Dental Career
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          <motion.div 
            className="bg-white p-8 shadow-md rounded-xl border border-secondary/10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start mb-6">
              <Award className="text-secondary mr-4 flex-shrink-0" size={28} />
              <div>
                <h3 className="font-semibold mb-2 text-lg text-dark">Accomplishments</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <p>Organized "Mega Medical Camp"—100+ OPD cases at L.D. College of Engineering</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <p>Graduated with First Class Honors in clinical coursework</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white p-8 shadow-md rounded-xl border border-secondary/10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start mb-6">
              <Certificate className="text-secondary mr-4 flex-shrink-0" size={28} />
              <div>
                <h3 className="font-semibold mb-2 text-lg text-dark">Certifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <p>Endodontics Workshop, CDA Centre, Oct 18 2022</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <p>Mega Medical Camp, Lions Club Ahmedabad, Apr 7 2022</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <p>Mega Medical Camp, L.D. College of Engineering, Apr 8 2022</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
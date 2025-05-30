import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Sparkles } from 'lucide-react';

const TimelineItem: React.FC<{
  period: string;
  title: string;
  location: string;
  index: number;
}> = ({ period, title, location, index }) => {
  return (
    <motion.div
      className="timeline-item flex items-start mb-10"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
    >
      <div className="timeline-dot flex items-center justify-center w-8 h-8 rounded-full bg-secondary shadow-lg mt-1">
        <Sparkles size={20} className="text-white" />
      </div>
      <div className="pl-6">
        <p className="text-sm text-gray-500 mb-1">{period}</p>
        <h3 className="font-medium text-lg text-dark mb-1">{title}</h3>
        <p className="text-gray-700">{location}</p>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  const timelineData = [
    {
      period: "01/2024–08/2024",
      title: "Senior Associate",
      location: "Akshar Dental Clinic, Satellite, Ahmedabad"
    },
    {
      period: "07/2023–12/2023",
      title: "Rotational Internship",
      location: "Government Dental College & Hospital, Ahmedabad"
    },
    {
      period: "01/2022–06/2023",
      title: "General Dentistry",
      location: "Asarwa Private Clinic, Ahmedabad"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center mb-2">
            <Stethoscope size={36} className="text-secondary mb-2" />
            <h2 className="section-title text-center mx-auto text-3xl md:text-4xl font-serif font-bold text-dark mb-1 drop-shadow-md">
              Experience Timeline
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-secondary/50 rounded-full mb-2"></div>
            <p className="text-gray-500 text-base md:text-lg font-sans text-center max-w-xl mb-4">
              My Journey in Dentistry
            </p>
          </div>
          <div className="mt-12 border-l-4 border-secondary/40 ml-4 pl-2">
            {timelineData.map((item, idx) => (
              <TimelineItem key={idx} {...item} index={idx} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
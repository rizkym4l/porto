import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { experience } from '../data/experience';
import { fadeInUp, staggerContainer } from '../animations/motionVariants';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Work Experience</h2>
          <div className="w-20 h-1 bg-white mx-auto" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-800" />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={fadeInUp}
              className="relative mb-12 last:mb-0"
            >
              <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className="md:w-1/2 md:px-8">
                  <Card className="p-6 bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                        <h4 className="text-lg text-gray-300 font-semibold mb-2">{exp.company}</h4>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start text-gray-400 text-sm">
                          <ChevronRight size={16} className="mr-2 mt-1 flex-shrink-0 text-gray-600" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex md:w-12 items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-white rounded-full border-4 border-black" />
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
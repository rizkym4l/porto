import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { MapPin, Calendar, ChevronRight, Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 rounded-2xl mb-6"
          >
            <Briefcase size={32} className="text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Work Experience</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-4" />
          <p className="text-gray-500 max-w-lg mx-auto">
            Professional journey across fintech, SaaS, and enterprise solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200" />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className={`relative mb-12 last:mb-0 md:flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: index * 0.15 + 0.2 }}
                className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10"
              >
                <div className="w-4 h-4 bg-gray-900 rounded-full border-4 border-white shadow-md" />
              </motion.div>

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-20 md:pl-0`}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-gray-300 transition-all"
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{exp.position}</h3>
                    <h4 className="text-base text-gray-700 font-semibold">{exp.company}</h4>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                        className="flex items-start text-gray-600 text-sm"
                      >
                        <ChevronRight size={16} className="mr-2 mt-0.5 flex-shrink-0 text-gray-400" />
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {index === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium"
                    >
                      {/* <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      Current Position */}
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Spacer */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

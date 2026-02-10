import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

const educationData = [
  {
    id: 1,
    institution: "Telkom University Bandung",
    degree: "Bachelor of Applied Information Systems",
    major: "Smart City",
    period: "2025 — 2029",
    location: "Bandung, Indonesia",
    type: "university",
    description: "Currently pursuing a degree in Applied Information Systems with a focus on Smart City technologies, IoT, and modern software development.",
  },
  {
    id: 2,
    institution: "SMK Wikrama Bogor",
    degree: "Vocational High School Diploma",
    major: "Software Engineering (PPLG)",
    period: "2022 — 2025",
    location: "Bogor, Indonesia",
    type: "highschool",
    description: "Graduated with a strong foundation in software engineering, covering full-stack development, database design, and agile methodologies.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
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
            <GraduationCap size={32} className="text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Education</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-4" />
          <p className="text-gray-500 max-w-lg mx-auto">
            Academic background in Information Systems and Software Engineering
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className={`relative mb-12 last:mb-0 md:flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: index * 0.2 + 0.3 }}
                className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10"
              >
                <div className="w-4 h-4 bg-gray-900 rounded-full border-4 border-white shadow-md" />
              </motion.div>

              {/* Content card */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-20 md:pl-0`}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-gray-300 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${edu.type === 'university' ? 'bg-gray-900' : 'bg-gray-700'}`}>
                      {edu.type === 'university' ? (
                        <GraduationCap size={24} className="text-white" />
                      ) : (
                        <BookOpen size={24} className="text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900">{edu.institution}</h3>
                      <p className="text-gray-700 font-medium">{edu.degree}</p>
                      <p className="text-gray-500 text-sm font-mono">{edu.major}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed">{edu.description}</p>

                  {edu.type === 'university' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium"
                    >
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      Currently Enrolled
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

export default Education;

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import telkomLogo from '../assets/sekolah/images (1).png';
import smkLogo from '../assets/sekolah/images.png';

const educationData = [
  {
    id: 1,
    institution: "Telkom University",
    location_short: "Bandung",
    degree: "Bachelor of Applied Information Systems",
    major: "Smart City",
    period: "2025 — 2029",
    location: "Bandung, Indonesia",
    type: "university",
    active: true,
    logo: telkomLogo,
    accent: "indigo",
    description:
      "Pursuing a degree in Applied Information Systems with a focus on Smart City technologies, IoT, and modern software development.",
  },
  {
    id: 2,
    institution: "SMK Wikrama Bogor",
    location_short: "Bogor",
    degree: "Vocational High School Diploma",
    major: "Software Engineering (PPLG)",
    period: "2022 — 2025",
    location: "Bogor, Indonesia",
    type: "highschool",
    active: false,
    logo: smkLogo,
    accent: "violet",
    description:
      "Graduated with a strong foundation in software engineering — full-stack development, database design, and agile methodologies.",
  },
];

const accentMap = {
  indigo: {
    label:   "text-indigo-600",
    border:  "border-indigo-100",
    bg:      "bg-indigo-50",
    badge:   "bg-indigo-50 text-indigo-600 border-indigo-200",
    bar:     "from-indigo-400 to-indigo-600",
    dot:     "bg-indigo-500",
  },
  violet: {
    label:   "text-violet-600",
    border:  "border-violet-100",
    bg:      "bg-violet-50",
    badge:   "bg-violet-50 text-violet-600 border-violet-200",
    bar:     "from-violet-400 to-violet-600",
    dot:     "bg-violet-500",
  },
};

const Education = () => (
  <section id="education" className="py-24 bg-[#F0F0F0] relative overflow-hidden">

    {/* subtle dot pattern */}
    <div className="absolute inset-0 pointer-events-none opacity-30" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, #d1d5db 1px, transparent 0)',
      backgroundSize: '28px 28px',
    }} />

    <div className="max-w-5xl mx-auto px-6 relative z-10">

      {/* Header */}
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase mb-4">
          Education
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">Academic</h2>
        <h2
          className="text-4xl md:text-5xl font-black italic text-gray-500 leading-tight"
          style={{ fontFamily: "'Georgia','Times New Roman',serif" }}
        >
          background
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {educationData.map((edu, i) => {
          const a = accentMap[edu.accent];
          return (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`relative bg-white border ${a.border} rounded-2xl overflow-hidden shadow-sm`}
            >
              {/* Watermark logo */}
              <div className="absolute -right-6 -bottom-6 w-36 h-36 opacity-[0.05] pointer-events-none">
                <img src={edu.logo} alt="" className="w-full h-full object-contain" />
              </div>

              {/* Top accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${a.bar} to-transparent`} />

              <div className="p-7">
                {/* Logo + Institution */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl ${a.bg} border ${a.border} p-2 flex items-center justify-center flex-shrink-0`}>
                    <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm leading-tight mb-0.5">
                      {edu.institution}
                    </h3>
                    <p className={`text-xs font-medium ${a.label}`}>{edu.location_short}</p>
                  </div>
                </div>

                {/* Degree & Major */}
                <p className="text-gray-800 font-semibold text-base mb-1">{edu.degree}</p>
                <p className={`text-xs font-medium mb-5 ${a.label}`}>{edu.major}</p>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 mb-5">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <Calendar size={12} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <MapPin size={12} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-5">{edu.description}</p>

                {/* Status badge */}
                {edu.active ? (
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border font-medium ${a.badge}`}>
                    <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${a.dot}`} />
                    Currently Enrolled
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-gray-200 bg-gray-50 text-gray-400 font-medium">
                    Graduated
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Learning path connector */}
      <div className="hidden md:flex justify-center mt-8 items-center gap-3">
        <div className="h-px w-24 bg-gradient-to-r from-transparent to-indigo-300" />
        <div className="w-2 h-2 rounded-full bg-indigo-400" />
        <p className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase">Learning Path</p>
        <div className="w-2 h-2 rounded-full bg-violet-400" />
        <div className="h-px w-24 bg-gradient-to-l from-transparent to-violet-300" />
      </div>
    </div>
  </section>
);

export default Education;

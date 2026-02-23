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
    accent: "cyan",
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
    accent: "purple",
    description:
      "Graduated with a strong foundation in software engineering — full-stack development, database design, and agile methodologies.",
  },
];

const accentMap = {
  cyan:   { label: "text-cyan-400",   border: "border-cyan-500/30",   glow: "shadow-cyan-500/20",   bg: "bg-cyan-500/10",   badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40"   },
  purple: { label: "text-purple-400", border: "border-purple-500/30", glow: "shadow-purple-500/20", bg: "bg-purple-500/10", badge: "bg-purple-500/20 text-purple-300 border-purple-500/40" },
};

const Education = () => (
  <section id="education" className="py-24 bg-[#050514] relative overflow-hidden">

    {/* Pixel dot grid */}
    <div className="absolute inset-0 pointer-events-none" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
      backgroundSize: '28px 28px',
    }} />

    {/* Glow blob */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.05) 0%, transparent 70%)' }} />

    <div className="max-w-5xl mx-auto px-6 relative z-10">

      {/* ── Header ── */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        <p className="font-pixel text-[9px] text-cyan-400 tracking-[0.3em] uppercase mb-4">
          &gt; education_
        </p>
        <h2 className="font-pixel text-2xl md:text-3xl text-white mb-5">EDUCATION</h2>
        <div className="h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />
      </motion.div>

      {/* ── Cards ── */}
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
              className={`relative bg-white/5 border ${a.border} rounded-2xl overflow-hidden backdrop-blur-sm shadow-xl ${a.glow}`}
            >
              {/* Watermark logo */}
              <div className="absolute -right-6 -bottom-6 w-36 h-36 opacity-[0.07] pointer-events-none">
                <img src={edu.logo} alt="" className="w-full h-full object-contain" />
              </div>

              {/* Top accent bar */}
              <div className={`h-1 w-full ${edu.accent === 'cyan' ? 'bg-gradient-to-r from-cyan-500 via-cyan-400 to-transparent' : 'bg-gradient-to-r from-purple-500 via-purple-400 to-transparent'}`} />

              <div className="p-7">
                {/* Logo + Institution */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl ${a.bg} border ${a.border} p-2 flex items-center justify-center flex-shrink-0`}>
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-pixel text-[11px] text-white leading-tight mb-1">
                      {edu.institution}
                    </h3>
                    <p className={`text-xs font-pixelify ${a.label}`}>{edu.location_short}</p>
                  </div>
                </div>

                {/* Degree & Major */}
                <p className="text-white/80 font-pixelify text-base font-semibold mb-1">
                  {edu.degree}
                </p>
                <p className={`font-mono text-xs mb-5 ${a.label}`}>{edu.major}</p>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 mb-5">
                  <div className="flex items-center gap-1.5 text-white/40 text-xs">
                    <Calendar size={12} />
                    <span className="font-mono">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/40 text-xs">
                    <MapPin size={12} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-white/40 text-sm leading-relaxed mb-5">{edu.description}</p>

                {/* Status badge */}
                {edu.active ? (
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border font-pixel ${a.badge}`}>
                    <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${edu.accent === 'cyan' ? 'bg-cyan-400' : 'bg-purple-400'}`} />
                    Currently Enrolled
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-white/10 bg-white/5 text-white/40 font-pixel">
                    Graduated
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Timeline connector between cards (desktop) */}
      <div className="hidden md:flex justify-center mt-8 items-center gap-3">
        <div className="h-px w-24 bg-gradient-to-r from-transparent to-cyan-500/40" />
        <div className="w-2 h-2 rounded-full bg-cyan-500/60" />
        <div className="font-pixel text-[7px] text-white/20 tracking-widest">LEARNING PATH</div>
        <div className="w-2 h-2 rounded-full bg-purple-500/60" />
        <div className="h-px w-24 bg-gradient-to-l from-transparent to-purple-500/40" />
      </div>
    </div>
  </section>
);

export default Education;

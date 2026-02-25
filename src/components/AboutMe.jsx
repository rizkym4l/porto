import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Target } from 'lucide-react';
import foto from '../assets/me/aku.jpeg';

const expertise = [
  { icon: <Code2 size={13} />, label: "Frontend Engineering",   sub: "React · Vue · Next.js · TypeScript",   color: "text-indigo-600", border: "border-indigo-200", bg: "bg-indigo-50"  },
  { icon: <Server size={13} />, label: "Backend System",        sub: "NestJS · Express · Laravel · REST API", color: "text-violet-600", border: "border-violet-200", bg: "bg-violet-50" },
  { icon: <Database size={13} />, label: "Database & Security", sub: "PostgreSQL · MongoDB · MySQL · Docker",  color: "text-emerald-600", border: "border-emerald-200", bg: "bg-emerald-50" },
];

const stats = [
  { value: "1.5+", label: "Years Exp",       color: "text-indigo-600"  },
  { value: "40%",  label: "Faster Delivery", color: "text-violet-600"  },
  { value: "BNSP", label: "Certified",       color: "text-amber-500"   },
];

const AboutMe = () => (
  <section id="about" className="py-24 bg-white relative overflow-hidden">

    {/* subtle dot pattern */}
    <div className="absolute inset-0 pointer-events-none opacity-30" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, #d1d5db 1px, transparent 0)',
      backgroundSize: '28px 28px',
    }} />

    <div className="max-w-6xl mx-auto px-6 relative z-10">

      {/* Header */}
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase mb-4">
          About Me
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-1">
          Who I
        </h2>
        <h2
          className="text-4xl md:text-5xl font-black italic text-gray-500 leading-tight"
          style={{ fontFamily: "'Georgia','Times New Roman',serif" }}
        >
          really am
        </h2>
      </motion.div>

      {/* Two-column layout */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT: Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          {/* Corner accents */}
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-indigo-400 z-20 rounded-tl" />
          <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-indigo-400 z-20 rounded-tr" />
          <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-violet-400 z-20 rounded-bl" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-violet-400 z-20 rounded-br" />

          {/* Photo */}
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg aspect-square lg:aspect-[3/4]">
            <img
              src={foto}
              alt="Rizki Maulana Arif"
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 8%' }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.6) 0%, transparent 100%)' }} />
          </div>

          {/* Floating stat badges */}
          {stats.map((s, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
              className={`hidden lg:block absolute z-20 bg-white border border-gray-200 shadow-md rounded-xl px-3 py-2 text-center ${
                i === 0 ? '-left-6 top-1/4' : i === 1 ? '-right-6 top-1/2' : '-left-5 bottom-20'
              }`}
            >
              <p className={`text-sm font-black ${s.color}`}>{s.value}</p>
              <p className="text-gray-400 text-[8px] font-medium mt-0.5 uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT: Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <p className="text-gray-400 text-sm mb-1 tracking-wider uppercase font-medium">
            Software Engineer
          </p>
          <h3 className="text-xl font-black text-gray-900 mb-6">
            Rizki Maulana Arif
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Frontend & Fullstack Developer with{' '}
            <span className="text-indigo-600 font-semibold">±1.5 years experience</span>{' '}
            in Fullstack Application Development, Frontend Engineering & UI Architecture,
            Backend Systems, and Database Management & Security Implementation.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Contributed to enterprise-scale financial applications, accelerating feature
            delivery by up to{' '}
            <span className="text-violet-600 font-semibold">40%</span>, and designing
            RESTful APIs. Primary expertise in the{' '}
            <span className="text-gray-800 font-medium">JavaScript ecosystem</span>{' '}
            (React.js, Node.js, NestJS, Express.js) and PHP Laravel.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Skilled in managing PostgreSQL, MongoDB & MySQL. Familiar with Docker & Git
            in Agile workflows. Holds a{' '}
            <span className="text-amber-500 font-semibold">BNSP Junior Coder Certification</span>.
          </p>

          {/* Expertise cards */}
          <div className="flex flex-col gap-3 mb-7">
            {expertise.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}
                className={`flex items-start gap-3 p-3 rounded-xl border ${e.border} ${e.bg}`}
              >
                <div className={`mt-0.5 ${e.color}`}>{e.icon}</div>
                <div>
                  <p className={`text-xs font-semibold ${e.color} mb-0.5`}>{e.label}</p>
                  <p className="text-gray-500 text-xs">{e.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Aspiration */}
          <div className="flex items-center gap-2.5 p-3 rounded-xl border border-gray-200 bg-gray-50">
            <Target size={14} className="text-gray-400 flex-shrink-0" />
            <p className="text-gray-500 text-xs leading-relaxed">
              Aspiring to grow as a{' '}
              <span className="text-gray-700 font-medium">Software Engineer · Backend · Frontend Developer</span>{' '}
              — prioritizing accuracy, time management & work ethics.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutMe;

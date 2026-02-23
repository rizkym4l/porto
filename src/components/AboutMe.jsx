import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Target } from 'lucide-react';
import foto from '../assets/me/aku.jpeg';

const expertise = [
  { icon: <Code2 size={13} />, label: "Frontend Engineering",   sub: "React · Vue · Next.js · TypeScript",  color: "text-cyan-400",   border: "border-cyan-500/30",   bg: "bg-cyan-500/10"   },
  { icon: <Server size={13} />, label: "Backend System",        sub: "NestJS · Express · Laravel · REST API", color: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10" },
  { icon: <Database size={13} />, label: "Database & Security", sub: "PostgreSQL · MongoDB · MySQL · Docker",  color: "text-green-400",  border: "border-green-500/30",  bg: "bg-green-500/10"  },
];

const stats = [
  { value: "1.5+", label: "Years Exp",      color: "text-cyan-400"   },
  { value: "40%",  label: "Faster Delivery",color: "text-purple-400" },
  { value: "BNSP", label: "Certified",      color: "text-yellow-400" },
];

const AboutMe = () => (
  <section id="about" className="py-24 bg-[#050514] relative overflow-hidden">

    {/* Pixel dot grid */}
    <div className="absolute inset-0 pointer-events-none" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
      backgroundSize: '28px 28px',
    }} />

    {/* Glow blobs */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 65%)' }} />
    <div className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 65%)' }} />

    <div className="max-w-6xl mx-auto px-6 relative z-10">

      {/* ── Header ── */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        <p className="font-pixel text-[9px] text-purple-400 tracking-[0.3em] uppercase mb-4">
          &gt; about_me_
        </p>
        <h2 className="font-pixel text-2xl md:text-3xl text-white mb-5">ABOUT ME</h2>
        <div className="h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
      </motion.div>

      {/* ── Two-column layout ── */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* ── LEFT: Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          {/* Pixel bracket corners */}
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-cyan-500/60 z-20 rounded-tl" />
          <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-cyan-500/60 z-20 rounded-tr" />
          <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-purple-500/60 z-20 rounded-bl" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-purple-500/60 z-20 rounded-br" />

          {/* Photo container — square on mobile, portrait on desktop */}
          <div
            className="relative overflow-hidden rounded-2xl border border-white/10 aspect-square lg:aspect-[3/4]"
            style={{ background: 'linear-gradient(to bottom, #C2C2C2, #a8a8a8)' }}
          >
            <img
              src={foto}
              alt="Rizki Maulana Arif"
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 8%' }}
            />
            {/* Bottom fade into dark */}
            <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
              style={{ background: 'linear-gradient(to top, #050514 0%, transparent 100%)' }} />

            {/* Scanlines overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.2) 0px, rgba(0,0,0,0.2) 1px, transparent 1px, transparent 3px)',
            }} />
          </div>

          {/* Floating stat badges — hidden on mobile to avoid overflow */}
          {stats.map((s, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
              className={`hidden lg:block absolute z-20 backdrop-blur-md border border-white/15 bg-[#050514]/90 rounded-xl px-3 py-2 text-center ${
                i === 0 ? '-left-5 top-1/4' : i === 1 ? '-right-5 top-1/2' : '-left-4 bottom-20'
              }`}
            >
              <p className={`font-pixel text-sm ${s.color}`}>{s.value}</p>
              <p className="text-white/40 text-[8px] font-mono mt-0.5">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── RIGHT: Content ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <p className="font-pixelify text-white/40 text-sm mb-2 tracking-wider uppercase">
            Software Engineer
          </p>
          <h3 className="font-pixel text-lg md:text-xl text-white mb-6 leading-snug">
            RIZKI MAULANA ARIF
          </h3>

          {/* Bio from CV */}
          <p className="text-white/65 text-sm leading-relaxed mb-4">
            Frontend & Fullstack Developer with{' '}
            <span className="text-cyan-400 font-medium">±1.5 years experience</span>{' '}
            in Fullstack Application Development, Frontend Engineering & UI Architecture,
            Backend Systems, and Database Management & Security Implementation.
          </p>
          <p className="text-white/50 text-sm leading-relaxed mb-4">
            Contributed to enterprise-scale financial applications, accelerating feature
            delivery by up to{' '}
            <span className="text-purple-400 font-medium">40%</span>, and designing
            RESTful APIs. Primary expertise in the{' '}
            <span className="text-white/75">JavaScript ecosystem</span>{' '}
            (React.js, Node.js, NestJS, Express.js) and PHP Laravel.
          </p>
          <p className="text-white/40 text-sm leading-relaxed mb-8">
            Skilled in managing PostgreSQL, MongoDB & MySQL. Familiar with Docker & Git
            in Agile workflows. Holds a{' '}
            <span className="text-yellow-400">BNSP Junior Coder Certification</span>.
          </p>

          {/* Expertise cards */}
          <div className="flex flex-col gap-3 mb-8">
            {expertise.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}
                className={`flex items-start gap-3 p-3 rounded-xl border ${e.border} ${e.bg}`}
              >
                <div className={`mt-0.5 ${e.color}`}>{e.icon}</div>
                <div>
                  <p className={`font-pixel text-[9px] ${e.color} mb-1`}>{e.label}</p>
                  <p className="text-white/40 text-xs font-mono">{e.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Aspiration */}
          <div className="flex items-center gap-2.5 p-3 rounded-xl border border-white/10 bg-white/5">
            <Target size={14} className="text-white/30 flex-shrink-0" />
            <p className="text-white/35 text-xs leading-relaxed">
              Aspiring to grow as a{' '}
              <span className="text-white/60">Software Engineer · Backend · Frontend Developer</span>{' '}
              — prioritizing accuracy, time management & work ethics.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutMe;

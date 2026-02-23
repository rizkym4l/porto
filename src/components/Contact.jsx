import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FiLinkedin } from 'react-icons/fi';
import handshakeImg from '../assets/lets/dreamina-2026-02-16-3185-Close-up of two hands shaking firmly, si....jpeg';

const Contact = () => (
  <section id="contact" className="py-24 bg-[#050514] relative overflow-hidden">

    {/* Pixel dot grid */}
    <div className="absolute inset-0 pointer-events-none" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
      backgroundSize: '28px 28px',
    }} />

    {/* Center glow */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 65%)' }} />
    </div>

    <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        <p className="font-pixel text-[9px] text-cyan-400 tracking-[0.3em] uppercase mb-4">
          &gt; contact_
        </p>
        <h2 className="font-pixel text-2xl md:text-3xl text-white mb-5">LET'S WORK TOGETHER</h2>
        <div className="h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent mb-6" />
        <p className="text-white/40 text-base font-pixelify max-w-xl mx-auto leading-relaxed mb-10">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </motion.div>

      {/* Handshake image */}
     

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ delay: 0.45 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
      >
        <motion.button
          whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
          onClick={() => window.location.href = 'mailto:Rizkymaulana.more@gmail.com'}
          className="flex items-center justify-center gap-2.5 px-8 py-4 bg-cyan-500/15 border border-cyan-500/40 text-cyan-400 rounded-xl font-pixel text-[10px] tracking-wide hover:bg-cyan-500/25 transition-colors"
        >
          <Mail size={17} /> Send Email
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
          onClick={() => window.open('https://www.linkedin.com/in/rizki-maulana-arif-b711521a7/', '_blank')}
          className="flex items-center justify-center gap-2.5 px-8 py-4 bg-white/5 border border-white/15 text-white/70 rounded-xl font-pixel text-[10px] tracking-wide hover:bg-white/10 hover:border-white/30 transition-colors"
        >
          <FiLinkedin size={17} /> Connect on LinkedIn
        </motion.button>
      </motion.div>

      {/* Email display */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.6 }}
        className="pt-8 border-t border-white/5"
      >
        <p className="text-white/20 text-xs font-mono tracking-wider">
          Rizkymaulana.more@gmail.com
        </p>
      </motion.div>
    </div>
  </section>
);

export default Contact;

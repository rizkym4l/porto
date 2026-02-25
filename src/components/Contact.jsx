import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FiLinkedin } from 'react-icons/fi';

const Contact = () => (
  <section id="contact" className="py-24 bg-[#F0F0F0] relative overflow-hidden">

    {/* subtle dot pattern */}
    <div className="absolute inset-0 pointer-events-none opacity-30" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, #d1d5db 1px, transparent 0)',
      backgroundSize: '28px 28px',
    }} />

    {/* decorative blob */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 65%)' }} />

    <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase mb-4">
          Contact
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
          Let's work
        </h2>
        <h2
          className="text-4xl md:text-5xl font-black italic text-gray-500 leading-tight"
          style={{ fontFamily: "'Georgia','Times New Roman',serif" }}
        >
          together
        </h2>
        <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed mt-6">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(99,102,241,0.30)' }}
          whileTap={{ scale: 0.97 }}
          onClick={() => window.location.href = 'mailto:Rizkymaulana.more@gmail.com'}
          className="flex items-center justify-center gap-2.5 px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold text-sm hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
        >
          <Mail size={17} /> Send Email
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => window.open('https://www.linkedin.com/in/rizki-maulana-arif-b711521a7/', '_blank')}
          className="flex items-center justify-center gap-2.5 px-8 py-4 border border-gray-300 text-gray-700 rounded-full font-semibold text-sm hover:border-gray-500 hover:bg-white transition-all"
        >
          <FiLinkedin size={17} /> Connect on LinkedIn
        </motion.button>
      </motion.div>

      {/* Email display */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.5 }}
        className="pt-8 border-t border-gray-200"
      >
        <p className="text-gray-400 text-xs tracking-wider">
          Rizkymaulana.more@gmail.com
        </p>
      </motion.div>
    </div>
  </section>
);

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 rounded-2xl mb-6"
            >
              <MessageSquare size={32} className="text-white" />
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              Let's Work Together
            </motion.h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-6" />
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-500 text-lg max-w-2xl mx-auto"
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => window.location.href = 'mailto:Rizkymaulana.more@gmail.com'}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl text-base font-medium hover:bg-gray-800 transition-colors shadow-sm"
            >
              <Mail size={20} />
              Send Email
            </button>
            <button
              onClick={() => window.open('https://www.linkedin.com/in/rizki-maulana-arif-b711521a7/', '_blank')}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl text-base font-medium border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
            >
              Connect on LinkedIn
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <p className="text-gray-400 text-sm">
              <span className="font-mono">Rizkymaulana.more@gmail.com</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

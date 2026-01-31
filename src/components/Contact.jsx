import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Mail, MessageSquare } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../animations/motionVariants';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-800 rounded-full mb-6">
              <MessageSquare size={40} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Let's Work Together</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-6" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => window.location.href = 'mailto:Rizkymaulana.more@gmail.com'}
              className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-base font-medium group"
            >
              <Mail className="mr-2" size={20} />
              Send Email
            </Button>
            <Button
              onClick={() => window.open('https://www.linkedin.com/in/rizki-maulana-arif-b711521a7/', '_blank')}
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-6 text-base font-medium"
            >
              Connect on LinkedIn
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <p className="text-gray-500 text-sm">
              <span className="font-mono">Rizkymaulana.more@gmail.com</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
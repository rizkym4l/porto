import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Briefcase, Code2, Coffee, Zap } from 'lucide-react';

const highlights = [
  { icon: <Code2 size={20} />, label: "Full-Stack Developer" },
  { icon: <Briefcase size={20} />, label: "1+ Years Experience" },
  { icon: <MapPin size={20} />, label: "Bogor, Indonesia" },
  { icon: <Coffee size={20} />, label: "Problem Solver" },
];

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
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
            <User size={32} className="text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-4" />
          <p className="text-gray-500 max-w-lg mx-auto">
            Get to know me a little better
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-600 text-lg leading-relaxed mb-4"
            >
              Hi! I'm <span className="text-gray-900 font-semibold">Rizki Maulana Arif</span>, a passionate Software Developer based in Indonesia.
              I specialize in building modern, responsive web applications using technologies like
              <span className="text-gray-900 font-medium"> React, Vue.js, Node.js, and Laravel</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-600 text-lg leading-relaxed mb-4"
            >
              I graduated from <span className="text-gray-900 font-medium">SMK Wikrama Bogor</span> majoring in Software Engineering,
              and I'm currently pursuing a degree in Applied Information Systems at <span className="text-gray-900 font-medium">Telkom University Bandung</span> with a focus on Smart City technologies.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-600 text-lg leading-relaxed mb-8"
            >
              I love turning ideas into clean, functional code and I'm always eager to learn new technologies.
              Whether it's crafting pixel-perfect UIs or designing robust backend architectures, I enjoy every part of the development process.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <div className="text-gray-900">{item.icon}</div>
                  <span className="text-gray-600 text-sm font-medium text-center">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

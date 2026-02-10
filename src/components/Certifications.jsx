import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { certifications } from '../data/certifications';
import { fadeInUp, staggerContainer } from '../animations/motionVariants';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [hoveredCert, setHoveredCert] = useState(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section id="certifications" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
            <Award size={32} className="text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-4" />
          <p className="text-gray-500 max-w-lg mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeInUp}
              onMouseMove={handleMouseMove}
              onHoverStart={() => setHoveredCert(cert.id)}
              onHoverEnd={() => setHoveredCert(null)}
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer relative"
              style={{ zIndex: hoveredCert === cert.id ? 40 : 10 }}
            >
              <div className="p-5 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 transition-all duration-300 h-full group relative overflow-hidden">
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/60 to-transparent"
                  animate={{
                    x: hoveredCert === cert.id ? ['-100%', '100%'] : '-100%',
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />

                <div className="flex items-start relative z-10">
                  <motion.div
                    className="bg-gray-100 p-3 rounded-xl mr-4 group-hover:bg-gray-900 transition-colors duration-300"
                    animate={hoveredCert === cert.id ? {
                      rotate: [0, -10, 10, 0],
                    } : {}}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <Award size={22} className="text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-gray-900 font-semibold mb-1 leading-tight text-sm">
                      {cert.name}
                    </h3>
                    <p className="text-gray-500 text-xs mb-1">{cert.provider}</p>
                    <p className="text-gray-400 text-xs font-mono">{cert.year}</p>
                  </div>
                  <ExternalLink size={14} className="text-gray-300 group-hover:text-gray-500 transition-colors flex-shrink-0 mt-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Image Preview */}
      <AnimatePresence>
        {hoveredCert && certifications.find(c => c.id === hoveredCert) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.2,
              type: "spring",
              stiffness: 400,
              damping: 30
            }}
            style={{
              position: 'fixed',
              left: x,
              top: y,
              x: '-50%',
              y: '-120%',
              pointerEvents: 'none',
              zIndex: 9999,
              width: '300px'
            }}
          >
            <div className="relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-2xl">
              <img
                src={certifications.find(c => c.id === hoveredCert).image}
                alt={certifications.find(c => c.id === hoveredCert).name}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-xs font-semibold truncate">
                  {certifications.find(c => c.id === hoveredCert).name}
                </p>
                <p className="text-gray-300 text-xs">
                  {certifications.find(c => c.id === hoveredCert).provider}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="bg-white border-gray-200 text-gray-900 max-w-2xl">
          {selectedCert && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Award className="text-gray-900" size={28} />
                  </motion.div>
                  {selectedCert.name}
                </DialogTitle>
                <DialogDescription className="text-gray-500 text-base">
                  {selectedCert.provider} • {selectedCert.year}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <div className="relative overflow-y-auto max-h-80 rounded-xl mb-6 bg-gray-50 border border-gray-100">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    src={selectedCert.image}
                    alt={selectedCert.name}
                    className="w-full h-auto"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Award size={20} className="text-gray-700" />
                    About this certification
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedCert.description}
                  </p>
                </motion.div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certifications;

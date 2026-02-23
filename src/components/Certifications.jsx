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
  const x = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const y = useSpring(mouseY, { damping: 25, stiffness: 150 });

  const handleMouseMove = (e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };

  return (
    <section id="certifications" className="py-24 bg-[#050514] relative overflow-hidden">

      {/* Pixel dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
        backgroundSize: '28px 28px',
      }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <p className="font-pixel text-[9px] text-purple-400 tracking-[0.3em] uppercase mb-4">
            &gt; certifications_
          </p>
          <h2 className="font-pixel text-2xl md:text-3xl text-white mb-5">CERTIFICATIONS</h2>
          <div className="h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-purple-500/60 to-transparent mb-4" />
          <p className="text-white/30 text-sm font-pixelify">Continuous learning & professional development</p>
        </motion.div>

        {/* ── Grid ── */}
        <motion.div
          variants={staggerContainer} initial="initial"
          whileInView="animate" viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeInUp}
              onMouseMove={handleMouseMove}
              onHoverStart={() => setHoveredCert(cert.id)}
              onHoverEnd={() => setHoveredCert(null)}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer relative"
              style={{ zIndex: hoveredCert === cert.id ? 40 : 10 }}
            >
              <div className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/40 hover:bg-white/8 transition-all duration-300 h-full group relative overflow-hidden">

                {/* Shimmer on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"
                  animate={{ x: hoveredCert === cert.id ? ['-100%', '100%'] : '-100%' }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />

                <div className="flex items-start relative z-10">
                  <motion.div
                    className="bg-white/5 border border-white/10 p-3 rounded-xl mr-4 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-colors duration-300"
                    animate={hoveredCert === cert.id ? { rotate: [0, -10, 10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Award size={20} className="text-white/40 group-hover:text-purple-400 transition-colors duration-300" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white/90 font-pixelify font-semibold mb-1 leading-tight text-sm">{cert.name}</h3>
                    <p className="text-white/40 text-xs mb-1">{cert.provider}</p>
                    <p className="text-white/25 text-xs font-mono">{cert.year}</p>
                  </div>
                  <ExternalLink size={13} className="text-white/20 group-hover:text-purple-400 transition-colors flex-shrink-0 mt-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating image preview */}
      <AnimatePresence>
        {hoveredCert && certifications.find(c => c.id === hoveredCert) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, type: 'spring', stiffness: 400, damping: 30 }}
            style={{ position: 'fixed', left: x, top: y, x: '-50%', y: '-120%', pointerEvents: 'none', zIndex: 9999, width: '280px' }}
          >
            <div className="relative bg-[#0d1117] rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
              <img src={certifications.find(c => c.id === hoveredCert).image} alt="" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-xs font-semibold truncate">{certifications.find(c => c.id === hoveredCert).name}</p>
                <p className="text-white/50 text-xs">{certifications.find(c => c.id === hoveredCert).provider}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="bg-[#0d1117] border-white/10 text-white max-w-2xl">
          {selectedCert && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-pixel text-white mb-2 flex items-center gap-2">
                  <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <Award className="text-purple-400" size={24} />
                  </motion.div>
                  {selectedCert.name}
                </DialogTitle>
                <DialogDescription className="text-white/50 text-sm">
                  {selectedCert.provider} • {selectedCert.year}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <div className="relative overflow-y-auto max-h-80 rounded-xl mb-6 bg-black/40 border border-white/10">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    src={selectedCert.image} alt={selectedCert.name} className="w-full h-auto"
                  />
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <h4 className="text-base font-pixel text-white/80 mb-3 flex items-center gap-2">
                    <Award size={16} className="text-purple-400" /> About this certification
                  </h4>
                  <p className="text-white/50 leading-relaxed text-sm">{selectedCert.description}</p>
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

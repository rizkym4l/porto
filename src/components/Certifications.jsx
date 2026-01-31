import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Card } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { certifications } from '../data/certifications';
import { fadeInUp, staggerContainer } from '../animations/motionVariants';
import { Award, ExternalLink, Sparkles } from 'lucide-react';

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

  // Floating particles
  const particles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5
  }));

  return (
    <section id="certifications" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #404040 1px, transparent 1px), linear-gradient(to bottom, #404040 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px']
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            zIndex: 1
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 right-20 w-80 h-80 bg-yellow-900 rounded-full blur-3xl opacity-10"
        style={{ zIndex: 1 }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-20 w-96 h-96 bg-orange-900 rounded-full blur-3xl opacity-10"
        style={{ zIndex: 1 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <motion.div
            className="absolute -top-4 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="text-gray-700" size={24} />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white relative inline-block">
            Certifications
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-xl -z-10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-4"
            animate={{
              scaleX: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={fadeInUp}
              onMouseMove={handleMouseMove}
              onHoverStart={() => setHoveredCert(cert.id)}
              onHoverEnd={() => setHoveredCert(null)}
              whileHover={{ scale: 1.02, y: -5 }}
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
                <Card className="p-6 bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 h-full group relative overflow-hidden">
                  {/* Animated Background Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />

                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{
                      x: hoveredCert === cert.id ? ['-100%', '100%'] : '-100%',
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut"
                    }}
                  />

                  <div className="flex items-start relative z-10">
                    <motion.div 
                      className="bg-gray-800 p-3 rounded-lg mr-4 group-hover:bg-gray-700 transition-colors"
                      animate={hoveredCert === cert.id ? {
                        rotate: [0, -10, 10, 0],
                      } : {}}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      <Award size={24} className="text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2 leading-tight group-hover:text-gray-200 transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-1">{cert.provider}</p>
                      <p className="text-gray-500 text-xs font-mono">{cert.year}</p>
                    </div>
                    <motion.div
                      animate={hoveredCert === cert.id ? {
                        x: [0, 5, 0],
                        y: [0, -5, 0],
                      } : {}}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      <ExternalLink size={16} className="text-gray-600 group-hover:text-gray-400 transition-colors" />
                    </motion.div>
                  </div>

                  {/* Corner Glow */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            ))}
        </motion.div>
      </div>

      {/* Floating Image Preview - Following Mouse */}
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
              width: '320px'
            }}
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-500/40 to-orange-500/40 blur-2xl rounded-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Image container */}
              <div className="relative bg-gray-900 rounded-lg overflow-hidden border-2 border-gray-700 shadow-2xl">
                <img
                  src={certifications.find(c => c.id === hoveredCert).image}
                  alt={certifications.find(c => c.id === hoveredCert).name}
                  className="w-full h-auto"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                  <p className="text-white text-xs font-semibold truncate">
                    {certifications.find(c => c.id === hoveredCert).name}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {certifications.find(c => c.id === hoveredCert).provider}
                  </p>
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 border-2 rounded-lg"
                  animate={{
                    borderColor: [
                      'rgba(234, 179, 8, 0)', 
                      'rgba(234, 179, 8, 0.8)', 
                      'rgba(234, 179, 8, 0)'
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Corner accents */}
              <motion.div
                className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-yellow-500"
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-orange-500"
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white max-w-2xl">
          {selectedCert && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <motion.div
                    animate={{
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Award className="text-yellow-500" size={28} />
                  </motion.div>
                  {selectedCert.name}
                </DialogTitle>
                <DialogDescription className="text-gray-400 text-base">
                  {selectedCert.provider} • {selectedCert.year}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                {/* Certificate Image */}
                <div className="relative overflow-y-scroll h-80 rounded-lg mb-6 bg-gray-950">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    src={selectedCert.image}
                    alt={selectedCert.name}
                    className="w-full h-auto"
                  />
                </div>

                {/* Description */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Award size={20} className="text-yellow-500" />
                    About this certification
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
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
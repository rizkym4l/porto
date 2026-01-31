import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Terminal, Code2, Cpu, Zap } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = '> Building scalable web applications...';
  
  // Scroll animations
  const { scrollY } = useScroll();
  
  // Parallax effects untuk nama
  const nameY = useTransform(scrollY, [0, 500], [0, 150]);
  const nameOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const nameScale = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  // Parallax untuk "Rizki" dan "Maulana Arif" bergerak terpisah
  const rizkiX = useTransform(scrollY, [0, 500], [0, -100]);
  const maulanaX = useTransform(scrollY, [0, 500], [0, 100]);
  
  // Parallax untuk elemen lain
  const roleY = useTransform(scrollY, [0, 500], [0, 80]);
  const descY = useTransform(scrollY, [0, 500], [0, 120]);
  const buttonY = useTransform(scrollY, [0, 500], [0, 160]);
  const terminalY = useTransform(scrollY, [0, 500], [0, -100]);
  const terminalRotate = useTransform(scrollY, [0, 500], [0, -5]);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    window.open('https://customer-assets.emergentagent.com/job_b91f9d24-a7ec-4b28-9c39-f55319314da0/artifacts/8t4rxto9_Rizki_Maulana_Arif_CV_2026.pdf', '_blank');
  };

  const codeLines = [
    'const developer = {',
    '  name: "Rizki Maulana Arif",',
    '  role: "Fullstack Developer",',
    '  experience: "2022 - Present",',
    '  location: "Indonesia",',
    '  remote: true,',
    '  skills: ["React", "Node.js", "Laravel"]',
    '};'
  ];

  // Floating particles data
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5
  }));

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #404040 1px, transparent 1px), linear-gradient(to bottom, #404040 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px']
          }}
          transition={{
            duration: 20,
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
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Animated Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 right-10 w-72 h-72 bg-purple-900 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-900 rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Floating Tech Icons */}
      <motion.div
        className="absolute top-20 left-20 text-gray-800"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Code2 size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-32 text-gray-800"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Cpu size={35} />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-20 text-gray-800"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 15, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Zap size={30} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Terminal/Code Style */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ 
              y: terminalY,
              rotateZ: terminalRotate
            }}
            className="order-2 lg:order-1"
          >
            {/* Terminal Window with Animated Glow */}
            <motion.div 
              className="bg-gray-900 border rounded-lg overflow-hidden shadow-2xl relative"
              animate={{
                borderColor: ['rgba(75, 85, 99, 1)', 'rgba(139, 92, 246, 0.5)', 'rgba(75, 85, 99, 1)']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Glowing effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-lg"
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Terminal Header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700 relative z-10">
                <div className="flex gap-2">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-red-500"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-yellow-500"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-green-500"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
                <div className="flex items-center gap-2 ml-4 text-gray-400 text-sm">
                  <Terminal size={14} />
                  <span className="font-mono">developer.js</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm relative z-10">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-1"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-gray-500 mr-4">{index + 1}</span>
                    <span className={
                      line.includes('const') || line.includes('true') ? 'text-purple-400' :
                      line.includes(':') && !line.includes('//') ? 'text-blue-400' :
                      line.includes('"') ? 'text-green-400' :
                      'text-gray-300'
                    }>
                      {line}
                    </span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-4 text-gray-400"
                >
                  {text}<motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >_</motion.span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 text-left"
          >
            {/* Profile Badge with Pulse */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-4 py-2 mb-6 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-green-500/10"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse relative z-10" />
              <span className="text-gray-400 text-sm font-mono relative z-10">Available for work</span>
            </motion.div>

            {/* Nama dengan Parallax Scroll Effect */}
            <motion.div
              style={{ 
                y: nameY,
                opacity: nameOpacity,
                scale: nameScale
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-6xl md:text-7xl font-bold mb-4 leading-tight overflow-hidden"
              >
                {/* "Rizki" bergerak ke kiri saat scroll */}
                <motion.span
                  style={{ 
                    x: rizkiX,
                    display: 'inline-block'
                  }}
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(255,255,255,0)',
                      '0 0 20px rgba(255,255,255,0.3)',
                      '0 0 20px rgba(255,255,255,0)'
                    ]
                  }}
                  transition={{
                    textShadow: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className="text-white"
                >
                  Rizki
                </motion.span>
                <br />
                {/* "Maulana Arif" bergerak ke kanan saat scroll */}
                <motion.span 
                  style={{ 
                    x: maulanaX,
                    display: 'inline-block'
                  }}
                  className="text-gray-400"
                >
                  Maulana Arif
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Role dengan parallax */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{ y: roleY }}
              className="mb-6"
            >
              <motion.div 
                className="inline-block border-l-4 pl-4"
                animate={{
                  borderColor: ['rgba(255,255,255,1)', 'rgba(139,92,246,1)', 'rgba(255,255,255,1)']
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <p className="text-xl text-gray-300 font-medium">Fullstack Developer</p>
                <p className="text-gray-500 text-sm mt-1">React • Node.js • Laravel</p>
              </motion.div>
            </motion.div>

            {/* Description dengan parallax */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ y: descY }}
              className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed"
            >
              Passionate about building efficient, scalable solutions.years of experience in remote development with focus on modern web technologies.
            </motion.p>

            {/* Buttons dengan parallax */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              style={{ y: buttonY }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection('projects')}
                  className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-base font-medium group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400"
                    initial={{ x: '-100%', opacity: 0 }}
                    whileHover={{ x: 0, opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center">
                    View Projects
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={handleDownloadCV}
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-gray-900 px-8 py-6 text-base font-medium"
                >
                  <Download className="mr-2" size={20} />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links with Hover Effects */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              <motion.a
                href="https://github.com/rizkym4l"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 flex items-center justify-center bg-gray-900 border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 transition-all relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
                <Github size={20} className="relative z-10" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rizki-maulana-arif-b711521a7/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 flex items-center justify-center bg-gray-900 border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 transition-all relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
                <Linkedin size={20} className="relative z-10" />
              </motion.a>
              <motion.a
                href="mailto:Rizkymaulana.more@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 flex items-center justify-center bg-gray-900 border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 transition-all relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-green-500/20 rounded-lg opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
                <Mail size={20} className="relative z-10" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
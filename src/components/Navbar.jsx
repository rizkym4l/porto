import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import walkerVideo from '../assets/ah.mp4';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Education', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

  const scrollToSection = (section) => {
    const el = document.getElementById(section.toLowerCase());
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 overflow-hidden transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050514]/95 backdrop-blur-md border-b border-white/10'
          : 'bg-[#050514]/80 backdrop-blur-sm'
      }`}
    >
      {/* Scanline stripe */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 4px)',
      }} />

      {/* Walking pixel person */}
      <motion.div
        className="absolute bottom-0 left-0 pointer-events-none z-0"
        animate={{ x: ['-60px', 'calc(100vw + 60px)'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        <video
          src={walkerVideo}
          autoPlay muted loop playsInline
          className="h-10 w-auto object-contain opacity-70 rounded-t-3xl"
          style={{ imageRendering: 'pixelated' }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-pixel text-[11px] text-cyan-400 hover:text-cyan-300 transition-colors tracking-widest"
            >
              RIZKI.DEV
            </button>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white/50 hover:text-white transition-colors text-xs font-mono relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, type: 'spring', stiffness: 300, damping: 20 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <motion.button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 overflow-hidden"
            >
              {navItems.map((item, i) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-3 px-4 text-white/50 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all text-xs font-mono"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  &gt; {item}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaVuejs } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiGo,
  SiNextdotjs,
  SiNestjs,
} from "react-icons/si";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import foto from "../assets/me/aku.jpeg";
import fotoWhiteBg from "../assets/flame-lit.gif";

const techStack = [
  { name: "React",      icon: FaReact,       color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript,  color: "#3178C6" },
  { name: "Next.js",    icon: SiNextdotjs,   color: "#ffffff" },
  { name: "Vue.js",     icon: FaVuejs,       color: "#4FC08D" },
  { name: "Tailwind",   icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Go",         icon: SiGo,          color: "#00ADD8" },
  { name: "NestJS",     icon: SiNestjs,      color: "#E0234E" },
  { name: "Express",    icon: SiExpress,     color: "#ffffff" },
];

const TechCard = ({ tech, index, size }) => {
  const Icon = tech.icon;
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 3.5 + index * 0.2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.15,
      }}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-md"
    >
      <Icon size={size === "lg" ? 14 : 11} color={tech.color} />
      <span className={`text-white/75 font-pixel ${size === "lg" ? "text-[9px]" : "text-[7px]"}`}>
        {tech.name}
      </span>
    </motion.div>
  );
};

const Hero = () => {
  const socialLinks = [
    { href: "https://github.com/rizkym4l",                                icon: FiGithub,    label: "GitHub"   },
    { href: "https://instagram.com/",                                     icon: FiInstagram, label: "Instagram" },
    { href: "https://www.linkedin.com/in/rizki-maulana-arif-b711521a7/", icon: FiLinkedin,  label: "LinkedIn"  },
  ];

  return (
    <section className="h-screen relative overflow-hidden bg-[#050514]">

      {/* ===== DESKTOP SPLIT BACKGROUND: dark left → #C2C2C2 right ===== */}
      <div
        className="absolute inset-0 z-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, #050514 0%, #050514 36%, #7a7a7a 46%, #C2C2C2 56%, #C2C2C2 100%)",
        }}
      />

      {/* ===== BACKGROUND PHOTO ===== */}

      {/* Mobile: full-screen cover */}
      <img
        src={foto}
        alt="Rizki Maulana Arif"
        className="lg:hidden absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "50% 10%", filter: "brightness(0.75) contrast(1.05)" }}
      />

      {/* Desktop: contained in right panel — mix-blend-mode:multiply blends white bg into #C2C2C2 */}
      <img
        src={foto}
        alt="Rizki Maulana Arif"
        className="hidden lg:block absolute top-0 right-0 h-full w-[55%] object-contain"
        style={{ objectPosition: "center center", filter: "brightness(0.95) contrast(1.02)", mixBlendMode: "multiply" }}
      />

      {/* ===== GRADIENT OVERLAYS ===== */}

      {/* Mobile: diagonal dark-left → colorful → transparent */}
      <div
        className="absolute inset-0 z-10 lg:hidden"
        style={{
          background:
            "linear-gradient(105deg, rgba(5,5,20,0.93) 0%, rgba(0,30,80,0.78) 38%, rgba(80,0,100,0.45) 62%, rgba(0,0,0,0.08) 100%)",
        }}
      />

      {/* Desktop: subtle left-side darken for text legibility */}
      <div
        className="absolute inset-0 z-10 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(5,5,20,0.25) 0%, rgba(5,5,20,0.1) 36%, transparent 50%)",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-36 z-10 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

      {/* ===== RETRO SCANLINES ===== */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 4px)",
        }}
      />

      {/* ================================================================
          MOBILE CONTENT  (hidden on lg+)
          Bottom-left overlay — keep the layout the user already likes
          + added "welcome" label + tech stack cards
      ================================================================ */}
      <div className="lg:hidden absolute bottom-0 left-0 z-30 pb-10 px-8 max-w-xs">

        <motion.p
          className="font-pixel text-[7px] text-purple-400 tracking-[0.22em] mb-2 uppercase"
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}
        >
          Welcome to my portfolio
        </motion.p>

        <motion.p
          className="font-pixel text-[8px] text-cyan-400 tracking-[0.25em] mb-4 uppercase"
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
        >
          &gt; Full Stack Dev_
        </motion.p>

        <motion.div
          className="flex items-center gap-3 mb-3"
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45, duration: 0.6 }}
        >
          <h1 className="font-pixel text-4xl text-white leading-none drop-shadow-2xl">RIZKI</h1>
          <img src={fotoWhiteBg} alt="flame" className="h-11 w-auto object-contain drop-shadow-xl" />
        </motion.div>

        <motion.p
          className="font-pixelify text-white/70 text-lg font-semibold mb-3 tracking-wide"
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
        >
          Maulana Arif
        </motion.p>

        <motion.p
          className="text-white/50 text-xs leading-relaxed mb-4"
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.68 }}
        >
          Crafting modern web experiences — clean UI & robust backend systems that deliver real value.
        </motion.p>

        {/* Tech stack cards */}
        <motion.div
          className="flex flex-wrap gap-1.5 mb-5"
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.76 }}
        >
          {techStack.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} size="sm" />
          ))}
        </motion.div>

        <motion.div
          className="flex gap-2.5"
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.85 }}
        >
          {socialLinks.map(({ href, icon: Icon }) => (
            <motion.a
              key={href} href={href} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white/70 hover:text-white hover:border-white/70 hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* ================================================================
          DESKTOP CONTENT  (hidden below lg)
          Vertically-centered in the left 45% panel
      ================================================================ */}
      <div className="hidden lg:flex absolute inset-y-0 left-0 z-30 items-center w-[46%] pl-16 xl:pl-24">
        <div>

          <motion.p
            className="font-pixel text-[9px] text-purple-400 tracking-[0.25em] mb-3 uppercase"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}
          >
            Welcome to my portfolio
          </motion.p>

          <motion.p
            className="font-pixel text-[11px] text-cyan-400 tracking-[0.3em] mb-6 uppercase"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          >
            &gt; Full Stack Developer_
          </motion.p>

          <motion.div
            className="flex items-center gap-5 mb-5"
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45, duration: 0.6 }}
          >
            <h1 className="font-pixel text-6xl xl:text-7xl text-white leading-none drop-shadow-2xl">
              RIZKI
            </h1>
            <img src={fotoWhiteBg} alt="flame" className="h-16 xl:h-20 w-auto object-contain drop-shadow-xl" />
          </motion.div>

          <motion.p
            className="font-pixelify text-white/70 text-2xl xl:text-3xl font-semibold mb-5 tracking-wide"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
          >
            Maulana Arif
          </motion.p>

          <motion.p
            className="text-white/60 text-base leading-relaxed max-w-sm mb-2"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.68 }}
          >
            I craft modern web experiences — from pixel-perfect UIs to rock-solid backend APIs.
          </motion.p>

          <motion.p
            className="text-white/40 text-sm leading-relaxed max-w-sm mb-7"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.73 }}
          >
            Currently working with React, Next.js, Go & NestJS. Open for exciting opportunities and collaborations.
          </motion.p>

          {/* Tech stack floating cards — grouped, not scattered */}
          <motion.div
            className="flex flex-wrap gap-2 mb-7"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.78 }}
          >
            {techStack.map((tech, i) => (
              <TechCard key={tech.name} tech={tech} index={i} size="lg" />
            ))}
          </motion.div>

          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.85 }}
          >
            {socialLinks.map(({ href, icon: Icon }) => (
              <motion.a
                key={href} href={href} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}
                className="w-11 h-11 flex items-center justify-center rounded-full border border-white/30 text-white/70 hover:text-white hover:border-white/70 hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Hero;

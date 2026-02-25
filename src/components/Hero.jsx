import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { HiCheckCircle } from "react-icons/hi";
import fotoWhiteBg from "../assets/me/dreamina-2026-02-10-6521-Change background to white.png";

const highlights = [
  "Build Scalable Full Stack Apps",
  "Clean & Modern UI/UX",
  "Fast Delivery, Real Results",
];

const socialLinks = [
  { href: "https://github.com/rizkym4l",                                icon: FiGithub,    label: "GitHub"    },
  { href: "https://instagram.com/",                                     icon: FiInstagram, label: "Instagram" },
  { href: "https://www.linkedin.com/in/rizki-maulana-arif-b711521a7/", icon: FiLinkedin,  label: "LinkedIn"  },
];

const Hero = () => (
  <section className="min-h-screen overflow-hidden bg-[#F0F0F0]">

    {/* ══════════════════════════════════════════
        DESKTOP  (lg+)
    ══════════════════════════════════════════ */}
    <div className="hidden lg:flex h-screen">

      {/* ── LEFT: text panel ── */}
      <div className="w-[46%] flex items-center pl-16 xl:pl-24 z-20 relative bg-[#F0F0F0]">
        <div className="w-full max-w-md">

          {/* eyebrow label */}
          <motion.p
            className="text-[10px] font-semibold tracking-[0.35em] text-gray-400 uppercase mb-5"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Full Stack Developer
          </motion.p>

          {/* headline */}
          <motion.h1
            className="text-[3.4rem] xl:text-[4rem] font-black text-gray-900 leading-[1.05] mb-1"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            Apps that
          </motion.h1>
          <motion.h1
            className="text-[3.4rem] xl:text-[4rem] font-black leading-[1.05] mb-1 italic text-gray-600"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          >
            look great
          </motion.h1>
          <motion.h1
            className="text-[3.4rem] xl:text-[4rem] font-black text-gray-900 leading-[1.05] mb-8"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          >
            &amp; work fast
          </motion.h1>

          {/* checkmarks */}
          <motion.div
            className="flex flex-col gap-2.5 mb-8"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
          >
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2.5">
                <HiCheckCircle className="text-emerald-500 flex-shrink-0" size={18} />
                <span className="text-gray-600 text-[0.875rem] font-medium">{h}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(99,102,241,0.40)" }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
            >
              Let&apos;s Work Together
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-semibold rounded-full hover:border-gray-500 hover:bg-white transition-all"
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* social icons */}
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          >
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={href} href={href} target="_blank" rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.12, y: -2 }} whileTap={{ scale: 0.9 }}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:text-gray-900 hover:border-gray-600 hover:bg-white transition-all duration-200"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>

      {/* ── RIGHT: photo + effects panel ── */}
      <div className="w-[54%] relative overflow-hidden bg-[#E4E4E4]">

        {/* ── decorative blobs ── */}
        <div className="absolute top-[8%]  left-[10%] w-72 h-72 bg-violet-400/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[10%] left-[5%]  w-56 h-56 bg-sky-400/25   rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-[45%] right-[8%] w-44 h-44 bg-rose-300/20   rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-[30%] right-[20%] w-32 h-32 bg-amber-300/20 rounded-full blur-2xl pointer-events-none" />

        {/* ── decorative outline rings ── */}
        <div className="absolute top-[18%] left-[6%]  w-36 h-36 border-2 border-gray-400/25 rounded-full pointer-events-none" />
        <div className="absolute top-[22%] left-[9%]  w-24 h-24 border   border-gray-400/15 rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] left-[18%] w-20 h-20 border border-indigo-400/20 rounded-full pointer-events-none" />
        <div className="absolute top-[55%] left-[2%]  w-10 h-10 bg-indigo-400/20 rounded-full pointer-events-none" />
        <div className="absolute top-[35%] left-[30%] w-6  h-6  bg-violet-400/30 rounded-full pointer-events-none" />

        {/* ── years-of-experience stat (bottom-left of panel) ── */}
        <div className="absolute bottom-[7%] left-[6%] z-10 pointer-events-none select-none">
          <p className="text-[7rem] xl:text-[8.5rem] font-black text-gray-300/70 leading-none">2+</p>
          <p className="text-[10px] tracking-[0.28em] text-gray-400 uppercase font-semibold ml-1 -mt-2">
            years experience
          </p>
        </div>

        {/* ── small project count badge ── */}
        <motion.div
          className="absolute top-[62%] left-[6%] z-20 bg-white/85 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-white/70"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-2xl font-black text-gray-900 leading-none">10+</p>
          <p className="text-[9px] tracking-widest text-gray-400 uppercase font-medium mt-0.5">Projects Done</p>
        </motion.div>

        {/* ── PHOTO — white-bg, centered in panel, multiply blends white away ── */}
        <img
          src={fotoWhiteBg}
          alt="Rizki Maulana Arif"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[96%] w-auto object-contain"
          style={{ mixBlendMode: "multiply" }}
        />

      </div>
    </div>

    {/* ══════════════════════════════════════════
        MOBILE  (below lg)
    ══════════════════════════════════════════ */}
    <div className="lg:hidden min-h-screen flex flex-col">

      {/* photo panel — top 52% */}
      <div className="relative overflow-hidden bg-[#E4E4E4]" style={{ height: "52vh" }}>

        {/* blobs */}
        <div className="absolute top-[5%]  right-[5%] w-44 h-44 bg-violet-400/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0  left-[5%] w-36 h-36 bg-sky-400/25   rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-[40%] left-[30%] w-6 h-6 bg-indigo-400/30 rounded-full pointer-events-none" />
        <div className="absolute top-[15%] left-[8%]  w-20 h-20 border border-gray-400/25 rounded-full pointer-events-none" />

        {/* stat */}
        <div className="absolute bottom-4 left-4 z-10 pointer-events-none select-none">
          <p className="text-6xl font-black text-gray-300/70 leading-none">2+</p>
          <p className="text-[8px] tracking-widest text-gray-400 uppercase font-semibold">years exp.</p>
        </div>

        {/* small badge */}
        <div className="absolute top-4 left-4 z-20 bg-white/85 rounded-xl px-3 py-2 shadow">
          <p className="text-base font-black text-gray-900 leading-none">10+</p>
          <p className="text-[8px] tracking-widest text-gray-400 uppercase mt-0.5">Projects</p>
        </div>

        {/* photo */}
        <img
          src={fotoWhiteBg}
          alt="Rizki Maulana Arif"
          className="absolute bottom-0 right-0 h-full w-auto object-contain"
          style={{ objectPosition: "right bottom", mixBlendMode: "multiply" }}
        />
      </div>

      {/* content — bottom */}
      <div className="flex-1 bg-[#F0F0F0] px-7 pt-7 pb-12">

        <p className="text-[9px] font-semibold tracking-[0.35em] text-gray-400 uppercase mb-4">
          Full Stack Developer
        </p>

        <h1 className="text-[2.2rem] font-black text-gray-900 leading-[1.05] mb-0.5">Apps that</h1>
        <h1
          className="text-[2.2rem] font-black italic text-gray-600 leading-[1.05] mb-0.5"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          look great
        </h1>
        <h1 className="text-[2.2rem] font-black text-gray-900 leading-[1.05] mb-6">&amp; work fast</h1>

        <div className="flex flex-col gap-2 mb-6">
          {highlights.map((h) => (
            <div key={h} className="flex items-center gap-2">
              <HiCheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
              <span className="text-gray-600 text-xs font-medium">{h}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-2.5 mb-6">
          <a
            href="#contact"
            className="px-5 py-2.5 bg-indigo-600 text-white text-xs font-semibold rounded-full hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
          >
            Let&apos;s Work Together
          </a>
          <a
            href="#projects"
            className="px-5 py-2.5 border border-gray-300 text-gray-700 text-xs font-semibold rounded-full hover:border-gray-500 hover:bg-white transition-all"
          >
            View Projects
          </a>
        </div>

        <div className="flex gap-2.5">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={href} href={href} target="_blank" rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:text-gray-900 hover:border-gray-600 hover:bg-white transition-all"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

      </div>
    </div>

  </section>
);

export default Hero;

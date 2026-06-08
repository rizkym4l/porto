import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import foto from "../assets/me/ChatGPT_Image_Jun_8__2026__04_26_44_PM-removebg-preview.png";

const Hero = () => {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-500 flex flex-col min-h-[100svh]"
    >
      {/* Top bar: signature + tagline */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex items-start justify-between gap-6 px-6 md:px-12 lg:px-16 pt-8 md:pt-10 text-white"
      >
        <p className="font-inter font-medium text-sm sm:text-base md:text-xl whitespace-nowrap drop-shadow-sm">
          © Code by Rizki
        </p>
        <p className="font-inter font-light text-[11px] sm:text-sm md:text-lg text-right max-w-[280px] sm:max-w-[440px] md:max-w-[600px] leading-snug drop-shadow-sm">
          Fullstack Engineer with 2+ years building enterprise financial
          platforms, payment-ready e-commerce, and prediction systems — turning
          ambitious ideas into production-ready products.
        </p>
      </motion.div>

      {/* Giant headline (sits behind the portrait) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center px-4 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-inter font-medium text-white/95 leading-[0.9] tracking-tight text-[clamp(2.75rem,11vw,12rem)] flex flex-col"
        >
          <span className="-translate-x-[32%]">Software</span>
          <span className="translate-x-[32%]">Engineer</span>
        </motion.h1>
      </div>

      {/* Circular arrow cue */}
      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: 45 }}
        aria-label="Explore my work"
        className="absolute z-20 right-6 md:right-12 lg:right-16 top-[24%] md:top-[28%] flex items-center justify-center size-14 md:size-20 rounded-full border border-white/60 text-white backdrop-blur-sm hover:bg-white/10 transition-colors"
      >
        <ArrowUpRight className="size-6 md:size-9" strokeWidth={1.5} />
      </motion.button>

      {/* Portrait */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
        className="relative z-10 mt-auto flex justify-center w-full"
      >
        <img
          src={foto}
          alt="Rizki Maulana Arif"
          className="h-[66vh] max-h-[720px] w-auto object-contain object-bottom grayscale contrast-[1.05]"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 88%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* Fade into next (white) section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-[5] pointer-events-none bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  );
};

export default Hero;

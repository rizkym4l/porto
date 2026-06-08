import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-black w-full overflow-hidden relative">
      <div className="px-6 md:px-12 lg:px-[133px] pt-14 md:pt-[66px]">
        {/* Tagline + back-to-top */}
        <div className="flex items-start justify-between gap-6">
          <p className="font-dmsans font-light text-white leading-[1.08] text-[clamp(1.4rem,4.5vw,4.5rem)]">
            your friendly code creator
          </p>
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.08, rotate: 45 }}
            aria-label="Back to top"
            className="shrink-0 flex items-center justify-center size-12 md:size-20 rounded-full bg-white text-black"
          >
            <ArrowUpRight
              className="size-6 md:size-9"
              strokeWidth={1.5}
            />
          </motion.button>
        </div>

        {/* Giant name */}
        <p className="font-dmsans font-medium text-white leading-none tracking-[0.04em] whitespace-nowrap select-none text-[clamp(3.5rem,18vw,14rem)] -mb-[0.12em]">
          Rizkiii
        </p>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 md:px-12 lg:px-[133px] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-neutral-500 text-xs md:text-sm">
          © {new Date().getFullYear()} Rizki Maulana Arif — Built with React,
          Tailwind & Framer Motion.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/rizkym4l"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/rizki-maulana-arif-b711521a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:Rizkymaulana.more@gmail.com"
            className="text-neutral-500 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

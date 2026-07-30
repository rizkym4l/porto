import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  LayoutGrid,
  Boxes,
  Award,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

const SCAN_IDS = [
  "home",
  "about",
  "experience",
  "skills",
  "education",
  "projects",
  "certifications",
  "contact",
];

const navItems = [
  { id: "home", label: "Home", Icon: Home },
  { id: "about", label: "About", Icon: User },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "projects", label: "Projects", Icon: LayoutGrid },
  { id: "skills", label: "Skills", Icon: Boxes },
  { id: "certifications", label: "Certifications", Icon: Award },
  { id: "contact", label: "Contact", Icon: Mail },
];

const externals = [
  { href: "https://github.com/rizkym4l", label: "GitHub", Icon: Github },
  {
    href: "https://www.linkedin.com/in/rizki-maulana-arif-b711521a7/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
];

const NavDock = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const offset = window.innerHeight * 0.35;
      let current = "home";
      for (const id of SCAN_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const dot = "flex items-center justify-center size-8 md:size-9 rounded-full transition-colors";

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 22 }}
      className="fixed left-3 md:left-5 top-1/2 -translate-y-1/2 z-50"
    >
      <div className="flex flex-col items-center gap-1 rounded-2xl bg-[#171717] px-1.5 py-2 shadow-2xl border border-white/10">
        {navItems.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => go(id)}
              title={label}
              aria-label={label}
              className={`${dot} ${
                isActive
                  ? "bg-neutral-200 text-black"
                  : "bg-[#262626] text-neutral-400 hover:bg-[#333] hover:text-white"
              }`}
            >
              <Icon className="size-4 md:size-[18px]" strokeWidth={1.75} />
            </button>
          );
        })}

        <span className="my-0.5 h-px w-6 bg-white/10" />

        {externals.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            aria-label={label}
            className={`${dot} bg-[#262626] text-neutral-400 hover:bg-[#333] hover:text-white`}
          >
            <Icon className="size-[18px] md:size-5" strokeWidth={1.75} />
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default NavDock;

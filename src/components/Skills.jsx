import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaLaravel,
  FaAws,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaPhp,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiNestjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiFramer,
  SiGreensock,
  SiCplusplus,
  SiGo,
  SiPython,
  SiAntdesign,
  SiGitlab,
} from "react-icons/si";

const categories = [
  {
    title: "Front-End Development",
    desc: "Building engaging, user-friendly interfaces with modern frameworks.",
    icons: [
      { Icon: FaHtml5, color: "#E34F26" },
      { Icon: SiJavascript, color: "#F7DF1E" },
      { Icon: SiTypescript, color: "#3178C6" },
      { Icon: FaReact, color: "#61DAFB" },
      { Icon: SiNextdotjs, color: "#ffffff" },
      { Icon: SiRedux, color: "#764ABC" },
      { Icon: FaVuejs, color: "#4FC08D" },
    ],
  },
  {
    title: "Back-End Development",
    desc: "Robust server-side logic and APIs powering scalable applications.",
    icons: [
      { Icon: FaNodeJs, color: "#339933" },
      { Icon: SiExpress, color: "#ffffff" },
      { Icon: FaLaravel, color: "#FF2D20" },
      { Icon: SiNestjs, color: "#E0234E" },
    ],
  },
  {
    title: "Programming Languages",
    desc: "Applying multiple languages to write efficient, reliable logic.",
    icons: [
      { Icon: SiJavascript, color: "#F7DF1E" },
      { Icon: SiTypescript, color: "#3178C6" },
      { Icon: SiPython, color: "#3776AB" },
      { Icon: FaPhp, color: "#777BB4" },
      { Icon: SiCplusplus, color: "#00599C" },
      { Icon: SiGo, color: "#00ADD8" },
    ],
  },
  {
    title: "Styling & Design",
    desc: "Crafting responsive, visually appealing designs with modern tooling.",
    icons: [
      { Icon: FaCss3Alt, color: "#1572B6" },
      { Icon: SiTailwindcss, color: "#06B6D4" },
      { Icon: FaBootstrap, color: "#7952B3" },
      { Icon: FaSass, color: "#CC6699" },
      { Icon: SiAntdesign, color: "#0170FE" },
    ],
  },
  {
    title: "Database Management",
    desc: "Designing databases for secure, efficient storage and retrieval.",
    icons: [
      { Icon: SiMysql, color: "#4479A1" },
      { Icon: SiPostgresql, color: "#4169E1" },
      { Icon: SiMongodb, color: "#47A248" },
      { Icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Cloud & Deployment",
    desc: "Deploying and managing apps on modern cloud platforms and tools.",
    icons: [
      { Icon: FaAws, color: "#FF9900" },
      { Icon: FaDocker, color: "#2496ED" },
      { Icon: SiVercel, color: "#ffffff" },
      { Icon: SiNetlify, color: "#00C7B7" },
      { Icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Web Animations",
    desc: "Seamless animations and transitions that boost engagement.",
    icons: [
      { Icon: SiFramer, color: "#ffffff" },
      { Icon: SiGreensock, color: "#88CE02" },
    ],
  },
  {
    title: "Version Control & Collaboration",
    desc: "Managing code and collaborating for smooth, reliable teamwork.",
    icons: [
      { Icon: FaGithub, color: "#ffffff" },
      { Icon: FaGitAlt, color: "#F05032" },
      { Icon: SiGitlab, color: "#FC6D26" },
    ],
  },
  {
    title: "UI/UX Design",
    desc: "Intuitive, easy-to-navigate interfaces designed around the user.",
    icons: [{ Icon: FaFigma, color: "#F24E1E" }],
    tags: ["Prototyping", "Wireframing"],
  },
  {
    title: "Core CS Concepts",
    desc: "A strong foundation in problem-solving and system design.",
    tags: ["OOP", "REST API", "Data Structures", "DSA", "System Design"],
  },
  {
    title: "Personal Development",
    desc: "Committed to continuous learning and growth, on every team.",
    tags: [
      "Time Management",
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Leadership",
    ],
  },
];

const SkillCard = ({ category }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-40px" }}
    transition={{ duration: 0.45 }}
    className="mb-5 break-inside-avoid rounded-3xl bg-[#1c1c1c] border border-white/[0.06] px-6 py-7 flex flex-col gap-5 transition-colors hover:border-white/15"
  >
    {category.icons && (
      <div className="flex flex-wrap gap-2.5">
        {category.icons.map(({ Icon, color }, i) => (
          <div
            key={i}
            className="flex items-center justify-center size-[52px] md:size-[58px] rounded-full bg-[#121212] shrink-0"
          >
            <Icon className="size-6 md:size-7" style={{ color }} />
          </div>
        ))}
      </div>
    )}

    {category.tags && (
      <div className="flex flex-wrap gap-2">
        {category.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#121212] px-4 py-2 font-dmsans font-light text-sm md:text-[15px] text-neutral-200"
          >
            {tag}
          </span>
        ))}
      </div>
    )}

    <div className="flex flex-col gap-1.5">
      <h3 className="font-dmsans font-medium text-lg md:text-xl text-white">
        {category.title}
      </h3>
      <p className="font-dmsans font-light text-sm md:text-[15px] leading-snug text-[#9a9a9a]">
        {category.desc}
      </p>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-black w-full">
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        {/* Top bar */}
        <div className="flex items-start justify-between gap-6 text-white mb-12 md:mb-16">
          <p className="font-inter font-medium text-xs md:text-base whitespace-nowrap">
            © Code by Rizki
          </p>
          <p className="font-inter font-light text-[10px] md:text-sm text-right max-w-[360px] md:max-w-[520px] leading-snug text-neutral-300">
            Fullstack Engineer crafting enterprise platforms, e-commerce, and
            exceptional digital experiences through modern technologies.
          </p>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-dmsans text-white text-center leading-[1.05] tracking-tight text-[clamp(1.9rem,6vw,4.5rem)] max-w-3xl mx-auto mb-12 md:mb-16"
        >
          Skills that fuel my passion
        </motion.h2>

        {/* Masonry of cards */}
        <div className="columns-1 sm:columns-2 xl:columns-3 gap-5 max-w-[1200px] mx-auto">
          {categories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

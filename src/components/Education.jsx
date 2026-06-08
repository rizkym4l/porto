import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    institution: "Telkom University Bandung",
    degree: "Bachelor of Applied Information Systems",
    major: "Smart City",
    period: "2025 — 2029",
    location: "Bandung, Indonesia",
    current: true,
    description:
      "Currently pursuing a degree in Applied Information Systems with a focus on Smart City technologies, IoT, and modern software development.",
  },
  {
    id: 2,
    institution: "SMK Wikrama Bogor",
    degree: "Vocational High School Diploma",
    major: "Software Engineering (PPLG)",
    period: "2022 — 2025",
    location: "Bogor, Indonesia",
    current: false,
    description:
      "Graduated with a 3.35/4.00 GPA and a strong foundation in software engineering — covering full-stack development, database design, and agile methodologies.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-white px-6 md:px-12 lg:px-[133px] py-20 md:py-28"
    >
      <div className="max-w-[1654px] mx-auto">
        <p className="font-plexmono text-sm text-neutral-400 mb-4">
          // education
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-inter font-medium text-black leading-[1.08] tracking-tight text-[clamp(1.5rem,3.5vw,2.5rem)] mb-10 md:mb-14"
        >
          Where I learned the craft
        </motion.h2>

        <div className="border-t border-neutral-200">
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid md:grid-cols-12 gap-2 md:gap-6 py-8 md:py-10 border-b border-neutral-200"
            >
              <div className="md:col-span-3 font-mono text-sm text-neutral-500">
                {edu.period}
              </div>
              <div className="md:col-span-6">
                <h3 className="font-inter text-lg md:text-2xl text-black flex items-center gap-3 flex-wrap">
                  {edu.institution}
                  {edu.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1">
                      <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Currently Enrolled
                    </span>
                  )}
                </h3>
                <p className="text-neutral-700 mt-1">{edu.degree}</p>
                <p className="font-mono text-sm text-neutral-400 mt-0.5">
                  {edu.major}
                </p>
                <p className="text-neutral-500 leading-relaxed mt-3 max-w-xl">
                  {edu.description}
                </p>
              </div>
              <div className="md:col-span-3 md:text-right text-sm text-neutral-500">
                {edu.location}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

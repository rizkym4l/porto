import React from "react";
import { motion } from "framer-motion";
import { experience } from "../data/experience";

const abroad = experience.filter((e) => e.country && e.country !== "Indonesia");

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-white px-6 md:px-12 lg:px-[133px] py-20 md:py-28"
    >
      <div className="max-w-[1654px] mx-auto">
        <p className="font-plexmono text-sm text-neutral-400 mb-4">
          // experience
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-inter font-medium text-black leading-[1.08] tracking-tight text-[clamp(1.5rem,3.5vw,2.5rem)] mb-4"
        >
          Building for teams across borders
        </motion.h2>

        {abroad.length > 0 && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-inter text-neutral-500 max-w-2xl mb-10 md:mb-14"
          >
            Currently shipping production software for remote teams in{" "}
            {abroad.map((e, i) => (
              <React.Fragment key={e.id}>
                {i > 0 && (i === abroad.length - 1 ? " & " : ", ")}
                <span className="text-black font-medium">
                  {e.flag} {e.country}
                </span>
              </React.Fragment>
            ))}
            .
          </motion.p>
        )}

        <div className="border-t border-neutral-200">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid md:grid-cols-12 gap-3 md:gap-6 py-8 md:py-10 border-b border-neutral-200"
            >
              <div className="md:col-span-3 font-mono text-sm text-neutral-500">
                {exp.period}
                <p className="mt-1 text-neutral-400">{exp.location}</p>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-inter text-lg md:text-2xl text-black">
                    {exp.position}
                  </h3>
                  {exp.current && (
                    <span className="flex items-center gap-1.5 font-plexmono text-[11px] uppercase tracking-wider text-neutral-500">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                      </span>
                      Now
                    </span>
                  )}
                </div>
                <p className="mt-1 text-neutral-700 font-medium">
                  {exp.flag && <span className="mr-1.5">{exp.flag}</span>}
                  {exp.company}
                </p>
                <ul className="mt-4 space-y-2 max-w-2xl">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-neutral-500 leading-relaxed"
                    >
                      <span className="mt-2.5 size-1.5 rounded-full bg-neutral-300 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

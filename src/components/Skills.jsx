import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { Code2, Server, Wrench } from 'lucide-react';

const SkillPill = ({ skill, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    whileHover={{ y: -3, boxShadow: "0 8px 25px rgba(0,0,0,0.08)" }}
    className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-gray-300 transition-all cursor-default"
  >
    <span className="text-gray-900 font-medium text-sm">{skill.name}</span>
    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
      skill.level === 'Advanced'
        ? 'bg-gray-900 text-white'
        : 'bg-gray-100 text-gray-600'
    }`}>
      {skill.level}
    </span>
  </motion.div>
);

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      icon: <Code2 size={22} />,
      skills: skills.frontend,
    },
    {
      title: "Backend",
      icon: <Server size={22} />,
      skills: skills.backend,
    },
    {
      title: "Tools & Skills",
      icon: <Wrench size={22} />,
      skills: skills.tools,
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-4" />
          <p className="text-gray-500 max-w-lg mx-auto">
            Technologies and methodologies I work with daily
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.15 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: groupIndex * 0.15 + 0.2 }}
                  className="w-11 h-11 rounded-xl bg-gray-900 flex items-center justify-center"
                >
                  <div className="text-white">{group.icon}</div>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900">{group.title}</h3>
              </div>

              <div className="flex flex-col gap-2.5">
                {group.skills.map((skill, index) => (
                  <SkillPill
                    key={index}
                    skill={skill}
                    delay={groupIndex * 0.1 + index * 0.04}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

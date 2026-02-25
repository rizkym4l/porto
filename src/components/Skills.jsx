import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Wrench } from 'lucide-react';
import { skills } from '../data/skills';

const xpMap = {
  "React.js": 92,        "Vue.js": 85,          "TypeScript": 88,
  "JavaScript": 93,      "Tailwind CSS": 90,    "Redux Toolkit": 65,
  "Ant Design": 62,      "Bootstrap": 80,
  "Node.js": 87,         "Laravel": 84,         "Express.js": 86,
  "MySQL": 85,           "PostgreSQL": 68,      "REST API": 90,
  "Firebase": 64,        "NestJS": 82,
  "Git & GitLab": 90,    "Agile/Scrum": 70,     "Livewire": 60,
  "Problem Solving": 88, "Team Collaboration": 86, "Docker": 65,
  "Time Management": 82,
};
const getXP = (name, level) =>
  xpMap[name] ?? (level === 'Advanced' ? 82 : 60);

const getRank = (xp) => {
  if (xp >= 90) return { label: 'Expert', color: 'text-indigo-600'  };
  if (xp >= 80) return { label: 'Senior', color: 'text-violet-600'  };
  if (xp >= 70) return { label: 'Mid',    color: 'text-emerald-600' };
  return              { label: 'Junior', color: 'text-gray-400'    };
};

const groups = [
  {
    key: 'frontend',
    title: 'Frontend',
    icon: <Code2 size={16} />,
    barFrom: '#818cf8',
    barTo: '#6366f1',
    border: 'border-indigo-100',
    headerBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    accentBar: 'from-indigo-400 to-indigo-600',
  },
  {
    key: 'backend',
    title: 'Backend',
    icon: <Server size={16} />,
    barFrom: '#c084fc',
    barTo: '#a855f7',
    border: 'border-violet-100',
    headerBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    accentBar: 'from-violet-400 to-violet-600',
  },
  {
    key: 'tools',
    title: 'Tools & Soft Skills',
    icon: <Wrench size={16} />,
    barFrom: '#34d399',
    barTo: '#10b981',
    border: 'border-emerald-100',
    headerBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    accentBar: 'from-emerald-400 to-emerald-600',
  },
];

const SkillRow = ({ skill, barFrom, barTo, groupIdx, skillIdx }) => {
  const xp = getXP(skill.name, skill.level);
  const rank = getRank(xp);
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: groupIdx * 0.08 + skillIdx * 0.04 }}
      className="mb-3 last:mb-0"
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-gray-700 text-xs font-medium">{skill.name}</span>
        <div className="flex items-center gap-1.5">
          <span className={`text-[9px] font-semibold ${rank.color}`}>{rank.label}</span>
          <span className="text-gray-400 text-[9px]">{xp}%</span>
        </div>
      </div>
      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(to right, ${barFrom}, ${barTo})` }}
          initial={{ width: '0%' }}
          whileInView={{ width: `${xp}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: groupIdx * 0.08 + skillIdx * 0.05, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => (
  <section id="skills" className="py-24 bg-white relative overflow-hidden">

    {/* subtle dot pattern */}
    <div className="absolute inset-0 pointer-events-none opacity-30" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, #d1d5db 1px, transparent 0)',
      backgroundSize: '28px 28px',
    }} />

    <div className="max-w-6xl mx-auto px-6 relative z-10">

      {/* Header */}
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase mb-4">
          Skills & Expertise
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">Technical</h2>
        <h2
          className="text-4xl md:text-5xl font-black italic text-gray-500 leading-tight"
          style={{ fontFamily: "'Georgia','Times New Roman',serif" }}
        >
          skill set
        </h2>
      </motion.div>

      {/* Group cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {groups.map((g, gi) => {
          const groupSkills = skills[g.key] || [];
          const avg = Math.round(
            groupSkills.reduce((acc, s) => acc + getXP(s.name, s.level), 0) / (groupSkills.length || 1)
          );
          return (
            <motion.div
              key={g.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: gi * 0.12 }}
              className={`bg-white border ${g.border} rounded-2xl overflow-hidden shadow-sm`}
            >
              {/* Top accent */}
              <div className={`h-1 bg-gradient-to-r ${g.accentBar} to-transparent`} />

              {/* Card header */}
              <div className={`px-5 pt-5 pb-4 border-b border-gray-100 ${g.headerBg}`}>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className={g.iconColor}>{g.icon}</div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{g.title}</p>
                    <p className="text-gray-400 text-[10px]">{groupSkills.length} skills</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className={`text-xs font-black ${g.iconColor}`}>{avg}%</p>
                    <p className="text-gray-400 text-[9px]">avg</p>
                  </div>
                </div>
                {/* Avg bar */}
                <div className="h-1 bg-white/70 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(to right, ${g.barFrom}, ${g.barTo})` }}
                    initial={{ width: '0%' }}
                    whileInView={{ width: `${avg}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: gi * 0.15 }}
                  />
                </div>
              </div>

              {/* Skills list */}
              <div className="px-5 pt-4 pb-5">
                {groupSkills.map((skill, si) => (
                  <SkillRow
                    key={si}
                    skill={skill}
                    barFrom={g.barFrom}
                    barTo={g.barTo}
                    groupIdx={gi}
                    skillIdx={si}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;

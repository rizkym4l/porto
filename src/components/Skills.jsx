import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Wrench } from 'lucide-react';
import { skills } from '../data/skills';

/* ── XP values per skill ── */
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

/* ── Rank label from XP ── */
const getRank = (xp) => {
  if (xp >= 90) return { label: 'SSS', color: 'text-yellow-300' };
  if (xp >= 80) return { label: 'S',   color: 'text-cyan-300'   };
  if (xp >= 70) return { label: 'A',   color: 'text-green-300'  };
  return              { label: 'B',   color: 'text-white/50'   };
};

/* ── Group config ── */
const groups = [
  {
    key: 'frontend',
    title: 'FRONTEND',
    class: 'MAGE',
    icon: <Code2 size={18} />,
    accent: 'cyan',
    barFrom: '#22d3ee',
    barTo: '#06b6d4',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/8',
    labelColor: 'text-cyan-400',
    glow: 'shadow-cyan-500/10',
  },
  {
    key: 'backend',
    title: 'BACKEND',
    class: 'WARRIOR',
    icon: <Server size={18} />,
    accent: 'purple',
    barFrom: '#c084fc',
    barTo: '#a855f7',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/8',
    labelColor: 'text-purple-400',
    glow: 'shadow-purple-500/10',
  },
  {
    key: 'tools',
    title: 'TOOLS',
    class: 'RANGER',
    icon: <Wrench size={18} />,
    accent: 'green',
    barFrom: '#4ade80',
    barTo: '#22c55e',
    border: 'border-green-500/30',
    bg: 'bg-green-500/8',
    labelColor: 'text-green-400',
    glow: 'shadow-green-500/10',
  },
];

/* ── Single skill row ── */
const SkillRow = ({ skill, barFrom, barTo, labelColor, groupIdx, skillIdx }) => {
  const xp = getXP(skill.name, skill.level);
  const rank = getRank(xp);

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: groupIdx * 0.1 + skillIdx * 0.05 }}
      className="mb-3 last:mb-0"
    >
      {/* Name + rank + level */}
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-white/80 text-xs font-pixelify">{skill.name}</span>
        <div className="flex items-center gap-2">
          <span className={`font-pixel text-[7px] ${rank.color}`}>[{rank.label}]</span>
          <span className={`font-pixel text-[8px] ${labelColor}`}>LV.{xp}</span>
        </div>
      </div>

      {/* XP bar track */}
      <div className="relative h-3.5 bg-black/40 border border-white/8 overflow-hidden" style={{ imageRendering: 'pixelated' }}>
        {/* Filled bar */}
        <motion.div
          className="absolute left-0 top-0 h-full"
          style={{ background: `linear-gradient(to right, ${barFrom}, ${barTo})` }}
          initial={{ width: '0%' }}
          whileInView={{ width: `${xp}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: groupIdx * 0.1 + skillIdx * 0.06, ease: 'easeOut' }}
        />
        {/* Pixel block segments */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, transparent 0px, transparent 7px, rgba(0,0,0,0.35) 7px, rgba(0,0,0,0.35) 8px)',
          }}
        />
        {/* Shine gloss */}
        <div className="absolute inset-x-0 top-0 h-1/3 bg-white/10 pointer-events-none" />
      </div>
    </motion.div>
  );
};

/* ── Main component ── */
const Skills = () => (
  <section id="skills" className="py-24 bg-[#050514] relative overflow-hidden">

    {/* Pixel dot grid */}
    <div className="absolute inset-0 pointer-events-none" style={{
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
      backgroundSize: '28px 28px',
    }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
      style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.04) 0%, transparent 65%)' }} />

    <div className="max-w-6xl mx-auto px-6 relative z-10">

      {/* ── Header ── */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        <p className="font-pixel text-[9px] text-cyan-400 tracking-[0.3em] uppercase mb-4">
          &gt; character_stats_
        </p>
        <h2 className="font-pixel text-2xl md:text-3xl text-white mb-3">SKILL TREE</h2>
        <div className="h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent mb-4" />
        {/* Legend */}
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {[{ label: 'SSS', color: 'text-yellow-300', sub: '90+' }, { label: 'S', color: 'text-cyan-300', sub: '80–89' }, { label: 'A', color: 'text-green-300', sub: '70–79' }, { label: 'B', color: 'text-white/40', sub: '<70' }].map(r => (
            <div key={r.label} className="flex items-center gap-1.5">
              <span className={`font-pixel text-[9px] ${r.color}`}>[{r.label}]</span>
              <span className="text-white/25 text-[8px] font-mono">{r.sub}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Group cards ── */}
      <div className="grid md:grid-cols-3 gap-6">
        {groups.map((g, gi) => {
          const groupSkills = skills[g.key] || [];
          return (
            <motion.div
              key={g.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: gi * 0.12 }}
              className={`relative border ${g.border} rounded-2xl overflow-hidden shadow-xl ${g.glow}`}
              style={{ background: 'rgba(5,5,20,0.8)' }}
            >
              {/* Top accent bar */}
              <div className="h-1" style={{ background: `linear-gradient(to right, ${g.barFrom}, transparent)` }} />

              {/* Card header */}
              <div className={`px-5 pt-5 pb-4 border-b border-white/5`}>
                <div className="flex items-center gap-2 mb-1">
                  <div className={`${g.labelColor}`}>{g.icon}</div>
                  <div>
                    <p className={`font-pixel text-[10px] ${g.labelColor}`}>{g.title}</p>
                    <p className="text-white/25 text-[7px] font-pixel tracking-widest">{g.class} CLASS</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-white/25 text-[7px] font-pixel">{groupSkills.length} SKILLS</p>
                  </div>
                </div>

                {/* Party total XP bar */}
                <div className="mt-3">
                  {(() => {
                    const avg = Math.round(groupSkills.reduce((acc, s) => acc + getXP(s.name, s.level), 0) / groupSkills.length);
                    return (
                      <div className="flex items-center gap-2">
                        <span className="text-white/25 text-[7px] font-pixel w-16">AVG LV.{avg}</span>
                        <div className="flex-1 h-2 bg-black/40 border border-white/8 overflow-hidden">
                          <motion.div
                            className="h-full"
                            style={{ background: `linear-gradient(to right, ${g.barFrom}, ${g.barTo})`, opacity: 0.5 }}
                            initial={{ width: '0%' }}
                            whileInView={{ width: `${avg}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: gi * 0.15 }}
                          />
                        </div>
                      </div>
                    );
                  })()}
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
                    labelColor={g.labelColor}
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

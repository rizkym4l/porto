import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { skills } from '../data/skills';
import { fadeInUp, staggerContainer } from '../animations/motionVariants';
import { Code2, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      icon: <Code2 size={24} />,
      skills: skills.frontend,
      color: "from-gray-700 to-gray-900"
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: skills.backend,
      color: "from-gray-800 to-black"
    },
    {
      title: "Tools & Skills",
      icon: <Wrench size={24} />,
      skills: skills.tools,
      color: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-white mx-auto" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={fadeInUp}
            >
              <Card className="p-6 bg-black border-gray-800 hover:border-gray-600 transition-all duration-300 h-full">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${group.color} flex items-center justify-center mb-4`}>
                  <div className="text-white">{group.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-6">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 transition-colors font-mono text-xs"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
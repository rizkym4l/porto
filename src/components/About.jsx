import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Award, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { fadeInUp, staggerContainer } from '../animations/motionVariants';

const About = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Coding Since 2022",
      description: "Hands-on experience building real-world applications",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Briefcase size={24} />,
      title: "Remote Work Expert",
      description: "Experienced with multiple companies and software houses",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Award size={24} />,
      title: "Full-Stack Proficient",
      description: "React, Node.js, Laravel, and modern tech stack",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Continuous Learner",
      description: "Pursuing Applied Bachelor in Smart City Systems",
      color: "from-green-500 to-emerald-500"
    }
  ];

  // Floating particles
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 12,
    delay: Math.random() * 3
  }));

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at center, #404040 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 bg-blue-900 rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-72 h-72 bg-purple-900 rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <motion.div
            className="absolute -top-4 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="text-gray-700" size={24} />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white relative inline-block">
            About Me
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
            animate={{
              scaleX: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ y: imageY }}
            className="order-2 md:order-1"
          >
            <motion.div 
              className="relative rounded-lg overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                animate={{
                  background: [
                    'linear-gradient(45deg, transparent, transparent)',
                    'linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(168, 85, 247, 0.5))',
                    'linear-gradient(45deg, transparent, transparent)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ padding: '2px' }}
              >
                <div className="w-full h-full bg-black rounded-lg" />
              </motion.div>

              {/* Image */}
              <div className="relative z-10">
                <motion.img
                  src="https://media.licdn.com/dms/image/v2/D5603AQHkk942CR0lSg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1703894450545?e=2147483647&v=beta&t=EXyOXl1_MrdfvfZ8y4YOfdgE5ykSdgD8-j4qo068c_E"
                  alt="Developer workspace"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Floating Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Corner Accents */}
              <motion.div
                className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </motion.div>

          {/* Content with Parallax */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            style={{ y: contentY }}
            className="order-1 md:order-2"
          >
            <motion.p
              variants={fadeInUp}
              className="text-gray-300 text-lg mb-8 leading-relaxed relative"
            >
              <motion.span
                className="absolute -left-4 top-0 text-6xl text-blue-500/20 font-serif"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                "
              </motion.span>
              Fullstack Developer with years of remote experience building production systems for fintech,
healthcare, and SaaS platforms. Specialized in React, TypeScript, Laravel, and real-time web
applications. Proven track record of delivering enterprise solutions independently while maintaining
high code quality in Agile environments.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-base mb-8 leading-relaxed"
            >
              Passionate about contributing to innovative tech projects and providing efficient, scalable full-stack solutions. Strong in React, Node.js, Laravel, and modern frontend technologies.
            </motion.p>

            {/* Highlight Cards with Enhanced Animations */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <Card className="p-4 bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 relative overflow-hidden group">
                    {/* Animated Gradient Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10`}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5
                      }}
                    />

                    {/* Content */}
                    <motion.div 
                      className="text-white mb-2 relative z-10"
                      animate={{
                        rotate: [0, -5, 5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-white font-semibold mb-1 relative z-10">{item.title}</h3>
                    <p className="text-gray-400 text-sm relative z-10">{item.description}</p>

                    {/* Corner Glow */}
                    <motion.div
                      className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Code className="text-gray-700" size={20} />
              </motion.div>
              <motion.div
                className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
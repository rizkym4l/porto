import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaLaravel,
  FaGitAlt,
  FaStar,
  FaStarHalfAlt,
  FaQuoteLeft,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiRedux,
  SiMongodb,
  SiGo,
  SiDocker,
  SiFirebase,
  SiNextdotjs,
  SiNestjs,
  SiPrisma,
  SiVercel,
} from "react-icons/si";
import { FiGithub, FiInstagram, FiLinkedin, FiStar } from "react-icons/fi";
import foto from "../assets/me/aku.jpeg";
const reviews = [
  {
    name: "Baddarudin ",
    role: "Senior Developer,Fintools",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQGSVCoY1DtI6Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731332122318?e=1772064000&v=beta&t=vwJH2OB7iXsDSj5O8NTaErEFvXCGUF11vd6dOd13AQ0",
    month: "Feb 2026",
    rating: 5,
    text: "Rizki delivered an outstanding finance platform. His React & TypeScript skills are top-notch.",
  },
  {
    name: "Kesa Purnama",
    role: "Mid Developer,Pt 4Net Prima",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXWUu5Mmzt_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698918123764?e=1772064000&v=beta&t=C_qn_CVCfsMFZrWvLyX0EcHccfkzu4aykaozFJJFvHY",
    month: "Jan 2025",
    rating: 5,
    text: "During the contract period, you showed a good attitude, learned quickly, and adapted well to the work environment. Moving forward, continue to build confidence and take initiative to maximize your contribution.",
  },
  {
    name: "Rizky Bachtiar",
    role: "Client, UNSIA",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ywDEoTHS-CjhkNudZLMd9pQgo07e1hJopA&s",
    month: "Dec 2025",
    rating: 5,
    text: "The task was completed correctly and met all the requirements. The C++ implementation is clear, well-structured, and functions as expected. Overall, the result demonstrates a solid understanding of the problem and its solution. ",
  },
  {
    name: "Manca Lopez",
    role: "CEO of Jagoscript ",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQFtnokVN3REGg/profile-displayphoto-shrink_200_200/B56Zg7_j8FG0AY-/0/1753353176781?e=1772064000&v=beta&t=vLJR3h4RdjqCi6iL1IGgA6zKrn_NAZwbLRIFcf0muM4",
    month: "July 2025",
    rating: 5,
    text: "Fast delivery, clean code, and great communication. Built our MVP in record time.",
  },
  {
    name: "Baddarudin ",
    role: "Senior Developer,Fintools",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQGSVCoY1DtI6Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731332122318?e=1772064000&v=beta&t=vwJH2OB7iXsDSj5O8NTaErEFvXCGUF11vd6dOd13AQ0",
    month: "Feb 2026",
    rating: 5,
    text: "Rizki delivered an outstanding finance platform. His React & TypeScript skills are top-notch.",
  },
  {
    name: "Kesa Purnama",
    role: "Mid Developer,Pt 4Net Prima",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXWUu5Mmzt_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698918123764?e=1772064000&v=beta&t=C_qn_CVCfsMFZrWvLyX0EcHccfkzu4aykaozFJJFvHY",
    month: "Jan 2025",
    rating: 5,
    text: "During the contract period, you showed a good attitude, learned quickly, and adapted well to the work environment. Moving forward, continue to build confidence and take initiative to maximize your contribution.",
  },
  {
    name: "Rizky Bachtiar",
    role: "Client, UNSIA",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ywDEoTHS-CjhkNudZLMd9pQgo07e1hJopA&s",
    month: "Dec 2025",
    rating: 5,
    text: "The task was completed correctly and met all the requirements. The C++ implementation is clear, well-structured, and functions as expected. Overall, the result demonstrates a solid understanding of the problem and its solution. ",
  },
  {
    name: "Manca Lopez",
    role: "Jagoscript CEO",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQFtnokVN3REGg/profile-displayphoto-shrink_200_200/B56Zg7_j8FG0AY-/0/1753353176781?e=1772064000&v=beta&t=vLJR3h4RdjqCi6iL1IGgA6zKrn_NAZwbLRIFcf0muM4",
    month: "July 2025",
    rating: 5,
    text: "Fast delivery, clean code, and great communication. Built our MVP in record time.",
  },
  
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} className="text-yellow-400" size={12} />);
    } else if (i - 0.5 === rating) {
      stars.push(
        <FaStarHalfAlt key={i} className="text-yellow-400" size={12} />,
      );
    } else {
      stars.push(<FiStar key={i} className="text-yellow-400" size={12} />);
    }
  }
  return <div className="flex gap-0.5">{stars}</div>;
};

const ReviewCard = ({ review }) => (
  <div className="flex-shrink-0 w-[280px]">
    <div className="relative p-4 rounded-2xl border border-gray-100 bg-white/90 h-full">
      <FaQuoteLeft className="absolute top-3 right-3 text-gray-100" size={24} />

      <div className="flex items-center gap-3 mb-3">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-100 shadow-sm"
        />
        <div>
          <h4 className="text-gray-800 font-semibold text-sm">{review.name}</h4>
          <p className="text-gray-400 text-xs">{review.role}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <StarRating rating={review.rating} />
        <span className="text-gray-400 text-xs">{review.month}</span>
      </div>

      <p className="text-gray-500 text-xs leading-relaxed">{review.text}</p>
    </div>
  </div>
);

const Hero = () => {
  const techLogos = [
    {
      name: "React",
      icon: FaReact,
      color: "#61DAFB",
      x: "18%",
      y: "15%",
      delay: 0,
    },
    {
      name: "Vue.js",
      icon: FaVuejs,
      color: "#4FC08D",
      x: "75%",
      y: "12%",
      delay: 0.3,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
      x: "12%",
      y: "42%",
      delay: 0.6,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
      x: "82%",
      y: "35%",
      delay: 0.9,
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "#06B6D4",
      x: "25%",
      y: "28%",
      delay: 0.7,
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "#4479A1",
      x: "70%",
      y: "25%",
      delay: 1.0,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "#336791",
      x: "10%",
      y: "55%",
      delay: 0.5,
    },
    {
      name: "Express",
      icon: SiExpress,
      color: "#444444",
      x: "85%",
      y: "48%",
      delay: 0.8,
    },
    {
      name: "Redux",
      icon: SiRedux,
      color: "#764ABC",
      x: "28%",
      y: "10%",
      delay: 1.1,
    },
    {
      name: "Go",
      icon: SiGo,
      color: "#00ADD8",
      x: "88%",
      y: "18%",
      delay: 0.65,
    },
    {
      name: "Nest.Js",
      icon: SiNestjs,
      color: "red",
      x: "22%",
      y: "52%",
      delay: 0.95,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#000000",
      x: "6%",
      y: "28%",
      delay: 0.55,
    },
    {
      name: "Vercel",
      icon: SiVercel,
      color: "#000000",
      x: "68%",
      y: "10%",
      delay: 0.45,
    },
  ];

  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <>
      <section className="h-[85vh] relative overflow-hidden bg-white">
        {/* ===== FLOATING TECH ICONS ===== */}
        {techLogos.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={tech.name}
              className="absolute z-10 hidden md:flex mt-24 items-center justify-center"
              style={{ left: tech.x, top: tech.y }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.6 + tech.delay,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              <motion.div
                animate={{
                  y: [0, -14, 0],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: tech.delay,
                }}
              >
                <motion.div
                  className="relative p-4 rounded-2xl border border-gray-100 shadow-lg backdrop-blur-md"
                  animate={{
                    backgroundColor: [
                      "rgba(255,255,255,0.6)",
                      "rgba(255,255,255,0.9)",
                      "rgba(255,255,255,0.6)",
                    ],
                    boxShadow: [
                      `0 4px 20px ${tech.color}15`,
                      `0 8px 30px ${tech.color}30`,
                      `0 4px 20px ${tech.color}15`,
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: tech.delay * 0.5,
                  }}
                >
                  <Icon size={32} color={tech.color} />
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* ===== CENTER CHARACTER / PHOTO ===== */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[15] flex flex-col items-center">
          {/* "Software Developer" text + Social icons above photo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center -mb-6 z-20"
          >
            <motion.p
              className="text-gray-800 xl:text-3xl   text-xl md:text-2xl  font-extrabold tracking-wide  mb-2"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Hi,I am a Software Developer
            </motion.p>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/rizkym4l"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-all shadow-sm"
              >
                <FiGithub size={20} />
              </motion.a>
              <motion.a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-500 hover:text-pink-500 hover:border-pink-300 transition-all shadow-sm"
              >
                <FiInstagram size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rizki-maulana-arif-b711521a7/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-all shadow-sm"
              >
                <FiLinkedin size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative w-screen md:w-80 lg:w-[28rem]"
            style={{ height: "65vh", maxHeight: "600px" }}
          >
            <img
              src={foto}
              alt="Rizki Maulana Arif"
              className="w-full h-full object-cover object-top"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 55%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 55%, transparent 100%)",
              }}
            />
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 z-[16] pointer-events-none bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ===== REVIEW MARQUEE (below hero) ===== */}
      <div className="bg-white py-8 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
        <motion.div
          className="flex gap-5"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ x: { duration: 40, repeat: Infinity, ease: "linear" } }}
        >
          {duplicatedReviews.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Hero;

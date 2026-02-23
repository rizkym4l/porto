import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';
import { FaStar, FaStarHalfAlt, FaQuoteLeft } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';

/* ─────────────────── REVIEWS DATA ─────────────────── */
const reviews = [
  {
    name: "Baddarudin",
    role: "Senior Developer, Fintools",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQGSVCoY1DtI6Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731332122318?e=1772064000&v=beta&t=vwJH2OB7iXsDSj5O8NTaErEFvXCGUF11vd6dOd13AQ0",
    month: "Feb 2026",
    rating: 5,
    text: "Rizki delivered an outstanding finance platform. His React & TypeScript skills are top-notch.",
  },
  {
    name: "Kesa Purnama",
    role: "Mid Developer, Pt 4Net Prima",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHXWUu5Mmzt_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698918123764?e=1772064000&v=beta&t=C_qn_CVCfsMFZrWvLyX0EcHccfkzu4aykaozFJJFvHY",
    month: "Jan 2025",
    rating: 5,
    text: "Good attitude, learned quickly, and adapted well. Continue to build confidence and take initiative.",
  },
  {
    name: "Rizky Bachtiar",
    role: "Client",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ywDEoTHS-CjhkNudZLMd9pQgo07e1hJopA&s",
    month: "Dec 2025",
    rating: 5,
    text: "The implementation is clear, well-structured, and functions as expected. Solid understanding of the problem.",
  },
  {
    name: "Manca Lopez",
    role: "CEO of Jagoscript",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQFtnokVN3REGg/profile-displayphoto-shrink_200_200/B56Zg7_j8FG0AY-/0/1753353176781?e=1772064000&v=beta&t=vLJR3h4RdjqCi6iL1IGgA6zKrn_NAZwbLRIFcf0muM4",
    month: "July 2025",
    rating: 5,
    text: "Fast delivery, clean code, and great communication. Built our MVP in record time.",
  },
];

/* ─────────────────── STAR RATING ─────────────────── */
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating))      stars.push(<FaStar key={i} className="text-yellow-400" size={11} />);
    else if (i - 0.5 === rating)      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" size={11} />);
    else                              stars.push(<FiStar key={i} className="text-yellow-400/50" size={11} />);
  }
  return <div className="flex gap-0.5">{stars}</div>;
};

/* ─────────────────── REVIEW CARD ─────────────────── */
const ReviewCard = ({ review }) => (
  <div className="flex-shrink-0 w-[270px]">
    <div className="relative p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm h-full">
      <FaQuoteLeft className="absolute top-3 right-3 text-white/5" size={28} />
      <div className="flex items-center gap-3 mb-3">
        <img
          src={review.avatar} alt={review.name}
          className="w-10 h-10 rounded-full object-cover border-2 border-white/10"
        />
        <div>
          <h4 className="text-white/90 font-pixelify font-semibold text-sm">{review.name}</h4>
          <p className="text-white/40 text-xs">{review.role}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <StarRating rating={review.rating} />
        <span className="text-white/30 text-xs font-mono">{review.month}</span>
      </div>
      <p className="text-white/55 text-xs leading-relaxed">{review.text}</p>
    </div>
  </div>
);

/* ─────────────────── EXPERIENCE ─────────────────── */
const Experience = () => {
  const doubled = [...reviews, ...reviews];

  return (
    <section id="experience" className="py-24 bg-[#050514] relative overflow-hidden">

      {/* Pixel dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
        backgroundSize: '28px 28px',
      }} />

      <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <p className="font-pixel text-[9px] text-cyan-400 tracking-[0.3em] uppercase mb-4">
            &gt; work_experience_
          </p>
          <h2 className="font-pixel text-2xl md:text-3xl text-white mb-5">EXPERIENCE</h2>
          <div className="h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent mb-4" />
          <p className="text-white/30 text-sm font-pixelify">Professional journey across fintech, SaaS & enterprise</p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-white/10 to-transparent" />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
              className={`relative mb-10 last:mb-0 md:flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, delay: index * 0.15 + 0.2 }}
                className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10"
              >
                <div className="w-4 h-4 bg-cyan-500 rounded-full border-4 border-[#050514] shadow-lg shadow-cyan-500/40" />
              </motion.div>

              {/* Card */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-14' : 'md:pl-14'} pl-20 md:pl-0`}>
                <motion.div
                  whileHover={{ y: -4 }} transition={{ duration: 0.25 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 hover:bg-white/8 transition-all"
                >
                  <div className="mb-4">
                    <h3 className="font-pixel text-[11px] text-white mb-1 leading-snug">{exp.position}</h3>
                    <h4 className="font-pixelify text-cyan-400 text-base font-semibold">{exp.company}</h4>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-1.5 text-white/40 text-xs">
                      <Calendar size={12} />
                      <span className="font-mono">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/40 text-xs">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start text-white/50 text-sm">
                        <ChevronRight size={14} className="mr-2 mt-0.5 flex-shrink-0 text-cyan-500/60" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          WHAT THEY SAY — Reviews Marquee
      ══════════════════════════════════════════ */}
      <div className="mt-24 relative">
        {/* Section label */}
        <motion.div
          className="text-center mb-10 px-6"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <p className="font-pixel text-[9px] text-purple-400 tracking-[0.3em] uppercase mb-3">
            &gt; what_they_say_
          </p>
          <div className="h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </motion.div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #050514, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #050514, transparent)' }} />

        {/* Scrolling marquee */}
        <div className="overflow-hidden pb-2">
          <motion.div
            className="flex gap-5 w-max"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ x: { duration: 45, repeat: Infinity, ease: 'linear' } }}
          >
            {doubled.map((review, i) => (
              <ReviewCard key={`${review.name}-${i}`} review={review} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

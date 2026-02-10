import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { FaStar, FaStarHalfAlt, FaQuoteLeft } from 'react-icons/fa';

const reviews = [
  {
    name: 'Andi Pratama',
    role: 'CEO, Fintools',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    month: 'December 2025',
    rating: 5,
    text: 'Rizki delivered an outstanding finance platform. His React & TypeScript skills are top-notch. Very reliable and communicative throughout the project.',
  },
  {
    name: 'Sarah Chen',
    role: 'Product Manager',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    month: 'October 2025',
    rating: 5,
    text: 'Exceptional frontend work! The UI components he built were pixel-perfect and highly performant. Would definitely work with him again.',
  },
  {
    name: 'Budi Santoso',
    role: 'CTO, Jagoscript',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    month: 'July 2025',
    rating: 4.5,
    text: 'Great collaboration on our Livewire platform. Rizki understands both design and functionality, delivering clean and responsive interfaces.',
  },
  {
    name: 'Maria Lopez',
    role: 'Project Lead',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    month: 'May 2025',
    rating: 5,
    text: 'Rizki transformed our complex requirements into an intuitive dashboard. His attention to detail and problem-solving skills are impressive.',
  },
  {
    name: 'David Kim',
    role: 'Startup Founder',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    month: 'March 2025',
    rating: 4.5,
    text: 'Fast delivery, clean code, and great communication. He built our MVP in record time with React and Node.js. Highly recommended!',
  },
  {
    name: 'Putri Wulandari',
    role: 'UI/UX Designer',
    avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
    month: 'January 2025',
    rating: 5,
    text: 'Working with Rizki was a pleasure. He translated my designs into flawless code with smooth animations and perfect responsiveness.',
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} className="text-yellow-400" size={16} />);
    } else if (i - 0.5 === rating) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" size={16} />);
    } else {
      stars.push(<FiStar key={i} className="text-yellow-400" size={16} />);
    }
  }
  return <div className="flex gap-0.5">{stars}</div>;
};

const ReviewCard = ({ review }) => (
  <div className="flex-shrink-0 w-[340px] md:w-[380px]">
    <motion.div
      className="relative p-6 rounded-2xl border border-gray-100 shadow-lg backdrop-blur-md bg-white/80 h-full"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <FaQuoteLeft className="absolute top-4 right-4 text-gray-100" size={32} />

      <div className="flex items-center gap-4 mb-4">
        <motion.img
          src={review.avatar}
          alt={review.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-gray-100 shadow-sm"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        <div>
          <h4 className="text-gray-800 font-semibold text-base">{review.name}</h4>
          <p className="text-gray-400 text-sm">{review.role}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <StarRating rating={review.rating} />
        <span className="text-gray-400 text-xs">{review.month}</span>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
    </motion.div>
  </div>
);

const About = () => {
  // Duplicate reviews for seamless infinite scroll
  const duplicated = [...reviews, ...reviews];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14 px-6"
      >
        <motion.h2
          className="text-gray-800 text-3xl md:text-5xl font-extrabold tracking-wide mb-3"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          Client Reviews
        </motion.h2>
        <p className="text-gray-400 text-base md:text-lg max-w-md mx-auto">
          What people say about working with me
        </p>
      </motion.div>

      {/* Marquee Row */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

        <motion.div
          className="flex gap-6 py-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {duplicated.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

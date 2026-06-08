import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

// Real testimonials (text from the original site) with dummy avatar photos.
const reviews = [
  {
    name: "Baddarudin",
    role: "Senior Developer, Fintools",
    img: "https://i.pravatar.cc/120?img=12",
    month: "Feb 2026",
    rating: 5,
    text: "Rizki delivered an outstanding finance platform. His React & TypeScript skills are top-notch.",
  },
  {
    name: "Kesa Purnama",
    role: "Mid Developer, PT 4Net Prima",
    img: "https://i.pravatar.cc/120?img=33",
    month: "Jan 2025",
    rating: 5,
    text: "During the contract period, you showed a good attitude, learned quickly, and adapted well to the work environment.",
  },
  {
    name: "Rizky Bachtiar",
    role: "Client",
    img: "https://i.pravatar.cc/120?img=15",
    month: "Dec 2025",
    rating: 5,
    text: "The task was completed correctly and met all requirements. The C++ implementation is clear, well-structured, and works exactly as expected.",
  },
  {
    name: "Manca Lopez",
    role: "CEO of Jagoscript",
    img: "https://i.pravatar.cc/120?img=52",
    month: "Jul 2025",
    rating: 5,
    text: "Fast delivery, clean code, and great communication. Built our MVP in record time.",
  },
];

const ReviewCard = ({ review }) => (
  <div className="relative w-[280px] shrink-0 rounded-2xl border border-neutral-200 bg-white p-5">
    <FaQuoteLeft className="absolute top-4 right-4 text-neutral-100" size={22} />
    <div className="flex items-center gap-3 mb-3">
      <img
        src={review.img}
        alt={review.name}
        loading="lazy"
        className="size-10 rounded-full object-cover border border-neutral-200"
      />
      <div>
        <h4 className="text-neutral-900 font-semibold text-sm">
          {review.name}
        </h4>
        <p className="text-neutral-400 text-xs">{review.role}</p>
      </div>
    </div>
    <div className="flex items-center gap-2 mb-2">
      <div className="flex gap-0.5">
        {Array.from({ length: review.rating }).map((_, i) => (
          <FaStar key={i} className="text-amber-400" size={11} />
        ))}
      </div>
      <span className="text-neutral-400 text-xs">{review.month}</span>
    </div>
    <p className="text-neutral-500 text-xs leading-relaxed">{review.text}</p>
  </div>
);

const Testimonials = () => {
  const loop = [...reviews, ...reviews, ...reviews];

  return (
    <section id="testimonials" className="bg-white pt-20 md:pt-28 pb-4">
      <div className="max-w-[1654px] mx-auto px-6 md:px-12 lg:px-[133px]">
        <div className="mb-10 md:mb-12">
          <p className="font-plexmono text-sm text-neutral-400 mb-4">
            // kind words
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-inter font-medium text-black leading-[1.08] tracking-tight text-[clamp(1.5rem,3.5vw,2.5rem)]"
          >
            What people I've worked with say
          </motion.h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
          <motion.div
            className="flex gap-5 w-max"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{ x: { duration: 32, repeat: Infinity, ease: "linear" } }}
          >
            {loop.map((review, i) => (
              <ReviewCard key={`${review.name}-${i}`} review={review} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaQuoteLeft } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

const reviews = [
  {
    name: "Baddarudin",
    role: "Senior Developer, Fintools",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQGSVCoY1DtI6Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731332122318?e=1772064000&v=beta&t=vwJH2OB7iXsDSj5O8NTaErEFvXCGUF11vd6dOd13AQ0",
    month: "Feb 2026",
    rating: 5,
    text: "Rizki delivered an outstanding finance platform. His React & TypeScript skills are top-notch.",
  },
  {
    name: "Kesa Purnama",
    role: "Mid Developer, Pt 4Net Prima",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQHXWUu5Mmzt_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698918123764?e=1772064000&v=beta&t=C_qn_CVCfsMFZrWvLyX0EcHccfkzu4aykaozFJJFvHY",
    month: "Jan 2025",
    rating: 5,
    text: "During the contract period, you showed a good attitude, learned quickly, and adapted well to the work environment. Moving forward, continue to build confidence and take initiative to maximize your contribution.",
  },
  {
    name: "Rizky Bachtiar",
    role: "Client",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ywDEoTHS-CjhkNudZLMd9pQgo07e1hJopA&s",
    month: "Dec 2025",
    rating: 5,
    text: "The task was completed correctly and met all the requirements. The C++ implementation is clear, well-structured, and functions as expected. Overall, the result demonstrates a solid understanding of the problem and its solution.",
  },
  {
    name: "Manca Lopez",
    role: "CEO of Jagoscript",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQFtnokVN3REGg/profile-displayphoto-shrink_200_200/B56Zg7_j8FG0AY-/0/1753353176781?e=1772064000&v=beta&t=vLJR3h4RdjqCi6iL1IGgA6zKrn_NAZwbLRIFcf0muM4",
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

const Reviews = () => {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
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
  );
};

export default Reviews;

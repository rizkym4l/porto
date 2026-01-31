import pklimg from "../assets/certif/pkl.jpg";
import React from "../assets/certif/React And Typescript Practical Guide_page-0001.jpg";
import Bnsp from "../assets/certif/Junior Coder BNSP_page-0001.jpg";
import Tailwind from "../assets/certif/Tailwind Master Udemy_page-0001.jpg";
import Eng from "../assets/certif/Eng Breaking.jpg";
import BasicJS from "../assets/certif/Basic Javascript.jpg";
import laravel from "../assets/certif/Laravel Zero to Hero Udemy PZN_page-0001.jpg";
import vue from "../assets/certif/Vue Js with Wakteknologi.jpg";
export const certifications = [
  {
    id: 1,
    name: "Junior Fullstack Developer Internship",
    provider: "PT 4net Prima Solusi (FPS)",
    year: "2024",
    image: pklimg,
    demo : "https://yasmavoca.netlify.app/",
    description: "Completed 6-month intensive internship program focusing on full-stack development. Worked on real-world projects including Clinic Queue System, Suzuki Autoplacement, and Web-based Complaint System. Gained hands-on experience with React, Node.js, Laravel, and PostgreSQL in production environments."
  },
  {
    id: 2,
    name: "React And Typescript Practical Guide",
    provider: "Udemy - Maximilian Schwarzmüller",
    year: "2025",
    image: React,
    description: "Comprehensive course covering React 19 and TypeScript best practices. Learned advanced concepts including hooks, context API, Redux integration, and TypeScript type systems. Built multiple production-ready applications with focus on performance optimization and code quality."
  },
  // {
  //   id: 3,
  //   name: "TOEIC Score 700+",
  //   provider: "ETS (Educational Testing Service)",
  //   year: "2024",
  //   image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
  //   description: "Achieved TOEIC score of 700+, demonstrating advanced English proficiency in professional and technical contexts. This certification validates strong communication skills essential for international remote collaboration and technical documentation."
  // },
  {
    id: 4,
    name: "Junior Coder Certification",
    provider: "Lembaga Sertifikasi Profesi (LSP)",
    year: "2024",
    image: Bnsp,
    description: "Nationally recognized professional certification in Indonesia for junior-level programming competency. Assessed on fundamental programming concepts, algorithm design, database management, and software development best practices."
  },
  {
    id: 5,
    name: "Tailwind Master",
    provider: "Udemy",
    year: "2024",
    image: Tailwind,
    description: "Advanced Tailwind CSS course covering utility-first design, responsive layouts, custom configurations, and component libraries. Mastered creating modern, performant UIs with minimal CSS and maximum reusability across projects."
  },
  {
    id: 6,
    name: "Front-End Development with Vue.js",
    provider: "WANTEKNOLOGI",
    year: "2024",
    image: vue,
    description: "Comprehensive Vue.js training program covering component architecture, state management with Vuex, routing, and API integration. Built multiple single-page applications with focus on progressive web app capabilities."
  },
  {
    id: 7,
    name: "Laravel Beginner to Advanced",
    provider: "Udemy",
    year: "2024",
    image: laravel,
    description: "Complete Laravel framework course from basics to advanced features. Covered MVC architecture, Eloquent ORM, authentication, API development, testing, and deployment. Built full-featured web applications with Laravel best practices."
  },
  {
    id: 8,
    name: "Basic JavaScript Programming",
    provider: "Dicoding Indonesia",
    year: "2023",
    image: BasicJS,
    description: "Foundation course in JavaScript programming covering ES6+ features, asynchronous programming, DOM manipulation, and modern JavaScript patterns. Valid until 2026. Essential groundwork for all frontend development work."
  },
  {
    id: 9,
    name: "English Communication",
    provider: "GOGA (Eng Breaking Course)",
    year: "2024",
    image: Eng,
    description: "Intensive English communication course focused on professional business communication, presentation skills, and technical discussions. Enhanced ability to communicate effectively in remote work environments with international teams."
  }
];
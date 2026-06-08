import pklimg from "../assets/certif/pkl.jpg";
import reactTs from "../assets/certif/React And Typescript Practical Guide_page-0001.jpg";
import Bnsp from "../assets/certif/Junior Coder BNSP_page-0001.jpg";
import Tailwind from "../assets/certif/Tailwind Master Udemy_page-0001.jpg";
import Eng from "../assets/certif/Eng Breaking.jpg";
import BasicJS from "../assets/certif/Basic Javascript.jpg";
import laravel from "../assets/certif/Laravel Zero to Hero Udemy PZN_page-0001.jpg";
import vue from "../assets/certif/Vue Js with Wakteknologi.jpg";
import claudeCode from "../assets/certif/certificate-ckkfrtzn6wox-1773102197 (2)_page-0001.jpg";
import bootdevOOP from "../assets/certif/bootdev-python-oop.png";
import bootdevBasics from "../assets/certif/bootdev-python-basics.png";
import cyberlabs from "../assets/certif/BackEnd Delevoper with Cyberlabs.png";

export const certifications = [
  {
    id: 1,
    name: "Junior Coder Professional Certification",
    provider: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2024",
    image: Bnsp,
    description:
      "Indonesia's nationally recognized professional certification (BNSP/LSP) for junior-level programming competency. Assessed on fundamental programming concepts, algorithm design, database management, and software development best practices.",
  },
  {
    id: 2,
    name: "Claude Code in Action",
    provider: "Anthropic",
    year: "2026",
    image: claudeCode,
    description:
      "Professional certification from Anthropic covering practical usage of Claude Code — an agentic AI coding assistant. Covers AI-assisted development workflows including code generation, debugging, refactoring, codebase exploration, and integrating AI tools into modern software development processes.",
  },
  {
    id: 3,
    name: "Junior Fullstack Developer Internship",
    provider: "PT 4Net Prima Solusi (FPS)",
    year: "2024",
    image: pklimg,
    description:
      "Completed an intensive internship program focusing on full-stack development. Worked on real-world projects including the Clinic Queue System, Suzuki Autoplacement, and a Web-based Complaint System — gaining hands-on experience with React, Node.js, Laravel, and PostgreSQL in production environments.",
  },
  {
    id: 4,
    name: "React and TypeScript Practical Guide",
    provider: "Udemy — Maximilian Schwarzmüller",
    year: "2025",
    image: reactTs,
    description:
      "Comprehensive course covering React and TypeScript best practices — advanced hooks, context API, Redux integration, and TypeScript type systems. Built multiple production-ready applications with a focus on performance and code quality.",
  },
  {
    id: 5,
    name: "Learn Object-Oriented Programming in Python",
    provider: "Boot.dev",
    year: "2026",
    image: bootdevOOP,
    description:
      "Boot.dev course on object-oriented programming in Python — classes, inheritance, encapsulation, and polymorphism — with hands-on practice writing clean, maintainable OOP code.",
  },
  {
    id: 6,
    name: "Learn to Code in Python",
    provider: "Boot.dev",
    year: "2026",
    image: bootdevBasics,
    description:
      "Boot.dev's foundational Python course covering syntax, data structures, control flow, functions, and core programming fundamentals through hands-on, practice-driven lessons.",
  },
  {
    id: 7,
    name: "Laravel: Beginner to Advanced",
    provider: "Udemy",
    year: "2024",
    image: laravel,
    description:
      "Complete Laravel framework course from basics to advanced features — MVC architecture, Eloquent ORM, authentication, API development, testing, and deployment of full-featured web applications.",
  },
  {
    id: 8,
    name: "Backend Development with JavaScript Framework",
    provider: "Cyberlabs",
    year: "2023",
    image: cyberlabs,
    description:
      "Backend development training with a JavaScript framework — building RESTful APIs, server-side logic, authentication, and database integration for scalable web applications.",
  },
  {
    id: 9,
    name: "Front-End Development with Vue.js",
    provider: "WANTEKNOLOGI",
    year: "2024",
    image: vue,
    description:
      "Comprehensive Vue.js training covering component architecture, state management with Vuex, routing, and API integration — building multiple single-page applications with PWA capabilities.",
  },
  {
    id: 10,
    name: "Tailwind Master",
    provider: "Udemy",
    year: "2024",
    image: Tailwind,
    description:
      "Advanced Tailwind CSS course covering utility-first design, responsive layouts, custom configurations, and component libraries — building modern, performant UIs with maximum reusability.",
  },
  {
    id: 11,
    name: "Basic JavaScript Programming",
    provider: "Dicoding Indonesia",
    year: "2023",
    image: BasicJS,
    description:
      "Foundation course in JavaScript covering ES6+ features, asynchronous programming, DOM manipulation, and modern JavaScript patterns — essential groundwork for all frontend development.",
  },
  {
    id: 12,
    name: "English Communication",
    provider: "GOGA (Eng Breaking Course)",
    year: "2024",
    image: Eng,
    description:
      "Intensive English communication course focused on professional business communication, presentation skills, and technical discussions for effective collaboration with international teams.",
  },
];

import ymvc5 from "../assets/yasmavoca/1.png";
import ymvc2 from "../assets/yasmavoca/duwa.png";
import ymvc3 from "../assets/yasmavoca/tiga.png";
import ymvc4 from "../assets/yasmavoca/empat.png";
import ymvc1 from "../assets/yasmavoca/limo.png";

const ymvcImages = [ymvc1, ymvc2, ymvc3, ymvc4, ymvc5];

import utama from "../assets/finance/Pertama.png";
import fnc1 from "../assets/finance/satu.png";
import fnc2 from "../assets/finance/dua.png";
import fnc5 from "../assets/finance/lima.png";
import fnc6 from "../assets/finance/enam.png";
import fnc7 from "../assets/finance/tujuh.png";

const fncImages = [utama, fnc1, fnc2, fnc5, fnc6, fnc7];

import tm1 from "../assets/TM/pertama.png";
import tm2 from "../assets/TM/kedua.png";
import tm3 from "../assets/TM/ketiga.png";
import tm4 from "../assets/TM/keempat.png";
import tm5 from "../assets/TM/kelima.png";
import tm6 from "../assets/TM/keenam.png";
import tm7 from "../assets/TM/ketujuh.png";
import tm8 from "../assets/TM/kedelapan.png";
import tm9 from "../assets/TM/kesembilan.png";

const tmImages = [tm1, tm2, tm3, tm4, tm5, tm6, tm7, tm8, tm9];

import inter1 from "../assets/inter/satu.png"
import inter2 from "../assets/inter/dua.png"
import inter3 from "../assets/inter/tiga.png"
import inter4 from "../assets/inter/empat.png"

const interImg = [inter1,inter2,inter3,inter4]
import tmAPI from "../assets/TM/as.png";
import D from "../assets/Discover JagoScript — a digital marketplace built to empower your ideas.Sell and buy digital pr.webp";
export const projects = [
  {
    id: 1,
    name: "Yasmavoca Web Profile",
    description:
      "Company profile website for Yasmavoca, an avocado shop based in Sukabumi, Indonesia. Designed with a clean and modern UI to showcase brand identity, products, and business information. Built using React and Tailwind CSS with full responsiveness across devices.",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind",
      "HTML",
      "frontend engineering",
    ],
    image: ymvcImages,
    github: "https://github.com/rizkym4l/yasmavocaCPDeploy",
    demo: "https://yasmavoca.netlify.app",
  },
  {
    id: 2,
    name: "Task Management System Frontend",
    description:
      "(Email : admin@gmail.com | Password:admin123 | (gmail : developer@gmail.com | Password:dev123) Frontend application for a task management system that helps teams organize tasks, track progress, and manage workflows efficiently. Features include authentication, task CRUD operations, dashboards, and state management for scalable usage. ",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Redux",
      "fullstack engineering",
    ],
    image: tmImages,
    github: "https://github.com/rizkym4l/PM_fe",
    demo: "https://task-manager-rizkimaulanaarf.netlify.app/dashboard",
  },
  {
    id: 5,
    name: "Finance Web Platform",
    description:
      "Enterprise-level finance web platform developed for a water utility company in Bogor, Indonesia. The system handles transaction management, financial reporting, invoicing, and data visualization dashboards to support daily financial operations.",
    techStack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Ant Design",
      "Tailwind CSS",
      "frontend engineering",
    ],
    image: fncImages,
    github: null,
    demo: null,
  },
  {
    id: 3,
    name: "Web-based Internal Complaint System",
    description:
      "Internal web application developed for PT 4net Prima Solusi (Depok) to manage employee and internal complaints. The system allows users to submit complaints online, communicate with administrators via a real-time chat feature, and track complaint resolution status to improve transparency and operational efficiency.",
    techStack: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    image: interImg,
    github: null,
    demo: null,
  },
  {
    id: 4,
    name: "Creative Hub Platform",
    description:
      "Creative hub web platform designed for content creators and communities. Features dynamic UI components, smooth interactivity, and modular architecture using Livewire and Alpine.js without requiring full page reloads.",
    techStack: ["Livewire", "Laravel", "Tailwind CSS", "Alpine.js"],
    image: D,
    github: null,
    demo: null,
  },
  {
    id: 6,
    name: "Task Management System API",
    description:
      "RESTful API for a task management system that handles authentication, task data, user management, and business logic. Built with a scalable architecture to support frontend applications and future integrations.",
    techStack: [
      "Node.js",
      "MongoDB",
      "Express",
      "JWT",
      "REST API",
      "backend engineering",
    ],
    image: tmAPI,
    github: "https://github.com/rizkym4l/PM_api",
    demo: "https://exquisite-llama-3cb720.netlify.app/",
  },
];

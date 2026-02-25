import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import {
  Github, ExternalLink, ChevronLeft, ChevronRight,
  X, Play, Briefcase, User, Zap, TrendingUp,
} from "lucide-react";
import Swal from "sweetalert2";

/* ─── helpers ─── */
const getImages = (p) => (Array.isArray(p.image) ? p.image : [p.image]);

/* ─── Toast ─── */
const showToast = (message, icon = "info") =>
  Swal.fire({
    text: message, icon, toast: true, position: "top-end",
    showConfirmButton: false, timer: 2000, timerProgressBar: true,
    background: "#ffffff", color: "#111827",
    iconColor: icon === "info" ? "#6366f1" : "#ef4444",
    didOpen: (t) => { t.style.marginTop = "4rem"; },
  });

/* ─── Image Carousel (inside modal) ─── */
const ImageCarousel = ({ project, imgIndex, setImgIndex }) => {
  const images = getImages(project);
  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl bg-gray-100 group">
      <AnimatePresence mode="wait">
        <motion.img
          key={imgIndex}
          src={images[imgIndex]}
          alt={project.name}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        />
      </AnimatePresence>
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); setImgIndex((imgIndex - 1 + images.length) % images.length); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow"
          >
            <ChevronLeft size={15} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setImgIndex((imgIndex + 1) % images.length); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow"
          >
            <ChevronRight size={15} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setImgIndex(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === imgIndex ? "bg-indigo-500 w-4" : "bg-white/60 w-1.5"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

/* ─── Project Detail Modal ─── */
const ProjectModal = ({ project, onClose }) => {
  const [imgIdx, setImgIdx] = useState(0);
  if (!project) return null;

  const handleGithub = () => {
    if (project.comingSoon) showToast("Coming Soon! Stay tuned.", "info");
    else if (project.github) window.open(project.github, "_blank");
    else showToast("GitHub link is private", "error");
  };
  const handleDemo = () => {
    if (project.comingSoon) showToast("Coming Soon! Stay tuned.", "info");
    else if (project.demo) window.open(project.demo.startsWith("http") ? project.demo : `https://${project.demo}`, "_blank", "noopener,noreferrer");
    else showToast("Demo link is private", "error");
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <motion.div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
        >
          <X size={17} />
        </button>

        <div className="flex gap-3 p-5 pb-0">
          <div className="flex-1 h-56 sm:h-72">
            <ImageCarousel project={project} imgIndex={imgIdx} setImgIndex={setImgIdx} />
          </div>
          {project.video && (
            <div className="w-32 sm:w-44 flex-shrink-0 flex flex-col gap-2">
              <div className="flex items-center gap-1 text-emerald-600 text-[10px] font-semibold">
                <Play size={10} /> Live Demo
              </div>
              <video controls className="w-full flex-1 min-h-0 rounded-xl border border-gray-200 bg-gray-50 object-contain" preload="metadata" playsInline>
                <source src={project.video} type="video/mp4" />
              </video>
            </div>
          )}
        </div>

        <div className="p-5 sm:p-7">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.type === "client" ? (
              <span className="flex items-center gap-1 px-2.5 py-1 bg-amber-50 border border-amber-200 text-amber-600 rounded-full text-[10px] font-semibold">
                <Briefcase size={10} /> Client
              </span>
            ) : (
              <span className="flex items-center gap-1 px-2.5 py-1 bg-violet-50 border border-violet-200 text-violet-600 rounded-full text-[10px] font-semibold">
                <User size={10} /> Personal
              </span>
            )}
            {project.featured && (
              <span className="flex items-center gap-1 px-2.5 py-1 bg-yellow-50 border border-yellow-200 text-yellow-600 rounded-full text-[10px] font-semibold">
                <Zap size={10} /> Featured
              </span>
            )}
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 leading-snug">{project.name}</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
          {project.impact && (
            <div className="flex items-start gap-2.5 p-3 bg-indigo-50 rounded-xl border border-indigo-100 mb-5">
              <TrendingUp size={15} className="text-indigo-500 mt-0.5 flex-shrink-0" />
              <span className="text-indigo-700 text-sm font-medium">{project.impact}</span>
            </div>
          )}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.map((tech, i) => (
              <span key={i} className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleGithub}
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors"
            >
              <Github size={15} /> {project.comingSoon ? "Coming Soon" : "Source Code"}
            </button>
            <button
              onClick={handleDemo}
              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors"
            >
              <ExternalLink size={15} />
              {project.video ? "Try Beta" : project.comingSoon ? "Coming Soon" : "Live Demo"}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Showcase Card ─── */
const ProjectShowcaseCard = ({ project, onClick }) => {
  const firstImg = getImages(project)[0];
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2 }}
      className="cursor-pointer group flex flex-col md:flex-row gap-6 p-5 rounded-3xl border border-gray-200 bg-white hover:shadow-md hover:border-gray-300 transition-all duration-300"
    >
      {/* Image — left 62% */}
      <div className="relative md:w-[62%] flex-shrink-0 rounded-2xl overflow-hidden border border-gray-200 aspect-video bg-gray-100">
        <img
          src={firstImg}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* small indicator dot */}
        <div className="absolute top-3 right-3 w-2 h-2 bg-red-400 rounded-full" />

        {/* Badges — top left */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          {project.type === "client" ? (
            <span className="flex items-center gap-1 px-2 py-0.5 bg-amber-500/85 backdrop-blur-sm text-white text-[9px] font-semibold rounded-full">
              <Briefcase size={8} /> Client
            </span>
          ) : (
            <span className="flex items-center gap-1 px-2 py-0.5 bg-violet-500/85 backdrop-blur-sm text-white text-[9px] font-semibold rounded-full">
              <User size={8} /> Personal
            </span>
          )}
          {project.featured && (
            <span className="flex items-center gap-1 px-2 py-0.5 bg-yellow-500/85 backdrop-blur-sm text-white text-[9px] font-semibold rounded-full">
              <Zap size={8} /> Featured
            </span>
          )}
          {project.video && (
            <span className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500/85 backdrop-blur-sm text-white text-[9px] font-semibold rounded-full">
              <Play size={8} /> Beta
            </span>
          )}
        </div>
      </div>

      {/* Info — right 38% */}
      <div className="md:w-[38%] flex flex-col justify-center py-1">
        <p className="text-gray-400 text-[9px] font-semibold tracking-[0.25em] uppercase mb-2">
          {project.type === "client" ? "Client Project" : "Personal Project"}
        </p>
        <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2 leading-snug group-hover:text-indigo-600 transition-colors duration-200">
          {project.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 bg-gray-100 border border-gray-200 text-gray-600 rounded-full text-[10px] font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2.5 py-0.5 bg-gray-50 border border-gray-200 text-gray-400 rounded-full text-[10px]">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-gray-400 text-xs group-hover:text-indigo-600 transition-colors duration-200">
          View Details <ExternalLink size={12} />
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Main ─── */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-[#F0F0F0] relative overflow-hidden">

      {/* subtle dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #d1d5db 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase mb-4">
            Featured Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Featured
          </h2>
          <h2
            className="text-4xl md:text-5xl font-black italic text-gray-500 leading-tight"
            style={{ fontFamily: "'Georgia','Times New Roman',serif" }}
          >
            web development
          </h2>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            projects
          </h2>
        </motion.div>

        {/* Projects list — vertical showcase */}
        <div className="space-y-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <ProjectShowcaseCard project={p} onClick={() => setSelectedProject(p)} />
            </motion.div>
          ))}
        </div>

        {/* hint */}
        <motion.p
          className="text-center text-gray-400 text-xs mt-8"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.5 }}
        >
          Click any project to view full details
        </motion.p>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

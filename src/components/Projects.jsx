import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import {
  Github, ExternalLink, ChevronLeft, ChevronRight,
  Sparkles, TrendingUp, Zap, Play, User, Briefcase,
} from "lucide-react";
import Swal from "sweetalert2";

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [showcaseProject, setShowcaseProject] = useState(projects[0]);
  const showcaseRef = useRef(null);

  const showToast = (message, icon = "info") => {
    Swal.fire({
      text: message, icon, toast: true, position: "top-end",
      showConfirmButton: false, timer: 2000, timerProgressBar: true,
      background: "#0d1117", color: "#ffffff",
      iconColor: icon === "info" ? "#22d3ee" : "#ef4444",
      customClass: { popup: "colored-toast" },
      didOpen: (toast) => { toast.style.marginTop = "4rem"; },
    });
  };

  const handlePrevImage = (id, total, e) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => ({ ...prev, [id]: ((prev[id] || 0) - 1 + total) % total }));
  };
  const handleNextImage = (id, total, e) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => ({ ...prev, [id]: ((prev[id] || 0) + 1) % total }));
  };
  const getImages = (p) => Array.isArray(p.image) ? p.image : [p.image];
  const getCurrentImage = (p) => getImages(p)[currentImageIndex[p.id] || 0];
  const getFirstImage = (p) => getImages(p)[0];

  const handleGithubClick = (p) => {
    if (p.comingSoon) showToast("Coming Soon! Stay tuned.", "info");
    else if (p.github) window.open(p.github, "_blank");
    else showToast("Sorry, GitHub link is Private", "error");
  };
  const handleDemoClick = (p) => {
    if (p.comingSoon) showToast("Coming Soon! Stay tuned.", "info");
    else if (p.demo) window.open(p.demo.startsWith("http") ? p.demo : `https://${p.demo}`, "_blank", "noopener,noreferrer");
    else showToast("Sorry, Demo link is Private", "error");
  };
  const handleSelectProject = (p) => {
    if (p.id === showcaseProject.id) return;
    setShowcaseProject(p);
    showcaseRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const ImageCarousel = ({ project, className = "", rounded = "rounded-2xl" }) => {
    const images = getImages(project);
    return (
      <div className={`relative overflow-hidden ${rounded} group ${className}`}>
        <img src={getCurrentImage(project)} alt={project.name} className="w-full h-full object-cover" />
        {images.length > 1 && (
          <>
            <button onClick={(e) => handlePrevImage(project.id, images.length, e)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 backdrop-blur-sm">
              <ChevronLeft size={16} />
            </button>
            <button onClick={(e) => handleNextImage(project.id, images.length, e)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 backdrop-blur-sm">
              <ChevronRight size={16} />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, idx) => (
                <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${
                  (currentImageIndex[project.id] || 0) === idx ? "bg-cyan-400 w-5" : "bg-white/30 w-1.5"
                }`} />
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 bg-[#050514] relative overflow-hidden">

      {/* Pixel dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
        backgroundSize: '28px 28px',
      }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <p className="font-pixel text-[9px] text-cyan-400 tracking-[0.3em] uppercase mb-4">
            &gt; featured_projects_
          </p>
          <h2 className="font-pixel text-2xl md:text-3xl text-white mb-5">PROJECTS</h2>
          <div className="h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent mb-4" />
          <p className="text-white/30 text-sm font-pixelify">Real-world applications with measurable impact</p>
        </motion.div>

        {/* ── SHOWCASE ── */}
        <div ref={showcaseRef} className="scroll-mt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={showcaseProject.id}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
              className="mb-16"
            >
              {/* Badges row */}
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                {showcaseProject.featured && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500/15 border border-yellow-500/30 rounded-full text-yellow-400 text-[10px] font-pixel">
                    <Zap size={11} /> Featured
                  </div>
                )}
                {showcaseProject.type === "client" ? (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/15 border border-amber-500/30 rounded-full text-amber-400 text-[10px] font-pixel">
                    <Briefcase size={11} /> Client Project
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-violet-500/15 border border-violet-500/30 rounded-full text-violet-400 text-[10px] font-pixel">
                    <User size={11} /> Personal Project
                  </div>
                )}
                {showcaseProject.video && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/15 border border-green-500/30 rounded-full text-green-400 text-[10px] font-pixel">
                    <Play size={11} /> Beta
                  </div>
                )}
              </div>

              <div className="md:flex gap-10 items-start">
                {/* Images */}
                <div className="md:w-3/5 mb-8 md:mb-0">
                  <div className="flex gap-3 h-64 md:h-80">
                    <div className="relative flex-1 h-full">
                      <ImageCarousel project={showcaseProject} className="h-full" rounded="rounded-2xl" />
                    </div>
                    {showcaseProject.video && (
                      <div className="flex flex-col gap-2 w-[100px] md:w-[150px] flex-shrink-0 h-full">
                        <div className="flex items-center gap-1.5">
                          <Play size={11} className="text-green-400" />
                          <span className="text-[10px] font-pixel text-green-400">Demo</span>
                        </div>
                        <video controls className="w-full flex-1 min-h-0 rounded-xl border border-white/10 object-contain bg-black/40" preload="metadata" playsInline>
                          <source src={showcaseProject.video} type="video/mp4" />
                        </video>
                      </div>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="md:w-2/5">
                  <h3 className="font-pixel text-lg text-white mb-4 leading-snug">{showcaseProject.name}</h3>
                  <p className="text-white/60 mb-5 leading-relaxed text-sm">{showcaseProject.description}</p>

                  {showcaseProject.impact && (
                    <div className="flex items-start gap-2 mb-5 p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                      <TrendingUp size={15} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-cyan-300 text-sm">{showcaseProject.impact}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {showcaseProject.techStack.map((tech, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-white/5 border border-white/10 text-white/60 rounded-lg font-mono text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button onClick={() => handleGithubClick(showcaseProject)}
                      className="flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 text-white rounded-xl text-xs font-pixel hover:bg-white/15 transition-colors">
                      <Github size={15} /> {showcaseProject.comingSoon ? "Coming Soon" : "Code"}
                    </button>
                    <button onClick={() => handleDemoClick(showcaseProject)}
                      className="flex items-center gap-2 px-5 py-2.5 bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 rounded-xl text-xs font-pixel hover:bg-cyan-500/25 transition-colors">
                      <ExternalLink size={15} />
                      {showcaseProject.video ? "Try Beta" : showcaseProject.comingSoon ? "Coming Soon" : "Live Demo"}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── PROJECT GRID ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-white/20" />
            <span className="font-pixel text-[8px] text-white/30 uppercase tracking-widest">All Projects</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects.map((project) => {
              const isActive = showcaseProject.id === project.id;
              return (
                <motion.div
                  key={project.id}
                  onClick={() => handleSelectProject(project)}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ${
                    isActive
                      ? "border-2 border-cyan-500 shadow-xl shadow-cyan-500/20"
                      : "border-2 border-white/10 hover:border-white/25"
                  }`}
                >
                  <div className="relative h-28 sm:h-32 overflow-hidden bg-black/40">
                    <img src={getFirstImage(project)} alt={project.name} className="w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {isActive && (
                      <div className="absolute inset-0 bg-cyan-900/30 flex items-center justify-center">
                        <div className="px-2.5 py-1 bg-cyan-500 text-black text-[9px] font-pixel rounded-full">
                          Now Showing
                        </div>
                      </div>
                    )}

                    {/* Type badge */}
                    <div className="absolute top-2 left-2">
                      {project.type === "client" ? (
                        <div className="flex items-center gap-1 px-1.5 py-0.5 bg-amber-500/80 backdrop-blur-sm text-white text-[8px] font-pixel rounded-full">
                          <Briefcase size={8} /> Client
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 px-1.5 py-0.5 bg-violet-500/80 backdrop-blur-sm text-white text-[8px] font-pixel rounded-full">
                          <User size={8} /> Personal
                        </div>
                      )}
                    </div>

                    {project.featured && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-yellow-400/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Zap size={10} className="text-yellow-900" />
                      </div>
                    )}

                    <div className="absolute bottom-2 left-2 right-2">
                      <h4 className="text-white text-[10px] font-pixel truncate drop-shadow-lg leading-snug">{project.name}</h4>
                    </div>
                  </div>

                  <div className="p-2.5 bg-white/5 border-t border-white/5">
                    <div className="flex gap-1 overflow-hidden">
                      {project.techStack.slice(0, 2).map((tech, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 bg-white/5 border border-white/10 text-white/40 rounded text-[9px] font-mono truncate">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

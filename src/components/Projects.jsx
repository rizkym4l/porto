import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "./ui/badge";
import { projects } from "../data/projects";
import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Zap,
  Play,
  User,
  Briefcase,
} from "lucide-react";
import Swal from "sweetalert2";

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [showcaseProject, setShowcaseProject] = useState(projects[0]);
  const showcaseRef = useRef(null);

  const showToast = (message, icon = "info") => {
    Swal.fire({
      text: message,
      icon: icon,
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      background: "#1f2937",
      color: "#ffffff",
      iconColor: icon === "info" ? "#60a5fa" : "#ef4444",
      customClass: { popup: "colored-toast" },
      didOpen: (toast) => {
        toast.style.marginTop = "4rem";
      },
    });
  };

  const handlePrevImage = (projectId, totalImages, e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const handleNextImage = (projectId, totalImages, e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages,
    }));
  };

  const getCurrentImage = (project) => {
    const images = Array.isArray(project.image)
      ? project.image
      : [project.image];
    const index = currentImageIndex[project.id] || 0;
    return images[index];
  };

  const getImages = (project) => {
    return Array.isArray(project.image) ? project.image : [project.image];
  };

  const getFirstImage = (project) => {
    return Array.isArray(project.image) ? project.image[0] : project.image;
  };

  const handleGithubClick = (project) => {
    if (project.comingSoon) {
      showToast("Coming Soon! Stay tuned.", "info");
    } else if (project.github) {
      window.open(project.github, "_blank");
    } else {
      showToast("Sorry, GitHub link is Private", "error");
    }
  };

  const handleDemoClick = (project) => {
    if (project.comingSoon) {
      showToast("Coming Soon! Stay tuned.", "info");
    } else if (project.demo) {
      const url = project.demo.startsWith("http")
        ? project.demo
        : `https://${project.demo}`;
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      showToast("Sorry, Demo link is Private", "error");
    }
  };

  const handleSelectProject = (project) => {
    if (project.id === showcaseProject.id) return;
    setShowcaseProject(project);
    showcaseRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const ImageCarousel = ({ project, className = "", rounded = "rounded-2xl" }) => {
    const images = getImages(project);
    const hasMultiple = images.length > 1;

    return (
      <div
        className={`relative overflow-hidden ${rounded} group ${className}`}
      >
        <img
          src={getCurrentImage(project)}
          alt={project.name}
          className="w-full h-full object-cover"
        />

        {hasMultiple && (
          <>
            <button
              onClick={(e) => handlePrevImage(project.id, images.length, e)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-md"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={(e) => handleNextImage(project.id, images.length, e)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-md"
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 shadow-sm ${
                    (currentImageIndex[project.id] || 0) === idx
                      ? "bg-gray-900 w-6"
                      : "bg-gray-400/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 rounded-2xl mb-6"
          >
            <Sparkles size={32} className="text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-4" />
          <p className="text-gray-500 max-w-lg mx-auto">
            Real-world applications with measurable impact
          </p>
        </motion.div>

        {/* ===== SHOWCASE AREA ===== */}
        <div ref={showcaseRef} className="scroll-mt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={showcaseProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-16"
            >
              {/* Badges */}
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                {showcaseProject.featured && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 rounded-full text-white text-xs font-medium">
                    <Zap size={12} className="text-yellow-400" />
                    Featured
                  </div>
                )}
                {showcaseProject.type === "client" ? (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold border border-amber-200">
                    <Briefcase size={12} />
                    Client Project
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-violet-50 text-violet-700 rounded-full text-xs font-semibold border border-violet-200">
                    <User size={12} />
                    Personal Project
                  </div>
                )}
                {showcaseProject.video && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-semibold border border-green-200">
                    <Play size={12} />
                    Beta
                  </div>
                )}
              </div>

              <div className="md:flex gap-10 items-start">
                {/* Left: Image + Video side by side */}
                <div className="md:w-3/5 mb-8 md:mb-0">
                  <div className="flex gap-3 h-72 md:h-96">
                    <div className="relative flex-1 h-full">
                      <ImageCarousel
                        project={showcaseProject}
                        className="h-full shadow-xl"
                        rounded="rounded-2xl"
                      />
                    </div>
                    {showcaseProject.video && (
                      <div className="flex flex-col items-center gap-2 w-[100px] md:w-[160px] flex-shrink-0 h-full">
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <Play size={12} className="text-gray-900" />
                          <span className="text-[11px] font-semibold text-gray-900">Demo</span>
                        </div>
                        <video
                          controls
                          className="w-full flex-1 min-h-0 rounded-xl shadow-lg border border-gray-200 object-contain"
                          preload="metadata"
                          playsInline
                        >
                          <source src={showcaseProject.video} type="video/mp4" />
                        </video>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Content */}
                <div className="md:w-2/5">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {showcaseProject.name}
                  </h3>

                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {showcaseProject.description}
                  </p>

                  {showcaseProject.impact && (
                    <div className="flex items-start gap-2 mb-5 p-3 bg-blue-50 rounded-xl border border-blue-100">
                      <TrendingUp size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-700 text-sm font-medium">
                        {showcaseProject.impact}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {showcaseProject.techStack.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-white border-gray-200 text-gray-700 font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleGithubClick(showcaseProject)}
                      className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                      <Github size={16} />
                      {showcaseProject.comingSoon ? "Coming Soon" : "View Code"}
                    </button>
                    <button
                      onClick={() => handleDemoClick(showcaseProject)}
                      className="flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-xl text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <ExternalLink size={16} />
                      {showcaseProject.video ? "Try Beta" : showcaseProject.comingSoon ? "Coming Soon" : "Live Demo"}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ===== PROJECT SELECTOR GRID ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gray-300" />
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">All Projects</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {projects.map((project) => {
              const isActive = showcaseProject.id === project.id;
              const isClient = project.type === "client";
              return (
                <motion.div
                  key={project.id}
                  onClick={() => handleSelectProject(project)}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ${
                    isActive
                      ? "border-2 border-gray-900 shadow-xl ring-4 ring-gray-900/10"
                      : "border-2 border-transparent shadow-md hover:shadow-xl hover:border-gray-200"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative h-32 sm:h-36 overflow-hidden bg-gray-100">
                    <img
                      src={getFirstImage(project)}
                      alt={project.name}
                      className={`w-full h-full object-cover transition-transform duration-500 ${!isActive ? 'group-hover:scale-105' : ''}`}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {isActive && (
                      <div className="absolute inset-0 bg-gray-900/20 flex items-center justify-center backdrop-blur-[1px]">
                        <div className="px-3 py-1.5 bg-gray-900 text-white text-[10px] font-bold rounded-full shadow-lg">
                          Now Showing
                        </div>
                      </div>
                    )}

                    {/* Type badge on thumbnail */}
                    <div className="absolute top-2 left-2">
                      {isClient ? (
                        <div className="flex items-center gap-1 px-2 py-0.5 bg-amber-500/90 backdrop-blur-sm text-white text-[9px] font-bold rounded-full shadow-sm">
                          <Briefcase size={9} />
                          Client
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 px-2 py-0.5 bg-violet-500/90 backdrop-blur-sm text-white text-[9px] font-bold rounded-full shadow-sm">
                          <User size={9} />
                          Personal
                        </div>
                      )}
                    </div>

                    {/* Featured star */}
                    {project.featured && (
                      <div className="absolute top-2 right-2">
                        <div className="w-6 h-6 bg-yellow-400/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                          <Zap size={11} className="text-yellow-900" />
                        </div>
                      </div>
                    )}

                    {/* Project name overlay on image */}
                    <div className="absolute bottom-2 left-2 right-2">
                      <h4 className="text-white text-xs sm:text-sm font-bold truncate drop-shadow-lg">
                        {project.name}
                      </h4>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-2.5 bg-white">
                    <div className="flex gap-1 overflow-hidden">
                      {project.techStack.slice(0, 2).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded text-[10px] font-mono truncate"
                        >
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

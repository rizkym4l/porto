import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "./ui/badge";
import { projects } from "../data/projects";
import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  TrendingUp,
  Clock,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import Swal from "sweetalert2";

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);

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

  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  const ImageCarousel = ({ project, className = "", rounded = "rounded-2xl" }) => {
    const images = getImages(project);
    const hasMultiple = images.length > 1;

    return (
      <div
        className={`relative overflow-hidden ${rounded} group cursor-pointer ${className}`}
        onClick={() => setSelectedProject(project)}
      >
        <motion.img
          src={getCurrentImage(project)}
          alt={project.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5 }}
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
          className="text-center mb-20"
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

        {/* ===== FEATURED PROJECT — Sign Language ===== */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-24"
          >
            {/* Featured label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 rounded-full text-white text-xs font-medium">
                <Zap size={12} className="text-yellow-400" />
                Featured Project
              </div>
              {featuredProject.comingSoon && (
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold border border-blue-200"
                >
                  <Clock size={12} />
                  Coming Soon
                </motion.div>
              )}
            </motion.div>

            <div className="md:flex gap-10 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:w-3/5 mb-8 md:mb-0"
              >
                <div className="relative">
                  <motion.div
                    className="absolute -inset-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl -z-10"
                    animate={{ rotate: [0, 1, 0, -1, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <ImageCarousel
                    project={featuredProject}
                    className="h-72 md:h-96 shadow-xl"
                    rounded="rounded-2xl"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="md:w-2/5"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredProject.name}
                </h3>

                <p className="text-gray-600 mb-5 leading-relaxed">
                  {featuredProject.description}
                </p>

                {featuredProject.impact && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex items-start gap-2 mb-5 p-3 bg-blue-50 rounded-xl border border-blue-100"
                  >
                    <TrendingUp size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-700 text-sm font-medium">
                      {featuredProject.impact}
                    </span>
                  </motion.div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.techStack.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + idx * 0.04 }}
                    >
                      <Badge
                        variant="outline"
                        className="bg-white border-gray-200 text-gray-700 font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleGithubClick(featuredProject)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    <Github size={16} />
                    Coming Soon
                  </button>
                  <button
                    onClick={() => handleDemoClick(featuredProject)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-xl text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Coming Soon
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* ===== REGULAR PROJECTS — Alternating Showcase ===== */}
        <div className="space-y-24">
          {regularProjects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className={`md:flex gap-10 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="md:w-3/5 mb-8 md:mb-0"
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ImageCarousel
                        project={project}
                        className="h-56 md:h-80 shadow-lg border border-gray-100"
                        rounded="rounded-2xl"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="md:w-2/5"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-gray-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="w-8 h-px bg-gray-300" />
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {project.name}
                    </h3>

                    {project.impact && (
                      <div className="flex items-start gap-2 mb-3">
                        <TrendingUp size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-green-700 text-xs font-medium">
                          {project.impact}
                        </span>
                      </div>
                    )}

                    <p className="text-gray-500 text-sm mb-5 leading-relaxed line-clamp-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => handleGithubClick(project)}
                        className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors group/btn"
                      >
                        <Github size={16} />
                        <span>Code</span>
                        <ArrowUpRight size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </button>
                      <button
                        onClick={() => handleDemoClick(project)}
                        className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors group/btn"
                      >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                        <ArrowUpRight size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </button>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors group/btn ml-auto"
                      >
                        <span>Details</span>
                        <ArrowUpRight size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full z-10 shadow-md"
              >
                <X size={20} />
              </button>

              {/* Image */}
              <div className="relative h-80 md:h-96 bg-gray-100">
                <img
                  src={getCurrentImage(selectedProject)}
                  alt={selectedProject.name}
                  className="w-full h-full object-contain"
                />

                {getImages(selectedProject).length > 1 && (
                  <>
                    <button
                      onClick={(e) =>
                        handlePrevImage(
                          selectedProject.id,
                          getImages(selectedProject).length,
                          e
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-md"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) =>
                        handleNextImage(
                          selectedProject.id,
                          getImages(selectedProject).length,
                          e
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-md"
                    >
                      <ChevronRight size={20} />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {getImages(selectedProject).map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            (currentImageIndex[selectedProject.id] || 0) === idx
                              ? "bg-gray-900 w-8"
                              : "bg-gray-400/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Details */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {selectedProject.name}
                  </h3>
                  {selectedProject.comingSoon && (
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold border border-blue-200">
                      Coming Soon
                    </span>
                  )}
                </div>

                {selectedProject.impact && (
                  <div className="flex items-start gap-2 mb-4 p-3 bg-green-50 rounded-xl border border-green-100">
                    <TrendingUp size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-green-700 text-sm font-medium">
                      {selectedProject.impact}
                    </span>
                  </div>
                )}

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-gray-900 font-semibold mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleGithubClick(selectedProject)}
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    <Github size={18} />
                    {selectedProject.comingSoon ? "Coming Soon" : "View Code"}
                  </button>
                  <button
                    onClick={() => handleDemoClick(selectedProject)}
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-900 rounded-xl text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <ExternalLink size={18} />
                    {selectedProject.comingSoon ? "Coming Soon" : "Live Demo"}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

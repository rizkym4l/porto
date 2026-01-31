import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { projects } from "../data/projects";
import { fadeInUp, staggerContainer } from "../animations/motionVariants";
import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
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
      customClass: {
        popup: "colored-toast",
      },
      didOpen: (toast) => {
        toast.style.marginTop = "4rem";
      }
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

  const handleGithubClick = (githubUrl) => {
    if (githubUrl) {
      window.open(githubUrl, "_blank");
    } else {
      showToast("Sorry, GitHub link is Private", "error");
    }
  };

  const handleDemoClick = (demoUrl) => {
    if (demoUrl) {
      const url = demoUrl.startsWith("http") ? demoUrl : `https://${demoUrl}`;
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      showToast("Sorry, Demo link is Private", "error");
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing real-world applications built with modern technologies
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const images = getImages(project);
            const hasMultipleImages = images.length > 1;

            return (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden bg-black border-gray-800 hover:border-gray-600 transition-all duration-300 h-full flex flex-col">
                  <div
                    className="relative overflow-hidden h-48 group cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={getCurrentImage(project)}
                      alt={project.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500"
                    />

                    {/* Navigation Arrows */}
                    {hasMultipleImages && (
                      <>
                        <button
                          onClick={(e) =>
                            handlePrevImage(project.id, images.length, e)
                          }
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={(e) =>
                            handleNextImage(project.id, images.length, e)
                          }
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                        >
                          <ChevronRight size={20} />
                        </button>

                        {/* Image Indicators */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                          {images.map((_, idx) => (
                            <div
                              key={idx}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                (currentImageIndex[project.id] || 0) === idx
                                  ? "bg-white w-6"
                                  : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="bg-gray-900 border-gray-700 text-gray-300 font-mono text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
                        onClick={() => handleGithubClick(project.github)}
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
                        onClick={() => handleDemoClick(project.demo)}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 border border-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
              >
                <X size={24} />
              </button>

              {/* Image Carousel */}
              <div className="relative h-96 bg-black">
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
                          e,
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={(e) =>
                        handleNextImage(
                          selectedProject.id,
                          getImages(selectedProject).length,
                          e,
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
                    >
                      <ChevronRight size={24} />
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {getImages(selectedProject).map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            (currentImageIndex[selectedProject.id] || 0) === idx
                              ? "bg-white w-8"
                              : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Project Details */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.name}
                </h3>
                <p className="text-gray-400 mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-gray-800 border-gray-700 text-gray-300 font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
                    onClick={() => handleGithubClick(selectedProject.github)}
                  >
                    <Github size={20} className="mr-2" />
                    View Code
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
                    onClick={() => handleDemoClick(selectedProject.demo)}
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </Button>
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

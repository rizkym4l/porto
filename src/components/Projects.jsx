import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { projects } from "../data/projects";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  User,
  Play,
} from "lucide-react";
import Swal from "sweetalert2";

const getImages = (project) =>
  Array.isArray(project.image) ? project.image : [project.image];

const Projects = () => {
  const [active, setActive] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  const openProject = (project) => {
    setImgIndex(0);
    setActive(project);
  };

  const showToast = (message, icon = "info") => {
    Swal.fire({
      text: message,
      icon,
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      background: "#171717",
      color: "#ffffff",
      iconColor: icon === "info" ? "#60a5fa" : "#ef4444",
    });
  };

  const handleGithub = (project) => {
    if (project.comingSoon) showToast("Coming Soon! Stay tuned.", "info");
    else if (project.github) window.open(project.github, "_blank");
    else showToast("Sorry, the GitHub repo is private.", "error");
  };

  const handleDemo = (project) => {
    if (project.comingSoon) showToast("Coming Soon! Stay tuned.", "info");
    else if (project.demo) {
      const url = project.demo.startsWith("http")
        ? project.demo
        : `https://${project.demo}`;
      window.open(url, "_blank", "noopener,noreferrer");
    } else showToast("Sorry, the demo link is private.", "error");
  };

  const images = active ? getImages(active) : [];
  const hasMultiple = images.length > 1;

  return (
    <section
      id="projects"
      className="bg-white px-6 md:px-12 lg:px-[133px] py-20 md:py-28 lg:py-[100px]"
    >
      <div className="max-w-[1654px] mx-auto flex flex-col gap-12 md:gap-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-inter font-medium text-black leading-[1.08] tracking-tight text-[clamp(1.75rem,4.5vw,3.25rem)] max-w-[860px]"
          >
            welcome to my realm of wild projects and awesome creations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-dmsans font-light text-xs md:text-base leading-snug text-neutral-500 uppercase max-w-[380px] tracking-wide"
          >
            Here's a selection of projects that showcase my passion for design
            and development, reflecting creativity and innovation.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-10">
          {projects.map((project, i) => {
            const cover = project.thumbnail || getImages(project)[0];
            const dark = !cover;
            return (
              <motion.button
                key={project.id}
                onClick={() => openProject(project)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="group text-left flex flex-col gap-4"
              >
                <div
                  className={`relative h-[170px] sm:h-[210px] lg:h-[260px] w-full overflow-hidden rounded-2xl md:rounded-3xl ${
                    dark ? "bg-black" : "bg-neutral-100"
                  }`}
                >
                  {cover ? (
                    <img
                      src={cover}
                      alt={project.name}
                      className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700">
                      <span className="font-inter font-medium text-white/95 text-2xl md:text-3xl px-6 text-center">
                        {project.name}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-5 left-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[11px] font-semibold text-neutral-800">
                    {project.type === "client" ? (
                      <>
                        <Briefcase className="size-3" /> Client
                      </>
                    ) : (
                      <>
                        <User className="size-3" /> Personal
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="flex items-center justify-center size-8 md:size-10 rounded-full border border-neutral-300 text-black shrink-0 transition-all group-hover:bg-black group-hover:text-white group-hover:border-black">
                    <ArrowUpRight
                      className="size-4 md:size-5"
                      strokeWidth={1.5}
                    />
                  </span>
                  <p className="font-inter text-base sm:text-lg md:text-xl leading-tight text-black">
                    {project.name}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Explore more */}
        <div className="flex justify-center pt-2">
          <a
            href="https://github.com/rizkym4l"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-black transition-colors hover:bg-black hover:text-white hover:border-black"
          >
            <span className="size-2 rounded-full bg-current" />
            <span className="font-inter text-sm">Explore more</span>
          </a>
        </div>
      </div>

      {/* Detail dialog */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="bg-white border-neutral-200 text-neutral-900 max-w-3xl max-h-[90vh] overflow-y-auto">
          {active && (
            <>
              {images.length > 0 && (
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 group">
                <img
                  src={images[imgIndex]}
                  alt={active.name}
                  className="size-full object-cover"
                />
                {hasMultiple && (
                  <>
                    <button
                      onClick={() =>
                        setImgIndex(
                          (p) => (p - 1 + images.length) % images.length
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white text-neutral-900 p-2 rounded-full shadow"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() =>
                        setImgIndex((p) => (p + 1) % images.length)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/85 hover:bg-white text-neutral-900 p-2 rounded-full shadow"
                    >
                      <ChevronRight size={18} />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {images.map((_, idx) => (
                        <span
                          key={idx}
                          className={`h-2 rounded-full transition-all ${
                            idx === imgIndex
                              ? "w-6 bg-neutral-900"
                              : "w-2 bg-neutral-400/60"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
                </div>
              )}

              <DialogHeader className="mt-4">
                <DialogTitle className="text-2xl md:text-3xl font-bold font-inter">
                  {active.name}
                </DialogTitle>
              </DialogHeader>

              <p className="text-neutral-600 leading-relaxed">
                {active.description}
              </p>

              {active.impact && (
                <p className="text-sm font-medium text-neutral-800 bg-neutral-100 rounded-xl px-4 py-3">
                  ★ {active.impact}
                </p>
              )}

              <div className="flex flex-wrap gap-2">
                {active.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-700 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {active.video && (
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full rounded-xl border border-neutral-200"
                >
                  <source src={active.video} type="video/mp4" />
                </video>
              )}

              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  onClick={() => handleGithub(active)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors"
                >
                  <Github size={16} />
                  {active.comingSoon ? "Coming Soon" : "View Code"}
                </button>
                <button
                  onClick={() => handleDemo(active)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white text-neutral-900 rounded-full text-sm font-medium border border-neutral-300 hover:bg-neutral-50 transition-colors"
                >
                  {active.video ? (
                    <Play size={16} />
                  ) : (
                    <ExternalLink size={16} />
                  )}
                  {active.video
                    ? "Try Beta"
                    : active.comingSoon
                    ? "Coming Soon"
                    : "Live Demo"}
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;

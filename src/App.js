import React, { useEffect } from "react";
import "./App.css";
import NavDock from "./components/NavDock";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.documentElement.style.scrollPaddingTop = "40px";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="App bg-white">
      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
      <NavDock />
    </div>
  );
}

export default App;

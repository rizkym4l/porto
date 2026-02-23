import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#050514] border-t border-white/5 py-8">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="font-pixel text-[8px] text-white/20 tracking-widest">
          © {new Date().getFullYear()} RIZKI MAULANA ARIF
        </p>

        <div className="flex items-center gap-5">
          {[
            { href: "https://github.com/rizkym4l", icon: <Github size={17} /> },
            { href: "https://www.linkedin.com/in/rizki-maulana-arif-b711521a7/", icon: <Linkedin size={17} /> },
            { href: "mailto:Rizkymaulana.more@gmail.com", icon: <Mail size={17} /> },
          ].map(({ href, icon }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
              className="text-white/20 hover:text-cyan-400 transition-colors duration-200">
              {icon}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-white/5 text-center">
        <p className="font-pixel text-[7px] text-white/10 tracking-widest">
          BUILT WITH REACT · TAILWIND CSS · FRAMER MOTION
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

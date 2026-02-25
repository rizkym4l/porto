import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 py-8">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase">
          © {new Date().getFullYear()} Rizki Maulana Arif
        </p>

        <div className="flex items-center gap-5">
          {[
            { href: "https://github.com/rizkym4l", icon: <Github size={17} /> },
            { href: "https://www.linkedin.com/in/rizki-maulana-arif-b711521a7/", icon: <Linkedin size={17} /> },
            { href: "mailto:Rizkymaulana.more@gmail.com", icon: <Mail size={17} /> },
          ].map(({ href, icon }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-600 transition-colors duration-200">
              {icon}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100 text-center">
        <p className="text-[10px] text-gray-300 tracking-widest uppercase">
          Built with React · Tailwind CSS · Framer Motion
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

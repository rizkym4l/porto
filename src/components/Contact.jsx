import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EMAIL = "rizkymaulana.more@gmail.com";
const PHONE_DISPLAY = "+62 813-8508-8095";
const PHONE_RAW = "+6281385088095";
const LINKEDIN = "https://www.linkedin.com/in/rizki-maulana-arif-b711521a7/";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white px-6 md:px-12 lg:px-[133px] py-20 md:py-24"
    >
      <div className="max-w-[1654px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-plexmono text-sm md:text-base text-black mb-3">
              That's all for now.
            </p>
            <h2 className="font-inter text-black leading-[1.08] text-[clamp(1.9rem,5vw,3.25rem)]">
              Got a project in mind?
              <br />
              Let's talk
            </h2>
          </motion.div>

          <motion.a
            href={`mailto:${EMAIL}`}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, type: "spring", stiffness: 160 }}
            whileHover={{ scale: 1.05 }}
            className="group shrink-0 self-start lg:self-auto flex items-center justify-center size-36 md:size-52 rounded-full bg-indigo-600 text-white relative overflow-hidden"
          >
            <span className="font-inter text-base md:text-xl">Get in touch</span>
            <ArrowUpRight
              className="absolute top-5 right-5 size-5 md:size-7 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"
              strokeWidth={1.5}
            />
          </motion.a>
        </div>

        <div className="h-px w-full bg-neutral-300 my-10 md:my-14" />

        <div className="flex flex-wrap gap-x-14 gap-y-8">
          <div>
            <p className="text-[#7e7e7e] text-sm md:text-base mb-1.5">Email</p>
            <a
              href={`mailto:${EMAIL}`}
              className="font-inter text-lg md:text-xl text-black hover:text-indigo-600 transition-colors break-all"
            >
              {EMAIL}
            </a>
          </div>
          <div>
            <p className="text-[#7e7e7e] text-sm md:text-base mb-1.5">Phone</p>
            <a
              href={`tel:${PHONE_RAW}`}
              className="font-inter text-lg md:text-xl text-black hover:text-indigo-600 transition-colors"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
          <div>
            <p className="text-[#7e7e7e] text-sm md:text-base mb-1.5">
              LinkedIn
            </p>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-lg md:text-xl text-black hover:text-indigo-600 transition-colors"
            >
              /rizki-maulana-arif
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

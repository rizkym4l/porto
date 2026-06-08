import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code2, Briefcase, MapPin, Layers } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Fullstack Engineer" },
  { icon: Briefcase, label: "2+ Years Experience" },
  { icon: Layers, label: "50+ Components Shipped" },
  { icon: MapPin, label: "Bogor, Indonesia" },
];

const AboutMe = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="about"
      className="bg-white px-6 md:px-12 lg:px-[133px] py-20 md:py-28 lg:py-[100px]"
    >
      <div className="max-w-[1654px] mx-auto flex flex-col gap-14 lg:gap-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-dmsans font-medium text-xl sm:text-2xl md:text-[30px] leading-[1.2] text-black max-w-[900px]"
          >
            I build software that ships — from enterprise financial platforms
            handling real money to payment-ready e-commerce and bilingual
            prediction systems. Two years in and 50+ components later, I'm still
            obsessed with turning messy problems into clean, scalable products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:w-[487px] shrink-0 flex flex-col items-start lg:items-end gap-8"
          >
            <p className="font-dmsans font-light text-base md:text-lg leading-snug text-[#616161] lg:text-right">
              Fullstack by trade, problem-solver by instinct — I live where
              clean architecture, thoughtful UX, and systems that simply work
              all meet.
            </p>

            <button
              onClick={() => setOpen((v) => !v)}
              className="group flex items-center gap-4"
              aria-expanded={open}
            >
              <span className="font-dmsans text-xl md:text-2xl text-black">
                {open ? "Less about me" : "More about me"}
              </span>
              <span className="flex items-center justify-center size-11 rounded-full border border-neutral-300 text-black transition-all group-hover:bg-black group-hover:text-white group-hover:border-black">
                <ArrowUpRight
                  className={`size-5 transition-transform duration-300 ${
                    open ? "rotate-90" : ""
                  }`}
                  strokeWidth={1.5}
                />
              </span>
            </button>
          </motion.div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="border-t border-neutral-200 pt-12 grid lg:grid-cols-2 gap-10 lg:gap-16">
                <div className="space-y-5 text-neutral-600 text-base md:text-lg leading-relaxed font-inter">
                  <p>
                    Hi! I'm{" "}
                    <span className="text-black font-semibold">
                      Rizki Maulana Arif
                    </span>
                    , a Fullstack Engineer based in Bogor, Indonesia with 2+
                    years of hands-on experience shipping production software
                    with{" "}
                    <span className="text-black font-medium">
                      React, TypeScript, Next.js, and NestJS
                    </span>
                    .
                  </p>
                  <p>
                    I've delivered enterprise-scale financial platforms,
                    marketing sites, headless e-commerce with{" "}
                    <span className="text-black font-medium">
                      Stripe &amp; Midtrans
                    </span>{" "}
                    payments, and bilingual prediction platforms — frequently as
                    the solo developer taking a product from Figma to deploy.
                  </p>
                  <p>
                    A Software Engineering graduate of{" "}
                    <span className="text-black font-medium">
                      SMK Wikrama Bogor
                    </span>{" "}
                    (GPA 3.35), I care about clean architecture, reusable
                    components, and shipping MVPs fast without cutting corners.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 self-start">
                  {highlights.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-start gap-3 p-5 rounded-2xl border border-neutral-200 bg-neutral-50"
                    >
                      <Icon className="size-6 text-black" strokeWidth={1.5} />
                      <span className="text-neutral-700 text-sm font-medium font-inter">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutMe;

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { certifications } from "../data/certifications";
import { ArrowUpRight } from "lucide-react";

const Certifications = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="certifications"
      className="bg-white px-6 md:px-12 lg:px-[133px] py-20 md:py-28"
    >
      <div className="max-w-[1654px] mx-auto">
        <p className="font-plexmono text-sm text-neutral-400 mb-4">
          // certifications
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-inter font-medium text-black leading-[1.08] tracking-tight text-[clamp(1.5rem,3.5vw,2.5rem)] mb-10 md:mb-14"
        >
          Always learning, always certified
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.button
              key={cert.id}
              onClick={() => setSelected(cert)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="group text-left rounded-2xl border border-neutral-200 p-6 hover:border-neutral-400 transition-colors flex flex-col gap-6 h-full"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm text-neutral-400">
                  {cert.year}
                </span>
                <span className="flex items-center justify-center size-9 rounded-full border border-neutral-300 text-neutral-500 transition-all group-hover:bg-black group-hover:text-white group-hover:border-black">
                  <ArrowUpRight className="size-4" strokeWidth={1.5} />
                </span>
              </div>
              <div className="mt-auto">
                <h3 className="font-inter text-lg font-semibold text-black leading-snug">
                  {cert.name}
                </h3>
                <p className="text-neutral-500 text-sm mt-1">{cert.provider}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="bg-white border-neutral-200 text-neutral-900 max-w-2xl max-h-[90vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-inter">
                  {selected.name}
                </DialogTitle>
                <DialogDescription className="text-neutral-500">
                  {selected.provider} • {selected.year}
                </DialogDescription>
              </DialogHeader>
              <div className="rounded-xl overflow-hidden border border-neutral-100 bg-neutral-50 max-h-[55vh] overflow-y-auto">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-neutral-600 leading-relaxed">
                {selected.description}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certifications;

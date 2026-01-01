"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative py-40 overflow-hidden bg-slate-950 flex items-center justify-center">

      {/* Aurora Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[50%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-linear-to-b from-emerald-500/20 via-teal-500/10 to-transparent rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-8"
        >
          Ready to <br />
          <span className="text-transparent bg-clip-text bg-linear-to-br from-emerald-400 to-teal-200">Scale Up?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Join the industry leaders who are redefining workforce management with Skoal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {/* The Supernova Button */}
          <button className="group relative px-10 py-5 bg-white text-slate-950 text-lg font-bold tracking-wider uppercase rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
            <span className="relative z-10 flex items-center gap-2">
              Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>

            {/* Shockwave Hover Effect */}
            <div className="absolute inset-0 bg-emerald-400 translate-y-[102%] group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}

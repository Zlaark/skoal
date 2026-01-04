"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Users, Building2, Globe2, Layers, ArrowUpRight, CheckCircle2 } from "lucide-react";

const capabilities = [
  {
    title: "Blue-Collar",
    subtitle: "Workforce",
    desc: "Industrial scale staffing.",
    icon: <Users size={28} className="text-emerald-200" />,
    bg: "bg-[#064e3b]"
  },
  {
    title: "Corporate",
    subtitle: "Staffing",
    desc: "White-collar compliance.",
    icon: <Building2 size={28} className="text-teal-200" />,
    bg: "bg-[#065f46]"
  },
  {
    title: "Distributed",
    subtitle: "Operations",
    desc: "Multi-state management.",
    icon: <Globe2 size={28} className="text-emerald-300" />,
    bg: "bg-[#047857]"
  },
  {
    title: "High-Volume",
    subtitle: "Hiring",
    desc: "Rapid seasonal deployment.",
    icon: <Layers size={28} className="text-emerald-100" />,
    bg: "bg-[#059669]"
  }
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-24 relative px-4">
      {/* Main Container - Deep Green Theme */}
      <div className="relative bg-[#022c22] rounded-[3rem] overflow-hidden text-white p-8 md:p-20 shadow-2xl">

        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#059669]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#10b981]/10 rounded-full blur-[100px]" />
          {/* Fine Grid */}
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '60px 60px' }}
          />
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Content */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-emerald-800 bg-emerald-900/30 text-emerald-300 text-xs tracking-widest uppercase font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              The Skoal Standard
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-medium leading-[1.05] tracking-tight">
              People operations <br /> made
              <span className="text-emerald-400 font-serif italic ml-3">extraordinary.</span>
            </h2>

            <p className="text-lg text-emerald-100/70 leading-relaxed max-w-xl font-light">
              We don't just manage payroll; we engineer reliability. Founded with a compliance-first DNA, Skoal delivers risk-free workforce solutions at scale.
            </p>

            {/* Checklist */}
            <div className="space-y-4 pt-4">
              {["100% Statutory Compliance", "Zero-Leakage Governance", "Audit-Ready Processes"].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-3 text-emerald-50"
                >
                  <CheckCircle2 size={18} className="text-emerald-400" />
                  <span className="text-sm tracking-wide">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Modern Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative aspect-square p-6 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between overflow-hidden"
              >
                {/* Hover Gradient Bloom */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex justify-between items-start">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${cap.bg} shadow-lg border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                    {cap.icon}
                  </div>
                  <ArrowUpRight className="text-white/20 group-hover:text-emerald-400 transition-colors" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white leading-tight mb-1">
                    {cap.title} <br />
                    <span className="text-emerald-100/60 font-medium">{cap.subtitle}</span>
                  </h3>
                  <p className="text-xs text-emerald-100/40 mt-2 font-mono tracking-wide">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

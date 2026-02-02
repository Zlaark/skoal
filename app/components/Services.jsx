"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ShieldCheck, Users, Headphones, Activity, ArrowUpRight } from "lucide-react";

// Precision Data - "Connected Infrastructure" Aesthetic
const modules = [
  {
    id: "payroll",
    title: "HR & Payrolling",
    subtitle: "PRECISION_ENGINE",
    desc: "Automated salary disbursement.",
    stat: "00.00",
    statLabel: "ERRORS DETECTED",
    icon: <Calculator size={20} />,
    color: "text-emerald-700",
    borderHover: "group-hover:border-emerald-500",
    bgHover: "group-hover:bg-emerald-50"
  },
  {
    id: "compliance",
    title: "Statutory Compliance",
    subtitle: "LEGAL_FORTRESS",
    desc: "Zero-leakage governance framework.",
    stat: "100%",
    statLabel: "AUDIT READINESS",
    icon: <ShieldCheck size={20} />,
    color: "text-blue-700",
    borderHover: "group-hover:border-blue-500",
    bgHover: "group-hover:bg-blue-50"
  },
  {
    id: "recruitment",
    title: "High-Volume Hiring",
    subtitle: "RAPID_DEPLOY",
    desc: "SLA-based talent acquisition engines.",
    stat: "48HRS",
    statLabel: "AVG. DEPLOYMENT",
    icon: <Users size={20} />,
    color: "text-purple-700",
    borderHover: "group-hover:border-purple-500",
    bgHover: "group-hover:bg-purple-50"
  },
  {
    id: "bpo",
    title: "BPO Services",
    subtitle: "OMNICHANNEL_AI",
    desc: "Next-gen support powered by AI.",
    stat: "24/7",
    statLabel: "OPERATIONAL UPTIME",
    icon: <Headphones size={20} />,
    color: "text-orange-700",
    borderHover: "group-hover:border-orange-500",
    bgHover: "group-hover:bg-orange-50"
  }
];

function PrecisionCard({ module, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Updated Card Style: Cleaner, crisper, deeper shadows, white bg
      className={`relative p-6 md:p-8 rounded-4xl md:rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/50 transition-all duration-500 h-full flex flex-col justify-between group overflow-hidden ${module.borderHover} hover:shadow-2xl hover:-translate-y-1`}
    >
      {/* Active Indicator Pulse */}
      <div className="absolute top-6 right-6 flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${isHovered ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`} />
        <span className="text-[10px] font-mono font-bold text-slate-400 tracking-widest">
          {isHovered ? 'ACTIVE' : 'IDLE'}
        </span>
      </div>

      {/* Header */}
      <div className="relative z-10 mb-6 md:mb-10">
        <div className={`w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 transition-colors duration-500 ${module.bgHover} ${module.color}`}>
          {module.icon}
        </div>
        <h3 className="text-xl md:text-2xl font-serif font-medium text-slate-900 mb-2 group-hover:text-black transition-colors">
          {module.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed max-w-[90%] group-hover:text-slate-600 transition-colors">
          {module.desc}
        </p>
      </div>

      {/* Footer / HUGE STAT - The "Hero" Typography */}
      <div className="relative z-10 mt-auto pt-6 border-t border-slate-100 group-hover:border-slate-200 transition-colors">
        <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-1">
          {module.statLabel}
        </div>
        {/* Massive Stat Typography for Impact */}
        <div className="flex items-baseline justify-between">
          <div className={`text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-mono font-light tracking-tighter text-slate-900 group-hover:text-emerald-900 transition-colors`}>
            {module.stat}
          </div>
          <ArrowUpRight className={`opacity-0 group-hover:opacity-100 transition-all duration-500 text-slate-400`} size={24} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="relative py-20 md:py-32 bg-slate-50 text-slate-900 border-t border-slate-200 overflow-hidden" id="services">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }}
      />

      {/* ANIMATED PIPELINES - Connecting the Ecosystem */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="pipeline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          {/* Horizontal Flow Lines */}
          <motion.rect
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            x="0" y="30%" width="20%" height="2" fill="url(#pipeline-gradient)"
          />
          <motion.rect
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
            x="0" y="70%" width="30%" height="2" fill="url(#pipeline-gradient)"
          />
          {/* Vertical Flow Lines */}
          <motion.rect
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
            x="40%" y="0" width="2" height="20%" fill="url(#pipeline-gradient)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
          >
            <Activity size={14} className="text-emerald-600" />
            <span className="text-xs font-bold text-slate-600 tracking-widest uppercase">
              Core Capabilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6"
          >
            We manage the <span className="font-serif italic text-emerald-700">complexity.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto"
          >
            You focus on growth. Our infrastructure handles the operational heavy lifting with military precision.
          </motion.p>
        </div>

        {/* 2x2 Precision Layout Connected */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <PrecisionCard key={module.id} module={module} index={index} />
          ))}
        </div>

        {/* Center Glow Core */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-emerald-50/80 blur-[80px] md:blur-[100px] rounded-full pointer-events-none -z-10" />

      </div>
    </section>
  );
}

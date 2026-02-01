"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Flag, Globe, Cpu, Users, Zap } from "lucide-react";

const milestones = [
  {
    year: "2015",
    title: "The Inception",
    description: "Founded in Dubai with a single mission: to demystify workforce management in the Middle East.",
    icon: Flag,
    side: "left",
    color: "text-blue-500",
    bg: "bg-blue-500",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    year: "2018",
    title: "Regional Expansion",
    description: "Expanded operations to Saudi Arabia and Qatar, establishing our first regional HQs.",
    icon: Globe,
    side: "right",
    color: "text-amber-500",
    bg: "bg-amber-500",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    year: "2021",
    title: "The Digital Shift",
    description: "Launched our proprietary AI-driven compliance platform, revolutionizing how clients track labor laws.",
    icon: Cpu,
    side: "left",
    color: "text-emerald-500",
    bg: "bg-emerald-500",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    year: "2024",
    title: "Global Partnership",
    description: "Partnered with 50+ Fortune 500 companies, managing over 100,000 workforce lives daily.",
    icon: Users,
    side: "right",
    color: "text-purple-500",
    bg: "bg-purple-500",
    gradient: "from-purple-500 to-pink-500"
  }
];

const TimelineNode = ({ item, index }) => {
  const isLeft = item.side === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative w-full mb-8 sm:mb-12 md:mb-24 lg:mb-32 flex flex-col md:flex-row md:items-center md:justify-between ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* The Horizontal Connector Beam (Desktop Only) */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-[50%] h-[2px] bg-linear-to-r ${item.gradient} origin-${isLeft ? 'right' : 'left'} ${isLeft ? 'right-[50%]' : 'left-[50%]'}`}
      >
        {/* Pulse moving along the beam */}
        <motion.div
          animate={{ x: isLeft ? ["100%", "0%"] : ["-100%", "0%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -translate-y-1/2 w-20 h-4 bg-white/50 blur-lg rounded-full"
        />
      </motion.div>

      {/* Content Card */}
      <div className={`w-full md:w-[48%] 2xl:w-5/12 relative z-10 pl-16 sm:pl-20 md:pl-0 ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-5 sm:p-6 md:p-5 lg:p-6 2xl:p-10 rounded-2xl md:rounded-3xl lg:rounded-4xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-lg md:shadow-xl lg:shadow-2xl hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden group"
        >
          {/* Massive Watermark Year */}
          <span className={`text-5xl sm:text-6xl md:text-[8rem] font-bold absolute -bottom-3 sm:-bottom-5 md:-bottom-10 opacity-[0.05] pointer-events-none select-none right-2 sm:right-4 md:auto ${isLeft ? 'md:-left-6 md:right-auto' : 'md:-right-6'} ${item.color}`}>
            {item.year}
          </span>

          {/* Glowing Top Border */}
          <div className={`absolute top-0 w-full h-1 bg-linear-to-r ${item.gradient} transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100 ${isLeft ? 'right-0' : 'left-0'}`} />

          <div className="relative z-10">
            {/* Title Row */}
            <div className={`flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 ${isLeft ? 'justify-start md:justify-end' : 'justify-start'}`}>
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-slate-900 order-1 md:order-none">{item.title}</h3>
              <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full ${item.bg} bg-opacity-10 ${item.color} shrink-0 order-0 md:order-none`}>
                <item.icon size={16} className="sm:w-[18px] sm:h-[18px] md:w-[22px] md:h-[22px]" />
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium text-left md:text-inherit">
              {item.description}
            </p>

            <div className={`mt-4 sm:mt-6 text-xs sm:text-sm font-bold tracking-widest uppercase opacity-40 text-left md:text-inherit ${item.color}`}>
              {item.year}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Central Timeline Node */}
      <div className="absolute left-6 sm:left-8 top-0 -translate-x-1/2 z-20 md:static md:translate-x-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full border-4 border-white ${item.bg} shadow-[0_0_0_3px_rgba(255,255,255,0.5)] sm:shadow-[0_0_0_4px_rgba(255,255,255,0.5)] md:shadow-[0_0_0_8px_rgba(255,255,255,0.5)] flex items-center justify-center`}
        >
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-5 md:h-5 bg-white rounded-full animate-pulse" />
        </motion.div>
      </div>

      {/* Empty Space for Balance (Desktop Only) */}
      <div className="hidden md:block md:w-[48%] 2xl:w-5/12" />
    </motion.div>
  );
};

export default function AboutStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-16 sm:py-24 md:py-32 lg:py-40 bg-[#FAFAFA] overflow-hidden">

      {/* Ambient Background Glows */}
      <div className="absolute top-[20%] left-[20%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-400/10 blur-[60px] md:blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-400/10 blur-[60px] md:blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-24 lg:mb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-4 sm:mb-6"
          >
            <Zap size={14} className="text-amber-500 fill-amber-500" />
            <span className="text-[10px] sm:text-xs font-bold text-slate-500 tracking-widest uppercase">Our Evolution</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] md:leading-[1] px-4">
            From a Vision to <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500 font-serif italic">Global Velocity.</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">

          {/* The Chrono-Beam (Central Line) */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-linear-to-b from-blue-500 via-emerald-500 to-purple-500 shadow-[0_0_20px_2px_rgba(16,185,129,0.5)]"
            />
          </div>

          {/* Nodes Loop */}
          <div className="relative z-10">
            {milestones.map((item, index) => (
              <TimelineNode key={index} item={item} index={index} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

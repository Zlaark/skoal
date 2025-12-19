"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 200]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center bg-[#02040a] overflow-hidden px-6 md:px-12 pt-28 pb-20 selection:bg-[#00dc82]/30"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated Aurora Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#00dc82]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[20%] right-[30%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: "4s" }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 mask-image-gradient" style={{ maskImage: "linear-gradient(to bottom, black, transparent)" }} />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-8 lg:max-w-xl"
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-3">
             <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00dc82] animate-pulse"></span>
                <span className="text-xs font-medium text-[#00dc82] tracking-wider uppercase">Future of Work</span>
             </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Global payroll <br />
            <span className="text-gradient-primary italic">reimagined</span> for <br />
            modern teams.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 leading-relaxed font-light max-w-md"
          >
            Unified compliance, payments, and workforce management for forward-thinking enterprises. Scale faster, risk-free.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 pt-4">
            <button className="group relative px-8 py-4 bg-[#00dc82] text-[#02040a] rounded-full font-bold transition-all shadow-[0_0_20px_rgba(0,220,130,0.3)] hover:shadow-[0_0_40px_rgba(0,220,130,0.5)] hover:scale-105 active:scale-95 cursor-pointer">
              <span className="relative z-10 flex items-center gap-2">
                Start Platform
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
            <button className="group px-8 py-4 rounded-full border border-white/10 font-bold text-white hover:bg-white/5 transition-all flex items-center gap-2 cursor-pointer">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </span>
                Watch Demo
            </button>
          </motion.div>
          
          <motion.div variants={itemVariants} className="pt-10 border-t border-white/5 mt-4">
             <p className="text-sm text-slate-500 mb-4">Trusted by industry leaders</p>
             <div className="flex gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                 {/* Placeholders for logos */}
                 <div className="h-6 w-20 bg-white/20 rounded"></div>
                 <div className="h-6 w-20 bg-white/20 rounded"></div>
                 <div className="h-6 w-20 bg-white/20 rounded"></div>
                 <div className="h-6 w-20 bg-white/20 rounded"></div>
             </div>
          </motion.div>
        </motion.div>

        {/* 3D Visual - CSS Composition */}
        <motion.div
           style={{ y: yParallax }}
           initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
           animate={{ opacity: 1, scale: 1, rotateY: 0 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="relative perspective-1000 hidden lg:flex justify-center"
        >
             {/* Main Dashboard Card - Premium Dark Matte */}
             <div className="relative w-[500px] h-[600px] bg-[#02040a]/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-6 transform rotate-y-12 rotate-z-2 hover:rotate-y-0 hover:rotate-z-0 transition-all duration-700 ease-out group">
                {/* Subtle Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 opacity-50 pointer-events-none" />
                
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none" />
                
                {/* Card Content - Abstract UI */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="h-2 w-20 bg-white/10 rounded-full" />
                </div>

                <div className="space-y-6">
                    {/* Graph Area */}
                    <div className="w-full h-40 rounded-xl bg-gradient-to-r from-[#00dc82]/10 to-blue-500/5 border border-white/5 relative overflow-hidden flex items-end p-4 gap-2">
                        {[40, 70, 50, 90, 60, 80, 100].map((h, i) => (
                             <div key={i} className="flex-1 bg-[#00dc82] opacity-80 rounded-t-sm animate-pulse" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
                        ))}
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                            <p className="text-xs text-slate-400 mb-1">Total Payroll</p>
                            <p className="text-2xl font-bold text-white">$2.4M</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                            <p className="text-xs text-slate-400 mb-1">Active Contractors</p>
                            <p className="text-2xl font-bold text-white">1,240</p>
                        </div>
                    </div>

                    {/* List Items */}
                    <div className="space-y-3">
                         {[1, 2, 3].map((i) => (
                             <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800" />
                                 <div className="flex-1">
                                     <div className="h-2 w-24 bg-white/20 rounded mb-2" />
                                     <div className="h-2 w-16 bg-white/10 rounded" />
                                 </div>
                                 <div className="h-6 w-16 rounded-full bg-[#00dc82]/20 border border-[#00dc82]/30" />
                             </div>
                         ))}
                    </div>
                </div>

                {/* Floating Notification */}
                <motion.div 
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-12 top-20 bg-[#1e293b] p-4 rounded-2xl border border-white/10 shadow-xl w-48 z-20"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#00dc82]/20 flex items-center justify-center text-[#00dc82]">✓</div>
                        <div>
                            <p className="text-xs text-slate-400">Status Update</p>
                            <p className="text-sm font-bold text-white">All Systems Go</p>
                        </div>
                    </div>
                </motion.div>
                
                 {/* Floating Avatar Card */}
                <motion.div 
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -left-12 bottom-32 bg-[#1e293b] p-4 rounded-2xl border border-white/10 shadow-xl w-48 z-20"
                >
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                             <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-[#1e293b]" />
                             <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-[#1e293b]" />
                             <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-[#1e293b]" />
                        </div>
                        <p className="text-xs font-bold text-white">+24 New</p>
                    </div>
                </motion.div>
             </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#02040a] to-transparent z-10" />
    </section>
  );
};

export default Hero;

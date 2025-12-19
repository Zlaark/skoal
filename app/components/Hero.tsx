"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";

import Magnetic from "./Magnetic";
import VideoModal from "./VideoModal";
import { useState } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { damping: 20, stiffness: 100 });
  const yParallax = useTransform(smoothScrollY, [0, 500], [0, 200]);

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
            <Magnetic>
              <button className="group relative px-8 py-4 bg-[#00dc82] text-[#02040a] rounded-full font-bold transition-all shadow-[0_0_20px_rgba(0,220,130,0.3)] hover:shadow-[0_0_40px_rgba(0,220,130,0.5)] hover:scale-105 active:scale-95 cursor-pointer overflow-hidden">
                {/* Sheen Effect */}
                <motion.div 
                  initial={{ x: "100%" }}
                  animate={{ x: "-100%" }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "loop", 
                    duration: 3, 
                    ease: "linear",
                    repeatDelay: 2 
                  }}
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                />
                
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </Magnetic>
            <button 
                onClick={() => setIsModalOpen(true)}
                className="group px-8 py-4 rounded-full border border-white/10 font-bold text-white hover:bg-white/5 transition-all flex items-center gap-2 cursor-pointer"
            >
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </span>
                Watch Demo
            </button>
            
            <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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
             <div className="relative w-[500px] h-[600px] bg-[#02040a]/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 transform rotate-y-12 rotate-z-2 hover:rotate-y-0 hover:rotate-z-0 transition-all duration-700 ease-out group">
                {/* Subtle Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 opacity-50 pointer-events-none" />
                
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none" />
                
                {/* Card Header */}
                <div className="flex items-center justify-between mb-8">
                     <div>
                        <p className="text-sm text-slate-400 font-medium">Total Revenue</p>
                        <h3 className="text-3xl font-bold text-white mt-1">$124,500.00</h3>
                     </div>
                     <div className="flex gap-2">
                        <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">Mo</div>
                        <div className="px-3 py-1 rounded-full bg-[#00dc82]/10 border border-[#00dc82]/20 text-xs text-[#00dc82]">Yr</div>
                     </div>
                </div>

                <div className="space-y-8">
                    {/* Rich Graph Area */}
                    <div className="relative w-full h-48 rounded-2xl bg-[#02040a]/50 border border-white/5 overflow-hidden group/graph">
                         {/* Grid Lines */}
                         <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-10">
                            <div className="w-full h-[1px] bg-white" />
                            <div className="w-full h-[1px] bg-white" />
                            <div className="w-full h-[1px] bg-white" />
                            <div className="w-full h-[1px] bg-white" />
                         </div>
                         
                         {/* UNIFIED SVG CHART */}
                         <svg className="absolute inset-0 w-full h-full pt-4 px-0 pb-0 overflow-visible" viewBox="0 0 400 150" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#00dc82" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#00dc82" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            
                            {/* 1. Gradient Fill (Same Curve + Close Bottom) */}
                            <path 
                               d="M0 90 C 50 110, 90 60, 130 80 S 200 30, 260 70 S 340 10, 400 60 L 400 150 L 0 150 Z"
                               fill="url(#chartGradient)" 
                            />
                            
                            <motion.path 
                               d="M0 90 C 50 110, 90 60, 130 80 S 200 30, 260 70 S 340 10, 400 60"
                               fill="none" 
                               stroke="#00dc82" 
                               strokeWidth="3"
                               strokeLinecap="round"
                               vectorEffect="non-scaling-stroke"
                               className="drop-shadow-[0_0_10px_rgba(0,220,130,0.5)]"
                               initial={{ pathLength: 0 }}
                               animate={{ pathLength: 1 }}
                               transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                         </svg>

                         {/* Interactive Hover Line */}
                         <div className="absolute inset-0 opacity-0 group-hover/graph:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                            <div className="h-full w-[1px] bg-white/20 relative">
                                <div className="absolute top-[40%] -left-1 w-2.5 h-2.5 bg-[#00dc82] rounded-full shadow-[0_0_10px_#00dc82]" />
                            </div>
                         </div>
                    </div>

                    {/* Stats Tiles */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </div>
                                <span className="text-xs text-slate-400">Payroll</span>
                            </div>
                            <p className="text-xl font-bold text-white">42 Active</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <span className="text-xs text-slate-400">Compliance</span>
                            </div>
                            <p className="text-xl font-bold text-white">100% Safe</p>
                        </div>
                    </div>

                    {/* Rich Activity List */}
                    <div className="space-y-4">
                         <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors cursor-pointer group/row">
                             <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border border-white/10" />
                                 <div>
                                     <p className="text-sm text-white font-medium group-hover/row:text-[#00dc82] transition-colors">Sarah Connor</p>
                                     <p className="text-xs text-slate-500">Contractor Payment</p>
                                 </div>
                             </div>
                             <div className="px-2 py-1 rounded-md bg-[#00dc82]/10 text-[#00dc82] text-xs font-bold border border-[#00dc82]/20">
                                 Paid
                             </div>
                         </div>
                    </div>
                </div>

                {/* Floating Notification */}
                <motion.div 
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-12 top-20 bg-[#02040a] p-4 rounded-2xl border border-white/10 shadow-2xl w-48 z-20"
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
                    className="absolute -left-12 bottom-32 bg-[#02040a] p-4 rounded-2xl border border-white/10 shadow-2xl w-48 z-20"
                >
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                             <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-[#02040a]" />
                             <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-[#02040a]" />
                             <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-[#02040a]" />
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

"use client";

import React, { useRef } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Play, Globe, Shield } from "lucide-react";

export default function Design4Hero() {
  const containerRef = useRef(null);
  
  // Mouse position for spotlight/parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = window; // Use window or e
    // Actually e.clientX is better
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    mouseX.set(x);
    mouseY.set(y);
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    // Initial black screen reveal
    tl.to(".overlay-curtain", {
      height: 0,
      duration: 1.5,
      ease: "power4.inOut",
      delay: 0.2
    });

    // Text Reveal (Staggered & Masked)
    tl.from(".hero-line-inner", {
      yPercent: 100,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
    }, "-=1");

    // Subtext & Buttons
    tl.from(".hero-fade-in", {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.8");

    // Video Scale in
    tl.from(".hero-video-bg", {
      scale: 1.2,
      opacity: 0,
      duration: 2,
      ease: "power2.out"
    }, "-=2");

  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-[#050505] text-white selection:bg-emerald-500 selection:text-black"
      onMouseMove={(e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX / innerWidth);
        mouseY.set(clientY / innerHeight);
      }}
    >
      {/* Loading Curtain */}
      <div className="overlay-curtain absolute inset-0 z-50 bg-black w-full h-full bottom-0" />

      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 z-0">
        {/* 1. Video Layer with Parallax */}
        <motion.div 
          className="hero-video-bg absolute inset-0 w-full h-full"
          style={{
            x: useTransform(mouseX, [0, 1], [-20, 20]),
            y: useTransform(mouseY, [0, 1], [-20, 20]),
          }}
        >
           <div className="absolute inset-0 bg-black/60 z-10" /> {/* Darkener */}
           <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#050505] z-10" />
           <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-50 grayscale contrast-125"
            src="https://assets.mixkit.co/videos/preview/mixkit-people-working-in-a-modern-office-4950-large.mp4"
          />
        </motion.div>

        {/* 2. Animated Gradient Orbs (Aurora effect) */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-40 mix-blend-screen pointer-events-none">
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-emerald-600/40 rounded-full blur-[120px]" 
            />
            <motion.div 
                animate={{ 
                    scale: [1, 1.5, 1],
                    x: [0, 100, 0],
                    opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-emerald-900/30 rounded-full blur-[100px]" 
            />
        </div>

        {/* 3. Noise Texture Overlay */}
        <div className="absolute inset-0 z-20 opacity-[0.07] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-30 h-full container mx-auto px-6 flex flex-col items-center justify-center pt-20">
        
        {/* 1. TEXT SECTION (Top) */}
        <div className="flex flex-col items-center text-center mb-12 relative z-20">
            {/* Floating Badge */}
            <div className="hero-fade-in mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-medium tracking-widest uppercase text-emerald-300">Future of Workforce</span>
                </div>
            </div>

            {/* Main Typography - Masked Reveal */}
            <div className="flex flex-col items-center gap-0 mb-6">
                <div className="overflow-hidden">
                    <h1 className="hero-line-inner text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-white mix-blend-overlay">
                        SKOAL
                    </h1>
                </div>
                <div className="overflow-hidden">
                    <h1 className="hero-line-inner text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-emerald-500/50">
                        SOLUTIONS
                    </h1>
                </div>
            </div>

            {/* Description */}
            <div className="hero-fade-in max-w-2xl mb-8">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                    Delivering secure, compliant, and scalable people solutions across <span className="text-white font-medium">India</span> and the <span className="text-white font-medium">Middle East</span>.
                </p>
            </div>

            {/* Buttons */}
            <div className="hero-fade-in flex flex-wrap justify-center gap-4 items-center">
                <button className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
                    <div className="absolute inset-0 bg-emerald-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center gap-2 font-bold">
                        Get Started <ArrowRight className="w-4 h-4" />
                    </span>
                </button>
                
                <button className="group px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-3 h-3 fill-white" />
                    </div>
                    <span className="font-medium">Watch Showreel</span>
                </button>
            </div>
        </div>

        {/* 2. VISUAL SECTION (Bottom/Center) */}
        <div className="relative w-full max-w-5xl h-[300px] md:h-[400px] perspective-1000 mt-8">
             <motion.div
                initial={{ opacity: 0, y: 100, rotateX: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                className="relative w-full h-full"
             >
                {/* Main Video Card - Panoramic */}
                <div className="absolute inset-x-0 top-0 bottom-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-2 overflow-hidden shadow-2xl group hover:border-emerald-500/50 transition-colors duration-500">
                    {/* Green Glow Behind */}
                    <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                    
                    <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative bg-black">
                        <video 
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 scale-105 group-hover:scale-100"
                            src="https://assets.mixkit.co/videos/preview/mixkit-people-working-in-a-modern-office-4950-large.mp4"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        
                        {/* Floating UI inside video */}
                        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Live Operations Center</span>
                                </div>
                                <p className="text-white font-medium text-2xl tracking-tight">Real-time Workforce Analytics</p>
                            </div>
                            
                            <div className="hidden md:flex gap-4">
                                <div className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Active Staff</p>
                                    <p className="text-xl font-bold text-white">1,248</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Compliance</p>
                                    <p className="text-xl font-bold text-emerald-400">100%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Elements - Adjusted for Center Layout */}
                <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-12 -right-4 md:right-12 bg-white text-black p-4 rounded-2xl shadow-2xl max-w-[200px] z-20 rotate-3"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                            <Shield className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm font-bold">Audit Ready</p>
                            <p className="text-xs text-gray-500">Statutory Compliant</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-8 -left-4 md:left-12 bg-white/10 border border-white/10 p-4 rounded-2xl shadow-2xl backdrop-blur-md z-20 -rotate-2"
                >
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                            {[1,2,3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white/10 bg-gray-700" />
                            ))}
                        </div>
                        <div>
                            <p className="text-white font-bold">New Hires</p>
                            <p className="text-xs text-emerald-400">+42 this week</p>
                        </div>
                    </div>
                </motion.div>

             </motion.div>
        </div>

      </div>

      {/* Bottom Info Bar */}
      <div className="hero-fade-in absolute bottom-0 left-0 w-full p-6 md:p-12 flex justify-between items-end z-30 pointer-events-none">
         <div className="hidden md:flex gap-12 text-sm text-gray-400 font-mono">
            <div className="flex flex-col gap-1">
                <span className="text-white/50 uppercase text-xs tracking-wider">Location</span>
                <span className="text-white flex items-center gap-2"><Globe className="w-3 h-3" /> India / Middle East</span>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-white/50 uppercase text-xs tracking-wider">Focus</span>
                <span className="text-white flex items-center gap-2"><Shield className="w-3 h-3" /> Compliance First</span>
            </div>
         </div>

         {/* Scroll Indicator */}
         <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
            <div className="w-[1px] h-12 bg-white/10 overflow-hidden">
                <motion.div 
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="w-full h-1/2 bg-emerald-500"
                />
            </div>
         </div>
      </div>

    </div>
  );
}

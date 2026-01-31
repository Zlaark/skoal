"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, TrendingUp, Shield, Globe, X } from "lucide-react";
import { useRef, useState } from "react";
import MagneticButton from "./MagneticButton";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

function DemoModal({ isOpen, onClose }) {
  // Only render on client where document exists
  if (typeof document === "undefined") return null;
  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-4xl aspect-video relative shadow-2xl overflow-hidden pointer-events-auto border border-white/20">
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <X size={18} className="sm:w-5 sm:h-5" />
              </button>
              <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                {/* Placeholder Video Player */}
                <div className="text-center px-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#0A261D] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white shadow-lg shadow-emerald-900/20">
                    <Play fill="currentColor" size={24} className="sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg sm:text-xl">Product Demo Video</h3>
                  <p className="text-slate-500 text-sm sm:text-base">Video player integration goes here</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default function Hero() {
  const targetRef = useRef(null);
  const router = useRouter();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      ref={targetRef}
      className="relative z-0 min-h-screen flex items-center overflow-hidden bg-white pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-28 lg:pb-20 text-slate-900"
    >
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />

      {/* Background: Subtle Grid + Soft Aurora */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Modern Dot Grid */}
        <div
          className="absolute inset-0 opacity-30 sm:opacity-40"
          style={{
            backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />

        {/* Soft Gradients */}
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] right-[-10%] w-[90vw] sm:w-[80vw] md:w-[60vw] max-w-[1000px] aspect-square bg-gradient-to-br from-emerald-100/50 to-teal-100/30 rounded-full blur-[60px] sm:blur-[80px] md:blur-[120px]"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-20%] left-[-10%] w-[70vw] sm:w-[60vw] md:w-[50vw] max-w-[800px] aspect-square bg-gradient-to-tr from-blue-100/40 to-emerald-100/40 rounded-full blur-[50px] sm:blur-[60px] md:blur-[100px]"
        />
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20 relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-10 xl:gap-14 2xl:gap-20 items-center lg:items-start"
      >

        {/* Left Column: Content */}
        <div className="w-full max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full bg-white border border-emerald-100 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] mb-5 sm:mb-6 md:mb-8"
          >
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-700 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-[#06402B]"></span>
            </span>
            <span className="text-slate-600 text-[10px] sm:text-xs font-bold tracking-widest uppercase">Future of Workforce</span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.1] mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-slate-900">
            <span className="block overflow-hidden pb-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Global payroll
              </motion.span>
            </span>
            <span className="block overflow-hidden relative">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#022c22] via-[#059669] to-[#022c22] pb-1 sm:pb-2 md:pb-3"
              >
                reimagined.
              </motion.span>
            </span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-500 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-md sm:max-w-lg mx-auto lg:mx-0 font-medium"
          >
            Secure, compliant, and scalable people solutions across India and the Middle East.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4"
          >
            <MagneticButton
              className="bg-[#0A261D] text-white rounded-full px-5 py-2.5 sm:px-6 sm:py-3 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 font-semibold text-sm sm:text-base lg:text-sm xl:text-base hover:shadow-2xl hover:shadow-emerald-900/20 transition-all shadow-xl shadow-slate-900/20 relative overflow-hidden w-full sm:w-auto flex items-center justify-center"
              rippleClass="bg-gradient-to-r from-emerald-800 to-teal-700"
              onClick={() => router.push('/services')}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Services <ArrowRight size={16} className="lg:w-4 lg:h-4 xl:w-[18px] xl:h-[18px] group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 animate-shine" />
              </div>
            </MagneticButton>

            <MagneticButton
              className="bg-white text-slate-900 border border-slate-200 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 lg:px-6 lg:py-3 xl:px-7 xl:py-3.5 font-semibold text-sm sm:text-base lg:text-sm xl:text-base hover:border-emerald-600/30 hover:bg-emerald-50/30 transition-all cursor-pointer w-full sm:w-auto flex items-center justify-center"
              onClick={() => setIsDemoOpen(true)}
            >
              <Play size={16} fill="currentColor" className="mr-2 text-[#0A261D] lg:w-4 lg:h-4 xl:w-[18px] xl:h-[18px]" />
              Watch Demo
            </MagneticButton>
          </motion.div>

          {/* Stats/Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5"
          >
            {/* Compliance Badge */}
            <div className="group flex items-center gap-2.5 sm:gap-3 md:gap-4 p-2.5 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-lg sm:shadow-xl shadow-slate-200/40 hover:shadow-emerald-900/5 hover:border-emerald-500/20 transition-all duration-500 cursor-default hover:-translate-y-1">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-emerald-50 flex items-center justify-center text-[#0A261D]">
                <Shield size={18} strokeWidth={1.5} className="sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]" />
                <span className="absolute -top-0.5 -right-0.5 sm:top-0 sm:right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
              </div>
              <div>
                <div className="text-lg sm:text-xl md:text-2xl font-serif font-medium text-slate-900 leading-none mb-0.5 sm:mb-1 group-hover:text-emerald-700 transition-colors">
                  100%
                </div>
                <div className="text-[10px] sm:text-xs text-slate-600 font-bold uppercase tracking-wider">
                  Compliance
                </div>
              </div>
            </div>

            {/* Global Coverage Badge */}
            <div className="group flex items-center gap-2.5 sm:gap-3 md:gap-4 p-2.5 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-lg sm:shadow-xl shadow-slate-200/40 hover:shadow-emerald-900/5 hover:border-emerald-500/20 transition-all duration-500 cursor-default hover:-translate-y-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-blue-50 flex items-center justify-center text-blue-900 group-hover:rotate-12 transition-transform duration-500">
                <Globe size={18} strokeWidth={1.5} className="sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]" />
              </div>
              <div>
                <div className="text-lg sm:text-xl md:text-2xl font-serif font-medium text-slate-900 leading-none mb-0.5 sm:mb-1 group-hover:text-blue-700 transition-colors">
                  Global
                </div>
                <div className="text-[10px] sm:text-xs text-slate-600 font-bold uppercase tracking-wider">
                  Coverage
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: High-End Glass UI - Hidden on mobile/tablet */}
        <div className="relative hidden lg:flex h-auto lg:min-h-[400px] xl:min-h-[500px] 2xl:min-h-[600px] items-center justify-center perspective-[2000px]">

          <motion.div
            className="relative w-full max-w-[380px] lg:max-w-[360px] xl:max-w-[450px] 2xl:max-w-[520px]"
            initial={{ opacity: 0, rotateY: -20, rotateX: 10, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: -15, rotateX: 8, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width;
              const y = (e.clientY - rect.top) / rect.height;
              e.currentTarget.style.transform = `perspective(1200px) rotateY(${(x - 0.5) * 15 - 15}deg) rotateX(${(y - 0.5) * -15 + 8}deg)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transition = "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
              e.currentTarget.style.transform = `perspective(1200px) rotateY(-15deg) rotateX(8deg)`;
              setTimeout(() => { e.currentTarget.style.transition = ""; }, 800);
            }}
          >
            {/* Dark Card */}
            <div className="relative bg-[#0A261D] backdrop-blur-2xl border border-emerald-500/10 rounded-[1.5rem] lg:rounded-[1.75rem] xl:rounded-[2rem] 2xl:rounded-[2.5rem] p-4 lg:p-4 xl:p-5 2xl:p-7 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3),0_20px_40px_-10px_rgba(0,0,0,0.2),inset_0_0_60px_rgba(16,185,129,0.05)] overflow-hidden">

              {/* Subtle Top Light Leak */}
              <div className="absolute top-0 left-0 right-0 h-24 lg:h-28 xl:h-32 2xl:h-40 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

              {/* Noise Texture */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.svg')] mix-blend-overlay"></div>

              {/* Decorative Header */}
              <div className="flex items-center justify-between mb-3 lg:mb-4 xl:mb-5 2xl:mb-6 relative z-10">
                <div className="flex items-center gap-2 lg:gap-2.5 xl:gap-3">
                  <div className="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 rounded-lg lg:rounded-xl xl:rounded-xl 2xl:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <TrendingUp className="text-emerald-400 w-4 h-4 lg:w-[18px] lg:h-[18px] xl:w-5 xl:h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] lg:text-xs xl:text-xs 2xl:text-sm font-bold text-white">Projections</div>
                    <div className="text-[9px] lg:text-[10px] xl:text-[10px] 2xl:text-xs text-emerald-400/60">FY 2024-25</div>
                  </div>
                </div>
                <div className="px-2 py-0.5 lg:px-2.5 lg:py-1 xl:px-2.5 xl:py-1 bg-white/5 border border-white/10 rounded-full text-[9px] lg:text-[10px] xl:text-[10px] 2xl:text-xs font-bold text-emerald-300">
                  Live Data
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="h-28 lg:h-32 xl:h-36 2xl:h-44 flex items-end justify-between gap-1.5 lg:gap-2 xl:gap-2 2xl:gap-3 mb-3 lg:mb-4 xl:mb-5 2xl:mb-6 px-1 relative z-10">
                {[35, 55, 45, 75, 60, 90, 70, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.5 + (i * 0.08), duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-full rounded-lg xl:rounded-xl relative group ${i >= 6 ? 'bg-gradient-to-t from-emerald-600 to-teal-400' : 'bg-white/5 hover:bg-white/10 transition-colors'}`}
                  >
                    <div className="absolute -top-7 xl:-top-8 left-1/2 -translate-x-1/2 bg-white text-[#0A261D] text-[9px] xl:text-[10px] px-1.5 xl:px-2 py-0.5 xl:py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 font-bold shadow-lg">
                      ${h}k
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Stat Row */}
              <div className="grid grid-cols-2 gap-2 lg:gap-2.5 xl:gap-3 2xl:gap-4 relative z-10">
                <div className="bg-white/5 border border-white/5 p-2.5 lg:p-3 xl:p-3.5 2xl:p-4 rounded-lg lg:rounded-xl xl:rounded-xl 2xl:rounded-2xl hover:bg-white/10 transition-colors duration-500">
                  <div className="text-emerald-200/40 text-[9px] lg:text-[10px] xl:text-[10px] 2xl:text-xs font-medium uppercase tracking-wider mb-1 lg:mb-1.5 xl:mb-1.5">Total Processed</div>
                  <div className="text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-bold text-white tracking-tight">$12.4M</div>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-2.5 lg:p-3 xl:p-3.5 2xl:p-4 rounded-lg lg:rounded-xl xl:rounded-xl 2xl:rounded-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="text-emerald-400/60 text-[9px] lg:text-[10px] xl:text-[10px] 2xl:text-xs font-medium uppercase tracking-wider mb-1 lg:mb-1.5 xl:mb-1.5 relative z-10">Efficiency</div>
                  <div className="text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-bold text-emerald-400 tracking-tight relative z-10">+24%</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 lg:-right-3 xl:-right-4 2xl:-right-6 top-8 lg:top-10 xl:top-12 2xl:top-16 bg-white p-2 lg:p-2.5 xl:p-3 2xl:p-4 rounded-lg lg:rounded-xl xl:rounded-xl 2xl:rounded-2xl shadow-xl shadow-slate-900/20 z-20 flex items-center gap-1.5 lg:gap-2 xl:gap-2 2xl:gap-3 border border-slate-50"
              style={{ transform: "translateZ(50px)" }}
            >
              <div className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-900">
                <Globe size={14} className="lg:w-4 lg:h-4 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5" />
              </div>
              <div>
                <div className="text-[9px] lg:text-[10px] xl:text-[10px] 2xl:text-xs font-bold text-slate-900">New Region</div>
                <div className="text-[8px] lg:text-[9px] xl:text-[9px] 2xl:text-[10px] text-slate-500">Middle East Added</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -4, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-1 lg:-left-2 xl:-left-3 2xl:-left-5 bottom-14 lg:bottom-16 xl:bottom-18 2xl:bottom-22 bg-[#0A261D] text-white p-2 lg:p-2.5 xl:p-3 2xl:p-4 rounded-lg lg:rounded-xl xl:rounded-xl 2xl:rounded-2xl shadow-2xl z-20"
              style={{ transform: "translateZ(60px)" }}
            >
              <CheckCircle2 size={16} className="text-emerald-400 lg:w-[18px] lg:h-[18px] xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" />
            </motion.div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}


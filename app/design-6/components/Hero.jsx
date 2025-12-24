"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, TrendingUp, Shield, Globe, X } from "lucide-react";
import { useRef, useState } from "react";
import MagneticButton from "./MagneticButton";
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
            <div className="bg-white rounded-3xl w-full max-w-4xl aspect-video relative shadow-2xl overflow-hidden pointer-events-auto border border-white/20">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                {/* Placeholder Video Player */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg shadow-emerald-500/30">
                    <Play fill="currentColor" size={32} />
                  </div>
                  <h3 className="text-slate-900 font-bold text-xl">Product Demo Video</h3>
                  <p className="text-slate-500">Video player integration goes here</p>
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
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Adjusted transforms for smoother parallax exit - fade strictly at end
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={targetRef} className="sticky top-0 z-0 h-screen flex items-center overflow-hidden bg-white py-20 text-slate-900">
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />

      {/* Cleaner Background: Subtle Grid + Soft Aurora */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Modern Dot Grid */}
        <div className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />

        {/* Soft Gradients */}
        <motion.div
          animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-to-br from-emerald-50/80 to-teal-100/50 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-tr from-blue-50/60 to-emerald-50/50 rounded-full blur-[100px]"
        />
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >

        {/* Left Column: Content */}
        <div className="max-w-2xl relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-emerald-100 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-slate-600 text-xs font-bold tracking-widest uppercase">Future of Workforce</span>
          </motion.div>

          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 text-slate-900">
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
            <span className="block overflow-hidden pb-4 relative">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600"
              >
                reimagined.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-xl text-slate-500 mb-10 leading-relaxed max-w-lg font-medium"
          >
            Secure, compliant, and scalable people solutions across India and the Middle East.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-wrap items-center gap-5"
          >
            <MagneticButton
              className="bg-slate-900 text-white rounded-full px-8 py-4 font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/30 transition-all shadow-xl shadow-slate-900/20 relative overflow-hidden"
              rippleClass="bg-gradient-to-r from-emerald-600 to-teal-500"
            >
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                Explore Services <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Constant Shine Effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 animate-shine" />
              </div>
            </MagneticButton>

            <MagneticButton
              className="bg-white text-slate-900 border border-slate-200 rounded-full px-8 py-4 font-semibold text-lg hover:border-emerald-200 hover:bg-emerald-50/30 transition-all cursor-pointer"
              onClick={() => setIsDemoOpen(true)}
            >
              <Play size={20} fill="currentColor" className="mr-3 text-emerald-500" />
              Watch Demo
            </MagneticButton>
          </motion.div>

          {/* Stats/Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex items-center gap-8 border-t border-slate-100 pt-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
                <Shield size={18} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">100%</div>
                <div className="text-xs text-slate-500 font-medium">Compliance</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
                <Globe size={18} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Global</div>
                <div className="text-xs text-slate-500 font-medium">Coverage</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: High-End Glass UI */}
        <div className="relative hidden lg:flex h-[800px] items-center justify-center perspective-[2000px]">

          <motion.div
            className="relative w-full max-w-[600px]"
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
            {/* Card Glass Container - Ultra Clean */}
            <div className="relative bg-white/80 backdrop-blur-2xl border border-white rounded-[2.5rem] p-8 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.12),0_20px_40px_-10px_rgba(15,23,42,0.05)] overflow-hidden">

              {/* Decorative Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
                    <TrendingUp className="text-emerald-500" size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Projections</div>
                    <div className="text-xs text-slate-500">FY 2024-25</div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600">
                  Live Data
                </div>
              </div>

              {/* Modern Chart Visualization */}
              <div className="h-56 flex items-end justify-between gap-3 mb-8 px-2">
                {[35, 55, 45, 75, 60, 90, 70, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.5 + (i * 0.08), duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-full rounded-xl relative group ${i >= 6 ? 'bg-gradient-to-t from-emerald-500 to-teal-400' : 'bg-slate-100 hover:bg-slate-200 transition-colors'}`}
                  >
                    {/* Tooltip on hover */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                      ${h}k
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Stat Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl">
                  <div className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Total Processed</div>
                  <div className="text-3xl font-bold text-slate-900">$12.4M</div>
                </div>
                <div className="bg-emerald-50/50 border border-emerald-100 p-5 rounded-2xl">
                  <div className="text-emerald-600/70 text-xs font-medium uppercase tracking-wider mb-2">Efficiency</div>
                  <div className="text-3xl font-bold text-emerald-700">+24%</div>
                </div>
              </div>
            </div>

            {/* Floating Elements - Add Depth */}
            <motion.div
              animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-10 top-20 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 z-20 flex items-center gap-3 border border-slate-50"
              style={{ transform: "translateZ(50px)" }}
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                < Globe size={20} />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">New Region</div>
                <div className="text-[10px] text-slate-500">Middle East Added</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-6 bottom-32 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl z-20"
              style={{ transform: "translateZ(60px)" }}
            >
              <CheckCircle2 size={28} className="text-emerald-400" />
            </motion.div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

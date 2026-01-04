"use client";
import Link from "next/link";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AboutCTA() {
  const cardRef = useRef(null);

  // Mouse Tracking Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  // Smooth Spotlights
  const backgroundStyle = useMotionTemplate`radial-gradient(1000px circle at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.15), transparent 80%)`;
  const borderStyle = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(52, 211, 153, 0.4), transparent 40%)`;

  return (
    <section className="py-20 px-4 md:px-6 bg-[#FAFAFA]">
      <div className="container mx-auto">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="group relative w-full overflow-hidden rounded-[3rem] bg-emerald-950 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.3)]"
        >
          {/* 1. Base Dark Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-950 to-black pointer-events-none" />

          {/* 2. Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none" />
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          {/* 3. Mouse Follow Spotlight (Inner Glow) */}
          <motion.div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            style={{ background: backgroundStyle }}
          />

          {/* 4. Mouse Follow Border (via mask) */}
          <motion.div
            className="absolute inset-0 rounded-[3rem] border border-transparent pointer-events-none"
            style={{
              borderImage: borderStyle,
              borderImageSlice: 1
            }}
          />

          {/* Content Container */}
          <div className="relative z-10 px-8 py-24 md:py-32 md:px-20 text-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
            >
              <Sparkles size={14} className="text-emerald-400" />
              <span className="text-xs font-bold text-slate-300 tracking-widest uppercase">Ready for the Future?</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8">
              Let's Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-emerald-400 font-serif italic">Something Iconic.</span>
            </h2>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
              Every great transformation starts with a single conversation.
              We are ready to align your workforce with your wildest ambitions.
            </p>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group/btn inline-flex items-center gap-4 px-10 py-5 rounded-full bg-white text-emerald-950 font-bold text-lg tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-300"
              >
                <span className="relative z-10">Start the Conversation</span>
                <div className="w-8 h-8 rounded-full bg-emerald-950 text-white flex items-center justify-center group-hover/btn:rotate-45 transition-transform duration-300">
                  <ArrowRight size={16} />
                </div>
              </motion.button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}

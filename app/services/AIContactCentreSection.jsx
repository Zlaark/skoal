"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mic, Languages, Zap, Phone, Bot, BarChart4, ArrowUpRight } from "lucide-react";

export default function AIContactCentreSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yMove = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotateCore = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section ref={containerRef} id="contact-centre" className="py-32 bg-slate-50 relative overflow-hidden">

      {/* Ambient Background - Green/Teal for "Greener" AI Vibe */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <motion.div
          style={{ y: yMove }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-mono font-medium mb-6 uppercase tracking-wider"
          >
            <Bot size={12} />
            Cognitive Engagement
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            AI-Driven <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Contact Intelligence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            Scale your customer operations with an AI core that learns, adapts, and speaks your customer's language—without losing the human touch.
          </motion.p>
        </div>

        {/* The "Orbit" Layout */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 items-center relative">

          {/* LEFT COLUMN - Metrics */}
          <div className="space-y-8 lg:text-right flex flex-col items-center lg:items-end order-2 lg:order-1">
            <FeatureCard
              icon={Phone}
              color="emerald"
              title="Auto-Dialing"
              desc="Predictive algorithms maximize agent talk time by filtering busy signals and voicemails."
              delay={0.1}
              align="right"
            />
            <FeatureCard
              icon={Languages}
              color="teal"
              title="Multi-Lingual"
              desc="Real-time translation and native-voice synthesis in over 40+ global languages."
              delay={0.2}
              align="right"
            />
          </div>

          {/* CENTER COLUMN - THE VISUAL CORE */}
          <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Inner Pulsing Core */}
              <motion.div
                style={{ rotate: rotateCore }}
                className="relative z-10 w-64 h-64 md:w-80 md:h-80"
              >
                {/* Core Gradient Sphere */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 blur-xl opacity-20 animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-600 to-teal-500 opacity-10 blur-3xl" />

                {/* Orbital Rings */}
                <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite] opacity-30" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-emerald-500" strokeDasharray="4 4" />
                </svg>
                <svg className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] animate-[spin_15s_linear_infinite_reverse] opacity-40" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-teal-500" strokeDasharray="1 3" />
                </svg>

                {/* Central Visual - Abstract Sound Wave */}
                <div className="absolute inset-0 flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [20, 60 + Math.random() * 40, 20] }}
                      transition={{ duration: 1 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                      className="w-3 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full opacity-80"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating "Satellite" Data Points */}
              <Satellite
                className="absolute top-10 right-10 lg:top-0 lg:right-0 bg-white"
                label="Sentiment"
                value="Positive"
                icon={Zap}
                color="yellow"
              />
              <Satellite
                className="absolute bottom-10 left-10 lg:bottom-10 lg:left-0 bg-white"
                label="Connect Rate"
                value="3x"
                icon={BarChart4}
                color="emerald"
              />
            </div>
          </div>

          {/* RIGHT COLUMN - Metrics */}
          <div className="space-y-8 flex flex-col items-center lg:items-start order-3">
            <FeatureCard
              icon={Bot}
              color="green"
              title="Conversational AI"
              desc="Handling Tier-1 queries autonomously, seamlessly escalating complex issues to humans."
              delay={0.3}
              align="left" // Force left align on desktop
            />
            <FeatureCard
              icon={Mic}
              color="cyan"
              title="Voice Biometrics"
              desc="Secure authentication via voiceprint analysis, reducing fraud and verification time."
              delay={0.4}
              align="left"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

// Subcomponents
function FeatureCard({ icon: Icon, color, title, desc, delay, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "right" ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={`flex flex-col ${align === "right" ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"} items-center text-center max-w-sm`}
    >
      <div className={`w-12 h-12 rounded-2xl bg-${color}-50 flex items-center justify-center text-${color}-600 mb-4 shadow-sm ring-1 ring-${color}-100`}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
    </motion.div>
  );
}

function Satellite({ className, label, value, icon: Icon, color }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      className={`p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex items-center gap-3 ${className}`}
    >
      <div className={`p-2 rounded-lg bg-${color}-50 text-${color}-600`}>
        <Icon size={18} />
      </div>
      <div>
        <div className="text-lg font-bold text-slate-900 leading-none">{value}</div>
        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{label}</div>
      </div>
    </motion.div>
  )
}

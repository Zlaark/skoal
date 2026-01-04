"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Monitor, Fingerprint, BarChart2, ShieldCheck, Activity, BrainCircuit } from "lucide-react";

const features = [
  {
    id: "monitor",
    title: "Real-Time Oversight",
    subtitle: "Global Visibility",
    desc: "Instant access to payroll data across all entities. Monitor processing status, variance reports, and approval workflows in a single pane of glass.",
    stats: [
      { label: "Updates", value: "Live" },
      { label: "Entities", value: "All" }
    ],
    icon: Monitor,
    color: "#10b981", // emerald-500
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: "biometric",
    title: "Biometric Integration",
    subtitle: "Fraud Prevention",
    desc: "Direct integration with attendance hardware eliminates buddy punching. Geo-fenced mobile check-ins ensure authorized presence.",
    stats: [
      { label: "Accuracy", value: "100%" },
      { label: "Fraud", value: "0%" }
    ],
    icon: Fingerprint,
    color: "#14b8a6", // teal-500
    gradient: "from-teal-500/20 to-cyan-500/20"
  },
  {
    id: "analytics",
    title: "Predictive Analytics",
    subtitle: "Data Intelligence",
    desc: "Forecast costs and identify trends before they impact your bottom line. AI-driven anomaly detection flags potential errors automatically.",
    stats: [
      { label: "Insight", value: "Deep" },
      { label: "Forecast", value: "+90%" }
    ],
    icon: BarChart2,
    color: "#0ea5e9", // sky-500
    gradient: "from-sky-500/20 to-blue-500/20"
  },
  {
    id: "security",
    title: "Bank-Grade Security",
    subtitle: "Zero Trust",
    desc: "ISO 27001 certified architecture. End-to-end encryption for data in transit and at rest. Role-based access control.",
    stats: [
      { label: "Encryption", value: "256-bit" },
      { label: "Audit", value: "Full" }
    ],
    icon: ShieldCheck,
    color: "#6366f1", // indigo-500
    gradient: "from-indigo-500/20 to-violet-500/20"
  }
];

export default function TechPayrollSection() {
  const containerRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section ref={containerRef} className="relative bg-slate-50 text-slate-900 py-32" id="technology">
      {/* 1. Global Ambient Background - Contained Overflow for sticky fix */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Light noise texture */}
        <div className="absolute inset-0 opacity-[0.4] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

        {/* Active Color Bloom - Subtle on Light Mode */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[120px] opacity-10"
              style={{ backgroundColor: features[activeFeature].color }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Creative Modern Header - "The Digital Backbone" (Light Mode) */}
        <div className="mb-32 relative">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-slate-200 pb-8">
            <div className="md:w-2/3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-4"
              >
                <div className="flex gap-1">
                  <span className="w-1 h-4 bg-emerald-600 rounded-sm animate-pulse" />
                  <span className="w-1 h-4 bg-emerald-600/50 rounded-sm" />
                  <span className="w-1 h-4 bg-emerald-600/20 rounded-sm" />
                </div>
                <span className="text-xs font-mono text-emerald-700 tracking-[0.2em] uppercase font-semibold">
                  System Status: Optimized
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[0.9]"
              >
                THE DIGITAL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 opacity-100">
                  BACKBONE
                </span>
              </motion.h2>
            </div>

            <div className="md:w-1/3 flex flex-col gap-4 text-right">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-mono text-xs text-slate-400 font-medium"
              >
                        // SYSTEM_METRICS
              </motion.div>
              <div className="flex justify-end gap-8">
                <div>
                  <div className="text-2xl font-bold text-slate-900">99.9%</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">0ms</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Latency</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* THE MONOLITH INTERFACE (Light Mode) */}
        <div className="flex flex-col gap-32">
          {/* Sticky Container - ensure NO overflow hidden on parent */}
          <div className="hidden lg:flex flex-row gap-8 items-start relative min-h-[150vh]">
            {/* LEFT: The "Console" (Sticky) */}
            <div className="sticky top-32 w-1/2 h-[600px]">
              <div className="relative w-full h-full">
                {/* The Glass Console Frame - Light Mode: White Glass */}
                <motion.div
                  className="absolute inset-0 bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
                  style={{
                    boxShadow: `0 30px 60px -15px ${features[activeFeature].color}20` // tinted shadow
                  }}
                >
                  {/* Console Internal Layout */}
                  <div className="h-full flex flex-col relative">
                    {/* Top Bar */}
                    <div className="h-16 border-b border-slate-200/60 flex items-center justify-between px-8 bg-slate-50/50">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="font-mono text-xs text-slate-400 uppercase tracking-widest font-semibold">
                        System.Active // {features[activeFeature].id}
                      </div>
                    </div>

                    {/* Main Visual Staging Area */}
                    <div className="flex-1 relative flex items-center justify-center p-12 bg-gradient-to-b from-white to-slate-50/30">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeFeature}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.05 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="relative w-full h-full flex items-center justify-center"
                        >
                          {/* The Core 3D Object - Colored for Light Mode */}
                          <div className="relative z-10 drop-shadow-xl">
                            {(() => {
                              const ActiveIcon = features[activeFeature].icon;
                              return <ActiveIcon
                                size={180}
                                strokeWidth={0.5}
                                className="transition-colors duration-500"
                                style={{
                                  color: features[activeFeature].color,
                                  fill: `${features[activeFeature].color}10`
                                }}
                              />;
                            })()}
                          </div>

                          {/* Dynamic Gradient Blob behind icon */}
                          <div
                            className="absolute inset-0 filter blur-[80px] opacity-20 mix-blend-multiply"
                            style={{ backgroundColor: features[activeFeature].color }}
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Bottom Data Hud - Light Mode */}
                    <div className="h-32 bg-slate-50/80 border-t border-slate-200/60 p-6 grid grid-cols-2 gap-4 backdrop-blur-xl">
                      {features[activeFeature].stats.map((stat, i) => (
                        <div key={i} className="flex flex-col justify-center">
                          <div className="text-2xl font-bold font-mono text-slate-800 mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* RIGHT: The Triggers (Scrollable) */}
            <div className="w-1/2 pt-20 pl-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="min-h-[80vh] flex flex-col justify-center"
                  onViewportEnter={() => setActiveFeature(index)}
                  viewport={{ margin: "-50% 0px -50% 0px" }}
                >
                  <motion.div
                    initial={{ opacity: 0.2 }}
                    whileInView={{ opacity: 1 }}
                    className="transition-all duration-500 group cursor-pointer"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <span
                        className="font-mono text-4xl font-bold transition-all duration-500 hover:scale-110"
                        style={{
                          color: activeFeature === index ? feature.color : '#cbd5e1', // slate-300 inactive
                          opacity: activeFeature === index ? 1 : 0.5
                        }}
                      >
                        0{index + 1}
                      </span>
                      {activeFeature === index && (
                        <motion.div
                          layoutId="active-indicator"
                          className="h-px w-12"
                          style={{ backgroundColor: feature.color }}
                        />
                      )}
                    </div>

                    <h3 className={`text-5xl font-bold mb-6 leading-tight transition-colors duration-500 ${activeFeature === index ? 'text-slate-900' : 'text-slate-300'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-xl leading-relaxed max-w-md transition-colors duration-500 ${activeFeature === index ? 'text-slate-600' : 'text-slate-300'}`}>
                      {feature.desc}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Fallback - Light Mode Cards */}
          <div className="lg:hidden flex flex-col gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="bg-white border border-slate-200 rounded-3xl p-8 relative overflow-hidden shadow-sm"
              >
                <div className="absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-10" style={{ backgroundColor: feature.color }} />

                <feature.icon size={48} className="mb-6" style={{ color: feature.color }} />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 mb-6">{feature.desc}</p>

                <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                  {feature.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-lg font-bold text-slate-900">{stat.value}</div>
                      <div className="text-xs text-slate-400 uppercase font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Target, Shield, Eye, Sparkles, Zap, Users, ArrowRight } from "lucide-react";
import { useRef } from "react";

// --- The Synapse Visual Component (Light Theme Version) ---
const SynapseVisual = () => {
    // Mouse interaction for 3D tilt
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXParam = (e.clientX - rect.left) / width - 0.5;
        const mouseYParam = (e.clientY - rect.top) / height - 0.5;
        mouseX.set(mouseXParam);
        mouseY.set(mouseYParam);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    // Nodes representing Brand Values/Pillars - Updated Colors for Light Theme
    // Using percentage-based positioning for better zoom scaling
    const nodes = [
        { id: 1, label: "Predictable", icon: Target, x: -80, y: -50, color: "#059669", bg: "bg-emerald-50", border: "border-emerald-200", delay: 0 },
        { id: 2, label: "Transparent", icon: Eye, x: 80, y: -50, color: "#2563eb", bg: "bg-blue-50", border: "border-blue-200", delay: 1.5 },
        { id: 3, label: "Risk-Free", icon: Shield, x: 0, y: 80, color: "#7c3aed", bg: "bg-violet-50", border: "border-violet-200", delay: 3 },
    ];

    return (
        <div
            className="relative w-full h-[300px] md:h-[380px] lg:h-[450px] xl:h-[500px] flex items-center justify-center perspective-[1000px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative w-[220px] h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] xl:w-[340px] xl:h-[340px]"
            >
                {/* Central Core representing "Skoal Belief System" */}
                {/* Made white/glassy for light theme */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1], boxShadow: ["0 10px 40px -10px rgba(16,185,129,0.3)", "0 20px 60px -10px rgba(16,185,129,0.5)", "0 10px 40px -10px rgba(16,185,129,0.3)"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white border border-emerald-100 flex items-center justify-center z-20"
                    style={{ transform: "translateZ(20px)" }}
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-50 to-white opacity-80" />
                    <div className="text-center relative z-10">
                        <div className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 tracking-widest font-serif">CORE</div>
                        <div className="text-[8px] md:text-[9px] lg:text-[10px] text-emerald-600 uppercase tracking-widest mt-0.5 md:mt-1 font-bold">Values</div>
                    </div>
                </motion.div>

                {/* Orbiting Rings - Darker lines for visibility on white */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-dashed border-emerald-900/10"
                    style={{ transform: "translateZ(-10px) scale(1.5)" }}
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-slate-900/5"
                    style={{ transform: "translateZ(-20px) scale(1.2)" }}
                />

                {/* Nodes & Connections */}
                {nodes.map((node, i) => (
                    <div key={node.id} className="absolute top-1/2 left-1/2 w-0 h-0">
                        {/* Connection Line - Updated Gradient for Light Theme */}
                        <svg className="absolute top-0 left-0 overflow-visible w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ transform: `translateZ(-5px)` }}>
                            <motion.line
                                x1="250" y1="250"
                                x2={250 + node.x} y2={250 + node.y}
                                stroke="url(#lineGradientLight)"
                                strokeWidth="2"
                                strokeDasharray="4 4"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.4 }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            />
                            {/* Data Packet */}
                            <motion.circle
                                r="4" fill={node.color}
                                animate={{
                                    cx: [250, 250 + node.x],
                                    cy: [250, 250 + node.y],
                                    opacity: [0, 1, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: node.delay,
                                    repeatDelay: 1
                                }}
                            />
                            <defs>
                                <linearGradient id="lineGradientLight" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#10b981" />
                                    <stop offset="100%" stopColor="transparent" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Node Card - Card styling for Light Theme */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 + (i * 0.2), type: "spring" }}
                            className={`absolute -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md border ${node.border} p-2 md:p-2.5 lg:p-3 rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 ${node.className || ''}`}
                            style={{
                                left: node.x,
                                top: node.y,
                                transform: "translateZ(40px)"
                            }}
                        >
                            <div className={`p-1.5 md:p-2 rounded-md md:rounded-lg ${node.bg}`} style={{ color: node.color }}>
                                <node.icon size={14} className="md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            </div>
                            <div>
                                <div className="text-slate-900 text-xs md:text-sm font-bold">{node.label}</div>
                                <div className="text-slate-500 text-[8px] md:text-[9px] lg:text-[10px] uppercase tracking-wider font-medium">Pillar 0{i + 1}</div>
                            </div>

                            {/* Pulse Effect */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className={`absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full`}
                                style={{ backgroundColor: node.color }}
                            />
                        </motion.div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default function AboutHero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen bg-white text-slate-900 overflow-hidden selection:bg-emerald-100 selection:text-emerald-900">

            {/* --- Background Elements --- */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Light Theme Gradients */}
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-emerald-50/80 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50/80 rounded-full blur-[100px]" />
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-slate-50/50 blur-[80px]" />

                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            </div>

            <motion.div style={{ y, opacity }} className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative z-10 min-h-screen flex items-center">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">

                    {/* --- Left Column: Typography --- */}
                    <div className="max-w-2xl mx-auto lg:mx-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6 sm:mb-8"
                        >
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                                <Sparkles size={14} className="text-emerald-500" />
                            </motion.div>
                            <span className="text-slate-600 text-[10px] sm:text-xs font-bold tracking-widest uppercase">Our Purpose</span>
                        </motion.div>

                        <h1 
                            className="font-bold tracking-tight leading-[1.15] mb-5 sm:mb-6 md:mb-8"
                            style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}
                        >
                            <span className="block text-slate-900 whitespace-nowrap">People operations</span>
                            <span className="block font-(family-name:--font-playfair) italic text-emerald-700 pb-1 md:pb-2 whitespace-nowrap">
                                made extraordinary.
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-slate-500 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-lg font-medium">
                            At Skoal Solutions, we believe in a world where workforce management is predictable, transparent, and completely risk-free.
                        </p>

                        {/* Values Checklist */}
                        <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 text-slate-600">
                            <motion.li
                                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
                                className="flex items-center gap-3"
                            >
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100 shrink-0"><Target size={14} className="sm:w-4 sm:h-4" /></div>
                                <span className="font-medium text-sm sm:text-base">Consistent outcomes every time</span>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
                                className="flex items-center gap-3"
                            >
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 shrink-0"><Shield size={14} className="sm:w-4 sm:h-4" /></div>
                                <span className="font-medium text-sm sm:text-base">Complete visibility across operations</span>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}
                                className="flex items-center gap-3"
                            >
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-violet-50 flex items-center justify-center text-violet-600 border border-violet-100 shrink-0"><Zap size={14} className="sm:w-4 sm:h-4" /></div>
                                <span className="font-medium text-sm sm:text-base">Zero-leakage compliance architecture</span>
                            </motion.li>
                        </ul>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="flex flex-col sm:flex-row gap-4 items-start"
                        >
                            <button className="group relative px-5 sm:px-6 py-2.5 sm:py-3 bg-slate-900 text-white rounded-full font-semibold text-sm sm:text-base transition-all hover:shadow-lg hover:shadow-slate-900/20 hover:-translate-y-0.5">
                                <span className="flex items-center gap-2">
                                    Read Our Story <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </motion.div>
                    </div>

                    {/* --- Right Column: The Synapse (About Version) --- */}
                    <div className="hidden md:block relative">
                        {/* Glow behind visual */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[380px] lg:w-[450px] xl:w-[500px] h-[300px] md:h-[380px] lg:h-[450px] xl:h-[500px] bg-gradient-radial from-emerald-100/50 to-transparent rounded-full blur-[50px] md:blur-[60px] lg:blur-[70px] pointer-events-none" />
                        <SynapseVisual />
                    </div>

                </div>
            </motion.div>
        </section>
    );
}

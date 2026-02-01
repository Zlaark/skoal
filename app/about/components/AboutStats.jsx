"use client";
import Link from "next/link";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Shield, Globe, Users, Clock, ArrowUpRight, Zap, TrendingUp, Activity } from "lucide-react";

// INDUSTRY-LEVEL: Animated Data Flow Visualization
const PremiumVisualization = () => {
    return (
        <div className="relative w-full h-full bg-[#011c15] rounded-3xl overflow-hidden border border-emerald-500/20">
            {/* Deep Radial Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]" />

            {/* Animated Grid Floor */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute w-[200%] h-[200%] left-[-50%] top-[20%]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                        transform: 'perspective(500px) rotateX(60deg)',
                        transformOrigin: 'center top'
                    }}
                />
                {/* Grid Animation Overlay */}
                <motion.div
                    className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
                    style={{ top: '60%' }}
                    animate={{
                        x: ['-100%', '100%'],
                        opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Floating Data Cards */}
            {[
                { x: 15, y: 25, delay: 0, label: "COMPLIANCE", value: "100%" },
                { x: 75, y: 20, delay: 0.5, label: "UPTIME", value: "24/7" },
                { x: 50, y: 70, delay: 1, label: "REGIONS", value: "2+" },
            ].map((card, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{ left: `${card.x}%`, top: `${card.y}%`, transform: 'translate(-50%, -50%)' }}
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: card.delay, duration: 0.8, type: "spring" }}
                >
                    <motion.div
                        className="px-4 py-3 rounded-xl bg-emerald-950/80 border border-emerald-500/30 backdrop-blur-sm"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="text-[10px] font-mono text-emerald-500 mb-1">{card.label}</div>
                        <div className="text-2xl font-bold text-white">{card.value}</div>
                    </motion.div>

                    {/* Connection Lines */}
                    <svg className="absolute top-full left-1/2 w-[2px] h-16 -translate-x-1/2">
                        <motion.line
                            x1="1" y1="0" x2="1" y2="64"
                            stroke="#10b981"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ delay: card.delay + 0.5, duration: 1 }}
                        />
                    </svg>
                </motion.div>
            ))}

            {/* Central Hub with Pulse */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Outer Rings */}
                {[100, 140, 180].map((size, i) => (
                    <motion.div
                        key={i}
                        className="absolute left-1/2 top-1/2 rounded-full border border-emerald-500/20"
                        style={{
                            width: size,
                            height: size,
                            marginLeft: -size / 2,
                            marginTop: -size / 2
                        }}
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                    />
                ))}

                {/* Core */}
                <motion.div
                    className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.6)]"
                    animate={{
                        boxShadow: [
                            "0 0 40px rgba(16,185,129,0.4)",
                            "0 0 80px rgba(16,185,129,0.6)",
                            "0 0 40px rgba(16,185,129,0.4)"
                        ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <Activity className="text-white" size={36} />
                </motion.div>
            </div>

            {/* Data Flow Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-emerald-400"
                    style={{
                        left: `${(i * 13) % 100}%`,
                        top: `${(i * 37) % 100}%`,
                    }}
                    animate={{
                        y: [0, -100],
                        x: [0, ((i % 2 === 0 ? 1 : -1) * 25)],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                    }}
                    transition={{
                        duration: 3 + (i % 3),
                        repeat: Infinity,
                        delay: (i * 0.2),
                        ease: "easeOut"
                    }}
                />
            ))}

            {/* Status Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-emerald-400">
                    <motion.span
                        className="w-2 h-2 rounded-full bg-emerald-400"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    SYSTEM ACTIVE
                </div>
                <div className="text-emerald-500/50">REAL-TIME SYNC</div>
            </div>
        </div>
    );
};

// Animated Counter with Easing
function AnimatedCounter({ value, suffix }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const numericValue = parseInt(value);
            if (isNaN(numericValue)) { setCount(value); return; }

            let start = 0;
            const duration = 2000;
            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(easeOut * numericValue);
                setCount(current);
                if (progress < 1) requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
        }
    }, [isInView, value]);

    return <span ref={ref}>{count}{suffix}</span>;
}


// THE SUPERNOVA BUTTON
const SupernovaButton = () => {
    return (
        <Link href="/contact">
            <motion.button
                whileHover="hover"
                initial="idle"
                className="group relative px-10 py-5 rounded-full bg-white text-slate-950 font-bold text-lg tracking-wide overflow-visible transition-all duration-500 hover:scale-105"
            >
                {/* Hover Gradient Background (Absolute) */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 opacity-0"
                    variants={{
                        hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.3 }}
                />

                {/* Shockwave Rings */}
                <div className="absolute inset-0 rounded-full -z-10 flex items-center justify-center">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="absolute inset-0 rounded-full border border-white/50"
                            variants={{
                                idle: { opacity: 0, scale: 1 },
                                hover: {
                                    opacity: [0, 0.5, 0],
                                    scale: [1, 1.5 + (i * 0.2)],
                                    borderColor: ["rgba(255,255,255,0.5)", "rgba(16,185,129,0.5)"],
                                    transition: {
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                        ease: "easeOut"
                                    }
                                }
                            }}
                        />
                    ))}
                </div>

                {/* Content */}
                <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                    <Zap className="fill-current w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Let's Build Together</span>
                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>

                {/* Idle Glow (White) */}
                <div className="absolute inset-0 rounded-full bg-white blur-lg opacity-20 group-hover:opacity-0 transition-opacity" />

                {/* Hover Glow (Colored) */}
                <div className="absolute inset-0 rounded-full bg-emerald-400 blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />

            </motion.button>
        </Link>
    );
};


const stats = [
    { icon: <Shield size={24} />, value: "100", suffix: "%", label: "Compliance Rate", sub: "Zero statutory violations" },
    { icon: <Globe size={24} />, value: "2", suffix: "+", label: "Regions Covered", sub: "India & Middle East" },
    { icon: <Users size={24} />, value: "10", suffix: "K+", label: "Employees Managed", sub: "Across all clients" },
    { icon: <Clock size={24} />, value: "24", suffix: "/7", label: "Support Available", sub: "Always operational" }
];

export default function AboutStats() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="relative py-20 sm:py-24 md:py-32 overflow-hidden" id="stats">
            {/* Premium Dark Background */}
            <div className="absolute inset-0 bg-[#011c15]" />

            {/* Animated Aurora */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-0 left-1/4 w-[800px] h-[400px] bg-gradient-to-r from-emerald-600/20 via-teal-500/10 to-emerald-600/20 blur-[100px] rounded-full"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-gradient-to-r from-teal-600/15 via-emerald-500/10 to-teal-600/15 blur-[80px] rounded-full"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                />
            </div>

            {/* Subtle Grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
                    backgroundSize: '80px 80px'
                }}
            />

            <motion.div style={{ opacity }} className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm mb-6 sm:mb-8"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <TrendingUp size={16} className="sm:w-[18px] sm:h-[18px] text-emerald-400" />
                        </motion.div>
                        <span className="text-emerald-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                            Our Impact
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6"
                    >
                        Numbers that{" "}
                        <motion.span
                            className="inline-block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400"
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            style={{ backgroundSize: "200% 200%" }}
                        >
                            speak.
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-emerald-100/50 max-w-2xl mx-auto px-4"
                    >
                        We are not just a service provider—we operate as a long-term workforce and operations partner.
                    </motion.p>
                </div>

                {/* Main Layout */}
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

                    {/* Left: Premium Stats Cards */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                                className="group relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-950/80 to-emerald-900/40 border border-emerald-500/20 backdrop-blur-sm overflow-hidden cursor-default min-h-[160px] sm:min-h-[180px] md:min-h-[200px] flex flex-col justify-between"
                            >
                                {/* Hover Glow */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />

                                {/* Icon */}
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3 sm:mb-4 group-hover:bg-emerald-500/30 group-hover:border-emerald-400/50 transition-all">
                                    {stat.icon}
                                </div>

                                {/* Number */}
                                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 font-mono">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </div>

                                {/* Labels */}
                                <div className="text-white font-medium text-xs sm:text-sm mb-0.5 sm:mb-1">{stat.label}</div>
                                <div className="text-emerald-400/50 text-[10px] sm:text-xs">{stat.sub}</div>

                                {/* Corner Accent */}
                                <ArrowUpRight
                                    className="absolute top-3 sm:top-4 right-3 sm:right-4 text-emerald-500/20 group-hover:text-emerald-400 group-hover:rotate-45 transition-all duration-300"
                                    size={16}
                                />

                                {/* Bottom Accent */}
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ originX: 0 }}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Premium Visualization */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
                    >
                        <PremiumVisualization />
                    </motion.div>
                </div>

                {/* CTA - SUPERNOVA BUTTON REPLACEMENT */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 sm:mt-16 md:mt-20 flex justify-center"
                >
                    <SupernovaButton />
                </motion.div>
            </motion.div>
        </section>
    );
}

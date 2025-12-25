"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle2, ShieldCheck, Zap, FileCheck, Briefcase, ArrowUpRight, Sparkles, Play, Globe2, Scan, Activity } from "lucide-react";

const coreValues = [
    {
        icon: <ShieldCheck size={24} />,
        title: "Compliance-First",
        desc: "100% statutory adherence across all operations.",
        metric: "100%",
        metricLabel: "Adherence"
    },
    {
        icon: <Zap size={24} />,
        title: "Zero-Leakage",
        desc: "Precision payroll architecture that eliminates leakages.",
        metric: "0",
        metricLabel: "Violations"
    },
    {
        icon: <FileCheck size={24} />,
        title: "Audit-Ready",
        desc: "Transparent reporting for any audit requirement.",
        metric: "24/7",
        metricLabel: "Ready"
    },
    {
        icon: <Briefcase size={24} />,
        title: "Scalable",
        desc: "Solutions that grow with your business needs.",
        metric: "10K+",
        metricLabel: "Capacity"
    }
];

const checklistItems = [
    "Founded with compliance-first DNA",
    "Deep expertise in HR payrolling & governance",
    "In-house HRMS & technology stack",
    "India & Middle East coverage"
];

// PREMIUM DECORATION: Compliance Network Animation
function ComplianceNetworkAnimation() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Center Hub behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%]">

                {/* Rotating Rings */}
                {[1, 2, 3].map((ring, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 rounded-full border border-emerald-500/10"
                        style={{
                            width: `${50 + ring * 30}%`,
                            height: `${50 + ring * 30}%`,
                            x: "-50%",
                            y: "-50%"
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30 + ring * 10, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                    >
                        {/* Nodes on Rings */}
                        <motion.div
                            className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-emerald-500/40 -translate-x-1/2 -translate-y-1/2"
                        />
                        <motion.div
                            className="absolute bottom-0 left-1/2 w-1.5 h-1.5 rounded-full bg-teal-500/40 -translate-x-1/2 translate-y-1/2"
                        />
                    </motion.div>
                ))}

                {/* Pulse Radar */}
                <motion.div
                    className="absolute top-1/2 left-1/2 rounded-full border border-emerald-400/20 bg-emerald-400/5 -translate-x-1/2 -translate-y-1/2"
                    initial={{ width: "20%", height: "20%", opacity: 0 }}
                    animate={{ width: "100%", height: "100%", opacity: [0, 0.3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
                />
            </div>

            {/* Floating Data Packets */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-emerald-400 h-[1px] w-12"
                    style={{
                        left: `${(i * 19) % 100}%`,
                        top: `${(i * 23) % 100}%`,
                        rotate: (i * 45) % 360
                    }}
                    animate={{
                        opacity: [0, 0.6, 0],
                        scaleX: [0.5, 1.5, 0.5],
                        x: [0, ((i % 2 === 0 ? 1 : -1) * 50)],
                        y: [0, ((i % 3 === 0 ? 1 : -1) * 30)]
                    }}
                    transition={{ duration: 3 + (i % 3), repeat: Infinity }}
                />
            ))}
        </div>
    );
}

// PREMIUM Value Card Component
function PremiumCard({ value, index }) {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative cursor-default"
            style={{ perspective: "1000px" }}
        >
            <motion.div
                className="relative h-full p-5 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden shadow-xl shadow-emerald-950/20"
                whileHover={{
                    y: -8,
                    borderColor: "rgba(16, 185, 129, 0.4)",
                    transition: { duration: 0.3 }
                }}
            >
                {/* Animated Background Gradient */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-teal-500/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                />

                {/* Floating Particles */}
                {isHovered && [...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-emerald-400"
                        initial={{
                            x: 50 + Math.random() * 50,
                            y: 50 + Math.random() * 50,
                            opacity: 0,
                            scale: 0
                        }}
                        animate={{
                            x: 50 + (Math.random() - 0.5) * 150,
                            y: (Math.random() - 0.5) * 150,
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0]
                        }}
                        transition={{ duration: 1.5, delay: i * 0.05 }}
                    />
                ))}

                {/* Header Row */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                    <motion.div
                        className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30"
                        animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {value.icon}
                    </motion.div>

                    {/* Metric Badge */}
                    <div className="text-right">
                        <motion.div
                            className="text-2xl font-bold text-emerald-400 font-mono"
                            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                        >
                            {value.metric}
                        </motion.div>
                        <div className="text-[9px] font-mono text-emerald-500/60 uppercase tracking-wider">
                            {value.metricLabel}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-emerald-300 transition-colors duration-300">
                        {value.title}
                    </h3>
                    <p className="text-emerald-100/50 text-xs leading-relaxed">
                        {value.desc}
                    </p>
                </div>

                {/* Bottom Accent */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ originX: 0 }}
                />

                {/* Corner Glow */}
                <motion.div
                    className="absolute -top-10 -right-10 w-20 h-20 bg-emerald-500/30 rounded-full blur-xl"
                    animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1.5 : 1 }}
                    transition={{ duration: 0.4 }}
                />
            </motion.div>
        </motion.div>
    );
}

// Animated Checklist
function AnimatedChecklist({ items }) {
    return (
        <div className="space-y-3">
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                    whileHover={{ x: 8 }}
                    className="group flex items-center gap-3 cursor-default"
                >
                    <motion.div
                        className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.2, backgroundColor: "rgba(16, 185, 129, 0.3)" }}
                    >
                        <CheckCircle2 size={12} className="text-emerald-400" />
                    </motion.div>
                    <span className="text-emerald-100/70 text-sm group-hover:text-white transition-colors">
                        {item}
                    </span>
                </motion.div>
            ))}
        </div>
    );
}

export default function AboutMission() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

    return (
        <section ref={containerRef} className="py-16 relative px-4">
            <motion.div
                style={{ scale, opacity }}
                className="relative bg-[#022c22] rounded-[2.5rem] overflow-hidden text-white"
            >
                {/* Premium Background Effects */}
                <div className="absolute inset-0">
                    {/* Gradient Mesh */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#011c15] via-[#022c22] to-[#023d31]" />

                    {/* Animated Orbs */}
                    <motion.div
                        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[120px]"
                        animate={{
                            scale: [1, 1.3, 1],
                            x: [0, 50, 0],
                            y: [0, -30, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px]"
                        animate={{
                            scale: [1, 1.2, 1],
                            x: [0, -40, 0],
                            y: [0, 40, 0]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                    />

                    {/* Grid Pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
                            backgroundSize: '60px 60px'
                        }}
                    />

                    {/* Floating Particles */}
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-emerald-400/30"
                            style={{
                                left: `${5 + i * 7}%`,
                                top: `${10 + (i % 5) * 18}%`,
                            }}
                            animate={{
                                y: [0, -40, 0],
                                opacity: [0.2, 0.6, 0.2],
                                scale: [1, 1.5, 1]
                            }}
                            transition={{
                                duration: 5 + i * 0.3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.2
                            }}
                        />
                    ))}
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 lg:p-16">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                        {/* Left Column */}
                        <div className="space-y-8 relative z-20">
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm"
                            >
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                >
                                    <Sparkles size={14} className="text-emerald-400" />
                                </motion.div>
                                <span className="text-emerald-300 text-xs font-semibold tracking-[0.15em] uppercase">
                                    Our Mission
                                </span>
                                <motion.span
                                    className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </motion.div>

                            {/* Heading */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight">
                                    <span className="block text-white">Building the future of</span>
                                    <motion.span
                                        className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 font-serif italic"
                                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                        transition={{ duration: 5, repeat: Infinity }}
                                        style={{ backgroundSize: "200% 200%" }}
                                    >
                                        workforce management.
                                    </motion.span>
                                </h2>
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-emerald-100/50 leading-relaxed max-w-lg"
                            >
                                Founded with a strong compliance-first mindset, Skoal has built deep capabilities
                                in HR payrolling, statutory governance, and omnichannel BPO services.
                            </motion.p>

                            {/* Checklist */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <AnimatedChecklist items={checklistItems} />
                            </motion.div>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group flex items-center gap-3 text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                                        <Play size={14} className="ml-0.5" />
                                    </div>
                                    <span>Watch Our Story</span>
                                    <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                                </motion.button>
                            </motion.div>
                        </div>

                        {/* Right Column: Value Cards + Animation */}
                        <div className="relative">
                            {/* Filling the 'Empty Space' with Animation */}
                            <ComplianceNetworkAnimation />

                            {/* Additional 'Active' Status Badge below cards */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-16 left-0 right-0 flex justify-center pointer-events-none"
                            >
                                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-950/50 border border-emerald-500/20 backdrop-blur-md">
                                    <div className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </div>
                                    <span className="text-[10px] font-mono text-emerald-400/80 tracking-widest uppercase">
                                        System Operational
                                    </span>
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-2 gap-4 relative z-10">
                                {coreValues.map((value, i) => (
                                    <PremiumCard key={i} value={value} index={i} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

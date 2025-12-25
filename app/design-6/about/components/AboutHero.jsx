"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Target, Shield, Eye, Sparkles, ChevronDown } from "lucide-react";

const values = [
    {
        icon: <Target size={24} />,
        title: "Predictable",
        desc: "Consistent outcomes every time",
        gradient: "from-emerald-500 to-teal-500"
    },
    {
        icon: <Shield size={24} />,
        title: "Transparent",
        desc: "Complete visibility across operations",
        gradient: "from-blue-500 to-indigo-500"
    },
    {
        icon: <Eye size={24} />,
        title: "Risk-Free",
        desc: "Zero-leakage compliance architecture",
        gradient: "from-violet-500 to-purple-500"
    }
];

export default function AboutHero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-32 pb-20"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Dot Grid Pattern */}
                <motion.div
                    style={{ opacity }}
                    className="absolute inset-0 opacity-[0.4]"
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                            backgroundSize: '32px 32px'
                        }}
                    />
                </motion.div>

                {/* Animated Gradient Orbs */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] right-[-5%] w-[900px] h-[900px] bg-gradient-to-br from-emerald-100/60 to-teal-100/40 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.3, 1],
                        x: [0, -40, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    className="absolute bottom-[-20%] left-[-15%] w-[700px] h-[700px] bg-gradient-to-tr from-blue-100/50 to-emerald-100/50 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        opacity: [0.15, 0.35, 0.15],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                    className="absolute top-[40%] left-[60%] w-[400px] h-[400px] bg-gradient-to-br from-violet-100/40 to-pink-100/40 rounded-full blur-[80px]"
                />

                {/* Floating Particles */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: 4 + (i % 3) * 4,
                            height: 4 + (i % 3) * 4,
                            background: `linear-gradient(135deg, ${['#10b981', '#3b82f6', '#8b5cf6'][i % 3]}50, ${['#14b8a6', '#6366f1', '#a855f7'][i % 3]}50)`,
                            left: `${5 + i * 8}%`,
                            top: `${10 + (i % 5) * 18}%`,
                        }}
                        animate={{
                            y: [0, -50 - i * 5, 0],
                            x: [0, i % 2 === 0 ? 20 : -20, 0],
                            opacity: [0.3, 0.7, 0.3],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: 6 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3
                        }}
                    />
                ))}
            </div>

            <motion.div
                style={{ y, opacity, scale }}
                className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center"
            >
                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-xl shadow-emerald-100/30 mb-10"
                >
                    <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                        <Sparkles size={18} className="text-emerald-600" />
                    </motion.div>
                    <span className="text-slate-700 text-sm font-bold tracking-widest uppercase">About Us</span>
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#06402B]"></span>
                    </span>
                </motion.div>

                {/* Main Heading with Staggered Line Animation */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[1.05] mb-10 text-slate-900">
                    <span className="block overflow-hidden pb-2">
                        <motion.span
                            initial={{ y: "110%", rotateX: -80 }}
                            animate={{ y: 0, rotateX: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="block"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            People operations
                        </motion.span>
                    </span>
                    <span className="block overflow-hidden">
                        <motion.span
                            initial={{ y: "110%", rotateX: -80 }}
                            animate={{ y: 0, rotateX: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                            className="block"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            made{" "}
                            <motion.span
                                className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#022c22] via-[#059669] to-[#022c22] inline-block"
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                style={{ backgroundSize: "200% 200%" }}
                            >
                                extraordinary.
                            </motion.span>
                        </motion.span>
                    </span>
                </h1>

                {/* Animated Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-16 leading-relaxed font-medium"
                >
                    At Skoal Solutions, we believe people operations should be{" "}
                    <motion.span
                        className="text-emerald-600 font-semibold"
                        whileHover={{ scale: 1.05 }}
                    >
                        predictable
                    </motion.span>,{" "}
                    <motion.span
                        className="text-emerald-600 font-semibold"
                        whileHover={{ scale: 1.05 }}
                    >
                        transparent
                    </motion.span>, and{" "}
                    <motion.span
                        className="text-emerald-600 font-semibold"
                        whileHover={{ scale: 1.05 }}
                    >
                        risk-free
                    </motion.span>.
                </motion.p>

                {/* Value Pills with Enhanced Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="flex flex-wrap justify-center gap-5 md:gap-8"
                >
                    {values.map((value, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.9 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="group relative flex items-center gap-4 px-8 py-5 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-900/10 hover:border-emerald-200 transition-all duration-500 cursor-default overflow-hidden"
                        >
                            {/* Gradient Overlay */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                            />

                            {/* Icon with Animation */}
                            <motion.div
                                className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center text-[#0A261D] group-hover:scale-110 transition-transform duration-300 relative"
                                animate={{ y: [0, -3, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                            >
                                {value.icon}
                                {/* Pulse Ring */}
                                <motion.div
                                    className="absolute inset-0 rounded-xl border-2 border-emerald-200"
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                />
                            </motion.div>

                            <div className="text-left relative z-10">
                                <div className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">
                                    {value.title}
                                </div>
                                <div className="text-xs text-slate-400 group-hover:text-slate-500 transition-colors">
                                    {value.desc}
                                </div>
                            </div>

                            {/* Shine Effect */}
                            <motion.div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden rounded-2xl"
                            >
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "200%" }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Scroll Indicator with Enhanced Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2 text-slate-400 cursor-pointer hover:text-emerald-600 transition-colors"
                    >
                        <span className="text-xs font-medium tracking-widest uppercase">Scroll to explore</span>
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-8 h-12 rounded-full border-2 border-current flex items-start justify-center p-2"
                        >
                            <motion.div
                                animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

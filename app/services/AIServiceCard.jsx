"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Activity, Globe, Zap, Cpu } from "lucide-react";
import React, { useState, useEffect } from "react";

// Redesigned Service Card - "AI / Neural Interface" Aesthetic
// High-tech, holographic, fully animated.
export default function AIServiceCard({ service, index }) {
    const [isHovered, setIsHovered] = useState(false);

    // Mouse Tracking Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = event.clientX - rect.left;
        const mouseYVal = event.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: "backOut" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="group relative h-full perspective-[1200px]"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
                className="relative h-full bg-white rounded-[2.5rem] overflow-hidden transition-all duration-500 ease-out border border-slate-100 group-hover:border-transparent"
            >
                {/* === LAYERS === */}

                {/* 1. Base Gradient (Subtle) */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-emerald-50/30 opacity-100" />

                {/* 2. Grid Pattern (Tech Feel) */}
                <div
                    className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500"
                    style={{
                        backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* 3. Animated Gradient Orb (Moving Blob) */}
                <motion.div
                    className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                {/* 4. Active Border Gradient (The "Border Beam") */}
                <div className="absolute inset-0 p-[2px] rounded-[2.5rem] bg-gradient-to-br from-transparent via-emerald-400/0 to-transparent group-hover:via-emerald-400/50 transition-all duration-500 pointer-events-none w-full h-full -z-10" />
                <motion.div
                    className="absolute inset-0 border-2 border-emerald-500/0 rounded-[2.5rem] group-hover:border-emerald-500/20 transition-all duration-500"
                    style={{ transform: "translateZ(10px)" }}
                />

                {/* 5. Spotlight Effect */}
                <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: useTransform(
                            [mouseX, mouseY],
                            ([xVal, yVal]) => `radial-gradient(800px circle at ${(xVal + 0.5) * 100}% ${(yVal + 0.5) * 100}%, rgba(16, 185, 129, 0.08), transparent 40%)`
                        )
                    }}
                />


                {/* === CONTENT CONTAINER === */}
                <div className="relative z-10 flex flex-col h-full p-8 lg:p-10" style={{ transform: "translateZ(30px)" }}>

                    {/* Header: Icon + "AI" Status */}
                    <div className="flex justify-between items-start mb-8">
                        <motion.div
                            className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-lg shadow-emerald-100/50 border border-emerald-50/50 text-emerald-600 overflow-hidden"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-50" />
                            {/* Animated Pulse Ring behind Icon */}
                            <motion.div
                                className="absolute inset-0 bg-emerald-400/20 blur-xl"
                                animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2, 0.8] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <div className="relative z-10">
                                {service.icon}
                            </div>
                        </motion.div>

                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50/50 border border-emerald-100/50 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">Active</span>
                        </div>
                    </div>

                    {/* Title & Description */}
                    <div className="mb-auto">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-800 transition-colors duration-300">
                            {service.title}
                        </h3>
                        <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium group-hover:text-slate-600 transition-colors">
                            {service.desc}
                        </p>
                    </div>

                    {/* Data Visualization / Footer */}
                    <div className="mt-8 pt-6 border-t border-slate-100 group-hover:border-emerald-100/50 transition-colors relative">
                        {/* Decorative Data Lines */}
                        <div className="absolute top-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="flex items-end justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Activity size={12} className="text-emerald-500" />
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-emerald-600/70 transition-colors">
                                        {service.statLabel}
                                    </span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-serif font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                        {service.stat}
                                    </span>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.1, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-emerald-500 flex items-center justify-center text-slate-400 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-emerald-500/40"
                            >
                                <ArrowRight size={18} />
                            </motion.button>
                        </div>
                    </div>

                </div>
            </motion.div>
        </motion.div>
    );
}

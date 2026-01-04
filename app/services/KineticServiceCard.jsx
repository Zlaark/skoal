"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

// Redesigned Service Card - Kinetic Premium Enterprise Aesthetic ("Fully Animated")
export default function KineticServiceCard({ service, index }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [5, -5]);
    const rotateY = useTransform(x, [-100, 100], [-5, 5]);

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                bounce: 0.4
            }}
            style={{
                perspective: 1000,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group h-full"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
                className="relative h-full bg-white rounded-[2.5rem] p-8 lg:p-10 border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] overflow-hidden transition-shadow duration-500 group-hover:shadow-[0_30px_60px_-15px_rgba(16,185,129,0.15)]"
            >
                {/* --- Animated Backgrounds --- */}

                {/* 1. Gradient Mesh Orb (Moves slightly) */}
                <motion.div
                    className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                {/* 2. Intelligent Spotlight (Follows Mouse) */}
                <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: useTransform(
                            [x, y],
                            ([latestX, latestY]) => `radial-gradient(600px circle at ${latestX + 200}px ${latestY + 200}px, rgba(16, 185, 129, 0.05), transparent 40%)`
                        )
                    }}
                />

                {/* 3. Border Beam (Shimmer effect on edges) */}
                <div className="absolute inset-0 rounded-[2.5rem] border border-transparent group-hover:border-emerald-500/10 transition-colors duration-500" />

                {/* --- Content --- */}
                <div className="relative z-10 flex flex-col h-full justify-between" style={{ transform: "translateZ(20px)" }}>
                    <div>
                        {/* Icon - Floating & Glowing */}
                        <motion.div
                            className="mb-8 inline-flex p-4 rounded-2xl bg-slate-50 text-emerald-600 border border-slate-100 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-400 group-hover:shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-500"
                            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {service.icon}
                        </motion.div>

                        {/* Title - Reveal Animation */}
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-800 transition-colors">
                            {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-500 text-base leading-relaxed font-medium group-hover:text-slate-600 transition-colors">
                            {service.desc}
                        </p>
                    </div>

                    {/* Bottom Metric - Counter Animation */}
                    <div className="mt-8 pt-6 border-t border-slate-100 group-hover:border-emerald-100/50 transition-colors">
                        <div className="flex items-end justify-between">
                            <div>
                                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-emerald-600/60 transition-colors">
                                    {service.statLabel}
                                </div>
                                <div className="text-3xl font-serif font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                    {service.stat}
                                </div>
                            </div>

                            {/* Arrow Button - Elastic Slide */}
                            <motion.div
                                className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-emerald-500 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors duration-300"
                                whileHover={{ x: 5 }}
                            >
                                <ArrowRight size={18} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

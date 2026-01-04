"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import {
    Cpu,
    ShieldCheck,
    FileCheck,
    Lock,
} from "lucide-react";

const steps = [
    {
        id: "step-1",
        title: "Data Ingestion",
        subtitle: "Phase 01",
        desc: "Raw payroll data is ingested into the neural core. We validate inputs against 50+ logical checks to ensure absolute base accuracy.",
        icon: Cpu,
        color: "emerald",
    },
    {
        id: "step-2",
        title: "Compliance Filter",
        subtitle: "Phase 02",
        desc: "The data stream passes through our real-time compliance engine, automatically flagging and correcting any statutory deviations.",
        icon: ShieldCheck,
        color: "emerald",
    },
    {
        id: "step-3",
        title: "Doc Generation",
        subtitle: "Phase 03",
        desc: "Approved data triggers the automated generation of payslips, tax sheets, and bank files, organized instantly into secure employee vaults.",
        icon: FileCheck,
        color: "emerald",
    },
    {
        id: "step-4",
        title: "Governance Lock",
        subtitle: "Phase 04",
        desc: "The cycle is finalized with a specialized audit seal. Reports are locked, timestamped, and archived for immutable governance.",
        icon: Lock,
        color: "emerald",
    }
];

export default function PrecisionStepper() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="py-32 relative bg-emerald-950 overflow-hidden">

            {/* Background Atmosphere - "The Neural Dark" */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,rgba(2,44,34,0)_70%)]" />
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">

                {/* Section Header */}
                <div className="text-center mb-32 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/50 border border-emerald-800 shadow-sm mb-6 backdrop-blur-sm"
                    >
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                        <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">Intelligent Processing</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
                        The Neural <span className="font-serif italic text-emerald-400">Pathway.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-emerald-200/80 max-w-2xl mx-auto font-light leading-relaxed">
                        A continuous, intelligent stream of precision from data entry to final audit.
                    </p>
                </div>

                {/* --- THE TIMELINE --- */}
                <div className="relative">

                    {/* The Center Line (Progress) */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-emerald-900/50 -translate-x-1/2 hidden md:block">
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-emerald-500 via-teal-400 to-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                        />
                    </div>

                    <div className="space-y-8 md:space-y-16 relative">
                        {steps.map((step, index) => (
                            <TimelineNode key={step.id} step={step} index={index} />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}

function TimelineNode({ step, index }) {
    const isEven = index % 2 === 0;
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: true });

    return (
        <div ref={ref} className={`flex flex-col md:flex-row items-center gap-6 md:gap-0 relative ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

            {/* 1. The Content Card */}
            <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 lg:pr-24' : 'md:pl-16 lg:pl-24'}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    animate={{
                        opacity: isInView ? 1 : 0.1,
                        y: isInView ? 0 : 30,
                        filter: isInView ? "blur(0px)" : "blur(4px)"
                    }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="group relative bg-emerald-50/10 backdrop-blur-xl border border-emerald-100/20 p-8 rounded-[2rem] hover:bg-emerald-50/20 hover:border-emerald-200/30 transition-all duration-500 shadow-2xl"
                >
                    {/* Glowing Edge Effect */}
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-400 border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                <step.icon size={28} />
                            </div>
                            <span className="text-xs font-bold text-emerald-200/50 uppercase tracking-widest font-mono border border-white/5 px-3 py-1 rounded-full bg-white/5">
                                {step.subtitle}
                            </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                            {step.title}
                        </h3>
                        <p className="text-emerald-100/70 leading-relaxed text-base md:text-lg font-light">
                            {step.desc}
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* 2. Horizontal Connector (Desktop Only) */}
            <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[1px] bg-emerald-800/50 w-16 lg:w-24 ${isEven ? 'right-1/2' : 'left-1/2'}`}>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isInView ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ originX: isEven ? 1 : 0 }}
                    className="w-full h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                />
            </div>

            {/* 3. The Center Node (Connector) */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center shrink-0 z-20">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: isInView ? 1 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="relative w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-950 border-2 border-emerald-500/30 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center group"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: isInView ? 1 : 0 }}
                        transition={{ delay: 0.3 }}
                        className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,1)]"
                    />

                    {/* Constant Pulse */}
                    {isInView && (
                        <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-ping" />
                    )}
                </motion.div>
            </div>

            {/* 4. Empty Space (For Balance) */}
            <div className="hidden md:block w-1/2" />

        </div>
    );
}

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
        <section ref={containerRef} className="py-32 relative bg-emerald-950 overflow-hidden -mt-px">

            {/* Smooth Asymmetric Wave Transition (Slate-50 to Emerald) */}
            <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-0 z-10">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px]">
                    <path d="M0,0h1200v20c-150.8,49.2-308.8,51.8-466.5,7.7c-94.8-26.6-193.3-33-290.5-19c-142.1,20.5-287.5,12.5-443-24.3V0z" className="fill-slate-50"></path>
                </svg>
            </div>

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
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-emerald-900 -translate-x-1/2 hidden md:block" />

                    {/* Active Beam */}
                    <motion.div
                        style={{ height: useSpring(useScroll({ target: containerRef, offset: ["start center", "end center"] }).scrollYProgress, { stiffness: 100, damping: 30 }) }}
                        className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-emerald-400 via-teal-300 to-emerald-500 shadow-[0_0_20px_rgba(52,211,153,0.6)] -translate-x-1/2 hidden md:block origin-top"
                    />

                    <div className="space-y-12 md:space-y-24 relative py-12">
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
        <div ref={ref} className={`flex flex-col md:flex-row items-center gap-0 relative ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

            {/* 1. The Content Card */}
            <div className={`w-full md:w-1/2 flex ${isEven ? 'justify-end md:pr-12' : 'justify-start md:pl-12'}`}>
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        x: isInView ? 0 : (isEven ? -30 : 30)
                    }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="relative max-w-md text-left"
                >
                    {/* The "Plate" Box */}
                    <div className="relative bg-white/5 backdrop-blur-sm border border-emerald-500/20 p-8 rounded-2xl overflow-hidden group hover:bg-white/10 transition-colors duration-500">

                        {/* High-Tech Decor */}
                        <div className="absolute top-0 right-0 p-3 opacity-20">
                            <step.icon size={80} className="text-emerald-500 stroke-[0.5]" />
                        </div>

                        <div className="relative z-10">
                            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-2 block font-mono">
                                {step.subtitle} // SYSTEM_READY
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-emerald-100/70 text-sm md:text-base font-light leading-relaxed">
                                {step.desc}
                            </p>
                        </div>

                        {/* Scanline Effect */}
                        {isInView && (
                            <motion.div
                                initial={{ top: "-100%" }}
                                animate={{ top: "200%" }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: Math.random() }}
                                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent w-full"
                            />
                        )}
                    </div>
                </motion.div>
            </div>

            {/* 2. The Center Node (Connection Hub) */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: isInView ? 1 : 0 }}
                    className="relative w-4 h-4 rounded-full bg-emerald-950 border-2 border-emerald-500 shadow-[0_0_10px_#10b981] z-30"
                >
                    {/* Pulse */}
                    <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20" />
                </motion.div>
            </div>

            {/* 3. The Architectural Arm (Connector) */}
            <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-px z-10 w-12 ${isEven ? 'right-1/2' : 'left-1/2'}`}>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isInView ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ originX: isEven ? 1 : 0 }}
                    className="h-full w-full bg-gradient-to-r from-emerald-500/50 to-transparent"
                />
                {/* Connection Dot at Card attachment */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
                    transition={{ delay: 0.6 }}
                    className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] ${isEven ? 'left-0' : 'right-0'}`}
                />
            </div>

            {/* 4. Empty Space */}
            <div className="hidden md:block w-1/2" />

        </div>
    );
}

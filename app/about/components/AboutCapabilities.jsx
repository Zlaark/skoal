"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Building2, Globe2, Layers, ArrowRight } from "lucide-react";

const capabilities = [
    {
        id: "bluecollar",
        title: "BLUE-COLLAR",
        subtitle: "Workforce At Scale",
        desc: "Industrial-scale staffing with full compliance coverage for distributed operations. We deploy thousands in 48 hours.",
        stat: "15,000+",
        statLabel: "Active Workers",
        icon: Users,
        color: "emerald"
    },
    {
        id: "whitecollar",
        title: "WHITE-COLLAR",
        subtitle: "Professional Staffing",
        desc: "Corporate hiring and placement with complete statutory governance. From IT specialists to Executive leadership.",
        stat: "100%",
        statLabel: "Compliance Rate",
        icon: Building2,
        color: "teal"
    },
    {
        id: "distributed",
        title: "MULTI-REGION",
        subtitle: "Distributed Ops",
        desc: "Seamless workforce management across state lines. One platform, multiple jurisdictions.",
        stat: "PAN-INDIA",
        statLabel: "Coverage",
        icon: Globe2,
        color: "blue"
    },
    {
        id: "highvolume",
        title: "HIGH-VOLUME",
        subtitle: "Rapid Deployment",
        desc: "Seasonal surges? No problem. We thrive on velocity and volume without compromising quality.",
        stat: "< 48 Hrs",
        statLabel: "Turnaround",
        icon: Layers,
        color: "indigo"
    }
];

export default function AboutCapabilities() {
    const [activeId, setActiveId] = useState("bluecollar");

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden text-slate-900 font-sans">

            {/* Header */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8 border-b border-slate-200 pb-6 lg:pb-8">
                    <div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-slate-900">
                            <span className="whitespace-nowrap">WE EXCEL</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 italic font-serif whitespace-nowrap">
                                AT SCALE.
                            </span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4 text-slate-400 text-xs sm:text-sm font-mono uppercase tracking-widest lg:text-right">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Ready for<br className="hidden lg:block" /> Deployment</span>
                    </div>
                </div>
            </div>

            {/* The Kinetic Accordion */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col">
                    {capabilities.map((cap) => {
                        const isActive = activeId === cap.id;

                        return (
                            <motion.div
                                key={cap.id}
                                onMouseEnter={() => setActiveId(cap.id)}
                                onClick={() => setActiveId(cap.id)}
                                className={`relative border-b border-slate-200 group cursor-pointer transition-colors duration-500 ${isActive ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
                                initial={false}
                                animate={{ height: isActive ? 'auto' : 80 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                style={{ minHeight: isActive ? 280 : 80 }}
                            >
                                {/* Collapsed / Main Header Line */}
                                <div className="absolute top-0 w-full h-[80px] flex items-center justify-between px-3 sm:px-4 z-20">
                                    <div className="flex items-center gap-4 sm:gap-6 md:gap-8 overflow-hidden">
                                        <span className={`text-xs sm:text-sm font-mono uppercase tracking-widest transition-colors duration-300 shrink-0 ${isActive ? `text-${cap.color}-600` : 'text-slate-400'}`}>
                                            0{capabilities.indexOf(cap) + 1}
                                        </span>
                                        <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight transition-all duration-300 truncate ${isActive ? 'text-slate-900 md:translate-x-4' : 'text-slate-300 group-hover:text-slate-500'}`}>
                                            {cap.title}
                                        </h3>
                                    </div>
                                    <ArrowRight
                                        size={24}
                                        className={`shrink-0 transition-all duration-500 ${isActive ? 'rotate-90 text-slate-900 opacity-100' : 'text-slate-300 -rotate-45 group-hover:text-slate-500'} md:w-8 md:h-8`}
                                    />
                                </div>

                                {/* Expanded Content */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                            className="pt-[90px] px-4 sm:px-6 md:px-12 pb-6 md:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
                                        >
                                            <div className="max-w-xl">
                                                <div className="flex items-center gap-2 sm:gap-3 mb-3 md:mb-4">
                                                    <cap.icon size={18} className={`text-${cap.color}-600 sm:w-5 sm:h-5`} />
                                                    <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest text-${cap.color}-600`}>
                                                        {cap.subtitle}
                                                    </span>
                                                </div>
                                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 font-light leading-relaxed">
                                                    {cap.desc}
                                                </p>

                                                {/* Mobile Stat */}
                                                <div className="mt-4 md:hidden">
                                                    <div className={`text-4xl font-bold tracking-tighter text-${cap.color}-500`}>
                                                        {cap.stat}
                                                    </div>
                                                    <div className="text-xs font-mono uppercase text-slate-400 tracking-widest mt-1">{cap.statLabel}</div>
                                                </div>
                                            </div>

                                            {/* Huge Stat - Desktop Only */}
                                            <div className="hidden md:block text-right shrink-0">
                                                <div className="overflow-hidden">
                                                    <motion.div
                                                        initial={{ y: "100%" }}
                                                        animate={{ y: 0 }}
                                                        transition={{ duration: 0.5, delay: 0.2 }}
                                                        className={`text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-${cap.color}-500`}
                                                    >
                                                        {cap.stat}
                                                    </motion.div>
                                                </div>
                                                <div className="text-xs sm:text-sm font-mono uppercase text-slate-400 tracking-widest mt-2">{cap.statLabel}</div>
                                            </div>

                                            {/* Background Gradient for Active Item */}
                                            <div className={`absolute top-0 right-0 w-full md:w-[60%] h-full bg-gradient-to-l from-${cap.color}-50/50 to-transparent pointer-events-none -z-10`} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

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
        <section className="py-24 bg-white relative overflow-hidden text-slate-900 font-sans">

            {/* Header */}
            <div className="container mx-auto px-6 mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200 pb-8">
                    <div>
                        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-slate-900">
                            WE EXCEL <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 italic font-serif">
                                AT SCALE.
                            </span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-4 text-slate-400 text-sm font-mono uppercase tracking-widest text-right">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Ready for<br />Deployment</span>
                    </div>
                </div>
            </div>

            {/* The Kinetic Accordion */}
            <div className="container mx-auto px-6">
                <div className="flex flex-col">
                    {capabilities.map((cap) => {
                        const isActive = activeId === cap.id;

                        return (
                            <motion.div
                                key={cap.id}
                                onMouseEnter={() => setActiveId(cap.id)}
                                className={`relative border-b border-slate-200 group cursor-pointer transition-colors duration-500 ${isActive ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
                                initial={false}
                                animate={{ height: isActive ? 400 : 100 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {/* Collapsed / Main Header Line */}
                                <div className="absolute top-0 w-full h-[100px] flex items-center justify-between px-4 z-20">
                                    <div className="flex items-center gap-8">
                                        <span className={`text-sm font-mono uppercase tracking-widest transition-colors duration-300 ${isActive ? `text-${cap.color}-600` : 'text-slate-400'}`}>
                                            0{capabilities.indexOf(cap) + 1}
                                        </span>
                                        <h3 className={`text-4xl md:text-6xl font-bold uppercase tracking-tight transition-all duration-300 ${isActive ? 'text-slate-900 translate-x-4' : 'text-slate-300 group-hover:text-slate-500'}`}>
                                            {cap.title}
                                        </h3>
                                    </div>
                                    <ArrowRight
                                        size={32}
                                        className={`transition-all duration-500 ${isActive ? 'rotate-90 text-slate-900 opacity-100' : 'text-slate-300 -rotate-45 group-hover:text-slate-500'}`}
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
                                            className="absolute inset-0 pt-[100px] px-4 md:px-12 pb-8 flex items-end justify-between"
                                        >
                                            <div className="max-w-xl">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <cap.icon size={20} className={`text-${cap.color}-600`} />
                                                    <span className={`text-xs font-bold uppercase tracking-widest text-${cap.color}-600`}>
                                                        {cap.subtitle}
                                                    </span>
                                                </div>
                                                <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                                                    {cap.desc}
                                                </p>
                                            </div>

                                            {/* Huge Stat - COLOR FIXED HERE */}
                                            {/* Changed from text-${cap.color}-100 to text-${cap.color}-500 for visibility */}
                                            <div className="hidden md:block text-right">
                                                <div className="overflow-hidden">
                                                    <motion.div
                                                        initial={{ y: "100%" }}
                                                        animate={{ y: 0 }}
                                                        transition={{ duration: 0.5, delay: 0.2 }}
                                                        className={`text-8xl font-bold tracking-tighter text-${cap.color}-500`}
                                                    >
                                                        {cap.stat}
                                                    </motion.div>
                                                </div>
                                                <div className="text-sm font-mono uppercase text-slate-400 tracking-widest mt-2">{cap.statLabel}</div>
                                            </div>

                                            {/* Background Gradient for Active Item */}
                                            <div className={`absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-${cap.color}-50/50 to-transparent pointer-events-none -z-10`} />
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

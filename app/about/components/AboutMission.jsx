"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, FileCheck, Briefcase, ArrowUpRight, Activity, Globe, Lock } from "lucide-react";

const bentoItems = [
    {
        id: "compliance",
        title: "Compliance Core",
        desc: "Engineered logic that automates statutory governance across 15+ global jurisdictions. Our system is chemically bonded to local labor laws.",
        icon: ShieldCheck,
        // Grid Position: Spans full height on left
        className: "md:col-span-1 md:row-span-2",
        bg: "bg-gradient-to-b from-emerald-900/20 to-emerald-900/5",
        border: "border-emerald-500/20 hover:border-emerald-500/50",
        accent: "text-emerald-400",
        stats: [
            { label: "Audit Risk", val: "0%" },
            { label: "Jurisdictions", val: "15+" }
        ]
    },
    {
        id: "leakage",
        title: "Zero-Leakage Architecture",
        desc: "Real-time algorithmic monitoring detects financial anomalies in microseconds. We stop revenue leaks before they become losses.",
        icon: Zap,
        // Grid Position: Wide top right
        className: "md:col-span-2 md:row-span-1",
        bg: "bg-gradient-to-r from-teal-900/20 to-teal-900/5",
        border: "border-teal-500/20 hover:border-teal-500/50",
        accent: "text-teal-400",
        stats: [
            { label: "Detection Speed", val: "<1ms" },
            { label: "Recovery Rate", val: "100%" }
        ]
    },
    {
        id: "scale",
        title: "Elastic Grid",
        desc: "Auto-scaling infrastructure from 50 to 50k workers.",
        icon: Briefcase,
        // Grid Position: Bottom Center
        className: "md:col-span-1 md:row-span-1",
        bg: "bg-gradient-to-br from-blue-900/20 to-blue-900/5",
        border: "border-blue-500/20 hover:border-blue-500/50",
        accent: "text-blue-400",
        stats: [
            { label: "Uptime", val: "99.99%" }
        ]
    },
    {
        id: "audit",
        title: "Deep Trace",
        desc: "Live diligence reports accessible instantly forever.",
        icon: FileCheck,
        // Grid Position: Bottom Right
        className: "md:col-span-1 md:row-span-1",
        bg: "bg-gradient-to-br from-indigo-900/20 to-indigo-900/5",
        border: "border-indigo-500/20 hover:border-indigo-500/50",
        accent: "text-indigo-400",
        stats: [
            { label: "Retention", val: "7 Yrs" }
        ]
    }
];

export default function AboutMission() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-[#050505] relative overflow-hidden font-sans">

            {/* Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-emerald-500/5 rounded-full blur-[80px] md:blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-teal-500/5 rounded-full blur-[80px] md:blur-[120px]" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

                {/* Compact Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8 mb-12 lg:mb-16">
                    <div>
                        <div className="flex items-center gap-2 mb-3 lg:mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.2em]">System Overview</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                            <span className="whitespace-nowrap">The Operating System</span> <br className="hidden sm:block" />
                            <span className="whitespace-nowrap">
                                for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Workforce Excellence.</span>
                            </span>
                        </h2>
                    </div>
                    <p className="text-white/40 max-w-sm text-sm leading-relaxed">
                        A modular suite of mission-critical capabilities designed to run loosely coupled yet tightly integrated.
                    </p>
                </div>

                {/* THE BENTO GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
                    {bentoItems.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`
                                group relative rounded-2xl md:rounded-3xl p-5 md:p-8 min-h-[240px] sm:min-h-[300px]
                                border backdrop-blur-xl overflow-hidden flex flex-col justify-between
                                transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/10
                                ${item.className} ${item.bg} ${item.border}
                            `}
                        >
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${item.accent === 'text-emerald-400' ? 'from-emerald-400' : 'from-white'} to-transparent`} />

                            {/* Top Part: Icon & Title */}
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4 md:mb-6">
                                    <div className={`p-2 md:p-3 rounded-xl md:rounded-2xl bg-white/5 border border-white/5 ${item.accent}`}>
                                        <item.icon size={20} className="md:w-7 md:h-7" strokeWidth={1.5} />
                                    </div>
                                    <ArrowUpRight className={`opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ${item.accent}`} size={20} />
                                </div>

                                <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:translate-x-1 transition-transform duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors line-clamp-3">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Bottom Part: Stats */}
                            <div className="relative z-10 mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/5 flex items-center gap-6 md:gap-8">
                                {item.stats.map((stat, idx) => (
                                    <div key={idx}>
                                        <div className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{stat.label}</div>
                                        <div className={`text-base md:text-xl font-mono font-medium ${item.accent}`}>{stat.val}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative Background Element (optional subtle patterns) */}
                            <div className="absolute right-0 bottom-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity transform group-hover:scale-110 duration-700 pointer-events-none">
                                <item.icon size={180} className="md:w-[200px] md:h-[200px]" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Bar */}
                <div className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-[10px] font-mono text-white/20 uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Lock size={10} /> End-to-End Encrypted</span>
                    <span className="hidden sm:block w-1 h-1 rounded-full bg-white/10" />
                    <span className="flex items-center gap-2"><Globe size={10} /> ISO 27001 Certified</span>
                    <span className="hidden sm:block w-1 h-1 rounded-full bg-white/10" />
                    <span className="flex items-center gap-2"><Activity size={10} /> 99.99% Uptime</span>
                </div>

            </div>
        </section>
    );
}

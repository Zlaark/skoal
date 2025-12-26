"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, ArrowUpRight, Sparkles } from "lucide-react";

const approaches = [
    {
        icon: Target,
        title: "Local Expertise",
        subtitle: "REGIONAL_MASTERY",
        description: "Deep understanding of regional labor laws, compliance requirements, and cultural nuances across India and the Middle East.",
        stat: "2+",
        statLabel: "REGIONS COVERED",
        gradient: "from-blue-500/30 to-cyan-400/30",
        borderHover: "group-hover:border-blue-500",
        bgHover: "group-hover:bg-blue-50",
        color: "text-blue-700"
    },
    {
        icon: Lightbulb,
        title: "Proactive Solutions",
        subtitle: "FUTURE_FOCUSED",
        description: "We don't just respond to issues—we anticipate challenges and implement preventive measures to keep your operations running smoothly.",
        stat: "24/7",
        statLabel: "MONITORING",
        gradient: "from-amber-500/30 to-orange-400/30",
        borderHover: "group-hover:border-amber-500",
        bgHover: "group-hover:bg-amber-50",
        color: "text-amber-700"
    },
    {
        icon: Users,
        title: "Client-Centric Focus",
        subtitle: "PARTNERSHIP_FIRST",
        description: "Your success is our priority. We tailor our services to meet your unique business needs, ensuring long-term partnership value.",
        stat: "100%",
        statLabel: "SATISFACTION RATE",
        gradient: "from-emerald-500/30 to-teal-400/30",
        borderHover: "group-hover:border-emerald-500",
        bgHover: "group-hover:bg-emerald-50",
        color: "text-emerald-700"
    }
];

// Premium Approach Card Component
const ApproachCard = ({ card, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = card.icon;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: index * 0.1,
                duration: 0.5
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/50 transition-all duration-500 h-full flex flex-col justify-between group overflow-hidden ${card.borderHover} hover:shadow-2xl hover:-translate-y-1`}
        >
            {/* Active Indicator Pulse */}
            <div className="absolute top-6 right-6 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isHovered ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`} />
                <span className="text-[10px] font-mono font-bold text-slate-400 tracking-widest">
                    {isHovered ? 'ACTIVE' : 'IDLE'}
                </span>
            </div>

            {/* Gradient Background on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

            {/* Header */}
            <div className="relative z-10 mb-8">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 transition-all duration-500 ${card.bgHover} ${card.color} group-hover:scale-110`}>
                    <Icon size={20} strokeWidth={1.5} />
                </div>

                {/* Subtitle Badge */}
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-3 group-hover:text-slate-600 transition-colors">
                    {card.subtitle}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-medium text-slate-900 mb-4 group-hover:text-black transition-colors leading-tight">
                    {card.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors">
                    {card.description}
                </p>
            </div>

            {/* Footer with HUGE STAT */}
            <div className="relative z-10 mt-auto pt-6 border-t border-slate-100 group-hover:border-slate-200 transition-colors">
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-1">
                    {card.statLabel}
                </div>

                {/* Massive Stat Typography */}
                <div className="flex items-baseline justify-between">
                    <div className="text-5xl lg:text-7xl font-mono font-light tracking-tighter text-slate-900 group-hover:text-emerald-900 transition-colors">
                        {card.stat}
                    </div>
                    <ArrowUpRight
                        className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-slate-400"
                        size={24}
                    />
                </div>
            </div>

            {/* Corner Decorative Element */}
            <div className="absolute bottom-0 left-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                <div className={`absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-br ${card.gradient} rounded-full blur-2xl`} />
            </div>
        </motion.div>
    );
};

export default function AboutApproach() {
    return (
        <section className="relative py-32 bg-slate-50 text-slate-900 overflow-hidden border-t border-slate-200">
            {/* Background Technical Grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.3]"
                style={{
                    backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
                    backgroundSize: '4rem 4rem'
                }}
            />

            {/* ANIMATED PIPELINES - Connecting Flow */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="pipeline-gradient-approach" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#059669" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    {/* Horizontal Flow Lines */}
                    <motion.rect
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        x="0" y="30%" width="20%" height="2" fill="url(#pipeline-gradient-approach)"
                    />
                    <motion.rect
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
                        x="0" y="70%" width="30%" height="2" fill="url(#pipeline-gradient-approach)"
                    />
                    {/* Vertical Flow Lines */}
                    <motion.rect
                        initial={{ y: "-100%" }}
                        animate={{ y: "100%" }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
                        x="40%" y="0" width="2" height="20%" fill="url(#pipeline-gradient-approach)"
                    />
                </svg>
            </div>

            {/* Large Typography Background */}
            <div className="absolute top-20 left-10 md:left-20 z-0 pointer-events-none opacity-[0.02]">
                <span className="text-[18vw] font-bold leading-none tracking-tighter text-slate-900">
                    APPROACH
                </span>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
                    >
                        <Sparkles size={14} className="text-emerald-600" />
                        <span className="text-xs font-bold text-slate-600 tracking-widest uppercase">
                            Our Approach
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6"
                    >
                        What Sets Us{" "}
                        <span className="font-serif italic text-emerald-700">Apart.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto"
                    >
                        Our commitment goes beyond service delivery—we partner with you to build scalable,
                        compliant, and future-ready workforce solutions.
                    </motion.p>
                </div>

                {/* Approach Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
                    {approaches.map((approach, i) => (
                        <ApproachCard key={i} card={approach} index={i} />
                    ))}
                </div>

                {/* Center Glow Core */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-50/80 blur-[100px] rounded-full pointer-events-none -z-10" />

                {/* Bottom Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
                        With Skoal Solutions, you gain more than a vendor—you gain a strategic partner
                        committed to driving operational excellence and sustainable growth.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

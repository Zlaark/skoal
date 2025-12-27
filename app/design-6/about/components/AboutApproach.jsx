"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";

const approaches = [
    {
        icon: Target,
        title: "Local Expertise",
        subtitle: "REGIONAL_MASTERY",
        description: "Deep understanding of regional labor laws, compliance requirements, and cultural nuances across India and the Middle East.",
        stat: "2+",
        statLabel: "REGIONS COVERED",
        gradient: "from-blue-500/30 to-cyan-400/30",
        color: "text-blue-400"
    },
    {
        icon: Lightbulb,
        title: "Proactive Solutions",
        subtitle: "FUTURE_FOCUSED",
        description: "We don't just respond to issues—we anticipate challenges and implement preventive measures to keep your operations running smoothly.",
        stat: "24/7",
        statLabel: "MONITORING",
        gradient: "from-amber-500/30 to-orange-400/30",
        color: "text-amber-400"
    },
    {
        icon: Users,
        title: "Client-Centric Focus",
        subtitle: "PARTNERSHIP_FIRST",
        description: "Your success is our priority. We tailor our services to meet your unique business needs, ensuring long-term partnership value.",
        stat: "100%",
        statLabel: "SATISFACTION RATE",
        gradient: "from-emerald-500/30 to-teal-400/30",
        color: "text-emerald-400"
    }
];

// Premium "Dark" Card Component (Adapted from Industries)
const ApproachCard = ({ card, index }) => {
    const Icon = card.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative overflow-hidden rounded-[2rem] bg-[#0A261D] border border-emerald-900/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/50 hover:-translate-y-2 h-full flex flex-col justify-between"
        >
            {/* Dynamic Background Gradients */}
            <div className={`absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-gradient-to-br ${card.gradient}`} />

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

            {/* Abstract Shapes */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] group-hover:bg-emerald-400/30 transition-colors duration-700" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Content Container */}
            <div className="relative p-8 md:p-10 flex flex-col h-full z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 group-hover:text-emerald-100 transition-colors duration-500">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-emerald-500/20 group-hover:border-emerald-400/30 backdrop-blur-md transition-all duration-500">
                        <Icon size={26} className={`${card.color} group-hover:text-white transition-colors duration-500`} strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300 md:text-emerald-400 group-hover:text-emerald-200 transition-colors duration-500">
                        {card.subtitle}
                    </span>
                </div>

                {/* Title & Desc */}
                <div className="mb-auto">
                    <h3 className="text-3xl font-serif font-medium text-white mb-4 transition-colors duration-500 leading-tight">
                        {card.title}
                    </h3>
                    <p className="text-emerald-100/80 text-[16px] leading-relaxed group-hover:text-emerald-100/90 transition-colors duration-500 font-light">
                        {card.description}
                    </p>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 mt-8 border-t border-white/5 group-hover:border-white/10 transition-colors duration-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-4xl lg:text-5xl font-bold text-white group-hover:text-emerald-50 transition-colors duration-500 tracking-tighter">
                                {card.stat}
                            </div>
                            <div className="text-xs font-medium text-emerald-300/80 group-hover:text-emerald-300 transition-colors duration-500 mt-2 uppercase tracking-wider">
                                {card.statLabel}
                            </div>
                        </div>

                        {/* Floating Action Button */}
                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:border-emerald-500 flex items-center justify-center transition-all duration-500 hover:scale-110">
                            <ArrowRight size={20} className="text-emerald-400 group-hover:text-white transition-colors duration-500" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function AboutApproach() {
    return (
        <section className="relative py-32 bg-[#fafafa] overflow-hidden">
            {/* Background Technical Grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.4]"
                style={{
                    backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)',
                    backgroundSize: '4rem 4rem'
                }}
            />

            {/* Large Typography Background */}
            <div className="absolute top-20 left-0 right-0 z-0 pointer-events-none opacity-[0.03] text-center overflow-hidden">
                <span className="text-[18vw] font-bold leading-none tracking-tighter text-slate-900 inline-block transform -translate-y-12">
                    APPROACH
                </span>
            </div>

            {/* Center Glow Core */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-100/50 blur-[100px] rounded-full pointer-events-none z-0" />


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
                        className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-slate-900 mb-6"
                    >
                        What Sets Us{" "}
                        <span className="italic text-emerald-700">Apart.</span>
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {approaches.map((approach, i) => (
                        <ApproachCard key={i} card={approach} index={i} />
                    ))}
                </div>

                {/* Bottom Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-24 text-center"
                >
                    <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-transparent via-slate-200 to-transparent w-full max-w-xs mx-auto mb-8" />
                    <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed font-medium tracking-wide uppercas">
                        Driving Operational Excellence & Sustainable Growth
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, ArrowRight, Sparkles } from "lucide-react";

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

// Redesigned Premium Card Component with Light Background
const ApproachCard = ({ card, index }) => {
    const Icon = card.icon;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                delay: index * 0.2,
                duration: 0.7,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative h-full"
        >
            {/* Aurora/Gradient Animation Background */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl z-0">
                <motion.div
                    className="absolute w-[340px] h-[340px] rounded-full blur-[120px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.13) 0%, transparent 70%)',
                        top: '-18%',
                        left: '-12%'
                    }}
                    animate={{
                        scale: [1, 1.18, 1],
                        opacity: [0.25, 0.5, 0.25],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute w-[260px] h-[260px] rounded-full blur-[90px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(20, 184, 166, 0.10) 0%, transparent 70%)',
                        bottom: '-12%',
                        right: '-10%'
                    }}
                    animate={{
                        scale: [1, 1.25, 1],
                        opacity: [0.18, 0.35, 0.18],
                    }}
                    transition={{
                        duration: 11,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
                {/* Floating grid pattern */}
                <motion.div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                        maskImage: 'linear-gradient(to bottom, black 20%, transparent 90%)'
                    }}
                    animate={{
                        backgroundPosition: [
                            '0px 0px',
                            '24px 24px',
                            '0px 0px'
                        ]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                {/* Sheen sweep on hover */}
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: isHovered ? "200%" : "-100%" }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 3.5,
                        ease: "linear",
                        repeatDelay: 2
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)',
                        transform: 'skewX(-12deg)'
                    }}
                />
            </div>
            {/* Card Container with glass and shadow */}
            <motion.div
                className="relative h-full rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/50 overflow-hidden z-10"
                style={{
                    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)"
                }}
                whileHover={{
                    y: -8,
                    borderColor: "rgba(16, 185, 129, 0.3)",
                    boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15), 0 0 0 1px rgba(16, 185, 129, 0.1)",
                    transition: { duration: 0.3, ease: "easeOut" }
                }}
            >

                {/* Animated Border Gradient */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                    style={{
                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.12) 50%, rgba(16, 185, 129, 0.08) 100%)',
                    }}
                />

                {/* Card Content */}
                <div className="relative h-full p-8 md:p-10 flex flex-col z-10">
                    {/* Top Section: Icon & Badge */}
                    <div className="flex items-start justify-between mb-8">
                        {/* Icon Container - Premium Style */}
                        <motion.div
                            className="relative"
                            whileHover={{
                                scale: 1.08,
                                rotate: [0, -5, 5, -5, 0],
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <motion.div
                                className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100/50 flex items-center justify-center shadow-sm"
                                animate={isHovered ? {
                                    boxShadow: [
                                        '0 4px 6px rgba(16, 185, 129, 0.1)',
                                        '0 8px 20px rgba(16, 185, 129, 0.3)',
                                        '0 4px 6px rgba(16, 185, 129, 0.1)'
                                    ]
                                } : {}}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                {/* Icon Glow Effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl"
                                    style={{
                                        boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)'
                                    }}
                                    animate={isHovered ? {
                                        opacity: [0.5, 1, 0.5]
                                    } : { opacity: 0 }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <motion.div
                                    animate={isHovered ? {
                                        rotate: [0, 360],
                                        scale: [1, 1.1, 1]
                                    } : {}}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                >
                                    <Icon size={28} className="text-emerald-600 relative z-10" strokeWidth={2} />
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Subtitle Badge - Pill Style */}
                        <motion.div
                            className="relative px-4 py-2 rounded-full bg-emerald-50/80 backdrop-blur-sm border border-emerald-100/50"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(16, 185, 129, 0.15)"
                            }}
                        >
                            <motion.span
                                className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-600"
                                animate={isHovered ? {
                                    letterSpacing: "0.25em"
                                } : {
                                    letterSpacing: "0.2em"
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {card.subtitle}
                            </motion.span>
                        </motion.div>
                    </div>

                    {/* Middle Section: Title & Description */}
                    <div className="flex-1 space-y-4 mb-8">
                        <motion.h3
                            className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                        >
                            {card.title}
                        </motion.h3>
                        <motion.p
                            className="text-slate-600 text-base leading-relaxed group-hover:text-slate-700 transition-colors duration-300"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                        >
                            {card.description}
                        </motion.p>
                    </div>

                    {/* Bottom Section: Stat & Button */}
                    <div className="relative pt-6 border-t border-slate-200/50 group-hover:border-emerald-200/50 transition-colors duration-300">
                        <div className="flex items-end justify-between">
                            {/* Stat Display */}
                            <div className="space-y-2">
                                <motion.div
                                    className="text-6xl lg:text-7xl font-bold bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent tracking-tighter"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.2 + 0.7,
                                        duration: 0.6,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 15
                                    }}
                                    animate={isHovered ? {
                                        scale: [1, 1.08, 1],
                                        filter: [
                                            'drop-shadow(0 0 20px rgba(16, 185, 129, 0.3))',
                                            'drop-shadow(0 0 30px rgba(16, 185, 129, 0.5))',
                                            'drop-shadow(0 0 20px rgba(16, 185, 129, 0.3))'
                                        ]
                                    } : {
                                        filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.1))'
                                    }}
                                // transition handled above, remove duplicate
                                >
                                    {card.stat}
                                </motion.div>
                                <motion.div
                                    className="flex items-center gap-2"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + 0.8, duration: 0.5 }}
                                >
                                    <span className="text-xs font-semibold text-emerald-600/80 uppercase tracking-wider">
                                        {card.statLabel}
                                    </span>
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-emerald-500"
                                        animate={{
                                            scale: [1, 1.4, 1],
                                            opacity: [0.5, 1, 0.5],
                                            boxShadow: [
                                                '0 0 0 0 rgba(16, 185, 129, 0.7)',
                                                '0 0 0 4px rgba(16, 185, 129, 0)',
                                                '0 0 0 0 rgba(16, 185, 129, 0.7)'
                                            ]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </motion.div>
                            </div>

                            {/* CTA Button - Hero Style */}
                            <motion.button
                                className="relative w-14 h-14 rounded-full bg-emerald-50/80 backdrop-blur-sm border border-emerald-200/50 flex items-center justify-center overflow-hidden group/btn"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.2 + 0.9,
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                whileHover={{
                                    scale: 1.15,
                                    rotate: [0, -10, 10, 0],
                                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                                    borderColor: "rgba(16, 185, 129, 0.4)",
                                    boxShadow: "0 0 25px rgba(16, 185, 129, 0.4)"
                                }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {/* Button Sheen */}
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "200%" }}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 3,
                                        ease: "linear",
                                        repeatDelay: 2
                                    }}
                                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                                />

                                <motion.div
                                    animate={isHovered ? {
                                        x: [0, 4, 0],
                                        rotate: [0, 5, -5, 0]
                                    } : {}}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                >
                                    <ArrowRight
                                        size={22}
                                        className="text-emerald-600 group-hover/btn:text-emerald-700 transition-colors duration-300 relative z-10"
                                        strokeWidth={2.5}
                                    />
                                </motion.div>
                            </motion.button>
                        </div>

                        {/* Animated Progress Bar */}
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.4 }}
                        >
                            <motion.div
                                className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 rounded-full"
                                initial={{ scaleX: 0, x: '-100%' }}
                                whileInView={{ scaleX: 1, x: '0%' }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.2 + 0.6,
                                    duration: 1.2,
                                    ease: "easeOut"
                                }}
                                style={{
                                    originX: 0,
                                    boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)'
                                }}
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Hover Shine Effect */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none rounded-3xl"
                    style={{
                        background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
                    }}
                    animate={isHovered ? { x: ['-100%', '200%'] } : {}}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </motion.div>
        </motion.div>
    );
};

export default function AboutApproach() {
    return (
        <section className="relative py-32 bg-gradient-to-b from-[#fafafa] via-slate-50 to-[#fafafa] overflow-hidden">
            {/* Enhanced Background with Depth */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Primary Grid */}
                <div
                    className="absolute inset-0 opacity-[0.15]"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
                        backgroundSize: '4rem 4rem'
                    }}
                />
                {/* Secondary Finer Grid */}
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #14b8a6 1px, transparent 1px), linear-gradient(to bottom, #14b8a6 1px, transparent 1px)',
                        backgroundSize: '1rem 1rem'
                    }}
                />
            </div>

            {/* Animated Large Typography Background */}
            <motion.div
                className="absolute top-20 left-0 right-0 z-0 pointer-events-none opacity-[0.02] text-center overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.02, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
            >
                <motion.span
                    className="text-[18vw] font-bold leading-none tracking-tighter text-slate-900 inline-block"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                >
                    EXCELLENCE
                </motion.span>
            </motion.div>

            {/* Multi-layer Glow System */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
                <motion.div
                    className="w-[1000px] h-[1000px] bg-emerald-200/30 blur-[120px] rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute inset-0 w-[600px] h-[600px] bg-teal-200/20 blur-[80px] rounded-full"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-emerald-400/30 to-teal-400/30"
                    style={{
                        left: `${(i * 5.5) % 100}%`,
                        top: `${(i * 7.3) % 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.sin(i) * 20, 0],
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{
                        duration: 5 + (i % 3) * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2
                    }}
                />
            ))}

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Enhanced Section Header */}
                <div className="max-w-5xl mx-auto text-center mb-28">
                    {/* Premium Badge with Animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-emerald-200 shadow-lg shadow-emerald-100/50 mb-8"
                    >
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="relative"
                        >
                            <Sparkles size={16} className="text-emerald-600" />
                            <motion.div
                                className="absolute inset-0 blur-md"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Sparkles size={16} className="text-emerald-400" />
                            </motion.div>
                        </motion.div>
                        <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 tracking-[0.15em] uppercase">
                            Our Approach
                        </span>
                        <motion.div className="flex gap-1">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-1 h-1 rounded-full bg-emerald-500"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.2
                                    }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Animated Heading with Gradient */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.05]"
                    >
                        <span className="block">What Sets Us</span>
                        <motion.span
                            className="block font-serif italic bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent"
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            style={{ backgroundSize: "200% 200%" }}
                        >
                            Apart.
                        </motion.span>
                    </motion.h2>

                    {/* Enhanced Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="max-w-3xl mx-auto space-y-4"
                    >
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                            Our commitment goes beyond service delivery—we partner with you to build{" "}
                            <motion.span
                                className="text-emerald-600 font-semibold relative inline-block"
                                whileHover={{ scale: 1.05 }}
                            >
                                scalable
                                <motion.span
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 block"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                />
                            </motion.span>,{" "}
                            <motion.span
                                className="text-emerald-600 font-semibold relative inline-block"
                                whileHover={{ scale: 1.05 }}
                            >
                                compliant
                                <motion.span
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 block"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.7, duration: 0.6 }}
                                />
                            </motion.span>, and{" "}
                            <motion.span
                                className="text-emerald-600 font-semibold relative inline-block"
                                whileHover={{ scale: 1.05 }}
                            >
                                future-ready
                                <motion.span
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 block"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.9, duration: 0.6 }}
                                />
                            </motion.span>{" "}
                            workforce solutions.
                        </p>
                    </motion.div>
                </div>

                {/* Approach Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {approaches.map((approach, i) => (
                        <ApproachCard key={i} card={approach} index={i} />
                    ))}
                </div>

                {/* Enhanced Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="mt-28 text-center"
                >
                    {/* Decorative Divider */}
                    <div className="flex items-center justify-center gap-3 mb-10">
                        <motion.div
                            className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"
                            style={{ width: '100px' }}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 1 }}
                        />
                        <motion.div
                            className="w-2 h-2 rounded-full bg-emerald-500"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.div
                            className="h-px bg-gradient-to-r from-emerald-300 via-transparent to-transparent"
                            style={{ width: '100px' }}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 1 }}
                        />
                    </div>

                    {/* Tagline */}
                    <motion.div
                        className="relative inline-block"
                        whileHover={{ scale: 1.02 }}
                    >
                        <p className="text-lg md:text-xl text-slate-600 font-semibold tracking-wide">
                            Driving{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                                Operational Excellence
                            </span>{" "}
                            &{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                                Sustainable Growth
                            </span>
                        </p>

                        {/* Underline Accent */}
                        <motion.div
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '60%' }}
                            viewport={{ once: true }}
                            transition={{ delay: 1, duration: 0.8 }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

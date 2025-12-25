"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Building2, Globe2, Layers, Headphones, Bot, Sparkles } from "lucide-react";

const capabilities = [
    {
        id: "bluecollar",
        title: "Blue-Collar Workforce",
        desc: "Industrial-scale staffing with full compliance coverage for distributed operations.",
        stat: "15K+",
        statLabel: "Deployed",
        icon: <Users size={24} />,
        gradient: "from-emerald-500 to-teal-600"
    },
    {
        id: "whitecollar",
        title: "White-Collar Staffing",
        desc: "Corporate hiring and placement with complete statutory governance.",
        stat: "100%",
        statLabel: "Compliance",
        icon: <Building2 size={24} />,
        gradient: "from-teal-500 to-emerald-600"
    },
    {
        id: "distributed",
        title: "Distributed Operations",
        desc: "Multi-state and multi-region workforce management.",
        stat: "2+",
        statLabel: "Regions",
        icon: <Globe2 size={24} />,
        gradient: "from-emerald-600 to-teal-500"
    },
    {
        id: "highvolume",
        title: "High-Volume Hiring",
        desc: "Rapid seasonal deployment with SLA-based fulfillment.",
        stat: "48hrs",
        statLabel: "Deploy Time",
        icon: <Layers size={24} />,
        gradient: "from-teal-600 to-emerald-500"
    },
    {
        id: "bpo",
        title: "Omnichannel BPO",
        desc: "Customer support across email, chat, voice & social.",
        stat: "24/7",
        statLabel: "Uptime",
        icon: <Headphones size={24} />,
        gradient: "from-emerald-500 to-teal-500"
    },
    {
        id: "ai",
        title: "AI Contact Centre",
        desc: "AI-powered outbound calling and predictive dialers.",
        stat: "40%",
        statLabel: "Cost Saved",
        icon: <Bot size={24} />,
        gradient: "from-teal-500 to-emerald-500"
    }
];

// 3D Tilt Card with Emerald Theme
function HexCard({ cap, index }) {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setRotation({
            x: (y - 0.5) * -20,
            y: (x - 0.5) * 20
        });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="perspective-1000"
        >
            <motion.div
                className="group relative p-8 rounded-3xl bg-white border border-slate-200 shadow-xl transition-all duration-300 cursor-default overflow-hidden"
                style={{
                    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    transformStyle: "preserve-3d"
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)",
                    y: -10
                }}
            >
                {/* Emerald Glow Background */}
                <motion.div
                    className="absolute -inset-[100px] bg-emerald-500/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Floating Particles - Emerald */}
                {isHovered && [...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-emerald-400"
                        initial={{
                            x: Math.random() * 100,
                            y: Math.random() * 100,
                            opacity: 0
                        }}
                        animate={{
                            y: [null, -50],
                            opacity: [0, 1, 0]
                        }}
                        transition={{ duration: 1.5, delay: i * 0.1 }}
                    />
                ))}

                {/* Header */}
                <div className="relative z-10 flex items-start justify-between mb-6">
                    <motion.div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cap.gradient} flex items-center justify-center text-white shadow-lg`}
                        style={{ transform: "translateZ(30px)" }}
                        animate={isHovered ? { rotate: [0, -10, 10, 0], scale: 1.1 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        {cap.icon}
                    </motion.div>

                    {/* Stat Badge - Emerald Theme */}
                    <motion.div
                        className="text-right"
                        style={{ transform: "translateZ(40px)" }}
                    >
                        <div className={`text-3xl font-bold bg-gradient-to-r ${cap.gradient} bg-clip-text text-transparent`}>
                            {cap.stat}
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                            {cap.statLabel}
                        </div>
                    </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                        {cap.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        {cap.desc}
                    </p>
                </div>

                {/* Corner Accent - Emerald */}
                <motion.div
                    className={`absolute -bottom-2 -right-2 w-16 h-16 rounded-tl-3xl bg-gradient-to-br ${cap.gradient} opacity-10 group-hover:opacity-30 transition-opacity`}
                />
            </motion.div>
        </motion.div>
    );
}

export default function AboutCapabilities() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={containerRef} className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden" id="capabilities">

            {/* Animated Wave - Emerald */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <svg className="absolute bottom-0 w-full h-64 opacity-10" viewBox="0 0 1200 200" preserveAspectRatio="none">
                    <motion.path
                        d="M0,100 C300,150 600,50 900,100 C1050,130 1150,80 1200,100 L1200,200 L0,200 Z"
                        fill="url(#wave-gradient-emerald)"
                        animate={{
                            d: [
                                "M0,100 C300,150 600,50 900,100 C1050,130 1150,80 1200,100 L1200,200 L0,200 Z",
                                "M0,80 C300,50 600,150 900,80 C1050,50 1150,120 1200,80 L1200,200 L0,200 Z",
                                "M0,100 C300,150 600,50 900,100 C1050,130 1150,80 1200,100 L1200,200 L0,200 Z"
                            ]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <defs>
                        <linearGradient id="wave-gradient-emerald" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="50%" stopColor="#14b8a6" />
                            <stop offset="100%" stopColor="#10b981" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Floating Orbs - Emerald/Teal */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 pointer-events-none"
            >
                {[
                    { size: 400, x: -10, y: 10, color: "from-emerald-200/30 to-teal-200/30" },
                    { size: 300, x: 80, y: 60, color: "from-teal-200/30 to-emerald-200/30" },
                    { size: 250, x: 30, y: 70, color: "from-emerald-200/20 to-teal-200/20" },
                ].map((orb, i) => (
                    <motion.div
                        key={i}
                        className={`absolute rounded-full bg-gradient-to-br ${orb.color} blur-[60px]`}
                        style={{
                            width: orb.size,
                            height: orb.size,
                            left: `${orb.x}%`,
                            top: `${orb.y}%`,
                        }}
                        animate={{
                            x: [0, 30, 0],
                            y: [0, -20, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 15 + i * 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </motion.div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* Header - Emerald Theme */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200 shadow-lg mb-8"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles size={16} className="text-emerald-600" />
                        </motion.div>
                        <span className="text-emerald-700 text-xs font-bold tracking-widest uppercase">
                            Workforce Excellence
                        </span>
                        <motion.div
                            className="w-2 h-2 rounded-full bg-emerald-500"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6"
                    >
                        <span className="block">We excel at</span>
                        <motion.span
                            className="block font-serif italic bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent"
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            style={{ backgroundSize: "200% 200%" }}
                        >
                            scale.
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto"
                    >
                        We operate across blue-collar and white-collar workforce models, supporting businesses with mission-critical operations.
                    </motion.p>
                </div>

                {/* 3D Tilt Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {capabilities.map((cap, index) => (
                        <HexCard key={cap.id} cap={cap} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}

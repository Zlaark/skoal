"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue } from "framer-motion";
import {
    Calculator,
    ShieldCheck,
    Users,
    FileText,
    Database,
    ArrowRight,
    Activity,
    CheckCircle2,
    Globe,
    ArrowUpRight,
    Layers,
    PieChart,
    Headset,
    TrendingUp,
    MessageSquare,
    Phone,
    ShoppingCart,
    BarChart3,
    Monitor,
    Fingerprint,
    BarChart2,
    Lock,
    UserPlus,
    Briefcase,
    MapPin,
    RefreshCcw,
    Bot,
    Mic,
    Radio,
    Zap
} from "lucide-react";
import Footer from "../components/Footer";

// --- Components ---

// Refined Service Card - Clean, Compact, Professional
function PrecisionCard({ service, index }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group h-full"
        >
            <motion.div
                className="relative h-full p-6 lg:p-8 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-100/50 overflow-hidden cursor-pointer flex flex-col"
                whileHover={{
                    y: -8,
                    boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.15)',
                    borderColor: 'rgba(16, 185, 129, 0.3)'
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
                {/* Animated Grid Pattern - Always visible, subtle */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}
                />

                {/* Animated Floating Orbs - Continuous animation */}
                <motion.div
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/10 blur-2xl pointer-events-none"
                    animate={{
                        x: [0, 15, 0],
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1],
                        opacity: isHovered ? 0.8 : 0.4
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-teal-400/15 to-emerald-400/10 blur-2xl pointer-events-none"
                    animate={{
                        x: [0, -10, 0],
                        y: [0, 15, 0],
                        scale: [1, 1.15, 1],
                        opacity: isHovered ? 0.7 : 0.3
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />

                {/* Shimmer Sweep - Continuous subtle animation */}
                <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -skew-x-12"
                        animate={{ x: ['-200%', '200%'] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 3
                        }}
                    />
                </motion.div>

                {/* Floating Dots Animation */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-emerald-400/30"
                            style={{
                                left: `${20 + i * 20}%`,
                                top: `${30 + (i % 2) * 40}%`
                            }}
                            animate={{
                                y: [0, -15, 0],
                                opacity: [0.2, 0.6, 0.2],
                                scale: [0.8, 1.2, 0.8]
                            }}
                            transition={{
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.7
                            }}
                        />
                    ))}
                </div>

                {/* Hover Enhanced Gradient */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-transparent to-teal-50/40 pointer-events-none"
                    animate={{ opacity: isHovered ? 1 : 0.15 }}
                    transition={{ duration: 0.4 }}
                />

                {/* Enhanced Hover Particles */}
                {isHovered && (
                    <>
                        <motion.div
                            className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-emerald-400/15 blur-xl"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1.5, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                        <motion.div
                            className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-teal-400/15 blur-xl"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1.5, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        />
                    </>
                )}

                {/* Header */}
                <div className="relative z-10 flex justify-between items-start mb-6">
                    {/* Icon */}
                    <motion.div
                        className="relative"
                        animate={{ rotate: isHovered ? [0, -5, 5, 0] : 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md"
                            whileHover={{ scale: 1.1 }}
                            animate={{
                                boxShadow: isHovered
                                    ? '0 12px 24px -6px rgba(16, 185, 129, 0.4)'
                                    : '0 4px 12px -2px rgba(16, 185, 129, 0.2)'
                            }}
                        >
                            {/* Shimmer */}
                            <motion.div
                                className="absolute inset-0 rounded-xl overflow-hidden"
                                initial={{ opacity: 0 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12"
                                    animate={isHovered ? { x: ['-100%', '200%'] } : {}}
                                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                                />
                            </motion.div>
                            <div className="relative text-white">{service.icon}</div>
                        </motion.div>
                    </motion.div>

                    {/* Status Pill */}
                    <motion.div
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                        animate={{
                            backgroundColor: isHovered ? 'rgba(16, 185, 129, 0.1)' : 'rgba(241, 245, 249, 1)',
                            borderColor: isHovered ? 'rgba(16, 185, 129, 0.3)' : 'rgba(226, 232, 240, 1)'
                        }}
                        style={{ border: '1px solid' }}
                    >
                        <motion.span
                            className="w-1.5 h-1.5 rounded-full"
                            animate={{
                                backgroundColor: isHovered ? '#10b981' : '#94a3b8',
                                boxShadow: isHovered ? '0 0 8px #10b981' : 'none'
                            }}
                        />
                        <span className={`text-[9px] font-bold tracking-wider uppercase ${isHovered ? 'text-emerald-600' : 'text-slate-400'}`}>
                            {isHovered ? 'ACTIVE' : 'IDLE'}
                        </span>
                    </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1">
                    <motion.h3
                        className="text-xl lg:text-2xl font-bold text-slate-900 mb-2 tracking-tight"
                        animate={{ x: isHovered ? 3 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {service.title}
                    </motion.h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        {service.desc}
                    </p>
                </div>

                {/* Divider with Animation */}
                <div className="relative h-px my-5 bg-slate-100">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500 to-teal-500"
                        initial={{ width: 0 }}
                        animate={{ width: isHovered ? '100%' : 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                </div>

                {/* Footer */}
                <div className="relative z-10 flex items-end justify-between">
                    <div>
                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                            {service.statLabel}
                        </div>
                        <motion.div
                            className="text-4xl lg:text-5xl font-bold tracking-tight"
                            animate={{
                                color: isHovered ? '#047857' : '#0f172a'
                            }}
                            style={{
                                textShadow: isHovered ? '0 0 30px rgba(16, 185, 129, 0.2)' : 'none'
                            }}
                        >
                            {service.stat}
                        </motion.div>
                    </div>

                    {/* Arrow Button */}
                    <motion.div
                        className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${isHovered
                            ? 'bg-emerald-500 border-emerald-500 shadow-lg shadow-emerald-500/30'
                            : 'bg-slate-50 border-slate-200'
                            }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowRight
                            size={16}
                            className={`transition-all duration-300 ${isHovered ? 'text-white -rotate-45' : 'text-slate-400'
                                }`}
                        />
                    </motion.div>
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    style={{ originX: 0.5 }}
                    transition={{ duration: 0.4 }}
                />
            </motion.div>
        </motion.div>
    );
}

// Special Large 3D Card for HRMS Section
function HRMS3DCard() {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / rect.width - 0.5;
        const yPct = mouseY / rect.height - 0.5;

        setRotation({
            x: yPct * -5,  // Much subtler tilt for a large card
            y: xPct * 5
        });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="perspective-2000"
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                className="relative bg-white rounded-[3rem] p-12 lg:p-24 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100 text-center overflow-hidden cursor-default group"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                    rotateX: rotation.x,
                    rotateY: rotation.y,
                    boxShadow: isHovered
                        ? "0 50px 120px -20px rgba(16, 185, 129, 0.2)"
                        : "0 40px 100px -20px rgba(0, 0, 0, 0.05)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
                {/* 1. Top Gradient Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 via-[#0A261D] to-emerald-400" />

                {/* 2. Shine Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-emerald-50/30 opacity-0 pointer-events-none"
                    animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                />

                {/* 3. Floating Content */}
                <div className="relative z-10 flex flex-col items-center" style={{ transform: "translateZ(30px)" }}>

                    {/* Floating Icon */}
                    <motion.div
                        className="w-24 h-24 bg-[#0A261D] rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-emerald-900/20 mb-10 rotate-[-5deg]"
                        animate={isHovered ? { rotate: 0, scale: 1.1 } : { rotate: -5, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                        <Database size={40} strokeWidth={1.5} />
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tighter">
                        Powered by <span className="text-emerald-700">Skoal HRMS</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto mb-14">
                        All payroll operations are managed through Skoal’s in-house HRMS platform, securely whitelisted for each client with <span className="inline-block bg-emerald-50 text-slate-900 font-semibold px-3 py-1 rounded-lg border border-emerald-100 transform -skew-x-6 hover:skew-x-0 transition-transform cursor-cell">dedicated databases</span> and access controls.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-10 py-5 bg-[#0A261D] text-white rounded-full font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-900/30 transition-all"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Request System Demo
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-[#0A261D] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
}

// Animated Counter Component
function Counter({ value, suffix = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const rounded = useTransform(springValue, (latest) => Math.floor(latest));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            // Parse numeric value from string (remove commas, signs)
            const numericValue = parseInt(value.replace(/,/g, "").replace(/\+/g, "").replace(/M/g, ""), 10);
            motionValue.set(numericValue);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return rounded.on("change", (latest) => {
            setDisplayValue(latest.toLocaleString());
        });
    }, [rounded]);

    return <span ref={ref}>{displayValue}{suffix}</span>;
}

// Premium Stats Section Component - Industry Level Design
function StatsSection() {
    const stats = [
        {
            value: "30",
            suffix: "+",
            label: "years of experience",
            icon: <Layers size={28} strokeWidth={1.5} />,
            gradient: "from-emerald-400 to-teal-500",
            delay: 0
        },
        {
            value: "180",
            suffix: "+",
            label: "countries worldwide",
            icon: <Globe size={28} strokeWidth={1.5} />,
            gradient: "from-teal-400 to-cyan-500",
            delay: 0.1
        },
        {
            value: "1,400",
            suffix: "",
            label: "global customers",
            icon: <Users size={28} strokeWidth={1.5} />,
            gradient: "from-cyan-400 to-emerald-500",
            delay: 0.2
        },
        {
            value: "11",
            suffix: "M+",
            label: "employees served",
            icon: <ShieldCheck size={28} strokeWidth={1.5} />,
            gradient: "from-emerald-400 to-green-500",
            delay: 0.3
        },
        {
            value: "200",
            suffix: "M+",
            label: "annual employee interactions",
            icon: <Activity size={28} strokeWidth={1.5} />,
            gradient: "from-green-400 to-emerald-500",
            delay: 0.4
        }
    ];

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Premium Gradient Mesh Background */}
            <div className="absolute inset-0 bg-[#051812]">
                {/* Animated Mesh Gradient */}
                <div className="absolute inset-0">
                    <motion.div
                        animate={{
                            background: [
                                "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
                                "radial-gradient(ellipse 80% 50% at 80% 60%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
                                "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)"
                            ]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0"
                    />
                    <motion.div
                        animate={{
                            background: [
                                "radial-gradient(ellipse 60% 40% at 70% 30%, rgba(20, 184, 166, 0.12) 0%, transparent 50%)",
                                "radial-gradient(ellipse 60% 40% at 30% 70%, rgba(20, 184, 166, 0.12) 0%, transparent 50%)",
                                "radial-gradient(ellipse 60% 40% at 70% 30%, rgba(20, 184, 166, 0.12) 0%, transparent 50%)"
                            ]
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute inset-0"
                    />
                </div>

                {/* Subtle Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
                        backgroundSize: '60px 60px'
                    }}
                />

                {/* Floating Particles */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-emerald-400/40"
                        style={{
                            left: `${8 + (i * 8)}%`,
                            top: `${20 + (i % 4) * 20}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: 4 + (i % 3),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3
                        }}
                    />
                ))}
            </div>

            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
                        whileHover={{ scale: 1.05, borderColor: "rgba(16, 185, 129, 0.3)" }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            <Activity size={14} className="text-emerald-400" />
                        </motion.div>
                        <span className="text-xs font-bold text-emerald-300 tracking-[0.2em] uppercase">Live Metrics</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Powering Global <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400">Workforce</span>
                    </h2>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                    {stats.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                delay: item.delay,
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            whileHover={{ y: -12, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Card Glow Effect */}
                            <motion.div
                                className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                            />

                            {/* Main Card */}
                            <div className="relative h-full bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-emerald-500/40 p-8 transition-all duration-500 overflow-hidden">
                                {/* Card Inner Glow */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />

                                {/* Shimmer Effect */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "200%" }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    style={{
                                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                                        transform: 'skewX(-20deg)'
                                    }}
                                />

                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    {/* Icon Container */}
                                    <motion.div
                                        className={`relative mb-6 p-4 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg`}
                                        whileHover={{
                                            rotate: [0, -10, 10, 0],
                                            scale: 1.1
                                        }}
                                        transition={{ duration: 0.5 }}
                                        style={{
                                            boxShadow: `0 10px 40px -10px rgba(16, 185, 129, 0.4)`
                                        }}
                                    >
                                        {/* Icon Pulse Ring */}
                                        <motion.div
                                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient}`}
                                            animate={{
                                                scale: [1, 1.3, 1],
                                                opacity: [0.5, 0, 0.5]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        <div className="relative text-white">
                                            {item.icon}
                                        </div>
                                    </motion.div>

                                    {/* Number */}
                                    <div className="mb-3">
                                        <motion.span
                                            className="text-5xl lg:text-6xl font-bold text-white tracking-tight font-mono"
                                            style={{
                                                textShadow: '0 0 40px rgba(16, 185, 129, 0.3)'
                                            }}
                                        >
                                            <Counter value={item.value} suffix={item.suffix} />
                                        </motion.span>
                                    </div>

                                    {/* Label */}
                                    <p className="text-emerald-100/50 text-[11px] font-bold uppercase tracking-[0.15em] leading-relaxed max-w-[120px] group-hover:text-emerald-300 transition-colors duration-500">
                                        {item.label}
                                    </p>

                                    {/* Bottom Accent */}
                                    <motion.div
                                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} rounded-b-3xl`}
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: item.delay + 0.5, duration: 0.8 }}
                                        style={{ originX: 0 }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Decorative Element */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center justify-center gap-4 mt-16"
                >
                    <div className="h-px w-24 bg-gradient-to-r from-transparent to-emerald-500/50" />
                    <motion.div
                        className="w-2 h-2 rounded-full bg-emerald-500"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                            boxShadow: [
                                '0 0 0 0 rgba(16, 185, 129, 0.7)',
                                '0 0 0 10px rgba(16, 185, 129, 0)',
                                '0 0 0 0 rgba(16, 185, 129, 0.7)'
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="h-px w-24 bg-gradient-to-r from-emerald-500/50 to-transparent" />
                </motion.div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        </section>
    );
}

// Helper for BPO List Items - Enhanced Pill Style
function BPOItem({ icon, title, isDark = false, index }) {
    return (
        <motion.li
            className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group/item cursor-default overflow-hidden relative
                ${isDark
                    ? 'bg-emerald-800/20 border-emerald-500/20 hover:bg-emerald-800/40' // Dark styles
                    : 'bg-white border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200'}`} // Light styles
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
            whileHover={{ x: 5 }}
        >
            {/* Hover sheen effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"
            />

            <div className={`w-10 h-10 rounded-xl flex shrink-0 items-center justify-center transition-width duration-300 shadow-inner
                ${isDark
                    ? 'bg-emerald-900/50 text-emerald-400 group-hover/item:text-white group-hover/item:bg-emerald-600'
                    : 'bg-emerald-50 text-emerald-600 group-hover/item:text-white group-hover/item:bg-emerald-500'}`}>
                {icon}
            </div>
            <span className={`text-sm md:text-base font-semibold tracking-wide ${isDark ? 'text-emerald-50' : 'text-slate-700'}`}>{title}</span>
        </motion.li>
    );
}

// BPO Services Section - Redesigned V3 (Smaller + Animated)
function BPOSection() {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="py-24 px-6 lg:px-12 relative overflow-hidden bg-[#FAFAFA]">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.4] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-multiply" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                            </span>
                            <span className="text-xs font-bold text-slate-600 tracking-widest uppercase">Skoal Solutions Pvt. Ltd.</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                            Skoal <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-transparent bg-clip-text">BPO Services</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto font-medium">
                            Secure, scalable, and performance-driven solutions tailored for modern digital businesses.
                        </p>
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <div className="grid lg:grid-cols-2 gap-8 items-stretch">

                    {/* Dark Card - Customer Support */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="group relative rounded-[2.5rem] overflow-hidden bg-[#023122] shadow-2xl shadow-emerald-900/20"
                    >
                        {/* Deep Green Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#023122] to-[#012217]" />

                        <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">

                            {/* Icon */}
                            <motion.div variants={contentVariants} className="w-16 h-16 rounded-2xl bg-emerald-900/40 border border-emerald-500/20 flex items-center justify-center mb-8 shadow-lg">
                                <Headset size={32} className="text-emerald-400 stroke-[1.5px]" />
                            </motion.div>

                            <motion.h3 variants={contentVariants} className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                                Customer Support
                            </motion.h3>
                            <motion.p variants={contentVariants} className="text-emerald-100/70 text-base md:text-lg mb-10 font-medium leading-relaxed">
                                Complete customer engagement suite designed for retention.
                            </motion.p>

                            <motion.ul className="space-y-3 mt-auto">
                                <BPOItem index={0} icon={<MessageSquare size={18} />} title="Email & ticket-based support" isDark={true} />
                                <BPOItem index={1} icon={<MessageSquare size={18} />} title="Live chat & messaging platforms" isDark={true} />
                                <BPOItem index={2} icon={<Phone size={18} />} title="Inbound voice support" isDark={true} />
                                <BPOItem index={3} icon={<Users size={18} />} title="Outbound customer engagement" isDark={true} />
                            </motion.ul>
                        </div>
                    </motion.div>

                    {/* Light Card - Revenue & Growth */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="group relative rounded-[2.5rem] overflow-hidden bg-white shadow-xl shadow-slate-200/60 border border-slate-100"
                    >
                        {/* Decoration: Bottom Right Vector Shape */}
                        <div className="absolute bottom-0 right-0 w-full h-[30%] overflow-hidden pointer-events-none rounded-br-[2.5rem]">
                            <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 w-[200%] h-full text-emerald-50 fill-current opacity-80" style={{ right: '-20%' }}>
                                <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>
                        </div>

                        <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">

                            {/* Icon */}
                            <motion.div variants={contentVariants} className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-8 shadow-sm">
                                <TrendingUp size={32} className="text-emerald-600 stroke-[1.5px]" />
                            </motion.div>

                            <motion.h3 variants={contentVariants} className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
                                Revenue & Growth
                            </motion.h3>
                            <motion.p variants={contentVariants} className="text-slate-500 text-base md:text-lg mb-10 font-medium leading-relaxed">
                                Maximize lifetime value with strategic sales support.
                            </motion.p>

                            <motion.ul className="space-y-3 mt-auto relative">
                                <BPOItem index={0} icon={<ShoppingCart size={18} />} title="Cart abandonment calling" />
                                <BPOItem index={1} icon={<ArrowUpRight size={18} />} title="Upsell and cross-sell campaigns" />
                                <BPOItem index={2} icon={<BarChart3 size={18} />} title="Curated cohort outbound sales" />
                            </motion.ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Technology-Led Payroll Control Section - Redesigned V2
function TechPayrollSection() {
    const techFeatures = [
        {
            icon: <Monitor size={28} />,
            title: "In-house HRMS Software",
            desc: "Client-whitelisted platforms with dedicated databases",
            color: "text-blue-500",
            bg: "bg-blue-50",
            border: "group-hover:border-blue-200"
        },
        {
            icon: <Fingerprint size={28} />,
            title: "Cloud-Based Biometric",
            desc: "Real-time attendance tracking across all locations",
            color: "text-emerald-500",
            bg: "bg-emerald-50",
            border: "group-hover:border-emerald-200"
        },
        {
            icon: <BarChart2 size={28} />,
            title: "Real-Time Dashboards",
            desc: "Attendance and payroll visibility anytime, anywhere",
            color: "text-indigo-500",
            bg: "bg-indigo-50",
            border: "group-hover:border-indigo-200"
        },
        {
            icon: <Lock size={28} />,
            title: "Data Security Protocols",
            desc: "Role-based access and enterprise-grade security",
            color: "text-teal-500",
            bg: "bg-teal-50",
            border: "group-hover:border-teal-200"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="py-32 px-6 lg:px-12 relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[100px] -translate-y-1/2" />
                <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] -translate-y-1/2" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 font-bold tracking-widest text-xs uppercase mb-6">
                            Technology Infrastructure
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                            Technology-Led <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-serif italic">Payroll Control</span>
                        </h2>
                        <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
                            To eliminate payroll leakages and improve workforce accountability, Skoal integrates cutting-edge technology at every level.
                        </p>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {techFeatures.map((feature, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className={`group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-2xl transition-all duration-300 overflow-hidden ${feature.border}`}
                        >
                            {/* Hover Gradient Overlay */}
                            <motion.div
                                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feature.bg} to-white`}
                            />

                            {/* Decorative Circle */}
                            <motion.div
                                className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-slate-50 group-hover:bg-white/50 transition-colors duration-300"
                                whileHover={{ scale: 1.2 }}
                            />

                            <div className="relative z-10">
                                {/* Icon */}
                                <motion.div
                                    className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center ${feature.color} mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                                >
                                    {feature.icon}
                                </motion.div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:translate-x-1 transition-transform duration-300">
                                    {feature.title}
                                </h3>

                                <p className="text-slate-500 text-sm leading-relaxed font-medium group-hover:text-slate-600 transition-colors duration-300">
                                    {feature.desc}
                                </p>
                            </div>

                            {/* Bottom Accent */}
                            <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-${feature.color.split('-')[1]}-400 to-${feature.color.split('-')[1]}-600 w-0 group-hover:w-full transition-all duration-500`} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.div
                        className="relative inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-emerald-900/5 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300 group cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                    >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                            <motion.div
                                className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                                animate={{ x: ['-200%', '200%'] }}
                                transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
                            />
                        </div>

                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                            <CheckCircle2 size={20} className="text-emerald-600" />
                        </div>
                        <span className="text-slate-700 font-semibold text-sm md:text-lg leading-tight">
                            Complete visibility and control over attendance, payroll, and compliance—<span className="text-emerald-700">anytime, anywhere.</span>
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// Recruitment as Extension of Payroll Section
function RecruitmentSection() {
    const recruitmentCapabilities = [
        { icon: <Users size={20} />, title: "High-volume blue-collar hiring" },
        { icon: <Briefcase size={20} />, title: "White-collar and operational roles" },
        { icon: <MapPin size={20} />, title: "Hyperlocal and referral-driven sourcing" },
        { icon: <RefreshCcw size={20} />, title: "SLA-based fulfillment and replacement" }
    ];

    return (
        <section className="py-32 px-6 lg:px-12 bg-[#0A261D] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.2, 1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ opacity: [0.1, 0.15, 0.1], scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 12, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[80px]"
                />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-emerald-400 font-bold tracking-widest text-xs uppercase mb-4 block">
                            Integrated Workforce Sourcing
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Recruitment as an Extension of <span className="font-serif italic text-emerald-400">Payroll</span>
                        </h2>
                        <p className="text-emerald-100/70 text-lg leading-relaxed mb-8">
                            As part of our payrolling services, Skoal also offers recruitment and workforce sourcing, ensuring speed without compromising compliance.
                        </p>

                        {/* Capabilities List */}
                        <ul className="space-y-4 mb-10">
                            {recruitmentCapabilities.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                        {item.icon}
                                    </div>
                                    <span className="text-white font-medium">{item.title}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-3 text-emerald-300 text-sm"
                        >
                            <CheckCircle2 size={18} />
                            <span>Faster onboarding, lower attrition, operational continuity</span>
                        </motion.div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative bg-gradient-to-br from-emerald-900/50 to-teal-900/30 rounded-[3rem] p-12 border border-white/10 backdrop-blur-sm">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white/10 rounded-2xl p-6 text-center border border-white/5">
                                    <div className="text-4xl font-bold text-white mb-2">48hr</div>
                                    <div className="text-xs text-emerald-300 uppercase tracking-wider">Avg. Deployment</div>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6 text-center border border-white/5">
                                    <div className="text-4xl font-bold text-emerald-400 mb-2">SLA</div>
                                    <div className="text-xs text-emerald-300 uppercase tracking-wider">Based Fulfillment</div>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-6 text-center border border-white/5">
                                    <div className="text-4xl font-bold text-white mb-2">100%</div>
                                    <div className="text-xs text-emerald-300 uppercase tracking-wider">Compliance Check</div>
                                </div>
                                <div className="bg-emerald-500/20 rounded-2xl p-6 text-center border border-emerald-500/30">
                                    <div className="text-4xl font-bold text-emerald-400 mb-2">↓30%</div>
                                    <div className="text-xs text-emerald-300 uppercase tracking-wider">Attrition Rate</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// AI-Enabled Contact Centre Section - Redesigned (Metric Cards)
// AI-Enabled Contact Centre Section - Redesigned (Premium Noise & Blobs)
function AIContactCentreSection() {
    const aiCapabilities = [
        {
            icon: <Bot size={28} />,
            title: "AI-Powered Outbound",
            desc: "Intelligent automated calling systems that adapt to customer responses.",
            value: "3",
            suffix: "x",
            statLabel: "Connect Rate"
        },
        {
            icon: <Mic size={28} />,
            title: "IVR Solutions",
            desc: "Smart call routing and self-service for faster resolution.",
            value: "40",
            suffix: "%",
            statLabel: "Call Reduction"
        },
        {
            icon: <Radio size={28} />,
            title: "Voice Campaigns",
            desc: "Pre-recorded voice blasts at scale for massive reach.",
            value: "10",
            suffix: "K+",
            statLabel: "Calls/Hour"
        },
        {
            icon: <Zap size={28} />,
            title: "Predictive Dialers",
            desc: "Filter busies & voicemails automatically for max efficiency.",
            value: "85",
            suffix: "%",
            statLabel: "Efficiency"
        }
    ];

    return (
        <section className="py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
            {/* Section Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex justify-center mb-6">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-800 text-sm font-semibold">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                </span>
                                Skoal Solutions Pvt. Ltd.
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                            AI-Enabled <span className="text-emerald-600 font-serif italic">Contact Centre</span>
                        </h2>
                        <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
                            As customer engagement evolves, Skoal integrates AI-driven solutions to improve efficiency and scale—without compromising compliance or experience.
                        </p>
                    </motion.div>
                </div>

                {/* Capabilities Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {aiCapabilities.map((cap, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 border border-slate-100 overflow-hidden"
                        >
                            {/* --- PREMIUM ANIMATED BACKGROUND --- */}

                            {/* 1. Noise Texture Overlay (Subtle Grain) */}
                            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply pointer-events-none" />

                            {/* 2. Abstract Blurred Blobs (Shift on Hover) */}
                            <motion.div
                                className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-100/50 rounded-full blur-[60px]"
                                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-100/50 rounded-full blur-[60px] group-hover:bg-emerald-100/60 transition-colors duration-500" />

                            {/* 3. Gradient Sheen on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/0 to-emerald-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />


                            <div className="flex-1 relative z-10">
                                {/* Icon Container */}
                                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    <div className="text-emerald-600">
                                        {cap.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-800 transition-colors duration-300">{cap.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                                    {cap.desc}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-slate-100 relative z-10 group-hover:border-emerald-100 transition-colors duration-300">
                                <div className="text-4xl font-bold text-emerald-500 mb-2">
                                    <Counter value={cap.value} suffix={cap.suffix} />
                                </div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-emerald-400 transition-colors duration-300">{cap.statLabel}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function ServicesPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // Services Data
    const servicesList = [
        {
            title: "Salary Processing",
            desc: "Salary processing and disbursement.",
            icon: <Calculator size={24} />,
            stat: "100%",
            statLabel: "ACCURACY RATE"
        },
        {
            title: "Statutory Compliance",
            desc: "PF, ESIC, Gratuity, Professional Tax, TDS.",
            icon: <ShieldCheck size={24} />,
            stat: "ZERO",
            statLabel: "RISK EXPOSURE"
        },
        {
            title: "Employment Docs",
            desc: "Employment documentation and onboarding.",
            icon: <Users size={24} />,
            stat: "24HR",
            statLabel: "TURNAROUND"
        },
        {
            title: "Payroll Governance",
            desc: "Payroll governance and audit-ready reporting.",
            icon: <FileText size={24} />,
            stat: "AUDIT",
            statLabel: "READY STATUS"
        },
    ];

    return (
        <main ref={containerRef} className="bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 overflow-hidden">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 lg:px-12 overflow-hidden">

                {/* 1. ANIMATED ORBS BACKGROUND (From About Page) */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 opacity-[0.3]"
                        style={{
                            backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                            backgroundSize: '32px 32px'
                        }}
                    />
                    <motion.div
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.2, 1],
                            x: [0, 30, 0],
                            y: [0, -20, 0]
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-emerald-100/60 to-teal-100/40 rounded-full blur-[100px]"
                    />
                    <motion.div
                        animate={{
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.3, 1],
                            x: [0, -40, 0],
                            y: [0, 30, 0]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/40 to-emerald-100/40 rounded-full blur-[90px]"
                    />
                </div>

                <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-20 items-center relative z-10">

                    {/* LEFT: TEXT CONTENT (3D Reveal Style) */}
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-sm mb-10"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#06402B]"></span>
                            </span>
                            <span className="text-slate-600 text-xs font-bold tracking-widest uppercase">Core Services</span>
                        </motion.div>

                        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[1.1] mb-10 text-slate-900">
                            <div className="overflow-hidden">
                                <motion.span
                                    initial={{ y: "100%", rotateX: -20 }}
                                    animate={{ y: 0, rotateX: 0 }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="block origin-bottom-left"
                                >
                                    Skoal HR &
                                </motion.span>
                            </div>
                            <div className="overflow-hidden py-2">
                                <motion.span
                                    initial={{ y: "100%", rotateX: -20 }}
                                    animate={{ y: 0, rotateX: 0 }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                    className="block origin-bottom-left font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#022c22] via-[#059669] to-[#022c22] animate-gradient-x bg-[length:200%_auto]"
                                >
                                    Payrolling.
                                </motion.span>
                            </div>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="text-xl text-slate-500 leading-relaxed max-w-lg mb-12 font-medium"
                        >
                            We manage your entire employee lifecycle with a focus on compliance, transparency, and precision.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-6"
                        >
                            <button className="group relative px-8 py-4 bg-[#0A261D] text-white rounded-full overflow-hidden transition-all hover:shadow-2xl hover:shadow-emerald-900/30">
                                <span className="relative z-10 flex items-center gap-2 font-semibold">
                                    Explore Solutions <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-emerald-800 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                            </button>
                        </motion.div>
                    </div>

                    {/* RIGHT: "SERVICE DECK" ANIMATION (Fan Effect) */}
                    <div className="relative h-[600px] flex items-center justify-center perspective-[2000px]">

                        {/* Card 3: Back (Compliance) */}
                        <motion.div
                            initial={{ opacity: 0, rotateZ: 0, y: 50, scale: 0.8 }}
                            animate={{ opacity: 1, rotateZ: 12, y: 0, x: 60, scale: 0.95 }}
                            transition={{ duration: 1.2, delay: 0.4, ease: "backOut" }}
                            className="absolute w-[380px] h-[500px] bg-emerald-900 rounded-[2.5rem] shadow-xl p-8 border border-white/10 z-10"
                        >
                            <div className="h-full flex flex-col justify-between opacity-40">
                                <div className="w-12 h-12 rounded-full bg-white/20" />
                                <div className="space-y-4">
                                    <div className="h-4 w-3/4 bg-white/20 rounded-full" />
                                    <div className="h-4 w-1/2 bg-white/20 rounded-full" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Middle (HRMS) */}
                        <motion.div
                            initial={{ opacity: 0, rotateZ: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, rotateZ: -6, y: 0, x: -60, scale: 0.95 }}
                            transition={{ duration: 1.2, delay: 0.3, ease: "backOut" }}
                            className="absolute w-[380px] h-[500px] bg-slate-100 rounded-[2.5rem] shadow-xl p-8 border border-slate-200 z-20"
                        >
                            <div className="h-full flex flex-col justify-between opacity-30">
                                <div className="w-12 h-12 rounded-full bg-slate-900/20" />
                                <div className="space-y-4">
                                    <div className="h-4 w-3/4 bg-slate-900/20 rounded-full" />
                                    <div className="h-4 w-1/2 bg-slate-900/20 rounded-full" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 1: Front (Main Metric) */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                            className="relative w-[380px] h-[500px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] p-8 border border-slate-100 z-30 flex flex-col justify-between"
                        >
                            <div className="flex items-center justify-between">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                                    <Activity size={28} />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                                    Live
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">System Status</div>
                                    <div className="text-3xl font-serif font-medium text-slate-900">Optimal</div>
                                </div>

                                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-slate-500">Payroll Cycle</span>
                                        <span className="text-slate-900 font-bold">On Track</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "75%" }}
                                            transition={{ duration: 1.5, delay: 1 }}
                                            className="h-full bg-emerald-500 rounded-full"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-emerald-500 text-white p-4 rounded-2xl">
                                        <PieChart size={20} className="mb-2 opacity-80" />
                                        <div className="text-2xl font-bold">100%</div>
                                        <div className="text-[10px] opacity-80 uppercase tracking-wider">Compliance</div>
                                    </div>
                                    <div className="bg-slate-900 text-white p-4 rounded-2xl">
                                        <Layers size={20} className="mb-2 opacity-80" />
                                        <div className="text-2xl font-bold">Zero</div>
                                        <div className="text-[10px] opacity-80 uppercase tracking-wider">Discrepancy</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </section>

            {/* --- WHAT WE DO SECTION --- */}
            <section className="relative z-10 py-24">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 overflow-hidden">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            d="M -100 200 Q 400 300 800 200 T 2000 200"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="3"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </svg>
                </div>

                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20 max-w-3xl mx-auto"
                    >
                        <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-4 block">
                            Our Services
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            We provide fully compliant payrolling services across <span className="text-emerald-700">India</span> and the <span className="text-emerald-700">Middle East.</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {servicesList.map((service, index) => (
                            <PrecisionCard key={index} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- STATS SECTION --- */}
            <StatsSection />

            {/* --- BPO SERVICES SECTION --- */}
            <BPOSection />

            {/* --- TECHNOLOGY-LED PAYROLL CONTROL --- */}
            <TechPayrollSection />

            {/* --- RECRUITMENT AS EXTENSION OF PAYROLL --- */}
            <RecruitmentSection />

            {/* --- AI-ENABLED CONTACT CENTRE --- */}
            <AIContactCentreSection />

            {/* --- HRMS FOOTER --- */}
            <section className="py-32 px-6 lg:px-12 relative overflow-hidden bg-slate-50/50">
                <div className="container mx-auto max-w-5xl relative z-10">
                    <HRMS3DCard />
                </div>
            </section>

            <Footer />
        </main>
    );
}

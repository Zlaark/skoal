"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue, AnimatePresence } from "framer-motion";
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
import AIServiceCard from "./AIServiceCard";
import Footer from "../components/Footer";

// --- Components ---

// Redesigned Service Card - Premium Enterprise Payroll Aesthetic
function EnterpriseServiceCard({ service, index }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative h-full bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 cursor-default"
            whileHover={{ y: -8 }}
        >
            {/* Soft Green Gradient Highlight Background (Fades in) */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-[2rem] border border-emerald-500/0 group-hover:border-emerald-500/20 transition-colors duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    {/* Icon Container */}
                    <div className="mb-6 inline-flex p-3 rounded-2xl bg-emerald-50/50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
                        {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-800 transition-colors">
                        {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                        {service.desc}
                    </p>
                </div>

                {/* Bottom Section: Metric */}
                <div>
                    <div className="h-px w-full bg-slate-100 group-hover:bg-emerald-100/50 transition-colors mb-4" />

                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-emerald-600/70 transition-colors">
                                {service.statLabel}
                            </div>
                            <div className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                                {service.stat}
                            </div>
                        </div>

                        {/* Interactive Arrow */}
                        <motion.div
                            animate={{ x: isHovered ? 5 : 0, opacity: isHovered ? 1 : 0.5 }}
                            className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600"
                        >
                            <ArrowRight size={16} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// Redesigned Service Card - Strategic Grid Aesthetic (Linear/Stripe Style)
function GridServiceCard({ service, index }) {
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative h-full bg-white p-10 lg:p-14 overflow-hidden"
        >
            {/* Spotlight Gradient on Hover */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: useTransform(
                        [x, y],
                        ([latestX, latestY]) => `radial-gradient(800px circle at ${latestX}px ${latestY}px, rgba(16, 185, 129, 0.06), transparent 100%)`
                    )
                }}
            />

            {/* Top Border Gradient on Hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Icon Area */}
                <div className="mb-8 flex justify-between items-start">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-emerald-600 group-hover:text-emerald-500 group-hover:bg-emerald-50/50 group-hover:border-emerald-100 transition-colors duration-300">
                        {service.icon}
                    </div>

                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-300 group-hover:text-emerald-500 transition-colors">
                        0{index + 1}
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 leading-relaxed mb-8 flex-1 group-hover:text-slate-600">
                    {service.desc}
                </p>

                {/* Bottom Stats Row */}
                <div className="flex items-end justify-between pt-6 border-t border-slate-100 group-hover:border-emerald-100 transition-colors">
                    <div>
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                            {service.statLabel}
                        </div>
                        <div className="text-3xl font-bold text-slate-900 tracking-tight">
                            {service.stat}
                        </div>
                    </div>

                    <motion.div
                        animate={{ x: isHovered ? 5 : 0 }}
                        className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <ArrowRight size={24} />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

// Redesigned Service Card - Premium Light "Crystal" Aesthetic
function PrecisionCard({ service, index }) {
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group h-full perspective-[1000px]"
        >
            <motion.div
                className="relative h-full p-8 lg:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col transition-all duration-500"
                whileHover={{
                    y: -12,
                    boxShadow: "0 40px 80px -20px rgba(16, 185, 129, 0.15)",
                    borderColor: "rgba(16, 185, 129, 0.2)"
                }}
            >
                {/* === Dynamic Light Effects === */}

                {/* Mouse Follower Gradient (Subtle Spotlight) */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: useTransform(
                            [x, y],
                            ([latestX, latestY]) => `radial-gradient(600px circle at ${latestX}px ${latestY}px, rgba(16, 185, 129, 0.03), transparent 40%)`
                        )
                    }}
                />

                {/* Animated Mesh Noise Background */}
                <div className="absolute inset-0 opacity-[0.4] mix-blend-soft-light pointer-events-none">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                </div>

                {/* Decorative Background Blob (Animated) */}
                <motion.div
                    className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-emerald-50/80 to-teal-50/50 rounded-full blur-[60px] pointer-events-none"
                    animate={{
                        scale: isHovered ? 1.2 : 1,
                        x: isHovered ? -20 : 0,
                        rotate: isHovered ? 20 : 0
                    }}
                    transition={{ duration: 0.8 }}
                />

                {/* === Card Content === */}

                <div className="relative z-10 flex flex-col h-full">
                    {/* Header Row */}
                    <div className="flex justify-between items-start mb-8">
                        {/* 3D Floating Icon Container */}
                        <motion.div
                            className="relative w-18 h-18"
                            style={{ transformStyle: "preserve-3d" }}
                            animate={{
                                rotateX: isHovered ? 10 : 0,
                                rotateY: isHovered ? 10 : 0,
                                z: isHovered ? 20 : 0
                            }}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-lg shadow-emerald-100/50 border border-emerald-50/50 flex items-center justify-center text-emerald-600 relative overflow-hidden group-hover:text-emerald-500 transition-colors">
                                {/* Icon Inner Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                {service.icon}
                            </div>

                            {/* Decorative Ring */}
                            <motion.div
                                className="absolute -inset-2 rounded-3xl border-2 border-emerald-500/10 pointer-events-none"
                                animate={{
                                    scale: isHovered ? 1.1 : 0.9,
                                    rotate: isHovered ? 90 : 0,
                                    opacity: isHovered ? 1 : 0
                                }}
                                transition={{ duration: 0.8, ease: "backOut" }}
                            />
                        </motion.div>

                        {/* Status Indicator */}
                        <div className="flex flex-col items-end">
                            <div className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100 group-hover:border-emerald-100 group-hover:bg-emerald-50/30 transition-colors duration-300 flex items-center gap-2">
                                <span className={`w-1.5 h-1.5 rounded-full bg-emerald-500 ${isHovered ? 'animate-pulse' : ''}`} />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-emerald-600 transition-colors">Active</span>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="mb-8 flex-1">
                        <motion.h3
                            className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-900 transition-colors"
                            style={{ transform: "translateZ(20px)" }}
                        >
                            {service.title}
                        </motion.h3>
                        <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                            {service.desc}
                        </p>
                    </div>

                    {/* Footer Metrics */}
                    <div className="pt-6 border-t border-slate-100 group-hover:border-emerald-100/50 transition-colors flex items-center justify-between">
                        <div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{service.statLabel}</div>
                            <div className="text-4xl font-serif font-medium text-slate-900 group-hover:text-emerald-700 transition-colors">
                                {service.stat}
                            </div>
                        </div>

                        {/* Action Button */}
                        <motion.div
                            className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-emerald-500 flex items-center justify-center text-slate-400 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-emerald-500/30"
                            whileHover={{ scale: 1.1, rotate: -45 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ArrowRight size={20} />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// Special Large 3D Card for HRMS Section - Complete Dramatic Redesign
function HRMS3DCard() {
    const features = [
        { icon: <ShieldCheck size={20} />, label: "100% Compliance", value: "Zero" },
        { icon: <Database size={20} />, label: "Dedicated DBs", value: "Per Client" },
        { icon: <Lock size={20} />, label: "Security", value: "Enterprise" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
        >
            {/* Main Dark Hero Card */}
            <div className="relative bg-[#0A261D] rounded-[3rem] p-12 lg:p-16 overflow-hidden">

                {/* === ANIMATED BACKGROUNDS === */}

                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

                {/* Animated Gradient Blobs */}
                <motion.div
                    className="absolute top-[-30%] right-[-20%] w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px]"
                    animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-[-30%] left-[-20%] w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[100px]"
                    animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />

                {/* Animated Grid Lines */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="hrms-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hrms-grid)" />
                    </svg>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-[3rem] pointer-events-none">
                    <motion.div
                        className="absolute inset-0 w-[300%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                        animate={{ x: ['-300%', '300%'] }}
                        transition={{ duration: 6, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                    />
                </div>

                {/* Content */}
                <div className="relative z-10">
                    {/* Header Row */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
                        {/* Left: Icon + Title */}
                        <div className="flex items-center gap-6">
                            <motion.div
                                className="w-20 h-20 lg:w-24 lg:h-24 bg-white/10 border border-white/20 rounded-[1.5rem] flex items-center justify-center text-emerald-400 backdrop-blur-sm"
                                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Database size={40} strokeWidth={1.5} />
                            </motion.div>
                            <div>
                                <div className="text-emerald-400/80 text-sm font-bold uppercase tracking-widest mb-2">Powered By</div>
                                <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                                    Skoal <span className="font-serif italic text-emerald-400">HRMS</span>
                                </h2>
                            </div>
                        </div>

                        {/* Right: CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 bg-white text-[#0A261D] rounded-full font-bold text-lg overflow-hidden shadow-xl hover:shadow-emerald-500/30 transition-all"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Request Demo
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-emerald-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </motion.button>
                    </div>

                    {/* Description */}
                    <p className="text-lg lg:text-xl text-emerald-100/70 leading-relaxed max-w-4xl mb-12">
                        All payroll operations are managed through Skoal's proprietary HRMS platform,
                        securely whitelisted for each client with <span className="text-white font-semibold">dedicated databases</span> and
                        role-based access controls.
                    </p>

                    {/* Feature Cards Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">{feature.value}</div>
                                <div className="text-sm text-emerald-300/60 font-medium uppercase tracking-wider">{feature.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating Accent Elements */}
            <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center text-emerald-600 border border-slate-100"
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <CheckCircle2 size={32} />
            </motion.div>

            <motion.div
                className="absolute -bottom-4 -left-4 px-5 py-3 bg-white rounded-full shadow-xl flex items-center gap-2 text-slate-900 border border-slate-100"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-bold">System Online</span>
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

// BPO Services Section - Industries Style Horizontal Scroll
function BPOSection() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    // Transform vertical scroll to horizontal card movement (like Industries)
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-110%"]);

    const bpoServices = [
        {
            id: "support",
            title: "Customer Support",
            subtitle: "Engagement Suite",
            description: "Complete customer engagement suite designed for retention. From email to voice, we cover every touchpoint with precision.",
            stat: "24/7",
            statLabel: "Availability",
            icon: Headset,
            gradient: "from-emerald-500/30 to-teal-400/30",
        },
        {
            id: "growth",
            title: "Revenue & Growth",
            subtitle: "Sales Acceleration",
            description: "Maximize lifetime value with strategic sales support. Turn abandoned carts into conversions and browsers into buyers.",
            stat: "3x",
            statLabel: "ROI Boost",
            icon: TrendingUp,
            gradient: "from-teal-500/30 to-cyan-400/30",
        },
        {
            id: "quality",
            title: "Quality Assurance",
            subtitle: "Performance Monitoring",
            description: "Real-time quality monitoring with AI-powered scoring. Every interaction is measured, analyzed, and optimized.",
            stat: "99.9%",
            statLabel: "Accuracy",
            icon: ShieldCheck,
            gradient: "from-blue-500/30 to-indigo-400/30",
        },
        {
            id: "analytics",
            title: "Deep Analytics",
            subtitle: "Data Intelligence",
            description: "Transform raw data into actionable insights. Custom dashboards and predictive analytics for informed decisions.",
            stat: "500+",
            statLabel: "Metrics",
            icon: BarChart3,
            gradient: "from-indigo-500/30 to-purple-400/30",
        }
    ];

    // BPO Card Component (matching Industries card style)
    const BPOCard = ({ card }) => {
        const Icon = card.icon;
        return (
            <motion.div
                className="group relative h-[480px] w-[85vw] sm:w-[360px] md:w-[420px] overflow-hidden rounded-[2rem] flex-shrink-0 bg-gradient-to-br from-[#0A1A15] to-[#051210] border border-emerald-500/20 transition-all duration-500"
                whileHover={{
                    y: -8,
                    boxShadow: "0 30px 60px -12px rgba(16, 185, 129, 0.35)",
                }}
            >
                {/* Animated Border Glow */}
                <motion.div
                    className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                        background: 'linear-gradient(135deg, transparent 40%, rgba(16, 185, 129, 0.3) 50%, rgba(6, 182, 212, 0.3) 60%, transparent 70%)',
                        backgroundSize: '400% 400%',
                    }}
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Dynamic Background Gradients */}
                <motion.div
                    className={`absolute inset-0 opacity-20 group-hover:opacity-50 transition-opacity duration-700 bg-gradient-to-br ${card.gradient}`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

                {/* Abstract Shapes with Animation */}
                <motion.div
                    className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-emerald-500/30 to-cyan-500/20 rounded-full blur-[80px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-teal-500/20 to-cyan-400/15 rounded-full blur-[80px]"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                {/* Content Container */}
                <div className="relative h-full p-8 md:p-10 flex flex-col justify-between z-10">
                    {/* Top Section */}
                    <div>
                        {/* Icon & Subtitle Row */}
                        <div className="flex items-center justify-between mb-6 group-hover:text-emerald-100 transition-colors duration-500">
                            <motion.div
                                className="p-3.5 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 group-hover:from-emerald-500/30 group-hover:to-cyan-500/20 group-hover:border-emerald-400/40 backdrop-blur-md transition-all duration-500"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <Icon size={26} className="text-emerald-400 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                            </motion.div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300 md:text-emerald-400 group-hover:text-cyan-300 transition-colors duration-500">
                                {card.subtitle}
                            </span>
                        </div>

                        {/* Title & Desc */}
                        <h3 className="text-3xl font-serif font-medium text-white mb-4 transition-colors duration-500 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-emerald-100 group-hover:bg-clip-text">
                            {card.title}
                        </h3>
                        <p className="text-emerald-100/90 text-[17px] leading-relaxed group-hover:text-emerald-100/80 transition-colors duration-500 font-light">
                            {card.description}
                        </p>
                    </div>

                    {/* Bottom Section */}
                    <div className="pt-8 border-t border-white/5 group-hover:border-emerald-500/20 transition-colors duration-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <motion.div
                                    className="text-4xl font-bold bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent tracking-tighter"
                                    animate={{ opacity: [0.9, 1, 0.9] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    {card.stat}
                                </motion.div>
                                <div className="text-xs font-medium text-emerald-300/80 group-hover:text-cyan-300 transition-colors duration-500 mt-1 uppercase tracking-wider">
                                    {card.statLabel}
                                </div>
                            </div>

                            {/* Floating Action Button */}
                            <motion.button
                                className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-500/30 group-hover:from-emerald-500 group-hover:to-cyan-500 group-hover:border-transparent flex items-center justify-center transition-all duration-500"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ArrowRight size={20} className="text-emerald-400 group-hover:text-white transition-colors duration-500" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <section ref={containerRef} className="relative h-[350vh] bg-gradient-to-b from-slate-50 via-white to-slate-50">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

                {/* === ANIMATED BACKGROUND LAYER === */}

                {/* Gradient Mesh Background */}
                <div className="absolute inset-0 z-0">
                    {/* Primary gradient orbs */}
                    <motion.div
                        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-emerald-400/40 via-teal-300/25 to-transparent blur-[100px]"
                        animate={{
                            x: [0, 50, 0],
                            y: [0, 30, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute bottom-[-30%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tl from-cyan-400/30 via-emerald-300/20 to-transparent blur-[120px]"
                        animate={{
                            x: [0, -40, 0],
                            y: [0, -50, 0],
                            scale: [1, 1.15, 1],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute top-[30%] right-[20%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-bl from-teal-300/25 via-cyan-200/15 to-transparent blur-[80px]"
                        animate={{
                            x: [0, -30, 0],
                            y: [0, 40, 0],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>

                {/* Animated Grid */}
                <div className="absolute inset-0 z-0 opacity-[0.25]">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)
                            `,
                            backgroundSize: '60px 60px',
                        }}
                    />
                    {/* Gradient fade on grid */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-slate-50" />
                </div>

                {/* Floating Orbs / Particles */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                width: Math.random() * 8 + 4 + 'px',
                                height: Math.random() * 8 + 4 + 'px',
                                left: Math.random() * 100 + '%',
                                top: Math.random() * 100 + '%',
                                background: i % 2 === 0
                                    ? 'radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, rgba(16, 185, 129, 0) 70%)'
                                    : 'radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, rgba(6, 182, 212, 0) 70%)',
                                boxShadow: i % 2 === 0
                                    ? '0 0 20px rgba(16, 185, 129, 0.5)'
                                    : '0 0 20px rgba(6, 182, 212, 0.5)',
                            }}
                            animate={{
                                y: [0, -30 - Math.random() * 50, 0],
                                x: [0, Math.random() * 30 - 15, 0],
                                opacity: [0.4, 0.8, 0.4],
                            }}
                            transition={{
                                duration: 8 + Math.random() * 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.5,
                            }}
                        />
                    ))}
                </div>

                {/* Animated Accent Lines */}
                <motion.div
                    className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-emerald-500/40 to-transparent z-0"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-0 right-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent z-0"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                {/* Background Typography */}
                <motion.div
                    className="absolute top-16 left-10 md:left-16 xl:left-32 z-0 pointer-events-none"
                    animate={{ opacity: [0.04, 0.08, 0.04] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span className="text-[18vw] font-bold leading-none tracking-tighter bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent">
                        BPO
                    </span>
                </motion.div>

                {/* Section Header - Left Side - CENTERED LAYOUT */}
                <div className="absolute top-0 left-0 h-full w-full md:w-[45%] lg:w-[40%] flex items-center z-10 px-10 md:px-16 lg:px-24">
                    <div className="max-w-lg">
                        {/* Animated Badge */}
                        <motion.div
                            className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-100 to-teal-50 border border-emerald-200/80 shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                className="w-2.5 h-2.5 rounded-full bg-emerald-500"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <span className="text-emerald-700 font-semibold uppercase tracking-[0.15em] text-xs">
                                Skoal Solutions Pvt. Ltd.
                            </span>
                        </motion.div>

                        {/* Main Title */}
                        <motion.h2
                            className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-slate-900 leading-[1] mb-3"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            Skoal
                        </motion.h2>

                        {/* BPO Services Title with Underline */}
                        <div className="relative mb-10">
                            <motion.h2
                                className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium italic leading-[1.1]"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                            >
                                <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                                    BPO Services
                                </span>
                            </motion.h2>
                            {/* Animated underline */}
                            <motion.div
                                className="absolute -bottom-4 left-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full"
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: "50%", opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            />
                            <motion.div
                                className="absolute -bottom-4 left-[53%] h-1 w-2 bg-emerald-300 rounded-full"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 1 }}
                            />
                        </div>

                        {/* Description */}
                        <motion.p
                            className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Secure, scalable, and performance-driven solutions for modern digital businesses.
                        </motion.p>

                        {/* Stats Row */}
                        <motion.div
                            className="flex items-center gap-6 md:gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="text-center">
                                <motion.div
                                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    24/7
                                </motion.div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mt-1 font-medium">Support</div>
                            </div>
                            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
                            <div className="text-center">
                                <motion.div
                                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                >
                                    99.9%
                                </motion.div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mt-1 font-medium">Uptime</div>
                            </div>
                            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
                            <div className="text-center">
                                <motion.div
                                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                >
                                    50+
                                </motion.div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mt-1 font-medium">Clients</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Progress Indicator - Top Right */}
                <div className="absolute top-16 right-8 md:right-16 z-20 flex items-center gap-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest hidden md:block">Scroll to Explore</span>
                    <div className="w-32 h-1.5 bg-slate-200 rounded-full overflow-hidden border border-slate-300/50">
                        <motion.div
                            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full shadow-lg shadow-emerald-500/50"
                            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                        />
                    </div>
                </div>

                {/* Horizontal Scroll Track - Cards start from right side */}
                <div className="w-full h-full absolute top-0 left-0 flex items-center z-20">
                    <motion.div
                        style={{ x }}
                        className="flex gap-6 md:gap-8 pr-20 items-center will-change-transform"
                    >
                        {/* Large spacer to push cards to the right side */}
                        <div className="w-[45vw] md:w-[50vw] flex-shrink-0" />

                        {bpoServices.map((card) => (
                            <BPOCard card={card} key={card.id} />
                        ))}

                        {/* CTA / End Card */}
                        <motion.div
                            className="group relative h-[480px] w-[340px] md:w-[380px] overflow-hidden rounded-[2rem] flex-shrink-0 bg-gradient-to-br from-white to-slate-50 border border-emerald-200 shadow-lg shadow-slate-200/50 flex flex-col items-center justify-center text-center p-10 hover:border-emerald-400 transition-all duration-700"
                            whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.2)" }}
                        >
                            {/* Card background animation */}
                            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-cyan-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                            />

                            <motion.div
                                className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 border border-emerald-200 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500"
                                animate={{ boxShadow: ["0 0 30px rgba(16, 185, 129, 0.2)", "0 0 50px rgba(6, 182, 212, 0.3)", "0 0 30px rgba(16, 185, 129, 0.2)"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Globe size={36} className="text-emerald-600" strokeWidth={1.5} />
                            </motion.div>
                            <h3 className="relative z-10 text-3xl font-serif font-medium text-slate-900 mb-4">
                                Ready to Scale?
                            </h3>
                            <p className="relative z-10 text-slate-600 mb-8 max-w-xs mx-auto">
                                Let's discuss how our BPO solutions can transform your operations.
                            </p>
                            <motion.button
                                className="relative z-10 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-bold shadow-xl shadow-emerald-500/30 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center gap-2"
                                whileHover={{ scale: 1.05, paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                            >
                                Get Started <ArrowRight size={18} />
                            </motion.button>
                        </motion.div>

                        {/* End Spacer */}
                        <div className="w-[50vw] flex-shrink-0" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Technology-Led Payroll Control Section - Redesigned V5 (Professional Refinement)
const payrollFeatures = [
    {
        id: "hrms",
        title: "In-house HRMS Software",
        subtitle: "PROPRIETARY PLATFORM",
        desc: "We don't use 3rd party tools. We own the stack. Dedicated databases for every client ensure there is zero data pollution.",
        stats: [
            { label: "Uptime", value: "99.99%" },
            { label: "Data Isolation", value: "100%" }
        ],
        icon: Monitor,
        color: "emerald"
    },
    {
        id: "biometric",
        title: "Cloud-Based Biometric",
        subtitle: "REAL-TIME SYNC",
        desc: "Geo-fenced attendance captured via AI-driven biometric devices. Data hits our dashboard instantly.",
        stats: [
            { label: "Sync Latency", value: "< 2s" },
            { label: "Accuracy", value: "100%" }
        ],
        icon: Fingerprint,
        color: "emerald"
    },
    {
        id: "dashboards",
        title: "Real-Time Dashboards",
        subtitle: "LIVE ANALYTICS",
        desc: "View workforce costs, attendance trends, and compliance status in real-time. Make decisions faster.",
        stats: [
            { label: "Reports", value: "Unlimited" },
            { label: "Visibility", value: "360°" }
        ],
        icon: BarChart2,
        color: "emerald"
    },
    {
        id: "security",
        title: "Data Security Protocols",
        subtitle: "ENTERPRISE GRADE",
        desc: "ISO 27001 certified. Role-based access control. Encrypted at rest and in transit.",
        stats: [
            { label: "Encryption", value: "AES-256" },
            { label: "Compliance", value: "ISO 27001" }
        ],
        icon: Lock,
        color: "emerald"
    }
];

function TechPayrollSection() {
    const [activeFeature, setActiveFeature] = useState(0);
    const ref = useRef(null);

    return (
        <section ref={ref} className="bg-[#FAFAFA] relative py-20 lg:py-32">
            {/* Animated Background Elements - ENHANCED VISIBILITY */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* 1. Stronger Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.6]"
                    style={{
                        backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}
                />

                {/* 2. Secondary Moving Grid (Subtle Parallax) */}
                <motion.div
                    className="absolute inset-0 opacity-[0.1]"
                    style={{
                        backgroundImage: 'linear-gradient(0deg, transparent 24%, #e2e8f0 25%, #e2e8f0 26%, transparent 27%, transparent 74%, #e2e8f0 75%, #e2e8f0 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #e2e8f0 25%, #e2e8f0 26%, transparent 27%, transparent 74%, #e2e8f0 75%, #e2e8f0 76%, transparent 77%, transparent)',
                        backgroundSize: '50px 50px'
                    }}
                    animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* 3. Floating Orbs - Increased Opacity & Saturation */}
                <motion.div
                    className="absolute -top-[10%] -right-[5%] w-[700px] h-[700px] bg-emerald-300/30 rounded-full blur-[80px] mix-blend-multiply"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute top-[30%] -left-[10%] w-[600px] h-[600px] bg-teal-300/30 rounded-full blur-[80px] mix-blend-multiply"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-cyan-300/30 rounded-full blur-[80px] mix-blend-multiply"
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.3, 0.6, 0.3],
                        x: [0, -50, 0]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* 4. Active "Noise" Texture for Premium Feel */}
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* LEFT COLUMN - STICKY VISUAL */}
                    <div className="hidden lg:flex w-1/2 h-screen sticky top-0 items-center justify-center pointer-events-none">
                        <div className="relative w-full aspect-square max-w-[550px]">
                            {/* Outer Glow/Aura */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-[80px]"
                                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Main Card Container - Glassmorphism */}
                            <motion.div
                                className="relative w-full h-full bg-[#0A261D] backdrop-blur-2xl rounded-[3rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.4)] border border-emerald-500/30 p-8 overflow-hidden z-10"
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                {/* === 1. BORDER BEAM ANIMATION === */}
                                {/* Static Border */}
                                <div className="absolute inset-0 rounded-[3rem] border border-white/40 pointer-events-none z-20" />

                                {/* Rotating Border Gradient (The Beam) */}
                                <div className="absolute inset-0 rounded-[3rem] overflow-hidden pointer-events-none z-20">
                                    <motion.div
                                        className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#10b981_360deg)] opacity-100"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        style={{
                                            maskImage: "linear-gradient(black, black), linear-gradient(black, black)",
                                            maskClip: "content-box, border-box",
                                            maskComposite: "exclude",
                                            WebkitMaskImage: "linear-gradient(black, black), linear-gradient(black, black)",
                                            WebkitMaskClip: "content-box, border-box",
                                            WebkitMaskComposite: "xor",
                                            padding: "3px" // Thickness of the beam
                                        }}
                                    />
                                </div>

                                {/* === 2. SURFACE SHIMMER EFFECT === */}
                                {/* === 2. HOME PAGE ANIMATIONS (Blobs & Noise) === */}
                                <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-emerald-500/30 to-teal-400/30 pointer-events-none" />
                                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

                                <motion.div
                                    className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] pointer-events-none"
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                />
                                <motion.div
                                    className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none"
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                                />

                                {/* Retaining Surface Shimmer for extra premium feel */}
                                <motion.div
                                    className="absolute inset-0 z-10 pointer-events-none"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "200%" }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                                >
                                    <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                                </motion.div>

                                {/* Inner Content */}
                                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeFeature}
                                            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                                            transition={{ duration: 0.5, ease: "circOut" }}
                                            className="text-center w-full flex flex-col items-center"
                                        >
                                            {/* Icon Box - Premium 3D Look & Active Animations */}
                                            <div className="relative mb-12 group">
                                                {/* 1. Radar Pulse Rings */}
                                                <motion.div
                                                    className="absolute inset-0 -m-8 border border-emerald-500/30 rounded-full"
                                                    animate={{ scale: [0.8, 1.4], opacity: [0.5, 0], borderWidth: ["2px", "0px"] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                                />
                                                <motion.div
                                                    className="absolute inset-0 -m-8 border border-emerald-400/20 rounded-full"
                                                    animate={{ scale: [0.8, 1.4], opacity: [0.5, 0], borderWidth: ["2px", "0px"] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                                                />

                                                {/* 2. Outer Glow Blob */}
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 4, repeat: Infinity }}
                                                />

                                                {/* 3. Orbiting Satellite */}
                                                <motion.div
                                                    className="absolute inset-0 -m-4 pointer-events-none"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                                >
                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_#fff]" />
                                                </motion.div>

                                                {/* Main Icon Container */}
                                                <div className="relative w-48 h-48 rounded-[2.5rem] bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-[0_20px_50px_-10px_rgba(16,185,129,0.4)] border border-white/20 z-10">
                                                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-[2.5rem]" />
                                                    <div className="text-white drop-shadow-md relative z-10">
                                                        {activeFeature === 0 && <Monitor size={80} strokeWidth={1.5} />}
                                                        {activeFeature === 1 && <Fingerprint size={80} strokeWidth={1.5} />}
                                                        {activeFeature === 2 && <BarChart2 size={80} strokeWidth={1.5} />}
                                                        {activeFeature === 3 && <Lock size={80} strokeWidth={1.5} />}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Stats Row - Floating Cards */}
                                            <div className="flex justify-center gap-6 w-full px-4">
                                                {payrollFeatures[activeFeature].stats.map((stat, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        className="flex-1 bg-white/10 backdrop-blur-md px-6 py-5 rounded-3xl border border-white/10 shadow-xl shadow-black/20 text-left relative overflow-hidden group"
                                                        initial={{ opacity: 0, y: 30 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.1 + idx * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                                                        whileHover={{ y: -5, transition: { duration: 0.2 }, backgroundColor: "rgba(255,255,255,0.15)" }}
                                                    >
                                                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500" />

                                                        {/* Animated Pulse Bar */}
                                                        <div className="absolute bottom-0 left-0 h-1 bg-emerald-500/30 w-full overflow-hidden">
                                                            <motion.div
                                                                className="h-full bg-emerald-400/80 w-1/3 rounded-r-full"
                                                                animate={{ x: ["-100%", "300%"] }}
                                                                transition={{ duration: 2 + idx, repeat: Infinity, ease: "linear" }}
                                                            />
                                                        </div>

                                                        <motion.div
                                                            className="text-3xl font-bold text-white mb-2 relative z-10"
                                                            initial={{ scale: 0.5, opacity: 0 }}
                                                            animate={{ scale: 1, opacity: 1 }}
                                                            transition={{ delay: 0.3 + idx * 0.1, type: "spring" }}
                                                        >
                                                            {stat.value}
                                                        </motion.div>
                                                        <div className="text-[11px] font-bold text-emerald-400/80 uppercase tracking-widest relative z-10">
                                                            {stat.label}
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - SCROLL CONTENT */}
                    <div className="w-full lg:w-1/2">
                        {/* Section Header */}
                        <div className="min-h-[40vh] flex flex-col justify-end mb-20 pt-20">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="inline-block py-2 px-4 rounded-xl bg-emerald-50 text-emerald-600 font-bold tracking-widest text-xs uppercase mb-6">
                                    Technology Infrastructure
                                </span>
                                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                                    Technology-Led <br />
                                    <span className="text-[#00C885]">Payroll Control</span>
                                </h2>
                                <p className="text-lg text-slate-500 leading-relaxed font-light max-w-lg">
                                    Eliminate leakages and improve accountability with our proprietary, integrated tech stack.
                                </p>
                            </motion.div>
                        </div>

                        {/* Scrolling Feature Items */}
                        <div className="flex flex-col gap-32">
                            {payrollFeatures.map((feature, index) => (
                                <motion.div
                                    key={feature.id}
                                    className="min-h-[50vh] flex items-center perspective-1000"
                                    onViewportEnter={() => setActiveFeature(index)}
                                    viewport={{ margin: "-50% 0px -50% 0px" }}
                                >
                                    <motion.div
                                        className={`
                                            group w-full p-12 rounded-[3rem] transition-all duration-700 relative overflow-hidden backdrop-blur-xl border
                                            ${activeFeature === index
                                                ? 'bg-[#0A261D] border-emerald-500/30 shadow-[0_40px_100px_-30px_rgba(16,185,129,0.2)] opacity-100 scale-100'
                                                : 'bg-white/40 border-white/20 shadow-none opacity-40 grayscale scale-95'}
                                        `}
                                        animate={activeFeature === index ? { x: 0 } : { x: 40 }}
                                        whileHover={activeFeature === index ? { y: -5, transition: { duration: 0.2 } } : {}}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    >
                                        {/* Active Gradient Border Overlay & Blobs */}
                                        {activeFeature === index && (
                                            <>
                                                <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-emerald-500/30 to-teal-400/30" />
                                                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

                                                {/* Floating Blobs (Home Page Style) */}
                                                <motion.div
                                                    className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]"
                                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                                    transition={{ duration: 4, repeat: Infinity }}
                                                />
                                                <motion.div
                                                    className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px]"
                                                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                                                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                                                />

                                                <div className="absolute inset-0 rounded-[3rem] p-0.5 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-50 [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"
                                                    style={{ maskComposite: 'exclude', WebkitMaskComposite: 'xor' }}
                                                />
                                            </>
                                        )}

                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-8">
                                                <div className={`
                                                    w-14 h-14 rounded-2xl flex items-center justify-center font-bold font-mono text-xl transition-colors duration-500
                                                    ${activeFeature === index ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-slate-100 text-slate-400'}
                                                `}>
                                                    0{index + 1}
                                                </div>
                                                <div className={`
                                                    text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-colors duration-500
                                                    ${activeFeature === index ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-50 text-slate-400'}
                                                `}>
                                                    {feature.subtitle}
                                                </div>
                                            </div>

                                            <h3 className={`
                                                text-3xl md:text-4xl font-bold mb-6 transition-colors duration-500
                                                ${activeFeature === index ? 'text-white' : 'text-slate-400'}
                                            `}>
                                                {feature.title}
                                            </h3>

                                            <p className={`
                                                text-lg leading-relaxed transition-colors duration-500
                                                ${activeFeature === index ? 'text-slate-300' : 'text-slate-400'}
                                            `}>
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom Spacer */}
                        <div className="h-[20vh]" />
                    </div>

                </div>
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
                            className="group relative bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-900/15 transition-all duration-500 border border-slate-100 overflow-hidden"
                        >
                            {/* === PREMIUM ANIMATED BACKGROUND === */}

                            {/* 1. Noise Texture Overlay (Subtle Grain) */}
                            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />

                            {/* 2. Animated Blurred Blobs */}
                            <motion.div
                                className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-100/60 rounded-full blur-[60px]"
                                animate={{ scale: [1, 1.3, 1], x: [0, 10, 0], y: [0, 15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                            />
                            <motion.div
                                className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-100/40 rounded-full blur-[60px]"
                                animate={{ scale: [1, 1.2, 1], x: [0, -10, 0], y: [0, -10, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                            />

                            {/* 3. Shimmer Line (Like Homepage Buttons) */}
                            <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
                                <motion.div
                                    className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                                    animate={{ x: ['-200%', '200%'] }}
                                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                                />
                            </div>

                            {/* 4. Active Status Indicator (Top Right) */}
                            <div className="absolute top-6 right-6 flex items-center gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest">Active</span>
                            </div>

                            <div className="flex-1 relative z-10">
                                {/* Icon Container with Float */}
                                <motion.div
                                    className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-sm flex items-center justify-center mb-8"
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                                >
                                    <div className="text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                                        {cap.icon}
                                    </div>
                                </motion.div>

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
        <main ref={containerRef} className="bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">

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
            <section className="relative z-10 py-32 bg-white overflow-hidden">
                {/* === Ambient Light Background === */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{
                            x: [0, 50, 0],
                            y: [0, -30, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-emerald-50/60 via-teal-50/20 to-transparent rounded-full blur-[100px] opacity-70"
                    />
                    <motion.div
                        animate={{
                            x: [0, -50, 0],
                            y: [0, 50, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-50/40 via-emerald-50/20 to-transparent rounded-full blur-[80px] opacity-70"
                    />
                </div>

                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20 max-w-3xl mx-auto"
                    >
                        <div className="inline-block mb-4">
                            <span className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-emerald-700 text-xs font-bold uppercase tracking-widest shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                Core Services
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                            Precision Payrolling
                            <span className="block mt-2 font-serif italic font-normal text-emerald-800">
                                Global Standards
                            </span>
                        </h2>

                        <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
                            Seamlessly managing workforce compliance across <span className="font-semibold text-slate-800">India & Middle East</span> with 99.9% accuracy.
                        </p>
                    </motion.div>

                    {/* The Grid Container - Moved to 4-column layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {servicesList.map((service, index) => (
                            <AIServiceCard key={index} service={service} index={index} />
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

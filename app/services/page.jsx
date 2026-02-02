"use client";
import Link from "next/link";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue, useMotionTemplate, AnimatePresence, useMotionValueEvent } from "framer-motion";
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
import TechPayrollSection from "./TechPayrollSection";
import RecruitmentSection from "./RecruitmentSection";
import AIContactCentreSection from "./AIContactCentreSection";
import Footer from "../components/Footer";
import PrecisionStepper from "./PrecisionStepper";
import CredibilitySection from "./CredibilitySection";

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
                    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />
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
            <div className="relative bg-[#0A261D] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 overflow-hidden">

                {/* === ANIMATED BACKGROUNDS === */}

                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.svg')] mix-blend-overlay pointer-events-none" />

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
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                                    Skoal <span className="font-serif italic text-emerald-400">HRMS</span>
                                </h2>
                            </div>
                        </div>

                        {/* Right: CTA Button */}
                        <Link href="/book-demo">
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
                        </Link>
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

// Premium Stats Section - "The Metric Wall" (Editorial Typography)
function StatsSection() {
    const containerRef = useRef(null);

    const stats = [
        { value: 180, suffix: "+", label: "Countries", sub: "Global Presence" },
        { value: 11, suffix: "M+", label: "Employees", sub: "Payslips Managed" },
        { value: 20, suffix: "B+", label: "Processed", sub: "Dollars Annually" },
        { value: 99.99, suffix: "%", label: "Uptime", sub: "Guaranteed SLA" },
    ];

    return (
        <section ref={containerRef} className="relative bg-white py-32 md:py-48 overflow-hidden">

            {/* Subtle Background Accent */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-slate-50 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-50/30 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto max-w-7xl px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 md:mb-32"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-px bg-emerald-500" />
                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em]">By The Numbers</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 tracking-tight max-w-3xl leading-[1.1]">
                        Global Scale,<br />
                        <span className="font-serif italic text-emerald-700">Local Precision.</span>
                    </h2>
                </motion.div>

                {/* The Metric Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-slate-200">
                    {stats.map((stat, i) => (
                        <MetricCard key={i} stat={stat} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
}

// Individual Metric Card with Count Animation
function MetricCard({ stat, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setDisplayValue(end);
                    clearInterval(timer);
                } else {
                    setDisplayValue(Number.isInteger(end) ? Math.floor(start) : parseFloat(start.toFixed(2)));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, stat.value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative border-b border-r border-slate-200 p-6 md:p-8 lg:p-10 xl:p-16 hover:bg-slate-50/50 transition-colors duration-500"
        >
            {/* Hover Accent Line */}
            <div className="absolute top-0 left-0 w-0 h-1 bg-emerald-500 group-hover:w-full transition-all duration-500" />

            {/* Number */}
            <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-slate-900 tracking-tighter font-serif">
                    {displayValue.toLocaleString()}
                </span>
                <span className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-serif italic text-emerald-600">{stat.suffix}</span>
            </div>

            {/* Label */}
            <div className="text-lg md:text-xl font-bold text-slate-900 uppercase tracking-widest mb-1">
                {stat.label}
            </div>
            <div className="text-sm text-slate-500">
                {stat.sub}
            </div>

            {/* Background Index Number */}
            <div className="absolute top-6 right-6 text-[120px] md:text-[180px] font-bold text-slate-100 leading-none pointer-events-none select-none -z-10 group-hover:text-slate-200/50 transition-colors duration-500">
                0{index + 1}
            </div>
        </motion.div>
    );
}


// Sub-component for individual Bento Cards with varied styles
function BentoCard({ item, index }) {
    const isHero = item.type.includes('hero');
    const [hovered, setHovered] = useState(false);

    // Tilt Effect State
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [5, -5]);
    const rotateY = useTransform(x, [-100, 100], [-5, 5]);

    function handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
    }

    return (
        <motion.div
            className={`group relative rounded-[2.5rem] ${item.span} min-h-[240px] md:min-h-[280px]`}
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
                setHovered(false);
                x.set(0); // Reset for clean exit if needed, though often better to leave it
                y.set(0);
            }}
            style={{
                perspective: 1000,
                transformStyle: "preserve-3d"
            }}
        >
            <motion.div
                className="w-full h-full relative"
                style={{
                    rotateX: isHero ? rotateX : 0,
                    rotateY: isHero ? rotateY : 0,
                    transformStyle: "preserve-3d",
                    transition: "all 0.1s ease"
                }}
            >
                {/* 1. Base Layer (Background) - Themed Dark Emerald */}
                <div
                    className="absolute inset-0 rounded-[2.5rem] bg-[#0F2F24]/80 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden"
                    style={{ transform: "translateZ(0px)" }}
                >
                    {/* === ALWAYS-ON ANIMATIONS === */}

                    {/* A. Border Beam (Rotating Edge) */}
                    <div className="absolute inset-0 -m-[1px] rounded-[2.5rem] overflow-hidden pointer-events-none z-20">
                        {/* Mask to keep center clear */}
                        <div className="absolute inset-[1px] bg-[#0F2F24]/0 rounded-[2.5rem] z-10" />
                        <motion.div
                            className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#10b981_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            style={{ filter: 'blur(2px)' }}
                        />
                    </div>

                    {/* B. Mouse Tracking Spotlight (Interactive) */}
                    <motion.div
                        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                            background: useMotionTemplate`radial-gradient(500px circle at ${x}px ${y}px, rgba(16, 185, 129, 0.15), transparent 80%)`
                        }}
                    />

                    {/* C. Roaming Spotlight (Ambient Energy) - Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-radial-gradient from-emerald-500/20 to-transparent blur-2xl opacity-20 z-0 pointer-events-none"
                        animate={{
                            x: ["-30%", "30%", "-30%"],
                            y: ["-30%", "30%", "-30%"],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Dynamic Background Gradient (On Hover) */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-gradient-to-br ${item.gradient} z-0 mix-blend-soft-light`} />

                    {/* Giant Number Background (Parallax Deep) */}
                    <div
                        className="absolute -right-8 -bottom-10 text-[160px] leading-none font-bold text-white/[0.02] select-none pointer-events-none font-serif z-0 group-hover:text-white/[0.05] transition-colors duration-500"
                        style={{ transform: "translateZ(20px)" }}
                    >
                        {item.value.replace(/[^0-9]/g, '').substring(0, 2)}
                    </div>
                </div>

                {/* 2. Content Layer (Floating) */}
                <div
                    className="relative z-20 w-full h-full p-8 flex flex-col justify-between"
                    style={{ transform: "translateZ(40px)" }}
                >
                    {/* Header: Icon + Gradient Blob */}
                    <div className="flex justify-between items-start">
                        {/* Floating Icon Animation */}
                        <motion.div
                            className={`p-3.5 rounded-2xl bg-white/5 border border-white/10 text-emerald-400 shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-400 transition-all duration-500`}
                            animate={{ y: [-2, 2, -2] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                        >
                            {item.icon}
                        </motion.div>
                        {isHero && (
                            <ArrowUpRight className="text-white/20 group-hover:text-white/60 transition-colors" size={28} />
                        )}
                    </div>

                    {/* Content */}
                    <div>
                        <motion.div
                            className={`font-bold tracking-tighter text-white mb-2 ${isHero ? 'text-5xl md:text-6xl lg:text-7xl' : 'text-4xl md:text-5xl'}`}
                            initial={{ opacity: 0.9 }}
                            whileHover={{ scale: 1.02, originX: 0 }}
                            style={{ textShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                        >
                            <Counter value={item.value} />
                        </motion.div>
                        <div className={`font-medium uppercase tracking-widest text-emerald-400 mb-1 ${isHero ? 'text-sm' : 'text-xs'}`}>
                            {item.label}
                        </div>
                        <div className="text-emerald-100/50 text-sm leading-snug max-w-[90%] font-light">
                            {item.subtext}
                        </div>
                    </div>
                </div>

                {/* 3. Shine/Reflection Layer (Top Interaction) */}
                <div className="absolute inset-0 pointer-events-none rounded-[2.5rem] overflow-hidden z-30" style={{ transform: "translateZ(60px)" }}>
                    {/* Angled Shine with Framer Motion */}
                    <AnimatePresence>
                        {hovered && (
                            <motion.div
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: "200%", opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                            />
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.div>
    );
}

// BPO Services Section - "The Emerald Flood"
function BPOSection() {
    const bpoServices = [
        {
            id: "support",
            title: "Customer Engagement",
            description: "From voice to chat, we manage every touchpoint to boost retention and satisfaction.",
            stat: "24/7",
            label: "Availability",
            icon: <Headset size={32} className="stroke-[1.5]" />
        },
        {
            id: "growth",
            title: "Revenue Growth",
            description: "Turn abandoned carts into conversions with strategic outbound campaigns.",
            stat: "3x",
            label: "ROI Boost",
            icon: <TrendingUp size={32} className="stroke-[1.5]" />
        },
        {
            id: "quality",
            title: "Quality Assurance",
            description: "Real-time scoring of every interaction to ensure compliance and quality.",
            stat: "99.9%",
            label: "Accuracy",
            icon: <ShieldCheck size={32} className="stroke-[1.5]" />
        },
        {
            id: "analytics",
            title: "Data Intelligence",
            description: "Transform raw interaction data into actionable business strategies.",
            stat: "500+",
            label: "Metrics",
            icon: <BarChart3 size={32} className="stroke-[1.5]" />
        }
    ];

    return (
        <section className="relative py-20 md:py-24 lg:py-28 xl:py-32 bg-slate-50 overflow-hidden">
            {/* === CLEAN BACKGROUND (No Grid) === */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Subtle Ambient Orbs */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-50/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-widest uppercase mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                            Global Operations
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 tracking-tight leading-[1]">
                            The Outsourcing <br />
                            <span className="font-serif italic text-emerald-600">Standard.</span>
                        </h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 max-w-md font-medium leading-relaxed"
                    >
                        Refracting complex operational demands into clear, high-performance outcomes.
                    </motion.p>
                </div>

                {/* THE CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {bpoServices.map((service, index) => (
                        <FloodCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Sub-component: The "Flood" Card
function FloodCard({ service, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative h-[340px] md:h-[360px] lg:h-[380px] xl:h-[420px] rounded-[2.5rem] bg-white border border-slate-100 hover:border-emerald-500/0 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-900/20 overflow-hidden transition-all duration-500 flex flex-col justify-between p-5 md:p-6 lg:p-5 xl:p-10"
        >
            {/* === FLOOD FILL LAYER === */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col h-full">

                {/* Header: Icon */}
                <div className="flex justify-between items-start">
                    <div className="w-12 h-12 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white/10 group-hover:border-white/20 flex items-center justify-center text-slate-900 group-hover:text-white transition-all duration-500">
                        {service.icon}
                    </div>
                </div>

                {/* Body: Text */}
                <div className="mt-auto space-y-4">
                    <h3 className="text-lg md:text-xl lg:text-lg xl:text-2xl font-bold text-slate-900 group-hover:text-white transition-colors duration-300">
                        {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed group-hover:text-emerald-50/90 transition-colors duration-300">
                        {service.description}
                    </p>
                </div>

                {/* Footer: Stat */}
                <div className="mt-8 pt-6 border-t border-slate-100 group-hover:border-white/20 transition-colors duration-500 flex items-center justify-between">
                    <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-emerald-200 transition-colors">{service.label}</div>
                        <div className="text-2xl lg:text-2xl xl:text-3xl font-serif italic font-bold text-slate-900 group-hover:text-white transition-colors">{service.stat}</div>
                    </div>
                    {/* Arrow */}
                    <div className="w-8 h-8 rounded-full border border-slate-200 group-hover:border-white/30 flex items-center justify-center text-slate-400 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-all duration-500">
                        <ArrowRight size={14} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}







// Premium Crystal Card Component
function CrystalCard({ service, index }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 50 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative h-[420px] rounded-[2.5rem] bg-white/[0.6] backdrop-blur-xl border border-white/40 overflow-hidden perspective-[1000px]"
            style={{
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.05)"
            }}
        >
            {/* 1. Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${x}px ${y}px,
                            rgba(16, 185, 129, 0.15),
                            transparent 40%
                        )
                    `
                }}
            />

            {/* 2. Glass Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/40 opacity-50" />

            {/* 3. Interior Grid Pattern (Revealed on Hover) */}
            <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500 bg-[size:20px_20px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]" />

            {/* Content Container */}
            <div className="relative z-20 h-full p-8 flex flex-col justify-between">
                <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-8">
                        {/* 3D Floating Icon */}
                        <motion.div
                            animate={{
                                y: isHovered ? -10 : 0,
                                rotateY: isHovered ? 180 : 0,
                                scale: isHovered ? 1.1 : 1
                            }}
                            transition={{ duration: 0.5 }}
                            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-emerald-50 border border-white shadow-lg flex items-center justify-center text-emerald-600"
                        >
                            {service.icon}
                        </motion.div>

                        <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${isHovered ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                            {service.statLabel}
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-900 transition-colors">
                        {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                        {service.desc}
                    </p>
                </div>

                {/* Footer Stat */}
                <div className="relative">
                    <div className="h-px w-full bg-slate-200 mb-6 group-hover:bg-emerald-200 transition-colors" />

                    <div className="flex items-end justify-between">
                        <div>
                            <div className="text-4xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors duration-300">
                                {service.stat}
                            </div>
                        </div>

                        <motion.div
                            animate={{ x: isHovered ? 5 : 0 }}
                            className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 group-hover:border-emerald-200 transition-colors"
                        >
                            <ArrowRight size={18} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
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
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 lg:px-12 overflow-hidden bg-slate-50">

                {/* 1. ANIMATED ORBS BACKGROUND (From About Page) */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 opacity-[0.3]"
                        style={{
                            backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                            backgroundSize: '32px 32px'
                        }}
                    />
                    {/* Animated Gradient Meshes */}
                    <motion.div
                        animate={{
                            opacity: [0.4, 0.6, 0.4],
                            scale: [1, 1.1, 1],
                            rotate: [0, 45, 0]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-emerald-100/60 rounded-full blur-[120px] mix-blend-multiply"
                    />
                    <motion.div
                        animate={{
                            opacity: [0.3, 0.5, 0.3],
                            scale: [1, 1.2, 1],
                            x: [0, -50, 0]
                        }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-50/60 rounded-full blur-[100px] mix-blend-multiply"
                    />
                </div>

                <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">

                    {/* LEFT: TEXT CONTENT */}
                    <div className="max-w-2xl relative pr-6 md:pr-0">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            <span className="text-slate-600 text-xs font-bold tracking-widest uppercase">Global People Ops</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[1] mb-8 text-slate-900">
                            <span className="block">Skoal HR &</span>
                            <span className="block font-[family-name:var(--font-playfair)] italic text-emerald-700">
                                Payrolling.
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-lg md:text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-lg mb-10 font-medium"
                        >
                            We manage your employee lifecycle with a focus on compliance, transparency, and precision.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col md:flex-row items-start md:items-center gap-4"
                        >
                            <button className="group relative px-8 py-4 bg-slate-900 text-white rounded-full overflow-hidden transition-all hover:shadow-xl hover:shadow-slate-900/20 hover:-translate-y-1 cursor-pointer">
                                <span className="relative z-10 flex items-center gap-2 font-semibold text-lg">
                                    Explore Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                {/* Button Shine Effect */}
                                <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                            </button>

                            <button className="px-8 py-4 rounded-full border border-slate-200 text-slate-600 font-semibold hover:bg-white hover:text-emerald-700 hover:border-emerald-200 transition-colors cursor-pointer">
                                Learn More
                            </button>
                        </motion.div>
                    </div>

                    {/* RIGHT: REFINED CARD DECK "THE FAN" */}
                    <div className="relative h-[450px] md:h-[500px] lg:h-[600px] flex items-center justify-center perspective-[2000px]">

                        {/* Container Scope for Hover Effect */}
                        <motion.div
                            className="relative w-[280px] h-[420px] md:w-[340px] md:h-[480px] lg:w-[380px] lg:h-[520px] cursor-pointer"
                            whileHover="hover"
                            initial="initial"
                            animate="animate"
                        >

                            {/* Card 3: Back (Compliance) - Deep Emerald Glass */}
                            <motion.div
                                variants={{
                                    initial: { rotateZ: 5, y: 20, x: 20, scale: 0.9 },
                                    animate: { rotateZ: 12, y: 0, x: 60, scale: 0.9, transition: { duration: 1.5, ease: "easeOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 } }, // Gentle breathing
                                    hover: { rotateZ: 25, x: 140, y: -20, scale: 0.95, transition: { duration: 0.4, ease: "backOut" } }
                                }}
                                className="absolute inset-0 bg-emerald-900/90 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-6 md:p-8 border border-white/10 z-10 flex flex-col justify-between"
                            >
                                <div className="flex justify-between items-start opacity-60">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/20" />
                                    <div className="w-8 h-2 rounded-full bg-white/20" />
                                </div>
                                <div className="h-20 md:h-24 w-full bg-emerald-800/50 rounded-2xl" />
                                <div className="space-y-3 opacity-40">
                                    <div className="h-3 w-3/4 bg-white/20 rounded-full" />
                                    <div className="h-3 w-1/2 bg-white/20 rounded-full" />
                                </div>
                            </motion.div>

                            {/* Card 2: Middle (HRMS) - Frosted White Glass */}
                            <motion.div
                                variants={{
                                    initial: { rotateZ: -5, y: 20, x: -20, scale: 0.95 },
                                    animate: { rotateZ: -8, y: 10, x: -40, scale: 0.95, transition: { duration: 1.8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" } },
                                    hover: { rotateZ: -15, x: -120, y: -10, scale: 0.95, transition: { duration: 0.4, ease: "backOut" } }
                                }}
                                className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-6 md:p-8 border border-white/60 z-20 flex flex-col justify-between"
                            >
                                <div className="flex justify-between items-start">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-slate-200" />
                                    <div className="w-12 md:w-16 h-5 md:h-6 rounded-full bg-emerald-100" />
                                </div>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="h-14 md:h-16 w-1/2 bg-slate-100 rounded-2xl" />
                                        <div className="h-14 md:h-16 w-1/2 bg-slate-100 rounded-2xl" />
                                    </div>
                                    <div className="h-14 md:h-16 w-full bg-slate-100 rounded-2xl" />
                                </div>
                            </motion.div>

                            {/* Card 1: Front (Main Metric) - Premium Opaque White */}
                            <motion.div
                                variants={{
                                    initial: { y: 0, rotateZ: 0 },
                                    animate: { y: [0, -10, 0], transition: { duration: 4, ease: "easeInOut", repeat: Infinity } },
                                    hover: { y: -20, scale: 1.02, transition: { duration: 0.3 } }
                                }}
                                className="absolute inset-0 bg-white rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] p-6 md:p-8 border border-slate-100 z-30 flex flex-col justify-between overflow-hidden"
                            >
                                {/* Decorative BG Gradient */}
                                <div className="absolute top-0 right-0 w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-emerald-50/50 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                                {/* Header */}
                                <div className="flex items-center justify-between relative z-10">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
                                        <Activity size={24} className="md:w-[28px] md:h-[28px]" />
                                    </div>
                                    <div className="px-3 py-1.5 rounded-full bg-emerald-100/50 border border-emerald-200 text-emerald-700 text-[9px] md:text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                                        </span>
                                        Live Pulse
                                    </div>
                                </div>

                                {/* Main Metric */}
                                <div className="space-y-6 md:space-y-8 relative z-10 mt-6 md:mt-8">
                                    <div>
                                        <div className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2">System Health</div>
                                        <div className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] font-medium text-slate-900">Optimal</div>
                                    </div>

                                    {/* Progress Bar Item */}
                                    <div className="p-4 md:p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                                        <div className="flex items-center justify-between text-xs md:text-sm font-medium">
                                            <span className="text-slate-500">Payroll Accuracy</span>
                                            <span className="text-emerald-700">100%</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                                                className="h-full bg-emerald-500 rounded-full"
                                            />
                                        </div>
                                    </div>

                                    {/* Mini Stats Grid */}
                                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                                        <div className="bg-[#022c22] text-white p-3 md:p-4 rounded-2xl shadow-lg relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <PieChart size={18} className="mb-2 opacity-80 md:w-[20px] md:h-[20px]" />
                                            <div className="text-xl md:text-2xl font-bold">Zero</div>
                                            <div className="text-[9px] md:text-[10px] opacity-60 uppercase tracking-wider">Risk</div>
                                        </div>
                                        <div className="bg-white border border-slate-100 text-slate-900 p-3 md:p-4 rounded-2xl shadow-sm">
                                            <Layers size={18} className="mb-2 text-emerald-600 md:w-[20px] md:h-[20px]" />
                                            <div className="text-xl md:text-2xl font-bold">50+</div>
                                            <div className="text-[9px] md:text-[10px] text-slate-400 uppercase tracking-wider">Modules</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>

                </div>
            </section>

            {/* --- WHAT WE DO SECTION (Replaced with Stepper) --- */}
            <PrecisionStepper />

            {/* --- STATS SECTION --- */}
            <StatsSection />

            {/* --- BPO SERVICES SECTION --- */}
            <BPOSection />

            {/* --- BPO CREDIBILITY STATS --- */}
            <CredibilitySection type="bpo" />

            {/* --- TECHNOLOGY-LED PAYROLL CONTROL --- */}
            <TechPayrollSection />

            {/* --- PAYROLL CREDIBILITY STATS --- */}
            <CredibilitySection type="payroll" />

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

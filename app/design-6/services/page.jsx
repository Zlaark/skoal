"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import {
    Calculator,
    ShieldCheck,
    Users,
    FileText,
    Database,
    ArrowRight,
    Activity,
    CheckCircle2,
    TrendingUp,
    Globe,
    ArrowUpRight,
    Play
} from "lucide-react";
import Footer from "../components/Footer";

// --- Advanced Animation Variants ---
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const letterAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 20 }
    }
};

// --- Components ---

function AnimatedTitle({ text, className }) {
    const words = text.split(" ");
    return (
        <motion.span
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className={`inline-block ${className}`}
        >
            {words.map((word, i) => (
                <span key={i} className="inline-block whitespace-nowrap mr-[0.2em] overflow-hidden">
                    <motion.span variants={letterAnimation} className="inline-block">
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.span>
    );
}

// Exact Replica of Home Page "PrecisionCard" with Enhanced Hover
function PrecisionCard({ service, index }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            variants={fadeInUp}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/50 transition-all duration-500 h-full flex flex-col justify-between group overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-200`}
        >
            {/* Dynamic Gradient Background on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

            {/* Active Indicator Pulse */}
            <div className="absolute top-6 right-6 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${isHovered ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`} />
                <span className="text-[10px] font-mono font-bold text-slate-400 tracking-widest">
                    {isHovered ? 'ACTIVE' : 'IDLE'}
                </span>
            </div>

            {/* Header */}
            <div className="relative z-10 mb-10">
                <div className={`w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-200 group-hover:scale-110`}>
                    <div className="text-slate-600 group-hover:text-white transition-colors">
                        {service.icon}
                    </div>
                </div>
                <h3 className="text-2xl font-serif font-medium text-slate-900 mb-2 group-hover:text-black transition-colors">
                    {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[90%] group-hover:text-slate-600 transition-colors">
                    {service.desc}
                </p>
            </div>

            {/* Footer / HUGE STAT */}
            <div className="relative z-10 mt-auto pt-6 border-t border-slate-100 group-hover:border-slate-200 transition-colors">
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-1">
                    {service.statLabel}
                </div>
                <div className="flex items-baseline justify-between overflow-hidden">
                    <motion.div
                        key={isHovered ? "hover" : "idle"}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`text-4xl lg:text-5xl font-mono font-light tracking-tighter text-slate-900 group-hover:text-emerald-900`}
                    >
                        {service.stat}
                    </motion.div>
                    <ArrowUpRight className={`opacity-0 group-hover:opacity-100 transition-all duration-500 text-emerald-500 transform translate-y-4 group-hover:translate-y-0`} size={24} />
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
        <main ref={containerRef} className="bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 overflow-hidden">

            {/* --- GLOBAL ANIMATED BACKGROUNDS --- */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 opacity-[0.4]"
                    style={{
                        backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                        backgroundSize: '32px 32px'
                    }}
                />
                <motion.div
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] right-[-10%] w-[1200px] h-[1200px] bg-gradient-to-br from-emerald-100/40 to-teal-50/30 rounded-full blur-[150px]"
                />
            </div>

            {/* --- HERO SECTION --- */}
            <section className="relative z-10 pt-32 pb-20 px-6 lg:px-12 min-h-[90vh] flex items-center">
                <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: Text Content */}
                    <div className="max-w-2xl relative">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-emerald-100 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] mb-8 group hover:border-emerald-300 transition-colors"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-700 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#06402B]"></span>
                            </span>
                            <span className="text-slate-600 text-xs font-bold tracking-widest uppercase group-hover:text-emerald-800 transition-colors">Core Offering</span>
                        </motion.div>

                        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[1.1] mb-8 text-slate-900">
                            <span className="block mb-2">
                                <AnimatedTitle text="Skoal HR &" />
                            </span>

                            <motion.span
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#022c22] via-[#059669] to-[#022c22] animate-gradient-x bg-[length:200%_auto]"
                            >
                                Payrolling Services
                            </motion.span>
                        </h1>

                        <motion.p
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.6 }}
                            className="text-xl text-slate-500 leading-relaxed max-w-lg mb-10 font-medium"
                        >
                            Skoal HR & Payrolling Services is our core offering, designed to manage the entire employee lifecycle with precision, compliance, and transparency.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.8 }}
                            className="flex items-center gap-6"
                        >
                            <button className="bg-[#0A261D] text-white rounded-full px-8 py-4 font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-900/30 hover:-translate-y-1 transition-all shadow-xl shadow-slate-900/20 flex items-center gap-2 group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                Learn More <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-emerald-${i * 100 + 400} flex items-center justify-center text-[10px] font-bold text-white shadow-sm`}>
                                            <Users size={14} />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm font-medium text-slate-600">
                                    <span className="font-bold text-slate-900">5000+</span> Managed
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT: High-End Glass UI with CONTINUOUS LEVITATION */}
                    <div className="relative hidden lg:flex h-[600px] items-center justify-center perspective-[2000px]">
                        <motion.div
                            className="relative w-full max-w-[550px]"
                            initial={{ opacity: 0, rotateY: -10, rotateX: 5, scale: 0.9 }}
                            animate={{
                                opacity: 1,
                                rotateY: [-5, 5, -5],
                                rotateX: [5, -5, 5],
                                y: [-15, 15, -15],
                                scale: 1
                            }}
                            transition={{
                                opacity: { duration: 1.5 },
                                scale: { duration: 1.5 },
                                rotateY: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                                rotateX: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                            }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Glass Card */}
                            <div className="relative bg-[#0A261D] backdrop-blur-2xl border border-emerald-500/10 rounded-[2.5rem] p-8 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden">
                                {/* Animated Noise */}
                                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay animate-pulse"></div>

                                <div className="flex items-center justify-between mb-8 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                            <Activity className="text-emerald-400" size={24} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">Payroll Health</div>
                                            <div className="text-xs text-emerald-400/60">System Active</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Animated Graph Bars */}
                                <div className="h-48 flex items-end justify-between gap-2 mb-8 relative z-10 px-2">
                                    {[30, 45, 60, 40, 70, 85, 65, 95, 80].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{
                                                height: [`${h}%`, `${h - 10}%`, `${h}%`]
                                            }}
                                            transition={{
                                                height: { duration: 2 + Math.random(), repeat: Infinity, ease: "easeInOut" },
                                                delay: i * 0.1
                                            }}
                                            className={`flex-1 rounded-t-lg ${i > 5 ? 'bg-gradient-to-t from-emerald-600 to-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.3)]' : 'bg-white/10'}`}
                                        />
                                    ))}
                                </div>

                                {/* Stats Row */}
                                <div className="grid grid-cols-2 gap-4 relative z-10">
                                    <div className="bg-white/5 border border-white/5 p-4 rounded-2xl backdrop-blur-sm">
                                        <div className="text-emerald-200/40 text-xs font-bold uppercase tracking-wider mb-1">Accuracy</div>
                                        <div className="text-2xl font-bold text-white">100%</div>
                                    </div>
                                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl relative overflow-hidden">
                                        <motion.div
                                            animate={{ x: ["-100%", "100%"] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent"
                                        />
                                        <div className="text-emerald-400/60 text-xs font-bold uppercase tracking-wider mb-1 relative z-10">Compliance</div>
                                        <div className="text-2xl font-bold text-emerald-400 relative z-10">Verified</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements (Independent Motion) */}
                            <motion.div
                                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -right-8 top-12 bg-white text-slate-900 p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
                                style={{ transform: "translateZ(40px)" }}
                            >
                                <CheckCircle2 className="text-emerald-500" size={24} />
                                <div className="font-bold text-sm">Audit Ready</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 25, 0], rotate: [0, -5, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -left-8 bottom-20 bg-[#06402B] text-white p-4 rounded-2xl shadow-xl z-20 border border-emerald-500/30"
                                style={{ transform: "translateZ(30px)" }}
                            >
                                <Globe className="text-emerald-300" size={24} />
                            </motion.div>

                        </motion.div>
                    </div>

                </div>
            </section>

            {/* --- WHAT WE DO SECTION --- */}
            <section className="relative z-10 py-24">
                {/* Scroll-Linked Drawing Pipeline */}
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
                        initial="hidden"
                        whileInView="visible"
                        variants={staggerContainer}
                        viewport={{ once: true }}
                        className="text-center mb-20 max-w-3xl mx-auto"
                    >
                        <motion.span variants={fadeInUp} className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-4 block">
                            Our Services
                        </motion.span>
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            We provide fully compliant payrolling services across <span className="text-emerald-700">India</span> and the <span className="text-emerald-700">Middle East.</span>
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={staggerContainer}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
                    >
                        {servicesList.map((service, index) => (
                            <PrecisionCard key={index} service={service} index={index} />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- HRMS FOOTER --- */}
            <section className="py-32 px-6 lg:px-12 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-2xl border border-slate-100 text-center relative overflow-hidden group"
                    >
                        {/* Abstract BG Shapes */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-[#0A261D] to-emerald-400" />
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="absolute -left-20 -bottom-20 w-96 h-96 bg-emerald-50 rounded-full blur-3xl"
                        />

                        <div className="relative z-10">
                            <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center mx-auto mb-8 text-white shadow-xl rotate-3 group-hover:rotate-12 transition-all duration-500">
                                <Database size={32} />
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tighter">
                                Powered by <span className="text-emerald-700">Skoal HRMS</span>
                            </h2>
                            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto mb-12">
                                All payroll operations are managed through Skoal’s in-house HRMS platform, securely whitelisted for each client with <span className="text-slate-900 font-semibold bg-emerald-50 px-2 py-1 rounded">dedicated databases</span> and access controls.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-10 py-5 bg-[#0A261D] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-emerald-900/20 transition-all"
                            >
                                Request System Demo
                                <ArrowRight size={20} />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

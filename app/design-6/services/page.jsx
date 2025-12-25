"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    PieChart
} from "lucide-react";
import Footer from "../components/Footer";

// --- Components ---

// Exact Replica of Home Page "PrecisionCard" for Consistency in Body
function PrecisionCard({ service, index }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/50 transition-all duration-500 h-full flex flex-col justify-between group overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-200`}
        >
            <div className={`absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

            <div className="absolute top-6 right-6 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${isHovered ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`} />
                <span className="text-[10px] font-mono font-bold text-slate-400 tracking-widest">
                    {isHovered ? 'ACTIVE' : 'IDLE'}
                </span>
            </div>

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

            {/* --- HRMS FOOTER --- */}
            <section className="py-32 px-6 lg:px-12 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-2xl border border-slate-100 text-center relative overflow-hidden group"
                    >
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

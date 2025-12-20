"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    return (
        <section ref={targetRef} className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#F8FAFC] py-20">
            {/* Ambient Background Lights - More Realistic & Subtle */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-green-200/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-pulse-slow" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-[100px] mix-blend-multiply opacity-60" />
            </div>

            <motion.div
                style={{ opacity, scale, y }}
                className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10 grid lg:grid-cols-2 gap-16 items-center"
            >

                {/* Left Column: Content */}
                <div className="max-w-2xl relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-green-100/50 backdrop-blur-sm shadow-sm text-emerald-800 text-sm font-semibold mb-8 group cursor-default hover:bg-white/80 transition-colors"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span>Future of Workforce Management</span>
                    </motion.div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-8">
                        <span className="block overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                className="block"
                            >
                                Global payroll
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 pb-2">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                className="block"
                            >
                                reimagined.
                            </motion.span>
                        </span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-light"
                    >
                        Skoal Solutions delivers secure, compliant, and scalable people solutions across India and the Middle East.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                        className="flex flex-wrap items-center gap-5"
                    >
                        <motion.button
                            whileHover={{ scale: 1.02, translateY: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-emerald-900 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-emerald-900/25 hover:bg-emerald-800 transition-all hover:shadow-xl hover:shadow-emerald-900/30 ring-offset-2 focus:ring-2 ring-emerald-900"
                        >
                            Explore Services <ArrowRight size={18} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02, translateY: -2, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                            whileTap={{ scale: 0.98 }}
                            className="group bg-white/50 backdrop-blur-sm text-slate-700 border border-slate-200/60 px-8 py-4 rounded-full font-semibold transition-all shadow-sm hover:shadow-md flex items-center gap-3"
                        >
                            <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                                <Play size={14} fill="currentColor" />
                            </span>
                            Watch Demo
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="mt-14 flex items-center gap-6 text-slate-500 border-t border-slate-200/60 pt-8"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white shadow-sm bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400 overflow-hidden relative`}>
                                    {/* Placeholder avatars */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300" />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-emerald-50 flex items-center justify-center text-xs font-bold text-emerald-700 z-10">
                                +500
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-900">Trusted by Global Leaders</p>
                            <div className="flex gap-1 mt-0.5">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-500" />)}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Realistic 3D Dashboard */}
                <div className="relative h-[650px] hidden lg:flex items-center justify-center perspective-[2000px]">

                    {/* Floating Background Elements (Abstract decorations instead of sticky forms) */}
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-emerald-200/40 to-teal-200/10 backdrop-blur-md rounded-2xl border border-white/20 z-0 rotate-12"
                    />
                    <motion.div
                        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-purple-100/10 backdrop-blur-md rounded-full border border-white/20 z-0"
                    />

                    {/* Main Dashboard Container */}
                    <motion.div
                        className="relative w-full max-w-[550px] aspect-[4/3]"
                        initial={{ opacity: 0, rotateX: 20, rotateY: -20, scale: 0.9 }}
                        animate={{ opacity: 1, rotateX: 5, rotateY: -5, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        style={{ transformStyle: "preserve-3d" }}
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = (e.clientX - rect.left) / rect.width;
                            const y = (e.clientY - rect.top) / rect.height;
                            e.currentTarget.style.transform = `perspective(2000px) rotateX(${(y - 0.5) * -15}deg) rotateY(${(x - 0.5) * 15}deg)`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = `perspective(2000px) rotateX(5deg) rotateY(-5deg)`;
                        }}
                    >
                        {/* Glass Panel */}
                        <div className="absolute inset-0 bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.5)] overflow-hidden transition-all duration-300 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] flex flex-col">

                            {/* Dashboard Header */}
                            <div className="h-16 border-b border-slate-100 flex items-center justify-between px-6 bg-white/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                                </div>
                                <div className="h-2 w-24 bg-slate-200/80 rounded-full" />
                            </div>

                            {/* Dashboard Body */}
                            <div className="p-6 flex-1 flex flex-col gap-6">
                                {/* Top Stats Row */}
                                <div className="grid grid-cols-2 gap-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="bg-white p-4 rounded-2xl shadow-sm border border-slate-50 relative overflow-hidden"
                                    >
                                        <div className="h-2 w-16 bg-slate-100 rounded-full mb-3" />
                                        <div className="text-2xl font-bold text-slate-800">98.5%</div>
                                        <div className="text-xs text-green-600 font-medium mt-1">+2.4% vs last month</div>
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-50 to-transparent rounded-bl-3xl" />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="bg-white p-4 rounded-2xl shadow-sm border border-slate-50 relative overflow-hidden"
                                    >
                                        <div className="h-2 w-16 bg-slate-100 rounded-full mb-3" />
                                        <div className="text-2xl font-bold text-slate-800">12,450</div>
                                        <div className="text-xs text-slate-400 font-medium mt-1">Active Employees</div>
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-3xl" />
                                    </motion.div>
                                </div>

                                {/* Main Chart Area */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="flex-1 bg-gradient-to-b from-slate-50 to-white rounded-2xl border border-slate-100 p-5 relative"
                                >
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="h-2 w-20 bg-slate-200 rounded-full" />
                                        <div className="h-2 w-8 bg-green-100 rounded-full" />
                                    </div>

                                    {/* Realistic Chart Line */}
                                    <div className="relative h-24 w-full">
                                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                            <defs>
                                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                                                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                            <motion.path
                                                d="M0 80 C 40 70, 80 90, 120 50 S 180 20, 240 40 S 300 10, 360 20 S 420 40, 480 10"
                                                fill="url(#chartGradient)"
                                                stroke="none"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 1, delay: 1 }}
                                            />
                                            <motion.path
                                                d="M0 80 C 40 70, 80 90, 120 50 S 180 20, 240 40 S 300 10, 360 20 S 420 40, 480 10"
                                                fill="none"
                                                stroke="#10b981"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
                                            />
                                        </svg>

                                        {/* Interaction Point */}
                                        <motion.div
                                            className="absolute top-[10px] right-[10%] w-4 h-4 bg-white border-[3px] border-emerald-500 rounded-full shadow-lg"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 2.8, type: "spring" }}
                                        />

                                        {/* Tooltip */}
                                        <motion.div
                                            className="absolute top-[-30px] right-[5%] bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded shadow-xl"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 3 }}
                                        >
                                            $2.4M
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Floating elements BEHIND/AROUND dashboard for depth */}
                        <motion.div
                            className="absolute -right-12 top-1/3 w-24 h-24 bg-gradient-to-tr from-green-400 to-emerald-300 rounded-2xl shadow-xl z-10"
                            style={{ transform: "translateZ(40px)" }}
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 flex items-center justify-center">
                                <CheckCircle2 className="text-white w-10 h-10 drop-shadow-md" />
                            </div>
                        </motion.div>

                    </motion.div>
                </div>

            </motion.div>
        </section>
    );
}

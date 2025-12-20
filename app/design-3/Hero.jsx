"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const StatBadge = ({ icon: Icon, label, value, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay, duration: 0.5, type: "spring" }}
        className={cn(
            "absolute flex items-center gap-3 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/40",
            className
        )}
    >
        <div className="bg-green-100 p-2 rounded-full text-green-700">
            <Icon size={20} />
        </div>
        <div>
            <p className="text-xs text-slate-500 font-medium">{label}</p>
            <p className="text-sm font-bold text-slate-800">{value}</p>
        </div>
    </motion.div>
);

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-20">
            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-green-200/40 rounded-full blur-3xl rounded-[30%_70%_70%_30%/30%_30%_70%_70%]" />
                <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-green-300/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Column: Content */}
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-medium mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Future of Workforce Management
                    </motion.div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Global payroll <br />
                        <span className="relative inline-block text-green-600">
                            reimagined
                            {/* Underline svg decoration */}
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-green-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                            </svg>
                        </span>.
                    </h1>

                    <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                        Skoal Solutions delivers secure, compliant, and scalable people solutions across India and the Middle East. Focus on growth while we manage the complexity.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-green-900 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-green-900/20 hover:bg-green-800 transition-colors"
                        >
                            Explore Services <ArrowRight size={18} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2"
                        >
                            Watch Demo
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-current border-b-[4px] border-b-transparent ml-0.5" />
                            </div>
                        </motion.button>
                    </div>

                    <div className="mt-12 flex items-center gap-8 text-slate-500">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white" />
                            ))}
                        </div>
                        <p className="text-sm font-medium">Trusted by <span className="text-slate-900 font-bold">500+</span> companies</p>
                    </div>
                </div>

                {/* Right Column: Organic Visual */}
                <div className="relative h-[600px] hidden lg:block perspective-1000">
                    {/* Abstract 3D shape constructed with Framer Motion */}
                    <motion.div

                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full h-full"
                    >
                        {/* Main Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-green-500 to-green-300 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-20 blur-xl" />

                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] perspective-1000"
                            style={{ perspective: 1000 }}
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                const centerX = rect.width / 2;
                                const centerY = rect.height / 2;
                                const rotateX = ((y - centerY) / centerY) * -10; // Max -10 to 10 deg
                                const rotateY = ((x - centerX) / centerX) * 10;

                                e.currentTarget.style.transform = `translate(-50%, -50%) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = `translate(-50%, -50%) perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        >
                            <div className="bg-white/40 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-2xl w-full h-full transition-all duration-200 ease-out hover:shadow-green-900/20">
                                {/* Mock Dashboard UI */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="h-4 w-24 bg-slate-200 rounded-full" />
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-red-400" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-24 bg-green-50/50 rounded-xl border border-green-100 p-4 relative overflow-hidden group">
                                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-green-100/50 to-transparent" />
                                        {/* Line Chart Config simulation */}
                                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                            <motion.path
                                                d="M0 50 C 20 40, 40 60, 60 30 S 100 10, 140 40 S 200 20, 300 10"
                                                fill="none"
                                                stroke="#22c55e"
                                                strokeWidth="3"
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                transition={{ duration: 2, ease: "easeInOut" }}
                                            />
                                        </svg>
                                        {/* Scanning Line Animation */}
                                        <motion.div
                                            className="absolute top-0 bottom-0 width-[1px] bg-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                                            animate={{ left: ["0%", "100%", "0%"] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                            style={{ width: '2px' }}
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="h-20 bg-white rounded-xl shadow-sm p-3 hover:scale-105 transition-transform">
                                            <div className="w-8 h-8 bg-blue-50 rounded-lg mb-2" />
                                            <div className="h-2 w-16 bg-slate-100 rounded-full" />
                                        </div>
                                        <div className="h-20 bg-white rounded-xl shadow-sm p-3 hover:scale-105 transition-transform">
                                            <div className="w-8 h-8 bg-purple-50 rounded-lg mb-2" />
                                            <div className="h-2 w-16 bg-slate-100 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Stat Badges */}
                        <StatBadge
                            icon={CheckCircle}
                            label="Compliance Audit"
                            value="100% Passed"
                            className="top-20 right-0"
                            delay={0.2}
                        />
                        <StatBadge
                            icon={Shield}
                            label="Data Security"
                            value="Enterprise Grade"
                            className="bottom-32 -left-10"
                            delay={0.4}
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import Image from "next/image";
import { cn } from "../../lib/utils";

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
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[600px] perspective-1000"
                            style={{ perspective: 1000 }}
                        >
                            {/* Main Video Card */}
                            <motion.div 
                                className="absolute top-10 left-10 right-0 bottom-20 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white transform rotate-[-6deg] z-10"
                                whileHover={{ scale: 1.02, rotate: -4 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="relative w-full h-full bg-slate-900">
                                    <video 
                                        autoPlay 
                                        muted 
                                        loop 
                                        playsInline
                                        className="w-full h-full object-cover opacity-90"
                                        src="https://assets.mixkit.co/videos/preview/mixkit-people-working-in-a-modern-office-4950-large.mp4"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    
                                    {/* Video UI Elements */}
                                    <div className="absolute bottom-6 left-6 right-6 text-white">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-xs font-medium uppercase tracking-wider text-green-400">Live Operations</span>
                                        </div>
                                        <p className="font-semibold text-lg">Real-time Workforce Analytics</p>
                                    </div>
                                    
                                    {/* Play Button Overlay */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Image Card 1 (Top Right) */}
                            <motion.div 
                                className="absolute -top-4 -right-8 w-48 h-32 bg-white rounded-2xl shadow-xl p-2 border border-slate-100 z-20 rotate-[6deg]"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="w-full h-full rounded-xl overflow-hidden relative">
                                    <img 
                                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                                        alt="Team meeting" 
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold text-slate-800">
                                        Team Sync
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Image Card 2 (Bottom Left) */}
                            <motion.div 
                                className="absolute bottom-10 -left-12 w-40 h-40 bg-white rounded-2xl shadow-xl p-2 border border-slate-100 z-20 rotate-[-12deg]"
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="w-full h-full rounded-xl overflow-hidden relative bg-slate-50 flex flex-col items-center justify-center gap-2">
                                    <div className="flex -space-x-2">
                                        <img src="https://i.pravatar.cc/100?img=1" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                                        <img src="https://i.pravatar.cc/100?img=5" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                                        <img src="https://i.pravatar.cc/100?img=8" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs font-bold text-slate-800">New Hires</p>
                                        <p className="text-[10px] text-slate-500">+12 this week</p>
                                    </div>
                                    <div className="w-full px-4">
                                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                            <div className="h-full w-[70%] bg-green-500 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

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

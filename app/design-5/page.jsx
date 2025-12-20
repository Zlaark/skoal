"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Globe2, Zap, Users, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white text-slate-900 pt-32 pb-20">

            {/* --- Digital Aurora Background (Light Theme) --- */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

                {/* BACKGROUND VIDEO LAYER */}
                {/* Note: Requires a file named 'hero-background.mp4' in the public folder */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-15 grayscale"
                >
                    <source src="/hero-background.mp4" type="video/mp4" />
                </video>

                {/* Aurora Blob 1 - Top Left (Vibrant Emerald) - STATIC */}
                <div
                    className="absolute -top-[10%] -left-[5%] w-[800px] h-[800px] bg-gradient-to-br from-emerald-200 via-teal-100 to-transparent rounded-full blur-[100px] opacity-70 mix-blend-multiply"
                />

                {/* Aurora Blob 2 - Bottom Right (Minty Green) - STATIC */}
                <div
                    className="absolute top-[30%] -right-[10%] w-[900px] h-[900px] bg-gradient-to-tl from-green-200 via-emerald-100 to-transparent rounded-full blur-[120px] opacity-60 mix-blend-multiply"
                />

                {/* Aurora Blob 3 - Central Highlight (White/Light Accent) - STATIC */}
                <div
                    className="absolute top-[20%] left-[30%] w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[100px] opacity-80"
                />

                {/* Grid Overlay for Texture (Darker Grid for Light BG) */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,78,59,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,78,59,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

            </div>
            {/* --- Central Content --- */}
            <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">

                {/* Badge - Clean Green on White */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-100 shadow-sm mb-8"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                    </span>
                    <span className="text-sm font-bold tracking-wide uppercase text-primary">Live Workforce Intelligence</span>
                </motion.div>

                {/* Headline - Dark Text for Contrast */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 max-w-5xl leading-[1.1] mb-8 drop-shadow-sm"
                >
                    Simplify the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-600 to-primary">Complexity</span> of People.
                </motion.h1>

                {/* Subtext - Darker muted text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mb-12"
                >
                    Full-stack workforce management for the modern enterprise. <br className="hidden md:block" />
                    Secure, compliant, and scalable operations across India & the Middle East.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <button className="group relative overflow-hidden btn-primary text-black text-lg font-medium px-10 py-5 rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_10px_30px_rgba(16,185,129,0.3)]">
                        <span className="relative z-10">Start Transformation</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </button>

                    <button className="px-10 py-5 rounded-full text-lg font-medium text-slate-900 bg-white border border-emerald-100 hover:bg-emerald-50 transition-all flex items-center gap-3 shadow-sm hover:shadow-md">
                        <Globe2 className="w-5 h-5 text-primary" /> Our Capabilities
                    </button>
                </motion.div>

                {/* --- Floating "Satellites" as Features (Absolute positioned around text) --- */}

                {/* Feature 1: Efficiency */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="hidden lg:flex absolute top-[20%] left-[5%] xl:left-[10%] bg-white/60 backdrop-blur-md border border-emerald-100 p-4 rounded-2xl gap-3 items-center max-w-[200px] shadow-lg shadow-emerald-900/5"
                >
                    <div className="p-2 rounded-full bg-emerald-100 text-primary">
                        <Zap className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-slate-900">98.5%</div>
                        <div className="text-xs text-slate-500">Efficiency Rate</div>
                    </div>
                </motion.div>

                {/* Feature 2: Compliance */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="hidden lg:flex absolute top-[30%] right-[5%] xl:right-[10%] bg-white/60 backdrop-blur-md border border-emerald-100 p-4 rounded-2xl gap-3 items-center max-w-[220px] shadow-lg shadow-emerald-900/5"
                >
                    <div className="p-2 rounded-full bg-emerald-100 text-primary">
                        <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-lg font-bold text-slate-900">100% Audit</div>
                        <div className="text-xs text-slate-500">Ready Compliance</div>
                    </div>
                </motion.div>

                {/* Feature 3: Users */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="hidden lg:flex absolute bottom-[10%] left-[20%] bg-white/60 backdrop-blur-md border border-emerald-100 p-4 rounded-2xl gap-3 items-center shadow-lg shadow-emerald-900/5"
                >
                    <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                        ))}
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-900">50k+ Managed</div>
                        <div className="text-xs text-slate-500">Active Workforce</div>
                    </div>
                </motion.div>

            </div>

            {/* Bottom Fade - to white/background */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
        </section>
    );
}
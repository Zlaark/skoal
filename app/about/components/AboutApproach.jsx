"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Lightbulb, Users, ArrowRight, Sparkles, Map, Radar, Network } from "lucide-react";

const approaches = [
    {
        id: "local",
        icon: Target,
        bgIcon: Map,
        title: "Local Expertise",
        subtitle: "REGIONAL MASTERY",
        description: "Navigating the complexities of labor laws across India and the Middle East requires more than just knowledge—it demands presence. We are on the ground.",
        stat: "2+",
        statLabel: "REGIONS",
        theme: {
            main: "text-blue-200",
            bg: "bg-linear-to-br from-blue-900 via-slate-900 to-slate-950",
            border: "border-blue-500/30",
            glow: "shadow-blue-500/20",
            accent: "bg-blue-500"
        }
    },
    {
        id: "proactive",
        icon: Lightbulb,
        bgIcon: Radar,
        title: "Proactive Solutions",
        subtitle: "FUTURE FOCUSED",
        description: "We don't wait for problems to arise. Our predictive monitoring systems identify potential compliance risks before they impact your operations.",
        stat: "24/7",
        statLabel: "MONITORING",
        theme: {
            main: "text-amber-200",
            bg: "bg-linear-to-br from-amber-900 via-slate-900 to-slate-950",
            border: "border-amber-500/30",
            glow: "shadow-amber-500/20",
            accent: "bg-amber-500"
        }
    },
    {
        id: "client",
        icon: Users,
        bgIcon: Network,
        title: "Client-Centric",
        subtitle: "PARTNERSHIP FIRST",
        description: "Your business is unique, and your workforce strategy should be too. We build bespoke solutions that align perfectly with your growth goals.",
        stat: "100%",
        statLabel: "SATISFACTION",
        theme: {
            main: "text-emerald-200",
            bg: "bg-linear-to-br from-emerald-900 via-slate-900 to-slate-950",
            border: "border-emerald-500/30",
            glow: "shadow-emerald-500/20",
            accent: "bg-emerald-500"
        }
    }
];

const StickyCard = ({ item, index, progress, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(progress, range, [1, targetScale]);
    const opacity = useTransform(progress, range, [1, 0.6]);

    return (
        <div ref={container} className="min-h-screen flex items-center justify-center sticky top-0 py-10 md:py-0">
            <motion.div
                style={{ scale, top: `calc(10% + ${index * 25}px)` }}
                className="relative w-full max-w-5xl aspect-[4/5] md:aspect-auto md:min-h-[60vh] lg:aspect-[1.8/1] rounded-[2rem] md:rounded-[3rem] overflow-hidden origin-top shadow-2xl"
            >
                {/* Visual Card Container */}
                <div className={`relative w-full h-full p-6 md:p-10 lg:p-16 flex flex-col justify-between border ${item.theme.border} ${item.theme.bg} ${item.theme.glow} shadow-xl backdrop-blur-3xl`}>

                    {/* Background Texture & Icon */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
                        <item.bgIcon className="absolute -right-20 -bottom-40 w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] stroke-1" />
                    </div>

                    {/* Top Row */}
                    <div className="flex justify-between items-start z-10 w-full">
                        <div className="flex-1">
                            <div className={`inline-flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4 md:mb-6 ${item.theme.main}`}>
                                <item.icon size={14} className="md:w-4 md:h-4" />
                                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">{item.subtitle}</span>
                            </div>
                            <h3 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-[1.1] max-w-2xl">
                                {item.title}
                            </h3>
                        </div>

                        {/* Huge Stat */}
                        <div className="hidden lg:block text-right shrink-0">
                            <div className="text-5xl xl:text-7xl font-bold text-white/90 tracking-tighter">
                                {item.stat}
                            </div>
                            <div className={`text-xs xl:text-sm font-bold tracking-[0.4em] uppercase mt-2 ${item.theme.main}`}>
                                {item.statLabel}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end z-10 pt-6 md:pt-10 gap-6">
                        <p className="text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xl font-medium">
                            {item.description}
                        </p>

                        <button className={`w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${item.theme.accent} text-white shadow-lg shrink-0`}>
                            <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                        </button>
                    </div>

                    {/* Gradient Overlay for Shine */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-white/5 pointer-events-none" />
                </div>

            </motion.div>
        </div>
    );
};

export default function AboutApproach() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section ref={container} className="relative bg-[#FAFAFA] pb-20">

            {/* Main Header */}
            <div className="sticky top-0 z-0 h-screen flex flex-col items-center justify-center container mx-auto px-6 lg:px-12 pb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
                >
                    <Sparkles size={14} className="text-slate-400" />
                    <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">Methodology</span>
                </motion.div>

                <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1]">
                    What Sets <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500 font-serif italic">Us Apart.</span>
                </h2>
            </div>

            {/* The Stack */}
            <div className="px-4">
                {approaches.map((item, index) => {
                    const targetScale = 1 - ((approaches.length - index) * 0.05);
                    return (
                        <StickyCard
                            key={item.id}
                            item={item}
                            index={index}
                            progress={scrollYProgress}
                            range={[index * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>

        </section>
    );
}
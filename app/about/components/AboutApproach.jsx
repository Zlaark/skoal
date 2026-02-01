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
        <div ref={container} className="min-h-[70vh] sm:min-h-[75vh] md:min-h-[90vh] flex items-center justify-center sticky top-0 py-4 sm:py-6 md:py-8">
            <motion.div
                style={{ scale, top: `calc(8% + ${index * 16}px)` }}
                className="relative w-full max-w-4xl mx-auto min-h-[320px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[50vh] rounded-xl sm:rounded-2xl md:rounded-[2rem] overflow-hidden origin-top shadow-lg md:shadow-xl"
            >
                {/* Visual Card Container */}
                <div className={`relative w-full h-full min-h-[320px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[50vh] p-4 sm:p-5 md:p-8 lg:p-12 flex flex-col justify-between border ${item.theme.border} ${item.theme.bg} ${item.theme.glow} shadow-xl backdrop-blur-3xl`}>

                    {/* Background Texture & Icon */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
                        <item.bgIcon className="absolute -right-8 sm:-right-12 md:-right-16 -bottom-16 sm:-bottom-24 md:-bottom-32 w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[280px] md:h-[280px] lg:w-[400px] lg:h-[400px] stroke-1" />
                    </div>

                    {/* Top Row */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start z-10 w-full gap-3">
                        <div className="flex-1">
                            <div className={`inline-flex items-center gap-1.5 md:gap-2 px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-2 sm:mb-3 md:mb-4 ${item.theme.main}`}>
                                <item.icon size={10} className="sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
                                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.12em] sm:tracking-[0.15em] uppercase">{item.subtitle}</span>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white tracking-tight leading-[1.15] max-w-xl">
                                {item.title}
                            </h3>
                        </div>

                        {/* Huge Stat - Show on tablets and up */}
                        <div className="hidden sm:block text-right shrink-0">
                            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 tracking-tighter">
                                {item.stat}
                            </div>
                            <div className={`text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase mt-0.5 sm:mt-1 ${item.theme.main}`}>
                                {item.statLabel}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end z-10 pt-3 sm:pt-4 md:pt-6 gap-3 sm:gap-4">
                        {/* Mobile Stat */}
                        <div className="sm:hidden">
                            <div className="text-2xl font-bold text-white/90 tracking-tighter">
                                {item.stat}
                            </div>
                            <div className={`text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5 ${item.theme.main}`}>
                                {item.statLabel}
                            </div>
                        </div>
                        
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 leading-relaxed max-w-md font-medium">
                            {item.description}
                        </p>

                        <button className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${item.theme.accent} text-white shadow-lg shrink-0`}>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
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
            <div className="sticky top-0 z-0 h-[50vh] sm:h-[60vh] md:h-[80vh] flex flex-col items-center justify-center container mx-auto px-4 sm:px-6 lg:px-12 pb-10 sm:pb-12 md:pb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-3 sm:mb-4 md:mb-5"
                >
                    <Sparkles size={10} className="sm:w-3 sm:h-3 text-slate-400" />
                    <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-slate-500 tracking-widest uppercase">Methodology</span>
                </motion.div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                    What Sets <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500 font-serif italic">Us Apart.</span>
                </h2>
            </div>

            {/* The Stack */}
            <div className="px-3 sm:px-4">
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
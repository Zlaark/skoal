"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ShoppingBag,
  Zap,
  Hotel,
  Rocket,
  Building2,
  ArrowRight,
  Globe,
  TrendingUp,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

/**
 * Data with more "premium" copy and distinct gradient themes
 */
const industries = [
  {
    id: "ecommerce",
    title: "E-Commerce",
    subtitle: "Scale Without Limits",
    desc: "Seamless fulfillment for high-velocity D2C brands. We handle the surge so you can focus on the brand.",
    icon: ShoppingBag,
    stat: "99.9%",
    statLabel: "Fulfillment Accuracy",
    gradient: "from-emerald-500/30 to-teal-400/30",
  },
  {
    id: "qcommerce",
    title: "Quick Commerce",
    subtitle: "The 10-Minute Promise",
    desc: "Hyper-local logistics networks designed for speed. Rapid fleet deployment for your dark stores.",
    icon: Zap,
    stat: "< 10min",
    statLabel: "Avg. Delivery Time",
    gradient: "from-teal-500/30 to-cyan-400/30",
  },
  {
    id: "hospitality",
    title: "Hospitality",
    subtitle: "Five-Star Excellence",
    desc: "Curated frontline staff who understand the art of service. Elevate your guest experience instantly.",
    icon: Hotel,
    stat: "Staff",
    statLabel: "Vetted Professionals",
    gradient: "from-green-500/30 to-emerald-400/30",
  },
  {
    id: "startups",
    title: "Startups",
    subtitle: "Day 1 Readiness",
    desc: "Agile teams for hyper-growth phases. Scale your operations as fast as your codebase.",
    icon: Rocket,
    stat: "24h",
    statLabel: "Deployment Speed",
    gradient: "from-emerald-600/30 to-green-500/30",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    subtitle: "Global Compliance",
    desc: "Audit-proof workforce solutions for Fortune 500s. Risk-free scalability across borders.",
    icon: Building2,
    stat: "100%",
    statLabel: "Compliance Score",
    gradient: "from-slate-500/30 to-slate-400/30",
  }
];

// Reusable Premium "Dark" Card
const Card = ({ card }) => {
  const Icon = card.icon;

  return (
    <Link href="/services" className="group relative h-[280px] md:h-[320px] lg:h-[350px] xl:h-[400px] w-[85vw] sm:w-[360px] md:w-[420px] lg:w-[450px] overflow-hidden rounded-4xl flex-shrink-0 bg-[#0A261D] border border-emerald-900/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/50 hover:-translate-y-2 block">

      {/* Dynamic Background Gradients */}
      <div className={`absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-linear-to-br ${card.gradient}`} />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.svg')] mix-blend-overlay"></div>

      {/* Abstract Shapes */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] group-hover:bg-emerald-400/30 transition-colors duration-700" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Content Container */}
      <div className="relative h-full p-5 md:p-6 lg:p-7 xl:p-10 flex flex-col justify-between z-10">

        {/* Top Section */}
        <div>
          {/* Icon & Subtitle Row */}
          <div className="flex items-center justify-between mb-3 md:mb-4 xl:mb-6 group-hover:text-emerald-100 transition-colors duration-500">
            <div className="p-2.5 md:p-3 xl:p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-emerald-500/20 group-hover:border-emerald-400/30 backdrop-blur-md transition-all duration-500">
              <Icon size={20} className="md:w-6 md:h-6 xl:w-[26px] xl:h-[26px] text-emerald-400 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
            </div>
            <span className="text-[9px] md:text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300 md:text-emerald-400 group-hover:text-emerald-200 transition-colors duration-500">
              {card.subtitle}
            </span>
          </div>

          {/* Title & Desc */}
          <h3 className="text-2xl md:text-[26px] lg:text-[28px] xl:text-3xl font-serif font-medium text-white mb-2 md:mb-3 xl:mb-4 transition-colors duration-500 leading-tight">
            {card.title}
          </h3>
          <p className="text-emerald-100/90 text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-relaxed group-hover:text-emerald-100/80 transition-colors duration-500 font-light">
            {card.desc}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="pt-4 md:pt-5 lg:pt-6 xl:pt-8 border-t border-white/5 group-hover:border-white/10 transition-colors duration-500">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl md:text-3xl lg:text-[34px] xl:text-4xl font-bold text-white group-hover:text-emerald-50 transition-colors duration-500 tracking-tighter">
                {card.stat}
              </div>
              <div className="text-[10px] md:text-[11px] xl:text-xs font-medium text-emerald-300/80 group-hover:text-emerald-300 transition-colors duration-500 mt-1 uppercase tracking-wider">
                {card.statLabel}
              </div>
            </div>

            {/* Floating Action Button */}
            <div aria-label="Learn more about this industry" className="w-10 h-10 md:w-11 md:h-11 xl:w-12 xl:h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:border-emerald-500 flex items-center justify-center transition-all duration-500 hover:scale-110">
              <ArrowRight size={16} className="md:w-[18px] md:h-[18px] xl:w-5 xl:h-5 text-emerald-400 group-hover:text-white transition-colors duration-500" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function Industries() {
  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Different scroll range for mobile vs desktop
  const x = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "-500%" : "-110%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] md:h-[350vh] bg-[#FAFAFA]">

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* Background Elements */}
        {/* Large distinctive typographic background element */}
        <div className="absolute top-20 left-10 md:left-20 xl:left-40 z-0 pointer-events-none opacity-[0.02]">
          <span className="text-[20vw] font-bold leading-none tracking-tighter text-emerald-950">
            SECTORS
          </span>
        </div>

        {/* Section Header - Sticky at top LEFT - Lower z-index so cards slide over it */}
        {/* Adjusted left-10 md:left-24 to fix cut-off issue */}
        <div className="absolute top-8 md:top-8 lg:top-10 xl:top-24 left-4 sm:left-6 lg:left-8 z-0 max-w-lg">
          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 xl:mb-4">
            <span className="w-6 md:w-8 h-[2px] bg-emerald-500"></span>
            <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
              Our Expertise
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-serif font-medium text-slate-900 leading-[1.1] mb-2 md:mb-4 xl:mb-6">
            Industries We <br />
            <span className="italic text-emerald-700">Revolutionize</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base lg:text-lg max-w-sm hidden md:block">
            Tailored workforce solutions that adapt to the unique pulse of your sector.
          </p>
        </div>

        {/* Progress Indicator - Top Right */}
        <div className="absolute top-16 md:top-14 lg:top-16 right-4 md:right-16 z-20 flex items-center gap-3 md:gap-4">
          <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest hidden md:block">Scroll to Explore</span>
          <div className="w-24 md:w-32 h-1 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-emerald-600 rounded-full"
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />
          </div>
        </div>

        {/* Horizontal Scroll Track - HIGHER z-index to overlay text */}
        <div className="w-full relative z-20 pt-24 md:pt-32 lg:pt-40 xl:pt-48">
          <motion.div
            style={{ x }}
            className="flex gap-6 md:gap-8 pl-4 sm:pl-6 lg:pl-8 pr-20 items-center will-change-transform"
          >

            {/* Intro Spacer */}
            <div className="w-[5vw] md:w-[25vw] shrink-0" />

            {industries.map((card) => (
              <Card card={card} key={card.id} />
            ))}

            {/* CTA / End Card */}
            <div className="w-[340px] md:w-[380px] h-[280px] md:h-[320px] lg:h-[350px] xl:h-[400px] shrink-0 relative group rounded-4xl overflow-hidden cursor-pointer snap-center border border-slate-200 flex flex-col items-center justify-center text-center p-6 md:p-8 xl:p-10 hover:border-emerald-500/50 transition-colors duration-700">
              {/* Pattern BG */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.svg')]"></div>

              <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-4 md:mb-5 lg:mb-6 xl:mb-8 group-hover:scale-110 transition-transform duration-500">
                <Globe size={28} className="md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-9 xl:h-9 text-emerald-600" strokeWidth={1.5} />
              </div>
              <h3 className="relative z-10 text-xl md:text-2xl lg:text-[26px] xl:text-3xl font-serif font-medium text-slate-900 mb-2 md:mb-3 xl:mb-4">
                Don't see your industry?
              </h3>
              <p className="relative z-10 text-slate-500 text-sm md:text-base mb-4 md:mb-6 xl:mb-8 max-w-xs mx-auto">
                We build custom workforce solutions for unique operational challenges.
              </p>
              <Link href="/contact" aria-label="Explore partnership opportunities" className="relative z-10 px-6 py-3 md:px-7 md:py-3.5 xl:px-8 xl:py-4 bg-slate-900 text-white text-sm md:text-base rounded-full font-bold shadow-xl shadow-slate-900/10 hover:bg-emerald-600 transition-all duration-300 flex items-center gap-2 group-hover:px-8 md:group-hover:px-9 xl:group-hover:px-10">
                Let's Talk <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" />
              </Link>
            </div>

            {/* End Spacer to allow full scroll of last card */}
            <div className="w-[30vw] md:w-[50vw] shrink-0" />

          </motion.div>
        </div>

      </div>
    </section>
  );
}

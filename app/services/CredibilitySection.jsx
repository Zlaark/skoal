"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Headphones, Shield, Clock, Users, Building2,
  Wallet, CheckCircle2, UserCheck, Briefcase, TrendingUp,
  Phone, MessageSquare, BarChart4, Zap, ArrowUpRight,
  Activity, Globe, Layers
} from "lucide-react";

// === ODOMETER-STYLE ANIMATED NUMBER ===
function OdometerNumber({ value, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  // Parse numeric value
  const numericValue = parseFloat(value.toString().replace(/[^0-9.]/g, ''));

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setDisplayValue(numericValue * easeOut);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, numericValue, duration]);

  // Format based on type
  const formatValue = () => {
    const valStr = value.toString();
    if (valStr.includes("M")) {
      return `${Math.round(displayValue)}M`;
    } else if (valStr.includes("Cr")) {
      return `₹${Math.round(displayValue).toLocaleString()}`;
    } else if (valStr.includes("%") && valStr.includes(".")) {
      return displayValue.toFixed(1);
    } else if (valStr.includes("%")) {
      return Math.round(displayValue);
    } else {
      return Math.round(displayValue).toLocaleString();
    }
  };

  return (
    <span ref={ref} className="tabular-nums font-mono">
      {isInView ? formatValue() : "0"}
    </span>
  );
}

// === MINI PROGRESS BAR ===
function MiniProgress({ percentage, color = "emerald" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        className={`h-full bg-gradient-to-r from-${color}-400 to-${color}-500 rounded-full`}
      />
    </div>
  );
}

// === BENTO CARD VARIANTS ===

// Large Hero Card (spans 2 columns)
function HeroCard({ stat, delay = 0 }) {
  const Icon = stat.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, type: "spring", stiffness: 80 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="col-span-2 row-span-2 relative bg-gradient-to-br from-emerald-900/40 via-[#0A261D] to-teal-900/30 
                       rounded-[2.5rem] p-10 lg:p-12 overflow-hidden border border-emerald-500/20
                       hover:border-emerald-400/40 transition-all duration-500 group cursor-default"
    >
      {/* Animated Glow */}
      <motion.div
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Top Row: Badge + Icon */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">{stat.badge}</span>
        </div>
        <motion.div
          className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center"
          whileHover={{ rotate: 10, scale: 1.1 }}
        >
          <Icon size={32} className="text-emerald-400" strokeWidth={1.5} />
        </motion.div>
      </div>

      {/* Giant Number */}
      <div className="relative z-10 mb-6">
        <div className="text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-none">
          <OdometerNumber value={stat.value} duration={2.5} />
          {stat.suffix && <span className="text-emerald-400">{stat.suffix}</span>}
        </div>
      </div>

      {/* Label + Sublabel */}
      <div className="relative z-10 space-y-2">
        <div className="text-2xl font-semibold text-white">{stat.label}</div>
        <div className="text-emerald-300/60 text-lg">{stat.sublabel}</div>
      </div>

      {/* Bottom Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-emerald-900/50">
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1 }}
        />
      </div>
    </motion.div>
  );
}

// Standard Card
function StandardCard({ stat, delay = 0 }) {
  const Icon = stat.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03, y: -3 }}
      className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 overflow-hidden 
                       border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group cursor-default"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 
                           group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} className="text-emerald-400" strokeWidth={1.5} />
      </div>

      {/* Number */}
      <div className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
        <OdometerNumber value={stat.value} duration={2} />
        {stat.suffix && <span className="text-emerald-400">{stat.suffix}</span>}
      </div>

      {/* Label */}
      <div className="text-white/80 font-medium">{stat.label}</div>
      <div className="text-emerald-400/60 text-sm uppercase tracking-wider mt-1">{stat.sublabel}</div>
    </motion.div>
  );
}

// Wide Card (spans 2 columns)
function WideCard({ stat, delay = 0 }) {
  const Icon = stat.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="col-span-2 relative bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 
                       overflow-hidden border border-white/10 hover:border-emerald-500/30 transition-all duration-300 
                       flex items-center gap-8 group cursor-default"
    >
      {/* Left: Icon + Number */}
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center 
                               group-hover:scale-110 transition-transform duration-300">
          <Icon size={32} className="text-emerald-400" strokeWidth={1.5} />
        </div>
        <div>
          <div className="text-5xl font-bold text-white tracking-tight">
            <OdometerNumber value={stat.value} duration={2} />
            {stat.suffix && <span className="text-emerald-400">{stat.suffix}</span>}
          </div>
        </div>
      </div>

      {/* Right: Labels */}
      <div className="flex-1">
        <div className="text-xl text-white font-semibold">{stat.label}</div>
        <div className="text-emerald-400/60 text-sm uppercase tracking-wider">{stat.sublabel}</div>
      </div>

      {/* Arrow */}
      <ArrowUpRight size={24} className="text-emerald-400/40 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
    </motion.div>
  );
}

// === DATA ===
const bpoData = {
  hero: {
    icon: Headphones,
    value: "25",
    suffix: "M+",
    label: "Customer Interactions",
    sublabel: "Handled with precision",
    badge: "Core Metric"
  },
  cards: [
    { icon: Shield, value: "99.8", suffix: "%", label: "SLA Compliance", sublabel: "QA Standard" },
    { icon: Clock, value: "24", suffix: "×7", label: "Always On", sublabel: "Omnichannel" },
    { icon: Users, value: "1200", suffix: "+", label: "Trained Agents", sublabel: "Deployed" },
    { icon: Building2, value: "50", suffix: "+", label: "Enterprise Clients", sublabel: "Served" },
  ]
};

const payrollData = {
  hero: {
    icon: Wallet,
    value: "1200",
    suffix: " Cr",
    label: "Salaries Disbursed",
    sublabel: "Securely processed",
    badge: "Financial Scale"
  },
  cards: [
    { icon: Activity, value: "45000", suffix: "+", label: "Payroll Cycles", sublabel: "Processed" },
    { icon: CheckCircle2, value: "100", suffix: "%", label: "Compliance", sublabel: "Statutory" },
    { icon: UserCheck, value: "18000", suffix: "+", label: "Employees", sublabel: "On Payroll" },
    { icon: Briefcase, value: "120", suffix: "+", label: "Active Clients", sublabel: "Industries" },
  ]
};

// === MAIN COMPONENT ===
export default function CredibilitySection({ type = "bpo" }) {
  const data = type === "bpo" ? bpoData : payrollData;
  const title = type === "bpo" ? "Skoal BPO" : "Skoal Payroll";
  const tagline = type === "bpo"
    ? "Customer Experience at Enterprise Scale"
    : "Precision Payroll, Zero Compromise";

  return (
    <section className="relative py-24 lg:py-32 bg-[#031A14] overflow-hidden">

      {/* === BACKGROUND === */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px]"
          animate={{ x: [0, 100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]"
          animate={{ x: [0, -80, 0], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* === CONTENT === */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4"
            >
              <Zap size={12} />
              {title} Stats
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
            >
              Trust, <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400">Quantified.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-emerald-100/50 max-w-md lg:text-right"
          >
            {tagline}
          </motion.p>
        </div>

        {/* === BENTO GRID === */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Hero Card - Spans 2x2 */}
          <HeroCard stat={data.hero} delay={0} />

          {/* Standard Cards */}
          {data.cards.slice(0, 2).map((stat, i) => (
            <StandardCard key={i} stat={stat} delay={0.1 + i * 0.1} />
          ))}

          {/* Wide Card - Spans 2 columns */}
          <WideCard stat={data.cards[2]} delay={0.3} />

          {/* Final Standard Card */}
          <StandardCard stat={data.cards[3]} delay={0.4} />

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="relative bg-emerald-500 rounded-3xl p-8 overflow-hidden cursor-pointer group"
          >
            <div className="relative z-10">
              <Globe size={32} className="text-[#031A14] mb-4" />
              <div className="text-[#031A14] text-xl font-bold mb-2">See It Live</div>
              <div className="text-[#031A14]/70 text-sm">Request a demo →</div>
            </div>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// === UTIL: Animated Counter ===
const AnimatedNumber = ({ value, duration = 2.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState("0");

  // Extract numeric part
  const numeric = parseFloat(value.toString().replace(/[^0-9.]/g, ''));

  useEffect(() => {
    if (isInView) {
      let start;
      const animate = (t) => {
        if (!start) start = t;
        const progress = Math.min((t - start) / (duration * 1000), 1);
        // Ease out quart
        const ease = 1 - Math.pow(1 - progress, 4);

        setDisplay((numeric * ease).toFixed(value.toString().includes(".") ? 1 : 0));

        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, numeric, duration, value]);

  return <span ref={ref}>{display}</span>;
};


// === STAT ITEM ===
const StatItem = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative pl-8 border-l border-emerald-500/20 hover:border-emerald-500 transition-colors duration-500"
    >
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-emerald-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

      {/* Number */}
      <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-none mb-4">
        <AnimatedNumber value={stat.value} />
        <span className="text-emerald-500">{stat.suffix}</span>
      </div>

      {/* Label */}
      <h3 className="text-xl text-white font-medium mb-1">{stat.label}</h3>

      {/* Sublabel */}
      <p className="text-sm text-white/50 font-mono uppercase tracking-wider">{stat.sublabel}</p>
    </motion.div>
  );
};


// === DATASETS ===
const bpoData = [
  { value: "25", suffix: "M", label: "Customer Interactions", sublabel: "Annually Handled" },
  { value: "99.8", suffix: "%", label: "SLA Compliance", sublabel: "Quality Assurance" },
  { value: "50", suffix: "+", label: "Enterprise Clients", sublabel: "Global Growth" },
  { value: "1200", suffix: "+", label: "Expert Agents", sublabel: "Deployed Worldwide" },
];

const payrollData = [
  { value: "1200", suffix: "Cr", label: "Annual Disbursement", sublabel: "Securely Processed" },
  { value: "45", suffix: "K", label: "Monthly Payslips", sublabel: "On-Time Cycles" },
  { value: "100", suffix: "%", label: "Statutory Compliance", sublabel: "Zero Liability" },
  { value: "18", suffix: "K", label: "Active Workforce", sublabel: "Managed on Roll" },
];


export default function CredibilitySection({ type = "bpo" }) {
  const stats = type === "bpo" ? bpoData : payrollData;
  const isBPO = type === "bpo";

  // Custom text for header
  const titleLine1 = isBPO ? "Global Scale," : "Secure Scale,";
  const titleLine2 = isBPO ? "Local Precision." : "Precision Control.";

  return (
    <section id={type === "bpo" ? "credibility-bpo" : "compliance"} className="relative py-24 lg:py-40 bg-[#051F18] overflow-hidden">

      {/* === BACKGROUND === */}
      {/* Large Typography Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.03]">
        <div className="text-[20vw] font-bold text-transparent leading-none" style={{ WebkitTextStroke: '2px #fff' }}>
          {type === "bpo" ? "SCALE" : "TRUST"}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

          {/* LEFT COLUMN: Header & Context */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Tag */}
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-12 h-[1px] bg-emerald-500"></div>
                <span className="text-emerald-400 font-mono uppercase tracking-[0.2em] text-sm">The Numbers</span>
              </div>

              {/* Headline */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-[0.95] mb-10">
                <span className="block">{titleLine1}</span>
                <span className="block text-white/40">{titleLine2}</span>
              </h2>

              {/* Description */}
              <p className="text-lg text-white/60 leading-relaxed max-w-md mb-12">
                {isBPO
                  ? "Delivering consistent, high-quality customer experiences requires robust infrastructure and a relentless focus on metrics."
                  : "Managing complex workforce payroll demands a zero-error approach. Our numbers reflect a legacy of trust and operational excellence."
                }
              </p>

              {/* Link */}
              <motion.button
                whileHover={{ x: 10 }}
                className="group flex items-center gap-2 text-emerald-400 font-bold tracking-wide"
              >
                SEE CASE STUDIES
                <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Stats Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:pt-8">
              {stats.map((stat, i) => (
                <StatItem key={i} stat={stat} index={i} />
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

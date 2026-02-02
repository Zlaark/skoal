"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Briefcase, MapPin, RefreshCcw, ArrowRight, CheckCircle2, Globe, Sparkles } from "lucide-react";

const opportunities = [
  {
    id: 1,
    title: "High-Volume Workforce",
    subtitle: "Blue-Collar Sourcing",
    desc: "Rapid deployment of skilled labor for industrial and logistical operations. Pre-vetted pools ready for immediate dispatch.",
    icon: Users,
    color: "emerald",
    stat: "48hr",
    statLabel: "Deployment"
  },
  {
    id: 2,
    title: "Operational Talent",
    subtitle: "White-Collar & Admin",
    desc: "Precision matching for supervisors, administrative staff, and mid-level management to ensure operational continuity.",
    icon: Briefcase,
    color: "teal",
    stat: "95%",
    statLabel: "Retention"
  },
  {
    id: 3,
    title: "Hyperlocal Sourcing",
    subtitle: "Community Driven",
    desc: "Leveraging local networks and referral engines to source candidates who live closer to the worksite, reducing attrition.",
    icon: MapPin,
    color: "indigo",
    stat: "100%",
    statLabel: "Local"
  },
  {
    id: 4,
    title: "SLA-Based Fulfillment",
    subtitle: "Guaranteed Performance",
    desc: "Strict adherence to Service Level Agreements for replacement timelines and fill rates. We take ownership of the headcount.",
    icon: RefreshCcw,
    color: "sky",
    stat: "4hr",
    statLabel: "Replacement"
  }
];

export default function RecruitmentSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} id="recruitment" className="py-32 bg-white relative overflow-hidden">
      {/* Background Texture - Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="container mx-auto relative z-10" style={{ padding: '0 clamp(0.75rem, 3vw, 3rem)' }}>
        {/* Section Header - Centered & Clean */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-xs font-mono font-medium mb-6 uppercase tracking-wider"
          >
            <Globe size={12} className="text-emerald-500" />
            Integrated Talent Pipeline
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Recruitment as an Extension of <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">
              Your Payroll Strategy.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Headcount isn't just a number; it's an operation. We unify sourcing and payrolling to eliminate friction, ensuring speed without compromising compliance.
          </motion.p>
        </div>

        {/* The "Talent Grid" - Zoom-responsive layout */}
        <div
          className="flex flex-wrap lg:flex-nowrap justify-center items-stretch"
          style={{ gap: 'clamp(0.5rem, 1vw, 1rem)' }}
        >
          {opportunities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 w-full md:w-[calc(50%-0.5rem)] lg:flex-1 flex flex-col"
              style={{
                padding: 'clamp(0.75rem, 1.5vw, 2rem)'
              }}
            >
              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-emerald-500/10 transition-colors duration-500" />

              {/* Icon */}
              <div
                className={`rounded-2xl bg-${item.color}-50 flex items-center justify-center text-${item.color}-600 group-hover:scale-110 transition-transform duration-500`}
                style={{
                  width: 'clamp(2.5rem, 3.5vw, 3.5rem)',
                  height: 'clamp(2.5rem, 3.5vw, 3.5rem)',
                  marginBottom: 'clamp(1rem, 2vw, 2rem)'
                }}
              >
                <item.icon strokeWidth={1.5} className="text-slate-900" style={{ width: 'clamp(1.25rem, 1.6vw, 1.625rem)', height: 'clamp(1.25rem, 1.6vw, 1.625rem)' }} />
              </div>

              {/* Content */}
              <div className="flex-1" style={{ marginBottom: 'clamp(0.75rem, 1.5vw, 2rem)' }}>
                <div
                  className="font-mono text-emerald-600 font-bold tracking-wider uppercase"
                  style={{ fontSize: 'clamp(0.625rem, 0.75vw, 0.75rem)', marginBottom: 'clamp(0.25rem, 0.5vw, 0.5rem)' }}
                >
                  {item.subtitle}
                </div>
                <h3
                  className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors"
                  style={{ fontSize: 'clamp(0.9rem, 1.25vw, 1.25rem)', marginBottom: 'clamp(0.5rem, 0.75vw, 0.75rem)' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-slate-500 leading-relaxed"
                  style={{ fontSize: 'clamp(0.75rem, 0.875vw, 0.875rem)' }}
                >
                  {item.desc}
                </p>
              </div>

              {/* Footer Stat */}
              <div
                className="flex items-center justify-between border-t border-slate-50 font-mono mt-auto"
                style={{ paddingTop: 'clamp(0.5rem, 1vw, 1.5rem)', fontSize: 'clamp(0.625rem, 0.75vw, 0.75rem)' }}
              >
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Sparkles style={{ width: 'clamp(0.625rem, 0.75vw, 0.75rem)', height: 'clamp(0.625rem, 0.75vw, 0.75rem)' }} className="text-emerald-400" />
                  Metric
                </div>
                <div
                  className="text-slate-900 font-bold bg-slate-100 rounded"
                  style={{ padding: 'clamp(0.125rem, 0.25vw, 0.25rem) clamp(0.375rem, 0.5vw, 0.5rem)' }}
                >
                  {item.stat} <span className="text-slate-400 font-normal ml-1">{item.statLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// --- Advanced Code-Based Graphics ---

// 1. Delivery Fleet Animation (Multi-Agent System)
const DeliveryGraphic = () => (
  <div className="relative w-full h-full bg-[#022c22] flex items-center justify-center overflow-hidden">
    {/* Map Grid */}
    <div className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: 'linear-gradient(#065f46 1px, transparent 1px), linear-gradient(90deg, #065f46 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}
    />

    {/* Delivery Paths - Multiple Agents */}
    <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 200 100" preserveAspectRatio="none">
      {[1, 2, 3].map((i) => (
        <motion.path
          key={i}
          d={`M ${20 * i} 100 Q ${50 + i * 10} 20 ${100 + i * 20} ${10 + i * 10}`}
          fill="none"
          stroke="#10b981"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 2, delay: i * 0.5 }}
        />
      ))}
    </svg>

    {/* Active Rider Nodes */}
    {[1, 2, 3].map((i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]"
        animate={{
          x: [0, 80 + i * 20, 150],
          y: [80, 20 + i * 10, -20],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 1.2
        }}
      />
    ))}

    {/* Central Hub */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-16 h-16 bg-emerald-500/10 rounded-full animate-ping absolute inset-0" />
      <div className="w-16 h-16 border border-emerald-500/30 rounded-full flex items-center justify-center backdrop-blur-sm relative z-10">
        <div className="w-3 h-3 bg-emerald-400 rounded-sm" />
      </div>
    </div>
  </div>
);

// 2. Neural Network Animation (AI Support)
const SupportGraphic = () => (
  <div className="relative w-full h-full bg-[#0f172a] flex items-center justify-center overflow-hidden">
    {/* Connecting Lines */}
    <svg className="absolute inset-0 w-full h-full">
      <motion.line x1="20%" y1="20%" x2="80%" y2="80%" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.2" />
      <motion.line x1="80%" y1="20%" x2="20%" y2="80%" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.2" />
      <motion.line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.2" />
      <motion.line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.2" />
    </svg>

    {/* Central AI Core */}
    <div className="relative z-10">
      <motion.div
        className="w-12 h-12 bg-blue-500/20 rounded-full backdrop-blur-md border border-blue-400/50 flex items-center justify-center"
        animate={{ boxShadow: ["0 0 0px rgba(59,130,246,0)", "0 0 20px rgba(59,130,246,0.5)", "0 0 0px rgba(59,130,246,0)"] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-4 h-4 bg-blue-400 rounded-full" />
      </motion.div>
    </div>

    {/* Orbiting Data Nodes */}
    {[0, 90, 180, 270].map((deg, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-blue-300 rounded-full"
        style={{ rotate: deg }}
        animate={{ rotate: deg + 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full translate-x-12" /> {/* Orbit Radius via transform */}
      </motion.div>
    ))}

    {/* Processing Waves */}
    <div className="absolute bottom-4 right-4 flex gap-1 items-end h-8">
      {[1, 2, 3, 4].map(i => (
        <motion.div
          key={i}
          className="w-1 bg-blue-500/50"
          animate={{ height: ["20%", "100%", "20%"] }}
          transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
        />
      ))}
    </div>
  </div>
);

// 3. Compliance Scanner Animation (Security)
const ComplianceGraphic = () => (
  <div className="relative w-full h-full bg-[#1e1b4b] flex items-center justify-center overflow-hidden">
    {/* Hex Grid Background */}
    <div className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: 'radial-gradient(circle, #a855f7 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
    />

    {/* Scanning Bar */}
    <motion.div
      className="absolute top-0 bottom-0 w-1 bg-purple-500/50 blur-[2px] z-10"
      animate={{ left: ["0%", "100%", "0%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />

    {/* Lock Mechanism */}
    <div className="relative border-2 border-purple-500/30 w-24 h-24 rounded-2xl flex items-center justify-center bg-purple-900/20 backdrop-blur-sm">
      <motion.div
        className="w-16 h-16 border border-purple-400/50 rounded-xl flex items-center justify-center"
        animate={{ rotate: 90 }}
        transition={{ duration: 0.5, delay: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <div className="w-8 h-8 bg-purple-500 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.6)]" />
      </motion.div>

      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-purple-400" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-purple-400" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-purple-400" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-400" />
    </div>
  </div>
);


const cases = [
  {
    id: "qcommerce",
    client: "Zepto / Blinkit",
    category: "Quick Commerce",
    title: "Scaling 10-Min Deliveries",
    desc: "Orchestrating a massive fleet expansion across 12 cities.",
    stat: "15,000+",
    statLabel: "Riders Deployed",
    Graphic: DeliveryGraphic,
    bg: "hover:bg-[#022c22]/50", // Dark transparent hover
    border: "group-hover:border-emerald-500/50"
  },
  {
    id: "bpo",
    client: "Global Fintech",
    category: "AI Support",
    title: "Hybrid CX Architecture",
    desc: "Hybrid AI + Human support handling 1M+ tickets.",
    stat: "40%",
    statLabel: "Cost Reduction",
    Graphic: SupportGraphic,
    bg: "hover:bg-blue-950/30",
    border: "group-hover:border-blue-500/50"
  },
  {
    id: "manufacturing",
    client: "Tata Electronics",
    category: "Compliance",
    title: "Zero-Error Governance",
    desc: "Statutory monitoring for 5,000+ staff in high-reg zones.",
    stat: "100%",
    statLabel: "Audit Success",
    Graphic: ComplianceGraphic,
    bg: "hover:bg-purple-900/30",
    border: "group-hover:border-purple-500/50"
  }
];

export default function Work() {
  return (
    <section className="bg-[#0f172a] py-32 text-white" id="work"> {/* Changed to Dark Background */}

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs mb-4 block">
              Impact Reports
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-sans leading-tight">
              Results by the <span className="text-emerald-400 font-serif italic">numbers.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm font-semibold uppercase tracking-wider cursor-pointer hover:text-white transition-colors">
            View All Case Studies <ArrowUpRight size={16} />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group bg-[#1e293b] rounded-3xl p-3 border border-slate-700/50 transition-all duration-300 flex flex-col ${item.border} hover:-translate-y-2`}
            >
              {/* Graphic Area */}
              <div className="h-56 w-full rounded-2xl overflow-hidden mb-6 relative border border-white/5">
                <item.Graphic />
              </div>

              {/* Content Area */}
              <div className="px-5 pb-6 flex-1 flex flex-col">
                <div className="mb-4 flex justify-between items-start">
                  <span className="text-[10px] font-bold text-emerald-400/80 uppercase tracking-widest border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                  {item.desc}
                </p>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-white">{item.stat}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{item.statLabel}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-emerald-500 group-hover:text-black transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

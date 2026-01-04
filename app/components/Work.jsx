"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

// --- HOLLYWOOD-SCALE HOLOGRAPHIC GRAPHICS ---

// 1. Delivery Fleet (The "Command Center" View)
const DeliveryHologram = () => (
  <div className="relative w-full h-full bg-[#020a05] flex items-center justify-center overflow-hidden rounded-3xl border border-emerald-900/30">
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-[#020a05] to-[#020a05]" />

    {/* Animated Grid Map */}
    <div className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        transform: 'perspective(500px) rotateX(60deg) scale(2)'
      }}
    />

    {/* Fleet Paths */}
    <svg className="absolute inset-0 w-full h-full opacity-80" viewBox="0 0 400 200" preserveAspectRatio="none">
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.path
          key={i}
          d={`M ${-50} ${100 + i * 20} Q ${200} ${-50 + i * 40} ${450} ${100 + i * 10}`}
          fill="none"
          stroke="#10b981"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 3, delay: i * 0.3, ease: "easeInOut" }}
        />
      ))}
    </svg>

    {/* Moving Riders */}
    {[1, 2, 3, 4, 5].map((i) => (
      <motion.div
        key={i}
        className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(16,185,129,1)] ring-2 ring-emerald-500"
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        style={{ offsetPath: `path("M -50 ${100 + i * 20} Q 200 ${-50 + i * 40} 450 ${100 + i * 10}")` }}
        transition={{ duration: 4 + i, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
      />
    ))}
  </div>
);

// 2. AI Neural Core (The "Brain") - SHIFTED TO TEAL
const AIHologram = () => (
  <div className="relative w-full h-full bg-[#020a05] flex items-center justify-center overflow-hidden rounded-3xl border border-teal-900/30">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-600/20 via-[#020a05] to-[#020a05]" />

    {/* Rotating Rings */}
    {[100, 180, 260].map((size, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border border-teal-500/20"
        style={{ width: size, height: size }}
        animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.05, 1] }}
        transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
      />
    ))}

    {/* Central Pulsing Nodes */}
    <div className="relative z-10 grid grid-cols-2 gap-8">
      {[1, 2, 3, 4].map(i => (
        <motion.div key={i} className="w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_20px_#2dd4bf]"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </div>

    {/* Connecting Synapses */}
    <svg className="absolute inset-0 w-full h-full stroke-teal-500/30">
      <motion.line x1="50%" y1="50%" x2="20%" y2="20%" animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.line x1="50%" y1="50%" x2="80%" y2="20%" animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
      <motion.line x1="50%" y1="50%" x2="20%" y2="80%" animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
      <motion.line x1="50%" y1="50%" x2="80%" y2="80%" animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} />
    </svg>
  </div>
);

// 3. Compliance Shield (The "Fortress")
const ShieldHologram = () => (
  <div className="relative w-full h-full bg-[#020a05] flex items-center justify-center overflow-hidden rounded-3xl border border-emerald-900/30">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-600/20 via-[#020a05] to-[#020a05]" />

    {/* Hexagon Mesh */}
    <div className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
    />

    {/* Scanning Laser */}
    <motion.div
      className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent shadow-[0_0_20px_#10b981]"
      animate={{ top: ["0%", "100%", "0%"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />

    {/* Central Lock */}
    <motion.div
      className="relative z-10 w-32 h-32 border-2 border-emerald-500/50 rounded-2xl flex items-center justify-center backdrop-blur-md bg-emerald-900/10"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <CheckCircle2 size={48} className="text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
      {/* Corner Brackets */}
      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-emerald-500" />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-emerald-500" />
    </motion.div>
  </div>
);


const cases = [
  {
    id: "qcommerce",
    client: "Zepto / Blinkit",
    category: "Quick Commerce",
    title: "Orchestrating the 10-Minute Promise",
    desc: "When every second counts, traditional hiring fails. We built a rapid-response fleet engine that scales dynamically with demand surges.",
    stat: "15k+",
    statLabel: "Riders Deployed",
    Graphic: DeliveryHologram,
    align: "left", // Graphic Left
    accent: "emerald"
  },
  {
    id: "bpo",
    client: "Global Fintech Giants",
    category: "AI Support",
    title: "The Hybrid CX Architecture",
    desc: "Balancing human empathy with AI precision. Our hybrid support model reduced ticket resolution time while boosting customer satisfaction scores.",
    stat: "40%",
    statLabel: "Cost Reduction",
    Graphic: AIHologram,
    align: "right", // Graphic Right
    accent: "teal"
  },
  {
    id: "manufacturing",
    client: "Tata Electronics",
    category: "Governance",
    title: "Zero-Error Compliance Shield",
    desc: "Managing statutory compliance for 5,000+ staff in sensitive manufacturing zones. 100% audit readiness, zero legal leakage.",
    stat: "100%",
    statLabel: "Audit Success",
    Graphic: ShieldHologram,
    align: "left", // Graphic Left
    accent: "emerald"
  }
];

// --- FEATURE ROW COMPONENT ---
function FeatureRow({ item, index }) {
  // Zig-Zag Logic
  const isGraphicLeft = item.align === "left";

  return (
    <div className="min-h-[80vh] flex items-center py-20">
      <div className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full ${!isGraphicLeft ? "lg:auto-cols-fr" : ""}`}>

        {/* Graphic Column */}
        <motion.div
          className={`relative h-[400px] lg:h-[600px] w-full ${!isGraphicLeft ? "lg:order-2" : "lg:order-1"}`}
          initial={{ opacity: 0, x: isGraphicLeft ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Localized Spotlight Gradient */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-40 blur-[80px] rounded-full
             ${item.accent === 'emerald' ? 'bg-emerald-500/20' :
              item.accent === 'teal' ? 'bg-teal-500/20' :
                'bg-emerald-500/20'}`}
          />

          <item.Graphic />
          {/* Cinematic Caption */}
          <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur border border-white/10 px-4 py-2 rounded-lg text-xs font-mono text-white/70">
            SYS.VISUAL // {item.category.toUpperCase()}
          </div>
        </motion.div>

        {/* Content Column */}
        <motion.div
          className={`relative z-10 ${!isGraphicLeft ? "lg:order-1 lg:text-right items-end" : "lg:order-2 lg:text-left items-start"} flex flex-col`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          {/* Tag */}
          <span className={`inline-block px-3 py-1 rounded border mb-6 text-xs font-bold tracking-widest uppercase
            ${item.accent === "emerald" ? "border-emerald-500/30 text-emerald-400 bg-emerald-950/30" :
              item.accent === "teal" ? "border-teal-500/30 text-teal-400 bg-teal-950/30" :
                "border-emerald-500/30 text-emerald-400 bg-emerald-950/30"}
          `}>
            {item.client}
          </span>

          <h3 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
            {item.title}
          </h3>

          <p className="text-slate-400 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
            {item.desc}
          </p>

          {/* Integrated Scale Stat */}
          <div className={`flex items-center gap-6 ${!isGraphicLeft ? "flex-row-reverse" : "flex-row"}`}>
            <div className={`w-[1px] h-16 ${item.accent === 'emerald' ? 'bg-emerald-500' : 'bg-teal-500'}`} />
            <div className={`${!isGraphicLeft ? "text-right" : "text-left"}`}>
              <div className="text-5xl lg:text-6xl font-serif italic text-white mb-1">
                {item.stat}
              </div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                {item.statLabel}
              </div>
            </div>
          </div>



        </motion.div>

      </div>
    </div>
  );
}

export default function Work() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="bg-[#020a05] relative text-white py-0 overflow-hidden" id="work">

      {/* --- PREMIUM ACTIVE BACKGROUND --- */}

      {/* 1. Deep Atmospheric Base (Gradients) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Top Left Glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] bg-emerald-900/20 rounded-full blur-[120px]"
        />
        {/* Bottom Right Glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] -right-[20%] w-[80vw] h-[80vw] bg-teal-900/20 rounded-full blur-[120px]"
        />
        {/* Moving Aurora Streak */}
        <motion.div
          animate={{ rotate: [0, 10, 0], x: [-50, 50, -50] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[20%] w-[60vw] h-[400px] bg-gradient-to-r from-emerald-800/10 to-teal-800/10 rotate-12 blur-[100px]"
        />
      </div>

      {/* 2. Cinematic Grain/Noise (Texture) */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />

      {/* 3. Subtle Tech Grid (Depth) */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>

      {/* 4. Vignette for Focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020a05_100%)] pointer-events-none" />


      {/* Smooth Transition Gradient from Top */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-[#134538] to-transparent opacity-90 pointer-events-none z-10" />

      {/* Header Section */}
      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-16 relative z-20 text-center">
        <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">
          Impact Stories
        </span>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Engineering <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">velocity.</span>
        </h2>
      </div>

      {/* Alternating Feature Rows */}
      <div className="container mx-auto px-6 lg:px-12 pb-32 relative z-20">
        {cases.map((item, index) => (
          <FeatureRow key={item.id} item={item} index={index} />
        ))}
      </div>

    </section>
  );
}
// End of file


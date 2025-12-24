"use client";

import { motion } from "framer-motion";
import { Bot, Phone, Share2, Zap, BrainCircuit, MessageSquare, Mail, ArrowRight } from "lucide-react";

export default function TechStack() {
  return (
    <section className="relative py-32 bg-slate-50 overflow-hidden" id="tech-stack">

      {/* Background Grid - Subtle Engineering Graph */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 border border-slate-300 text-xs font-mono text-slate-600 mb-6 uppercase tracking-widest"
          >
            <Zap size={12} className="text-amber-500" />
            <span>Neural Architecture</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Intelligent <span className="text-emerald-600 font-serif italic">Routing.</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            From raw signal to intelligent action in milliseconds. Our AI engine processes intent, sentiment, and context in real-time.
          </p>
        </div>

        {/* --- THE NEURAL GRID VISUALIZATION --- */}
        <div className="relative grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">

          {/* SVG Connecting Lines (Visible only on LG screens) */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-20 hidden lg:block pointer-events-none z-0">
            <svg className="w-full h-full" overflow="visible">
              {/* Line 1: Input to Core */}
              <motion.path
                d="M 200,40 L 450,40"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <motion.circle r="3" fill="#10b981">
                <motion.animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  path="M 200,40 L 450,40"
                />
              </motion.circle>

              {/* Line 2: Core to Output */}
              <motion.path
                d="M 650,40 L 900,40"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <motion.circle r="3" fill="#10b981">
                <motion.animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  path="M 650,40 L 900,40"
                  begin="1s"
                />
              </motion.circle>
            </svg>
          </div>



          {/* --- COLUMN 1: INPUT SIGNALS --- */}
          <div className="space-y-4 relative z-10">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest text-center mb-4">Incoming Signals</div>

            <SignalCard icon={Phone} label="Voice Calls" sub="PSTN / SIP" delay={0} color="blue" />
            <SignalCard icon={Mail} label="Email Inbound" sub="SMTP / IMAP" delay={0.1} color="purple" />
            <SignalCard icon={MessageSquare} label="Live Chat" sub="WebSocket" delay={0.2} color="orange" />
          </div>


          {/* --- COLUMN 2: THE CORE (PROCESSING) --- */}
          <div className="relative z-10 flex flex-col items-center justify-center py-12 lg:py-0">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest text-center mb-6">Processing Core</div>

            {/* Central Processor Node */}
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Spinning Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-slate-200 rounded-full border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[20px] border border-emerald-100 rounded-full"
              />

              {/* Core Brain */}
              <div className="relative w-32 h-32 bg-white rounded-full shadow-2xl shadow-emerald-100 flex items-center justify-center border border-slate-100 z-20">
                <BrainCircuit size={48} className="text-emerald-600" />
                {/* Pulse Effect */}
                <div className="absolute inset-0 bg-emerald-500/10 rounded-full animate-ping" />
              </div>

              {/* Labels */}
              <div className="absolute top-0 bg-white border border-slate-200 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600 shadow-sm transform -translate-y-1/2">
                INTENT ANALYSIS
              </div>
              <div className="absolute bottom-0 bg-white border border-slate-200 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600 shadow-sm transform translate-y-1/2">
                SENTIMENT SCORING
              </div>
            </div>
          </div>


          {/* --- COLUMN 3: OUTPUT ACTION --- */}
          <div className="space-y-4 relative z-10">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest text-center mb-4">Intelligent Action</div>

            <ResultCard
              title="Smart Routing"
              stat="40%"
              statLabel="Wait Reduction"
              desc="Route to best agent based on intent."
              delay={0.4}
            />
            <ResultCard
              title="Predictive Dialing"
              stat="3x"
              statLabel="Connect Rate"
              desc="Filter busies & voicemails."
              delay={0.5}
            />
          </div>

        </div>

      </div>
    </section>
  );
}

function SignalCard({ icon: Icon, label, sub, delay, color }) {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
    orange: "bg-orange-50 text-orange-600 border-orange-100"
  }
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className={`p-3 rounded-lg ${colorClasses[color]} border`}>
        <Icon size={20} />
      </div>
      <div>
        <div className="font-semibold text-slate-800 text-sm">{label}</div>
        <div className="text-xs text-slate-400 font-mono">{sub}</div>
      </div>
      <ArrowRight size={14} className="ml-auto text-slate-300" />
    </motion.div>
  )
}

function ResultCard({ title, stat, statLabel, desc, delay }) {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-6 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-1 transition-transform"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-bold text-slate-900">{title}</h4>
          <p className="text-xs text-slate-500 mt-1">{desc}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-emerald-600">{stat}</div>
          <div className="text-[10px] text-slate-400 uppercase tracking-wider">{statLabel}</div>
        </div>
      </div>
      <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ delay: delay + 0.2, duration: 1 }}
          className="h-full bg-emerald-500"
        />
      </div>
    </motion.div>
  )
}

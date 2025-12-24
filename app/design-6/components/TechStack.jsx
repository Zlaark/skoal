"use client";

import { motion } from "framer-motion";
import { Mic2, Share2, PhoneForwarded, Database, Bot, Lock } from "lucide-react";

const features = [
  {
    title: "AI-Powered Outbound",
    desc: "Automated calling workflows that scale instantly.",
    icon: <Bot size={24} />
  },
  {
    title: "Smart Call Routing",
    desc: "Intelligent IVR reducing wait times by 40%.",
    icon: <Share2 size={24} />
  },
  {
    title: "Predictive Dialers",
    desc: "Maximizing agent connect rates with AI prediction.",
    icon: <PhoneForwarded size={24} />
  },
  {
    title: "Voice Blasts",
    desc: "Pre-recorded campaigns for mass outreach.",
    icon: <Mic2 size={24} />
  },
  {
    title: "Whitelisted CRMs",
    desc: "Secure integrations with your existing stack.",
    icon: <Database size={24} />
  },
  {
    title: "Data Security",
    desc: "Enterprise-grade encryption and compliance.",
    icon: <Lock size={24} />
  }
];

export default function TechStack() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-semibold tracking-widest uppercase text-xs mb-3 block"
          >
            Future-Ready Infrastructure
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
          >
            Orchestrated by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Intelligence.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-slate-500 text-lg"
          >
            Our operations are backed by securely whitelisted CRMs, AI-driven dialers, and custom ticketing systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-emerald-500">
                {feature.icon}
              </div>

              <div className="w-12 h-12 rounded-xl bg-white shadow-sm text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">{feature.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">{feature.desc}</p>

              {/* Bottom line animation */}
              <div className="absolute bottom-0 left-0 h-1 bg-emerald-500 w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

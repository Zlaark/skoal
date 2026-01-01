"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Globe,
  Send,
  CheckCircle2,
  Building2,
  Clock,
  Sparkles,
  Zap,
  Network
} from "lucide-react";

/**
 * THE GLOBAL NEXUS (Contact Page)
 * 
 * Concept: "Digital Command Center" - Light Mode Edition
 * - Clean, airy, white/emerald theme.
 * - "Data Sphere": A holographic globe that feels weightless.
 * - "Glass Monolith": The form is a pristine frosted glass panel.
 */

// --- 1. THE DATA SPHERE COMPONENT ---
function DataSphere() {
  return (
    <div className="relative w-80 h-80 lg:w-[500px] lg:h-[500px] perspective-1000">

      {/* Core Glow */}
      <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-[80px] animate-pulse" />

      {/* The Sphere Container */}
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: 360, rotateX: 15 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Longitudinal Lines (Meridians) */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`long-${i}`}
            className="absolute inset-0 rounded-full border border-emerald-500/30"
            style={{
              transform: `rotateY(${i * 30}deg)`
            }}
          />
        ))}

        {/* Latitudinal Lines (Parallels) */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`lat-${i}`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/20"
            style={{
              width: `${100 - (i * 15)}%`,
              height: `${100 - (i * 15)}%`,
              transform: `rotateX(90deg) translateZ(${i * 10}px)` // Mock 3D effect
            }}
          />
        ))}

        {/* Floating Data Nodes (Satellites) */}
        <motion.div
          className="absolute top-0 left-1/2 w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.8)]"
          animate={{ y: [0, 20, 0] }}
          style={{ transform: 'translateX(-50%) translateZ(250px)' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.8)]"
          style={{ transform: 'translateZ(200px)' }}
        />

        {/* Inner Core */}
        <div className="absolute inset-[20%] bg-linear-to-br from-emerald-100/50 to-teal-50/20 rounded-full backdrop-blur-sm" />
      </motion.div>

      {/* Orbital Ring 1 */}
      <motion.div
        className="absolute inset-[-40px] border border-emerald-500/10 rounded-full border-dashed"
        animate={{ rotateZ: -360, rotateX: 60 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Orbital Ring 2 */}
      <motion.div
        className="absolute inset-[-80px] border border-teal-500/10 rounded-full"
        animate={{ rotateZ: 360, rotateX: -60 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-teal-500/50 rounded-full" />
      </motion.div>
    </div>
  );
}

// --- 2. CONTACT INFO CARD ---
function NexusCard({ icon: Icon, title, value, href, delay }) {
  return (
    <motion.a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="group flex items-center gap-5 p-6 bg-white/60 backdrop-blur-md rounded-3xl border border-white/80 shadow-lg hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200 transition-all duration-300 relative overflow-hidden"
    >
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-r from-emerald-50/0 via-emerald-50/50 to-emerald-50/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

      <div className="relative z-10 w-14 h-14 rounded-2xl bg-white shadow-sm border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} />
      </div>
      <div className="relative z-10">
        <div className="text-xs font-bold text-emerald-600/60 uppercase tracking-widest mb-1">{title}</div>
        <div className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">{value}</div>
      </div>
    </motion.a>
  );
}

// --- 3. MAIN PAGE COMPONENT ---
export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen bg-[#F0FDF4] overflow-hidden py-24 lg:py-32 selection:bg-emerald-200 selection:text-emerald-900">

      {/* === THE NEURAL GRID BACKGROUND === */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base Grid */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#F0FDF4_80%)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* HEADER: COMMAND CENTER TITLE */}
        <div className="text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-emerald-100 shadow-sm mb-8"
          >
            <Network size={16} className="text-emerald-500" />
            <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">Global Nexus</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tight leading-[0.9]"
          >
            Initialize <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 via-teal-500 to-emerald-600">Connection.</span>
          </motion.h1>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* LEFT COLUMN: THE DATA SPHERE (VISUAL) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end order-2 lg:order-1">
            <div className="relative">
              <DataSphere />

              {/* Floating Info Cards around the Sphere */}
              <div className="absolute -left-12 top-20 hidden lg:block">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/80 backdrop-blur rounded-2xl p-4 shadow-lg border border-emerald-100"
                >
                  <Globe className="text-emerald-500 mb-2" size={20} />
                  <div className="text-xs font-bold text-slate-900">Global Reach</div>
                  <div className="text-[10px] text-slate-500">Connecting 5 Regions</div>
                </motion.div>
              </div>

              <div className="absolute -right-0 bottom-20 hidden lg:block">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white/80 backdrop-blur rounded-2xl p-4 shadow-lg border border-emerald-100"
                >
                  <Building2 className="text-teal-500 mb-2" size={20} />
                  <div className="text-xs font-bold text-slate-900">HQ: Dubai</div>
                  <div className="text-[10px] text-slate-500">Operational Hub</div>
                </motion.div>
              </div>
            </div>

            {/* Contact Links (Mobile/Tablet Friendly Layout) */}
            <div className="w-full max-w-md space-y-4 mt-12 lg:mt-0 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-full lg:pr-12">
              {/* On Desktop these would be positioned differently, but keeping distinct for clarity */}
            </div>
          </div>

          {/* RIGHT COLUMN: THE GLASS MONOLITH (FORM) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="grid lg:grid-cols-2 gap-8">

              {/* Contact Details Column */}
              <div className="space-y-4">
                <NexusCard icon={MapPin} title="Headquarters" value="Dubai, UAE" delay={0.2} />
                <NexusCard icon={Mail} title="Email Us" value="info@skoal.com" href="mailto:info@skoal.com" delay={0.3} />
                <NexusCard icon={Phone} title="Call Us" value="+971 4 123 4567" href="tel:+97141234567" delay={0.4} />
                <NexusCard icon={Clock} title="Working Hours" value="Mon-Fri, 9am-6pm" delay={0.5} />
              </div>

              {/* The Form Itself */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative bg-white/80 backdrop-blur-2xl rounded-[3rem] p-8 lg:p-10 shadow-2xl shadow-emerald-500/10 border border-white"
              >
                {/* Glossy Overlay */}
                <div className="absolute inset-0 rounded-[3rem] bg-linear-to-b from-white/60 to-transparent pointer-events-none" />

                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12 relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 size={48} className="text-emerald-500" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">Transmission Received</h3>
                    <p className="text-slate-500">Our team is analyzing your data request.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-slate-900">Send a Transmission</h3>
                      <p className="text-slate-500 text-sm">Our neural network responds within 24 hours.</p>
                    </div>

                    <div className="space-y-4">
                      <div className="group">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4 mb-2 block group-focus-within:text-emerald-600 transition-colors">Identity</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:bg-white focus:border-emerald-400 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] transition-all font-medium text-slate-800"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="group">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4 mb-2 block group-focus-within:text-emerald-600 transition-colors">Frequency (Email)</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:bg-white focus:border-emerald-400 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] transition-all font-medium text-slate-800"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="group">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4 mb-2 block group-focus-within:text-emerald-600 transition-colors">Data Packet (Message)</label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:bg-white focus:border-emerald-400 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] transition-all font-medium text-slate-800 resize-none"
                          placeholder="Tell us about your mission..."
                        />
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-5 rounded-2xl bg-emerald-600 text-white font-bold text-lg shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-3 hover:bg-emerald-500 transition-colors"
                    >
                      {isSubmitting ? (
                        <span className="animate-pulse">Uploading...</span>
                      ) : (
                        <>
                          Initiate Uplink <Send size={20} />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

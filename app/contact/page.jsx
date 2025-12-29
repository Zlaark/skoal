"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  const container = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fdfa] via-[#e6f9f3] to-[#f8fdfa] py-24 px-4 overflow-hidden selection:bg-emerald-200/20">
      {/* Aurora/gradient animated background */}
      <motion.div className="absolute -left-40 -top-40 w-[600px] h-[600px] rounded-full blur-[140px] bg-gradient-to-br from-emerald-300/30 via-teal-200/30 to-white/0 pointer-events-none" animate={{ scale: [1, 1.15, 1], rotate: [0, 30, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute -right-40 -bottom-40 w-[500px] h-[500px] rounded-full blur-[120px] bg-gradient-to-br from-teal-200/30 via-emerald-100/30 to-white/0 pointer-events-none" animate={{ scale: [1, 1.1, 1], rotate: [0, -30, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-emerald-400/10"
          style={{
            width: i % 3 === 0 ? 10 : i % 2 === 0 ? 8 : 6,
            height: i % 3 === 0 ? 10 : i % 2 === 0 ? 8 : 6,
            left: `${(i * 8 + 10) % 90}%`,
            top: `${(i * 13 + 20) % 90}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 6 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
        />
      ))}
      {/* Glassmorphic animated card layout */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* Info Card */}
        <motion.div variants={container} initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="rounded-3xl p-10 bg-white/60 border border-emerald-100 shadow-2xl backdrop-blur-xl flex flex-col justify-between">
          <motion.h2 className="text-2xl font-bold text-emerald-700 mb-2 tracking-tight">Contact Us</motion.h2>
          <motion.p className="text-slate-600 mb-6">Let’s build a compliant, scalable, and future-ready workforce together.</motion.p>
          <div className="space-y-5 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-xl">📍</span>
              <span className="text-slate-700 font-medium">India | Middle East</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">✉️</span>
              <a href="mailto:info@skoalsolutions.com" className="text-emerald-600 underline font-medium">info@skoalsolutions.com</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <a href="tel:+91XXXXXXXXXX" className="text-slate-700 font-medium">+91-XXXXXXXXXX</a>
            </div>
          </div>
          <motion.div className="h-32 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 flex items-center justify-center text-slate-400 text-sm">Map / Illustration</motion.div>
        </motion.div>
        {/* Form Card */}
        <motion.div variants={container} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="rounded-3xl p-10 bg-white shadow-2xl border border-emerald-100 flex flex-col justify-between">
          <motion.h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">Send us a message</motion.h3>
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.4 }} className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 text-3xl mb-4 shadow-lg">✓</motion.div>
              <div className="text-lg font-semibold mb-2">Thank you for reaching out!</div>
              <div className="text-slate-600 mb-6">We'll get back to you soon.</div>
              <button className="px-6 py-2 rounded-full bg-emerald-600 text-white font-bold shadow hover:bg-emerald-700 transition-all" onClick={() => setSubmitted(false)}>Send Another Message</button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div animate={focused === 'name' ? { boxShadow: '0 8px 32px rgba(16,185,129,0.10)' } : {}} transition={{ duration: 0.25 }} className="rounded-xl border border-slate-100 bg-white/80">
                  <label className="block text-xs font-medium text-slate-500 px-4 pt-3">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} placeholder="Your name" className="w-full px-4 py-3 bg-transparent rounded-b-xl outline-none" />
                </motion.div>
                <motion.div animate={focused === 'email' ? { boxShadow: '0 8px 32px rgba(16,185,129,0.10)' } : {}} transition={{ duration: 0.25 }} className="rounded-xl border border-slate-100 bg-white/80">
                  <label className="block text-xs font-medium text-slate-500 px-4 pt-3">Email</label>
                  <input name="email" value={form.email} onChange={handleChange} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} placeholder="you@email.com" className="w-full px-4 py-3 bg-transparent rounded-b-xl outline-none" />
                </motion.div>
              </div>
              <motion.div animate={focused === 'message' ? { boxShadow: '0 8px 32px rgba(16,185,129,0.10)' } : {}} transition={{ duration: 0.25 }} className="rounded-xl border border-slate-100 bg-white/80">
                <label className="block text-xs font-medium text-slate-500 px-4 pt-3">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} placeholder="How can we help you?" rows={5} className="w-full px-4 py-3 bg-transparent rounded-b-xl outline-none resize-none" />
              </motion.div>
              <div className="pt-3">
                <motion.button
                  whileHover={{ scale: 1.04, background: "linear-gradient(90deg,#10b981,#14b8a6)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-emerald-600 text-white font-bold shadow-lg transition-all text-lg"
                  style={{ position: 'relative', overflow: 'hidden' }}
                  disabled={loading}
                >
                  <span className="relative z-10">{loading ? 'Sending...' : 'Send Message'}</span>
                  <motion.span
                    animate={loading ? { rotate: 360 } : {}}
                    transition={{ duration: 1, repeat: loading ? Infinity : 0 }}
                    className="inline-block relative z-10"
                  >⟳</motion.span>
                  {/* Sheen effect */}
                  <motion.span
                    initial={{ x: '-100%' }}
                    animate={loading ? { x: ['-100%', '200%'] } : {}}
                    transition={{ duration: 1.2, repeat: loading ? Infinity : 0, ease: 'linear' }}
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 opacity-60"
                  />
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}


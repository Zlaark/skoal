"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }, 1200); // Simulate async
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#fafafa] via-slate-50 to-[#fafafa] py-24 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute w-[500px] h-[500px] bg-emerald-200/30 blur-[120px] rounded-full left-[-10%] top-[-20%]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-teal-200/20 blur-[100px] rounded-full right-[-10%] bottom-[-20%]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto bg-white/90 rounded-3xl shadow-xl p-10 md:p-16 border border-emerald-100 backdrop-blur-md">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl font-bold text-emerald-700 mb-6 text-center"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-xl text-slate-600 mb-8 text-center"
        >
          Let’s build a compliant, scalable, and future-ready workforce together.
        </motion.p>
        <div className="space-y-6 text-center mb-10">
          <div>
            <span className="block text-lg font-semibold text-slate-700">Skoal Solutions Pvt. Ltd.</span>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center md:gap-8 gap-2 items-center text-slate-600">
            <span className="flex items-center gap-2">📍 <span>India | Middle East</span></span>
            <span className="flex items-center gap-2">📧 <a href="mailto:info@skoalsolutions.com" className="underline hover:text-emerald-600">info@skoalsolutions.com</a></span>
            <span className="flex items-center gap-2">📞 <a href="tel:+91XXXXXXXXXX" className="underline hover:text-emerald-600">+91-XXXXXXXXXX</a></span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="text-emerald-600 text-4xl mb-2">✓</div>
              <div className="text-lg font-semibold mb-2">Thank you for reaching out!</div>
              <div className="text-slate-600">We'll get back to you soon.</div>
              <button
                className="mt-6 px-6 py-2 rounded-full bg-emerald-600 text-white font-bold shadow hover:bg-emerald-700 transition-all"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-400 focus:ring-emerald-100 outline-none bg-white/80"
                    placeholder="Your Name"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-400 focus:ring-emerald-100 outline-none bg-white/80"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-400 focus:ring-emerald-100 outline-none bg-white/80 resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-block px-8 py-4 bg-emerald-600 text-white font-bold rounded-full shadow-lg hover:bg-emerald-700 transition-all text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  Sparkles
} from "lucide-react";

// Animated Globe Component
function AnimatedGlobe() {
  return (
    <div className="relative w-72 h-72 lg:w-96 lg:h-96">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-[60px] animate-pulse" />

      {/* Globe Container */}
      <motion.div
        className="relative w-full h-full rounded-full bg-gradient-to-br from-[#0A261D] to-emerald-900 border-2 border-emerald-500/30 shadow-2xl shadow-emerald-900/50 overflow-hidden"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {/* Latitude Lines */}
        {[20, 40, 60, 80].map((top, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-[1px] bg-emerald-500/20"
            style={{ top: `${top}%` }}
          />
        ))}

        {/* Longitude Lines */}
        {[20, 40, 60, 80].map((left, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-[1px] bg-emerald-500/20"
            style={{ left: `${left}%` }}
          />
        ))}

        {/* Location Dots - India & Middle East */}
        <motion.div
          className="absolute w-4 h-4 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"
          style={{ top: "45%", left: "65%" }}
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-3 h-3 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50"
          style={{ top: "40%", left: "55%" }}
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
      </motion.div>

      {/* Orbit Ring */}
      <motion.div
        className="absolute inset-[-20px] border border-emerald-500/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-400 rounded-full shadow-lg" />
      </motion.div>
    </div>
  );
}

// Contact Info Card
function ContactCard({ icon, title, value, href }) {
  return (
    <motion.a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-100 transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">{title}</div>
        <div className="text-slate-900 font-semibold group-hover:text-emerald-700 transition-colors">{value}</div>
      </div>
    </motion.a>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen bg-[#fafafa] overflow-hidden py-20 lg:py-32">
      {/* === ANIMATED BACKGROUNDS === */}

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

      {/* Animated Blobs */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2], y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <Sparkles size={16} className="text-emerald-600" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6">
            Let's <span className="text-emerald-600 font-serif italic">Connect</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Build a compliant, scalable, and future-ready workforce with Skoal Solutions.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Globe + Contact Info */}
          <motion.div
            className="flex flex-col items-center lg:items-start gap-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Animated Globe */}
            <div className="flex justify-center w-full">
              <AnimatedGlobe />
            </div>

            {/* Contact Cards */}
            <div className="grid gap-4 w-full max-w-md">
              <ContactCard
                icon={<MapPin size={22} />}
                title="Locations"
                value="India | Middle East"
              />
              <ContactCard
                icon={<Mail size={22} />}
                title="Email"
                value="info@skoalsolutions.com"
                href="mailto:info@skoalsolutions.com"
              />
              <ContactCard
                icon={<Phone size={22} />}
                title="Phone"
                value="+91-XXXXXXXXXX"
                href="tel:+91XXXXXXXXXX"
              />
              <ContactCard
                icon={<Clock size={22} />}
                title="Business Hours"
                value="Mon - Fri, 9 AM - 6 PM IST"
              />
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative bg-white rounded-[2rem] p-8 lg:p-12 shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
                <motion.div
                  className="absolute inset-0 w-[300%] bg-gradient-to-r from-transparent via-emerald-50/50 to-transparent skew-x-12"
                  animate={{ x: ['-300%', '300%'] }}
                  transition={{ duration: 6, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                />
              </div>

              {/* Top Border Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

              {isSubmitted ? (
                /* Success State */
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Sent!</h3>
                  <p className="text-slate-500">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[#0A261D] flex items-center justify-center text-white">
                      <Send size={22} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
                      <p className="text-sm text-slate-400">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-slate-50 hover:bg-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-slate-50 hover:bg-white"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all resize-none bg-slate-50 hover:bg-white"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-[#0A261D] text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:shadow-emerald-900/30 transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={20} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Accents */}
      <motion.div
        className="absolute top-20 right-10 lg:right-20 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-emerald-600 border border-slate-100"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Globe size={28} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 lg:left-20 px-5 py-3 bg-[#0A261D] rounded-full shadow-xl flex items-center gap-2 text-white"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Building2 size={18} />
        <span className="text-sm font-bold">Skoal Solutions</span>
      </motion.div>
    </section>
  );
}

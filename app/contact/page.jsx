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

// Animated Globe Component - Redesigned
function AnimatedGlobe() {
  return (
    <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto">
      {/* Outer Glow */}
      <div className="absolute inset-[-20px] bg-emerald-500/15 rounded-full blur-[50px]" />

      {/* Globe Container */}
      <motion.div
        className="relative w-full h-full rounded-full bg-gradient-to-br from-[#0A261D] via-emerald-900 to-[#0A261D] border-2 border-emerald-500/30 shadow-2xl shadow-emerald-900/40 overflow-hidden"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        {/* Curved Lines for Globe Effect */}
        {[15, 35, 50, 65, 85].map((top, i) => (
          <div
            key={`lat-${i}`}
            className="absolute left-0 right-0 h-[1px] bg-emerald-500/20"
            style={{ top: `${top}%` }}
          />
        ))}

        {[15, 35, 50, 65, 85].map((left, i) => (
          <div
            key={`lon-${i}`}
            className="absolute top-0 bottom-0 w-[1px] bg-emerald-500/20"
            style={{ left: `${left}%` }}
          />
        ))}

        {/* Location Markers */}
        <motion.div
          className="absolute w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/60"
          style={{ top: "42%", left: "62%" }}
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-2.5 h-2.5 bg-teal-400 rounded-full shadow-lg shadow-teal-400/60"
          style={{ top: "38%", left: "52%" }}
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />

        {/* Shine */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent" />
      </motion.div>

      {/* Orbit Ring */}
      <motion.div
        className="absolute inset-[-15px] border border-emerald-500/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-md" />
      </motion.div>
    </div>
  );
}

// Compact Contact Card
function ContactCard({ icon, title, value, href, delay = 0 }) {
  return (
    <motion.a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ x: 8, scale: 1.02 }}
      className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-md hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
    >
      <div className="w-11 h-11 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-100 transition-colors flex-shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest mb-0.5">{title}</div>
        <div className="text-slate-800 font-semibold text-sm truncate">{value}</div>
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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#fafafa] via-slate-50 to-[#fafafa] overflow-hidden">
      {/* === ANIMATED BACKGROUNDS === */}

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

      {/* Blobs */}
      <motion.div
        className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[400px] h-[400px] bg-teal-100/30 rounded-full blur-[80px]"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dot Grid */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-28 relative z-10">

        {/* Header - Centered */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-5">
            <Sparkles size={14} className="text-emerald-600" />
            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4">
            Let's <span className="text-emerald-600 font-serif italic">Connect</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Partner with Skoal for compliant, scalable workforce solutions.
          </p>
        </motion.div>

        {/* Main Grid - Better Alignment */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start max-w-6xl mx-auto">

          {/* Left Column: Globe + Cards (2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <AnimatedGlobe />
            </motion.div>

            {/* Contact Cards - Stacked */}
            <div className="space-y-3">
              <ContactCard
                icon={<MapPin size={20} />}
                title="Locations"
                value="India | Middle East"
                delay={0.3}
              />
              <ContactCard
                icon={<Mail size={20} />}
                title="Email"
                value="info@skoalsolutions.com"
                href="mailto:info@skoalsolutions.com"
                delay={0.4}
              />
              <ContactCard
                icon={<Phone size={20} />}
                title="Phone"
                value="+91-XXXXXXXXXX"
                href="tel:+91XXXXXXXXXX"
                delay={0.5}
              />
              <ContactCard
                icon={<Clock size={20} />}
                title="Hours"
                value="Mon - Fri, 9 AM - 6 PM IST"
                delay={0.6}
              />
            </div>
          </div>

          {/* Right Column: Form (3 cols) */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
              {/* Shimmer */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                <motion.div
                  className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-emerald-50/40 to-transparent skew-x-12"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 5, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                />
              </div>

              {/* Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

              {isSubmitted ? (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={32} className="text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 mb-6">We'll respond within 24 hours.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                  {/* Form Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#0A261D] flex items-center justify-center text-white flex-shrink-0">
                      <Send size={20} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Send us a message</h2>
                      <p className="text-xs text-slate-400">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-slate-50/50 hover:bg-white text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-slate-50/50 hover:bg-white text-sm"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all resize-none bg-slate-50/50 hover:bg-white text-sm"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-[#0A261D] text-white rounded-full font-bold text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-emerald-900/20 transition-all disabled:opacity-70"
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
                        <ArrowRight size={18} />
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
        className="absolute top-24 right-8 lg:right-16 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center text-emerald-600 border border-slate-100"
        animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Globe size={24} />
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-8 lg:left-16 px-4 py-2.5 bg-[#0A261D] rounded-full shadow-lg flex items-center gap-2 text-white"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Building2 size={16} />
        <span className="text-xs font-bold">Skoal Solutions</span>
      </motion.div>
    </section>
  );
}

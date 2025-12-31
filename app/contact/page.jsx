"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Shield,
  Users,
  Headset,
  ChevronDown,
  MessageCircle,
  Award,
  TrendingUp,
  Target,
  Zap
} from "lucide-react";

// Large Animated Globe with dramatic effects
function HeroGlobe() {
  return (
    <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px]">
      {/* Massive Pulse Rings */}
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 border-2 border-emerald-500/30 rounded-full"
          animate={{ scale: [1, 2, 2.5], opacity: [0.6, 0.2, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
        />
      ))}

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-[-40px] bg-emerald-500/20 rounded-full blur-[60px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Globe Container */}
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#0A261D] via-emerald-800 to-[#061812] border-4 border-emerald-500/40 shadow-[0_0_80px_rgba(16,185,129,0.3)] overflow-hidden">

        {/* Rotating Grid */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[15, 30, 45, 60, 75, 90].map((pos, i) => (
            <div key={`h-${i}`} className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" style={{ top: `${pos}%` }} />
          ))}
          {[15, 30, 45, 60, 75, 90].map((pos, i) => (
            <div key={`v-${i}`} className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent" style={{ left: `${pos}%` }} />
          ))}
        </motion.div>

        {/* Continents Pattern (decorative) */}
        <motion.div
          className="absolute inset-[15%] rounded-full border-2 border-dashed border-emerald-500/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* Location Markers with Large Ping */}
        <div className="absolute" style={{ top: "38%", left: "58%" }}>
          <motion.div
            className="w-5 h-5 bg-emerald-400 rounded-full shadow-[0_0_20px_rgba(52,211,153,0.8)]"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 w-5 h-5 bg-emerald-400 rounded-full"
            animate={{ scale: [1, 3], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        <div className="absolute" style={{ top: "32%", left: "45%" }}>
          <motion.div
            className="w-4 h-4 bg-teal-400 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.8)]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute inset-0 w-4 h-4 bg-teal-400 rounded-full"
            animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
        </div>

        {/* Connection Line */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <motion.path
            d="M 45 32 Q 52 30 58 38"
            fill="none"
            stroke="url(#connGrad)"
            strokeWidth="1"
            strokeDasharray="3,3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <defs>
            <linearGradient id="connGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent" />

        {/* Scanline */}
        <motion.div
          className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Orbit Rings */}
      <motion.div
        className="absolute inset-[-25px] border-2 border-emerald-500/30 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-400 rounded-full shadow-lg" />
      </motion.div>

      <motion.div
        className="absolute inset-[-50px] border border-dashed border-emerald-500/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-teal-400 rounded-full" />
      </motion.div>
    </div>
  );
}

// Premium Animated Counter
function AnimatedCounter({ value, suffix = "", delay }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay * 1000 + 500);

    return () => clearTimeout(timer);
  }, [numericValue, delay]);

  return <>{count}{suffix}</>;
}

// Premium Dark Stats Card
function StatCard({ icon, value, label, delay, color }) {
  const suffix = value.includes('+') ? '+' : value.includes('%') ? '%' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7, type: "spring" }}
      whileHover={{ y: -12, scale: 1.03 }}
      className="relative p-8 rounded-[2rem] text-center group overflow-hidden cursor-pointer"
      style={{ background: 'linear-gradient(135deg, #0A261D 0%, #0f3d2e 50%, #0A261D 100%)' }}
    >
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

      {/* Animated Glow Blob */}
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px]"
        style={{ background: color }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full blur-[50px]"
        style={{ background: color }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Shimmer Line */}
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none"
      >
        <motion.div
          className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
          animate={{ x: ['-200%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Border Glow on Hover */}
      <div className="absolute inset-0 rounded-[2rem] border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors duration-500" />

      <div className="relative z-10">
        {/* Icon with Glow Ring */}
        <motion.div
          className="relative w-16 h-16 mx-auto mb-5"
          whileHover={{ rotate: [0, -15, 15, 0], scale: 1.15 }}
        >
          <motion.div
            className="absolute inset-0 rounded-2xl blur-md"
            style={{ background: color }}
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur flex items-center justify-center text-white border border-white/20">
            {icon}
          </div>
        </motion.div>

        {/* Animated Counter */}
        <motion.div
          className="text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, type: "spring", stiffness: 150 }}
        >
          <AnimatedCounter value={value} suffix={suffix} delay={delay} />
        </motion.div>

        {/* Label with Glow */}
        <motion.div
          className="text-base text-emerald-300/80 font-medium tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.5 }}
        >
          {label}
        </motion.div>

        {/* Pulsing Dot */}
        <motion.div
          className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-emerald-400"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}

// Premium FAQ Card
function FAQCard({ question, answer, isOpen, onClick, index }) {
  const questionNumber = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <motion.div
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        className={`relative p-6 lg:p-8 rounded-2xl cursor-pointer overflow-hidden transition-all duration-500 ${isOpen
          ? 'bg-[#0A261D] shadow-2xl shadow-emerald-900/30'
          : 'bg-white border border-slate-100 shadow-lg hover:shadow-xl hover:border-emerald-200'
          }`}
      >
        {/* Shimmer on dark card */}
        {isOpen && (
          <motion.div
            className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
            animate={{ x: ['-200%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
          />
        )}

        {/* Noise on dark card */}
        {isOpen && (
          <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        )}

        <div className="relative z-10 flex gap-5">
          {/* Number Badge */}
          <motion.div
            className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${isOpen
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
              : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
              }`}
            animate={isOpen ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {questionNumber}
          </motion.div>

          <div className="flex-1">
            {/* Question Row */}
            <div className="flex items-center justify-between gap-4">
              <h3 className={`text-lg font-bold transition-colors ${isOpen ? 'text-white' : 'text-slate-800 group-hover:text-emerald-600'
                }`}>
                {question}
              </h3>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.4, type: "spring" }}
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${isOpen
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100'
                  }`}
              >
                <ChevronDown size={20} />
              </motion.div>
            </div>

            {/* Answer */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-emerald-100/70 leading-relaxed">
                    {answer}
                  </p>

                  {/* Decorative line */}
                  <motion.div
                    className="mt-5 h-[2px] bg-gradient-to-r from-emerald-500/50 via-emerald-400/30 to-transparent"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Active indicator */}
        {isOpen && (
          <motion.div
            className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-emerald-400"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true); }, 1500);
  };

  const stats = [
    { icon: <Users size={28} />, value: "500+", label: "Happy Clients", color: "#34d399" },
    { icon: <Award size={28} />, value: "10+", label: "Years Experience", color: "#14b8a6" },
    { icon: <TrendingUp size={28} />, value: "99%", label: "Success Rate", color: "#2dd4bf" },
    { icon: <Target size={28} />, value: "24/7", label: "Support", color: "#10b981" },
  ];

  const faqs = [
    { question: "What services does Skoal Solutions offer?", answer: "We provide comprehensive HR solutions including payroll management, compliance services, BPO services, staffing, and workforce management across India and the Middle East." },
    { question: "How quickly can you respond to inquiries?", answer: "Our team typically responds to all inquiries within 24 hours. For urgent matters, you can reach us directly via phone during business hours." },
    { question: "Do you offer customized solutions?", answer: "Yes! We understand that every business is unique. Our team works closely with you to develop tailored solutions that meet your specific requirements." },
    { question: "What regions do you serve?", answer: "We primarily serve businesses operating in India and the Middle East, with expertise in local labor laws and compliance requirements for both regions." },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#fafafa] via-slate-50 to-white overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
      <motion.div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[100px]" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 15, repeat: Infinity }} />
      <motion.div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[80px]" animate={{ scale: [1.1, 1, 1.1] }} transition={{ duration: 18, repeat: Infinity }} />

      {/* === HERO SECTION === */}
      <div className="container mx-auto px-6 lg:px-12 pt-24 pb-20 relative z-10">

        {/* Header */}
        <motion.div className="text-center max-w-3xl mx-auto mb-16" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-lg mb-6" whileHover={{ scale: 1.05 }}>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
              <Sparkles size={18} className="text-emerald-600" />
            </motion.div>
            <span className="text-sm font-bold text-slate-600 uppercase tracking-widest">Get In Touch</span>
            <motion.div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.span key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-500" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }} />
              ))}
            </motion.div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-5">
            Let's <span className="text-emerald-600 font-serif italic">Connect</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Partner with Skoal for compliant, scalable workforce solutions across India and the Middle East.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">

          {/* Left: Globe */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
          >
            <HeroGlobe />
          </motion.div>

          {/* Right: Form + Contact Info */}
          <motion.div className="space-y-6" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            {/* Form Card */}
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500" />
              <motion.div className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-emerald-50/50 to-transparent skew-x-12 pointer-events-none" animate={{ x: ['-200%', '200%'] }} transition={{ duration: 4, repeat: Infinity, repeatDelay: 4 }} />

              {isSubmitted ? (
                <motion.div className="text-center py-12" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                  <motion.div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <CheckCircle2 size={40} className="text-emerald-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 mb-6">We'll respond within 24 hours.</p>
                  <button onClick={() => setIsSubmitted(false)} className="px-6 py-3 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-colors">Send Another</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div className="w-14 h-14 rounded-2xl bg-[#0A261D] flex items-center justify-center text-white" whileHover={{ rotate: [0, -10, 10, 0] }}>
                      <Send size={24} />
                    </motion.div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
                      <p className="text-sm text-slate-400">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wider">Name</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-slate-50/50 hover:bg-white" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wider">Email</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-slate-50/50 hover:bg-white" placeholder="you@email.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wider">Message</label>
                    <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all resize-none bg-slate-50/50 hover:bg-white" placeholder="How can we help?" />
                  </div>

                  <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className="w-full py-4 bg-[#0A261D] text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all disabled:opacity-70 relative overflow-hidden">
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" animate={{ x: ['-200%', '200%'] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }} />
                    {isSubmitting ? (<><motion.div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />Sending...</>) : (<>Send Message <ArrowRight size={20} /></>)}
                  </motion.button>
                </form>
              )}
            </div>

            {/* Contact Info Row */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <MapPin size={18} />, label: "India | Middle East" },
                { icon: <Mail size={18} />, label: "info@skoalsolutions.com" },
                { icon: <Phone size={18} />, label: "+91-XXXXXXXXXX" },
                { icon: <Clock size={18} />, label: "Mon-Fri, 9AM-6PM" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">{item.icon}</div>
                  <span className="text-sm font-medium text-slate-700 truncate">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* === PREMIUM STATS SECTION === */}
      <div className="relative bg-[#fafafa] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        <motion.div
          className="absolute top-[-20%] left-[30%] w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[100px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-6 lg:px-12 py-24 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A261D] mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-emerald-400"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-sm font-bold text-white uppercase tracking-wider">Our Impact</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Choose <span className="text-emerald-600">Skoal?</span></h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">Trusted by businesses across India and the Middle East for over a decade</p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-6xl mx-auto">
            {stats.map((stat, i) => (
              <StatCard key={i} icon={stat.icon} value={stat.value} label={stat.label} delay={i * 0.15} color={stat.color} />
            ))}
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 right-10 lg:right-20 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-emerald-600 border border-slate-100"
            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Award size={22} />
          </motion.div>
        </div>
      </div>

      {/* === PREMIUM FAQ SECTION === */}
      <div className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        <motion.div
          className="absolute top-[-20%] right-[-15%] w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-6 lg:px-12 py-24 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">

            {/* Left: Header */}
            <motion.div
              className="lg:col-span-4 lg:sticky lg:top-32"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A261D] mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-emerald-400"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-sm font-bold text-white uppercase tracking-wider">FAQ</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Frequently Asked <span className="text-emerald-600 font-serif italic">Questions</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                Everything you need to know about our services and how we can help your business.
              </p>

              {/* Decorative Element */}
              <div className="hidden lg:block">
                <motion.div
                  className="w-20 h-20 bg-[#0A261D] rounded-2xl flex items-center justify-center text-emerald-400"
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <MessageCircle size={32} />
                </motion.div>
              </div>
            </motion.div>

            {/* Right: FAQ Cards */}
            <div className="lg:col-span-8 space-y-4">
              {faqs.map((faq, i) => (
                <FAQCard
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === i}
                  onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute bottom-20 left-10 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-emerald-600 border border-slate-100"
          animate={{ y: [0, -12, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Sparkles size={20} />
        </motion.div>
      </div>

      {/* === CTA BANNER === */}
      <div className="container mx-auto px-6 lg:px-12 pb-24">
        <motion.div className="relative bg-[#0A261D] rounded-[2.5rem] p-12 lg:p-16 overflow-hidden" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <motion.div className="absolute top-[-40%] right-[-15%] w-[500px] h-[500px] bg-emerald-500/25 rounded-full blur-[100px]" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 10, repeat: Infinity }} />
          <motion.div className="absolute bottom-[-30%] left-[-10%] w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[80px]" animate={{ scale: [1.2, 1, 1.2] }} transition={{ duration: 12, repeat: Infinity }} />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <motion.div initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ type: "spring", delay: 0.2 }} className="w-20 h-20 bg-white/10 backdrop-blur rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Headset size={36} className="text-white" />
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Workforce?</h3>
            <p className="text-lg text-emerald-100/80 mb-8">Let's discuss how Skoal can help your business achieve operational excellence.</p>
            <motion.a href="mailto:info@skoalsolutions.com" whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#0A261D] rounded-full font-bold text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] transition-all">
              Schedule a Call
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating Accents */}
      <motion.div className="absolute top-28 right-8 lg:right-20 w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center text-emerald-600 border border-slate-100" animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }}>
        <Globe size={24} />
      </motion.div>
      <motion.div className="absolute top-[35%] left-8 lg:left-12 px-5 py-3 bg-[#0A261D] rounded-full shadow-xl flex items-center gap-2 text-white" animate={{ y: [0, 12, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}>
        <Building2 size={16} />
        <span className="text-sm font-bold">Skoal Solutions</span>
      </motion.div>
      <motion.div className="absolute bottom-[30%] right-8 lg:right-12 w-12 h-12 bg-emerald-100 rounded-xl shadow-lg flex items-center justify-center text-emerald-600" animate={{ y: [0, -10, 0], x: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity }}>
        <Zap size={22} />
      </motion.div>
    </section >
  );
}

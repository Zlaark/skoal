"use client";

import { useState, useEffect } from "react";
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
  Sparkles,
  Zap
} from "lucide-react";

// Enhanced Animated Globe with Connection Lines
function AnimatedGlobe() {
  return (
    <div className="relative w-64 h-64 lg:w-72 lg:h-72 mx-auto">
      {/* Pulse Rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 border border-emerald-500/20 rounded-full"
          animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0.2, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
        />
      ))}

      {/* Outer Glow */}
      <motion.div
        className="absolute inset-[-25px] bg-emerald-500/10 rounded-full blur-[40px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Globe Container */}
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#0A261D] via-emerald-900 to-[#0A261D] border-2 border-emerald-500/40 shadow-2xl shadow-emerald-900/50 overflow-hidden">

        {/* Rotating Grid */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          {/* Latitude Lines */}
          {[20, 35, 50, 65, 80].map((top, i) => (
            <div
              key={`lat-${i}`}
              className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"
              style={{ top: `${top}%` }}
            />
          ))}

          {/* Longitude Lines */}
          {[20, 35, 50, 65, 80].map((left, i) => (
            <div
              key={`lon-${i}`}
              className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent"
              style={{ left: `${left}%` }}
            />
          ))}
        </motion.div>

        {/* Connection Line between markers */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <motion.path
            d="M 52 38 Q 60 35 62 42"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="0.5"
            strokeDasharray="2,2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Location Markers with Ping */}
        <div className="absolute" style={{ top: "40%", left: "60%" }}>
          <motion.div
            className="w-3.5 h-3.5 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/60 relative z-10"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 bg-emerald-400 rounded-full"
            animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        <div className="absolute" style={{ top: "36%", left: "50%" }}>
          <motion.div
            className="w-2.5 h-2.5 bg-teal-400 rounded-full shadow-lg shadow-teal-400/60 relative z-10"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute inset-0 bg-teal-400 rounded-full"
            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
        </div>

        {/* Shine */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />

        {/* Scanline Effect */}
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Orbit Ring with Multiple Dots */}
      <motion.div
        className="absolute inset-[-18px] border border-emerald-500/25 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-md" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-teal-400 rounded-full" />
      </motion.div>

      {/* Second Orbit */}
      <motion.div
        className="absolute inset-[-35px] border border-dashed border-emerald-500/15 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-300 rounded-full" />
      </motion.div>
    </div>
  );
}

// Enhanced Contact Card with Stagger Animation
function ContactCard({ icon, title, value, href, index = 0 }) {
  return (
    <motion.a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      initial={{ opacity: 0, x: -40, rotateY: -15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
      whileHover={{ x: 10, scale: 1.03, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15)" }}
      className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-lg hover:border-emerald-300 transition-all duration-300 cursor-pointer"
    >
      <motion.div
        className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center text-emerald-600 flex-shrink-0 border border-emerald-100"
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest mb-0.5">{title}</div>
        <div className="text-slate-800 font-semibold text-sm truncate group-hover:text-emerald-700 transition-colors">{value}</div>
      </div>
      <motion.div
        className="opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ x: -10 }}
        whileHover={{ x: 0 }}
      >
        <ArrowRight size={16} className="text-emerald-500" />
      </motion.div>
    </motion.a>
  );
}

// Floating Particles
function FloatingParticles() {
  return (
    <>
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400/30"
          style={{
            left: `${(i * 7) % 100}%`,
            top: `${(i * 11) % 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.sin(i) * 25, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 5 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3
          }}
        />
      ))}
    </>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Let's Connect";

  // Typing effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const contactInfo = [
    { icon: <MapPin size={20} />, title: "Locations", value: "India | Middle East" },
    { icon: <Mail size={20} />, title: "Email", value: "info@skoalsolutions.com", href: "mailto:info@skoalsolutions.com" },
    { icon: <Phone size={20} />, title: "Phone", value: "+91-XXXXXXXXXX", href: "tel:+91XXXXXXXXXX" },
    { icon: <Clock size={20} />, title: "Hours", value: "Mon - Fri, 9 AM - 6 PM IST" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#fafafa] via-slate-50 to-[#fafafa] overflow-hidden">
      {/* === ANIMATED BACKGROUNDS === */}

      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

      <motion.div
        className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[400px] h-[400px] bg-teal-100/30 rounded-full blur-[80px]"
        animate={{ scale: [1.1, 1, 1.1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <FloatingParticles />

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-28 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-5"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={14} className="text-emerald-600" />
            </motion.div>
            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Get In Touch</span>
            <motion.div
              className="flex gap-0.5"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1 h-1 rounded-full bg-emerald-500"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </motion.div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4 h-[1.2em]">
            <span>{typedText.split(" ")[0]}</span>{" "}
            <span className="text-emerald-600 font-serif italic">{typedText.split(" ").slice(1).join(" ")}</span>
            <motion.span
              className="inline-block w-[3px] h-[1em] bg-emerald-600 ml-1 align-middle"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Partner with Skoal for compliant, scalable workforce solutions.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">

          {/* Left: Globe + Cards */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <AnimatedGlobe />
            </motion.div>

            <div className="space-y-3">
              {contactInfo.map((item, i) => (
                <ContactCard
                  key={i}
                  icon={item.icon}
                  title={item.title}
                  value={item.value}
                  href={item.href}
                  index={i}
                />
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          >
            <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
              {/* Shimmer */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                <motion.div
                  className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-emerald-50/50 to-transparent skew-x-12"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }}
                />
              </div>

              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

              {isSubmitted ? (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring" }}
                >
                  <motion.div
                    className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle2 size={40} className="text-emerald-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 mb-6">We'll respond within 24 hours.</p>
                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Another
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="w-11 h-11 rounded-xl bg-[#0A261D] flex items-center justify-center text-white flex-shrink-0"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                    >
                      <Send size={20} />
                    </motion.div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Send us a message</h2>
                      <p className="text-xs text-slate-400">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { name: "name", label: "Name", placeholder: "Your name", type: "text" },
                      { name: "email", label: "Email", placeholder: "you@email.com", type: "email" }
                    ].map((field, i) => (
                      <motion.div
                        key={field.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">{field.label}</label>
                        <input
                          type={field.type}
                          required
                          value={formData[field.name]}
                          onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-slate-50/50 hover:bg-white text-sm"
                          placeholder={field.placeholder}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all resize-none bg-slate-50/50 hover:bg-white text-sm"
                      placeholder="How can we help you?"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-[#0A261D] text-white rounded-full font-bold text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-emerald-900/20 transition-all disabled:opacity-70 relative overflow-hidden group"
                  >
                    {/* Button Shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />

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
                        <span className="relative z-10">Send Message</span>
                        <motion.div
                          className="relative z-10"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight size={18} />
                        </motion.div>
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
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.2 }}
      >
        <Globe size={24} />
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-8 lg:left-16 px-4 py-2.5 bg-[#0A261D] rounded-full shadow-lg flex items-center gap-2 text-white"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <Building2 size={16} />
        <span className="text-xs font-bold">Skoal Solutions</span>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-8 lg:right-12 w-10 h-10 bg-emerald-100 rounded-full shadow-md flex items-center justify-center text-emerald-600"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Zap size={18} />
      </motion.div>
    </section>
  );
}

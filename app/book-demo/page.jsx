"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calendar,
    Clock,
    User,
    Mail,
    Building2,
    Phone,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    Globe,
    Users,
    Shield,
    Headset,
    Zap,
    Play,
    Video
} from "lucide-react";

// Feature Card
function FeatureCard({ icon, title, description, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/10 group"
        >
            <motion.div
                className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            >
                {icon}
            </motion.div>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-emerald-100/60 text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
}

export default function BookDemoPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        employees: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 2000);
    };

    const features = [
        { icon: <Users size={24} />, title: "Personalized Demo", description: "Get a customized walkthrough tailored to your business needs." },
        { icon: <Shield size={24} />, title: "Compliance Overview", description: "See how we handle 100% statutory compliance across India & Middle East." },
        { icon: <Headset size={24} />, title: "Live Q&A Session", description: "Ask questions and get real-time answers from our experts." },
        { icon: <Zap size={24} />, title: "Quick Setup Guide", description: "Learn how fast you can get started with Skoal solutions." },
    ];

    return (
        <section className="relative min-h-screen bg-gradient-to-b from-[#0A261D] via-[#0d3326] to-[#0A261D] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-[0.06] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

            {/* Animated Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
            }} />

            {/* Gradient Blobs */}
            <motion.div
                className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[150px]"
                animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[120px]"
                animate={{ scale: [1.1, 1, 1.1] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-emerald-400/10 rounded-full blur-[80px]"
                animate={{ y: [0, 50, 0], scale: [1, 1.3, 1] }}
                transition={{ duration: 12, repeat: Infinity }}
            />

            {/* Floating Particles */}
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-emerald-400/40 rounded-full"
                    style={{ left: `${10 + i * 9}%`, top: `${15 + (i % 4) * 20}%` }}
                    animate={{ y: [0, -40, 0], opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
                />
            ))}

            <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                            <Video size={18} className="text-emerald-400" />
                        </motion.div>
                        <span className="text-sm font-bold text-white uppercase tracking-widest">Book a Demo</span>
                        <motion.div className="flex gap-1">
                            {[0, 1, 2].map(i => (
                                <motion.span key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-400" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }} />
                            ))}
                        </motion.div>
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
                        See Skoal in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-300 font-serif italic">Action</span>
                    </h1>
                    <p className="text-xl text-emerald-100/70 leading-relaxed">
                        Schedule a personalized demo to discover how Skoal can transform your workforce management with our comprehensive solutions.
                    </p>
                </motion.div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">

                    {/* Left: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative bg-white rounded-[2rem] p-8 lg:p-10 shadow-2xl overflow-hidden">
                            {/* Top Accent */}
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500" />

                            {/* Shimmer */}
                            <motion.div
                                className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-emerald-50/40 to-transparent skew-x-12 pointer-events-none"
                                animate={{ x: ['-200%', '200%'] }}
                                transition={{ duration: 4, repeat: Infinity, repeatDelay: 5 }}
                            />

                            {isSubmitted ? (
                                <motion.div
                                    className="text-center py-16"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <motion.div
                                        className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <CheckCircle2 size={48} className="text-emerald-600" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Demo Request Received!</h3>
                                    <p className="text-slate-500 mb-6 max-w-sm mx-auto">Our team will contact you within 24 hours to schedule your personalized demo.</p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="px-6 py-3 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-colors"
                                    >
                                        Book Another Demo
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                                    <div className="flex items-center gap-4 mb-6">
                                        <motion.div
                                            className="w-14 h-14 rounded-2xl bg-[#0A261D] flex items-center justify-center text-white"
                                            whileHover={{ rotate: [0, -10, 10, 0] }}
                                        >
                                            <Calendar size={26} />
                                        </motion.div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-slate-900">Schedule Your Demo</h2>
                                            <p className="text-sm text-slate-400">Fill out the form below</p>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wider">Full Name *</label>
                                            <div className="relative">
                                                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-slate-50/50"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wider">Work Email *</label>
                                            <div className="relative">
                                                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-slate-50/50"
                                                    placeholder="you@company.com"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wider">Company *</label>
                                            <div className="relative">
                                                <Building2 size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.company}
                                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-slate-50/50"
                                                    placeholder="Company Name"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wider">Phone</label>
                                            <div className="relative">
                                                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                                <input
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-slate-50/50"
                                                    placeholder="+91 XXXXXXXXXX"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wider">Number of Employees</label>
                                        <select
                                            value={formData.employees}
                                            onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all bg-slate-50/50 text-slate-700"
                                        >
                                            <option value="">Select range</option>
                                            <option value="1-50">1-50 employees</option>
                                            <option value="51-200">51-200 employees</option>
                                            <option value="201-500">201-500 employees</option>
                                            <option value="501-1000">501-1000 employees</option>
                                            <option value="1000+">1000+ employees</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wider">What are you looking for?</label>
                                        <textarea
                                            rows={3}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all resize-none bg-slate-50/50"
                                            placeholder="Tell us about your needs..."
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-4 bg-[#0A261D] text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all disabled:opacity-70 relative overflow-hidden"
                                    >
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
                                                Scheduling...
                                            </>
                                        ) : (
                                            <>
                                                <Calendar size={20} />
                                                Book My Demo
                                                <ArrowRight size={18} />
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Right: Features + Info */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        {/* Video Preview Card */}
                        <motion.div
                            className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-[#0d3326] to-[#0A261D] border border-white/10 group cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl"
                                    >
                                        <Play size={28} className="text-[#0A261D] ml-1" />
                                    </motion.div>
                                </motion.div>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                <span className="text-white/80 text-sm font-medium">Watch Product Demo</span>
                                <span className="text-white/60 text-xs">2:45</span>
                            </div>
                            {/* Decorative corners */}
                            <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-emerald-500/40 rounded-tl-lg" />
                            <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-emerald-500/40 rounded-br-lg" />
                        </motion.div>

                        {/* What You'll Get */}
                        <div>
                            <h3 className="text-xl font-bold text-white mb-6">What You'll Get</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {features.map((feature, i) => (
                                    <FeatureCard
                                        key={i}
                                        icon={feature.icon}
                                        title={feature.title}
                                        description={feature.description}
                                        delay={0.6 + i * 0.1}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <motion.div
                            className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 }}
                        >
                            <div className="flex items-center gap-4 flex-wrap justify-between">
                                {[
                                    { value: "500+", label: "Clients" },
                                    { value: "10+", label: "Years" },
                                    { value: "99%", label: "Satisfaction" },
                                    { value: "24/7", label: "Support" },
                                ].map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <div className="text-2xl font-bold text-emerald-400">{stat.value}</div>
                                        <div className="text-xs text-emerald-100/50 uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Accents */}
            <motion.div
                className="absolute top-32 right-12 w-14 h-14 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center text-emerald-400 border border-white/20"
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
            >
                <Globe size={24} />
            </motion.div>
            <motion.div
                className="absolute bottom-32 left-12 w-12 h-12 bg-emerald-500/20 backdrop-blur rounded-xl flex items-center justify-center text-emerald-400 border border-white/20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
                <Sparkles size={20} />
            </motion.div>
        </section>
    );
}

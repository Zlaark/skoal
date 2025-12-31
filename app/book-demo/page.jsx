"use client";

import { useState, useEffect } from "react";
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
    Video,
    Star,
    Award,
    Target,
    MessageCircle
} from "lucide-react";

// Animated Counter Component
function AnimatedCounter({ end, suffix = "" }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            let start = 0;
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
        }, 800);
        return () => clearTimeout(timer);
    }, [end]);

    return <span>{count}{suffix}</span>;
}

// Card Wrapper - simplified to not interfere with form inputs
function CardWrapper({ children, className }) {
    return (
        <motion.div
            className={className}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            {children}
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
    const [activeStep, setActiveStep] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 2000);
    };

    const benefits = [
        { icon: <Users size={24} />, title: "Personalized Demo", desc: "Tailored to your business" },
        { icon: <Shield size={24} />, title: "100% Compliance", desc: "India & Middle East" },
        { icon: <Headset size={24} />, title: "Expert Guidance", desc: "Live Q&A session" },
        { icon: <Zap size={24} />, title: "Quick Setup", desc: "Get started in days" },
    ];

    return (
        <section className="relative min-h-screen bg-[#0A261D] overflow-hidden">
            {/* === ANIMATED BACKGROUND === */}
            <div className="absolute inset-0">
                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Animated Mesh Gradient */}
                <motion.div
                    className="absolute top-[-30%] right-[-20%] w-[800px] h-[800px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)' }}
                    animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-[-30%] left-[-20%] w-[700px] h-[700px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.25) 0%, transparent 70%)' }}
                    animate={{ scale: [1.1, 1, 1.1], x: [0, -30, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 70%)' }}
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 15, repeat: Infinity }}
                />

                {/* Animated Grid */}
                <div className="absolute inset-0 opacity-[0.08]" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), 
                                      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />

                {/* Orbit Rings - Centered */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    {[300, 450, 600].map((size, i) => (
                        <motion.div
                            key={i}
                            className="absolute border border-emerald-500/10 rounded-full"
                            style={{
                                width: size,
                                height: size,
                                top: -size / 2,
                                left: -size / 2
                            }}
                            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                            transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
                        >
                            {/* Orbiting dot */}
                            <motion.div
                                className="absolute w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"
                                style={{ top: -6, left: '50%', marginLeft: -6 }}
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Scanning Line Effect */}
                <motion.div
                    className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
                    animate={{ y: [0, 1000, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                {/* Floating Orbs - More of them */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute rounded-full ${i % 3 === 0 ? 'w-3 h-3 bg-emerald-400/40' : 'w-2 h-2 bg-teal-400/30'}`}
                        style={{
                            left: `${8 + i * 7}%`,
                            top: `${15 + (i % 5) * 18}%`
                        }}
                        animate={{
                            y: [0, -60, 0],
                            x: [0, i % 2 === 0 ? 20 : -20, 0],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
                    />
                ))}

                {/* Animated Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                    <motion.line
                        x1="10%" y1="20%" x2="30%" y2="60%"
                        stroke="url(#lineGradient)" strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 0 }}
                    />
                    <motion.line
                        x1="70%" y1="15%" x2="85%" y2="50%"
                        stroke="url(#lineGradient)" strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    />
                    <motion.line
                        x1="20%" y1="80%" x2="50%" y2="70%"
                        stroke="url(#lineGradient)" strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
                    />
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#34d399" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Pulse Rings from center */}
                {[1, 2, 3].map((ring) => (
                    <motion.div
                        key={ring}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-emerald-500/20 rounded-full pointer-events-none"
                        style={{ width: 200, height: 200 }}
                        animate={{ scale: [1, 4, 4], opacity: [0.5, 0, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: ring * 1.2 }}
                    />
                ))}
            </div>

            {/* === MAIN CONTENT === */}
            <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">

                {/* Header Section */}
                <motion.div
                    className="text-center max-w-4xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-8"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            <Calendar size={20} className="text-emerald-400" />
                        </motion.div>
                        <span className="text-emerald-300 font-bold text-sm uppercase tracking-widest">Schedule Your Demo</span>
                        <div className="flex gap-1">
                            {[0, 1, 2].map(i => (
                                <motion.span
                                    key={i}
                                    className="w-2 h-2 rounded-full bg-emerald-400"
                                    animate={{ scale: [1, 1.5, 1] }}
                                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[0.95]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        See Skoal in
                        <br />
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-300 font-serif italic">
                                Action
                            </span>
                            {/* Underline animation */}
                            <motion.div
                                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 1, duration: 0.8 }}
                            />
                        </span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        className="text-xl md:text-2xl text-emerald-100/60 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        Experience our comprehensive workforce solutions with a personalized walkthrough from our experts.
                    </motion.p>
                </motion.div>

                {/* Main Grid - Form + Features */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 max-w-7xl mx-auto items-start">

                    {/* LEFT: Premium Form Card */}
                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: -60, rotateY: -5 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <CardWrapper className="relative">
                            {/* Glowing Border */}
                            <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/50 via-teal-500/30 to-emerald-500/50 rounded-[2rem] blur-sm" />

                            <div className="relative bg-white rounded-[2rem] p-8 lg:p-12 shadow-2xl overflow-hidden">
                                {/* Animated Top Border */}
                                <motion.div
                                    className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500"
                                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                    style={{ backgroundSize: '200% 100%' }}
                                />

                                {/* Shimmer Effect */}
                                <motion.div
                                    className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-emerald-50/30 to-transparent skew-x-12 pointer-events-none"
                                    animate={{ x: ['-200%', '200%'] }}
                                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 6 }}
                                />

                                {/* Corner Accents */}
                                <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-emerald-200/30 rounded-tr-2xl" />
                                <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-emerald-200/30 rounded-bl-2xl" />

                                {isSubmitted ? (
                                    <motion.div
                                        className="text-center py-12"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    >
                                        <motion.div
                                            className="relative w-28 h-28 mx-auto mb-8"
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ type: "spring", stiffness: 100 }}
                                        >
                                            <motion.div
                                                className="absolute inset-0 bg-emerald-100 rounded-full"
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                            <div className="relative w-full h-full bg-emerald-50 rounded-full flex items-center justify-center">
                                                <CheckCircle2 size={56} className="text-emerald-600" />
                                            </div>
                                        </motion.div>
                                        <h3 className="text-3xl font-bold text-slate-900 mb-4">You're All Set!</h3>
                                        <p className="text-slate-500 mb-8 text-lg max-w-md mx-auto">Our team will reach out within 24 hours to schedule your personalized demo.</p>
                                        <motion.button
                                            onClick={() => setIsSubmitted(false)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-8 py-4 bg-[#0A261D] text-white rounded-full font-bold text-lg hover:bg-emerald-800 transition-colors"
                                        >
                                            Book Another Demo
                                        </motion.button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                        {/* Form Header */}
                                        <div className="flex items-center gap-5 mb-8">
                                            <motion.div
                                                className="relative w-16 h-16 rounded-2xl bg-[#0A261D] flex items-center justify-center"
                                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                            >
                                                <motion.div
                                                    className="absolute inset-0 bg-emerald-500/30 rounded-2xl blur-lg"
                                                    animate={{ scale: [1, 1.3, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                />
                                                <Calendar size={28} className="text-white relative z-10" />
                                            </motion.div>
                                            <div>
                                                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Book Your Demo</h2>
                                                <p className="text-slate-400">Takes less than 2 minutes</p>
                                            </div>
                                        </div>

                                        {/* Form Fields */}
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name *</label>
                                                <div className="relative group">
                                                    <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" />
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-100 focus:border-emerald-500 outline-none transition-all bg-slate-50/50 focus:bg-white text-slate-800"
                                                        placeholder="John Doe"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Work Email *</label>
                                                <div className="relative group">
                                                    <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" />
                                                    <input
                                                        type="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-100 focus:border-emerald-500 outline-none transition-all bg-slate-50/50 focus:bg-white text-slate-800"
                                                        placeholder="you@company.com"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Company *</label>
                                                <div className="relative group">
                                                    <Building2 size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" />
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.company}
                                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-100 focus:border-emerald-500 outline-none transition-all bg-slate-50/50 focus:bg-white text-slate-800"
                                                        placeholder="Company Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Team Size</label>
                                                <select
                                                    value={formData.employees}
                                                    onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                                                    className="w-full px-4 py-4 rounded-xl border-2 border-slate-100 focus:border-emerald-500 outline-none transition-all bg-slate-50/50 focus:bg-white text-slate-700"
                                                >
                                                    <option value="">Select range</option>
                                                    <option value="1-50">1-50 employees</option>
                                                    <option value="51-200">51-200 employees</option>
                                                    <option value="201-500">201-500 employees</option>
                                                    <option value="500+">500+ employees</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">How can we help?</label>
                                            <textarea
                                                rows={3}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full px-4 py-4 rounded-xl border-2 border-slate-100 focus:border-emerald-500 outline-none transition-all resize-none bg-slate-50/50 focus:bg-white text-slate-800"
                                                placeholder="Tell us about your workforce challenges..."
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full py-5 bg-[#0A261D] text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:shadow-emerald-900/30 transition-all disabled:opacity-70 relative overflow-hidden group"
                                        >
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                                                animate={{ x: ['-200%', '200%'] }}
                                                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
                                            />
                                            {isSubmitting ? (
                                                <>
                                                    <motion.div
                                                        className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full"
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    />
                                                    <span>Scheduling...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="relative z-10">Schedule My Demo</span>
                                                    <motion.div
                                                        animate={{ x: [0, 5, 0] }}
                                                        transition={{ duration: 1.5, repeat: Infinity }}
                                                    >
                                                        <ArrowRight size={22} />
                                                    </motion.div>
                                                </>
                                            )}
                                        </motion.button>

                                        {/* Trust Line */}
                                        <div className="flex items-center justify-center gap-2 text-sm text-slate-400 pt-2">
                                            <Shield size={16} className="text-emerald-500" />
                                            <span>Your data is secure & confidential</span>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </CardWrapper>
                    </motion.div>

                    {/* RIGHT: Features & Stats */}
                    <motion.div
                        className="lg:col-span-5 space-y-8"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        {/* Benefits List */}
                        <div className="space-y-4">
                            {benefits.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 + i * 0.1 }}
                                    whileHover={{ x: 10, scale: 1.02 }}
                                    className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 backdrop-blur border border-white/10 group cursor-pointer"
                                >
                                    <motion.div
                                        className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 relative"
                                        whileHover={{ rotate: 10 }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-emerald-400/30 rounded-xl blur-md"
                                            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                        />
                                        <div className="relative z-10">{benefit.icon}</div>
                                    </motion.div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">{benefit.title}</h4>
                                        <p className="text-emerald-100/50 text-sm">{benefit.desc}</p>
                                    </div>
                                    <ArrowRight size={18} className="text-emerald-400/50 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats Card */}
                        <motion.div
                            className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/10 relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
                                animate={{ x: ['-200%', '200%'] }}
                                transition={{ duration: 5, repeat: Infinity, repeatDelay: 5 }}
                            />

                            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <Star size={18} className="text-emerald-400" />
                                Trusted Worldwide
                            </h4>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { value: 500, suffix: "+", label: "Happy Clients" },
                                    { value: 10, suffix: "+", label: "Years Experience" },
                                    { value: 99, suffix: "%", label: "Success Rate" },
                                    { value: 24, suffix: "/7", label: "Support" },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        className="text-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1 + i * 0.1 }}
                                    >
                                        <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                                            <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                        </div>
                                        <div className="text-sm text-emerald-100/50">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quick Contact */}
                        <motion.div
                            className="flex items-center gap-4 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.div
                                className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <MessageCircle size={22} />
                            </motion.div>
                            <div className="flex-1">
                                <p className="text-white font-medium">Need help right away?</p>
                                <a href="mailto:info@skoalsolutions.com" className="text-emerald-400 text-sm hover:underline">info@skoalsolutions.com</a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
                className="absolute top-32 right-20 w-16 h-16 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center text-emerald-400 border border-white/10"
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
            >
                <motion.div
                    className="absolute inset-0 bg-emerald-400/20 rounded-2xl blur-lg"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <Globe size={28} className="relative z-10" />
            </motion.div>

            <motion.div
                className="absolute bottom-40 left-20 w-14 h-14 bg-emerald-500/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-emerald-400 border border-white/10"
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
                <Sparkles size={24} />
            </motion.div>

            {/* Additional floating elements */}
            <motion.div
                className="absolute top-[45%] right-10 w-12 h-12 bg-teal-500/10 backdrop-blur-sm rounded-full flex items-center justify-center text-teal-400 border border-white/10"
                animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
                <Clock size={20} />
            </motion.div>

            <motion.div
                className="absolute bottom-[30%] right-24 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            >
                <span className="text-emerald-300 text-sm font-semibold flex items-center gap-2">
                    <motion.span
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    Live Demo Available
                </span>
            </motion.div>

            <motion.div
                className="absolute top-[60%] left-10 w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center text-emerald-400 border border-white/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <Target size={18} />
            </motion.div>

            <motion.div
                className="absolute top-24 left-[40%] px-5 py-2.5 bg-emerald-500/15 backdrop-blur-sm rounded-full border border-emerald-500/20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                <motion.span
                    className="text-white text-sm font-medium flex items-center gap-2"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <Award size={16} className="text-emerald-400" />
                    Trusted by 500+ Companies
                </motion.span>
            </motion.div>
        </section>
    );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue } from "framer-motion";
import {
    Calculator,
    ShieldCheck,
    Users,
    FileText,
    Database,
    ArrowRight,
    Activity,
    CheckCircle2,
    Globe,
    ArrowUpRight,
    Layers,
    PieChart,
    Headset,
    TrendingUp,
    MessageSquare,
    Phone,
    ShoppingCart,
    BarChart3
} from "lucide-react";
import Footer from "../components/Footer";

// --- Components ---

// Premium, High-Fidelity 3D Service Card
function PrecisionCard({ service, index }) {
    const [isHovered, setIsHovered] = useState(false);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / rect.width - 0.5;
        const yPct = mouseY / rect.height - 0.5;

        setRotation({
            x: yPct * -10, // Max tilt X
            y: xPct * 10   // Max tilt Y
        });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
            className="perspective-1000 h-full"
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                className="group relative h-full bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-10 overflow-hidden cursor-pointer flex flex-col justify-between"
                style={{
                    transformStyle: "preserve-3d",
                }}
                animate={{
                    rotateX: rotation.x,
                    rotateY: rotation.y,
                    boxShadow: isHovered
                        ? "0 30px 60px -15px rgba(16, 185, 129, 0.3)"
                        : "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
                    y: isHovered ? -10 : 0,
                    scale: isHovered ? 1.02 : 1
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {/* --- BACKGROUND FX --- */}

                {/* 1. Ultra-subtle Noise Texture */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* 2. Gradient Blob Top-Right */}
                <motion.div
                    className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none"
                    animate={isHovered ? { scale: 1.5, opacity: 0.8 } : { scale: 1, opacity: 0.5 }}
                    transition={{ duration: 1 }}
                />

                {/* 3. Gradient Blob Bottom-Left */}
                <motion.div
                    className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-100/50 rounded-full blur-3xl pointer-events-none"
                    animate={isHovered ? { scale: 1.5, opacity: 0.8 } : { scale: 1, opacity: 0.5 }}
                    transition={{ duration: 1 }}
                />

                {/* 4. Active "Shine" Gradient Overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-emerald-50/20 opacity-0 pointer-events-none"
                    animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                />

                {/* --- FLOATING CONTENT LAYERS --- */}

                {/* HEADER */}
                <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
                    <div className="flex justify-between items-start mb-8">
                        {/* 3D Floating Icon */}
                        <motion.div
                            className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-lg flex items-center justify-center text-emerald-600 group-hover:text-white overflow-hidden transition-colors duration-500"
                            whileHover={{ rotate: [0, -5, 5, 0] }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">{service.icon}</div>
                        </motion.div>

                        {/* Status Capsule */}
                        <div className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 flex items-center gap-2 shadow-sm group-hover:bg-white/80 group-hover:border-emerald-100 transition-colors duration-500">
                            <motion.span
                                className="w-2 h-2 rounded-full"
                                animate={{ backgroundColor: isHovered ? "#10b981" : "#cbd5e1" }}
                            />
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase group-hover:text-emerald-700 transition-colors">
                                {isHovered ? "ACTIVE" : "IDLE"}
                            </span>
                        </div>
                    </div>

                    <h3 className="text-3xl font-serif text-slate-900 mb-4 group-hover:translate-x-1 transition-transform duration-300">
                        {service.title}
                    </h3>

                    <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-[90%] font-medium">
                        {service.desc}
                    </p>
                </div>

                {/* DIVIDER with simple expansion effect */}
                <motion.div
                    className="w-full h-px bg-slate-100 my-8 relative overflow-hidden"
                    style={{ transform: "translateZ(10px)" }}
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={isHovered ? { x: "100%" } : { x: "-100%" }}
                        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0, ease: "linear" }}
                    />
                </motion.div>

                {/* FOOTER */}
                <div className="relative z-10 flex items-end justify-between" style={{ transform: "translateZ(40px)" }}>
                    <div>
                        <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">
                            {service.statLabel}
                        </div>
                        <motion.div
                            className="text-5xl font-mono font-light tracking-tighter text-slate-900"
                            animate={isHovered ? { color: "#047857" } : { color: "#0f172a" }}
                        >
                            {service.stat}
                        </motion.div>
                    </div>

                    <motion.button
                        className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300 shadow-sm"
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowRight size={20} className="group-hover:-rotate-45 transition-transform duration-300" />
                    </motion.button>
                </div>

                {/* Floating Particles (Sparkles) */}
                {isHovered && Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-emerald-400 rounded-full blur-[1px] pointer-events-none"
                        initial={{ opacity: 0, x: Math.random() * 300, y: Math.random() * 300, scale: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            y: [null, -50],
                            x: [null, Math.random() * 20 - 10],
                            scale: [0, 1.5, 0]
                        }}
                        transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                    />
                ))}

            </motion.div>
        </motion.div>
    );
}

// Special Large 3D Card for HRMS Section
function HRMS3DCard() {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / rect.width - 0.5;
        const yPct = mouseY / rect.height - 0.5;

        setRotation({
            x: yPct * -5,  // Much subtler tilt for a large card
            y: xPct * 5
        });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="perspective-2000"
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                className="relative bg-white rounded-[3rem] p-12 lg:p-24 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100 text-center overflow-hidden cursor-default group"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                    rotateX: rotation.x,
                    rotateY: rotation.y,
                    boxShadow: isHovered
                        ? "0 50px 120px -20px rgba(16, 185, 129, 0.2)"
                        : "0 40px 100px -20px rgba(0, 0, 0, 0.05)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
                {/* 1. Top Gradient Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 via-[#0A261D] to-emerald-400" />

                {/* 2. Shine Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-emerald-50/30 opacity-0 pointer-events-none"
                    animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                />

                {/* 3. Floating Content */}
                <div className="relative z-10 flex flex-col items-center" style={{ transform: "translateZ(30px)" }}>

                    {/* Floating Icon */}
                    <motion.div
                        className="w-24 h-24 bg-[#0A261D] rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-emerald-900/20 mb-10 rotate-[-5deg]"
                        animate={isHovered ? { rotate: 0, scale: 1.1 } : { rotate: -5, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                        <Database size={40} strokeWidth={1.5} />
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tighter">
                        Powered by <span className="text-emerald-700">Skoal HRMS</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto mb-14">
                        All payroll operations are managed through Skoal’s in-house HRMS platform, securely whitelisted for each client with <span className="inline-block bg-emerald-50 text-slate-900 font-semibold px-3 py-1 rounded-lg border border-emerald-100 transform -skew-x-6 hover:skew-x-0 transition-transform cursor-cell">dedicated databases</span> and access controls.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-10 py-5 bg-[#0A261D] text-white rounded-full font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-900/30 transition-all"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Request System Demo
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-[#0A261D] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
}

// Animated Counter Component
function Counter({ value, suffix = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const rounded = useTransform(springValue, (latest) => Math.floor(latest));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            // Parse numeric value from string (remove commas, signs)
            const numericValue = parseInt(value.replace(/,/g, "").replace(/\+/g, "").replace(/M/g, ""), 10);
            motionValue.set(numericValue);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return rounded.on("change", (latest) => {
            setDisplayValue(latest.toLocaleString());
        });
    }, [rounded]);

    return <span ref={ref}>{displayValue}{suffix}</span>;
}

// New Stats Section Component
function StatsSection() {
    const stats = [
        {
            value: "30",
            suffix: "+",
            label: "years of experience",
            icon: <Layers className="text-emerald-400" size={32} />
        },
        {
            value: "180",
            suffix: "+",
            label: "countries worldwide",
            icon: <Globe className="text-emerald-400" size={32} />
        },
        {
            value: "1,400",
            suffix: "",
            label: "global customers",
            icon: <Users className="text-emerald-400" size={32} />
        },
        {
            value: "11",
            suffix: "M+",
            label: "employees served",
            icon: <ShieldCheck className="text-emerald-400" size={32} />
        },
        {
            value: "200",
            suffix: "M+",
            label: "annual employee interactions",
            icon: <Activity className="text-emerald-400" size={32} />
        }
    ];

    return (
        <section className="bg-[#0A261D] py-24 px-6 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"
                />
                <motion.div
                    animate={{ opacity: [0.1, 0.2, 0.1], scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"
                />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center">
                    {stats.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                            whileHover={{ y: -10 }}
                            className="flex flex-col items-center group cursor-default"
                        >
                            <motion.div
                                className="mb-6 p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden"
                                whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="relative z-10">{item.icon}</div>
                                <motion.div
                                    className="absolute inset-0 bg-emerald-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    layoutId="glow"
                                />
                            </motion.div>

                            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight font-mono">
                                <Counter value={item.value} suffix={item.suffix} />
                            </h3>

                            <p className="text-emerald-100/60 text-xs font-bold uppercase tracking-widest max-w-[140px] mx-auto leading-relaxed group-hover:text-emerald-400 transition-colors duration-300">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Helper for BPO List Items
function BPOItem({ icon, title }) {
    return (
        <motion.li
            className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-300"
            whileHover={{ x: 5 }}
        >
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                {icon}
            </div>
            <span className="text-slate-700 font-medium">{title}</span>
        </motion.li>
    );
}

// BPO Services Section
function BPOSection() {
    return (
        <section className="py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-4 block">
                            Outsourcing Solutions
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                            Skoal <span className="text-emerald-700">BPO Services</span>
                        </h2>
                        <p className="text-xl text-slate-500 leading-relaxed">
                            Secure, scalable, and performance-driven solutions tailored for modern digital businesses. We deliver omnichannel customer experience and revenue outcomes.
                        </p>
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">

                    {/* Card 1: Customer Support */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group relative bg-[#022c22] rounded-[3rem] p-8 md:p-12 overflow-hidden text-white"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10">
                                <Headset size={32} className="text-emerald-400" />
                            </div>

                            <h3 className="text-3xl font-bold mb-2">Customer Support</h3>
                            <p className="text-emerald-100/70 mb-10">Complete customer engagement suite.</p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <MessageSquare size={20} className="text-emerald-400" />
                                    <span>Email & ticket-based support</span>
                                </li>
                                <li className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <MessageSquare size={20} className="text-emerald-400" />
                                    <span>Live chat & messaging platforms</span>
                                </li>
                                <li className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <Phone size={20} className="text-emerald-400" />
                                    <span>Inbound voice support</span>
                                </li>
                                <li className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <Users size={20} className="text-emerald-400" />
                                    <span>Outbound customer engagement</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Card 2: Revenue Support */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="group relative bg-slate-50 rounded-[3rem] p-8 md:p-12 overflow-hidden border border-slate-100"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-50" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm border border-slate-100">
                                <TrendingUp size={32} className="text-emerald-600" />
                            </div>

                            <h3 className="text-3xl font-bold text-slate-900 mb-2">Revenue & Growth</h3>
                            <p className="text-slate-500 mb-10">Maximize value with sales support.</p>

                            <ul className="space-y-4">
                                <BPOItem icon={<ShoppingCart size={20} />} title="Cart abandonment calling" />
                                <BPOItem icon={<ArrowUpRight size={20} />} title="Upsell and cross-sell campaigns" />
                                <BPOItem icon={<BarChart3 size={20} />} title="Curated cohort outbound sales" />
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100/50"
                >
                    <div className="flex items-center justify-center gap-3 text-emerald-800 font-medium text-sm">
                        <ShieldCheck size={18} />
                        <span>All operations supported by securely whitelisted CRMs, dialers, and ticketing systems.</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default function ServicesPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // Services Data
    const servicesList = [
        {
            title: "Salary Processing",
            desc: "Salary processing and disbursement.",
            icon: <Calculator size={24} />,
            stat: "100%",
            statLabel: "ACCURACY RATE"
        },
        {
            title: "Statutory Compliance",
            desc: "PF, ESIC, Gratuity, Professional Tax, TDS.",
            icon: <ShieldCheck size={24} />,
            stat: "ZERO",
            statLabel: "RISK EXPOSURE"
        },
        {
            title: "Employment Docs",
            desc: "Employment documentation and onboarding.",
            icon: <Users size={24} />,
            stat: "24HR",
            statLabel: "TURNAROUND"
        },
        {
            title: "Payroll Governance",
            desc: "Payroll governance and audit-ready reporting.",
            icon: <FileText size={24} />,
            stat: "AUDIT",
            statLabel: "READY STATUS"
        },
    ];

    return (
        <main ref={containerRef} className="bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 overflow-hidden">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 lg:px-12 overflow-hidden">

                {/* 1. ANIMATED ORBS BACKGROUND (From About Page) */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 opacity-[0.3]"
                        style={{
                            backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                            backgroundSize: '32px 32px'
                        }}
                    />
                    <motion.div
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.2, 1],
                            x: [0, 30, 0],
                            y: [0, -20, 0]
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-emerald-100/60 to-teal-100/40 rounded-full blur-[100px]"
                    />
                    <motion.div
                        animate={{
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.3, 1],
                            x: [0, -40, 0],
                            y: [0, 30, 0]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/40 to-emerald-100/40 rounded-full blur-[90px]"
                    />
                </div>

                <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-20 items-center relative z-10">

                    {/* LEFT: TEXT CONTENT (3D Reveal Style) */}
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-sm mb-10"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#06402B]"></span>
                            </span>
                            <span className="text-slate-600 text-xs font-bold tracking-widest uppercase">Core Services</span>
                        </motion.div>

                        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[1.1] mb-10 text-slate-900">
                            <div className="overflow-hidden">
                                <motion.span
                                    initial={{ y: "100%", rotateX: -20 }}
                                    animate={{ y: 0, rotateX: 0 }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="block origin-bottom-left"
                                >
                                    Skoal HR &
                                </motion.span>
                            </div>
                            <div className="overflow-hidden py-2">
                                <motion.span
                                    initial={{ y: "100%", rotateX: -20 }}
                                    animate={{ y: 0, rotateX: 0 }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                    className="block origin-bottom-left font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#022c22] via-[#059669] to-[#022c22] animate-gradient-x bg-[length:200%_auto]"
                                >
                                    Payrolling.
                                </motion.span>
                            </div>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="text-xl text-slate-500 leading-relaxed max-w-lg mb-12 font-medium"
                        >
                            We manage your entire employee lifecycle with a focus on compliance, transparency, and precision.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-6"
                        >
                            <button className="group relative px-8 py-4 bg-[#0A261D] text-white rounded-full overflow-hidden transition-all hover:shadow-2xl hover:shadow-emerald-900/30">
                                <span className="relative z-10 flex items-center gap-2 font-semibold">
                                    Explore Solutions <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-emerald-800 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                            </button>
                        </motion.div>
                    </div>

                    {/* RIGHT: "SERVICE DECK" ANIMATION (Fan Effect) */}
                    <div className="relative h-[600px] flex items-center justify-center perspective-[2000px]">

                        {/* Card 3: Back (Compliance) */}
                        <motion.div
                            initial={{ opacity: 0, rotateZ: 0, y: 50, scale: 0.8 }}
                            animate={{ opacity: 1, rotateZ: 12, y: 0, x: 60, scale: 0.95 }}
                            transition={{ duration: 1.2, delay: 0.4, ease: "backOut" }}
                            className="absolute w-[380px] h-[500px] bg-emerald-900 rounded-[2.5rem] shadow-xl p-8 border border-white/10 z-10"
                        >
                            <div className="h-full flex flex-col justify-between opacity-40">
                                <div className="w-12 h-12 rounded-full bg-white/20" />
                                <div className="space-y-4">
                                    <div className="h-4 w-3/4 bg-white/20 rounded-full" />
                                    <div className="h-4 w-1/2 bg-white/20 rounded-full" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Middle (HRMS) */}
                        <motion.div
                            initial={{ opacity: 0, rotateZ: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, rotateZ: -6, y: 0, x: -60, scale: 0.95 }}
                            transition={{ duration: 1.2, delay: 0.3, ease: "backOut" }}
                            className="absolute w-[380px] h-[500px] bg-slate-100 rounded-[2.5rem] shadow-xl p-8 border border-slate-200 z-20"
                        >
                            <div className="h-full flex flex-col justify-between opacity-30">
                                <div className="w-12 h-12 rounded-full bg-slate-900/20" />
                                <div className="space-y-4">
                                    <div className="h-4 w-3/4 bg-slate-900/20 rounded-full" />
                                    <div className="h-4 w-1/2 bg-slate-900/20 rounded-full" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 1: Front (Main Metric) */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                            className="relative w-[380px] h-[500px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] p-8 border border-slate-100 z-30 flex flex-col justify-between"
                        >
                            <div className="flex items-center justify-between">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                                    <Activity size={28} />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                                    Live
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">System Status</div>
                                    <div className="text-3xl font-serif font-medium text-slate-900">Optimal</div>
                                </div>

                                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-slate-500">Payroll Cycle</span>
                                        <span className="text-slate-900 font-bold">On Track</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "75%" }}
                                            transition={{ duration: 1.5, delay: 1 }}
                                            className="h-full bg-emerald-500 rounded-full"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-emerald-500 text-white p-4 rounded-2xl">
                                        <PieChart size={20} className="mb-2 opacity-80" />
                                        <div className="text-2xl font-bold">100%</div>
                                        <div className="text-[10px] opacity-80 uppercase tracking-wider">Compliance</div>
                                    </div>
                                    <div className="bg-slate-900 text-white p-4 rounded-2xl">
                                        <Layers size={20} className="mb-2 opacity-80" />
                                        <div className="text-2xl font-bold">Zero</div>
                                        <div className="text-[10px] opacity-80 uppercase tracking-wider">Discrepancy</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </section>

            {/* --- WHAT WE DO SECTION --- */}
            <section className="relative z-10 py-24">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 overflow-hidden">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            d="M -100 200 Q 400 300 800 200 T 2000 200"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="3"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </svg>
                </div>

                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20 max-w-3xl mx-auto"
                    >
                        <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-4 block">
                            Our Services
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            We provide fully compliant payrolling services across <span className="text-emerald-700">India</span> and the <span className="text-emerald-700">Middle East.</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {servicesList.map((service, index) => (
                            <PrecisionCard key={index} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- STATS SECTION --- */}
            <StatsSection />

            {/* --- BPO SERVICES SECTION --- */}
            <BPOSection />

            {/* --- HRMS FOOTER --- */}
            <section className="py-32 px-6 lg:px-12 relative overflow-hidden bg-slate-50/50">
                <div className="container mx-auto max-w-5xl relative z-10">
                    <HRMS3DCard />
                </div>
            </section>

            <Footer />
        </main>
    );
}

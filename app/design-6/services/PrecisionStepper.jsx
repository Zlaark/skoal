"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import {
    Calculator,
    ShieldCheck,
    Users,
    FileText,
    CheckCircle2,
    ArrowRight,
    Sparkles,
    Zap,
    Lock,
    Clock
} from "lucide-react";

const steps = [
    {
        id: "processing",
        title: "Salary Processing",
        desc: "Automated, error-free salary disbursement tailored to your cycle. We handle complex structures, deductions, and reimbursements with 100% accuracy.",
        icon: Calculator,
        stats: "100%",
        statLabel: "Accuracy",
        color: "emerald",
        visual: "CalculationEngine"
    },
    {
        id: "compliance",
        title: "Statutory Compliance",
        desc: "Complete handling of PF, ESIC, Gratuity, and Professional Tax. We keep you compliant with ever-changing regulations across India and the Middle East.",
        icon: ShieldCheck,
        stats: "Zero",
        statLabel: "Risk Exposure",
        color: "teal",
        visual: "ShieldMatrix"
    },
    {
        id: "docs",
        title: "Employment Docs",
        desc: "Seamless generation and management of all employment documentation, from offer letters to relieving orders, ensuring a smooth employee lifecycle.",
        icon: Users,
        stats: "24hr",
        statLabel: "Turnaround",
        color: "cyan",
        visual: "DocFlow"
    },
    {
        id: "governance",
        title: "Payroll Governance",
        desc: "Robust audit trails and governance frameworks. Our systems ensure you are always audit-ready with transparent, real-time reporting.",
        icon: FileText,
        stats: "Audit",
        statLabel: "Ready Status",
        color: "emerald",
        visual: "AuditLog"
    }
];

// --- VISUAL COMPONENTS (Right Side) ---

const VisualCard = ({ activeStep }) => {
    return (
        <div className="relative w-full h-full bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 opacity-80" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Content Switcher */}
            <div className="relative z-10 w-full h-full p-8 md:p-12 flex flex-col items-center justify-center">
                {steps.map((step) => (
                    activeStep === step.id && (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                        >
                            {/* Icon Holo */}
                            <div className={`w-24 h-24 rounded-3xl bg-${step.color}-500/10 border border-${step.color}-500/30 flex items-center justify-center mb-8 shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)] backdrop-blur-sm`}>
                                <step.icon size={48} className={`text-${step.color}-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]`} strokeWidth={1.5} />
                            </div>

                            {/* Dynamic Visual Element based on type */}
                            <div className="w-full max-w-xs h-32 relative mb-8">
                                {step.visual === "CalculationEngine" && (
                                    <div className="flex gap-2 justify-center items-end h-full p-4">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <motion.div
                                                key={i}
                                                className="w-4 bg-emerald-500 rounded-t-lg opacity-60"
                                                animate={{ height: [20, 80, 40, 100, 30] }}
                                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, repeatType: "mirror" }}
                                            />
                                        ))}
                                    </div>
                                )}
                                {step.visual === "ShieldMatrix" && (
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <motion.div
                                            className="absolute inset-0 border-2 border-teal-500/30 rounded-full"
                                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        />
                                        <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center backdrop-blur-md border border-teal-400/50">
                                            <Lock size={32} className="text-teal-400" />
                                        </div>
                                    </div>
                                )}
                                {step.visual === "DocFlow" && (
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <motion.div
                                            className="absolute w-20 h-24 bg-cyan-500/10 border border-cyan-400/30 rounded-lg"
                                            animate={{ x: [0, 20, 0], rotate: [0, 5, 0] }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                        />
                                        <motion.div
                                            className="absolute w-20 h-24 bg-cyan-500/20 border border-cyan-400/50 rounded-lg backdrop-blur-sm"
                                            animate={{ x: [0, -20, 0], rotate: [0, -5, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                                        />
                                    </div>
                                )}
                                {step.visual === "AuditLog" && (
                                    <div className="flex flex-col gap-2 w-full max-w-[200px] mx-auto opacity-70">
                                        {[1, 2, 3].map(i => (
                                            <motion.div
                                                key={i}
                                                className="h-2 bg-emerald-400/40 rounded-full w-full"
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 1, delay: i * 0.2, repeat: Infinity, repeatDelay: 2 }}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-8 w-full border-t border-white/5 pt-6">
                                <div>
                                    <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">{step.statLabel}</div>
                                    <div className={`text-3xl font-bold text-${step.color}-400`}>{step.stats}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">Status</div>
                                    <div className="text-emerald-400 flex items-center justify-end gap-1">
                                        <CheckCircle2 size={14} /> Active
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                ))}
            </div>
        </div>
    );
};

// --- MAIN STEPPER COMPONENT ---

export default function PrecisionStepper() {
    const [activeStep, setActiveStep] = useState(steps[0].id);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="py-24 bg-[#FAFAFA] relative">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
                    >
                        <Zap size={16} className="text-emerald-500 fill-emerald-500" />
                        <span className="text-xs font-bold text-slate-600 tracking-widest uppercase">The Process</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                        Precision Payrolling
                        <span className="block mt-2 font-serif italic text-emerald-600 font-normal">
                            Simplified.
                        </span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        A seamless, automated workflow designed for global standards.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* LEFT: Steps List */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4 py-10">
                        {steps.map((step, index) => (
                            <StepItem
                                key={step.id}
                                step={step}
                                index={index}
                                setActiveStep={setActiveStep}
                            />
                        ))}
                    </div>

                    {/* RIGHT: Sticky Visual */}
                    <div className="hidden lg:block w-full lg:w-1/2 sticky top-32 h-[600px]">
                        <VisualCard activeStep={activeStep} />
                    </div>

                </div>
            </div>
        </section>
    );
}

// Separate component to handle in-view detection for each step
function StepItem({ step, index, setActiveStep }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isInView) {
            setActiveStep(step.id);
        }
    }, [isInView, step.id, setActiveStep]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group relative flex items-start gap-4 cursor-pointer transition-all duration-300 rounded-3xl p-4 border ${isInView ? 'bg-white border-slate-100 shadow-xl shadow-slate-200/50 scale-[1.02]' : 'border-transparent hover:bg-white/50'}`}
        >
            {/* Number / Connector */}
            <div className="flex flex-col items-center gap-2 shrink-0">
                <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg font-bold transition-all duration-500 z-10 bg-white relative
                    ${isInView ? `border-${step.color}-500 text-${step.color}-600 shadow-lg scale-110` : 'border-slate-200 text-slate-300'}`}>
                    0{index + 1}
                </div>
            </div>

            {/* Content */}
            <div className="w-full pt-2">
                <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${isInView ? 'text-slate-900' : 'text-slate-400'}`}>
                    {step.title}
                </h3>

                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: isHovered ? "auto" : 0,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <p className={`text-lg leading-relaxed transition-colors duration-300 max-w-xl ${isInView ? 'text-slate-600' : 'text-slate-400'}`}>
                        {step.desc}
                    </p>

                    {/* Inline Stats (Revealed on Hover) */}
                    <div className="pt-4 mt-4 border-t border-slate-100/50 flex items-center gap-8">
                        <div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{step.statLabel}</div>
                            <div className={`text-2xl font-bold text-${step.color}-600`}>{step.stats}</div>
                        </div>
                        <div className={`hidden md:block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-${step.color}-50 text-${step.color}-700 border border-${step.color}-100`}>
                            Active Phase
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

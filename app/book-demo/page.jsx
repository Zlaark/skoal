"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import {
    ArrowRight,
    CheckCircle2,
    MoveRight,
    Asterisk,
    AlertCircle
} from "lucide-react";

/**
 * THE KINETIC LEDGER (Book Demo Page)
 * 
 * Concept: "Modern Architectural / Editorial"
 * - Layout: Asymmetrical Split (Sticky Left, Scroll Right).
 * - Visual: "The Glass Prism" - Abstract 3D blocks representing structure.
 * - Form: "The Ledger" - Numbered, underlined rows. Feels like a contract.
 */

// --- VALIDATION SCHEMA ---
const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid work email"),
    company: z.string().min(2, "Company name is required"),
    phone: z.string().min(6, "Please enter a valid phone number"),
    employees: z.string().min(1, "Please select workforce size"),
    message: z.string().min(10, "Please provide a bit more detail (10+ chars)")
});

// --- 1. ARCHITECTURAL PRISM COMPONENT ---
function GlassPrism() {
    return (
        <div className="relative w-64 h-64 lg:w-96 lg:h-96 perspective-1000">
            <motion.div
                className="w-full h-full preserve-3d relative"
                animate={{ rotateX: [15, 25, 15], rotateY: [0, 360] }}
                transition={{
                    rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                    rotateY: { duration: 30, repeat: Infinity, ease: "linear" }
                }}
            >
                {/* Prism Layer 1 (Base) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-slate-900/10 bg-emerald-50/20 backdrop-blur-sm transform-style-3d rotate-x-90 translate-z-20 shadow-[0_20px_50px_rgba(0,0,0,0.05)]" />

                {/* Prism Layer 2 (Middle) */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-slate-900/10 bg-white/40 backdrop-blur-md transform-style-3d"
                    animate={{ translateZ: [40, 60, 40] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Prism Layer 3 (Top Float) */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-emerald-500/20 bg-emerald-100/30 backdrop-blur-xl transform-style-3d"
                    animate={{ translateZ: [80, 120, 80], rotateZ: [0, 45, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Inner Core */}
                    <div className="absolute inset-4 border border-emerald-500/30 opacity-50" />
                </motion.div>

                {/* Orbiting Satellite (Data Point) */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-3 h-3 bg-emerald-600 rounded-full shadow-lg"
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "100px 0px" }} // Orbital radius
                />
            </motion.div>
        </div>
    );
}

// --- 2. LEDGER INPUT ROW (With Validation & Custom Select) ---
function LedgerRow({ number, label, type = "text", value, onChange, placeholder, options, error }) {
    const [isFocused, setIsFocused] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Handle Custom Select Selection
    const handleSelect = (option) => {
        onChange({ target: { value: option } }); // Mock event object
        setIsDropdownOpen(false);
        setIsFocused(false);
    };

    return (
        <motion.div
            // Z-Index Fix: Increase z-index when focused or dropdown is open to float above subsequent rows
            className={`group relative flex flex-col md:flex-row md:items-baseline gap-4 py-8 border-b transition-all duration-300 
            ${error ? 'border-red-200 bg-red-50/10' : 'border-slate-100'} 
            ${isFocused || isDropdownOpen ? 'bg-emerald-50/50 z-50 scale-[1.01] shadow-sm' : 'hover:bg-slate-50 z-0'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            {/* Row Number */}
            <div className="md:w-32 shrink-0 pl-6 md:pl-12 flex flex-col">
                <span className={`text-xs font-bold tracking-widest transition-colors duration-300 ${error ? 'text-red-500' : ((isFocused || isDropdownOpen) ? 'text-emerald-600' : 'text-slate-400')}`}>
                    {number}
                </span>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1 mt-2 text-red-500"
                    >
                        <AlertCircle size={10} />
                        <span className="text-[10px] font-bold uppercase tracking-wider">{error}</span>
                    </motion.div>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 pr-6 md:pr-12 relative">
                <label className={`block text-sm font-semibold uppercase tracking-wider mb-2 transition-colors duration-300 ${error ? 'text-red-800' : ((isFocused || isDropdownOpen) ? 'text-emerald-800' : 'text-slate-900')}`}>
                    {label}
                </label>

                {type === "textarea" ? (
                    <textarea
                        rows={3}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="w-full bg-transparent text-xl md:text-2xl text-slate-800 placeholder-slate-300 outline-none resize-none px-0 transition-all duration-300 font-serif active:bg-transparent"
                        placeholder={placeholder}
                    />
                ) : type === "select" ? (
                    <div className="relative">
                        {/* Custom Dropdown Trigger */}
                        <div
                            onClick={() => {
                                setIsDropdownOpen(!isDropdownOpen);
                                setIsFocused(!isDropdownOpen);
                            }}
                            className={`w-full bg-transparent text-xl md:text-2xl outline-none cursor-pointer flex items-center justify-between pb-2
                            ${!value ? 'text-slate-300' : 'text-slate-800'} font-serif`}
                        >
                            {value || placeholder}
                            <ArrowRight size={18} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-90 text-emerald-600' : 'text-slate-300'}`} />
                        </div>

                        {/* Custom Dropdown Options */}
                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute top-full left-0 right-0 bg-white border border-emerald-100 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] rounded-xl overflow-hidden z-[100] mt-2 max-h-60 overflow-y-auto"
                                >
                                    {options.map(opt => (
                                        <div
                                            key={opt}
                                            onClick={() => handleSelect(opt)}
                                            className="px-6 py-4 hover:bg-emerald-50 cursor-pointer text-lg font-serif text-slate-700 hover:text-emerald-800 transition-colors border-b border-emerald-50 last:border-0"
                                        >
                                            {opt}
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Invisible Overlay to close dropdown */}
                        {isDropdownOpen && <div className="fixed inset-0 z-40 bg-transparent" onClick={() => { setIsDropdownOpen(false); setIsFocused(false); }} />}
                    </div>
                ) : (
                    <input
                        type={type}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="w-full bg-transparent text-xl md:text-2xl text-slate-800 placeholder-slate-300 outline-none px-0 transition-all duration-300 font-serif"
                        placeholder={placeholder}
                    />
                )}
            </div>

            {/* Active/Error Indicator Line */}
            <motion.div
                className={`absolute left-0 top-0 bottom-0 w-1 ${error ? 'bg-red-500' : 'bg-emerald-500'}`}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: (isFocused || isDropdownOpen || error) ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
}

// --- 3. MAIN PAGE COMPONENT ---
export default function BookDemoPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        employees: "",
        message: ""
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Scroll Progress Logic (Simplified Visual)
    const [scrollProgress, setScrollProgress] = useState(0);

    const validateForm = () => {
        const result = formSchema.safeParse(formData);
        if (!result.success) {
            const formattedErrors = {};
            result.error.issues.forEach(issue => {
                formattedErrors[issue.path[0]] = issue.message;
            });
            setErrors(formattedErrors);
            return false;
        }
        setErrors({});
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 2000);
    };

    return (
        <section className="relative min-h-screen bg-white">

            <div className="flex flex-col lg:flex-row">

                {/* === LEFT COLUMN: STICKY BRAND VISUAL === */}
                <div className="hidden lg:flex w-5/12 h-screen sticky top-0 flex-col justify-between p-16 bg-slate-50 border-r border-slate-100 overflow-hidden">

                    {/* Top Branding */}
                    <div>
                        {/* Spacer for where logo used to be */}
                        <div className="mb-12"></div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl font-bold text-slate-900 leading-[1.1] mb-6"
                        >
                            Future-Proof <br />
                            <span className="font-serif italic font-normal text-emerald-700">Workforce.</span>
                        </motion.h1>

                        <p className="text-slate-500 max-w-sm leading-relaxed">
                            Designed for scale. Engineered for compliance. Experience the new standard in global hiring.
                        </p>
                    </div>

                    {/* Center Visual */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <GlassPrism />
                    </div>

                    {/* Bottom Info */}
                    <div className="flex gap-8 text-xs font-bold tracking-widest text-slate-400 uppercase">
                        <span>Est 2015</span>
                        <span>Dubai • Riyadh • Mumbai</span>
                    </div>
                </div>

                {/* === RIGHT COLUMN: THE LEDGER FORM === */}
                <div className="w-full lg:w-7/12 min-h-screen bg-white relative">

                    {/* Mobile Header (Visible only on small screens) */}
                    <div className="lg:hidden p-8 pb-0">
                        <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-4">
                            Book Your <br />
                            <span className="font-serif italic text-emerald-600">Demo</span>
                        </h1>
                    </div>

                    {isSubmitted ? (
                        /* Success State */
                        <div className="h-screen flex flex-col items-center justify-center text-center p-8">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="w-24 h-24 rounded-full border-2 border-emerald-100 flex items-center justify-center mb-8 relative"
                            >
                                <div className="absolute inset-2 bg-emerald-50 rounded-full animate-pulse" />
                                <CheckCircle2 size={40} className="text-emerald-600 relative z-10" />
                            </motion.div>
                            <h2 className="text-4xl font-serif text-slate-900 mb-4">Request Confirmed.</h2>
                            <p className="text-slate-500 max-w-md">The ledger has been updated. Our team is reviewing your profile and will initiate contact shortly.</p>

                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="mt-12 text-xs font-bold tracking-widest uppercase text-slate-900 hover:text-emerald-600 underline underline-offset-4 transition-colors"
                            >
                                Start New Request
                            </button>
                        </div>
                    ) : (
                        /* The Ledger Form */
                        <form onSubmit={handleSubmit} className="pb-32 lg:pt-32">

                            <div className="px-6 md:px-12 mb-12 lg:mb-16">
                                <div className="flex items-center gap-3 text-emerald-600 mb-4">
                                    <Asterisk size={14} className="animate-spin-slow" />
                                    <span className="text-xs font-bold tracking-widest uppercase">Consultation Request</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif text-slate-900">
                                    Tell us about your organization.
                                </h2>
                            </div>

                            <LedgerRow
                                number="01"
                                label="Full Name"
                                placeholder="e.g. Alexander Smith"
                                value={formData.name}
                                onChange={(e) => {
                                    setFormData({ ...formData, name: e.target.value });
                                    if (errors.name) setErrors({ ...errors, name: null });
                                }}
                                error={errors.name}
                            />

                            <LedgerRow
                                number="02"
                                label="Work Email"
                                type="email"
                                placeholder="e.g. alex@company.com"
                                value={formData.email}
                                onChange={(e) => {
                                    setFormData({ ...formData, email: e.target.value });
                                    if (errors.email) setErrors({ ...errors, email: null });
                                }}
                                error={errors.email}
                            />

                            <LedgerRow
                                number="03"
                                label="Company"
                                placeholder="e.g. Acme Industries"
                                value={formData.company}
                                onChange={(e) => {
                                    setFormData({ ...formData, company: e.target.value });
                                    if (errors.company) setErrors({ ...errors, company: null });
                                }}
                                error={errors.company}
                            />

                            <LedgerRow
                                number="04"
                                label="Phone Number"
                                type="tel"
                                placeholder="e.g. +1 (555) 123-4567"
                                value={formData.phone}
                                onChange={(e) => {
                                    setFormData({ ...formData, phone: e.target.value });
                                    if (errors.phone) setErrors({ ...errors, phone: null });
                                }}
                                error={errors.phone}
                            />

                            <LedgerRow
                                number="05"
                                label="Workforce Size"
                                type="select"
                                placeholder="Select scale..."
                                value={formData.employees}
                                onChange={(e) => {
                                    setFormData({ ...formData, employees: e.target.value });
                                    if (errors.employees) setErrors({ ...errors, employees: null });
                                }}
                                error={errors.employees}
                                options={[
                                    "1 - 50 Employees",
                                    "51 - 200 Employees",
                                    "201 - 500 Employees",
                                    "500+ Enterprise"
                                ]}
                            />

                            <LedgerRow
                                number="06"
                                label="The Challenge"
                                type="textarea"
                                placeholder="Briefly describe your hiring goals..."
                                value={formData.message}
                                onChange={(e) => {
                                    setFormData({ ...formData, message: e.target.value });
                                    if (errors.message) setErrors({ ...errors, message: null });
                                }}
                                error={errors.message}
                            />

                            {/* Submit Action */}
                            <div className="px-6 md:px-12 pt-16">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group relative inline-flex items-center justify-between w-full md:w-auto md:min-w-[300px] bg-slate-900 text-white rounded-none px-8 py-6 overflow-hidden transition-all hover:bg-emerald-900 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <span className="relative z-10 font-bold uppercase tracking-widest text-sm">
                                        {isSubmitting ? "Processing..." : "Submit Request"}
                                    </span>

                                    <div className="relative z-10 flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                                        <MoveRight size={18} />
                                    </div>

                                    {/* Hover Fill Effect */}
                                    <div className="absolute inset-0 bg-emerald-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                </button>

                                <p className="mt-8 text-xs text-slate-400 max-w-xs leading-relaxed">
                                    By clicking submit, you agree to our Terms of Service. Your data is encrypted and secure.
                                </p>
                            </div>

                        </form>
                    )}

                </div>
            </div>
        </section>
    );
}

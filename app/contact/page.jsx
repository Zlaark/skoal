"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import {
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Globe,
  Clock
} from "lucide-react";

/**
 * THE KINETIC CONNECT
 * 
 * Concept: "Architectural Network"
 * - Layout: Asymmetrical Split (Scroll Left, Sticky Right).
 * - Visual: "Kinetic Sculpture" - Clean orbitals.
 * - Form: "Glass Blocks" - Minimalist filled inputs.
 */

// --- VALIDATION SCHEMA ---
const formSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Invalid email"),
  inquiry: z.enum(["general", "support", "sales", "partnership", "careers"]),
  message: z.string().min(10, "Message too short")
});

// --- 2. COMPACT GLASS INPUT ---
function GlassInput({ label, type = "text", value, onChange, placeholder, error, options }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle Custom Select
  const handleSelect = (optionValue) => {
    onChange({ target: { value: optionValue } }); // Mock event
    setIsDropdownOpen(false);
    setIsFocused(false);
  };

  return (
    <div className="space-y-1.5 group relative">
      <div className="flex justify-between items-baseline">
        <label className={`text-[10px] uppercase font-bold tracking-widest transition-colors duration-300 ${isFocused || isDropdownOpen ? 'text-emerald-700' : 'text-slate-400'}`}>
          {label}
        </label>
      </div>

      {type === "textarea" ? (
        <textarea
          rows={4}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`w-full bg-slate-50 border rounded-lg px-4 py-3 text-sm font-serif outline-none transition-all duration-300 resize-none text-slate-900 placeholder:text-slate-400
                        ${error ? 'border-red-200 bg-red-50/10 text-red-900 placeholder:text-red-300' :
              isFocused ? 'border-emerald-500/30 bg-white shadow-sm ring-1 ring-emerald-500/20' : 'border-slate-100 hover:bg-white hover:border-slate-200'}`}
        />
      ) : type === "select" ? (
        <div className="relative">
          {/* Trigger */}
          <div
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
              setIsFocused(!isDropdownOpen);
            }}
            className={`w-full bg-slate-50 border rounded-lg px-4 py-3 text-sm font-serif flex items-center justify-between cursor-pointer transition-all duration-300
                            ${error ? 'border-red-200 bg-red-50/10 text-red-900' :
                (isFocused || isDropdownOpen) ? 'border-emerald-500/30 bg-white shadow-sm ring-1 ring-emerald-500/20 text-slate-900' : 'border-slate-100 text-slate-700 hover:bg-white hover:border-slate-200'}
                        `}
          >
            <span className={value ? "text-slate-900" : "text-slate-400"}>
              {value ? options.find(o => o.value === value)?.label : placeholder}
            </span>
            <ArrowRight size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-90 text-emerald-600' : 'text-slate-400'}`} />
          </div>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-lg shadow-xl overflow-hidden z-50 py-1"
                >
                  {options.map((opt) => (
                    <div
                      key={opt.value}
                      onClick={() => handleSelect(opt.value)}
                      className={`px-4 py-3 text-sm font-serif cursor-pointer transition-colors flex items-center justify-between group/opt
                                            ${value === opt.value ? 'bg-emerald-50 text-emerald-900' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'}
                                        `}
                    >
                      {opt.label}
                      {value === opt.value && <CheckCircle2 size={12} className="text-emerald-600" />}
                    </div>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`w-full bg-slate-50 border rounded-lg px-4 py-3 text-sm font-serif outline-none transition-all duration-300 text-slate-900 placeholder:text-slate-400
                        ${error ? 'border-red-200 bg-red-50/10 text-red-900 placeholder:text-red-300' :
              isFocused ? 'border-emerald-500/30 bg-white shadow-sm ring-1 ring-emerald-500/20' : 'border-slate-100 hover:bg-white hover:border-slate-200'}`}
        />
      )}

      {error && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="text-[10px] font-bold text-red-500 flex items-center gap-1 pt-1"
        >
          <AlertCircle size={10} /> {error}
        </motion.div>
      )}
    </div>
  );
}

// --- 3. MAIN CONTACT PAGE ---
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const formatted = {};
      result.error.issues.forEach(i => formatted[i.path[0]] = i.message);
      setErrors(formatted);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <section className="relative min-h-screen bg-white">

      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="flex flex-col-reverse lg:flex-row min-h-screen">

        {/* === LEFT COLUMN: COMPACT FORM === */}
        <div className="w-full lg:w-1/2 xl:w-5/12 px-6 py-12 lg:p-16 xl:p-20 bg-white relative z-10 flex flex-col justify-center">

          <div className="max-w-md mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <span className="text-emerald-600 font-bold tracking-widest text-[10px] uppercase mb-3 block">
                Communication Channel_01
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                Initiate <span className="font-serif italic font-normal text-emerald-700">Contact.</span>
              </h1>
            </motion.div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-slate-50 rounded-xl p-8 text-center border border-slate-100"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-emerald-600">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Received.</h3>
                <p className="text-sm text-slate-500 mb-6">We'll respond shortly.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[10px] font-bold tracking-widest uppercase text-slate-900 hover:text-emerald-600 underline underline-offset-4"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <GlassInput
                    label="Name"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    error={errors.name}
                  />
                  <GlassInput
                    label="Email"
                    type="email"
                    placeholder="jane@work.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    error={errors.email}
                  />
                </div>

                <GlassInput
                  label="Subject"
                  type="select"
                  placeholder="Choose Topic..."
                  value={formData.inquiry}
                  onChange={(e) => {
                    setFormData({ ...formData, inquiry: e.target.value });
                    if (errors.inquiry) setErrors({ ...errors, inquiry: null });
                  }}
                  error={errors.inquiry}
                  options={[
                    { value: "general", label: "General Inquiry" },
                    { value: "sales", label: "Sales Opportunity" },
                    { value: "support", label: "Client Support" },
                    { value: "careers", label: "Join the Team" }
                  ]}
                />

                <GlassInput
                  label="Message"
                  type="textarea"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: null });
                  }}
                  error={errors.message}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-slate-900 text-white rounded-lg px-6 py-4 flex items-center justify-center gap-3 hover:bg-emerald-900 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  <span className="font-bold uppercase tracking-widest text-xs">
                    {isSubmitting ? "Sending..." : "Transmit Message"}
                  </span>
                  <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* === RIGHT COLUMN: CORPORATE GRID (STATIC) === */}
        <div className="w-full lg:w-1/2 xl:w-7/12 min-h-[500px] lg:h-screen lg:sticky lg:top-0 bg-zinc-950 text-white p-12 lg:p-20 flex flex-col relative overflow-hidden">

          {/* Background Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 Mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-[120px]" />

          {/* Header */}
          <div className="relative z-10 mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-emerald-500/50" />
              <span className="text-emerald-500 font-bold tracking-widest text-[10px] uppercase">Global Operations</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif leading-tight text-white mb-2">
              Skoal <span className="italic text-emerald-500 opacity-80">Solutions.</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-sm">
              Seamlessly connecting talent across borders.
            </p>
          </div>

          {/* Operations Grid */}
          <div className="relative z-10 grid md:grid-cols-2 gap-y-12 gap-x-8">

            {/* Location 1 */}
            <div className="group">
              <span className="block text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-4 group-hover:text-emerald-500 transition-colors">Headquarters</span>
              <h3 className="text-xl font-serif text-white mb-2">Dubai, UAE</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                Silver Tower, Business Bay<br />
                14th Floor, Office 1403<br />
                P.O. Box 123456
              </p>
            </div>

            {/* Location 2 */}
            <div className="group">
              <span className="block text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-4 group-hover:text-emerald-500 transition-colors">India Operations</span>
              <h3 className="text-xl font-serif text-white mb-2">Mumbai, India</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                Bandra Kurla Complex (BKC)<br />
                Capital Tower, Level 7<br />
                Mumbai 400051
              </p>
            </div>

            {/* Contact Detail */}
            <div className="group md:col-span-2 pt-8 border-t border-white/5">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <span className="block text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-3">General Inquiries</span>
                  <p className="text-lg font-serif text-white hover:text-emerald-400 transition-colors cursor-pointer">hello@skoalsolutions.com</p>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-3">Support Team</span>
                  <p className="text-lg font-serif text-slate-200">+971 4 123 4567</p>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Decor */}
          <div className="mt-auto pt-12 flex justify-between text-[10px] text-slate-600 uppercase tracking-widest font-bold">
            <span>© 2024 Skoal Inc.</span>
            <span>All Systems Operational</span>
          </div>

        </div>
      </div>
    </section>
  );
}

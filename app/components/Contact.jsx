"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { z } from "zod";

// --- VALIDATION SCHEMA ---
const formSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Invalid email"),
  inquiry: z.enum(["general", "support", "sales", "partnership", "careers"]),
  message: z.string().min(10, "Message too short")
});

// --- GLASS INPUT COMPONENT (Ported from Contact Page) ---
function GlassInput({ label, type = "text", value, onChange, placeholder, error, options }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle Custom Select
  const handleSelect = (optionValue) => {
    onChange({ target: { value: optionValue } });
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
                  className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-lg shadow-xl overflow-hidden z-50 py-1 max-h-60 overflow-y-auto"
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

// --- MAIN COMPONENT ---
export default function Contact() {
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
    <section className="relative py-32 bg-[#FAFAFA] text-slate-900 overflow-hidden" id="contact">

      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.3]"
        style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-[#FAFAFA]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-16 lg:gap-24">

          {/* --- LEFT: Editorial Header --- */}
          <div className="w-full lg:w-5/12 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-emerald-600 font-bold tracking-widest text-[10px] uppercase mb-4 block">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-[0.9] mb-8">
                Start the <br />
                <span className="italic text-emerald-700 opacity-90">Conversation.</span>
              </h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed max-w-sm border-l-2 border-emerald-500/20 pl-6 mb-12">
                Ready to transform your global workforce strategy? Let's discuss how we can tailor our infrastructure to your needs.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span>Response time: &lt; 24 Hours</span>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span>Direct Support Available</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT: Professional Form --- */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative group"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-bl-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                {isSubmitted ? (
                  <div className="py-20 text-center">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="inline-flex items-center justify-center w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full mb-6"
                    >
                      <CheckCircle2 size={32} />
                    </motion.div>
                    <h3 className="text-3xl font-serif text-slate-900 mb-2">Request Received.</h3>
                    <p className="text-slate-500 mb-8">Thank you for reaching out. We will be in touch shortly.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-emerald-700 underline underline-offset-4"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <GlassInput
                        label="Full Name"
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: null });
                        }}
                        error={errors.name}
                      />
                      <GlassInput
                        label="Work Email"
                        type="email"
                        placeholder="jane@company.com"
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
                      placeholder="How can we help?"
                      value={formData.inquiry}
                      onChange={(e) => {
                        setFormData({ ...formData, inquiry: e.target.value });
                        if (errors.inquiry) setErrors({ ...errors, inquiry: null });
                      }}
                      error={errors.inquiry}
                      options={[
                        { value: "general", label: "General Inquiry" },
                        { value: "sales", label: "Sales & Pricing" },
                        { value: "partnership", label: "Partnership Opportunity" },
                        { value: "careers", label: "Careers" }
                      ]}
                    />

                    <GlassInput
                      label="Message"
                      type="textarea"
                      placeholder="Tell us more about your requirements..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: null });
                      }}
                      error={errors.message}
                    />

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group w-full bg-slate-900 text-white rounded-xl px-8 py-5 flex items-center justify-center gap-3 hover:bg-emerald-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        <span className="font-bold uppercase tracking-widest text-xs">
                          {isSubmitting ? "Transmitting..." : "Send Message"}
                        </span>
                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

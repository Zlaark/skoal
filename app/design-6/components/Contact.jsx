"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="contact">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Let’s build a <br />
              <span className="text-emerald-400">compliant & scalable</span> <br />
              workforce.
            </motion.h2>

            <p className="mt-6 text-slate-400 text-lg max-w-md leading-relaxed">
              Skoal operates as your long-term operations partner. Reach out to design a custom workforce solution.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-medium mb-1">Headquarters</p>
                  <p className="text-lg">India | Middle East</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-emerald-400 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-medium mb-1">Email Us</p>
                  <p className="text-lg hover:text-emerald-400 transition-colors cursor-pointer">info@skoalsolutions.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-medium mb-1">Call Us</p>
                  <p className="text-lg">+91-XXXXXXXXXX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-slate-400 ml-1">First Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors text-white placeholder:text-white/20" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-slate-400 ml-1">Last Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors text-white placeholder:text-white/20" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-400 ml-1">Work Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors text-white placeholder:text-white/20" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-400 ml-1">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors text-white placeholder:text-white/20" placeholder="Tell us about your requirements..." />
              </div>

              <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group">
                Send Message
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-slate-500 text-center">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

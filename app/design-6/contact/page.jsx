"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-[#fafafa] via-slate-50 to-[#fafafa] py-24 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute w-[500px] h-[500px] bg-emerald-200/30 blur-[120px] rounded-full left-[-10%] top-[-20%]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-teal-200/20 blur-[100px] rounded-full right-[-10%] bottom-[-20%]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto bg-white/90 rounded-3xl shadow-xl p-10 md:p-16 border border-emerald-100 backdrop-blur-md">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl font-bold text-emerald-700 mb-6 text-center"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-xl text-slate-600 mb-8 text-center"
        >
          Let’s build a compliant, scalable, and future-ready workforce together.
        </motion.p>
        <div className="space-y-6 text-center">
          <div>
            <span className="block text-lg font-semibold text-slate-700">Skoal Solutions Pvt. Ltd.</span>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center md:gap-8 gap-2 items-center text-slate-600">
            <span className="flex items-center gap-2">📍 <span>India | Middle East</span></span>
            <span className="flex items-center gap-2">📧 <a href="mailto:info@skoalsolutions.com" className="underline hover:text-emerald-600">info@skoalsolutions.com</a></span>
            <span className="flex items-center gap-2">📞 <a href="tel:+91XXXXXXXXXX" className="underline hover:text-emerald-600">+91-XXXXXXXXXX</a></span>
          </div>
        </div>
        <div className="mt-10 text-center">
          <a
            href="mailto:info@skoalsolutions.com"
            className="inline-block px-8 py-4 bg-emerald-600 text-white font-bold rounded-full shadow-lg hover:bg-emerald-700 transition-all text-lg"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

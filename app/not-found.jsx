"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Gradient Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-emerald-50 rounded-full blur-[120px] opacity-20" />

        {/* Dot Grid */}
        <div className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Aesthetic 404 Text - Light Watermark */}
          <h1 className="text-[15rem] md:text-[20rem] font-bold leading-none tracking-tighter text-slate-100 select-none">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight"
            >
              Page Not Found
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-slate-500 max-w-md text-lg font-medium"
        >
          The page you are looking for has been moved, deleted, or possibly never existed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12"
        >
          <Link
            href="/"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#0A261D] hover:bg-[#06402B] text-white rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-900/20"
          >
            <span className="font-medium tracking-wide">Return to Home</span>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-colors">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Border Frame - Light Mode */}
      <div className="absolute inset-4 border border-slate-200 rounded-4xl pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-b from-slate-300 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-t from-slate-300 to-transparent" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-24 bg-linear-to-r from-slate-300 to-transparent" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-24 bg-linear-to-l from-slate-300 to-transparent" />
      </div>

    </div>
  );
}

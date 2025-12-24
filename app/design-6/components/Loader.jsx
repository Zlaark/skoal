"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 2000;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, duration / 100);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#022c22]" // Deep Emerald Green
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      {/* Aesthetic Frame Grid */}
      <div className="absolute inset-4 border border-emerald-800/30 rounded-3xl pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-emerald-900/20" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-emerald-900/20" />
      </div>

      {/* Inner Frame */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 p-12 border border-emerald-500/20 bg-[#064e3b]/30 backdrop-blur-md rounded-2xl flex flex-col items-center gap-2 shadow-2xl shadow-black/40"
      >
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-[10vw] md:text-[6vw] font-bold leading-none tracking-tighter flex items-start text-emerald-50"
          >
            <span>{count}</span>
            <span className="text-[3vw] md:text-[1.5vw] mt-2 md:mt-4 text-emerald-400 font-light">%</span>
          </motion.h1>
        </div>

        <div className="w-full h-px bg-emerald-500/20 mt-4 mb-4 relative overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-emerald-400"
          />
        </div>

        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-emerald-200/60 uppercase tracking-[0.3em] text-[10px] md:text-xs"
          >
            Loading Experience
          </motion.p>
        </div>
      </motion.div>

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>
    </motion.div>
  );
}

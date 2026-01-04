"use client";

import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <>
      {/* 
        Simplified Shutter Transition
        - Uses CSS animation instead of 5 Framer Motion columns
        - Same visual effect, much lower JS overhead
      */}
      <div
        className="fixed inset-0 z-60 pointer-events-none bg-[#022c22] animate-shutter-reveal"
        style={{ transformOrigin: "top" }}
      />

      {/* Content wrapper with subtle fade */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
}

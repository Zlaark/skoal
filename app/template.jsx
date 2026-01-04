"use client";

import { motion } from "framer-motion";

export default function Template({ children }) {
  // We'll create 5 columns for a sophisticated "Shutter" effect
  const columns = 5;

  return (
    <>
      {/* 
        Creative Transition: "The Architectural Shutter"
        - Splits the screen into vertical columns
        - Animates them in a staggered wave pattern
        - Adds texture and depth instead of a flat blocking layer
      */}
      <div className="fixed inset-0 z-60 pointer-events-none flex flex-row h-full w-full">
        {[...Array(columns)].map((_, i) => (
          <motion.div
            key={i}
            className="relative h-full flex-1 bg-[#022c22] border-r border-white/5 last:border-r-0"
            initial={{ scaleY: 1, transformOrigin: "top" }}
            animate={{
              scaleY: 0,
              transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.05 * i // Stagger effect from left to right
              }
            }}
            exit={{
              scaleY: 1,
              transformOrigin: "bottom",
              transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.05 * i
              }
            }}
          >
            {/* Subtle inner gradient/highlight for depth */}
            <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-20" />
          </motion.div>
        ))}
      </div>

      {/* Content wrapper with a subtle scale/fade to complement the shutter */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }} // Wait for shutters to start opening
      >
        {children}
      </motion.div>
    </>
  );
}

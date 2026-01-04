"use client";

import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  const items = [
    "Zero-Leakage Payroll",
    "Omnichannel BPO",
    "AI-Powered CX",
    "Statutory Compliance",
    "End-to-End Recruitment",
    "India & Middle East",
  ];

  return (
    <section className="relative w-full bg-[#02040a] overflow-hidden py-24 md:py-32 border-t border-white/5">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[200px] bg-[#00dc82]/20 blur-[100px] rounded-full pointer-events-none" />

       {/* The Tilted Strip */}
       <div className="rotate-1 scale-110 origin-center relative z-10">
          <div className="relative w-full bg-[#00dc82] py-4 border-y-4 border-black/20 shadow-[0_0_50px_rgba(0,220,130,0.4)]">
              {/* Overlay Pattern */}
              <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />
              
              <div className="flex overflow-hidden w-full whitespace-nowrap">
                 <motion.div 
                   initial={{ x: "0%" }}
                   animate={{ x: "-50%" }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="flex items-center gap-16 px-16 w-max"
                 >
                    {/* Double the list for seamless loop */}
                    {[...items, ...items].map((item, i) => (
                       <div key={i} className="flex items-center gap-16">
                           <span className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-[#02040a]">
                              {item}
                           </span>
                           {/* Separator Icon */}
                           <span className="text-2xl text-black/80">◆</span>
                       </div>
                    ))}
                 </motion.div>
              </div>
          </div>
       </div>
    </section>
  );
};

export default Marquee;

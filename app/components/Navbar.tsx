"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Magnetic from "./Magnetic";

const Navbar = () => {
  const pathname = usePathname();
  const isLightMode = pathname === "/design-2" || pathname?.startsWith("/design-6");
  const isDesign4 = pathname === "/design-4";
  const isHome = pathname === "/";
  const textColorClass = (isDesign4 || isHome) ? "text-white" : "text-slate-900";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 50;
    if (scrolled !== isScrolled) setIsScrolled(scrolled);
  });

  const navLinks = [
    { name: "Home", href: "/design-6" },
    { name: "About", href: "/design-6/about" },
    { name: "Services", href: "/design-6/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pt-6 pointer-events-none">
        {/* 
          FLIP ARCHITECTURE: 
          Using a standard ease curve instead of spring to remove "bounciness".
        */}
        <motion.nav
          layout
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} // "Power4.out" feel - smooth deceleration, no bounce
          className={`relative pointer-events-auto flex items-center ${isScrolled
            ? "w-auto justify-center gap-2"
            : "w-full max-w-7xl justify-between gap-0"
            }`}
        >
          {/* Fused Background Layer (The Capsule) */}
          <motion.div
            layout
            initial={false}
            animate={{
              opacity: isScrolled ? 1 : 0,
              scale: isScrolled ? 1 : 0.95,
              borderRadius: "9999px",
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0 overflow-hidden rounded-full"
          >
            {/* 1. The Rotating Border Gradient */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className={`absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-40 ${isLightMode
                ? "bg-[conic-gradient(transparent,rgba(0,0,0,0.2),transparent)]"
                : "bg-[conic-gradient(transparent,rgba(255,255,255,0.5),transparent)]"
                }`}
            />

            {/* 2. The Dark Matte Inner (leaving 1px border visible) */}
            <div className={`absolute inset-[1.5px] backdrop-blur-xl rounded-full border ${isLightMode
              ? "bg-white/90 border-black/5"
              : "bg-[#02040a]/90 border-white/5"
              }`} />
          </motion.div>

          {/* LOGO ISLAND */}
          <motion.div
            layout="position"
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`relative z-10 flex items-center gap-3 px-4 py-2 rounded-full transition-colors duration-500 ${isScrolled
              ? "bg-transparent border-transparent"
              : isLightMode
                ? "bg-white/50 border border-black/5 backdrop-blur-md"
                : "bg-black/20 border border-white/5 backdrop-blur-md"
              }`}
          >
            <Magnetic>
              <div className="h-10 w-auto rounded-lg overflow-hidden cursor-pointer">
                <img src="/logo.jpeg" alt="Zlaark Logo" className="h-full w-auto object-contain" />
              </div>
            </Magnetic>
            <motion.span
              layout="position"
              className={`font-bold tracking-tight hidden md:block whitespace-nowrap ${textColorClass}`}
            >
              Skoal Solutions Pvt. Ltd.
            </motion.span>
          </motion.div>

          {/* NAVIGATION ISLAND */}
          <motion.div
            layout="position"
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`relative z-10 flex items-center gap-1 rounded-full p-1.5 transition-colors duration-500 ${isScrolled
              ? "bg-transparent border-transparent"
              : isLightMode
                ? "bg-white/50 border border-black/5 backdrop-blur-md"
                : "bg-black/20 border border-white/5 backdrop-blur-md"
              }`}
          >
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Magnetic key={link.name}>
                  <a
                    href={link.href}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors group overflow-hidden ${textColorClass} ${(isDesign4 || isHome) ? "hover:text-emerald-400" : "hover:text-black"
                      }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300 ${isLightMode ? "bg-black/5" : "bg-white/5"
                      }`} />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#00dc82] group-hover:w-full transition-all duration-300" />
                  </a>
                </Magnetic>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div layout="position" className={`ml-2 ${isScrolled
              ? ""
              : isLightMode
                ? "pl-2 border-l border-black/10"
                : "pl-2 border-l border-white/10"
              }`}>
              <Magnetic>
                <button className={`hidden md:flex px-5 py-2 text-sm font-bold rounded-full hover:bg-[#00dc82] transition-colors items-center gap-2 shadow-lg hover:shadow-[#00dc82]/20 cursor-pointer ${isLightMode
                  ? "bg-black text-white"
                  : "bg-white text-black"
                  }`}>
                  <span>Book Demo</span>
                  <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${isLightMode ? "bg-white" : "bg-black"
                    }`} />
                </button>
              </Magnetic>
            </motion.div>

            {/* Mobile Toggle */}
            <button
              aria-label="Open mobile menu"
              className={`md:hidden p-2 rounded-full ml-2 ${textColorClass} bg-black/10`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </motion.div>

        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            className={`fixed inset-0 z-[60] backdrop-blur-xl flex flex-col items-center justify-center ${isLightMode ? "bg-white/95" : "bg-[#02040a]/95"
              }`}
          >
            <button aria-label="Close mobile menu" onClick={() => setMobileMenuOpen(false)} className={`absolute top-8 right-8 p-4 transition-colors ${isLightMode ? "text-slate-900/60 hover:text-slate-900" : "text-white/60 hover:text-white"}`}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                  className={`text-4xl md:text-5xl font-bold hover:text-[#00dc82] transition-colors tracking-tight ${isLightMode ? "text-slate-900" : "text-white"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.button
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`px-8 py-3 text-xl font-bold rounded-full hover:bg-[#00dc82] transition-colors ${isLightMode ? "bg-black text-white" : "bg-white text-black"
                  }`}
              >
                Book Demo
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

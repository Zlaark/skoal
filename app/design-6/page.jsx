"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Industries from "./components/Industries";

// Lazy load below-the-fold components
const About = dynamic(() => import("./components/About"), { ssr: false });
const Services = dynamic(() => import("./components/Services"), { ssr: false });
const Work = dynamic(() => import("./components/Work"), { ssr: false });
const TechStack = dynamic(() => import("./components/TechStack"), { ssr: false });
const Contact = dynamic(() => import("./components/Contact"), { ssr: false });
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });

export default function Page() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-[#fafafa] text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <AnimatePresence mode="wait">
        {loading && (
          <Loader onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Hero Section - can be animated */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Hero />
          </motion.div>

          {/* Industries Section - OUTSIDE motion.div to preserve sticky positioning */}
          <Industries />

          {/* Remaining sections */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <About />
            <Services />
            <Work />
            <TechStack />
            <Contact />
            <Footer />
          </motion.div>
        </>
      )}
    </main>
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./components/Loader";
import About from "./components/About";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Industries from "./components/Industries";
import TechStack from "./components/TechStack";
import Work from "./components/Work";
import Contact from "./components/Contact";

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

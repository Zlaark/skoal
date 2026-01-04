"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AboutHero from "./components/AboutHero";
import AboutMission from "./components/AboutMission";
import AboutCapabilities from "./components/AboutCapabilities";
import AboutStory from "./components/AboutStory";
import AboutApproach from "./components/AboutApproach";
import AboutStats from "./components/AboutStats";
import AboutTeam from "./components/AboutTeam";
import AboutCTA from "./components/AboutCTA";
import Footer from "../components/Footer";

export default function AboutPage() {
    const [loading, setLoading] = useState(false);

    return (
        <main className="relative min-h-screen bg-[#fafafa] text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
            <AnimatePresence mode="wait">
                {loading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-white flex items-center justify-center"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {!loading && (
                <>
                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <AboutHero />
                    </motion.div>

                    {/* Mission Section */}
                    <motion.div
                        id="mission"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <AboutMission />
                    </motion.div>

                    {/* Story Section */}
                    <motion.div
                        id="story"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <AboutStory />
                    </motion.div>

                    {/* Capabilities Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <AboutCapabilities />
                    </motion.div>

                    {/* Approach Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <AboutApproach />
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <AboutStats />
                    </motion.div>

                    {/* Team Section */}
                    <motion.div
                        id="team"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <AboutTeam />
                    </motion.div>

                    {/* Final CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <AboutCTA />
                    </motion.div>

                    {/* Footer */}
                    <Footer />
                </>
            )}
        </main>
    );
}

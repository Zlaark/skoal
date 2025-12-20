"use client";

import Hero from './Hero';
// import ServiceCard from '@/components/ServiceCard/ServiceCard';
import styles from './home.module.css';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function Home() {
    return (
        <div className={styles.home}>
            {/* Hero Section - Keeps existing functionality */}
            <Hero
                title="Secure, Compliant, and Scalable People Solutions"
                subtitle="Full-stack workforce management and business process outsourcing across India and the Middle East."
                ctaText="Start Platform"
                ctaLink="/contact"
            />

        </div>
    );
}

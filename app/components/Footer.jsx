"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#011c15] text-emerald-50 relative overflow-hidden pt-32 pb-8">

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.1] bg-[url('/noise.svg')] pointer-events-none" />
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#011c15] to-[#022c22] opacity-80 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* --- Top Section: Links & CTA --- */}
        <div className="grid md:grid-cols-12 gap-12 mb-32">

          {/* Brand Column */}
          <div className="md:col-span-5 px-6">
            <h3 className="text-2xl font-serif mb-8 text-white">Skoal Solutions.</h3>
            <p className="text-emerald-200/80 text-lg max-w-sm mb-12 leading-relaxed">
              Reimagining global payroll infrastructure for the modern, borderless enterprise.
            </p>
            <div className="flex gap-6">
              <SocialLink icon={Linkedin} label="LinkedIn" />
              <SocialLink icon={Twitter} label="Twitter" />
              <SocialLink icon={Instagram} label="Instagram" />
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <FooterColumn
              title="Platform"
              links={[
                { label: "Global Payroll", href: "/services" },
                { label: "Compliance", href: "/services" },
                { label: "Benefits", href: "/services" },
                { label: "Contractors", href: "/services" }
              ]}
            />
            <FooterColumn
              title="Company"
              links={[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/about" },
                { label: "Press", href: "/about" },
                { label: "Contact", href: "/contact" }
              ]}
            />
            <div className="flex flex-col">
              <h4 className="text-white font-medium mb-6">Solutions</h4>
              <ul className="space-y-4">
                <li><a href="/services#technology" className="text-emerald-200/60 hover:text-white transition-colors text-sm">Technology</a></li>
                <li><a href="/services#recruitment" className="text-emerald-200/60 hover:text-white transition-colors text-sm">Recruitment</a></li>
                <li><a href="/services#contact-centre" className="text-emerald-200/60 hover:text-white transition-colors text-sm">Contact Centre</a></li>
                <li><a href="/book-demo" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium">Book Demo</a></li>
              </ul>
            </div>
          </div>
        </div>


        {/* --- Bottom Section: MASSIVE WATERMARK --- */}
        <div className="relative border-t border-emerald-800/30 pt-8 flex flex-col md:flex-row justify-between items-end gap-8">

          {/* Copyright & Legal */}
          <div className="flex flex-col gap-4 text-xs text-emerald-400/60 font-mono uppercase tracking-widest order-2 md:order-1">
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            <p>© {new Date().getFullYear()} Skoal Solutions Inc.</p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="group flex items-center gap-2 text-sm font-medium text-emerald-100 hover:text-white transition-colors order-1 md:order-2"
          >
            Back to Top <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>

        {/* THE MONUMENTAL TEXT */}
        <div className="relative w-full overflow-hidden mt-12 select-none pointer-events-none opacity-50">
          <motion.h1
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[22vw] leading-[0.8] font-bold text-center tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-emerald-800 to-emerald-950"
          >
            SKOAL
          </motion.h1>
        </div>

      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-white font-medium mb-6">{title}</h4>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-emerald-200/60 hover:text-white transition-colors text-sm">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ icon: Icon, label }) {
  return (
    <a href="#" className="w-12 h-12 rounded-full border border-emerald-800/30 flex items-center justify-center text-emerald-200/60 hover:text-white hover:border-emerald-400 hover:bg-emerald-900/50 transition-all" aria-label={label}>
      <Icon size={20} />
    </a>
  )
}

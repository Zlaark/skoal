"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 rounded-t-[3rem] mt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* CTA Section Removed - Moved to Contact.jsx */}

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-sm text-slate-400">
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Skoal Solutions</h3>
            <p className="mb-6">Global payroll reimagined for the modern enterprise.</p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">Li</div>
              <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">Tw</div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-emerald-500" />
                info@skoalsolutions.com
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-emerald-500" />
                +91-XXXXXXXXXX
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-emerald-500 mt-1" />
                India | Middle East
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Services</li>
              <li className="hover:text-white cursor-pointer transition-colors">Case Studies</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-white cursor-pointer transition-colors">Compliance</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 pt-8 border-t border-white/5">
          <p>© 2024 Skoal Solutions Pvt. Ltd. All rights reserved.</p>
          <p>Designed with precision.</p>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
    </footer>
  );
}

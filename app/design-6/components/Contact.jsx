"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Mail, CheckCircle2 } from "lucide-react";
import createGlobe from "cobe";

export default function Contact() {
  const [formState, setFormState] = useState("idle");
  const canvasRef = useRef(null);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 0, // 0 = Light Mode
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1], // White
      markerColor: [0.05, 0.7, 0.4], // Emerald
      glowColor: [0.8, 0.9, 1], // Soft cool glow
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.0060], size: 0.1 },
        { location: [51.5074, -0.1278], size: 0.05 }, // London
        { location: [1.3521, 103.8198], size: 0.08 }, // Singapore
        { location: [28.6139, 77.2090], size: 0.1 }, // Delhi
        { location: [25.2048, 55.2708], size: 0.05 }, // Dubai
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => {
      setFormState("sent");
    }, 2000);
  };

  return (
    <section className="relative py-24 bg-[#f8f9fa] text-slate-900 overflow-hidden min-h-screen flex items-center" id="contact">

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* --- LEFT: THE REAL COBE GLOBE --- */}
          <div className="relative h-[600px] flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[600px] aspect-square">
              {/* Canvas for Cobe */}
              <canvas
                ref={canvasRef}
                style={{ width: '100%', height: '100%', maxWidth: '600px', maxHeight: '600px' }}
              />
            </div>
          </div>


          {/* --- RIGHT: THE SWISS FORM --- */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-serif font-medium text-slate-900 mb-6 tracking-tight leading-[0.9]">
                Global <br />
                <span className="text-emerald-600 italic">Scale.</span>
              </h2>
              <p className="text-lg text-slate-500 mb-12 max-w-md font-light leading-relaxed">
                Connect with our solutions engineering team. We typically respond within 2 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8 relative">

                {/* Inputs */}
                <div className="space-y-8">
                  <div className="relative group">
                    <input type="text" required placeholder=" " className="peer w-full bg-transparent border-b border-slate-200 py-4 text-xl text-slate-900 focus:outline-none focus:border-emerald-600 transition-colors" />
                    <label className="absolute left-0 top-4 text-slate-400 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-emerald-600 peer-valid:-top-6 peer-valid:text-xs peer-valid:text-emerald-600 pointer-events-none">
                      Name
                    </label>
                  </div>
                  <div className="relative group">
                    <input type="email" required placeholder=" " className="peer w-full bg-transparent border-b border-slate-200 py-4 text-xl text-slate-900 focus:outline-none focus:border-emerald-600 transition-colors" />
                    <label className="absolute left-0 top-4 text-slate-400 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-emerald-600 peer-valid:-top-6 peer-valid:text-xs peer-valid:text-emerald-600 pointer-events-none">
                      Email Address
                    </label>
                  </div>
                  <div className="relative group">
                    <textarea required rows={1} placeholder=" " className="peer w-full bg-transparent border-b border-slate-200 py-4 text-xl text-slate-900 focus:outline-none focus:border-emerald-600 transition-colors resize-none" />
                    <label className="absolute left-0 top-4 text-slate-400 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-emerald-600 peer-valid:-top-6 peer-valid:text-xs peer-valid:text-emerald-600 pointer-events-none">
                      Brief Analysis
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    disabled={formState !== "idle"}
                    className="group relative overflow-hidden bg-slate-900 text-white rounded-full px-10 py-5 text-lg font-medium transition-all hover:bg-emerald-700 disabled:bg-emerald-500 w-full md:w-auto"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {formState === "idle" && (
                        <>Initialize Contact <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>
                      )}
                      {formState === "sending" && "Transmitting..."}
                      {formState === "sent" && (
                        <><CheckCircle2 size={20} /> Signal Received</>
                      )}
                    </span>

                    {/* Beam Effect on Click */}
                    {formState === "sending" && (
                      <motion.div
                        layoutId="beam"
                        className="absolute inset-0 bg-emerald-500 z-0"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    )}
                  </button>
                </div>

              </form>

              {/* Footer Info */}
              <div className="mt-16 flex items-center gap-12 text-sm text-slate-400 font-mono uppercase tracking-widest border-t border-slate-100 pt-8">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-emerald-500" />
                  New York, NY
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-emerald-500" />
                  info@skoal.com
                </div>
              </div>


            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

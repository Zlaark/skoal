"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail, CheckCircle2 } from "lucide-react";
import createGlobe from "cobe";

export default function Contact() {
  const [formState, setFormState] = useState("idle");
  const canvasRef = useRef(null);

  // --- GLOBE CONFIGURATION ---
  // --- GLOBE CONFIGURATION ---
  useEffect(() => {
    let phi = 0;

    // Safety check for canvas ref
    if (!canvasRef.current) return;

    try {
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 1200, // Explicit px value matching container * 2
        height: 1200,
        phi: 0,
        theta: 0,
        dark: 0,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [1, 1, 1],
        markerColor: [0.05, 0.7, 0.4],
        glowColor: [0.8, 0.9, 1],
        markers: [
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.0060], size: 0.1 },
          { location: [51.5074, -0.1278], size: 0.05 },
          { location: [1.3521, 103.8198], size: 0.08 },
          { location: [28.6139, 77.2090], size: 0.1 },
          { location: [25.2048, 55.2708], size: 0.05 },
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.003;
        },
      });

      // Cleanup function
      return () => {
        globe.destroy();
      };
    } catch (e) {
      console.error("Globe initialization failed:", e);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => { setFormState("sent"); }, 2000);
  };

  return (
    <section className="relative py-24 bg-[#FAFAFA] text-slate-900 overflow-hidden min-h-screen flex items-center" id="contact">

      {/* Background Grid Pattern (Restored) */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      {/* Radial fade for the grid center */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-[#FAFAFA]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* --- LEFT VISUAL (Globe) --- */}
          <div className="relative h-[600px] flex items-center justify-center order-2 lg:order-1 perspective-[1000px]">
            <div className="relative w-full max-w-[600px] aspect-square">
              <canvas ref={canvasRef} style={{ width: '100%', height: '100%', maxWidth: '600px', maxHeight: '600px' }} />
            </div>
          </div>

          {/* --- RIGHT: EXECUTIVE FORM (Reverted) --- */}
          <div className="order-1 lg:order-2">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>

              {/* Decorative Header */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-emerald-500"></div>
                  <span className="text-emerald-700 font-bold tracking-[0.2em] text-xs uppercase">Inquiries</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6 leading-none">
                  Let's build <br />
                  <span className="italic text-emerald-800">momentum.</span>
                </h2>
                <p className="text-lg text-slate-500 max-w-md font-light">
                  Our engineering team is ready to audit your workforce infrastructure.
                </p>
              </div>

              {/* Clean Form Layout */}
              <form onSubmit={handleSubmit} className="space-y-12">

                {/* Name Input */}
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder=" "
                    className="block py-4 w-full text-xl text-slate-900 bg-transparent border-0 border-b border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer transition-colors"
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-widest font-bold"
                  >
                    Full Name
                  </label>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-300 group-hover:bg-slate-400 transition-colors" />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-600 transition-all duration-500 peer-focus:w-full" />
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder=" "
                    className="block py-4 w-full text-xl text-slate-900 bg-transparent border-0 border-b border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer transition-colors"
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-widest font-bold"
                  >
                    Business Email
                  </label>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-300 group-hover:bg-slate-400 transition-colors" />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-600 transition-all duration-500 peer-focus:w-full" />
                </div>

                {/* Message Input */}
                <div className="relative group">
                  <textarea
                    id="message"
                    rows={2}
                    required
                    placeholder=" "
                    className="block py-4 w-full text-xl text-slate-900 bg-transparent border-0 border-b border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer transition-colors resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-widest font-bold"
                  >
                    Requirements
                  </label>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-300 group-hover:bg-slate-400 transition-colors" />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-600 transition-all duration-500 peer-focus:w-full" />
                </div>

                <div className="pt-8 w-full md:w-auto">
                  <button
                    disabled={formState !== "idle"}
                    className="group relative inline-flex items-center justify-between gap-8 px-10 py-5 bg-[#022c22] text-white overflow-hidden transition-all hover:pr-8 hover:pl-12 hover:shadow-2xl hover:shadow-emerald-900/30 disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto rounded-none md:rounded-sm"
                  >
                    <span className="relative z-10 font-bold tracking-widest text-sm uppercase">
                      {formState === "idle" ? "Initiate Request" : "Transmitting..."}
                    </span>
                    <span className="relative z-10 flex items-center justify-center w-8 h-8 bg-white/10 rounded-full group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      {formState === "sent" ? <CheckCircle2 size={16} /> : <ArrowRight size={16} />}
                    </span>

                    {/* Slide Hover Effect */}
                    <div className="absolute inset-0 bg-emerald-800 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  </button>
                </div>

              </form>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail, CheckCircle2 } from "lucide-react";
import createGlobe from "cobe";

export default function Contact() {
  const [formState, setFormState] = useState("idle");
  const canvasRef = useRef(null);

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

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.5] pointer-events-none"
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

          {/* --- RIGHT: GLASSMORPHISM CARD FORM --- */}
          <div className="order-1 lg:order-2">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>

              {/* Header Title */}
              <div className="mb-8 pl-4">
                <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-2">
                  Get in <span className="italic text-emerald-700">touch.</span>
                </h2>
                <p className="text-slate-500 font-light">We are ready to listen.</p>
              </div>

              {/* Glass Card Container */}
              <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-[2rem] p-10 shadow-2xl shadow-slate-200/50">

                <form onSubmit={handleSubmit} className="space-y-8">

                  {/* Name Input */}
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder=" "
                      className="block py-3 w-full text-lg text-slate-900 bg-transparent border-0 border-b-[1.5px] border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer transition-colors"
                    />
                    <label
                      htmlFor="name"
                      className="absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-widest font-bold"
                    >
                      Full Name
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder=" "
                      className="block py-3 w-full text-lg text-slate-900 bg-transparent border-0 border-b-[1.5px] border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer transition-colors"
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-widest font-bold"
                    >
                      Business Email
                    </label>
                  </div>

                  {/* Message Input */}
                  <div className="relative group">
                    <textarea
                      id="message"
                      rows={2}
                      required
                      placeholder=" "
                      className="block py-3 w-full text-lg text-slate-900 bg-transparent border-0 border-b-[1.5px] border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer transition-colors resize-none"
                    />
                    <label
                      htmlFor="message"
                      className="absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-widest font-bold"
                    >
                      Requirements
                    </label>
                  </div>

                  <div className="pt-4">
                    <button
                      disabled={formState !== "idle"}
                      className="group w-full relative flex items-center justify-center gap-3 px-8 py-4 bg-[#0A261D] text-white rounded-xl overflow-hidden transition-all hover:shadow-xl hover:shadow-emerald-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 font-bold tracking-widest text-xs uppercase">
                        {formState === "idle" ? "Initiate Request" : "Transmitting..."}
                      </span>
                      <div className="relative z-10 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                        {formState === "sent" ? <CheckCircle2 size={14} /> : <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />}
                      </div>

                      {/* Shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </button>
                  </div>

                </form>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

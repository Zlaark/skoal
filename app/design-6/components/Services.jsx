"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Calculator, ShieldCheck, Users, Headphones } from "lucide-react";

const services = [
  {
    id: "payroll",
    title: "HR & Payrolling",
    desc: "End-to-End Workforce Management",
    longDesc: "Precision-engineered salary processing ensuring 100% on-time disbursement across distributed workforces. We handle the math so you can handle the growth.",
    icon: <Calculator size={24} />,
    image: "/design-6/service-payroll.png",
    stat: "Zero Errors"
  },
  {
    id: "compliance",
    title: "Statutory Compliance",
    desc: "Zero-Leakage Governance Framework",
    longDesc: "A fortitude of legal safety. From PF & ESIC to local labor laws, our framework ensures your operations are audit-ready every single day.",
    icon: <ShieldCheck size={24} />,
    image: "/design-6/service-compliance.png",
    stat: "100% Legal"
  },
  {
    id: "recruitment",
    title: "High-Volume Recruitment",
    desc: "Rapid Deployment Engines",
    longDesc: "SLA-based fulfillment for blue-collar and corporate roles. Our engines are tuned to deploy thousands of staff in record time during peak seasons.",
    icon: <Users size={24} />,
    image: "/design-6/service-recruitment.png",
    stat: "Speed to Hire"
  },
  {
    id: "bpo",
    title: "BPO Services",
    desc: "Omnichannel Customer Experience",
    longDesc: "Next-gen support centers powered by AI and human empathy. Inbound, outbound, and revenue generation tailored to your brand voice.",
    icon: <Headphones size={24} />,
    image: "/design-6/service-bpo.png",
    stat: "24/7 Live"
  }
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-slate-50 py-32 relative text-slate-900" id="services">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4 block"
            >
              Core Capabilities
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              We manage the <br />
              <span className="text-emerald-700 italic font-serif">complexity.</span>
            </motion.h2>
          </div>

          <div className="md:max-w-xs">
            <p className="text-slate-500 text-lg leading-relaxed">
              You focus on growth. Our infrastructure handles the operational heavy lifting with military precision.
            </p>
          </div>
        </div>

        {/* Sticky Split Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Left: Interactive List */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setActive(index)}
                className={`group cursor-pointer border-l-2 pl-8 py-4 transition-all duration-500 ${active === index ? 'border-emerald-600' : 'border-slate-200 hover:border-emerald-300'}`}
              >
                <div className={`flex items-center gap-3 mb-2 transition-colors ${active === index ? 'text-emerald-700' : 'text-slate-400 group-hover:text-emerald-600'}`}>
                  {service.icon}
                  <span className="text-xs font-bold uppercase tracking-widest">{service.stat}</span>
                </div>

                <h3 className={`text-3xl font-bold mb-3 transition-colors ${active === index ? 'text-slate-900' : 'text-slate-300 group-hover:text-slate-600'}`}>
                  {service.title}
                </h3>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${active === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-500 text-lg leading-relaxed mb-4">
                    {service.longDesc}
                  </p>
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn more <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Sticky Image Reveal */}
          <div className="lg:w-1/2 relative h-[500px] lg:h-[600px] hidden lg:block">
            <div className="sticky top-32 w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-emerald-900/10 bg-white border border-slate-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={services[active].image}
                    alt={services[active].title}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay for text legibility if needed, or aesthetic tint */}
                  <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay" />
                </motion.div>
              </AnimatePresence>

              {/* Decoration */}
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Skoal System Active
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

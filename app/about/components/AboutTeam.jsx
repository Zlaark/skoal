"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, ArrowUpRight, Users } from "lucide-react";

const team = [
  {
    name: "Sarah Al-Rashid",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    bio: "Visionary leader with 15+ years in HR tech. Previously at Oracle and SAP.",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "David Chen",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    bio: "Architect behind our AI core. passionate about scalable systems and ethical AI.",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    bio: "Operational wizard ensuring 99.9% uptime for our global client base.",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "James Wilson",
    role: "VP of Sales",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    bio: "Driving growth across EMEA. Expert in enterprise SaaS relationships.",
    social: { linkedin: "#", twitter: "#" }
  }
];

const TeamCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-white aspect-[3/4] shadow-md sm:shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 cursor-pointer"
    >
      {/* Image Layer - Grayscale to Color */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

      {/* Content Layer - Slide Up Reveal */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-white">

        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-1">{member.name}</h3>
        <p className="text-emerald-400 font-medium tracking-wide text-xs sm:text-sm uppercase mb-2 sm:mb-4">{member.role}</p>

        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
          <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
            {member.bio}
          </p>

          <div className="flex gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            <a href={member.social.linkedin} className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 hover:text-white transition-colors">
              <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
            <a href={member.social.twitter} className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 hover:text-white transition-colors">
              <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
          </div>
        </div>

      </div>

      {/* Top Right Icon */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        <ArrowUpRight size={16} className="sm:w-5 sm:h-5" />
      </div>

    </motion.div>
  );
};

export default function AboutTeam() {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-16 md:mb-20 gap-6 sm:gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-4 sm:mb-6">
              <Users size={12} className="sm:w-3.5 sm:h-3.5 text-slate-500" />
              <span className="text-[10px] sm:text-xs font-bold text-slate-500 tracking-widest uppercase">Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Meet the <span className="font-serif italic text-slate-500">Minds.</span>
            </h2>
          </div>

          <p className="max-w-md text-base sm:text-lg text-slate-500 font-medium lg:mb-4">
            A diverse team of innovators, strategists, and problem solvers dedicated to redefining the workforce.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

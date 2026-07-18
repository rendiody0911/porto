"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24 lg:pt-0 bg-[#050505]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Minimalist Text Content */}
        <div className="flex flex-col items-start text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-sm font-medium text-gray-400 tracking-wider uppercase">Open for Roles</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-medium text-white mb-6 leading-tight"
          >
            Hi, I'm Rendi. <br />
            <span className="text-gray-500">Business Innovator.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed font-light"
          >
            A Digital Business Innovation student at BINUS UNIVERSITY specializing in Business Development, System Analysis, and Product Management. I bridge the gap between technology and business growth through data-driven strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-300 hover:text-white transition-colors"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Premium Photo */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="group relative w-full max-w-[400px] lg:max-w-md aspect-[4/5] rounded-2xl overflow-hidden bg-[#111] border border-white/10 shadow-xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:-translate-y-2"
          >
            {/* Subtle glow effect behind the image on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
            
            <img
              src="/profile-modern.png"
              alt="Rendi Ody Setiawan"
              className="w-full h-full object-cover object-top brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            
            {/* Professional badge that appears on hover */}
            <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 pointer-events-none">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for Hire
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

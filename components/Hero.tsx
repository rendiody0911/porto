"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24 lg:pt-0 bg-[#050505]">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-300 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            Open for Business Development Roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-white mb-6 leading-[1.1]"
          >
            Hi, I'm <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-purple-500">Rendi.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
          >
            A <strong className="text-white font-medium">Digital Business Innovation</strong> student at BINUS UNIVERSITY. 
            I specialize in <strong className="text-white font-medium">Business Development</strong>, <strong className="text-white font-medium">Business Analysis</strong>, and <strong className="text-white font-medium">Product Management</strong>.
            I bridge the gap between technology and business growth through data-driven strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all hover:scale-105 duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 bg-white/5 text-white rounded-full font-medium hover:bg-white/10 transition-all hover:scale-105 duration-300 backdrop-blur-md"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Full Screen Photo */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            className="relative w-full max-w-[320px] md:max-w-[400px] lg:max-w-full aspect-[3/4] lg:h-[80vh] lg:aspect-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl transform rotate-3 scale-105" />
            
            <div className="relative w-full h-full rounded-[2rem] p-1 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden group">
              <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-[#e0e2e5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.jpg"
                  alt="Rendi Ody Setiawan"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 brightness-105 contrast-105"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </motion.div>
        </div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-gray-500 animate-bounce"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}

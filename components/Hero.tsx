"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="z-10 max-w-4xl text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sm font-medium text-secondary mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Open for Business Development Roles
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple-500 rounded-full blur-xl opacity-40 animate-pulse" />
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-tr from-accent via-purple-500 to-cyan-400">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-black/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="Rendi Ody Setiawan"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-primary mb-6 leading-tight"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Rendi.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-secondary max-w-2xl mb-10 leading-relaxed"
        >
          A <strong className="text-primary font-medium">Digital Business Innovation</strong> student at BINUS UNIVERSITY. 
          I specialize in <strong className="text-primary font-medium">Business Development</strong>, <strong className="text-primary font-medium">Business Analysis</strong>, and <strong className="text-primary font-medium">Product Management</strong>.
          I bridge the gap between technology and business growth through data-driven strategies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-primary rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

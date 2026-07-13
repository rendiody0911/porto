"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 py-16 px-6 mt-20 relative overflow-hidden">
      {/* Background glow for footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl font-display font-bold text-primary mb-2">Let's work together.</h2>
          <p className="text-secondary">Reach out and let's create something amazing.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-6"
        >
          <a href="mailto:renro03@gmail.com" className="w-12 h-12 rounded-full glass flex items-center justify-center text-secondary hover:text-primary hover:bg-white/5 transition-all">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/rendi-odys-0a69bb3aa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-secondary hover:text-primary hover:bg-white/5 transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-secondary hover:text-primary hover:bg-white/5 transition-all">
            <Github className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-secondary text-sm flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <p>© {new Date().getFullYear()} Rendi Ody Setiawan. All rights reserved.</p>
        <p>Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}

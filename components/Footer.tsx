"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 py-16 px-6 mt-20 relative overflow-hidden bg-black/20">
      {/* Background glow for footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Let's work together.</h2>
          <p className="text-secondary text-lg max-w-md">
            I'm currently available for full-time opportunities or freelance projects in Business Development and Product Management.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-4 w-full lg:w-auto"
        >
          <a href="https://wa.me/6281217739378" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl glass hover:bg-white/5 border border-white/5 hover:border-white/10 transition-all group">
            <div className="p-3 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-black transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-secondary font-medium uppercase tracking-wider mb-1">WhatsApp / Phone</p>
              <p className="text-primary font-medium">0812-1773-9378</p>
            </div>
          </a>

          <a href="mailto:renro03@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl glass hover:bg-white/5 border border-white/5 hover:border-white/10 transition-all group">
            <div className="p-3 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-black transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-secondary font-medium uppercase tracking-wider mb-1">Email</p>
              <p className="text-primary font-medium">renro03@gmail.com</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/rendi-odys-0a69bb3aa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl glass hover:bg-white/5 border border-white/5 hover:border-white/10 transition-all group">
            <div className="p-3 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-black transition-colors">
              <Linkedin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-secondary font-medium uppercase tracking-wider mb-1">LinkedIn</p>
              <p className="text-primary font-medium">Rendi Odys</p>
            </div>
          </a>
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-secondary text-sm flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <p>© {new Date().getFullYear()} Rendi Ody Setiawan. All rights reserved.</p>
        <p>Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}

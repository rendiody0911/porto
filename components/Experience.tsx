"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Target } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Experience & Achievements
          </h2>
          <p className="text-secondary text-lg max-w-2xl">
            Beyond academics, I believe in building strong fundamentals in teamwork, 
            strategy, and execution through competitive environments.
          </p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
          {/* Volleyball Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-accent ring-4 ring-background" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-primary font-display">
                Varsity Player
              </h3>
              <span className="text-accent font-medium mt-1 md:mt-0 text-sm">BINUS Volleyball Varsity (UKM)</span>
            </div>
            
            <h4 className="text-lg text-secondary mb-4">BINUS University</h4>
            
            <p className="text-secondary mb-6 leading-relaxed">
              Actively competed and represented the university in various tournaments, securing multiple championship trophies. 
              This experience highly shaped my collaborative mindset, strategic thinking under pressure, and dedication to achieving collective goals—skills that seamlessly translate into Business Development and Product Management.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-secondary bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                <Trophy className="w-4 h-4 text-yellow-500" />
                Multiple Championships
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                <Users className="w-4 h-4 text-blue-400" />
                Team Leadership
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                <Target className="w-4 h-4 text-red-400" />
                Strategic Execution
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

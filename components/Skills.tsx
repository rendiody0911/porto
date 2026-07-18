"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code2, LineChart, Users2, ArrowUpRight } from "lucide-react";

const skillCategories = [
  {
    title: "Digital Product Management",
    icon: <Lightbulb className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-500" />,
    color: "from-amber-400 via-orange-500 to-red-500",
    skills: ["Product Roadmapping", "UI/UX Prototyping", "User Persona & Journey"],
    description: "Bridging the gap between user needs and business goals through iterative product development."
  },
  {
    title: "Systems & Business Analysis",
    icon: <Code2 className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-500" />,
    color: "from-cyan-400 via-blue-500 to-indigo-600",
    skills: ["UML & Architecture", "Database Design (ERD)", "Requirement Gathering", "Process Modeling"],
    description: "Translating complex business problems into scalable technical architectures and logical workflows."
  },
  {
    title: "Business Development",
    icon: <LineChart className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-500" />,
    color: "from-emerald-400 via-green-500 to-teal-600",
    skills: ["Market Research & Analysis", "Business Model Innovation", "Digital Transformation", "Strategic Planning"],
    description: "Identifying new market opportunities and leveraging technology to drive sustainable business growth."
  },
  {
    title: "Leadership & Execution",
    icon: <Users2 className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-500" />,
    color: "from-fuchsia-400 via-purple-500 to-pink-600",
    skills: ["Cross-functional Collab", "High-Pressure Execution", "Team Leadership", "Data-Driven Decisions"],
    description: "Honed through competitive varsity sports and team projects to deliver results efficiently."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden bg-[#050505]">
      {/* Dynamic Animated Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-24 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-gray-300">My Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Competencies</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A strategic blend of business acumen and technical expertise, specifically tailored for driving digital innovation.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Premium Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${category.color} rounded-[2rem] opacity-0 group-hover:opacity-100 blur-xl group-hover:blur-2xl transition-all duration-700`} />
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${category.color} rounded-[2rem] opacity-0 group-hover:opacity-50 transition-all duration-500`} />
              
              {/* Card Content */}
              <div className="relative h-full p-8 md:p-10 rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-xl flex flex-col hover:bg-black/60 transition-colors duration-500 overflow-hidden">
                
                {/* Subtle gradient overlay inside the card */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${category.color} opacity-5 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`} />

                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-500`}>
                    {category.icon}
                  </div>
                  <div className={`w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-45 group-hover:bg-white/10`}>
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-4 tracking-tight relative z-10">
                  {category.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-8 leading-relaxed flex-grow relative z-10">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2 md:gap-3 relative z-10">
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="text-xs md:text-sm font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 cursor-default hover:text-white hover:border-white/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

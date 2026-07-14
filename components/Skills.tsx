"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code2, LineChart, Users2 } from "lucide-react";

const skillCategories = [
  {
    title: "Digital Product Management",
    icon: <Lightbulb className="w-8 h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors" />,
    color: "from-yellow-400/20 to-orange-500/20",
    skills: ["Product Roadmapping", "UI/UX Prototyping (Figma)", "User Persona & Journey Mapping"],
    description: "Bridging the gap between user needs and business goals through iterative product development."
  },
  {
    title: "Systems & Business Analysis",
    icon: <Code2 className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />,
    color: "from-blue-400/20 to-cyan-500/20",
    skills: ["UML & System Architecture", "Database Design (ERD)", "Requirement Gathering", "Business Process Modeling"],
    description: "Translating complex business problems into scalable technical architectures and logical workflows."
  },
  {
    title: "Business Development",
    icon: <LineChart className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors" />,
    color: "from-green-400/20 to-emerald-500/20",
    skills: ["Market Research & Analysis", "Business Model Innovation", "Digital Transformation", "Strategic Planning"],
    description: "Identifying new market opportunities and leveraging technology to drive sustainable business growth."
  },
  {
    title: "Leadership & Execution",
    icon: <Users2 className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />,
    color: "from-purple-400/20 to-pink-500/20",
    skills: ["Cross-functional Collaboration", "High-Pressure Execution", "Team Leadership", "Data-Driven Decisions"],
    description: "Honed through competitive varsity sports and team projects to deliver results efficiently."
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden bg-[#0a0a0a]">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 tracking-tight">
            Core Competencies
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            A strategic blend of business acumen and technical expertise, specifically tailored for driving digital innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Animated Gradient Border Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500`} />
              
              {/* Card Content */}
              <div className="relative h-full glass p-8 md:p-10 rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} border border-white/10 shadow-xl`}>
                    {category.icon}
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:rotate-45 duration-300">
                    <span className="text-accent text-2xl">↗</span>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-primary font-display mb-4 tracking-tight group-hover:text-white transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-secondary mb-8 leading-relaxed flex-grow">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="text-xs font-semibold text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

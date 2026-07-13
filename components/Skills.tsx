"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code2, LineChart, Users2 } from "lucide-react";

const skillCategories = [
  {
    title: "Digital Product Management",
    icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
    skills: ["Product Roadmapping", "UI/UX Prototyping (Figma)", "User Persona & Journey Mapping"],
    description: "Bridging the gap between user needs and business goals through iterative product development."
  },
  {
    title: "Systems & Business Analysis",
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    skills: ["UML & System Architecture", "Database Design (ERD)", "Requirement Gathering", "Business Process Modeling (AS-IS / TO-BE)"],
    description: "Translating complex business problems into scalable technical architectures and logical workflows."
  },
  {
    title: "Business Development & Strategy",
    icon: <LineChart className="w-6 h-6 text-green-400" />,
    skills: ["Market Research & Analysis", "Business Model Innovation", "Digital Transformation", "Strategic Planning"],
    description: "Identifying new market opportunities and leveraging technology to drive sustainable business growth."
  },
  {
    title: "Leadership & Execution",
    icon: <Users2 className="w-6 h-6 text-purple-400" />,
    skills: ["Cross-functional Collaboration", "High-Pressure Execution", "Team Leadership", "Data-Driven Decision Making"],
    description: "Honed through competitive varsity sports and team projects to deliver results efficiently."
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-black/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Core Competencies
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            A strategic blend of business acumen and technical expertise, specifically tailored for driving digital innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden group"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary font-display">{category.title}</h3>
              </div>
              
              <p className="text-secondary mb-6 relative z-10">{category.description}</p>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map(skill => (
                  <span key={skill} className="text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

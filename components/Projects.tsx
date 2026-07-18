"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Jaya Mandiri Trans - Digital Transformation",
    description: "Led the digital transformation of a tourist bus rental company in Bandung. Designed and conceptualized an integrated mobile application to automate booking, payment, schedule management, and AI-driven fleet recommendations, effectively replacing their manual WhatsApp-based operations.",
    image: "/mockup.png",
    tags: ["Business Analysis", "System Design", "UI/UX", "Product Management"],
    liveUrl: "/projects/jaya-mandiri-trans",
    githubUrl: "#",
  },
  {
    title: "Business and Performance Analytics: PT BRI",
    description: "A comprehensive data analysis of PT Bank Rakyat Indonesia (BRI) performance from 2019 to 2023. Utilized Descriptive, Diagnostic, Predictive, and Prescriptive analytics to uncover insights and provide strategic recommendations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["Data Analytics", "Power BI", "Financial Analysis", "Forecasting"],
    liveUrl: "/projects/business-performance-analytics",
    githubUrl: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Selected Works
          </h2>
          <p className="text-secondary text-lg max-w-2xl">
            A showcase of my recent projects, focusing on delivering exceptional
            user experiences and robust technical solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col gap-6"
            >
              <a href={project.liveUrl} className="relative aspect-[4/3] rounded-2xl overflow-hidden glass block">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 pointer-events-none" />
              </a>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <a href={project.liveUrl} className="text-2xl font-bold text-primary font-display hover:text-accent transition-colors">
                    {project.title}
                  </a>
                  <div className="flex items-center gap-3">
                    <a href={project.githubUrl} className="text-secondary hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>                <p className="text-secondary mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {tag}
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

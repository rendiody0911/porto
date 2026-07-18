"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Box, LayoutTemplate, Database, Workflow, CheckCircle2, Code2 } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MendixProject() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground relative selection:bg-white selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative border-b border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">Mendix</span>
              <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">Low-Code Development</span>
              <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">Agile User Stories</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6 leading-tight">
              Mendix Application: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">User Stories & Rapid Implementation</span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary leading-relaxed mb-6">
              An end-to-end low-code development project using the Mendix platform. This project showcases the translation of complex business requirements into structured Agile User Stories, followed by database design and rapid application prototyping.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16 px-6 relative">
        <div className="max-w-4xl mx-auto space-y-24">

          {/* 1. User Stories & Agile Planning */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-display font-bold text-primary mb-6 flex items-center gap-3">
              <LayoutTemplate className="text-blue-400 w-8 h-8" /> 1. Agile Planning & User Stories
            </h3>
            <div className="prose prose-invert max-w-none text-secondary">
              <p>
                The foundation of the application was built on detailed requirement gathering and Agile methodology. Business requirements were broken down into manageable <strong>Epics</strong> and <strong>User Stories</strong> to ensure a user-centric development process.
              </p>
              <div className="glass p-6 rounded-2xl mt-6 border border-white/5">
                <h4 className="text-white mt-0 mb-4 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-accent"/> Key Deliverables:</h4>
                <ul className="space-y-3">
                  <li><strong>Comprehensive Backlog:</strong> Documented roles, goals, and acceptance criteria in Excel to serve as the single source of truth for the development team.</li>
                  <li><strong>Sprint Planning:</strong> Prioritized features based on business value (MoSCoW method) to ensure the MVP (Minimum Viable Product) was delivered on time.</li>
                  <li><strong>Role-Based Access Control (RBAC):</strong> Defined specific user personas (e.g., Admin, User, Manager) to structure data visibility and UI access.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 2. Mendix Domain Model (Database) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-display font-bold text-primary mb-6 flex items-center gap-3">
              <Database className="text-purple-400 w-8 h-8" /> 2. Domain Model Architecture
            </h3>
            <p className="text-secondary mb-8">
              In Mendix, the database is visually designed using the Domain Model. We architected a relational model that strictly adheres to normalization principles while optimizing for Mendix's object-oriented nature.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-white/10 rounded-2xl p-6 bg-black/20">
                <h4 className="text-xl font-bold text-white mb-2">Entity Relationships</h4>
                <p className="text-secondary text-sm">Designed 1-to-many and many-to-many associations tailored for the business process, ensuring data integrity across the application.</p>
              </div>
              <div className="border border-white/10 rounded-2xl p-6 bg-black/20">
                <h4 className="text-xl font-bold text-white mb-2">Security & Validation</h4>
                <p className="text-secondary text-sm">Implemented entity-level access rules and automated data validation directly within the Domain Model to prevent bad data entry.</p>
              </div>
            </div>
          </motion.div>

          {/* 3. Microflows & Logic */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-display font-bold text-primary mb-6 flex items-center gap-3">
              <Workflow className="text-green-400 w-8 h-8" /> 3. Business Logic (Microflows)
            </h3>
            <div className="space-y-6 text-secondary">
              <p>
                To handle complex calculations and backend processes without writing traditional code, we utilized Mendix <strong>Microflows</strong> and <strong>Nanoflows</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Automated status updates and email notifications upon task completion.</li>
                <li>Created custom data retrieval mechanisms that filter lists based on the active user's permissions.</li>
                <li>Implemented error-handling routines (custom pop-ups and rollback mechanics) to ensure the application remains stable during edge cases.</li>
              </ul>
            </div>
          </motion.div>

          {/* 4. UI/UX Implementation */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-display font-bold text-primary mb-6 flex items-center gap-3">
              <Box className="text-orange-400 w-8 h-8" /> 4. UI/UX & Page Building
            </h3>
            <p className="text-secondary mb-8">
              The front-end was rapidly assembled using Mendix's Atlas UI framework. We prioritized usability and responsiveness.
            </p>
            <div className="glass p-6 rounded-2xl border border-white/5">
              <p className="text-secondary">
                Dashboards, data grids, and data views were configured to provide a seamless user experience. By utilizing conditional visibility, the interface dynamically adapts to show only the information relevant to the current user's role and the specific state of the data.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

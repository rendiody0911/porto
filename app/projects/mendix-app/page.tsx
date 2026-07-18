"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Layers, Users, Database, Zap, Lock, ShieldCheck, CheckSquare, Search } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MendixProject() {
  return (
    <main className="flex min-h-screen flex-col bg-[#020817] text-slate-200 relative selection:bg-blue-500/30">
      <Navbar />

      {/* Modern Split Hero Section */}
      <section className="pt-32 pb-16 px-6 relative">
        {/* Mendix-style blue glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                <Layers className="w-4 h-4" /> Enterprise App Development
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Mendix <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Enterprise Solution</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                Engineered a scalable enterprise application by translating complex operational bottlenecks into a streamlined digital ecosystem. Orchestrated the full Agile DevOps lifecycle from strategic User Story mapping to rapid low-code deployment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[550px] aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.2)] bg-[#030d22] flex items-center justify-center group mx-auto lg:mx-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/mendix_mockup.png"
                alt="Mendix App Mockup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-teal-400/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Content Section */}
      <section className="py-24 px-6 relative z-10 bg-gradient-to-b from-[#020817] to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Project Implementation Details</h2>
            <p className="text-slate-400 text-lg">Detailed breakdown of the Agile process, database modeling, and business logic execution.</p>
          </div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
            
            {/* Box 1: User Stories (Spans 2 cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 rounded-3xl bg-slate-900/40 border border-slate-800 p-8 hover:bg-slate-900/60 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10"><Users className="w-32 h-32 text-blue-500" /></div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 relative z-10">
                <CheckSquare className="text-blue-400" /> Agile User Stories
              </h3>
              <div className="text-slate-400 space-y-4 relative z-10 max-w-xl">
                <p>
                  The project initiated with comprehensive requirement gathering, translating business needs into standard Agile formats: <em>"As a [Role], I want to [Action], so that [Benefit]."</em>
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                  <li><strong>Roles Defined:</strong> Administrator, Manager, and Staff User.</li>
                  <li><strong>Acceptance Criteria:</strong> Clear definitions of done for data entry validation, report generation, and security access.</li>
                  <li><strong>Sprint Backlog:</strong> Prioritized features using MoSCoW methodology, focusing on core CRUD operations and role-based dashboards first.</li>
                </ul>
              </div>
            </motion.div>

            {/* Box 2: Domain Model */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl bg-blue-900/10 border border-blue-900/30 p-8 hover:bg-blue-900/20 transition-colors"
            >
              <Database className="w-10 h-10 text-teal-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Domain Model</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Architected the visual database schema in Mendix Studio Pro. Designed optimized 1-to-M and M-to-M associations to ensure strict data normalization and relational integrity between business entities.
              </p>
            </motion.div>

            {/* Box 3: Microflows (Spans 1 col) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-slate-900/40 border border-slate-800 p-8 hover:bg-slate-900/60 transition-colors"
            >
              <Zap className="w-10 h-10 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Microflows & Logic</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Replaced traditional backend code with visual Microflows. Handled complex calculations, automated status transitions, custom error handling routines, and data retrieval filters triggered by UI events.
              </p>
            </motion.div>

            {/* Box 4: Security (Spans 2 cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 rounded-3xl bg-slate-900/40 border border-slate-800 p-8 flex flex-col justify-between hover:bg-slate-900/60 transition-colors"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <ShieldCheck className="text-blue-400" /> Security & UI Integration
                </h3>
                <p className="text-slate-400 mb-6 max-w-2xl">
                  Built the frontend using Mendix Atlas UI with a focus on Role-Based Access Control (RBAC). The UI dynamically adapts based on entity-level security rules.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 p-4 rounded-2xl border border-white/5">
                  <Lock className="w-6 h-6 text-slate-300 mb-2" />
                  <h4 className="text-white font-medium mb-1">Entity Access</h4>
                  <p className="text-xs text-slate-400">Read/Write permissions strictly controlled at the database level.</p>
                </div>
                <div className="bg-black/30 p-4 rounded-2xl border border-white/5">
                  <Search className="w-6 h-6 text-slate-300 mb-2" />
                  <h4 className="text-white font-medium mb-1">Conditional UI</h4>
                  <p className="text-xs text-slate-400">Buttons and data grids dynamically hidden based on user role.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

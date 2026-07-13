"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Database, Layout, Search, Users, Activity, Target, Smartphone, CheckCircle2, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectDetail() {
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
              <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">Business Analysis</span>
              <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">System Design</span>
              <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">UI/UX</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6 leading-tight">
              Jaya Mandiri Trans: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Digital Transformation</span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary leading-relaxed mb-6">
              A comprehensive system analysis and design project aimed at modernizing a conventional tourist bus rental company in Bandung. We conceptualized an integrated mobile application to automate booking, schedule management, and fleet maintenance.
            </p>
            
            <a href="https://www.figma.com/design/nnKWOPAFkdkCgWYaluzZh9/JAYA-MANDIRI-TRANS" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
              <Layout className="w-4 h-4" /> View Figma Prototype
            </a>
          </motion.div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16 px-6 relative">
        <div className="max-w-4xl mx-auto space-y-24">

          {/* 1. Background & Problem */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-display font-bold text-primary mb-6 flex items-center gap-3">
              <Search className="text-red-400 w-8 h-8" /> 1. Background & AS-IS Process
            </h3>
            <div className="prose prose-invert max-w-none text-secondary">
              <p>
                Jaya Mandiri Trans is a tourist bus rental company in Bandung providing fleets ranging from Medium Buses (31 seats) to Big Buses (59 seats). Despite their scale, their operational processes were heavily reliant on manual communication via <strong>WhatsApp</strong> and data recording on <strong>Microsoft Excel</strong>.
              </p>
              <h4 className="text-white mt-6 mb-2">Key Pain Points:</h4>
              <ul className="space-y-2">
                <li><strong className="text-white">Manual Booking:</strong> High risk of double-booking due to unintegrated Excel schedules.</li>
                <li><strong className="text-white">Payment Verification:</strong> Manual checking of bank mutations causing confirmation delays.</li>
                <li><strong className="text-white">Fragmented Scheduling:</strong> Driver and fleet scheduling were not centralized, leading to potential dispatch conflicts.</li>
                <li><strong className="text-white">No Live Tracking:</strong> Customers could not monitor the real-time location of their rented bus.</li>
              </ul>
            </div>
          </motion.div>

          {/* 2. Proposed Solution (TO-BE) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-display font-bold text-primary mb-6 flex items-center gap-3">
              <Target className="text-green-400 w-8 h-8" /> 2. The TO-BE System Solution
            </h3>
            <p className="text-secondary mb-8">
              We proposed a fully integrated mobile application targeting four main user groups: <strong>Customer, Admin, Operational Staff, and Finance</strong>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-white mb-3">For Customers</h4>
                <ul className="space-y-2 text-secondary text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0" /> Online Bus Booking & Payment Gateway</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0" /> Real-time GPS Bus Tracking</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0" /> AI-based Fleet Recommendations</li>
                </ul>
              </div>
              <div className="glass p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-white mb-3">For Management</h4>
                <ul className="space-y-2 text-secondary text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0" /> Centralized Schedule Management</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0" /> Automated Driver Salary Calculation</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0" /> Vehicle Maintenance Monitoring</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 3. System Analysis & Design */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-display font-bold text-primary mb-6 flex items-center gap-3">
              <Activity className="text-blue-400 w-8 h-8" /> 3. System Analysis & Architecture
            </h3>
            <div className="space-y-8">
              <div className="border border-white/10 rounded-2xl p-6 bg-black/20">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-accent"/> User Personas</h4>
                <p className="text-secondary text-sm">
                  Developed distinct personas including <em>Syecka Octavizanie (24, Event Organizer)</em> who needs quick bus availability info, and <em>Azmi Rahadian (32, HR Staff)</em> who requires transparent pricing and reliable corporate billing processes.
                </p>
              </div>
              
              <div className="border border-white/10 rounded-2xl p-6 bg-black/20">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Database className="w-5 h-5 text-accent"/> Database Architecture (ERD)</h4>
                <p className="text-secondary text-sm mb-4">
                  Architected a robust relational database with 8 core entities: Customer, Booking, DetailBooking, Payment, Refund, Vehicle, Driver, and JadwalOperasional.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded text-xs text-gray-300">tbl_customer</span>
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded text-xs text-gray-300">tbl_booking</span>
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded text-xs text-gray-300">tbl_vehicle</span>
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded text-xs text-gray-300">tbl_driver</span>
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded text-xs text-gray-300">tbl_payment</span>
                </div>
              </div>

              <div className="border border-white/10 rounded-2xl p-6 bg-black/20">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Activity className="w-5 h-5 text-accent"/> UML Modeling</h4>
                <p className="text-secondary text-sm">
                  Created comprehensive Use Case Diagrams encompassing 12 distinct use cases (from <em>Get Bus Recommendation</em> to <em>Generate Operational Reports</em>), alongside detailed Activity and System Sequence Diagrams.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4. UI/UX Prototyping */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-display font-bold text-primary mb-6 flex items-center gap-3">
              <Smartphone className="text-purple-400 w-8 h-8" /> 4. High-Fidelity UI Prototyping
            </h3>
            <p className="text-secondary mb-8">
              We translated the complex business logic into an intuitive mobile interface. The design focuses on a clean, green-tinted modern aesthetic that inspires trust and ease of use.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 glass">
                <iframe
                  style={{ border: "none" }}
                  width="100%"
                  height="100%"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FnnKWOPAFkdkCgWYaluzZh9%2FJAYA-MANDIRI-TRANS"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-secondary text-sm">
                *You can interact with the live prototype above directly, or click the link below to open in Figma.
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <a href="https://www.figma.com/design/nnKWOPAFkdkCgWYaluzZh9/JAYA-MANDIRI-TRANS" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors">
                <LinkIcon className="w-4 h-4" /> Open Full Figma Interactive Prototype
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

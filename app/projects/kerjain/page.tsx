"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Target, Briefcase, GraduationCap, Users, ShieldCheck, CheckCircle2, TrendingUp, Calendar, Coins } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function KerjainProject() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f8f9fa] text-slate-800 relative selection:bg-blue-200">
      <Navbar />

      {/* Hero Section (Matching Slide Design) */}
      <section className="pt-32 pb-20 px-6 relative bg-[#3e4246] overflow-hidden min-h-[90vh] flex items-center">
        {/* Subtle background glow from the right */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-12 font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-10 text-white font-bold text-xl tracking-tight">
                {/* Salford Logo Mock */}
                <div className="w-8 h-8 relative flex items-center justify-center">
                  <div className="absolute w-full h-full border-2 border-white rounded-full opacity-50" />
                  <div className="absolute w-4 h-4 border-2 border-white rounded-full" />
                </div>
                Salford
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-white mb-10 leading-[1.05] tracking-tight">
                Introduction <br />
                Kerja.in
              </h1>
              
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed max-w-xl font-medium">
                <p>
                  Kerja.in is a digital, job-training application designed to prepare fresh graduates to enter the professional workforce in a standardized manner and in line with industry needs. The platform offers a variety of video courses, real project-based training programs (project-based learning), and competency certifications that refer to the standards of the National Professional Certification Agency (BNSP).
                </p>
                <p>
                  In addition to training, Kerja.in also functions as a bridge between participants (talent) and employers through a talent pool system and job-matching services.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Illustration cropped from the slide */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-[500px] lg:h-[700px] flex justify-end items-center"
            >
              {/* We use the uploaded image but crop it to only show the right-side illustration */}
              <div className="absolute right-[-10%] lg:right-[-20%] w-[800px] h-[800px] overflow-hidden rounded-full flex items-center justify-center mask-radial">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/projects/kerjain_intro.png" 
                  alt="Kerja.in Illustration" 
                  className="absolute w-[200%] max-w-none object-cover"
                  style={{ right: "-5%", top: "50%", transform: "translateY(-50%)" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-6 relative bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Proposed Solutions</h2>
            <p className="text-slate-600 text-lg">Tackling high fresh-graduate unemployment rates by aligning theoretical knowledge with real industry needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Skill Profiling</h3>
              <p className="text-slate-600">Mapping the capabilities of prospective workers through comprehensive CVs, portfolios, and structured assessments.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Skill Upgrade Path</h3>
              <p className="text-slate-600">Providing automated training or certification recommendations based on real-time job market demands.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Job Matching</h3>
              <p className="text-slate-600">Intelligently connecting the verified skill profiles of trained talents directly with active recruiter job openings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Epic Breakdown */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">Core System Architecture</h2>
            <p className="text-slate-600 text-lg">The project was broken down into 7 master Epics, executed over a 4-Sprint lifecycle.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "User Management", desc: "Registration and comprehensive profile management for both Talents and Recruiters." },
              { icon: GraduationCap, title: "Training System", desc: "Access to video courses, project-based learning modules, and progress tracking." },
              { icon: ShieldCheck, title: "Certification System", desc: "Automated generation, downloading, and secure verification of certificates." },
              { icon: Briefcase, title: "Job Marketplace", desc: "Job posting, application workflows, and recommendation engine." },
              { icon: CheckCircle2, title: "Performance Tracking", desc: "Rating and feedback systems to maintain talent quality post-project." },
              { icon: TrendingUp, title: "Analytics Dashboard", desc: "Admin dashboards monitoring active users, certifications, and successful matches." },
            ].map((epic, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl p-6 hover:border-blue-500 hover:bg-blue-50 transition-all">
                <epic.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-bold text-lg text-slate-900 mb-2">{epic.title}</h4>
                <p className="text-slate-600 text-sm">{epic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Execution */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Project Execution Plan</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Managed a 3-month accelerated development timeline (March - May 2026) with a total estimated budget of IDR 975,000,000. 
                The process encompassed full lifecycle management from Requirement Gathering to UAT and Deployment.
              </p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="bg-blue-600/20 text-blue-400 p-3 rounded-lg h-fit"><Calendar className="w-6 h-6"/></div>
                  <div>
                    <h4 className="font-bold text-lg">Sprint Planning & Gantt</h4>
                    <p className="text-slate-400 text-sm">Divided into 4 sprints focusing sequentially on Core Foundation, Training & Certs, Job Marketplace, and Analytics.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-blue-600/20 text-blue-400 p-3 rounded-lg h-fit"><Coins className="w-6 h-6"/></div>
                  <div>
                    <h4 className="font-bold text-lg">Financial Modeling</h4>
                    <p className="text-slate-400 text-sm">Projected to break even by the end of Year 1 with revenue streams from certification packages and recruiter subscriptions.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-blue-600/20 text-blue-400 p-3 rounded-lg h-fit"><ShieldCheck className="w-6 h-6"/></div>
                  <div>
                    <h4 className="font-bold text-lg">Risk Mitigation</h4>
                    <p className="text-slate-400 text-sm">Identified and mitigated key risks including low adoption rates, data security breaches (solved via JWT/OAuth), and system downtime.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 text-center">Development Roadmap</h3>
              <div className="space-y-4">
                {["Initiation & Feasibility", "Planning & WBS", "UI/UX & DB Design", "Implementation (Frontend/Backend)", "Integration & UAT Testing", "Deployment & Monitoring"].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0">{i+1}</div>
                    <span className="font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

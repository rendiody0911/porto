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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative bg-white border-b border-slate-200 overflow-hidden">
        {/* Subtle background abstract */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-100 to-transparent rounded-full blur-[100px] pointer-events-none opacity-50" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wide">IT Project Management</span>
                <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wide">EdTech</span>
                <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wide">System Design</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 mb-6 leading-tight tracking-tight">
                Kerja.in <br />
                <span className="text-blue-600 font-bold text-3xl md:text-5xl">Digital Job-Training & Matching Platform</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                A comprehensive system designed to bridge the skills gap for fresh graduates. The platform integrates structured video courses, BNSP-standard competency certifications, and a smart job-matching engine to connect job-ready talents with recruiters.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] bg-slate-900 rounded-3xl p-8 text-white shadow-2xl flex flex-col justify-between overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div>
                  <h3 className="text-2xl font-bold mb-2">Project Success KPIs</h3>
                  <p className="text-slate-400 text-sm mb-8">Target Metrics for Year 1</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">5,000+</div>
                        <div className="text-sm text-slate-400">Monthly Active Users</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <Target className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">100+</div>
                        <div className="text-sm text-slate-400">Successful Job Matches</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">500+</div>
                        <div className="text-sm text-slate-400">Certified Talents (BNSP)</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 mt-8 border-t border-white/10">
                  <div className="text-sm text-slate-400">Estimated ROI (Year 1)</div>
                  <div className="text-4xl font-black text-emerald-400">2.56%</div>
                </div>
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

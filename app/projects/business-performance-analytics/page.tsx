"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BarChart3, TrendingUp, PieChart, Activity, LineChart, Target, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BusinessAnalyticsProject() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground relative selection:bg-white selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative border-b border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Link href="/#projects" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">Data Analytics</span>
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">Power BI</span>
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">Financial Analysis</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6 leading-tight">
                PT Bank Rakyat Indonesia (BRI): <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-200">Business & Performance Analytics</span>
              </h1>
              
              <p className="text-lg md:text-xl text-secondary leading-relaxed mb-6 max-w-xl">
                A comprehensive analytical review of PT BRI's financial and operational performance from 2019 to 2023. By leveraging advanced data analytics, this project identified key growth drivers, projected future asset trends, and formulated actionable strategic recommendations.
              </p>
              
              <a href="https://app.powerbi.com/links/ebvbklST58?ctid=3485b963-82ba-4a6f-810f-b5cc226ff898&pbi_source=linkShare" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
                <BarChart3 className="w-4 h-4" /> View Power BI Dashboard
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3, delay: 0.2 }}
            className="order-1 lg:order-2 w-full flex justify-center"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/analytics_mockup.png"
                alt="Business Performance Analytics Mockup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16 px-6 relative">
        <div className="max-w-4xl mx-auto space-y-24">

          {/* 1. Methodology */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-display font-bold text-primary mb-6 flex items-center gap-3">
              <Activity className="text-blue-400 w-8 h-8" /> 1. Analytics Methodology
            </h3>
            <p className="text-secondary mb-8">
              We applied a four-stage analytics framework to deeply understand historical data and prescribe future actions:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-white/10 rounded-2xl p-6 bg-black/20 hover:border-white/20 transition-colors">
                <h4 className="text-xl font-bold text-white mb-2">Descriptive Analytics</h4>
                <p className="text-secondary text-sm">Utilized horizontal and vertical analysis to track asset growth (reaching Rp2 Trillion in 2023) and structural financial changes year-over-year.</p>
              </div>
              <div className="border border-white/10 rounded-2xl p-6 bg-black/20 hover:border-white/20 transition-colors">
                <h4 className="text-xl font-bold text-white mb-2">Diagnostic Analytics</h4>
                <p className="text-secondary text-sm">Employed Fishbone diagrams to identify root causes behind Non-Performing Loans (NPL) and operational bottlenecks in specific sectors.</p>
              </div>
              <div className="border border-white/10 rounded-2xl p-6 bg-black/20 hover:border-white/20 transition-colors">
                <h4 className="text-xl font-bold text-white mb-2">Predictive Analytics</h4>
                <p className="text-secondary text-sm">Applied Time-Series Forecasting to project credit growth and customer segmentation, estimating performance through 2025.</p>
              </div>
              <div className="border border-white/10 rounded-2xl p-6 bg-black/20 hover:border-white/20 transition-colors">
                <h4 className="text-xl font-bold text-white mb-2">Prescriptive Analytics</h4>
                <p className="text-secondary text-sm">Conducted Scenario Analysis (optimistic, pessimistic, moderate) against external market factors to recommend resource allocations.</p>
              </div>
            </div>
          </motion.div>

          {/* 2. Key Findings & Dashboards */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-display font-bold text-primary mb-6 flex items-center gap-3">
              <LineChart className="text-green-400 w-8 h-8" /> 2. Key Findings & Dashboard Insights
            </h3>
            
            <div className="space-y-8">
              <div className="glass p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><PieChart className="w-5 h-5 text-accent"/> Finance</h4>
                <p className="text-secondary text-sm">
                  Total assets showed stable upward trends, peaking at Rp2 Trillion in 2023 (representing 23.02% of the 5-year total). This solidifies BRI's strong financial positioning for long-term strategic investments.
                </p>
              </div>

              <div className="glass p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Target className="w-5 h-5 text-accent"/> Marketing & Sales</h4>
                <p className="text-secondary text-sm">
                  Sales performance data revealed highly unequal distributions among employees. Certain individuals dominated specific transaction types (e.g., transfers vs. purchases), indicating a need for team collaboration improvements and targeted upskilling.
                </p>
              </div>

              <div className="glass p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-accent"/> Operations</h4>
                <p className="text-secondary text-sm">
                  Net profit experienced significant fluctuations. Profit peaked in 2022 (contributing 47.82% of the 5-year total) but saw a notable drop in 2023, signaling challenges in operational efficiency that require immediate strategic realignment.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3. Strategic Recommendations */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-display font-bold text-primary mb-6 flex items-center gap-3">
              <Target className="text-purple-400 w-8 h-8" /> 3. Strategic Recommendations
            </h3>
            <div className="prose prose-invert max-w-none text-secondary">
              <ul className="space-y-4">
                <li>
                  <strong className="text-white">Marketing:</strong> Prioritize penetration in the micro and ultra-micro segments using digital banking strengths (BRImo). Leverage data-driven loyalty programs and e-commerce partnerships to increase engagement.
                </li>
                <li>
                  <strong className="text-white">Finance:</strong> Optimize financial management through debt refinancing with lower interest rates. Diversify income sources via green financing and fintech investments to create stable alternative revenue streams.
                </li>
                <li>
                  <strong className="text-white">Operations:</strong> Accelerate automation and digitalization of operational processes. Integrating ERP systems for real-time financial and credit data management will improve efficiency, supported by continuous human resource development.
                </li>
              </ul>
            </div>
            
            <div className="mt-12 text-center">
              <a href="https://app.powerbi.com/links/ebvbklST58?ctid=3485b963-82ba-4a6f-810f-b5cc226ff898&pbi_source=linkShare" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors">
                <LinkIcon className="w-4 h-4" /> Open Full Power BI Interactive Dashboard
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

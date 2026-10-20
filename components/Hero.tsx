'use client';

import React from 'react';
import { ArrowDown, FileText, Github, Linkedin, Mail, ExternalLink, Terminal, Database, LineChart, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenRecruiterGlance: () => void;
}

export default function Hero({ onOpenResume, onOpenRecruiterGlance }: HeroProps) {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200/80 dark:border-slate-800/80 overflow-hidden">
      {/* Background subtle mesh grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#2563eb 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata & Credential Header (No static pills) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="text-blue-600 dark:text-blue-400 font-semibold">M.Sc. in Data Analytics</span>
              <span aria-hidden="true">·</span>
              <span>Dublin City University (DCU)</span>
              <span aria-hidden="true">·</span>
              <span>Available for Junior & Associate Roles</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] text-balance">
              Hi, I’m <span className="text-blue-600 dark:text-blue-400">Shreyas Karle</span>.
              <br />
              <span className="text-slate-800 dark:text-slate-200">
                Data Analyst & Analytics Engineer
              </span>
            </h1>

            {/* One-Line Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              I turn messy SQL, NoSQL, and transactional data into reliable pipelines, automated anomaly checks, and executive dashboards that stakeholders actually trust.
            </p>

            {/* Primary Action Cluster */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-all shadow-sm hover:shadow inline-flex items-center gap-2"
              >
                <span>Explore Case Studies</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 text-sm font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 rounded-md transition-all inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Download Resume (PDF)</span>
              </button>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-md transition-colors bg-white/50 dark:bg-slate-900/50"
                  title="View GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-md transition-colors bg-white/50 dark:bg-slate-900/50"
                  title="View LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Email Shreyas"
                  className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-md transition-colors bg-white/50 dark:bg-slate-900/50"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Target Role & Recruiter Prompt */}
            <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <span>Hiring for Big 4 or MNC analytics roles?</span>
              <button
                onClick={onOpenRecruiterGlance}
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                View 30-second recruiter brief →
              </button>
            </div>

          </div>

          {/* Right Column: Visual Telemetry Card (Domain-Native Analytics Canvas) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden p-5 sm:p-6 space-y-5">
              
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-900 dark:text-white block">
                      Production Analytics Stack
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Dublin City University & Industry Experience
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-slate-400">verified</span>
              </div>

              {/* Data Workflow Flowline */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex-wrap gap-1.5">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Terminal className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span className="font-medium">Ingestion &amp; ETL</span>
                  </div>
                  <span className="font-mono text-slate-500 dark:text-slate-400 text-[10px] sm:text-[11px]">
                    SQL · Python · Kafka · dbt
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex-wrap gap-1.5">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span className="font-medium">Quality &amp; Validation</span>
                  </div>
                  <span className="font-mono text-slate-500 dark:text-slate-400 text-[10px] sm:text-[11px]">
                    z-scores · Schema tests · SHAP
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex-wrap gap-1.5">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <LineChart className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="font-medium">Decision Delivery</span>
                  </div>
                  <span className="font-mono text-slate-500 dark:text-slate-400 text-[10px] sm:text-[11px]">
                    Power BI · DAX · Metabase · Tableau
                  </span>
                </div>
              </div>

              {/* Mini Interactive Sample Stat Card */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Customer Cohort Revenue Distribution
                  </span>
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">
                    69% in Top 27%
                  </span>
                </div>
                
                {/* Visual Cohort Bar */}
                <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex">
                  <div 
                    className="h-full bg-blue-600 transition-all duration-500" 
                    style={{ width: '69%' }} 
                    title="Champions & Loyal (69% Revenue)"
                  />
                  <div 
                    className="h-full bg-slate-300 dark:bg-slate-600 transition-all duration-500" 
                    style={{ width: '31%' }} 
                    title="Remaining 73% Customers (31% Revenue)"
                  />
                </div>
                
                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-1.5">
                  <span>Champions & Loyal Customers (27% base)</span>
                  <span>Remainder (73% base)</span>
                </div>
              </div>

              {/* Verified Action Link */}
              <a
                href="#analytics-lab"
                className="w-full py-2 text-xs font-medium text-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 block bg-blue-50/50 dark:bg-blue-950/30 rounded-md border border-blue-100 dark:border-blue-900/50 transition-colors"
              >
                Launch Interactive Analytics Workbench ↓
              </a>

            </div>
          </div>

        </div>

        {/* Full-Width Row Below Split: 4-Column KPI Metric Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Metric 1 */}
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white tabular-nums">
                1M+
              </div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                Records Processed & Audited
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                Python automated QA pipelines with 95% client satisfaction
              </div>
            </div>

            {/* Metric 2 */}
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white tabular-nums">
                30%
              </div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                Query Speed Optimization
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                Schema normalization across production MySQL and MongoDB
              </div>
            </div>

            {/* Metric 3 */}
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white tabular-nums">
                69%
              </div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                Revenue Concentration
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                Isolated in top 27% customer RFM cohorts across 392K rows
              </div>
            </div>

            {/* Metric 4 */}
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white tabular-nums">
                50+
              </div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                Active Dashboard Users
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                Daily operational reporting across cross-functional research teams
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

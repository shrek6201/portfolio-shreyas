'use client';

import React from 'react';
import { Database, LineChart, ShieldCheck, GraduationCap, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
            <span>About Shreyas Karle</span>
            <span aria-hidden="true">·</span>
            <span>M.Sc. Computing (Data Analytics), DCU</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Bridging High-Scale Data Plumbing with Strategic Executive Decisions
          </h2>
        </div>

        {/* 2-Column Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            <p>
              I am a Data Analyst and Analytics Engineer with an <strong className="text-slate-900 dark:text-white font-semibold">M.Sc. in Computing (Data Analytics) from Dublin City University (DCU)</strong>. My focus is turning fragmented, unstructured SQL and NoSQL data into transparent, high-performance pipelines and interactive dashboards that teams rely on daily.
            </p>

            <p>
              Unlike purely theoretical analysts, my background spans the <strong className="text-slate-900 dark:text-white font-semibold">entire data lifecycle</strong>: from writing performant SQL queries, building automated z-score anomaly detectors in Python, and tuning MongoDB aggregation pipelines, to authoring complex DAX measures and designing executive dashboards for 50+ users.
            </p>

            <p>
              During my academic practicum at DCU, I specialized in <strong className="text-slate-900 dark:text-white font-semibold">Explainable AI (SHAP) and Machine Learning</strong>. That gave me a rigorous framework for auditing AI outputs and statistical distributions—ensuring models don’t just output predictions, but provide verifiable feature attribution for risk management and compliance.
            </p>

            {/* Core Working Philosophy */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                Operating Principle
              </span>
              <p className="text-sm font-medium text-slate-900 dark:text-white italic">
                &ldquo;A dashboard is only as trustworthy as the upstream pipeline feeding it. I build automated QA checks at ingestion so leadership never makes six-figure decisions on dirty data.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Key Pillars of Value */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Database className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  1. Data Engineering & Pipeline Rigor
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-11">
                Deep hands-on experience in SQL (joins, window functions, CTEs), dbt, Snowflake, and Kafka streaming. Achieved 30% reporting speedups by diagnosing database bottlenecks and normalizing schemas.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  2. Automated QA & Anomaly Auditing
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-11">
                Audited 1M+ transaction and bio-analytics records. Built automated Python sanity checks, z-score outlier bounds, and duplicate detection routines that maintain 95% client satisfaction.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <LineChart className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  3. Executive Storytelling & DAX
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-11">
                Authoring performant DAX time-intelligence measures in Power BI, star schema modeling, and translating technical discoveries into immediate commercial strategy (e.g. 69% revenue concentration, 19% unprofitable orders).
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  4. Academic Rigor & AI Validation
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-11">
                Solid academic grounding with an M.Sc. from DCU, M.C.A, and B.B.A (Computer Applications). Published author on real-time analytics architectures and Google AI Essentials certified.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

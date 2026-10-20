'use client';

import React from 'react';
import { EXPERIENCES } from '@/data/portfolioData';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#0c121e]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
            <span>Work History</span>
            <span aria-hidden="true">·</span>
            <span>Industry & Internship Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
            Hands-on analytical roles spanning warehouse management systems, database schema optimization, automated QA pipelines, and cross-functional BI reporting.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-6 sm:p-8 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">{exp.company}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 block">
                    {exp.period}
                  </span>
                  {exp.keyMetric && (
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 block mt-0.5">
                      {exp.keyMetric}
                    </span>
                  )}
                </div>
              </div>

              {/* Bullet Descriptions */}
              <div className="py-4 space-y-2.5">
                {exp.description.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Skills Footer */}
              <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span className="text-slate-400 dark:text-slate-500 font-normal">Tech &amp; Competencies:</span>
                {exp.skills.map((s, sIdx) => (
                  <React.Fragment key={s}>
                    <span className="text-slate-700 dark:text-slate-300">{s}</span>
                    {sIdx < exp.skills.length - 1 && <span className="text-slate-300 dark:text-slate-700">·</span>}
                  </React.Fragment>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

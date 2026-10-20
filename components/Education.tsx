'use client';

import React from 'react';
import { EDUCATION, PUBLICATIONS_CERTIFICATIONS } from '@/data/portfolioData';
import { GraduationCap, Award, BookOpen, ExternalLink, FileText, CheckCircle } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
            <span>Academic & Continuous Learning</span>
            <span aria-hidden="true">·</span>
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education, Publications &amp; Certifications
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
            Rigorous computing and data analytics degree programs coupled with real-time streaming publications and technical certifications.
          </p>
        </div>

        {/* 2-Column Split: Education vs Publications/Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Degrees */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-sm font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Academic Degrees</span>
            </h3>

            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        {edu.location}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 tabular-nums shrink-0">
                      {edu.period}
                    </span>
                  </div>

                  {edu.practicum && (
                    <div className="p-3 rounded-lg bg-blue-50/60 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 text-xs text-slate-700 dark:text-slate-300">
                      <span className="font-semibold text-blue-700 dark:text-blue-300 block mb-0.5">
                        Practicum Thesis:
                      </span>
                      <span>{edu.practicum}</span>
                    </div>
                  )}

                  {edu.modules && (
                    <div className="pt-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Key Modules: </span>
                      <span>{edu.modules.join(' · ')}</span>
                    </div>
                  )}

                  {edu.details && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Publications & Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-sm font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Publications &amp; Certifications</span>
            </h3>

            <div className="space-y-4">
              {PUBLICATIONS_CERTIFICATIONS.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-2 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className={`font-semibold ${item.type === 'Publication' ? 'text-blue-600 dark:text-blue-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
                      {item.type} · {item.issuer}
                    </span>
                    <span className="font-mono text-[11px] tabular-nums">
                      {item.date}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

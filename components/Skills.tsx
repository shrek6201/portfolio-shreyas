'use client';

import React from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Database, Code2, LineChart, Wrench, CheckCircle } from 'lucide-react';

const icons = [Database, Code2, LineChart, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#0c121e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
            <span>Technical Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Production-Tested Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white break-words">
            Core Skills &amp; Analytics Stack
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
            Organized across data warehousing, analytical programming, business intelligence, and automated quality governance.
          </p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div 
                key={cat.category}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5 sm:p-7 space-y-6 overflow-hidden"
              >
                {/* Category Header */}
                <div className="flex items-start gap-3 pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white break-words">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 hover:border-slate-200 dark:hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400 font-mono">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {skill.details}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

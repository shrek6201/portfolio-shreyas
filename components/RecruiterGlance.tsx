'use client';

import React from 'react';
import { X, Download, Mail, Phone, ExternalLink, CheckCircle2, Award, Sparkles, Building2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface RecruiterGlanceProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export default function RecruiterGlance({ isOpen, onClose, onOpenResume }: RecruiterGlanceProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                Recruiter 30-Second Summary
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Targeting Big 4 & MNCs</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {PERSONAL_INFO.name}
            </h2>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-0.5">
              Junior / Associate Data Analyst & Analytics Engineer
            </p>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-6">
          
          {/* Target Role & Fit */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-100 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400">Education</div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mt-1">
                M.Sc. Data Analytics
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Dublin City University (DCU)
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-100 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400">Locations & Work Status</div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mt-1">
                Dublin, Ireland & Pune, India
              </div>
              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                Available Immediately
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-100 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400">Target Roles</div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mt-1">
                Data Analyst / Analytics Eng
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Junior & Associate Level
              </div>
            </div>
          </div>

          {/* 3 Headline Quantified Achievements */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-3">
              Top 3 Quantified Achievements
            </h3>
            <div className="space-y-3">
              <div className="p-3.5 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-start gap-3">
                <span className="text-base font-bold text-blue-600 dark:text-blue-400 tabular-nums shrink-0 mt-0.5">
                  69%
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    Revenue Concentration Uncovered via Customer RFM Cohorts
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                    Cleaned 540K transactions into 392K clean records across 4,338 customers. Proved that 27% of base drove ~69% of revenue; generated segmentation retention playbooks.
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-start gap-3">
                <span className="text-base font-bold text-blue-600 dark:text-blue-400 tabular-nums shrink-0 mt-0.5">
                  30%
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    Reporting Query Performance Improvement
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                    Audited MongoDB and MySQL datasets at Demos Centre, refactored slow joins and aggregation pipelines, and deployed Power BI dashboards for 50+ business users.
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-start gap-3">
                <span className="text-base font-bold text-blue-600 dark:text-blue-400 tabular-nums shrink-0 mt-0.5">
                  1M+
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    Records Automated QA & Anomaly Detection Pipeline
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                    Built automated Python data sanitization and statistical z-score outlier monitoring for 1M+ records at Kovid Bio Analytics, delivering documented reporting with 95% client satisfaction.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Tech Stack Grid */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-2.5">
              Production Tech Stack
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-white block">SQL & Warehouses</span>
                <span className="text-slate-500 dark:text-slate-400">PostgreSQL, MySQL, Snowflake</span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-white block">Pipelines & ETL</span>
                <span className="text-slate-500 dark:text-slate-400">dbt, Kafka, REST APIs, Python</span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-white block">BI & Visualization</span>
                <span className="text-slate-500 dark:text-slate-400">Power BI, DAX, Tableau, Excel</span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-white block">Data Science & QA</span>
                <span className="text-slate-500 dark:text-slate-400">scikit-learn, SHAP, Anomaly checks</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1.5 break-all"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">·</span>
            <a 
              href={`tel:${PERSONAL_INFO.phone}`} 
              className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors border border-slate-200 dark:border-slate-700 inline-flex items-center justify-center gap-1"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="flex-1 sm:flex-initial px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors shadow-sm inline-flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Full Resume PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

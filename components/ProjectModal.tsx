'use client';

import React from 'react';
import { X, Github, ExternalLink, CheckCircle2, Code2, Database, ArrowRight } from 'lucide-react';
import { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenLiveLab?: () => void;
}

export default function ProjectModal({ project, onClose, onOpenLiveLab }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>Case Study Deep Dive</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              {project.tagline}
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

        {/* Modal Body */}
        <div className="py-6 space-y-8">
          
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-xs text-slate-500 dark:text-slate-400 block">{m.label}</span>
                <span className="text-xl font-bold text-slate-900 dark:text-white tabular-nums block mt-0.5">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Problem → Approach → Result Structured Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Problem */}
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
              <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block">
                01. The Business Problem
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* 2. Approach */}
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                02. Analytical Approach
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* 3. Result */}
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                03. Commercial Outcome
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.result}
              </p>
            </div>

          </div>

          {/* Detailed Engineering Highlights */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-3">
              Technical Execution Highlights
            </h3>
            <ul className="space-y-2.5">
              {project.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code or DAX Measure Preview */}
          {project.codeSnippet && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-blue-500" />
                  <span>{project.codeSnippet.title}</span>
                </span>
                <span className="font-mono text-slate-400 text-[11px] uppercase">
                  {project.codeSnippet.language}
                </span>
              </div>
              <div className="p-4 rounded-lg bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto">
                <pre className="text-blue-300 leading-snug">
                  {project.codeSnippet.code}
                </pre>
              </div>
            </div>
          )}

          {/* Tools & Technologies (Unboxed typography, no pills) */}
          <div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-2">
              Tools & Methodologies Applied:
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
              {project.tools.map((t, idx) => (
                <React.Fragment key={t}>
                  <span>{t}</span>
                  {idx < project.tools.length - 1 && <span className="text-slate-300 dark:text-slate-700">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md transition-colors inline-flex items-center justify-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Repository</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="flex flex-wrap items-center gap-2">
            {onOpenLiveLab && (
              <button
                onClick={() => {
                  onClose();
                  onOpenLiveLab();
                }}
                className="flex-1 sm:flex-initial px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors inline-flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Launch in Interactive Lab</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              onClick={onClose}
              className="px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

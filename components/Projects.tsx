'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/portfolioData';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface ProjectsProps {
  onOpenLiveLab: () => void;
}

export default function Projects({ onOpenLiveLab }: ProjectsProps) {
  const [filter, setFilter] = useState<'All' | 'BI & Dashboards' | 'Python & ML' | 'Data Pipelines'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#090d16] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
              <span>Featured Case Studies</span>
              <span aria-hidden="true">·</span>
              <span>Problem → Approach → Result</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white break-words">
              Analytical &amp; Engineering Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Real-world portfolio projects demonstrating data quality audits, complex DAX measure engineering, predictive machine learning benchmarks, and streaming pipelines.
            </p>
          </div>

          {/* Interactive Filter Tabs (Fully responsive with edge-to-edge scroll and zero clipping on mobile) */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 shrink-0">
            <div className="inline-flex items-center gap-1.5 p-1 bg-slate-200/80 dark:bg-slate-800/90 rounded-lg min-w-max md:min-w-0">
              {(['All', 'BI & Dashboards', 'Python & ML', 'Data Pipelines'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    filter === cat
                      ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm hover:shadow-md"
            >
              {/* Card Header & Kicker */}
              <div>
                <div className="flex items-center justify-between text-xs mb-3 flex-wrap gap-2">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    {project.category}
                  </span>
                  <span className="font-mono font-bold text-slate-700 dark:text-slate-300 tabular-nums">
                    {project.metricBadge}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 break-words">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Structured Case Study Elements */}
                <div className="space-y-3.5 mb-6">
                  
                  {/* Problem */}
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                      Problem:
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                      Approach:
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.approach}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="text-xs p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-emerald-700 dark:text-emerald-400 block mb-0.5">
                      Result &amp; Insight:
                    </span>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                      {project.result}
                    </p>
                  </div>

                </div>

                {/* Tools Applied (Unboxed inline text with separators) */}
                <div className="pt-2 pb-5 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-[11px] text-slate-400 dark:text-slate-500 mb-1">
                    Tools &amp; Methodologies:
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {project.tools.map((t, idx) => (
                      <React.Fragment key={t}>
                        <span>{t}</span>
                        {idx < project.tools.length - 1 && <span className="text-slate-300 dark:text-slate-700">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 flex-wrap">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-3.5 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-600 border border-blue-200 dark:border-blue-900 rounded-md transition-colors inline-flex items-center gap-1.5 focus:outline-none"
                >
                  <span>Case Study Deep Dive</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-md transition-colors inline-flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Deep Dive Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenLiveLab={() => {
            setSelectedProject(null);
            onOpenLiveLab();
          }}
        />
      )}
    </section>
  );
}

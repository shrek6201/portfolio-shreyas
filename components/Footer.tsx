'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#090d16] py-12 text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Identity & Copyright */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="font-semibold text-slate-900 dark:text-white text-sm">
            {PERSONAL_INFO.name}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Data Analyst &amp; Analytics Engineer · Dublin, Ireland &amp; Pune, India
          </p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 pt-0.5">
            © {new Date().getFullYear()} Shreyas Karle. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>

        {/* Center: Clean Text Navigation */}
        <div className="flex items-center gap-5 font-medium text-slate-600 dark:text-slate-300">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Case Studies</a>
          <a href="#analytics-lab" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Lab</a>
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
        </div>

        {/* Right: Social & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Email"
            className="p-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AnalyticsWidget from '@/components/AnalyticsWidget';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import RecruiterGlance from '@/components/RecruiterGlance';
import ResumeModal from '@/components/ResumeModal';

export default function Home() {
  const [isRecruiterGlanceOpen, setIsRecruiterGlanceOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenLiveLab = () => {
    const el = document.getElementById('analytics-lab');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 transition-colors">
      {/* Top Bar Navigation */}
      <Navbar 
        onOpenRecruiterGlance={() => setIsRecruiterGlanceOpen(true)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenRecruiterGlance={() => setIsRecruiterGlanceOpen(true)}
        />

        {/* Featured Case Studies (Lead with impactful projects) */}
        <Projects onOpenLiveLab={handleOpenLiveLab} />

        {/* Interactive Analytics Lab / Visual Data-Viz Sandbox */}
        <AnalyticsWidget />

        {/* About Section */}
        <About />

        {/* Skills Section (Grouped: SQL/ETL, Python, BI/Visualization, Cloud/Tools) */}
        <Skills />

        {/* Work Experience */}
        <Experience />

        {/* Education, Publications & Certifications */}
        <Education />

        {/* Contact Section */}
        <Contact onOpenResume={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Recruiter 30-Second Glance Modal */}
      <RecruiterGlance 
        isOpen={isRecruiterGlanceOpen}
        onClose={() => setIsRecruiterGlanceOpen(false)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Interactive Resume PDF Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

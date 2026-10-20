'use client';

import React, { useState } from 'react';
import { BarChart3, Users, TrendingUp, AlertTriangle, CheckCircle2, ChevronRight, Sliders, Code2 } from 'lucide-react';

export default function AnalyticsWidget() {
  const [activeTab, setActiveTab] = useState<'rfm' | 'attrition' | 'sentiment'>('rfm');
  
  // RFM State
  const [selectedSegment, setSelectedSegment] = useState<'champions' | 'loyal' | 'at_risk' | 'hibernating'>('champions');
  
  // Attrition State
  const [hasOvertime, setHasOvertime] = useState<boolean>(true);
  const [selectedDept, setSelectedDept] = useState<'rnd' | 'sales' | 'hr'>('rnd');

  // Sentiment State
  const [selectedModel, setSelectedModel] = useState<'baseline' | 'tfidf'>('tfidf');

  // RFM Segment Details
  const rfmSegments = {
    champions: {
      name: "Champions",
      r: "4-5 (Recent)",
      f: "4-5 (Frequent)",
      m: "4-5 (High Spend)",
      customerPct: 12,
      revenuePct: 41,
      retentionAction: "VIP rewards, early access to premium lines, brand advocacy programs.",
      aov: "€184.50"
    },
    loyal: {
      name: "Loyal Customers",
      r: "3-4 (Moderate)",
      f: "3-4 (Regular)",
      m: "3-4 (Above Avg)",
      customerPct: 15,
      revenuePct: 28,
      retentionAction: "Upsell higher-margin categories, cross-sell bundles, loyalty points incentives.",
      aov: "€112.20"
    },
    at_risk: {
      name: "At-Risk Customers",
      r: "1-2 (Dormant)",
      f: "3-5 (Used to buy)",
      m: "3-5 (High historical spend)",
      customerPct: 18,
      revenuePct: 16,
      retentionAction: "Automated winback email drip, targeted 15% comeback vouchers, feedback survey.",
      aov: "€95.40"
    },
    hibernating: {
      name: "Hibernating / Lapsed",
      r: "1-2 (Dormant)",
      f: "1-2 (Low frequency)",
      m: "1-2 (Low spend)",
      customerPct: 55,
      revenuePct: 15,
      retentionAction: "Low-cost programmatic re-engagement; avoid high paid ad acquisition spend.",
      aov: "€38.10"
    }
  };

  const currentRfm = rfmSegments[selectedSegment];

  // Attrition Data
  const attritionStats = {
    rnd: {
      name: "Research & Development",
      otRate: 28.4,
      normalRate: 9.8,
      sampleSize: 961,
      action: "Cap consecutive sprint overtime to prevent attrition of senior analytical talent."
    },
    sales: {
      name: "Sales & Client Delivery",
      otRate: 35.1,
      normalRate: 12.3,
      sampleSize: 446,
      action: "Rebalance commission structure to reward deal completion rather than manual weekend hours."
    },
    hr: {
      name: "Human Resources / Ops",
      otRate: 26.2,
      normalRate: 8.5,
      sampleSize: 63,
      action: "Automate repetitive onboarding and compliance data logging using Python scripts."
    }
  };

  const currentDept = attritionStats[selectedDept];
  const activeAttritionRate = hasOvertime ? currentDept.otRate : currentDept.normalRate;

  return (
    <section id="analytics-lab" className="py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#0c121e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
              <span>Interactive Data Workbench</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 dark:text-slate-400">Live Analytics Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white break-words">
              Data &amp; Statistical Insights in Action
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Explore interactive models derived directly from my portfolio case studies. Test segmentation cohorts, inspect attrition drivers, and review NLP benchmark uplifts.
            </p>
          </div>

          {/* Tab Selector Controls (Edge-to-edge scroll on mobile, zero out of bounds) */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 shrink-0">
            <div className="inline-flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/90 rounded-lg min-w-max md:min-w-0">
              <button
                onClick={() => setActiveTab('rfm')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap focus:outline-none ${
                  activeTab === 'rfm'
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                1. Customer RFM Model
              </button>
              <button
                onClick={() => setActiveTab('attrition')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap focus:outline-none ${
                  activeTab === 'attrition'
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                2. HR Attrition Matrix
              </button>
              <button
                onClick={() => setActiveTab('sentiment')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap focus:outline-none ${
                  activeTab === 'sentiment'
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                3. NLP F1 Benchmark
              </button>
            </div>
          </div>
        </div>

        {/* Workbench Body Container */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5 sm:p-8">
          
          {/* TAB 1: RFM SEGMENTATION MODEL */}
          {activeTab === 'rfm' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Retail Transaction Analysis (392K records · 4,338 customers)
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 break-words">
                    Revenue Concentration by RFM Cohort
                  </h3>
                </div>
                
                {/* Segment Filter Buttons */}
                <div className="w-full sm:w-auto overflow-x-auto no-scrollbar -mx-2 px-2 sm:mx-0 sm:px-0">
                  <div className="inline-flex flex-wrap items-center gap-1.5 min-w-max sm:min-w-0">
                    {(['champions', 'loyal', 'at_risk', 'hibernating'] as const).map((seg) => (
                      <button
                        key={seg}
                        onClick={() => setSelectedSegment(seg)}
                        className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap focus:outline-none ${
                          selectedSegment === seg
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                      >
                        {rfmSegments[seg].name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Data Visualization Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Interactive Cohort Card */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Key Metrics Strip */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <span className="text-xs text-slate-500 dark:text-slate-400 block">Customer Share</span>
                      <span className="text-2xl font-bold text-slate-900 dark:text-white tabular-nums">
                        {currentRfm.customerPct}%
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">of 4,338 base</span>
                    </div>

                    <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <span className="text-xs text-slate-500 dark:text-slate-400 block">Revenue Share</span>
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                        {currentRfm.revenuePct}%
                      </span>
                      <span className="text-[11px] text-blue-500/80 block mt-0.5">commercial volume</span>
                    </div>

                    <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <span className="text-xs text-slate-500 dark:text-slate-400 block">Average Basket</span>
                      <span className="text-2xl font-bold text-slate-900 dark:text-white tabular-nums">
                        {currentRfm.aov}
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">order value</span>
                    </div>
                  </div>

                  {/* Comparative Visual Bars */}
                  <div className="p-5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      Customer Base Share vs. Revenue Output
                    </div>

                    {/* Customer % Bar */}
                    <div>
                      <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                        <span>% of Total Customer Base</span>
                        <span className="font-mono font-bold text-slate-700 dark:text-slate-300 tabular-nums">
                          {currentRfm.customerPct}%
                        </span>
                      </div>
                      <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-slate-400 dark:bg-slate-500 transition-all duration-500"
                          style={{ width: `${currentRfm.customerPct}%` }}
                        />
                      </div>
                    </div>

                    {/* Revenue % Bar */}
                    <div>
                      <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                        <span>% of Total Gross Revenue Generated</span>
                        <span className="font-mono font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                          {currentRfm.revenuePct}%
                        </span>
                      </div>
                      <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-blue-600 transition-all duration-500"
                          style={{ width: `${currentRfm.revenuePct}%` }}
                        />
                      </div>
                    </div>

                    {/* Core Insight Callout */}
                    <div className="pt-2 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 leading-relaxed">
                      <span className="font-semibold text-slate-900 dark:text-white">Cohort Key Finding: </span>
                      Champions &amp; Loyal customers together represent <strong className="text-blue-600 dark:text-blue-400">27% of customers</strong> but deliver <strong className="text-blue-600 dark:text-blue-400">~69% of all revenue</strong>.
                    </div>
                  </div>

                </div>

                {/* Right: Business Strategy & Technical Implementation */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      Actionable Retention Playbook
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      Recommended Strategy for {currentRfm.name}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {currentRfm.retentionAction}
                    </p>
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between flex-wrap gap-2">
                      <span>R Quintile: {currentRfm.r}</span>
                      <span>F Quintile: {currentRfm.f}</span>
                    </div>
                  </div>

                  {/* DAX Model Preview */}
                  <div className="p-4 rounded-lg bg-slate-900 text-slate-100 font-mono text-[11px] overflow-x-auto space-y-1">
                    <div className="flex items-center justify-between text-slate-400 text-[10px] pb-1 border-b border-slate-800">
                      <span>Power BI / DAX Measure</span>
                      <span>Tabular Model</span>
                    </div>
                    <pre className="text-blue-300 py-1 leading-snug">
{`Revenue_Concentration = 
CALCULATE(
    SUM('Sales'[Line_Total]), 
    FILTER('Customer', 'Customer'[RFM_Tier] IN {"Champions", "Loyal"})
) / [Total_Revenue]
// Result: 68.8% (~69%)`}
                    </pre>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: HR ATTRITION DRIVERS MATRIX */}
          {activeTab === 'attrition' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Multivariate Attrition Study (1,470 records · p &lt; 0.001)
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 break-words">
                    Workload &amp; Overtime Turnover Disparity
                  </h3>
                </div>

                {/* Department Buttons */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {(['rnd', 'sales', 'hr'] as const).map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDept(d)}
                      className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap focus:outline-none ${
                        selectedDept === d
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {attritionStats[d].name.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Attrition Simulator Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Overtime Comparison */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Overtime Selector Toggle (Stacked on mobile to avoid overflow) */}
                  <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        Simulate Overtime Assignment
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Evaluating voluntary resignation probability
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={() => setHasOvertime(false)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors text-center whitespace-nowrap focus:outline-none ${
                          !hasOvertime
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        Standard Hours (No OT)
                      </button>
                      <button
                        onClick={() => setHasOvertime(true)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors text-center whitespace-nowrap focus:outline-none ${
                          hasOvertime
                            ? 'bg-rose-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        Regular Overtime (OT = Yes)
                      </button>
                    </div>
                  </div>

                  {/* Rate Visualizer */}
                  <div className="p-5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
                    <div className="flex items-baseline justify-between flex-wrap gap-2">
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {currentDept.name} Resignation Rate
                      </span>
                      <span className={`text-2xl font-bold tabular-nums ${hasOvertime ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
                        {activeAttritionRate}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-4 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${hasOvertime ? 'bg-rose-500' : 'bg-emerald-500'}`}
                        style={{ width: `${activeAttritionRate * 2.5}%` }}
                      />
                    </div>

                    {/* Side-by-side comparison */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                      <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/60">
                        <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Non-Overtime Baseline</span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400 text-sm tabular-nums">
                          {currentDept.normalRate}%
                        </span>
                        <span className="text-[10px] text-slate-400 block">predictable baseline</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/60">
                        <span className="text-slate-500 dark:text-slate-400 block text-[11px]">With Overtime Pressure</span>
                        <span className="font-semibold text-rose-600 dark:text-rose-400 text-sm tabular-nums">
                          {currentDept.otRate}%
                        </span>
                        <span className="text-[10px] text-rose-500/80 block">~3x multiplier risk</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right: Statistical Proof & Recommendations */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      Statistical Finding &amp; HR Action
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      Targeted Policy Intervention
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {currentDept.action}
                    </p>
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between flex-wrap gap-2">
                      <span>Cohort Size: {currentDept.sampleSize}</span>
                      <span>p-value: &lt; 0.001</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-900 text-slate-100 font-mono text-[11px] overflow-x-auto space-y-1">
                    <div className="flex items-center justify-between text-slate-400 text-[10px] pb-1 border-b border-slate-800">
                      <span>Python Scipy Chi-Square Test</span>
                      <span>Stat Significance</span>
                    </div>
                    <pre className="text-emerald-400 py-1 leading-snug">
{`from scipy.stats import chi2_contingency
contingency = pd.crosstab(df['OverTime'], df['Attrition'])
chi2, p_val, dof, ex = chi2_contingency(contingency)
# chi2: 87.24 | p-value: 9.8e-21 (Statistically Significant)`}
                    </pre>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: NLP SENTIMENT BENCHMARK */}
          {activeTab === 'sentiment' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Text Mining Benchmark (394K reviews · Macro F1)
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 break-words">
                    VADER Lexicon Baseline vs. Supervised TF-IDF Model
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  <button
                    onClick={() => setSelectedModel('baseline')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap focus:outline-none ${
                      selectedModel === 'baseline'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    VADER Baseline
                  </button>
                  <button
                    onClick={() => setSelectedModel('tfidf')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap focus:outline-none ${
                      selectedModel === 'tfidf'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    TF-IDF Classifier (+37.5%)
                  </button>
                </div>
              </div>

              {/* Model Comparison */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Performance Metrics */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <span className="text-xs text-slate-500 dark:text-slate-400 block">Macro F1 Score</span>
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                        {selectedModel === 'tfidf' ? '0.66' : '0.48'}
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        {selectedModel === 'tfidf' ? '+37.5% lift over baseline' : 'Rule-based benchmark'}
                      </span>
                    </div>

                    <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <span className="text-xs text-slate-500 dark:text-slate-400 block">Negative Recall</span>
                      <span className="text-2xl font-bold text-slate-900 dark:text-white tabular-nums">
                        {selectedModel === 'tfidf' ? '73.4%' : '51.2%'}
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">catches defects</span>
                    </div>

                    <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <span className="text-xs text-slate-500 dark:text-slate-400 block">Negative Review Trend</span>
                      <span className="text-2xl font-bold text-rose-600 dark:text-rose-400 tabular-nums">
                        10% → 16.1%
                      </span>
                      <span className="text-[11px] text-rose-500/80 block mt-0.5">12-month drift</span>
                    </div>
                  </div>

                  {/* Root Cause Decomposition */}
                  <div className="p-5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      Root Causes for Surge in Negative Reviews (10.0% to 16.1%)
                    </div>
                    
                    <div className="space-y-2 text-xs">
                      <div>
                        <div className="flex justify-between text-slate-600 dark:text-slate-300 mb-1">
                          <span>1. Freshness &amp; Expiry Decay complaints</span>
                          <span className="font-mono font-bold tabular-nums">48.2%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                          <div className="h-full bg-rose-500" style={{ width: '48.2%' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-slate-600 dark:text-slate-300 mb-1">
                          <span>2. Listing Specification &amp; Weight Inaccuracies</span>
                          <span className="font-mono font-bold tabular-nums">34.6%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                          <div className="h-full bg-amber-500" style={{ width: '34.6%' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-slate-600 dark:text-slate-300 mb-1">
                          <span>3. Shipping &amp; Packaging Damage</span>
                          <span className="font-mono font-bold tabular-nums">17.2%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                          <div className="h-full bg-slate-400" style={{ width: '17.2%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right: Technical Explanation */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      Methodology Rigor
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      Why TF-IDF + Logistic Regression Outperformed
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Rule-based lexicons struggle with domain-specific phrases like &quot;tastes expired&quot; or &quot;misleading picture&quot;. By training an n-gram TF-IDF model with class-balanced weights, we captured contextual multi-word tokens without deep-learning inference overhead.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-900 text-slate-100 font-mono text-[11px] overflow-x-auto space-y-1">
                    <div className="flex items-center justify-between text-slate-400 text-[10px] pb-1 border-b border-slate-800">
                      <span>scikit-learn Pipeline</span>
                      <span>Macro F1 Benchmark</span>
                    </div>
                    <pre className="text-amber-300 py-1 leading-snug">
{`clf = LogisticRegression(class_weight='balanced', C=1.5)
clf.fit(X_train_vec, y_train)
# Test Macro F1: 0.66 (vs VADER: 0.48)`}
                    </pre>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

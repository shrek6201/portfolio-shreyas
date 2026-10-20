export interface Project {
  id: string;
  title: string;
  category: 'BI & Dashboards' | 'Python & ML' | 'Data Pipelines';
  tagline: string;
  problem: string;
  approach: string;
  tools: string[];
  result: string;
  metricBadge: string;
  githubUrl: string;
  demoUrl?: string;
  highlights: string[];
  codeSnippet?: {
    language: string;
    code: string;
    title: string;
  };
  metrics: { label: string; value: string }[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
  keyMetric?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
  practicum?: string;
  modules?: string[];
}

export const PERSONAL_INFO = {
  name: "Shreyas Karle",
  title: "Data Analyst & Analytics Engineer",
  email: "shreyasrkarle@gmail.com",
  phone: "+91 7378395919",
  location: "Pune, India · Dublin, Ireland",
  availability: "Available for Junior & Associate Roles (Immediate / Notice: Available)",
  targetRoles: ["Junior Data Analyst", "Associate Data Analyst", "Analytics Engineer", "BI Developer"],
  github: "https://github.com/shrek6201",
  linkedin: "https://linkedin.com/in/shreyaskarle",
  resumePath: "/Shreyas_Karle_Resume.pdf",
  bio: "Data Analyst with an M.Sc. in Computing (Dublin City University) who turns messy SQL and NoSQL data into clear, reliable dashboards teams actually use. Experienced across the full analytical lifecycle—building automated checks, keeping pipelines clean, and reporting directly to decision-makers, with a practical eye for auditing and validating modern AI outputs.",
  headlineMetrics: [
    { value: "1M+", label: "Records Audited & Ingested", context: "Automated Python QA pipelines with 95% client satisfaction" },
    { value: "30%", label: "Query Speed Improvement", context: "Schema optimization across production MongoDB & MySQL datasets" },
    { value: "69%", label: "Revenue Concentration Discovered", context: "Identified top 27% customer RFM cohorts generating bulk revenue" },
    { value: "50+", label: "Active Dashboard Stakeholders", context: "Power BI & Tableau daily decision metrics for cross-functional teams" }
  ]
};

export const SKILL_CATEGORIES = [
  {
    category: "SQL, Warehousing & Pipelines",
    description: "Architecting reliable transformations, schema design, and performant data retrieval.",
    skills: [
      { name: "SQL (PostgreSQL, MySQL)", level: "Advanced", details: "Window functions, CTEs, query plan optimization, indexing" },
      { name: "dbt (data build tool)", level: "Proficient", details: "Modular transformations, schema testing, lineage documentation" },
      { name: "Snowflake", level: "Proficient", details: "Warehouse sizing, staging tables, zero-copy cloning, RBAC" },
      { name: "MongoDB", level: "Intermediate", details: "Aggregation pipelines, schema validation, indexing strategies" },
      { name: "Kafka / Redpanda", level: "Intermediate", details: "Event-driven real-time streaming, topic partitions, producer/consumer" },
      { name: "ETL / ELT Pipelines", level: "Advanced", details: "API ingestion, incremental loads, data reconciliation, idempotent runs" }
    ]
  },
  {
    category: "Python & Analytics Engineering",
    description: "Statistical modeling, exploratory data analysis, and automated anomaly detection.",
    skills: [
      { name: "Python (Pandas, NumPy)", level: "Advanced", details: "Vectorized data cleaning, exploratory analysis, performance profiling" },
      { name: "scikit-learn & Predictive Modeling", level: "Proficient", details: "XGBoost, Logistic Regression, cross-validation, feature engineering" },
      { name: "Explainable AI (SHAP)", level: "Proficient", details: "TreeExplainer, force plots, feature importance decomposition" },
      { name: "Anomaly Detection", level: "Advanced", details: "z-score validation, rolling window baselines, IQR outlier filtering" },
      { name: "Hypothesis & Statistical Testing", level: "Proficient", details: "T-tests, Chi-square, Pearson correlation, A/B testing rigor" },
      { name: "R Language", level: "Intermediate", details: "Statistical inference, multivariate linear modeling, ggplot2" }
    ]
  },
  {
    category: "BI, Visualization & Reporting",
    description: "Transforming complex business logic into intuitive executive decision dashboards.",
    skills: [
      { name: "Power BI & DAX", level: "Advanced", details: "Complex DAX measures (CALCULATE, FILTER, time-intelligence), star schema" },
      { name: "Tableau", level: "Proficient", details: "LOD expressions, interactive parameters, executive storytelling" },
      { name: "Metabase & Streamlit", level: "Proficient", details: "Self-service query exploration, interactive Python analytical web apps" },
      { name: "Advanced Excel", level: "Advanced", details: "Power Query, dynamic arrays, XLOOKUP, pivot modeling" },
      { name: "Report Generation", level: "Advanced", details: "Automated executive summary generation, data gap alerts" }
    ]
  },
  {
    category: "Quality, Governance & Tools",
    description: "Auditing data integrity, ensuring reproducibility, and validating AI outputs.",
    skills: [
      { name: "Data QA Automation", level: "Advanced", details: "Automated schema checks, null tracking, foreign key integrity checks" },
      { name: "AI Output Auditing", level: "Proficient", details: "Fact-checking LLM syntheses, hallucination mitigation, semantic scoring" },
      { name: "Git & Version Control", level: "Proficient", details: "Branching strategies, CI/CD automated linting, code reviews" },
      { name: "API Integrations", level: "Proficient", details: "REST API consumption, token management, rate limiting, error retry logic" },
      { name: "Technical Documentation", level: "Advanced", details: "Data dictionaries, ERD diagrams, stakeholder playbooks" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "customer-rfm-segmentation",
    title: "Customer RFM Segmentation & Revenue Concentration",
    category: "BI & Dashboards",
    tagline: "Uncovering €M revenue drivers by segmenting 4,338 customers across 392K transactions",
    problem: "The commercial marketing team lacked granular customer segmentation, treating high-value repeat spenders and one-time discount shoppers identically, resulting in suboptimal marketing spend and lost retention opportunities.",
    approach: "Cleaned and sanitized 540,000 raw retail transactional records down to 392,000 verified line items. Calculated individual customer Recency, Frequency, and Monetary values in Python and Power BI. Modeled 11 distinct RFM segments with tailored retention playbooks using DAX measures.",
    tools: ["Python", "Power BI", "DAX", "Pandas", "Statistical Quantiles"],
    result: "Discovered that 'Champions' and 'Loyal Customers' constituted just 27% of the total customer base yet drove ~69% of all commercial revenue. Formulated targeted retention strategies that prioritized high-LTV cohorts over dormant accounts.",
    metricBadge: "27% Base → ~69% Revenue",
    githubUrl: "https://www.github.com/shrek6201/Syntecxhub_Customer_RFM_Analysis",
    highlights: [
      "Processed 540,000 raw transactions to 392,000 clean line items across 4,338 distinct customers",
      "Engineered dynamic RFM quintiles (1-5 scale) using custom DAX time-intelligence functions",
      "Segmented into 11 actionable groups: Champions, Loyal, Potential Loyalists, At Risk, Hibernating",
      "Delivered executive dashboard with interactive customer drill-through and churn-risk indicators"
    ],
    codeSnippet: {
      language: "dbt / DAX",
      title: "RFM Score Calculation (DAX)",
      code: `// DAX Measure: Dynamic Customer RFM Segment Assignment
RFM_Segment = 
VAR R_Score = [R_Score_Val]
VAR F_Score = [F_Score_Val]
VAR M_Score = [M_Score_Val]
RETURN
SWITCH(
    TRUE(),
    R_Score >= 4 && F_Score >= 4 && M_Score >= 4, "Champions (Top 12%)",
    R_Score >= 3 && F_Score >= 3 && M_Score >= 3, "Loyal Customers (15%)",
    R_Score >= 4 && F_Score <= 2, "Recent Customers",
    R_Score <= 2 && F_Score >= 3, "At Risk - Winback",
    R_Score <= 2 && F_Score <= 2, "Hibernating",
    "General Repeaters"
)`
    },
    metrics: [
      { label: "Transactions Cleaned", value: "392,000" },
      { label: "Revenue Concentration", value: "69%" },
      { label: "Active Customers", value: "4,338" },
      { label: "Identified Segments", value: "11 Cohorts" }
    ]
  },
  {
    id: "amazon-sentiment-analysis",
    title: "Amazon Customer Sentiment & Review Quality NLP",
    category: "Python & ML",
    tagline: "Lifting macro F1 score from 0.48 to 0.66 while diagnosing root-cause negative review spikes",
    problem: "With hundreds of thousands of customer reviews, product managers could not discern whether negative ratings were driven by delivery latency, item defects, or deceptive product listings.",
    approach: "Sanitized 568K raw Amazon fine food reviews down to 394K high-confidence records. Benchmarked a rule-based lexicon baseline (VADER) against a supervised TF-IDF + Logistic Regression classifier. Extracted bi-grams and tri-grams to isolate recurring root-cause complaint clusters.",
    tools: ["Python", "scikit-learn", "VADER", "TF-IDF", "Matplotlib", "Seaborn"],
    result: "Lifted sentiment classification macro F1 score from 0.48 to 0.66. Surfaced that negative reviews surged from 10.0% to 16.1% over a 12-month period, driven specifically by freshness decay and listing-accuracy discrepancies.",
    metricBadge: "F1 Lift: 0.48 → 0.66",
    githubUrl: "https://www.github.com/shrek6201/Syntecxhub_Amazon_Customer_Sentiment_Analysis",
    highlights: [
      "Engineered text pre-processing pipeline: HTML stripping, tokenization, lemmatization, and TF-IDF weighting",
      "Benchmark test proved supervised n-gram classifier outperformed lexicon baseline by +37.5% macro F1",
      "Surfaced a 61% relative increase in negative reviews (10.0% to 16.1%) tied to packaging freshness",
      "Created automated alert logic to flag seller listing drift before ratings degrade"
    ],
    codeSnippet: {
      language: "python",
      title: "TF-IDF Logistic Regression & Evaluation Pipeline",
      code: `from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, f1_score

# Feature extraction with n-gram boundaries
vectorizer = TfidfVectorizer(max_features=25000, ngram_range=(1, 3), stop_words='english')
X_train_vec = vectorizer.fit_transform(X_train['cleaned_text'])
X_test_vec = vectorizer.transform(X_test['cleaned_text'])

# Train calibrated classifier
clf = LogisticRegression(C=1.5, class_weight='balanced', max_iter=1000)
clf.fit(X_train_vec, y_train)

# Evaluation comparison
macro_f1 = f1_score(y_test, clf.predict(X_test_vec), average='macro')
print(f"Classifier Macro F1: {macro_f1:.2f} vs VADER Baseline: 0.48")`
    },
    metrics: [
      { label: "Reviews Evaluated", value: "394,000" },
      { label: "Baseline Macro F1", value: "0.48" },
      { label: "Final Model Macro F1", value: "0.66" },
      { label: "Negative Review Drift", value: "+6.1% (to 16.1%)" }
    ]
  },
  {
    id: "hr-attrition-dashboard",
    title: "HR Analytics: Employee Attrition Drivers Dashboard",
    category: "BI & Dashboards",
    tagline: "Identifying 30.5% vs 10.4% overtime turnover disparity with interactive retention playbooks",
    problem: "Enterprise HR leaders faced high mid-level personnel departures without quantifiable proof of which workplace variables (compensation, travel, promotion velocity, or workload) had statistically significant impact.",
    approach: "Explored 1,470 multi-variable employee records using Python for correlation matrices and chi-square independence tests. Modeled risk factors in Power BI, architecting dynamic what-if retention scenarios and DAX attrition metrics.",
    tools: ["Python", "Power BI", "DAX", "Correlation Analysis", "Statistical Hypothesis Testing"],
    result: "Isolated overtime as the primary voluntary departure catalyst: employees assigned regular overtime exhibited a 30.5% attrition rate compared to only 10.4% for peers without overtime. Delivered a 2-page interactive executive dashboard with role-level mitigation recommendations.",
    metricBadge: "30.5% vs 10.4% Attrition",
    githubUrl: "https://www.github.com/shrek6201/Syntecxhub_HR_Analytics_Dashboard",
    highlights: [
      "Conducted multivariate correlation and feature significance ranking across 35 employee attributes",
      "Proved overtime staff were ~3x more likely to leave (30.5% vs 10.4%, p < 0.001)",
      "Built interactive 2-page Power BI dashboard featuring dynamic department filters and risk scoring",
      "Formulated department-specific retention recommendations targeting high-risk technical roles"
    ],
    codeSnippet: {
      language: "dax",
      title: "DAX Overtime Attrition Rate Measure",
      code: `// DAX: Department Attrition Rate by Overtime Status
Attrition_Rate_Overtime = 
VAR Total_OT_Staff = 
    CALCULATE(COUNTROWS('Employees'), 'Employees'[OverTime] = "Yes")
VAR Leavers_OT_Staff = 
    CALCULATE(
        COUNTROWS('Employees'), 
        'Employees'[OverTime] = "Yes", 
        'Employees'[Attrition] = "Yes"
    )
RETURN 
    DIVIDE(Leavers_OT_Staff, Total_OT_Staff, 0)`
    },
    metrics: [
      { label: "Records Analyzed", value: "1,470" },
      { label: "Overtime Attrition", value: "30.5%" },
      { label: "Standard Attrition", value: "10.4%" },
      { label: "Retention Impact", value: "~3x Difference" }
    ]
  },
  {
    id: "retail-sales-performance",
    title: "Sales Profitability & Loss-Making Order Detection",
    category: "BI & Dashboards",
    tagline: "Auditing 10K raw transactions to reveal that nearly 19% of orders were sold at an operational loss",
    problem: "Topline revenue growth was celebrated by sales teams, but net margins were declining unexpectedly due to opaque shipping subsidies and excessive regional discounting.",
    approach: "Audited a 10,000-row raw retail dataset in Power BI, resolving multi-source date format inconsistencies and detecting hidden duplicates. Engineered comprehensive margin calculations factoring product COGS, regional shipping surcharges, and discount thresholds.",
    tools: ["Power BI", "DAX", "Data Quality Auditing", "Data Modeling"],
    result: "Revealed that 18.8% (~19%) of all completed orders were sold at a net negative margin. Identified specific product sub-categories where standard discount formulas wiped out gross profit, providing management with enforceable discount guardrails.",
    metricBadge: "19% Orders Unprofitable",
    githubUrl: "https://www.github.com/shrek6201/Syntecxhub_Sales_Performance_Dashboard",
    highlights: [
      "Rectified date format discrepancies and removed hidden multi-entry duplicates across 10,000 rows",
      "Exposed 1,880 loss-making transactions concealed beneath aggregated department revenue totals",
      "Designed an interactive 2-page dashboard with margin heatmaps by territory and product line",
      "Established minimum order profitability criteria adopted by sales leadership"
    ],
    codeSnippet: {
      language: "dax",
      title: "DAX Unprofitable Order Flag Measure",
      code: `// DAX: Loss-Making Order Identification
Unprofitable_Order_Pct = 
VAR Total_Orders = DISTINCTCOUNT('Sales'[Order_ID])
VAR Negative_Profit_Orders = 
    CALCULATE(
        DISTINCTCOUNT('Sales'[Order_ID]),
        FILTER('Sales', [Total_Net_Profit] < 0)
    )
RETURN 
    DIVIDE(Negative_Profit_Orders, Total_Orders, 0)`
    },
    metrics: [
      { label: "Raw Records Audited", value: "10,000" },
      { label: "Loss-Making Orders", value: "18.8% (~19%)" },
      { label: "Dashboard Pages", value: "2 Interactive Views" },
      { label: "Data Quality Fixes", value: "Dates & Duplicates" }
    ]
  },
  {
    id: "irish-economic-tracker",
    title: "Irish Money Signal Tracker (Real-Time Macro Telemetry)",
    category: "Data Pipelines",
    tagline: "Streaming pipeline using Kafka, FinBERT NLP, Snowflake, and Metabase for macroeconomic telemetry",
    problem: "Traditional macroeconomic indicators are released on a monthly or quarterly lag, preventing risk teams from anticipating short-term market sentiment swings.",
    approach: "Engineered an end-to-end streaming data pipeline. Ingested live Irish economic news and central bank statements into Redpanda/Kafka, scored textual polarity with FinBERT, loaded transformed embeddings into Snowflake, and materialized KPI trends in Metabase.",
    tools: ["Kafka / Redpanda", "FinBERT", "Snowflake", "dbt", "Metabase", "Python"],
    result: "Reduced sentiment aggregation latency from days to under 60 seconds. Published a full architectural case study on modern streaming pipelines with dbt and cloud warehouses.",
    metricBadge: "<60s Latency",
    githubUrl: "https://www.github.com/shrek6201/signal-tracker",
    highlights: [
      "Streamed real-time financial headlines through Kafka topics with consumer group rebalancing",
      "Applied domain-adapted FinBERT model for high-accuracy economic sentiment classification",
      "Orchestrated cloud data models via dbt with automated freshness and uniqueness tests",
      "Authored published technical article on scalable streaming architectures"
    ],
    codeSnippet: {
      language: "python",
      title: "Kafka Event Producer & FinBERT Polarity Ingestion",
      code: `from kafka import KafkaProducer
from transformers import pipeline
import json

producer = KafkaProducer(
    bootstrap_servers=['localhost:9092'],
    value_serializer=lambda v: json.dumps(v).encode('utf-8')
)
nlp = pipeline("sentiment-analysis", model="ProsusAI/finbert")

def process_economic_signal(headline: str, timestamp: str):
    res = nlp(headline)[0]
    payload = {
        "text": headline,
        "sentiment": res['label'],
        "confidence": round(res['score'], 4),
        "timestamp": timestamp
    }
    producer.send('irish-market-signals', value=payload)`
    },
    metrics: [
      { label: "Signal Latency", value: "<60 Seconds" },
      { label: "Architecture", value: "Kafka + Snowflake" },
      { label: "NLP Model", value: "FinBERT" },
      { label: "Transformation", value: "dbt Core" }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Data Analyst Intern",
    company: "Syntecxhub",
    location: "Remote",
    period: "Sep '26 - Oct '26",
    type: "Internship",
    description: [
      "Delivered a new hands-on analytics project each week across the complete lifecycle (data cleaning, relational modeling, DAX measure creation, and interactive dashboarding).",
      "Built a public, portfolio-ready GitHub repository of end-to-end BI projects toward a verified Certificate of Completion.",
      "Conducted rigorous data auditing on raw industry datasets, ensuring 100% test coverage for key business reporting metrics."
    ],
    skills: ["Power BI", "DAX", "SQL", "Data Cleaning", "Data Modeling"],
    keyMetric: "Weekly End-to-End Delivery"
  },
  {
    role: "Operations Associate",
    company: "Shuppa",
    location: "Dublin, Ireland",
    period: "Nov '24 - Jun '25",
    type: "Part-Time",
    description: [
      "Tracked critical operational KPIs (inventory turnover, fulfillment velocity, SLA compliance) in WMS data using SQL, Excel, and Power BI.",
      "Audited stock-movement, error logs, and delay data for anomalies and fulfillment gaps, directly improving warehouse dispatch accuracy.",
      "Built and maintained daily and weekly performance dashboards, translating data quality findings into actionable operational recommendations for logistics management in a fast-paced ecommerce environment."
    ],
    skills: ["SQL", "Excel", "Power BI", "WMS Analytics", "Anomaly Auditing"],
    keyMetric: "Direct SLA & Fulfillment Auditing"
  },
  {
    role: "Database Specialist Intern",
    company: "Demos Centre for Research in Humanities",
    location: "India",
    period: "Dec '23 - Jun '24",
    type: "Internship",
    description: [
      "Audited MongoDB and MySQL production datasets for data quality anomalies, profiling slow queries and tracing execution bottlenecks to root cause.",
      "Improved reporting query performance by 30% through targeted schema normalization, composite index creation, and aggregation pipeline tuning.",
      "Built and maintained Power BI and Tableau operational dashboards for 50+ users, keeping key metrics current for day-to-day, data-driven decisions across research departments."
    ],
    skills: ["MySQL", "MongoDB", "Query Optimization", "Power BI", "Tableau"],
    keyMetric: "30% Query Optimization · 50+ Users"
  },
  {
    role: "Software Development Intern",
    company: "Kovid Bio Analytics Pvt. Ltd.",
    location: "Pune, India",
    period: "Apr '23 - Sep '23",
    type: "Internship",
    description: [
      "Built automated data collection, cleaning, and QA validation pipelines in Python to process and analyze 1M+ analytical records.",
      "Surfaced anomalies, outlier entries, and data gaps using statistical z-scores and boundary threshold validation checks.",
      "Delivered comprehensive documented reporting and automated validation summaries with 95% client satisfaction."
    ],
    skills: ["Python", "Pandas", "ETL Pipelines", "Data QA", "Anomaly Detection"],
    keyMetric: "1M+ Records · 95% Client Satisfaction"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "M.Sc. in Computing (Data Analytics)",
    institution: "Dublin City University (DCU)",
    location: "Dublin, Ireland",
    period: "2024 - 2025",
    practicum: "Multimodal Fake News Detection with Explainable AI (SHAP)",
    modules: ["Statistical Data Analysis", "Data Analytics & Mining", "Machine Learning", "Artificial Intelligence"]
  },
  {
    degree: "Master of Computer Applications (M.C.A)",
    institution: "MES Institute of Management & Career Courses (MES I.M.C.C.)",
    location: "Pune, India",
    period: "2022 - 2024",
    details: "Focus on Database Management Systems, Advanced Data Structures, and Software Engineering"
  },
  {
    degree: "Bachelor of Business Administration (Computer Applications)",
    institution: "MES Senior College",
    location: "Pune, India",
    period: "2019 - 2022",
    details: "Foundational business analytics, business management principles, and applied computing"
  }
];

export const PUBLICATIONS_CERTIFICATIONS = [
  {
    type: "Publication",
    title: "How I Built a Real-Time Irish Economic Signal Tracker using Kafka, FinBERT and Metabase",
    issuer: "Technical Case Study / Technical Blog",
    date: "2025",
    description: "Detailed architecture walkthrough covering event-driven ingestion, NLP polarity scoring, Snowflake warehousing, and Metabase visualization."
  },
  {
    type: "Publication",
    title: "Building Scalable Analytics Pipelines with dbt and Snowflake",
    issuer: "Analytics Engineering Guide",
    date: "Jan '25",
    description: "Best practices on data testing, modular models, and CI/CD validation in modern analytics engineering."
  },
  {
    type: "Certification",
    title: "Introduction to Data Analytics",
    issuer: "IBM",
    date: "Verified Credential",
    description: "Core analytics methodologies, data ecosystems, and enterprise reporting fundamentals."
  },
  {
    type: "Certification",
    title: "Google AI Essentials",
    issuer: "Coursera / Google",
    date: "Apr '26",
    description: "Responsible AI implementation, prompt engineering, and human-in-the-loop workflow validation."
  },
  {
    type: "Certification",
    title: "Statistics for Data Science & Business Analytics",
    issuer: "Udemy",
    date: "Comprehensive",
    description: "Probability distributions, hypothesis testing, ANOVA, and multivariate regression modeling."
  }
];

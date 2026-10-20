import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shreyas Karle | Data Analyst & Analytics Engineer',
  description: 'Data Analyst with M.Sc. in Data Analytics from Dublin City University (DCU). Specializing in SQL, Python, dbt, Snowflake, Power BI, and automated ETL pipelines. Turning messy data into reliable decision dashboards.',
  keywords: [
    'Shreyas Karle',
    'Data Analyst',
    'Analytics Engineer',
    'Junior Data Analyst',
    'Associate Data Analyst',
    'Power BI Developer',
    'SQL Expert',
    'Python',
    'dbt',
    'Snowflake',
    'Dublin City University',
    'Big 4 Data Analyst'
  ],
  authors: [{ name: 'Shreyas Karle', url: 'https://linkedin.com/in/shreyaskarle' }],
  creator: 'Shreyas Karle',
  openGraph: {
    title: 'Shreyas Karle | Data Analyst & Analytics Engineer',
    description: 'Portfolio of Shreyas Karle — M.Sc. Data Analytics (DCU). 1M+ records audited, 30% query speedup, 69% revenue concentration discovered.',
    type: 'website',
    locale: 'en_IE',
    siteName: 'Shreyas Karle Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreyas Karle | Data Analyst & Analytics Engineer',
    description: 'M.Sc. Data Analytics (Dublin City University) specializing in SQL, Python, dbt, and Power BI dashboards.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shreyas Karle',
  jobTitle: 'Data Analyst & Analytics Engineer',
  email: 'shreyasrkarle@gmail.com',
  telephone: '+917378395919',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dublin',
    addressCountry: 'Ireland',
  },
  sameAs: [
    'https://linkedin.com/in/shreyaskarle',
    'https://github.com/shrek6201',
  ],
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Dublin City University',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'MES Institute of Management & Career Courses',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'MES Senior College',
    },
  ],
  knowsAbout: [
    'Data Analytics',
    'Analytics Engineering',
    'SQL',
    'Python',
    'Power BI',
    'DAX',
    'dbt',
    'Snowflake',
    'ETL Pipelines',
    'Data Quality Auditing',
    'Anomaly Detection',
    'Tableau',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#090d16] dark:text-slate-100 antialiased selection:bg-blue-600 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

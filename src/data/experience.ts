import { Experience } from '../types'

export const experiences: Experience[] = [
  {
    id: 'white-manna',
    role: 'Software Engineer & Equity Research Intern',
    company: 'White Manna Capital Partners',
    location: 'Oradell, NJ',
    startDate: 'Mar 2026',
    endDate: 'Present',
    bullets: [
      'Built a Python application to automate real-time equity price tracking for 25+ securities, integrating REST API data retrieval with structured data processing and Excel export via openpyxl',
      'Designed modular data pipeline with scheduled API calls, error handling, and structured output to dashboards used by portfolio managers to monitor 1Y/5Y price ranges and flag trading opportunities',
      'Built 3-statement and DCF models across 8+ public companies with bull/base/bear scenarios and produced investment memoranda across healthcare, pharma, and biotech to inform long/short positioning',
    ],
    type: 'Internship',
  },
  {
    id: 'lxl-capital',
    role: 'Investment Banking Analyst Intern',
    company: 'LXL Capital',
    location: 'New York, NY',
    startDate: 'Jul 2025',
    endDate: 'Oct 2025',
    bullets: [
      'Screened and analyzed 500+ energy startups by revenue growth, margins, and capital structure to prioritize advisory targets, strengthening the firm\'s deal origination pipeline and supporting $3M+ in deal flow',
      'Developed EV sector primer analyzing financials of 5 startups and published 8 sector newsletters covering M&A and capital markets trends across EV and healthcare',
    ],
    type: 'Internship',
  },
  {
    id: 'hellotech',
    role: 'Software Engineer Intern',
    company: 'HelloTech',
    location: 'Singapore',
    startDate: 'Jan 2022',
    endDate: 'Feb 2022',
    bullets: [
      'Built a Python Selenium automation tool on Linux/macOS to scrape live USD/SGD exchange rates from a dynamically rendered banking website at 60-second intervals, using headless Chrome with explicit waits and regex parsing',
      'Implemented a secure SMTP email alert system with environment-variable credential handling to notify users when exchange rates exceeded thresholds, reducing manual data collection by 3+ hours per week',
    ],
    type: 'Internship',
  },
  {
    id: 'saf',
    role: 'Lieutenant, Infantry Officer',
    company: 'Singapore Armed Forces',
    location: 'Singapore',
    startDate: 'Mar 2022',
    endDate: 'Jan 2024',
    bullets: [
      'Built a Python tool to automate duty scheduling in Excel, reducing planning time by 10+ hours per month',
      'Led battalion-level events for 300+ soldiers as part of the Military Police Command',
    ],
    type: 'Military',
  },
  {
    id: 'morningside',
    role: 'Case Team Leader',
    company: 'Columbia × Morningside Investments Stock Pitch',
    location: 'New York, NY',
    startDate: 'Oct 2024',
    endDate: 'Nov 2024',
    bullets: [
      'Won 1st place (Gold Medal) pitching S&P Global with investment theses on recurring revenue, pricing power, and FCF conversion',
      'Presented to judges from Discerene Group and MayTech Global',
    ],
    type: 'Leadership',
  },
]

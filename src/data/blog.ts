import type { BlogPost } from '../types'

export const blogPosts: BlogPost[] = [
  {
    id: 'how-i-built-this-site',
    title: 'How I Built This Site',
    date: 'Jun 2026',
    description:
      'Walking through the stack — Vite, React, TypeScript, Tailwind — and what I learned building my first real frontend project from scratch.',
    content: [
      'I came into this project knowing basic JavaScript, HTML, and CSS, but no frameworks. I wanted something on my resume that I could actually explain in an interview, not just a template I cloned.',
      'The stack is Vite, React, TypeScript, and Tailwind. React let me break the page into small reusable components — a project card, an experience item — and feed them data instead of writing the same markup over and over. TypeScript caught my mistakes before they ever hit the browser.',
      'The biggest lesson was that types are erased at runtime. I spent an hour on a white screen before I learned that interfaces need to be imported with "import type", or the bundler crashes looking for something that does not exist.',
    ],
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 'swe-recruiting-prep',
    title: 'My SWE Recruiting Prep Plan',
    date: 'Jun 2026',
    description:
      'How I structured technical interview prep around DSA, projects, and behavioral questions while balancing coursework.',
    content: [
      'My plan splits into three buckets: data structures and algorithms, projects I can speak to deeply, and behavioral stories.',
      'For DSA I work through problems by pattern rather than count — two pointers, sliding window, graphs — so I recognize the shape of a problem instead of memorizing solutions.',
      'For behavioral, my military background gives me real stories about leadership and pressure, which I map to the classic prompts ahead of time.',
    ],
    tags: ['Recruiting', 'DSA', 'Career'],
  },
  {
    id: 'python-finance-automation',
    title: 'Automating Finance Work with Python',
    date: 'May 2026',
    description:
      'What I learned building equity tracking tools at a hedge fund — REST APIs, openpyxl, and scheduled jobs.',
    content: [
      'At the hedge fund I noticed analysts manually pulling prices into spreadsheets every morning. I built a Python tool to do it automatically.',
      'It hits a REST API for 25+ securities, handles errors and retries, and writes structured output to Excel with openpyxl so the format matches what the portfolio managers already use.',
      'The takeaway: the highest-value automation is rarely the most technically complex — it is whatever quietly removes hours of repetitive work each week.',
    ],
    tags: ['Python', 'Finance', 'Automation'],
  },
]

import { BlogPost } from '../types'

export const blogPosts: BlogPost[] = [
  {
    id: 'how-i-built-this-site',
    title: 'How I Built This Site',
    date: 'Jun 2026',
    description:
      'Walking through the stack — Vite, React, TypeScript, Tailwind — and what I learned building my first real frontend project from scratch.',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 'swe-recruiting-prep',
    title: 'My SWE Recruiting Prep Plan',
    date: 'Jun 2026',
    description:
      'How I structured my technical interview prep around DSA, systems, and behavioral questions while balancing coursework and internships.',
    tags: ['Recruiting', 'DSA', 'Career'],
  },
  {
    id: 'python-finance-automation',
    title: 'Automating Finance Work with Python',
    date: 'May 2026',
    description:
      'What I learned building equity tracking tools at a hedge fund — using REST APIs, openpyxl, and scheduled jobs to cut manual work.',
    tags: ['Python', 'Finance', 'Automation'],
  },
]

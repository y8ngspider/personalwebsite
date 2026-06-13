import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'f1-app',
    title: 'F1 Driver Profiles',
    description:
      'Full-stack application in Flask serving as a database of F1 driver profiles, career statistics, and team histories.',
    techStack: ['Python', 'Flask', 'Jinja2', 'jQuery', 'AJAX', 'Bootstrap'],
    category: 'SWE',
    githubUrl: 'https://github.com/y8ngspider/f1-driver-profiles',
    featured: true,
  },
  {
    id: 'equity-tracker',
    title: 'Equity Price Tracker',
    description:
      'Python script to automate real-time equity price tracking for 25+ securities at a hedge fund.',
    techStack: ['Python', 'REST APIs', 'openpyxl'],
    category: 'Finance',
    featured: true,
  },
  {
    id: 'coloralong',
    title: 'ColorAlong',
    description:
      'Interactive web app for learning color theory, built with a 4-person team. Includes lessons on the color wheel and harmonies, plus quizzes and color-matching exercises.',
    techStack: ['Flask', 'Python', 'JavaScript', 'Jinja2', 'HTML/CSS'],
    category: 'SWE',
    githubUrl: 'https://github.com/syoon2021/ColorAlong',
    featured: true,
  },
  {
    id: 'personal-site',
    title: 'Personal Website',
    description:
      'This site. Built with React, TypeScript, and Tailwind CSS. Structured around reusable components with all content stored in typed data files.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    category: 'SWE',
    githubUrl: 'https://github.com/y8ngspider/personalwebsite',
    featured: false,
  },
]

import { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'f1-app',
    title: 'F1 Driver Profile Web App',
    description:
      'Full-stack CRUD application in Flask with 6 routes serving dynamically rendered pages for a database of F1 driver profiles, career statistics, and team histories. Includes server-side search with regex matching, async add/edit forms via jQuery AJAX, and client- and server-side validation.',
    techStack: ['Python', 'Flask', 'Jinja2', 'jQuery', 'AJAX', 'Bootstrap'],
    category: 'SWE',
    githubUrl: 'https://github.com/y8ngspider/f1-app', // TODO: replace with your actual repo name
    featured: true,
  },
  {
    id: 'tcp-chat',
    title: 'TCP Chat System',
    description:
      'Client-server chat application in C using POSIX sockets to handle real-time network connections, with server-side connection handling, message I/O, graceful disconnects, and custom message parsing.',
    techStack: ['C', 'POSIX Sockets', 'Linux'],
    category: 'SWE',
    featured: true,
  },
  {
    id: 'poker-engine',
    title: 'Poker Game Engine',
    description:
      'Poker engine in Java using object-oriented design with Card, Deck, Player, and Game classes. Implements shuffling, dealing, betting, bankroll management, and custom sorting and comparison algorithms to score hands.',
    techStack: ['Java', 'OOP'],
    category: 'SWE',
    featured: false,
  },
  {
    id: 'equity-tracker',
    title: 'Equity Price Tracker',
    description:
      'Python application to automate real-time equity price tracking for 25+ securities at a hedge fund. Integrates REST API data retrieval with scheduled calls, error handling, and structured Excel export via openpyxl for portfolio manager dashboards.',
    techStack: ['Python', 'REST APIs', 'openpyxl'],
    category: 'Finance',
    featured: true,
  },
  {
    id: 'personal-site',
    title: 'Personal Website',
    description:
      'This site. Built with React, TypeScript, and Tailwind CSS. Structured around reusable components with all content stored in typed data files — no CMS, no backend.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    category: 'SWE',
    githubUrl: 'https://github.com/y8ngspider/personalwebsite',
    featured: false,
  },
]

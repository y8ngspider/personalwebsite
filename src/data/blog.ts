import type { BlogPost } from '../types'

export const blogPosts: BlogPost[] = [
  {
    id: 'how-i-built-this-site',
    title: 'How I Built This Site',
    date: 'Jun 2026',
    description:
      'What I learned building my personal website.',
    content: [
      'I came into this project knowing basic JavaScript, HTML, and CSS, but no frameworks. I wanted to build something I could customize and so I chose this personal website.',
      'The stack is Vite, React, TypeScript, and Tailwind. React let me break the page into small reusable components and feed them data instead of writing the same markup over and over. TypeScript caught my mistakes before they ever hit the browser.',
      'The biggest lesson was that types are erased at runtime. I spent an hour on a white screen before I learned that interfaces need to be imported with "import type", or the bundler crashes looking for something that does not exist.',
    ],
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  
  {
    id: 'python-finance-automation',
    title: 'Automating Finance Work with Python',
    date: 'May 2026',
    description:
      'What I learned building equity tracking tools at a hedge fund — REST APIs, openpyxl, and scheduled jobs.',
    content: [
      'At the hedge fund I noticed analysts manually inputting earnings dates into spreadsheets every morning. I built a JavaScript tool to do it automatically.',
      'With Google\'s AppScript function, I wrote a JS script that used a free API - AlphaVantage to pull and update upcoming earnings dates, forward P/E and PEG amongst other data ',
      'automating the work such that everyone could see a dashboard that was updated every morning on Google Sheets.'
    ],
    tags: ['JavaScript', 'Finance', 'Automation'],
  },
]

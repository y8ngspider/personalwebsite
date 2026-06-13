import { Link } from 'react-router-dom'
import ethanPhoto from '../../assets/ethan.jpg'

export default function Hero() {
  return (
    <section id="hero" className="border border-line bg-surface rounded-xl p-8 sm:p-10">
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-10">
        <div>
          <p className="text-xs text-clay font-medium mb-4 tracking-[0.2em] uppercase">
            CS & Financial Economics @ Columbia
          </p>
          <h1 className="text-6xl font-semibold text-ink tracking-tight leading-none mb-5">
            Ethan Yang
          </h1>
          <div className="w-10 h-px bg-clay/60 mb-6" />

          <div className="flex flex-wrap items-center gap-2.5 text-sm">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-md bg-clay text-cream font-medium hover:bg-ink transition-colors"
            >
              Resume ↗
            </a>

            <a
              href="https://github.com/y8ngspider"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-md border border-line text-ink hover:border-clay hover:text-clay transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.6 18 4.9 18 4.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/ethanyangwj"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-md border border-line text-ink hover:border-clay hover:text-clay transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33 0-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>

            <a
              href="https://leetcode.com/u/y8ng/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              title="LeetCode"
              className="w-10 h-10 flex items-center justify-center rounded-md border border-line text-ink hover:border-clay hover:text-clay transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="m9 8-4 4 4 4M15 8l4 4-4 4M13.5 5l-3 14" />
              </svg>
            </a>

            <a
              href="mailto:ethan.yang.wei.jie@gmail.com"
              aria-label="Email"
              title="Email"
              className="w-10 h-10 flex items-center justify-center rounded-md border border-line text-ink hover:border-clay hover:text-clay transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>
        <div className="shrink-0">
          <img
            src={ethanPhoto}
            alt="Ethan Yang"
            className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover object-top ring-1 ring-line"
          />
        </div>
      </div>
      <div
        id="about"
        className="max-w-2xl space-y-4 text-muted leading-relaxed mt-10 scroll-mt-24"
      >
        <p>
          Hi, I'm Ethan a third-year at Columbia studying Computer Science and Financial
          Economics, originally from Singapore.
        </p>
        <p>
          I've worked across finance, tech, and military leadership. I built a Python web
          scraper at a software company, interned at a boutique investment bank, and most
          recently did equity research at a hedge fund, where I build financial models, write
          investment memos, and automate parts of the workflow with Python and JavaScript.
          Before college, I completed two years of national service in the Singapore Armed
          Forces as a lieutenant.
        </p>
        <p>
          Outside of work, I love watching Formula One, playing tennis, and I recently picked up{' '}
          <Link to="/interests/chess" className="text-clay underline hover:text-ink transition-colors">
            chess.
          </Link>{' '}
          (always down for a game!)
        </p>
      </div>
    </section>
  )
}

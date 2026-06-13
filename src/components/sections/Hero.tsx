import { Link } from 'react-router-dom'
import ethanPhoto from '../../assets/ethan.jpg'

export default function Hero() {
  return (
    <section id="hero" className="border border-stone-200 bg-white/50 rounded-xl p-8 sm:p-10">
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-10">
        <div>
          <p className="text-xs text-clay font-medium mb-4 tracking-[0.2em] uppercase">
            CS & Financial Economics @ Columbia
          </p>
          <h1 className="text-6xl font-semibold text-ink tracking-tight leading-none mb-5">
            Ethan Yang
          </h1>
          <div className="w-10 h-px bg-clay/60 mb-6" />

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-stone-500">
            <a
              href="https://github.com/y8ngspider"
              target="_blank"
              rel="noreferrer"
              className="hover:text-clay transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ethanyangwj"
              target="_blank"
              rel="noreferrer"
              className="hover:text-clay transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/y8ng/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-clay transition-colors"
            >
              LeetCode
            </a>
            <a
              href="mailto:ethan.yang.wei.jie@gmail.com"
              className="hover:text-clay transition-colors"
            >
              Email
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-ink font-medium underline decoration-clay/40 underline-offset-4 hover:decoration-clay transition-colors"
            >
              Résumé ↗
            </a>
          </div>
        </div>
        <div className="shrink-0">
          <img
            src={ethanPhoto}
            alt="Ethan Yang"
            className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover object-top ring-1 ring-stone-200"
          />
        </div>
      </div>
      <div
        id="about"
        className="max-w-2xl space-y-4 text-stone-600 leading-relaxed mt-10 scroll-mt-24"
      >
        <p>
          Hi, I'm Ethan. I'm a third-year stduent at Columbia studying Computer Science and Financial
          Economics, originally from Singapore. 
        </p>
        <p>
          I bring a broad range of experiences with my experiences in Finance, Tech and Military Leadership. I built a Python webscraper at a software company, interned at a boutique investment bank, and
          most recently did equity research at a hedge fund where I build financial models,
          write investment memos, and automated parts of the workflow with Python/JS. Before college, I also completed two years of mandatory service in the Singapore Armed Forces 
          as a Lieutenant. 
        </p>
        <p>
          Outside of work, I love watching Formula One, playing tennis, and I recently picked up{' '}
          <Link to="/interests/chess" className="text-clay underline hover:text-ink transition-colors">
            chess
          </Link>{' '}
          (always down for a game!)
        </p>
      </div>
    </section>
  )
}

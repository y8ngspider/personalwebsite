import { Link } from 'react-router-dom'
import ethanPhoto from '../../assets/ethan.jpg'

export default function Hero() {
  return (
    <section id="hero" className="border border-stone-200 bg-white/50 rounded-xl p-8 sm:p-10">
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-10">
        <div>
          <p className="text-sm text-clay font-medium mb-3 tracking-wide uppercase">
            CS & Financial Economics @ Columbia
          </p>
          <h1 className="text-5xl font-semibold text-ink tracking-tight mb-6">
            Ethan Yang
          </h1>
          
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="https://github.com/y8ngspider"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-ink text-cream rounded-md hover:bg-clay transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ethanyangwj"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border border-stone-300 text-stone-700 rounded-md hover:border-clay hover:text-clay transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/y8ng/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border border-stone-300 text-stone-700 rounded-md hover:border-clay hover:text-clay transition-colors"
            >
              LeetCode
            </a>
            <a
              href="mailto:ethan.yang.wei.jie@gmail.com"
              className="px-4 py-2 border border-stone-300 text-stone-700 rounded-md hover:border-clay hover:text-clay transition-colors"
            >
              Email
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border border-stone-300 text-stone-700 rounded-md hover:border-clay hover:text-clay transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="shrink-0">
          <img
            src={ethanPhoto}
            alt="Ethan Yang"
            className="w-40 h-40 sm:w-60 sm:h-60 rounded-full object-cover object-top"
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

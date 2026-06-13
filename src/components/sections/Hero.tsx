import ethanPhoto from '../../assets/ethan.jpg'

export default function Hero() {
  return (
    <section id="hero" className="py-24 border-b border-gray-100">
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-10">
        <div>
          <p className="text-sm text-gray-400 mb-3 tracking-wide uppercase">
            CS + Financial Economics @ Columbia
          </p>
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Ethan Yang
          </h1>
          
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="https://github.com/y8ngspider"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ethanyangwj"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:border-gray-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/y8ng/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:border-gray-500 transition-colors"
            >
              LeetCode
            </a>
            <a
              href="mailto:ethan.yang.wei.jie@gmail.com"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:border-gray-500 transition-colors"
            >
              Email
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:border-gray-500 transition-colors"
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
        className="max-w-2xl space-y-4 text-gray-600 leading-relaxed mt-16 scroll-mt-24"
      >
        <p>
          Hi, I'm Ethan. I'm a third-year at Columbia studying Computer Science and Financial
          Economics, originally from Singapore. Before college, I served two years in the Singapore Armed Forces 
          as a lieutenant, leading a platoon of around 40 soldiers. 
        </p>
        <p>
          I've worked across both technical and financial roles. I built Python
          automation tools at a software company, interned at a boutique investment bank, and
          most recently doing equity research at a hedge fund where I build financial models,
          write investment memos, and automate parts of the workflow with Python/JS.
        </p>
        <p>
          I'm drawn to roles where technical ability and business judgment overlap. Outside of
          work, I love watching Formula One, playing tennis, and I recently picked up chess (always down for a game!)
        </p>
      </div>
    </section>
  )
}

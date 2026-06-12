export default function Hero() {
  return (
    <section id="hero" className="py-24 border-b border-gray-100">
      <p className="text-sm text-gray-400 mb-3 tracking-wide uppercase">
        CS + Financial Economics @ Columbia
      </p>
      <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-6">
        Ethan Yang
      </h1>
      <p className="text-lg text-gray-500 max-w-xl mb-10">
        Software engineer and finance researcher. I like building tools that sit at the
        intersection of code and capital.
      </p>
      <div className="flex flex-wrap gap-4 text-sm">
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
          href="mailto:ethan.yang@columbia.edu"
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
    </section>
  )
}

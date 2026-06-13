export default function Footer() {
  return (
    <footer id="contact" className="border-t border-stone-200 mt-24">
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-stone-400">
          © {new Date().getFullYear()} Ethan Yang. Built with React + TypeScript.
        </p>
        <div className="flex gap-5 text-sm text-stone-500">
          <a href="mailto:ethan.yang.wei.jie@gmail.com" className="hover:text-clay transition-colors">Email</a>
          <a href="https://github.com/y8ngspider" target="_blank" rel="noreferrer" className="hover:text-clay transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/ethanyangwj" target="_blank" rel="noreferrer" className="hover:text-clay transition-colors">LinkedIn</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hover:text-clay transition-colors">Resume</a>
        </div>
      </div>
    </footer>
  )
}

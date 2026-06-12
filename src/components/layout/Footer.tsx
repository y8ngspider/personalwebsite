export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-100 mt-24">
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Ethan. Built with React + TypeScript.
        </p>
        <div className="flex gap-5 text-sm text-gray-400">
          <a href="mailto:you@email.com" className="hover:text-gray-900 transition-colors">Email</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">Resume</a>
        </div>
      </div>
    </footer>
  )
}

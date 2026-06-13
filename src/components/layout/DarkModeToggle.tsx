import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  // initial value comes from the class set by the no-flash script in index.html
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle dark mode"
      className="text-lg text-muted hover:text-clay transition-colors px-2 py-1"
    >
      {isDark ? '☀' : '☾'}
    </button>
  )
}

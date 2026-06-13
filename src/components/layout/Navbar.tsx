import { useState } from 'react'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

const pageLinks = [{ label: 'Blog', to: '/blog' }]

const interests = [{ label: 'Chess', to: '/interests/chess' }]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-sm border-b border-line">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="/" className="font-serif text-lg font-semibold text-ink tracking-tight">
          Ethan
        </a>

        <div className="flex items-center gap-2">
        <ul className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={`/${link.href}`}
                className="text-sm text-muted px-3 py-1.5 rounded-md hover:bg-ink hover:text-cream transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}

          {pageLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="text-sm text-muted px-3 py-1.5 rounded-md hover:bg-ink hover:text-cream transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li className="relative group">
            <button className="text-sm text-muted px-3 py-1.5 rounded-md hover:bg-ink hover:text-cream transition-colors">
              Interests
            </button>
            {/* pt-2 bridges the gap so the menu stays open while moving the cursor into it */}
            <div className="absolute right-0 top-full pt-2 hidden group-hover:block">
              <ul className="bg-cream border border-line rounded-md shadow-sm py-1 min-w-32">
                {interests.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="block px-4 py-2 text-sm text-muted hover:bg-chip hover:text-ink transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        <DarkModeToggle />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-xl text-muted"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
        </div>
      </div>

      {isOpen && (
        <ul className="sm:hidden border-t border-line px-6 py-3 space-y-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={`/${link.href}`}
                onClick={() => setIsOpen(false)}
                className="block text-sm text-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          {pageLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block text-sm text-muted hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          {interests.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="block text-sm text-muted hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

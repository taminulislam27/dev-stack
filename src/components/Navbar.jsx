import { useState } from 'react'

const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

function BrandMark() {
  return (
    <a href="#home" className="flex items-center gap-2 focus-ring rounded-lg">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-sm font-bold text-white">
        DS
      </span>
      <span className="text-lg font-extrabold tracking-tight text-ink-950">
        Dev <span className="text-brand-gradient">Stack</span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur">
      {/* Desktop / tablet bar */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile: hamburger on the left */}
        <button
          type="button"
          className="focus-ring -ml-2 flex h-10 w-10 items-center justify-center rounded-lg text-ink-950 md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <div className="hidden md:block">
          <BrandMark />
        </div>
        {/* Mobile: brand centered */}
        <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
          <BrandMark />
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`focus-ring rounded text-sm font-medium transition-colors ${
                i === 0 ? 'text-pink-600' : 'text-gray-600 hover:text-ink-950'
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#signin"
            className="focus-ring hidden rounded-lg px-3 py-2 text-sm font-medium text-ink-950 sm:inline-block"
          >
            Sign In
          </a>
          <a
            href="#signup"
            className="focus-ring rounded-full bg-brand-gradient-btn px-4 py-2 text-sm font-semibold shadow-sm shadow-pink-200 transition-transform hover:scale-[1.03]"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={`focus-ring block rounded-lg px-2 py-2 text-sm font-medium ${
                    i === 0 ? 'text-pink-600' : 'text-gray-700'
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

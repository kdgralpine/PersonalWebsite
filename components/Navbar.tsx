'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const links = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/fish-tanks', label: 'Aquariums' },
  { href: '/resume', label: 'Resume' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b" style={{ background: 'var(--background)', borderColor: 'var(--border)' }}>
      <nav className="max-w-[1160px] mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="font-mono text-lg font-bold tracking-tight hover:opacity-70 transition-opacity">
          SP<span style={{ color: 'var(--accent)' }}>.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? 'page' : undefined}
              className="text-sm font-medium transition-colors"
              style={{ color: pathname === href ? 'var(--accent)' : 'var(--muted)' }}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="p-2 rounded-md transition-colors hover:opacity-70"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-2">
          <button onClick={toggle} className="p-2" aria-label="Toggle dark mode">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setMenuOpen(o => !o)} className="p-2" aria-label="Toggle menu" aria-expanded={menuOpen} aria-controls="mobile-navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-navigation" className="sm:hidden border-t px-4 py-3 flex flex-col gap-3" style={{ borderColor: 'var(--border)', background: 'var(--background)' }}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium py-1 transition-colors"
              style={{ color: pathname === href ? 'var(--accent)' : 'var(--foreground)' }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

'use client'
import { createContext, useContext, useEffect, useSyncExternalStore } from 'react'
type Theme = 'light' | 'dark'
const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({ theme: 'light', toggle: () => {} })
export function useTheme() { return useContext(ThemeContext) }
function getTheme(): Theme {
  try { const saved = localStorage.getItem('theme'); if (saved === 'light' || saved === 'dark') return saved } catch {}
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
function subscribe(callback: () => void) {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  window.addEventListener('storage', callback)
  window.addEventListener('portfolio-theme', callback)
  media.addEventListener('change', callback)
  return () => { window.removeEventListener('storage', callback); window.removeEventListener('portfolio-theme', callback); media.removeEventListener('change', callback) }
}
let temporaryTheme: Theme | undefined
function snapshot() { return temporaryTheme ?? getTheme() }
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, snapshot, () => 'light' as Theme)
  useEffect(() => { document.documentElement.classList.toggle('dark', theme === 'dark') }, [theme])
  function toggle() {
    const next = theme === 'light' ? 'dark' : 'light'
    try { localStorage.setItem('theme', next); temporaryTheme = undefined } catch { temporaryTheme = next }
    window.dispatchEvent(new Event('portfolio-theme'))
  }
  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}

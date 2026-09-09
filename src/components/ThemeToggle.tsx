import { useEffect, useState } from 'react'

function getInitialTheme(): 'light' | 'dark' {
  const stored = localStorage.getItem('theme')
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      type="button"
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-rose-500 hover:text-rose-500 ${className}`}
    >
      <span
        aria-hidden="true"
        className="h-3.5 w-3.5 rounded-full border border-current"
        style={{
          backgroundImage:
            theme === 'dark'
              ? 'linear-gradient(90deg, currentColor 50%, transparent 50%)'
              : 'linear-gradient(90deg, transparent 50%, currentColor 50%)',
        }}
      />
    </button>
  )
}

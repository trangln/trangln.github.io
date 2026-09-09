import { useEffect, useState } from 'react'
import { navLinks } from '../data/content'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  const handleLinkClick = () => setOpen(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open ? 'bg-paper/90 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 sm:px-8 lg:px-10">
          <a
            href="#top"
            className="font-display text-2xl tracking-wide text-ink sm:text-[1.7rem]"
            onClick={handleLinkClick}
          >
            Trang <span className="italic text-rose-500">Ngoc Le</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-[13px] font-medium uppercase tracking-widest2 text-ink/70 transition-colors hover:text-rose-500"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="whitespace-nowrap rounded-full border border-ink/20 px-5 py-2 text-[13px] font-medium uppercase tracking-widest text-ink transition-colors hover:border-rose-500 hover:text-rose-500"
            >
              Get in touch
            </a>
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 flex h-10 w-10 items-center justify-center"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="flex h-4 w-6 flex-col justify-between">
                <span
                  className={`block h-px w-full bg-ink transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
                />
                <span
                  className={`block h-px w-full bg-ink transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}
                />
                <span
                  className={`block h-px w-full bg-ink transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Rendered as a sibling (not a header child) so the header's conditional
          backdrop-blur never becomes this panel's fixed-position containing block. */}
      <div
        className={`lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'} fixed inset-0 top-[72px] z-40 bg-paper transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pt-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="border-b border-line py-4 font-display text-2xl text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-6 inline-block w-fit rounded-full bg-ink px-6 py-3 text-[13px] font-medium uppercase tracking-widest text-paper"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </>
  )
}

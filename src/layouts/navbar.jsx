import React, { useEffect, useState } from 'react'
import { useTheme } from '../context'
import { Link } from 'react-router-dom'
import Constants from '../constant'

const navItems = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Contact', href: '/#contact' },
]

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/70 dark:bg-black/40 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 md:h-24 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={Constants.Images.Logo} alt="logo" className="h-12 w-12 md:h-14 md:w-14" />
          </Link>

          <div className="hidden md:flex items-center gap-12">
            {navItems.map(item => (
              <a key={item.label} href={item.href} className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                {item.label}
              </a>
            ))}

            <button 
              onClick={toggleTheme} 
              aria-label="Toggle theme" 
              className="rounded-full border border-red-300/40 dark:border-red-400/40 text-red-600 dark:text-red-300 p-3 hover:bg-red-50/50 dark:hover:bg-red-900/20 transition-colors"
            >
              {theme === 'dark' ? (
                // Sun icon for light mode
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={toggleTheme} 
              aria-label="Toggle theme" 
              className="rounded-full border border-red-300/40 dark:border-red-400/40 text-red-600 dark:text-red-300 p-2.5 hover:bg-red-50/50 dark:hover:bg-red-900/20 transition-colors"
            >
              {theme === 'dark' ? (
                // Sun icon for light mode
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
            <button onClick={() => setIsOpen(v => !v)} aria-label="Toggle menu" className="p-2 rounded-md text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900/5 dark:hover:bg-white/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={`md:hidden origin-top transition-[transform,opacity] duration-200 ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'} bg-white/90 dark:bg-black/70 backdrop-blur-md border-t border-white/10`}> 
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-4">
          {navItems.map(item => (
            <a key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="text-base font-medium text-neutral-800 dark:text-neutral-100 hover:text-red-500 dark:hover:text-red-400">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar
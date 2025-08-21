import React, { useEffect, useState } from 'react'
import { useTheme } from '../context'
import { Link } from 'react-router-dom'
import Constants from '../constant'

const navItems = [
  { label: 'About', href: '/#about', id: 'about' },
  { label: 'Skills', href: '/#skills', id: 'skills' },
  { label: 'Portfolio', href: '/#portfolio', id: 'portfolio' },
  { label: 'Contact', href: '/#contact', id: 'contact' },
]

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      
      const sections = navItems.map(item => item.id)
      const scrollPosition = window.scrollY + 100
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }
    
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/70 dark:bg-black/40 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 md:h-24 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 ">
            <img src={theme === "dark" ? Constants.Images.Logo : Constants.Images.Light} alt="logo" className={`transition-all duration-300 ${scrolled ? 'h-14 w-14 md:h-16 md:w-16' : 'h-16 w-16 md:h-20 md:w-20'}`} />
          </Link>



          <div className="hidden md:flex items-center gap-12">
            {navItems.map(item => (
              <div key={item.label} className="relative">
                <a 
                  href={item.href} 
                  className={`text-lg md:text-xl font-semibold transition-colors ${
                    activeSection === item.id 
                      ? 'text-red-500 dark:text-red-400' 
                      : 'text-neutral-800 dark:text-neutral-100 hover:text-red-500 dark:hover:text-red-400'
                  }`}
                >
                  {item.label}
                </a>
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500 dark:bg-red-400"></div>
                )}
              </div>
            ))}

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full border border-red-300/40 dark:border-red-400/40 text-red-600 dark:text-red-300 p-3 hover:bg-red-50/50 dark:hover:bg-red-900/20 transition-colors"
            >
              {theme === 'dark' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>


            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900/5 dark:hover:bg-white/10 transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        <div className={`absolute top-0 right-0 w-80 h-full bg-white dark:bg-black shadow-xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-800">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Menu</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 p-6">
              <ul className="space-y-4">
                {navItems.map(item => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={handleNavClick}
                      className="block text-lg font-medium text-neutral-800 dark:text-neutral-100 hover:text-red-500 dark:hover:text-red-400 py-3 px-4 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>


          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
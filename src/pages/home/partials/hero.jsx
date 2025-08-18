import React from 'react';
import { useTheme } from '../../../context'

const socialLinks = [
    { label: 'LinkedIn', href: '#', icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.87 1 4.98 2.12 4.98 3.5ZM0 8H5V24H0V8ZM8 8H12.6V10.2H12.66C13.3 9.02 14.86 7.8 17.09 7.8C21.87 7.8 22 10.96 22 15.02V24H17V15.96C17 13.98 16.96 11.46 14.36 11.46C11.72 11.46 11.34 13.62 11.34 15.82V24H6.34V8H8Z" fill="currentColor"/></svg>
    ) },
    { label: 'GitHub', href: '#', icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.58 2 12.26C2 16.56 4.87 20.16 8.84 21.5C9.34 21.6 9.52 21.28 9.52 21.01C9.52 20.77 9.51 20.07 9.51 19.22C6.73 19.86 6.14 17.9 6.14 17.9C5.68 16.74 5.03 16.43 5.03 16.43C4.12 15.82 5.1 15.84 5.1 15.84C6.1 15.91 6.64 16.97 6.64 16.97C7.54 18.59 9.1 18.12 9.7 17.85C9.8 17.19 10.07 16.75 10.36 16.5C8.13 16.24 5.78 15.29 5.78 11.43C5.78 10.32 6.16 9.41 6.78 8.69C6.68 8.43 6.34 7.23 6.88 5.63C6.88 5.63 7.73 5.35 9.5 6.6C10.31 6.37 11.18 6.26 12.05 6.26C12.92 6.26 13.79 6.37 14.6 6.6C16.37 5.35 17.22 5.63 17.22 5.63C17.76 7.23 17.42 8.43 17.32 8.69C17.94 9.41 18.31 10.32 18.31 11.43C18.31 15.3 15.95 16.23 13.71 16.49C14.08 16.8 14.41 17.43 14.41 18.37C14.41 19.72 14.4 20.7 14.4 21.01C14.4 21.28 14.58 21.61 15.09 21.5C19.05 20.16 21.92 16.56 21.92 12.26C22 6.58 17.52 2 12 2Z" fill="currentColor"/></svg>
    ) },
    { label: 'Instagram', href: '#', icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 2C4.24 2 2 4.24 2 7V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2H7ZM12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM18 6.5C18.55 6.5 19 6.95 19 7.5C19 8.05 18.55 8.5 18 8.5C17.45 8.5 17 8.05 17 7.5C17 6.95 17.45 6.5 18 6.5Z" fill="currentColor"/></svg>
    ) },
]

const HeroSection = () => {
    const { theme } = useTheme()

    return (
        <section id="home" className="relative isolate pt-36 md:pt-44 lg:pt-52 bg-white dark:bg-black">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-16 items-center">
                    <div className="relative mx-auto w-72 h-72 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem]">
                        <div className="absolute inset-0 rounded-full bg-red-600/90 "/>
                        <img src="https://images.unsplash.com/photo-1545996124-0501ebae84d5?q=80&w=1200&auto=format&fit=crop" alt="portrait" className="relative z-10 h-full w-full object-cover rounded-full mix-blend-multiply" />
                        <div className="absolute -inset-3 rounded-full bg-red-500/20 blur-2xl"/>
                    </div>

                    <div className="text-left">
                        <p className="text-2xl md:text-3xl font-semibold text-neutral-700 dark:text-neutral-300">Hi, I'm <span className="text-neutral-900 dark:text-neutral-100 font-extrabold" style={{fontFamily:'var(--font-display)'}}>Youssef Moutayamine</span></p>
                        <h1 className="mt-4 font-black tracking-tight text-neutral-900 dark:text-neutral-100" style={{fontFamily:'var(--font-display)'}}>
                            <span className="block text-5xl md:text-7xl lg:text-8xl leading-[1.05]">Fullstack Web <span className="text-red-500">Developer</span></span>
                        </h1>
                        <div className="relative inline-flex mt-2">
                            <span className="w-0.5 md:w-1 bg-red-500 animate-caret"/>
                        </div>

                        <p className="mt-6 max-w-2xl text-base md:text-lg lg:text-xl leading-7 text-neutral-600 dark:text-neutral-300">I build fast, accessible web apps end‑to‑end — from polished frontends to robust backends.</p>

                        <div className="mt-6 flex items-center gap-3">
                            {socialLinks.map(s => (
                                <a key={s.label} href={s.href} aria-label={s.label} className="group inline-flex items-center justify-center h-10 w-10 rounded-full border border-red-400/50 text-red-500 hover:bg-red-500/10 transition-colors">
                                    {s.icon}
                                </a>
                            ))}
                        </div>

                        <div className="mt-8">
                            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-red-400/60 px-6 py-3 text-sm font-medium text-red-600 dark:text-red-300 hover:bg-red-500/10 transition-colors">Hire me</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative mt-16 md:mt-20 lg:mt-24 flex flex-col items-center" onClick={() => {
                const next = document.querySelector('#about');
                if (next) next.scrollIntoView({ behavior: 'smooth' });
            }} style={{cursor:'pointer'}}>
                <div className="mouse-shell theme-red">
                    <span className="mouse-wheel"/>
                </div>
                <span className="mt-2 text-xs tracking-[0.35em] text-neutral-400">SCROLL</span>
            </div>
        </section>
    );
};

export default HeroSection;
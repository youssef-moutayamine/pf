import React from 'react';
import { useTheme } from '../../../context'

const socialLinks = [
    {
        label: 'LinkedIn', href: 'https://www.linkedin.com/in/youssef-moutayamine-25594b368', icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.87 1 4.98 2.12 4.98 3.5ZM0 8H5V24H0V8ZM8 8H12.6V10.2H12.66C13.3 9.02 14.86 7.8 17.09 7.8C21.87 7.8 22 10.96 22 15.02V24H17V15.96C17 13.98 16.96 11.46 14.36 11.46C11.72 11.46 11.34 13.62 11.34 15.82V24H6.34V8H8Z" fill="currentColor" /></svg>
        )
    },
    {
        label: 'GitHub', href: 'https://github.com/youssef-moutayamine', icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.58 2 12.26C2 16.56 4.87 20.16 8.84 21.5C9.34 21.6 9.52 21.28 9.52 21.01C9.52 20.77 9.51 20.07 9.51 19.22C6.73 19.86 6.14 17.9 6.14 17.9C5.68 16.74 5.03 16.43 5.03 16.43C4.12 15.82 5.1 15.84 5.1 15.84C6.1 15.91 6.64 16.97 6.64 16.97C7.54 18.59 9.1 18.12 9.7 17.85C9.8 17.19 10.07 16.75 10.36 16.5C8.13 16.24 5.78 15.29 5.78 11.43C5.78 10.32 6.16 9.41 6.78 8.69C6.68 8.43 6.34 7.23 6.88 5.63C6.88 5.63 7.73 5.35 9.5 6.6C10.31 6.37 11.18 6.26 12.05 6.26C12.92 6.26 13.79 6.37 14.6 6.6C16.37 5.35 17.22 5.63 17.22 5.63C17.76 7.23 17.42 8.43 17.32 8.69C17.94 9.41 18.31 10.32 18.31 11.43C18.31 15.3 15.95 16.23 13.71 16.49C14.08 16.8 14.41 17.43 14.41 18.37C14.41 19.72 14.4 20.7 14.4 21.01C14.4 21.28 14.58 21.61 15.09 21.5C19.05 20.16 21.92 16.56 21.92 12.26C22 6.58 17.52 2 12 2Z" fill="currentColor" /></svg>
        )
    },
    {
        label: 'Instagram', href: 'https://instagram.com/youssef._.mt', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 2a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zM18 6.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
            </svg>
        )
    },
]

const HeroSection = () => {
    const { theme } = useTheme()

    return (
        <section id="home" className="relative isolate pt-36 md:pt-44 lg:pt-52 bg-white dark:bg-black">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-16 items-center">
                    <div 
                        data-aos="fade-right" 
                        data-aos-duration="1000" 
                        data-aos-delay="200"
                        className="bg-neutral-900 dark:bg-neutral-800 rounded-lg p-6 font-mono text-sm overflow-x-auto"
                    >
                        <div className="text-green-400">const</div>
                        <div className="text-blue-400">coder</div>
                        <div className="text-white">= {'{'}</div>
                        <div className="ml-4">
                            <div><span className="text-blue-400">name:</span> <span className="text-yellow-400">'Youssef Moutayamine'</span>,</div>
                            <div><span className="text-blue-400">skills:</span> <span className="text-white">[</span></div>
                            <div className="ml-4">
                                <div><span className="text-yellow-400">'React'</span>,</div>
                                <div><span className="text-yellow-400">'Laravel'</span>,</div>
                                <div><span className="text-yellow-400">'PHP'</span>,</div>
                                <div><span className="text-yellow-400">'JavaScript'</span>,</div>
                                <div><span className="text-yellow-400">'HTML'</span>,</div>
                                <div><span className="text-yellow-400">'MySql'</span>,</div>
                                <div><span className="text-yellow-400">'CSS'</span>,</div>
                                <div><span className="text-yellow-400">'Tailwind'</span>,</div>
                                <div><span className="text-yellow-400">'Git'</span></div>
                            </div>
                            <div><span className="text-white">],</span></div>
                            <div><span className="text-blue-400">hardworker:</span> <span className="text-purple-400">true</span>,</div>
                            <div><span className="text-blue-400">quickLearner:</span> <span className="text-purple-400">true</span>,</div>
                            <div><span className="text-blue-400">problemSolver:</span> <span className="text-purple-400">true</span>,</div>
                            <div><span className="text-blue-400">hireable:</span> <span className="text-green-400">function</span><span className="text-white">() {'{'}</span></div>
                            <div className="ml-4"><span className="text-green-400">return</span> <span className="text-white">this.hardworker && this.problemSolver && this.skills.length &gt; = 5;</span></div>
                            <div><span className="text-white">{'}'}</span></div>
                        </div>
                        <div className="text-white">{'}'}</div>
                    </div>

                    <div 
                        data-aos="fade-left" 
                        data-aos-duration="1000" 
                        data-aos-delay="400"
                        className="text-left"
                    >
                        <p 
                            data-aos="fade-up" 
                            data-aos-duration="800" 
                            data-aos-delay="600"
                            className="text-2xl md:text-3xl font-semibold text-neutral-700 dark:text-neutral-300"
                        >
                            Hi, I'm <span className="text-neutral-900 dark:text-neutral-100 font-extrabold" style={{ fontFamily: 'var(--font-display)' }}>Youssef Moutayamine</span>
                        </p>
                        <h1 
                            data-aos="fade-up" 
                            data-aos-duration="800" 
                            data-aos-delay="800"
                            className="mt-4 font-black tracking-tight text-neutral-900 dark:text-neutral-100" 
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            <span className="block text-5xl md:text-7xl lg:text-8xl leading-[1.05]">Fullstack Web <span className="text-red-500">Developer</span></span>
                        </h1>
                        <div 
                            data-aos="fade-up" 
                            data-aos-duration="800" 
                            data-aos-delay="1000"
                            className="relative inline-flex mt-2"
                        >
                            <span className="w-0.5 md:w-1 bg-red-500 animate-caret" />
                        </div>

                        <p 
                            data-aos="fade-up" 
                            data-aos-duration="800" 
                            data-aos-delay="1200"
                            className="mt-6 max-w-2xl text-base md:text-lg lg:text-xl leading-7 text-neutral-600 dark:text-neutral-300"
                        >
                            I build fast, accessible web apps end‑to‑end — from polished frontends to robust backends.
                        </p>

                        <div 
                            data-aos="fade-up" 
                            data-aos-duration="800" 
                            data-aos-delay="1400"
                            className="mt-6 flex items-center gap-3"
                        >
                            {socialLinks.map((s, index) => (
                                <a 
                                    key={s.label} 
                                    href={s.href} 
                                    aria-label={s.label} 
                                    data-aos="zoom-in" 
                                    data-aos-duration="600" 
                                    data-aos-delay={1600 + (index * 100)}
                                    className="group inline-flex items-center justify-center h-10 w-10 rounded-full border border-red-400/50 text-red-500 hover:bg-red-500/10 transition-colors hover:scale-110 transform duration-200"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>

                        <div 
                            data-aos="fade-up" 
                            data-aos-duration="800" 
                            data-aos-delay="1800"
                            className="mt-8"
                        >
                            <a 
                                href="#contact" 
                                data-aos="zoom-in" 
                                data-aos-duration="600" 
                                data-aos-delay="2000"
                                className="inline-flex items-center gap-2 rounded-full border border-red-400/60 px-6 py-3 text-sm font-medium text-red-600 dark:text-red-300 hover:bg-red-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                Hire me
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div 
                data-aos="fade-in" 
                data-aos-duration="1000" 
                data-aos-delay="2200"
                data-aos-easing="ease-out"
                className="relative mt-16 md:mt-20 lg:mt-24 flex flex-col items-center" 
                onClick={() => {
                    const next = document.querySelector('#about');
                    if (next) next.scrollIntoView({ behavior: 'smooth' });
                }} 
                style={{ cursor: 'pointer' }}
            >
                <div className="mouse-shell theme-red">
                    <span className="mouse-wheel" />
                </div>
                <span className="mt-2 text-xs tracking-[0.35em] text-neutral-400">SCROLL</span>
            </div>
        </section>
    );
};

export default HeroSection;
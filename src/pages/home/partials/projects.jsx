import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Constants from '../../../constant';

const PortfolioSection = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        
    {
        id: 1,
        number: "01",
        title: "Easyfolio",
        description: "A personal portfolio website built with HTML, CSS, and Bootstrap, showcasing projects with a clean and responsive layout.",
        image: Constants.Images.Easyfolio,
        category: "Frontend",
        href: "",
        github: "https://github.com/youssef-moutayamine/youssef-moutayamine-final-projet-html-css.git"
    },
    {
        id: 2,
        number: "02", 
        title: "Restaurantly",
        description: "A restaurant website created using HTML, Sass, and JavaScript, featuring interactive menus, smooth animations, and DOM manipulation.",
        image: Constants.Images.Restaurantly,
        category: "Frontend",
        href: "https://youssef-moutayamine.github.io/-Youssef_Moutayamine_finalproject_dom",
        github: "https://github.com/youssef-moutayamine/restaurantly.git"
    },
    {
        id: 3,
        number: "03",
        title: "Movies Website",
        description: "A movie discovery app built with React and Tailwind CSS, allowing users to search movies, view details, and explore recommendations.",
        image: Constants.Images.Movies,
        category: "Frontend",
        href: "#",
        github: "https://github.com/youssef-moutayamine/Movies.git"
    },
    {
        id: 4,
        number: "04",
        title: "Shopify Clone",
        description: "An e-commerce platform inspired by Shopify, designed for online clothing shopping with product management and cart functionality.",
        image: Constants.Images.Shopify,
        category: "Frontend",
        href: "https://youssef-moutayamine-final-project-r.vercel.app/",
        github: "https://github.com/youssef-moutayamine/Youssef_Moutayamine_Final_Project_React.git"
    },
    {
        id: 5,
        number: "05",
        title: "AnimeFinder",
        description: "An anime discovery app built with React and API integration, allowing users to search for anime, explore details, and watch trailers.",
        image: Constants.Images.AnimeFinder,
        category: "Frontend",
        href: "https://anime-finder-rho.vercel.app",
        github: "https://github.com/youssef-moutayamine/anime-finder.git"
    }
];



    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        const section = sectionRef.current;
        const header = headerRef.current;
        const slider = sliderRef.current;

        if (header) {
            gsap.fromTo(header, 
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }

        if (slider) {
            gsap.fromTo(slider, 
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 78%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section ref={sectionRef} id="portfolio" className="py-24 bg-white dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={headerRef} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                        Featured <span className="text-red-500">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-red-500 mx-auto"></div>
                </div>

                <div ref={sliderRef} className="relative">
                    <div className="flex transition-transform duration-700 ease-out" 
                         style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {projects.map((project, index) => (
                            <div key={project.id} className="w-full flex-shrink-0 px-4">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-1 h-8 bg-red-500"></div>
                                            <span className="text-2xl font-bold text-red-500">{project.number}</span>
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <a 
                                            href={project.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
                                        >
                                            View project →
                                        </a>
                                    </div>
                                    <div className="relative group">
                                        <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                            <div className="bg-neutral-800 rounded-2xl p-6 shadow-2xl">
                                                <div className="bg-neutral-900 rounded-xl p-4 relative overflow-hidden">
                                                    <img 
                                                        src={project.image} 
                                                        alt={project.title}
                                                        className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                                        <a 
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-300"
                                                        >
                                                            <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                            </svg>
                                                        </a>
                                                        <a 
                                                            href={project.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-300"
                                                        >
                                                            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button 
                        onClick={prevSlide}
                        className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-neutral-800 rounded-full shadow-lg flex items-center justify-center hover:bg-red-50 dark:hover:bg-neutral-700 transition-all duration-300 group z-10"
                    >
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 dark:text-neutral-300 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button 
                        onClick={nextSlide}
                        className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-neutral-800 rounded-full shadow-lg flex items-center justify-center hover:bg-red-50 dark:hover:bg-neutral-700 transition-all duration-300 group z-10"
                    >
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 dark:text-neutral-300 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="flex justify-center mt-12 gap-3">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide 
                                        ? 'bg-red-500 w-8' 
                                        : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
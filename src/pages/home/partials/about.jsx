import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextType from '../../../components/TextType';
import ScrollReveal from '../../../components/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const title = titleRef.current;
        const content = contentRef.current;

        gsap.fromTo(title, 
            { 
                opacity: 0, 
                y: 50 
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        gsap.fromTo(content, 
            { 
                opacity: 0, 
                y: 30 
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section 
            ref={sectionRef}
            id="about" 
            className="py-24 bg-white dark:bg-black"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 
                        ref={titleRef}
                        className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4"
                    >
                        About
                    </h2>
                    <div className="w-24 h-1 bg-red-500 mx-auto"></div>
                </div>

                <div 
                    ref={contentRef}
                    className="max-w-4xl mx-auto text-center"
                >
                    <ScrollReveal
                        baseOpacity={0}
                        enableBlur={true}
                        baseRotation={5}
                        blurStrength={10}
                        containerClassName="mb-6"
                        textClassName="text-[clamp(2rem,6vw,4rem)] text-neutral-600 dark:text-neutral-300"
                    >
                        I'm Youssef Moutayamine, a Morocco-based full-stack web developer with a passion for building scalable, high-performance web applications. I specialize in creating responsive, user-friendly digital solutions using modern technologies across both frontend and backend.
                    </ScrollReveal>

                    <ScrollReveal
                        baseOpacity={0}
                        enableBlur={true}
                        baseRotation={5}
                        blurStrength={10}
                        textClassName="text-[clamp(2rem,6vw,4rem)] text-neutral-600 dark:text-neutral-300"
                    >
                        Currently enrolled in the full-stack development program at LionsGeek, I'm constantly improving my skills and staying up to date with industry best practices. My approach is focused on clean architecture, performance, and delivering real value through thoughtful design and development.
                    </ScrollReveal>

                    <div className="mt-12">
                        <TextType 
                            text={[
                                "Building the future, one line of code at a time.",
                                "Crafting digital experiences that matter.",
                                "Turning ideas into reality with code."
                            ]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            className="text-2xl md:text-3xl font-semibold  text-red-500 dark:text-white "
                            startOnVisible={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Particles from '../../../components/Particles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ContactSection = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs.init('fiICdRNCoF-DbDtYO');

        const serviceId = 'service_ao1p1lr';
        const templateId = 'template_s5zteep';
        const publicKey = 'fiICdRNCoF-DbDtYO';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Youssef',
            to_email: 'ilyashshs4@gmail.com',
            message: message,
        };

        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                if (response.status === 200) {
                    setName('');
                    setEmail('');
                    setMessage('');
                    setSubmitStatus('success');
                } else {
                    setSubmitStatus('error');
                }
            })
            .catch(() => setSubmitStatus('error'))
            .finally(() => setIsSubmitting(false));
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const section = sectionRef.current;
        const header = headerRef.current;
        const left = leftRef.current;
        const right = rightRef.current;

        if (header) {
            gsap.fromTo(
                header,
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
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }

        if (left) {
            gsap.fromTo(
                left,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 78%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }

        if (right) {
            gsap.fromTo(
                right,
                { opacity: 0, y: 30 },
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
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-white dark:bg-black relative overflow-hidden">
            <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 
                        ref={headerRef} 
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-3 sm:mb-4 font-heading"
                    >
                        Let's <span className="text-red-500">Connect</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto font-body px-4">
                        Ready to bring your ideas to life? Let's discuss how we can work together.
                    </p>
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    <div 
                        ref={leftRef} 
                        className="space-y-6 sm:space-y-8"
                    >
                        <div className="bg-neutral-100/80 dark:bg-neutral-900/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-full min-w-0">
                            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 sm:mb-6 font-heading">
                                Get in Touch
                            </h3>
                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex items-start gap-3 sm:gap-4 group">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 aspect-square bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-900 transition-colors">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wide font-accent">Email</p>
                                        <p className="text-sm sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 break-all font-body">moutayamineyoussef6@email.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4 group">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 aspect-square bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-900 transition-colors">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wide font-accent">Phone</p>
                                        <p className="text-sm sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 font-body">+212 621 749-514</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4 group">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 aspect-square bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-900 transition-colors">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wide font-accent">Location</p>
                                        <p className="text-sm sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 font-body">Morocco</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-neutral-200 dark:border-neutral-800">
                                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-3 sm:mb-4 font-accent">Follow Me</p>
                                <div className="flex gap-3 sm:gap-4">
                                    {[
                                        { href: "https://x.com/Youssef_MTN", icon: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" },
                                        { href: "https://www.linkedin.com/in/youssef-moutayamine-25594b368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                                        { href: "https://github.com/youssef-moutayamine", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }
                                    ].map((social, index) => (
                                        <a 
                                            key={index}
                                            href={social.href} 
                                            className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center hover:bg-red-200 dark:hover:bg-red-900 transition-all duration-300 group hover:scale-110 transform"
                                        >
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 24 24">
                                                <path d={social.icon} />
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div 
                        ref={rightRef} 
                        className="bg-neutral-50/80 dark:bg-neutral-900/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 sm:mb-6 font-heading">
                            Send Message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 font-accent">Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:border-red-400 focus:ring-2 focus:ring-red-900 focus:outline-none transition-all duration-200 hover:border-red-300 font-body text-sm sm:text-base"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 font-accent">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:border-red-400 focus:ring-2 focus:ring-red-900 focus:outline-none transition-all duration-200 hover:border-red-300 font-body text-sm sm:text-base"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 font-accent">Message</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    rows="4"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:border-red-400 focus:ring-2 focus:ring-red-900 focus:outline-none transition-all duration-200 resize-none hover:border-red-300 font-body text-sm sm:text-base"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed font-accent text-sm sm:text-base"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {submitStatus === 'success' && (
                                <p className="text-green-600 dark:text-green-400 text-center font-body text-sm sm:text-base">
                                    Message sent successfully!
                                </p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-red-600 dark:text-red-400 text-center font-body text-sm sm:text-base">
                                    Failed to send message. Please try again.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
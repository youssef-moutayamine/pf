import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LogoLoop from '../../../components/LogoLoop';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const frontendSkills = [
    { node: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="48" height="48" />, title: "React", href: "https://react.dev" },
    { node: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="48" height="48" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" width="48" height="48" />, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" width="48" height="48" />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" width="48" height="48" />, title: "Sass", href: "https://sass-lang.com" },
    { node: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" width="48" height="48" />, title: "Bootstrap", href: "https://getbootstrap.com" },
    { node: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" width="48" height="48" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  const backendSkills = [
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", text: "Laravel" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", text: "PHP" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", text: "MySQL" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", text: "SQLite" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", text: "Node.js" },
  ];
  const backendLogos = backendSkills.map((s) => ({
    node: <img src={s.image} alt={s.text} width="56" height="56" />, title: s.text
  }));
  const toolsVersionControl = [
    { node: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width="56" height="56" />, title: "Git", href: "https://git-scm.com" },
    { node: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="56" height="56" />, title: "GitHub", href: "https://github.com" },
    { node: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="Bash" width="56" height="56" />, title: "Bash", href: "https://www.gnu.org/software/bash/" },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const content = contentRef.current;

    if (!section || !title || !content) return;

    gsap.fromTo(
      title,
      { opacity: 0, y: 50 },
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

    gsap.fromTo(
      content,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div ref={contentRef} className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-100 text-center mb-8">
            Frontend Skills
          </h3>
          <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={frontendSkills}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor=""
              ariaLabel="Frontend technologies"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-100 text-center mb-8">
          Backend Skills
          </h3>
          <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={backendLogos}
              speed={120}
              direction="right"
              logoHeight={56}
              gap={48}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor=""
              ariaLabel="Backend technologies"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-100 text-center mb-8">
            Tools & Version Control
          </h3>
          <div className="flex items-center justify-center gap-10">
            {toolsVersionControl.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={item.title}
                className="inline-flex items-center justify-center rounded-lg p-3 transition-transform duration-300 hover:scale-105"
              >
                {item.node}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
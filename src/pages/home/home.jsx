import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from './partials/hero';
import AboutSection from './partials/about';
import PortfolioSection from './partials/projects';
import SkillsSection from './partials/skills';
import ContactSection from './partials/contact';

const HomePage = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            offset: 0,
            delay: 0,
        });
        setTimeout(() => AOS.refresh(), 100);
    }, []);

    return (
        <>
            <HeroSection />
            <AboutSection/>
            <SkillsSection/>
            <PortfolioSection/>
            <ContactSection/>
        </>
    );
};

export default HomePage;

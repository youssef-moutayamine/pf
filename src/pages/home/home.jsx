import React from 'react';
import HeroSection from './partials/hero';
import AboutSection from './partials/about';
import PortfolioSection from './partials/projects';
import SkillsSection from './partials/skills';
import ContactSection from './partials/contact';

const HomePage = () => {

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

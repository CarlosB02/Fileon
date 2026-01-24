import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Security from '../components/Security';
import SectorsAndBenefits from '../components/Sectors';
import Contact from '../components/Contact';
import IndexingDemo from '../components/IndexingDemo';

const Home = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Hero />
            <Services />
            <HowItWorks />
            <IndexingDemo />
            <Security />
            <SectorsAndBenefits />
            <Contact />
        </main>
    );
};

export default Home;

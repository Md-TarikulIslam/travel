import React from 'react';
import AboutBanner from '../components/AboutBanner';
import DiscoverWorld from "../components/DiscoverWorld"


const AboutPage = () => {
    return (
        <>
            <AboutBanner />
            <div className="pt-32 pb-20 px-4">
        <DiscoverWorld />
      </div>
        </>
    );
};

export default AboutPage;
import React from "react";
import AboutBanner from "../components/AboutBanner";
import DiscoverWorld from "../components/DiscoverWorld";
import Review from "../components/Review";
import BookNowBanner from "../components/BookNowBanner";

const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <div className="pt-32 pb-20 px-4">
        <DiscoverWorld />
      </div>
      <BookNowBanner />
      <div className="py-40 px-4">
        <Review />
      </div>
    </>
  );
};

export default AboutPage;

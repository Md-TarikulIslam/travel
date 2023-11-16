import React from "react";
import ContactBanner from "../components/ContactBanner";
import Review from "../components/Review";

const ContactPage = () => {
  return (
    <>
      <ContactBanner />
      <div className="py-40 px-4">
        <Review />
      </div>
    </>
  );
};

export default ContactPage;

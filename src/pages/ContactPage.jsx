import React from "react";
import ContactBanner from "../components/ContactBanner";
import Review from "../components/Review";
import ContactForm from "../components/ContactForm";
import BookNowBanner from "../components/BookNowBanner";

const ContactPage = () => {
  return (
    <>
      <ContactBanner />
      <div className=" pt-32 pb-20 px-4">
        <ContactForm />
      </div>
      <BookNowBanner />
      <div className="py-40 px-4">
        <Review />
      </div>
    </>
  );
};

export default ContactPage;

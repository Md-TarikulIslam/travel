import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toursCardData } from "../constant/dummyData";
import BookNowPageBanner from "./BookNowPageBanner";
import { auth } from "../firebase.init";
import { toast } from "react-toastify";

const BookNowPage = () => {
  const { id } = useParams();

  const details = toursCardData.find((p) => p.id === id);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    date: "",
    people: "",
    enquire: "",
  });

  const makePayment = async (e) => {
    e.preventDefault();
    console.log('clicked succa');

    if (!auth.currentUser) {
      navigate("/login");
      return;
    }

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.date ||
      !formData.people
    ) {
      toast("Please enter your information.");
      return;
    }

    const body = {
      title: details?.title + " - " + details?.country,
      price: details?.expense,
      info: formData,
    };

    try {
      localStorage.setItem("booking-details", JSON.stringify(body));
      window.location.replace("/payment");
    } catch (error) {
      console.error("Error storing data in local storage:", error);
    }
  };
  return (
    <div>
        <BookNowPageBanner details={details}/>
      <div className="md:w-[45%] mx-auto mt-20 px-4">
        <h1 className="text-center bg-[#2095ae] text-white h-20 text-[27px] font-semibold leading-[80px]">
          Book by - ${details?.expense}
        </h1>
        <form className="bg-[#f4f5f8] px-6 py-11">
          <input
            className="outline-none p-5  mb-6 mr-5 w-full border-none text-[16px] text-black placeholder:text-[#455a64]"
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={formData?.fullName}
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <input
            className="outline-none p-5 mb-6 border-none text-[16px] w-full text-black placeholder:text-[#455a64]"
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData?.email}
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <div className="relative">
            <FaRegCalendarAlt
              size={20}
              color="#2095ae"
              className="sm:hidden absolute top-[25%] right-5"
            />
            <input
              type="date"
              className="p-5 border-none outline-none text-[16px] w-full mb-6 text-black placeholder:text-[#455a64] bg-white"
              name="date"
              value={formData?.date}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          </div>
          <input
            className="outline-none p-5 mb-6 mr-5 w-full border-none text-[16px] text-black placeholder:text-[#455a64]"
            type="number"
            placeholder="People"
            name="people"
            value={formData?.people}
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <textarea
            className="outline-none block w-full resize-non overflow-hidden p-5  border-none text-[16px] text-black mb-6 placeholder:text-[#455a64]"
            placeholder="Your Enquiry"
            cols={20}
            rows={4}
            name="enquire"
            value={formData?.enquire}
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
          ></textarea>
          <button
            onClick={makePayment}
            className="px-5 py-3 bg-[#2095ae] hover:bg-white hover:text-[#2095ae] text-white duration-300 border border-transparent hover:border-[#2095ae]"
          >
            Book Now
          </button>
          <button className="px-5 py-3 hover:bg-[#2095ae] bg-white text-[#2095ae] hover:text-white duration-300 border hover:border-transparent border-[#2095ae] ml-5">
            <Link to="/refund-policy">Refund Policy</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNowPage;

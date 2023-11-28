import { BsClock } from "react-icons/bs";
import { LuSmile } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdDone, MdClose } from "react-icons/md";
import { loadStripe } from "@stripe/stripe-js";
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { toast } from "react-toastify";

import { Dialog, DialogBody, Card } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CardDetails = ({ details }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        date: "",
        people: "",
        enquire: "",
    });

    const makePayment = async (e) => {
        e.preventDefault();

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

        localStorage.setItem("booking-details", JSON.stringify(body));

        window.location.replace(`${details.payment_link}`); // "https://buy.stripe.com/test_eVacPb6hGeC3dXibII"
    };

    return (
        <section className="max-width">
            <div className="md:flex">
                <div className="md:mr-5 mb-20 md:mb-0 w-full">
                    <p className="text-[#2095ae] text-[13px] uppercase mb-1 tracking-[2px] sm:tracking-[5px]">
                        Travel With Patagonia Explore
                    </p>
                    <h1 className="text-3xl sm:text-[45px] leading-[1.2em] font-bold text-[#0f2454] mb-2">
                        {details?.title},
                        <span className="text-[#2095AE]">
                            {" "}
                            {details?.country}
                        </span>
                    </h1>
                    <h5 className="text-lg text-[#0f2454] mb-5">
                        {details?.place}
                    </h5>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-6 mb-8 py-5">
                        <p className="flex items-center text-[#676977]">
                            <BsClock className="mr-1 text-lg text-[#2095AE]" />
                            {details?.details.duration}
                        </p>
                        <p className="flex items-center text-[#676977]">
                            <MdOutlinePersonOutline className="mr-1 text-2xl text-[#2095AE]" />
                            {details?.person}+
                        </p>
                        <p className="flex items-center text-[#676977]">
                            <VscLocation className="mr-1 text-2xl text-[#2095AE]" />
                            {details?.country}
                        </p>
                        <p className="flex items-center text-[#676977]">
                            <LuSmile className="mr-1 text-xl text-[#2095AE]" />
                            {details?.ratings}
                        </p>
                    </div>
                    <h3 className="font-semibold mb-5 text-[#0f2454] sm:text-[28px] text-2xl ">
                        Information
                    </h3>
                    <p className="text-[#676977] md:w-[90%] leading-[1.75em] text-justify">
                        {details?.details?.desq1}
                    </p>
                    <p className="mt-7 text-[#676977] leading-[1.75em]">
                        {details.day} Days {details?.night}Nights, Group:{" "}
                        {details?.person}
                        +, {details?.country}
                    </p>
                    <p className="text-[#676977] md:w-[90%] mt-7 leading-[1.75em] text-justify">
                        {details?.details?.desq2}
                    </p>
                    <div className="mt-10 text-[#676977]">
                        <p className="grid grid-cols-2 py-4">
                            <span>Departure</span>{" "}
                            <span>{details?.details?.departure}</span>
                        </p>
                        <p className="grid grid-cols-2 py-4">
                            <span>Departure Time</span>{" "}
                            <span>{details?.details?.departureTime}</span>
                        </p>
                        <p className="grid grid-cols-2 py-4">
                            <span>Return Time</span>{" "}
                            <span>
                                Approximately {details?.details?.ReturnTime}
                            </span>
                        </p>
                        <p className="grid grid-cols-2 py-4">
                            <span>Price Includes</span>{" "}
                            <span>
                                {details?.details?.priceIncludes.map((data) => (
                                    <li
                                        className="flex items-center list-none mb-7"
                                        key={data}
                                    >
                                        <MdDone
                                            size={20}
                                            className="mr-3 text-[#2095ae]"
                                        />
                                        {data}
                                    </li>
                                ))}
                            </span>
                        </p>
                        <p className="grid grid-cols-2 py-4">
                            <span>Price Excludes</span>{" "}
                            <span>
                                {details?.details?.priceExcludes.map((data) => (
                                    <li
                                        className="flex items-center list-none mb-7"
                                        key={data}
                                    >
                                        <MdClose
                                            size={20}
                                            className="mr-3 text-[#f00]"
                                        />
                                        {data}
                                    </li>
                                ))}
                            </span>
                        </p>
                    </div>
                </div>
                <div className="md:w-[65%]">
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
                        <button
                            className="px-5 py-3 hover:bg-[#2095ae] bg-white text-[#2095ae] hover:text-white duration-300 border hover:border-transparent border-[#2095ae] ml-5"
                        >
                            <Link to='/refund-policy'>Refund Policy</Link>
                        </button>
                    </form>
                    <div className="just-try md:mt-44 mt-20">
                        <Card
                            className="cursor-pointer overflow-hidden transition-opacity hover:opacity-90 rounded-none border border-blue-600 "
                            onClick={handleOpen}
                        >
                            <img
                                alt="map"
                                className="h-full w-full object-cover object-center"
                                src={details?.details?.mapImg}
                            />
                        </Card>
                        <Dialog size="lg" open={open} handler={handleOpen}>
                            <DialogBody>
                                <img
                                    alt="nature"
                                    className="lg:h-[80vh] w-full rounded-lg object-cover object-center"
                                    src={details?.details?.mapImg}
                                />
                            </DialogBody>
                        </Dialog>
                    </div>
                </div>
            </div>

            {/* itinerary  */}
            <div className="mt-20">
                <h3 className="font-semibold mb-12 text-[#0f2454] sm:text-[28px] text-2xl ">
                    Full Itinerary :
                </h3>
                <Timeline className="sm:ml-10 grid md:grid-cols-2">
                    {details.itenary.map((data) => (
                        <TimelineItem key={data.id}>
                            <TimelineConnector />
                            <TimelineHeader className="h-3">
                                <TimelineIcon />
                                <Typography
                                    variant="h6"
                                    color="blue-gray"
                                    className="leading-none sm:text-2xl text-xl text-[#2095ae]"
                                >
                                    {data.title}
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pt-6 pb-2">
                                <Typography
                                    variant="medium"
                                    color="gary"
                                    className="font-normal text-gray-600"
                                >
                                    {data?.desq.map((item) => (
                                        <li
                                            className=" list-none mb-7"
                                            key={item}
                                        >
                                            - {item}
                                        </li>
                                    ))}
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>

            {details?.details?.imgGallery ? (
                <div className="mt-10">
                    <h3 className="font-semibold mb-7 text-[#0f2454] sm:text-[28px] text-2xl ">
                        Tour Gallery
                    </h3>
                    <div className="grid md:grid-cols-5 gap-6">
                        {details?.details?.imgGallery.map((data) => (
                            <div
                                key={data?.id}
                                className="bg-black rounded-xl overflow-hidden"
                            >
                                <img
                                    src={data?.img}
                                    className="rounded-xl md:h-[200px] md:w-[220px] object-cover object-center hover:scale-110 hover:opacity-90 duration-300"
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                ""
            )}
        </section>
    );
};

export default CardDetails;

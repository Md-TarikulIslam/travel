import { BsClock } from "react-icons/bs";
import { LuSmile } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";
import { Link } from "react-router-dom";

const CardDetails = ({ details }) => {
  return (
    <section className="max-width">
      <div className="md:flex">
        <div className="md:mr-5 mb-20 md:mb-0">
          <p className="text-[#2095ae] text-[13px] uppercase mb-1 tracking-[5px]">
            Travel With Patagonia Explore
          </p>
          <h1 className="text-[45px] leading-[1.2em] font-bold text-[#0f2454] mb-2">
            {details?.title},
            <span className="text-[#2095AE]"> {details?.country}</span>
          </h1>
          <h5 className="text-lg text-[#0f2454] mb-5">{details?.place}</h5>
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 mb-8 py-5">
            <p className="flex items-center text-[#676977]">
              <BsClock className="mr-1 text-lg text-[#2095AE]" />
              {details?.day} Days {details?.night} Nights
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
          <h3 className="font-semibold mb-5 text-[#0f2454] text-[28px]">
            Information
          </h3>
          <p className="text-[#676977]">{details?.desq}</p>
          <p className="mt-5 text-[#676977]">
            {details.day} Days {details?.night}Nights, Group: {details?.person}
            +, {details?.country}
          </p>
          <div className="mt-10 text-[#676977]">
            <p className="grid grid-cols-2 py-4">
              <span>Departure</span> <span>{details?.details?.departure}</span>
            </p>
            <p className="grid grid-cols-2 py-4">
              <span>Departure Time</span>{" "}
              <span>{details?.details?.departureTime}</span>
            </p>
            <p className="grid grid-cols-2 py-4">
              <span>Return Time</span>{" "}
              <span>Approximately {details?.details?.ReturnTime}</span>
            </p>
          </div>
        </div>
        <div className="md:w-[35%]">
                <h1 className="text-center bg-[#2095ae] text-white h-20 text-[27px] font-semibold leading-[80px]">Form <span className="ml-10">${details?.expense}</span></h1>
                <form className="bg-[#f4f5f8] px-6 py-11">
                    <input className="outline-none p-5  mb-6 mr-5 w-full border-none text-[16px] text-black placeholder:text-black" type="text" placeholder="Full Name" />
                    <input className="outline-none p-5 mb-6 border-none text-[16px] w-full text-black placeholder:text-black" type="email" name="" id="" placeholder="Email Address"/>
                    <input className="outline-none p-5 block border-none text-[16px] w-full mb-6 text-black placeholder:text-black" type="date" placeholder="Subject *"/>
                    <input className="outline-none p-5  mb-6 mr-5 w-full border-none text-[16px] text-black placeholder:text-black" type="text" placeholder="People" />
                    <textarea className="outline-none block w-full resize-non overflow-hidden p-5  border-none text-[16px] text-black mb-6 placeholder:text-black" placeholder="Your Enquiry" cols={20} rows={4} ></textarea>
                    <button className="px-5 py-3 bg-[#2095ae] hover:bg-white hover:text-[#2095ae] text-white duration-300 border border-transparent hover:border-[#2095ae]">
                        <Link href="#">Book Now</Link>
                    </button>
                </form>

            </div>
      </div>
      {details?.details?.imgGallery ? (
        <div className="mt-10">
          <h3 className="font-semibold mb-7 text-[#0f2454] text-[28px]">
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
                  className="rounded-xl hover:scale-110 hover:opacity-90 duration-300"
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
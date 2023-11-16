
import { Link } from "react-router-dom";

import { BsClock } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";
import { MdOutlinePersonOutline } from "react-icons/md";
import { LuSmile } from "react-icons/lu";

const ToursCard = ({data}) => {
    return (
        <div className="card relative">
                <div className="front">
                    <img
                      className="min-h-[450px] max-h-[450px] w-full"
                      src={data.img}
                      alt="image"
                    />
                  <p className='bg-[#0f2454]  text-[13px] text-white absolute top-[35px] right-[15px] -rotate-90 px-2 py-1.5 uppercase text-center'>{data.place}</p>
                  <div className="absolute bottom-0 right-0 text-right p-10">
                  <h2 className="text-[27px]  text-white mb-2.5 font-semibold inline-flex">{data.title}</h2>
                  <h6 className="text-[16px] text-white">${data.expense} / per persons</h6>
                  </div>
                  </div>
                <div className="back flex flex-col justify-center items-start px-8">
                    <h2 className="text-[27px] text-[#0f2454] mb-1.5 font-semibold">{data.title}</h2>
                    <h6 className="text-[#2095AE] text-[16px] mb-5">${data.expense} / per persons</h6>
                        <p className="text-[#676977 text-[16px] mb-5 text-[#676977]">{data.desq}</p>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-8">
                        <p className="flex items-center text-[#676977]"><BsClock className="mr-1 text-lg text-[#2095AE]"/>{data.day} Days</p>
                        <p className="flex items-center text-[#676977]"><VscLocation className="mr-1 text-2xl text-[#2095AE]"/>{data.place}</p>
                        <p className="flex items-center text-[#676977]"><MdOutlinePersonOutline className="mr-1 text-2xl text-[#2095AE]"/>{data.person}+</p>
                        <p className="flex items-center text-[#676977]"><LuSmile className="mr-1 text-xl text-[#2095AE]"/>{data.ratings}</p>
                    </div>
                    <Link className="border-b border-b-blue-500 py-1 hover:text-blue-500 duration-300" to="#">Tour Details</Link>
                </div>
          </div>
    );
};

export default ToursCard;
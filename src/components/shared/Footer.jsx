import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";

import { Link } from "react-router-dom";
import img1 from "../../assets/images/footer/1.jpg";
import img2 from "../../assets/images/footer/2.jpg";
import img3 from "../../assets/images/footer/3.jpg";
import img4 from "../../assets/images/footer/4.jpg";
import img5 from "../../assets/images/footer/5.jpg";
import img6 from "../../assets/images/footer/6.jpg";
import logo from "../../assets/images/logo/logo3.png";

const Footer = () => {
  return (
    <footer className="bg-[#0f2454]">
      <div className="text-white max-width px-4 md:h-[85vh] flex flex-col justify-center">
        <div className="flex flex-col md:flex-row gap-5 justify-between sm:w-[80%] mx-auto  border border-[#ffffff1a] py-5 md:px-10 px-5 rounded-md md:w-full w-full mt-10">
          <div className="flex items-center">
            <div className="bg-[#2095ae] min-w-[65px] rounded-md min-h-[65px] mr-4 flex items-center justify-center">
              <FiPhoneCall className="text-4xl" />
            </div>
            <div>
              <h6 className="text-[16px] font-semibold">Call us</h6>
              <p className="text-[#ffffffcc] mt-1">
                <a href="tel:2124707727">2124707727</a>
              </p>
            </div>
          </div>
          <p className="md:border-r border-r-[#ffffff1a] border-b border-b-[#ffffff1a] md:w-auto w-full"></p>
          <div className="flex items-center">
            <div className="bg-[#2095ae] min-w-[65px] rounded-md min-h-[65px] mr-4 flex items-center justify-center">
              <TfiEmail className="text-4xl" />
            </div>
            <div>
              <h6 className="text-[16px] font-semibold">Write to us</h6>
              <p className="text-[#ffffffcc] mt-1">
                <a href="mailto:patagoniaexpeditionss@gmail.com">patagoniaexpeditionss@gmail.com</a>
              </p>
            </div>
          </div>
          <p className="md:border-r border-r-[#ffffff1a] border-b border-b-[#ffffff1a] md:w-auto w-full"></p>
          <div className="flex items-center">
            <div className="bg-[#2095ae] min-w-[65px] min-h-[65px] rounded-md mr-4 flex items-center justify-center">
              <SlLocationPin size={35} className="text-4x" />
            </div>
            <div>
              <h6 className="text-[16px] font-semibold">Address</h6>
              <p className="text-[#ffffffcc] mt-1">
                <a
                  href="https://maps.app.goo.gl/kWt2jtgyUTVtwBDEA"
                  target="blank"
                >
                  New York , USA
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-3 grid-cols-1 border-b border-b-[#ffffff1a] pb-16 md:w-full sm:w-[80%] mx-auto ">
          <div>
            <img src={logo} alt="logo" width={250} />
            <p className="mt-6 text-[#ffffffcc] ">
              Quisque imperdiet sapien porttito the bibendum sellentesque the
              commodo erat acar accumsa lobortis, enim diam the nesuen.
            </p>
            <div className="flex gap-2 mt-6">
              <a href="https://www.facebook.com/patagoniaexplore/" target="blank"> 
                <FaFacebookF
                  size={40}
                  className="bg-[#2095ae] hover:bg-[#1c7e93] transition-all px-3 py-3 rounded-full text-white"
                />
              </a>
              <a href="https://www.instagram.com/patagoniaexplore/" target="blank">
                <FaInstagram
                  size={40}
                  className="bg-[#2095ae] hover:bg-[#1c7e93] transition-all px-3 py-3 rounded-full text-white"
                />
              </a>
              <a href="https://twitter.com/patagoniaxplore" target="blank">
                <FaXTwitter
                  size={40}
                  className="bg-[#2095ae] hover:bg-[#1c7e93] transition-all px-3 py-3 rounded-full text-white"
                />
              </a>
            </div>
          </div>
          <div className=" md:flex justify-center md:pl-0 pl-4">
            <ul className=" md:mt-0 mt-10">
              <h2 className="text-xl font-semibold mb-6 relative left-[-15px]">
                Quick Links
              </h2>
              <Link to="/">
                <li className=" list-disc hover:text-[#2095ae] duration-300 text-[#ffffffcc] mb-2">
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li className=" list-disc hover:text-[#2095ae] duration-300 text-[#ffffffcc] mb-2">
                  About
                </li>
              </Link>
              <Link to="/destination">
                <li className=" list-disc hover:text-[#2095ae] duration-300 text-[#ffffffcc] mb-2">
                  Destination
                </li>
              </Link>
              <Link to="/gallery">
                <li className=" list-disc hover:text-[#2095ae] duration-300 text-[#ffffffcc] mb-2">
                  Gallery
                </li>
              </Link>
              <Link to="/contact">
                <li className=" list-disc hover:text-[#2095ae] duration-300 text-[#ffffffcc] mb-2">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className=" md:mt-0 mt-10">
            <h2 className="text-xl font-semibold mb-6">Instagram Feed</h2>
            <div className="grid grid-cols-3 gap-3">
              <Link to="#">
                <img
                  src={img1}
                  alt="Grid Image"
                  className=" rounded-md duration-300 cursor-pointer hover:scale-105"
                />
              </Link>
              <Link to="#">
                <img
                  src={img2}
                  alt="Grid Image"
                  className=" rounded-md duration-300 cursor-pointer hover:scale-105"
                />
              </Link>
              <Link to="#">
                <img
                  src={img3}
                  alt="Grid Image"
                  className=" rounded-md duration-300 cursor-pointer hover:scale-105"
                />
              </Link>
              <Link to="#">
                <img
                  src={img4}
                  alt="Grid Image"
                  className=" rounded-md duration-300 cursor-pointer hover:scale-105"
                />
              </Link>
              <Link to="#">
                <img
                  src={img5}
                  alt="Grid Image"
                  className=" rounded-md duration-300 cursor-pointer hover:scale-105"
                />
              </Link>
              <Link to="#">
                <img
                  src={img6}
                  alt="Grid Image"
                  className=" rounded-md duration-300 cursor-pointer hover:scale-105"
                />
              </Link>
            </div>
          </div>
        </div>
      <div className="mt-6 md:mb-0 mb-6">
        <p className="text-[#ffffffcc] text-sm text-center">©2023 <a target="blank" href="https://shakiqur-rahman-v2.netlify.app/#" className="text-blue-500">Shake's Team</a> All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;

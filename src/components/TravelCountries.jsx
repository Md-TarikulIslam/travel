import { Card, CardBody } from "@material-tailwind/react";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../assets/images/travel/1.jpg";
import img2 from "../assets/images/travel/2.jpg";
import img3 from "../assets/images/travel/3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function TravelCountries() {
  return (
    <div className="max-width">
      <p className="uppercase tracking-widest text-xs text-[#04afd1]">
        top destination
      </p>
      <p className="uppercase tracking-widest text-4xl font-bold text-[#04afd1] my-4">
        Travel <span className="text-[#1d355e]">countries</span>
      </p>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex lg:flex-row flex-col items-center group">
            <div className="z-20">
              <img
                className="w-[45rem] h-[570px] lg:h-[29rem] lg:group-hover:scale-95 transition-all object-contain lg:object-cover object-top"
                src={img}
                alt=""
              />
            </div>
            <Card className="z-30 rounded-none absolute right-0 -bottom-0 lg:bottom-12  lg:right-10 lg:h-[23rem] lg:w-[30rem] ">
              <CardBody>
                <p className="uppercase tracking-widest text-xs text-[#04afd1]">
                  travel countries
                </p>
                <p className="text-[#1d355e] font-bold text-3xl my-4">
                  Argentina
                </p>
                <p className="text-[#848691] text-sm leading-loose">
                Argentina is one of South America's most iconic countries. Exciting Buenos Aires reveals the unique Argentinian atmosphere through culture and architecture. Mendoza can offer you some of the world's best wines.
                </p>
                <div className="grid grid-cols-3 sm:my-8 my-4 ">
                  <div>
                    <p className="flex items-center gap-1 text-sm tracking-widest font-thin">
                      <MdOutlineLocationOn className="text-[#04afd1] text-xl" />{" "}
                      Buenos Aires
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center gap-1 text-sm tracking-widest font-thin">
                      <MdOutlineLocationOn className="text-[#04afd1] text-xl" />{" "}
                      El Calafate
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center gap-1 text-sm tracking-widest font-thin">
                      <MdOutlineLocationOn className="text-[#04afd1] text-xl" />{" "}
                      El Chalten
                    </p>
                  </div>
                </div>
                {/* <p className="border-b border-black"></p> */}
                <div className="md:absolute lg:bottom-10 bottom-5">
                  <Link
                    to="/destination"
                    className="text-[#04afd1] flex items-center gap-2 mt-4 hover:underline  hover:underline-offset-4 delay-150 transition-all  "
                  >
                    View all places <BsArrowRight size={20} />
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex items-center flex-col lg:flex-row-reverse group">
            <div>
              <img
                className="w-[45rem] h-[570px] lg:h-[29rem] lg:group-hover:scale-95 transition-all object-contain lg:object-cover object-top"
                src={img2}
                alt=""
              />
            </div>
            <Card className="p-6 rounded-none absolute bottom-0 lg:bottom-12 lg:left-10 lg:h-[23rem] lg:w-[30rem] ">
              <CardBody>
                <p className="uppercase tracking-widest text-xs text-[#04afd1]">
                  travel countries
                </p>
                <p className="text-[#1d355e] font-bold text-3xl my-4">Chile</p>
                <p className="text-[#848691] text-sm leading-loose">
                  Chile is an awesome destination for those backpacking in South
                  America with some of the world’s classic trekking routes
                  through the craggy mountains of the Torres del Paine.
                </p>
                <div className="flex justify-between  sm:my-6 my-4 ">
                  <div className="flex-1">
                    <p className="flex items-center gap-1 text-sm tracking-widest font-thin">
                      <MdOutlineLocationOn className="text-[#04afd1] text-xl" />{" "}
                      Santiago
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="flex items-start gap-1 text-sm tracking-widest font-thin">
                      <MdOutlineLocationOn className="text-[#04afd1] text-xl" />{" "}
                      Puerto Natales
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="flex items-start gap-1 text-sm tracking-widest font-thin">
                      <MdOutlineLocationOn className="text-[#04afd1] text-xl" />{" "}
                      Torres Del Paine
                    </p>
                  </div>
                </div>
                <div className="md:absolute lg:bottom-10 bottom-5">
                  <Link
                    to="/destination"
                    className="text-[#04afd1] flex items-center gap-2 mt-4 hover:underline  hover:underline-offset-4 delay-150 transition-all"
                  >
                    View all places <BsArrowRight size={20} />
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex lg:flex-row flex-col items-center group">
            <div className="z-20">
              <img
                className="w-[45rem] h-[570px] lg:h-[29rem] lg:group-hover:scale-95 transition-all object-contain lg:object-cover object-top"
                src={img3}
                alt=""
              />
            </div>
            <Card className="z-30 rounded-none absolute right-0 -bottom-0 lg:bottom-12  lg:right-10 lg:h-[23rem] lg:w-[30rem] ">
              <CardBody>
                <p className="uppercase tracking-widest text-xs text-[#04afd1]">
                  travel countries
                </p>
                <p className="text-[#1d355e] font-bold text-3xl my-4">Brazil</p>
                <p className="text-[#848691] text-sm leading-loose">
                  Brazil is a huge country in South America, famous for housing
                  the majority of the Amazon rainforest. Travellers can also
                  soak up Brazil’s rich culture and history when visiting one of
                  the country’s vibrant cities like São Paulo and Rio de
                  Janeiro.
                </p>
                <div className="grid grid-cols-3 sm:my-8 my-4 ">
                  <div>
                    <p className="flex items-center gap-1 text-sm tracking-widest font-thin">
                      <MdOutlineLocationOn className="text-[#04afd1] text-xl" />
                      Rio de Janeiro
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center gap-1 text-sm tracking-widest font-thin">
                      <MdOutlineLocationOn className="text-[#04afd1] text-xl" />
                      Foz do Iguacu
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center gap-1 text-sm tracking-widest font-thin">
                      <MdOutlineLocationOn className="text-[#04afd1] text-xl" />
                      Salvador
                    </p>
                  </div>
                </div>
                {/* <p className="border-b border-black"></p> */}
                <div className="md:absolute lg:bottom-10 bottom-5">
                  <Link
                    to="/destination"
                    className="text-[#04afd1] flex items-center gap-2 mt-4 hover:underline  hover:underline-offset-4 delay-150 transition-all  "
                  >
                    View all places <BsArrowRight size={20} />
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

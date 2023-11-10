import { Card, CardBody, Carousel } from "@material-tailwind/react";
import img from '../assets/images/travel/1.jpg'
import img2 from '../assets/images/travel/2.jpg'
import { MdArrowRightAlt, MdOutlineLocationOn } from "react-icons/md";

export default function TravelCountries() {
    return (
            <div className="max-width">
            <p className="uppercase tracking-widest text-xs text-[#04afd1]">top destination</p>
            <p className="uppercase tracking-widest text-4xl font-bold text-[#04afd1] my-4">Travel <span className="text-[#1d355e]">countries</span></p>
            <Carousel  className="rounded-none h-full overflow-hidden group" prevArrow={false} nextArrow={false}  loop={true} autoplay={true} autoplayDelay={4000}>
                <div className="flex items-center">
                <div className="z-20">
                <img className="w-[45rem] h-[29rem] group-hover:scale-95 transition-all" src={img} alt="" />
                </div>
                    <Card className="p-6 z-30 rounded-none absolute  right-10 h-[22rem] w-[30rem] ">
                        <CardBody>
                            <p className="uppercase tracking-widest text-xs text-[#04afd1]">travel countries</p>
                            <p className="text-[#1d355e] font-bold text-3xl my-4">Argentina</p>
                            <p className="text-[#848691] text-sm leading-loose">We provide you with interesting and exciting tours to different parts of the world. Orci varius natoque penatibus et magnis disney turien nascete ridiculus duru in the mus nellen.</p>
                            <div className="grid grid-cols-3 my-4">
                            <div>
                                
                                <p className="flex items-center gap-1 text-sm tracking-widest font-thin"><MdOutlineLocationOn className="text-[#04afd1] text-xl"/> Buenos Aires</p>
                            </div>
                            <div>
                                
                                <p className="flex items-center gap-1 text-sm tracking-widest font-thin"><MdOutlineLocationOn className="text-[#04afd1] text-xl"/> El Calafate</p>
                            </div>
                            <div>
                                
                                <p className="flex items-center gap-1 text-sm tracking-widest font-thin"><MdOutlineLocationOn className="text-[#04afd1] text-xl"/> El Chalten</p>
                            </div>
                            </div>
                            <p className="border-b border-black"></p>
                            <p className="text-[#04afd1] flex items-center gap-2 mt-4 hover:underline  hover:underline-offset-4 delay-150 transition-all">View all places <MdArrowRightAlt /></p>
                        </CardBody>
                    </Card>
                </div>
                <div className="flex items-center flex-row-reverse">
                <div>
                <img className="w-[45rem] h-[29rem] group-hover:scale-95 transition-all" src={img2} alt="" />
                </div>
                    <Card className="p-6 rounded-none absolute  left-10 h-[22rem] w-[30rem] ">
                        <CardBody>
                            <p className="uppercase tracking-widest text-xs text-[#04afd1]">travel countries</p>
                            <p className="text-[#1d355e] font-bold text-3xl my-4">Chile</p>
                            <p className="text-[#848691] text-sm leading-loose">We provide you with interesting and exciting tours to different parts of the world. Orci varius natoque penatibus et magnis disney turien nascete ridiculus duru in the mus nellen.</p>
                            <div className="flex justify-between  my-4">
                            <div className="flex-1">
                                
                                <p className="flex items-center gap-1 text-sm tracking-widest font-thin"><MdOutlineLocationOn className="text-[#04afd1] text-xl"/> Santiago</p>
                            </div>
                            <div className="flex-1">
                                
                                <p className="flex items-start gap-1 text-sm tracking-widest font-thin"><MdOutlineLocationOn className="text-[#04afd1] text-xl"/> Puerto Natales</p>
                            </div>
                            <div className="flex-1">
                                
                                <p className="flex items-start gap-1 text-sm tracking-widest font-thin"><MdOutlineLocationOn className="text-[#04afd1] text-xl"/> Torres Del Paine</p>
                            </div>
                            </div>
                            <p className="border-b border-black"></p>
                            <p className="text-[#04afd1] flex items-center gap-2 mt-4 hover:underline  hover:underline-offset-4 delay-150 transition-all">View all places <MdArrowRightAlt /></p>
                        </CardBody>
                    </Card>
                </div>
                {/* <div className="">
                <div>
                <img className="w-[45rem] h-[29rem] group-hover:scale-95 transition-all" src={img2} alt="" />
                </div>
                    <Card className="p-6 rounded-none absolute top-14 right-0 h-[22rem] w-[30rem] ">
                        <CardBody>
                            <p className="uppercase tracking-widest text-xs text-[#04afd1]">travel countries</p>
                            <p className="text-[#1d355e] font-bold text-3xl my-4">Chile</p>
                            <p className="text-[#848691] text-sm leading-loose">We provide you with interesting and exciting tours to different parts of the world. Orci varius natoque penatibus et magnis disney turien nascete ridiculus duru in the mus nellen.</p>
                            <div className="grid grid-cols-3 my-4">
                            <div>
                                
                                <p className="flex items-center gap-1 text-sm tracking-widest font-thin"><MdOutlineLocationOn className="text-[#04afd1]"/> Buenos Aires</p>
                            </div>
                            <div>
                                
                                <p className="flex items-center gap-1 text-sm tracking-widest font-thin"><MdOutlineLocationOn className="text-[#04afd1]"/> El Calafate</p>
                            </div>
                            <div>
                                
                                <p className="flex items-center gap-1 text-sm tracking-widest font-thin"><MdOutlineLocationOn className="text-[#04afd1]"/> El Chalten</p>
                            </div>
                            </div>
                            <p className="border-b border-black"></p>
                            <p className="text-[#04afd1] flex items-center gap-2 mt-4 hover:underline  hover:underline-offset-4 delay-150 transition-all">View all places <MdArrowRightAlt /></p>
                        </CardBody>
                    </Card>
                </div> */}
             
              
              
            </Carousel>
        </div>
    );
}
import img from "../assets/images/destination/destination.jpg";

const AboutBanner = () => {
  return (
    <div className="relative bg-black ">
      <div className=" bg_overlay w-full">
        <img
          className="h-[60vh] w-full object-cover opacity-100"
          src={img}
          alt="Banner Image"
        />
      </div>
      <div className=" absolute z-10 top-44 2xl:left-52 text-white  px-4">
        <p className="text-[13px] uppercase mb-1 tracking-[5px]">
          The Best Travel Agency
        </p>
        <h1 className="md:text-[48px] text-[40px] leading-[1.3em] font-bold mb-5 Kaushan ">
        We Helping You Find <br /><span className="text-[#2095AE]">Your Dream</span> Vacation
        </h1>
      </div>
    </div>
  );
};

export default AboutBanner;

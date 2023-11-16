import img from "../assets/images/destination/destination.jpg";

const DestinationBanner = () => {
  return (
    <div className="relative bg-black">
      <div className=" bg_overlay">
        <img
          className="h-[60vh] w-full object-cover opacity-90"
          src={img}
          alt="Banner Image"
        />
      </div>
      <div className=" absolute z-10 top-48 2xl:left-52 text-white  px-4">
        <p className="text-[13px] uppercase mb-1 tracking-[5px]">
          Choose your place
        </p>
        <h1 className="md:text-[45px] text-[40px] leading-[1.3em] font-bold mb-5 uppercase">
          POPULAR <span className="text-[#2095AE]">Destination</span>
        </h1>
      </div>
    </div>
  );
};

export default DestinationBanner;

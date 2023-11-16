import img from "../assets/images/destination/destination.jpg";

const GalleryBanner = () => {
  return (
    <div className="relative bg-black">
      <div className=" bg_overlay">
        <img
          className="h-[60vh] w-full object-cover opacity-100"
          src={img}
          alt="Banner Image"
        />
      </div>
      <div className=" absolute z-10 top-48 2xl:left-52 text-white  px-4">
        <p className="text-[13px] uppercase mb-1 tracking-[5px]">
          Choose your place
        </p>
        <h1 className="md:text-[48px] text-[40px] leading-[1.3em] font-bold mb-5 Kaushan">
          Image <span className="text-[#2095AE]">Gallery</span>
        </h1>
      </div>
    </div>
  );
};

export default GalleryBanner;

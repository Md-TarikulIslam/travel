import { Link } from "react-router-dom";

const BookNowBanner = () => {
  return (
    <section className="bg-[#e8604c] overlay-img">
      <div className="max-width px-4 md:py-24 py-12 md:flex justify-between items-center">
        <div className="mb-8">
          <h3 className="text-[30px] mt-4 Kaushan text-white leading-[1.2]">
            Plan your trip with us
          </h3>
          <h2 className="md:text-[45px] text-[35px] text-white font-semibold leading-[1.2]">
            Ready for an unforgettable tour?
          </h2>
        </div>
        <Link to='/destination'>
          <button className="uppercase bg-[#313041] text-[12px] font-bold tracking-2 md:px-10 md:py-6 px-6 py-4 rounded-xl text-white">
            Book tour now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BookNowBanner;

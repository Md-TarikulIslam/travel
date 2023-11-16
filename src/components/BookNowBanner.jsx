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
            Ready for an unforgetable tour?
          </h2>
        </div>
        <button className="uppercase bg-[#313041] text-[12px] font-bold tracking-2 px-10 py-6 rounded-xl text-white">
          <Link to='/destination'> Book tour now</Link>
        </button>
      </div>
    </section>
  );
};

export default BookNowBanner;

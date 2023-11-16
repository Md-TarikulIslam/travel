import { useState } from "react";
import { toursCardData } from "../constant/dummyData";
import ToursCard from "./ToursCard";

const PopularTours = () => {
  const [toursData, setToursData] = useState(toursCardData);

   const popularCardData = toursData.filter(data => data.popularTour === true);

  return (
    <section className="max-width">
      <p className="text-[#2095ae] text-[13px] uppercase mb-1 tracking-[5px]">
        Choose your place
      </p>
      <h1 className="text-[45px] leading-[1.3em] font-bold text-[#0f2454] mb-5">
        POPULAR <span className="text-[#2095AE]">TOURS</span>
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 wrapper relative">
        {popularCardData.map((data) => <ToursCard key={data.id} data={data}></ToursCard>)}
      </div>
    </section>
  );
};

export default PopularTours;

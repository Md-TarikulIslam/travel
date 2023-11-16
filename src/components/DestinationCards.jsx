import { useState } from "react";
import { toursCardData } from "../constant/dummyData";
import ToursCard from "./ToursCard";

const DestinationCards = () => {
    const [toursData, setToursData] = useState(toursCardData);
  return (
    <section className="max-width">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 wrapper relative">
        {toursData.map((data) => (
          <ToursCard key={data.id} data={data}></ToursCard>
        ))}
      </div>
    </section>
  );
};

export default DestinationCards;

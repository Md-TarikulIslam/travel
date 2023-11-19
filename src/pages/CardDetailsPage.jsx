import { useState } from "react";
import { useParams } from "react-router-dom";
import DetailsBanner from "../components/DetailsBanner";
import { toursCardData } from "../constant/dummyData";
import { Timeline } from "@material-tailwind/react";
import { DefaultTimeline } from "../components/Timeline";
import CardDetails from "../components/CardDetails";

const CardDetailsPage = () => {
  const [toursData, setToursData] = useState(toursCardData);
  const { id } = useParams();

  const details = toursData.find((p) => p.country === id);
  return (
    <>
      <DetailsBanner details={details}/>
      <div className="pt-32 pb-20 px-4">
        <CardDetails details={details}/>
      </div>
    </>
  );
};

export default CardDetailsPage;

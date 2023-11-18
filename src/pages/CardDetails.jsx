import { useState } from "react";
import { useParams } from "react-router-dom";
import DetailsBanner from "../components/DetailsBanner";
import { toursCardData } from "../constant/dummyData";
import { Timeline } from "@material-tailwind/react";
import { DefaultTimeline } from "../components/Timeline";

const CardDetails = () => {
  const [toursData, setToursData] = useState(toursCardData);
  const { id } = useParams();

  const details = toursData.find((p) => p.country === id);
  return (
    <>
      <DetailsBanner details={details}/>
      <div className="h-[100vh] flex items-center justify-center bg-blue-600"></div>
    </>
  );
};

export default CardDetails;

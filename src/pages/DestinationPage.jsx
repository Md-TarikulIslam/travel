import BookNowBanner from "../components/BookNowBanner";
import DestinationBanner from "../components/DestinationBanner";
import DestinationCards from "../components/DestinationCards";
import Review from "../components/Review";

const DestinationPage = () => {
  return (
    <>
        <DestinationBanner />
      <div className="pt-32 pb-20 px-4 bg-[#f4f5f8]">
        <DestinationCards />
      </div>
      <BookNowBanner />
      <div className="py-40 px-4">
        <Review />
      </div>
    </>
  );
};

export default DestinationPage;

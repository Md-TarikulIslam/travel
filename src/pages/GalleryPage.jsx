import BookNowBanner from "../components/BookNowBanner";
import GalleryBanner from "../components/GalleryBanner";
import ImageGallery from "../components/ImageGallery";
import Review from "../components/Review";

const GalleryPage = () => {
  return (
    <>
      <GalleryBanner />
      <div className="my-32 px-4">
        <ImageGallery />
      </div>
      <BookNowBanner />
      <div className="py-40 px-4 bg-[#f4f5f8]">
        <Review />
      </div>
    </>
  );
};

export default GalleryPage;

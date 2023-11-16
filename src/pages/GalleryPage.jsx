import GalleryBanner from '../components/GalleryBanner';
import BookNowBanner from '../components/BookNowBanner';
import ImageGallery from '../components/ImageGallery';

const GalleryPage = () => {
    return (
        <>
           <GalleryBanner />
           <div className='my-32 px-4'>
            <ImageGallery />
           </div>
           <BookNowBanner />
        </>
    );
};

export default GalleryPage;
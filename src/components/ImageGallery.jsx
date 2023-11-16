import img1 from '../assets/images/tours/2.jpg'
import img3 from '../assets/images/tours/3.jpg'
import { default as img2, default as img4 } from '../assets/images/tours/4.jpg'
import img5 from '../assets/images/tours/5.jpg'

const ImageGallery = () => {
    return (
        <section className='max-width grid grid-cols-1 gap-8'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                <div className='flex-1 overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img1} alt="" />
                </div>
                <div className='flex-1 overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img2} alt="" />
                </div>
                <div className='flex-1 overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img3} alt="" />
                </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                <div className='flex-1 object-cover overflow-hidden bg-black'>
                <img className='hover:scale-110 scale-105 hover:opacity-90 duration-300' src={img4} alt="" />
                </div>
                <div className='grid md:grid-rows-2 grid-rows-1  gap-8'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                <div className='flex-1 overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img1} alt="" />
                </div>
                <div className='flex-1 overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img2} alt="" />
                </div>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                
                <div className='flex-1 overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img3} alt="" />
                </div>
            <div>
            <div className='flex-1 overflow-hidden bg-black'>
            <img className='hover:scale-105 hover:opacity-90 duration-300' src={img5} alt="" />
            </div>
            </div>
                </div>
                </div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                <div className='flex-1 overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img1} alt="" />
                </div>
                <div className='flex-1 overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img2} alt="" />
                </div>
                <div className='flex-1 overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img3} alt="" />
                </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
               <div className='flex-1 overflow-hidden bg-black'>
               <img className='hover:scale-105 hover:opacity-90 duration-300' src={img4} alt="" />
               </div>
                <div className='flex-1 overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img5} alt="" />
                </div>
            </div>
        </section>
    );
};

export default ImageGallery;
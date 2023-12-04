import img1 from '../assets/images/gallery/1.jpg'
import img2 from '../assets/images/gallery/2.jpg'
import img3 from '../assets/images/gallery/3.jpg'
import img4 from '../assets/images/gallery/4.jpg'
import img5 from '../assets/images/gallery/5.jpg'
import img6 from '../assets/images/gallery/6.jpg'
import img7 from '../assets/images/tours/1.jpg'
import img8 from '../assets/images/tours/2.jpg'
import img9 from '../assets/images/gallery/9.jpg'
import img10 from '../assets/images/tours/6.jpg'
import img11 from '../assets/images/gallery/11.jpg'
import img12 from '../assets/images/gallery/12.jpg'
import img13 from '../assets/images/gallery/13.jpg'
import img14 from '../assets/images/gallery/14.jpg'
import img15 from '../assets/images/gallery/15.jpg'
import img16 from '../assets/images/gallery/16.jpg'
import img17 from '../assets/images/gallery/17.jpg'
import img18 from '../assets/images/gallery/18.jpg'
import img19 from '../assets/images/tours/4.jpg'
import img20 from '../assets/images/tours/3.jpg'
const ImageGallery = () => {
    return (
        <section className='max-width grid grid-cols-1 gap-8'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                <div className='flex-1 max-h-[250px] overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img1} alt="" />
                </div>
                <div className='flex-1 max-h-[250px] overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img2} alt="" />
                </div>
                <div className='flex-1 max-h-[250px] overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img3} alt="" />
                </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
               <div className='flex-1 max-h-[400px] overflow-hidden bg-black'>
               <img className='hover:scale-105 hover:opacity-90 duration-300' src={img4} alt="" />
               </div>
                <div className='flex-1 max-h-[400px] overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img5} alt="" />
                </div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                <div className='flex-1 max-h-[250px] overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img6} alt="" />
                </div>
                <div className='flex-1 max-h-[250px] overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img7} alt="" />
                </div>
                <div className='flex-1 max-h-[250px] overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img8} alt="" />
                </div>
            </div>
            
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
               <div className='flex-1 max-h-[400px] overflow-hidden bg-black'>
               <img className='hover:scale-105 hover:opacity-90 duration-300' src={img9} alt="" />
               </div>
                <div className='flex-1 max-h-[400px] overflow-hidden bg-black'>
                <img className='hover:scale-110 scale-105 hover:opacity-90 duration-300' src={img10} alt="" />
                </div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                <div className='flex-1 max-h-[250px] overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img11} alt="" />
                </div>
                <div className='flex-1 max-h-[250px] overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img12} alt="" />
                </div>
                <div className='flex-1 max-h-[250px] overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img13} alt="" />
                </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
               <div className='flex-1 max-h-[400px] overflow-hidden bg-black'>
               <img className='hover:scale-105 hover:opacity-90 duration-300' src={img14} alt="" />
               </div>
                <div className='flex-1 max-h-[400px] overflow-hidden bg-black'>
                <img className='hover:scale-110 scale-105 hover:opacity-90 duration-300' src={img15} alt="" />
                </div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                <div className='flex-1 max-h-[250px] overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img16} alt="" />
                </div>
                <div className='flex-1 max-h-[250px] overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img17} alt="" />
                </div>
                <div className='flex-1 max-h-[250px] overflow-hidden bg-black'>
                <img className='hover:scale-105 hover:opacity-90 duration-300' src={img18} alt="" />
                </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
               <div className='flex-1 max-h-[400px] overflow-hidden bg-black'>
               <img className='hover:scale-105 hover:opacity-90 duration-300' src={img19} alt="" />
               </div>
                <div className='flex-1 max-h-[400px] overflow-hidden bg-black'>
                <img className='hover:scale-110 scale-105 hover:opacity-90 duration-300' src={img20} alt="" />
                </div>
            </div>
        </section>
    );
};

export default ImageGallery;
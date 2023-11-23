import img from '../assets/images/banner/DiscoverImg.jpg'

import {MdDone} from 'react-icons/md';
import {FiPhoneCall} from 'react-icons/fi';

const DiscoverWorld = () => {
    return (
        <div className="flex-col md:flex-row flex items-center max-width">
            <div className='md:w-[60%]  md:mr-28 md:mb-0 mb-12'>
                <p className='text-[#2095AE] text-[13px] mb-1 tracking-widest'>THE BEST TRAVEL AGENCY</p>
                <h1 className=' text-[45px] font-bold text-[#0f2454] uppercase mb-5  leading-tight'>DISCOVER <span className='text-[#2095AE]'>Patagonia</span> WITH OUR GUIDE</h1>
                <p className='text-[16px] leading-7 mb-5 text-[#676977]'>Welcome to Patagonia Explore, where your dream adventure begins! We specialize in crafting personalized journeys through the stunning landscapes of Patagonia. Whether you crave thrilling hikes or serene cruises or want to soak in the breathtaking scenery, we've got you covered. Our team of experts is dedicated to creating seamless, unforgettable experiences. From cozy lodges to exciting excursions, we handle the details so you can focus on making memories.</p>
                <p className=' text-[16px] leading-7 mb-5 text-[#676977]'>
Discover the wonders of Patagonia with us — your gateway to nature's grandeur and unparalleled adventures. Let's turn your travel dreams into reality!</p>
                <p className='flex items-center text-[#676977] mb-2'><MdDone className='text-white mr-4 h-8 w-8 bg-[#2095ae] rounded-full px-2 py-2'/>10 Years of Experience</p>
                <p className='flex items-center text-[#676977] mb-7'><MdDone className='text-white mr-4 h-8 w-8 bg-[#2095ae] rounded-full px-2 py-2'/>30+ Tour Destinations</p>
                <div className='flex items-center'>
                    <FiPhoneCall className='text-[#2095ae] text-4xl mr-4'/>
                    <p className='text-[#676977]'>For information <br />
                    <a href="tel:2124707727" className='text-[#2095ae] text-2xl'>2124707727</a></p>
                </div>
            </div>
           <div className='relative img-box pr-7 pb-7 pl-3 md:w-[50%]'>
            <img src={img} alt="" className='w-[100%] img'/>
           </div>
        </div>
    );
};

export default DiscoverWorld;
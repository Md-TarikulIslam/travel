import img from '../assets/images/banner/DiscoverImg.jpg'

import {MdDone} from 'react-icons/md';
import {FiPhoneCall} from 'react-icons/fi';

const DiscoverWorld = () => {
    return (
        <div className="flex-col md:flex-row flex items-center max-width">
            <div className='md:w-[60%]  md:mr-28 mr-0'>
                <p className='text-[#2095AE] text-[13px] mb-1 tracking-widest'>THE BEST TRAVEL AGENCY</p>
                <h1 className=' text-[45px] font-bold text-[#0f2454] uppercase mb-5  leading-tight w-[80%]'>DISCOVER THE <span className='text-[#2095AE]'>WORLD</span> WITH OUR GUIDE</h1>
                <p className='text-[16px] leading-7 mb-5 text-[#676977]'>You can choose any country with good tourism. Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.</p>
                <p className=' text-[16px] leading-7 mb-5 text-[#676977]'>Hotel ut nisl quam nestibulum ac quam nec odio elementum ceisue the miss varius natoque penatibus et magnis dis parturient monte</p>
                <p className='flex items-center text-[#676977] mb-2'><MdDone className='text-white mr-4 h-8 w-8 bg-[#2095ae] rounded-full px-2 py-2'/>2 Years of Experience</p>
                <p className='flex items-center text-[#676977] mb-7'><MdDone className='text-white mr-4 h-8 w-8 bg-[#2095ae] rounded-full px-2 py-2'/>30+ Tour Destinations</p>
                <div className='flex items-center'>
                    <FiPhoneCall className='text-[#2095ae] text-4xl mr-4'/>
                    <p className='text-[#676977]'>For information <br />
                    <a href="tel:2124707727" className='text-[#2095ae] text-2xl'>2124707727</a></p>
                </div>
            </div>
           <div className='relative img pr-7 pb-7 pl-3 '>
            <img src={img} alt="" className='h-[70vh] imgs'/>
           </div>
        </div>
    );
};

export default DiscoverWorld;
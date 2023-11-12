import img from '../assets/images/banner/1.jpeg'


const Banner = () => {
    return (
        <div className='relative bg-black'>
            <img className='h-[100vh] w-full object-cover opacity-70' src={img} alt="Banner Image" />
            <div className='absolute top-0 flex justify-center items-center text-white flex-col h-full w-full px-0'>
                <p className='sm:text-[13px] text-[10px] uppercase tracking-6 mb-2'>Let's travel the world with us</p>
                <p className='text-4xl md:text-5xl lg:text-[65px] text-center leading-normal font-bold lg:leading-normal tracking-2 uppercase Kaushan'>Explore Patagonia With <br /> <span className='stroke '>Patagonia Explore</span></p>
            </div>
            
        </div>
    )
}

export default Banner
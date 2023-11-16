import img from '../assets/images/banner/1.jpg'


const Banner = () => {
    return (
        <div className='relative bg-black'>
            <img className='h-[100vh] w-full object-cover opacity-70' src={img} alt="Banner Image" />
            <div className='absolute top-0 flex justify-center items-center text-white flex-col h-full w-full px-0'>
                <p className='sm:text-[13px] text-[10px] uppercase tracking-6 mb-1'>Let's travel the world with us</p>
                <h1 className='text-4xl md:text-5xl lg:text-[70px] text-center leading-normal font-bold lg:leading-tight tracking-2 Kaushan'>Explore Patagonia With <br /> <span className='stroke'>Patagonia Explore</span></h1>
            </div>
            
        </div>
    )
}

export default Banner
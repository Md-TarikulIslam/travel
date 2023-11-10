import img from '../assets/images/banner/1.jpeg'


const Banner = () => {
    return (
        <div className='relative bg-black'>
            <img className='h-[44rem] w-full object-cover opacity-70' src={img} alt="" />
            <div className='absolute top-0 flex justify-center items-center text-white flex-col h-full w-full px-0'>
                <p className='text-xl uppercase'>Let's travel the world</p>
                <p className='text-4xl md:text-5xl lg:text-6xl text-center leading-normal font-bold lg:leading-normal tracking-widest uppercase'>Explore Patagonia With <br /> <span className='stroke'>Patagonia Explore</span></p>
            </div>
            
        </div>
    )
}

export default Banner
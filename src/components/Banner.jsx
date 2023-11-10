import img from '../assets/images/banner/1.jpeg'


const Banner = () => {
    return (
        <div className='relative'>
            <img className='h-[44rem] w-full object-cover' src={img} alt="" />
            <div className='absolute top-0 flex justify-center items-center flex-col h-full w-full px-0'>
                <p className='text-xl'>Let's travel the world</p>
                <p className='text-4xl md:text-5xl lg:text-6xl text-center leading-normal font-bold lg:leading-normal tracking-widest'>Explore Patagonia With <br /> <span className='stroke'>Patagonia Explore</span></p>
            </div>
        </div>
    )
}

export default Banner
import img from '../assets/images/travel/1.jpg'
const ToursCard = () => {
    return (
        <section className='max-width'>
            <p className='text-[#2095ae] text-[13px] uppercase mb-1 tracking-[5px]'>Choose your place</p>
            <h1 className='text-[45px] leading-[1.3em] font-bold text-[#0f2454] mb-5'>POPULAR <span className='text-[#2095AE]'>TOURS</span></h1>
            <div className='grid grid-cols-3'>
                <div className='flex items-center relative'>
                <img className='min-w-[500px]' src={img} alt="" width={500}/>
                <h2 className='bg-[#0f2454] text-white absolute -rotate-90 px-2 py-1'>Patagonia</h2>
                </div>
            </div>
        </section>
    );
};

export default ToursCard;
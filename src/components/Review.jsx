import { Card, CardBody, Carousel } from '@material-tailwind/react'
import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdStarRate } from 'react-icons/md'
import img from '../assets/images/review/1.jpeg'

const Review = () => {
   
    return (
        <div className='max-w-screen-xl mx-auto bg-[#19c3c2] h-[600px] lg:h-96 relative'>
            <div className='flex lg:flex-row flex-col'>
                <div className='flex-1 absolute -top-20 lg:left-16 lg:mx-0 mx-auto w-full'>
                    <Card className=' rounded-none h-80 lg:w-[28rem] w-[20rem] mx-auto lg:mx-0'>
                        <CardBody className='p-0'>
                            <img className='h-80 w-full object-cover' src="https://img.freepik.com/premium-photo/portrait-beautiful-indian-village-woman_987694-109.jpg" alt="" />
                        </CardBody>
                    </Card>
                </div>
                <div className='flex-1 absolute -bottom-16 z-10  lg:right-[32rem] mx-auto lg:mx-0 w-full md:w-0'>
                    <Card className='rounded-none h-[400px] lg:h-80 lg:w-[28rem] w-[20rem] mx-auto lg:mx-0 p-4'>
                        <CardBody>
                            <Carousel className="rounded-none overflow-hidden lg:h-60 " nextArrow={false} prevArrow={false} navigation={false} loop={true} autoplay={true} autoplayDelay={2000}>
                                <div>
                                    <p className='uppercase tracking-widest font-bold text-2xl'>Top reviews </p>
                                    <p className='font-bold text-lg mt-4'> Colorful India</p>
                                    <div className='flex items-center gap-1 text-[#19c3c2]'>

                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                    </div>
                                    <p className='text-sm my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At reprehenderit impedit, sed voluptate autem nesciunt cum sunt minus voluptatibus ipsa voluptatum suscipit repellat </p>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-4'>
                                            <img className='w-14 h-14 rounded-full ' src={img} alt="" />
                                            <p className='font-semibold '>Avishek Kumar</p>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <p className='uppercase tracking-widest font-bold text-2xl'>Top reviews </p>
                                    <p className='font-bold text-lg mt-4'> Colorful India</p>
                                    <div className='flex items-center gap-1 text-[#19c3c2]'>

                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                    </div>
                                    <p className='text-sm my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At reprehenderit impedit, sed voluptate autem nesciunt cum sunt minus voluptatibus ipsa voluptatum suscipit repellat </p>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-4'>
                                            <img className='w-14 h-14 rounded-full' src={img} alt="" />
                                            <p className='font-semibold'>Avishek Kumar</p>
                                        </div>

                                    </div>
                                </div>
                            </Carousel>
                            
                        </CardBody>
                    </Card>
                </div>
            </div>


        </div>
    )
}

export default Review
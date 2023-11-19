import { Card, CardBody, Carousel } from '@material-tailwind/react'
import {  MdStarRate } from 'react-icons/md'
import img from '../assets/images/review/1.jpeg'

const allData =[
    {
        title:'Colorful India',
        rating:[
            {
                rate: <MdStarRate />
            },
            {
                rate: <MdStarRate />
            },
            {
                rate: <MdStarRate />
            },
            {
                rate: <MdStarRate />
            },
            {
                rate: <MdStarRate />
            },
        ],
        details:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. At reprehenderit impedit, sed voluptate autem nesciunt cum sunt minus voluptatibus ipsa voluptatum suscipit repellat",
        name:"Avishek Kumar",
        img:img
    },
    {
        title:'Colorful India',
        rating:[
            {
                rate: <MdStarRate />
            },
            {
                rate: <MdStarRate />
            },
            {
                rate: <MdStarRate />
            },
            {
                rate: <MdStarRate />
            },
            {
                rate: <MdStarRate />
            },
        ],
        details:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. At reprehenderit impedit, sed voluptate autem nesciunt cum sunt minus voluptatibus ipsa voluptatum suscipit repellat",
        name:"Avishek Kumar",
        img:img
    },
]

const  Review = () => {
   
    return (
        <div className='max-w-screen-xl mx-auto bg-[#19c3c2] h-[600px] lg:h-96 relative'>
            <div className='flex lg:flex-row flex-col'>
                <div className='flex-1 absolute -top-20 md:right-40 lg:left-16 lg:mx-0 mx-auto w-full'>
                    <Card className=' rounded-none h-80 lg:w-[28rem] w-[20rem] mx-auto lg:mx-0'>
                        <CardBody className='p-0'>
                        <iframe className='w-full h-80' src="https://www.youtube.com/embed/WRdmk9799Y4?si=Gz2hPK8W8I_3ZCrI" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  
                        </CardBody>
                    </Card>
                </div>
                <div className='flex-1 absolute -bottom-16 z-10 md:right-[24rem] lg:right-[32rem] mx-auto lg:mx-0 w-full md:w-0'>
                    <Card className='rounded-none h-[400px] lg:h-80 lg:w-[28rem] w-[20rem] mx-auto lg:mx-0 p-4'>
                        <CardBody>
                              <div>
                            <Carousel className="rounded-none overflow-hidden lg:h-80 " nextArrow={false} prevArrow={false} navigation={false} loop={true} autoplay={true} autoplayDelay={2000}>
                                {
                                    allData.map((data, index)=>{
                                        return(
                                            <div key={index+1}>
                                    <p className='uppercase tracking-widest font-bold text-2xl'>Top reviews </p>
                                    <p className='font-bold text-lg mt-4'> {data.title}</p>
                                    <div className='flex items-center gap-1 text-[#19c3c2]'>
                                        {
                                            data.rating.map((d, idx)=>{
                                                return(
                                                    <div key={idx+1}>
                                                            <p>{d.rate}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className='text-sm my-4'>{data.details} </p>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-4'>
                                            <img className='w-12 h-12 rounded-full ' src={data.img} alt="" />
                                            <p className='font-semibold '>{data.name}</p>
                                        </div>

                                    </div>

                                            </div>
                                        )
                                    })
                                }
                                  </Carousel>
                              </div>
                        </CardBody>
                    </Card>
                </div>
            </div>


        </div>
    )
}

export default Review;
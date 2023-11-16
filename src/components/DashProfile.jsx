import React from 'react'
import img from '../assets/images/dash-profile/1.jpeg'
import { Card, CardBody } from '@material-tailwind/react'

const DashProfile = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row px-2 lg:px-0 items-center gap-4'>
                <div className='basis-5/12 w-full'>
                    <img className='rounded-2xl drop-shadow-2xl h-72 w-full object-cover' src={img} alt="" />
                </div>
                <div className='basis-7/12 w-full'>
                    <Card className='w-full h-72 flex flex-col justify-center items-center drop-shadow-xl rounded-2xl'>
                        <CardBody>
                            <div className=' h-full w-full '>

                                <p className='font-bold'>Name: <span className='text-[#eb7315]'>Walter white</span></p>
                                <p className='font-bold'>Phone: <span className='text-[#eb7315]'>2652621656</span></p>
                                <p className='font-bold'>Email: <span className='text-[#eb7315]'>white@gmail.com</span></p>
                                <p className='font-bold'>Address: <span className='text-[#eb7315]'>Dhaka, Bangladesh</span></p>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default DashProfile
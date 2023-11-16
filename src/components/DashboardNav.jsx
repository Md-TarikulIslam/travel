import { Card, CardBody } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import img from "../assets/images/destination/destination.jpg";


const DashboardNav = () => {
  return (
    <div className=''>
      <div className="relative bg-black">
        <div className=" bg_overlay">
          <img
            className="h-[60vh] w-full object-cover opacity-100"
            src={img}
            alt="Banner Image"
          />
        </div>
        <div className=" absolute z-10 top-48 2xl:left-52 text-white  px-4">
          <p className="text-[13px] uppercase mb-1 tracking-[5px]">
            All details
          </p>
          <h1 className="md:text-[48px] text-[40px] leading-[1.3em] font-bold mb-5 Kaushan">
            <span className="text-[#2095AE]">Dashboard</span>
          </h1>
        </div>

      </div>
      <div className='max-w-screen-md mx-auto '>
        <div className='flex px-2 lg:px-0  items-center lg:gap-4 justify-between py-10 '>
          <div>
            <Link to='/dashboard/profile'>
              <Card className='w-32 lg:w-56 h-20 flex items-center justify-center bg-[#1d355e]'>
                <CardBody>
                  <p className='text-white font-bold tracking-widest'>Profile</p>
                </CardBody>
              </Card>
            </Link>
          </div>
          <div>
            <Link to='/dashboard/transaction'>
              <Card className='w-32 lg:w-56 h-20 flex items-center justify-center bg-[#1d355e]'>
                <CardBody>
                  <p className='text-white font-bold tracking-widest'>Transaction</p>
                </CardBody>
              </Card>
            </Link>
          </div>
          <div>
            <Link to='/dashboard/users'>
              <Card className='w-32 lg:w-56 h-20 flex items-center justify-center bg-[#1d355e]'>
                <CardBody>
                  <p className='text-white font-bold tracking-widest'>Users</p>
                </CardBody>
              </Card>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default DashboardNav
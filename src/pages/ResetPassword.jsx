import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase.init';
import { sendPasswordResetEmail } from 'firebase/auth';

function ResetPassword() {

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const emalVal = e.target.email.value;
    sendPasswordResetEmail(auth, emalVal).then(data => {
      alert("Check your gmail")
      history("/")
    }).catch(err => {
      alert(err.code)
    })
  }

  return (
    <div className=" h-80 w-full lg:w-1/2 mx-auto mt-40">
      <h1 className='text-center text-gray-800 font-semibold text-xl'>Forgot Password</h1>
      <form onSubmit={(e) => handleSubmit(e)} className='w-full lg:w-3/4 mx-auto'>
        <div className=' bg-gray-500 p-6 rounded-xl'>
          <input className=' border border-gray-300 w-full py-2 rounded-lg px-2' name="email" placeholder='Enter Email' />
          <button className='text-white text-[12px] py-2.5 px-11 border border-white rounded-lg font-semibold tracking-[0.5px] uppercase mt-2.5 cursor-pointer bg-[#512da8] w-full'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ResetPassword
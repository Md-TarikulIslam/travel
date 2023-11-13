import { useState } from "react";

const LoginPage = () => {
    const [isContainerActive, setIsContainerActive] = useState(false);
  const signUpButton = () => {
     setIsContainerActive(true);
  };  
  const signInButton = () => {
     setIsContainerActive(false);
  };
  return (
    <section className="flex justify-center items-center h-[100vh] bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff]">
      <div className={`container bg-white rounded-[30px] shadow-lg relative overflow-hidden w-[768px] max-w-full min-h-[480px] mx-4 ${isContainerActive ? 'active' : ''} `}>
        <div className="absolute top-0 h-full transition-all duration-500 left-0 w-[50%] opacity-0 z-[1] form-container  sign-up">
          <form className="bg-white flex items-center justify-center flex-col sm:px-10 px-5 h-full">
            <h1 className="text-3xl font-semibold">Create Account</h1>
            <div className="social-icons my-5">
              <a href="#" className="text-[#333] text-[13px] mt-3.5 mb-2.5 border border-[#ccc] rounded-[20%] inline-flex justify-center items-center mx-1 w-10 h-10">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="text-[#333] text-[13px] mt-3.5 mb-2.5 border border-[#ccc] rounded-[20%] inline-flex justify-center items-center mx-1 w-10 h-10">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              
              <a href="#" className="text-[#333] text-[13px] mt-3.5 mb-2.5 border border-[#ccc] rounded-[20%] inline-flex justify-center items-center mx-1 w-10 h-10">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span className="text-[12px]">or use your email for registeration</span>
            <input className='bg-[#eee] border-none my-2 py-2.5 px-3.5 text-[13px] rounded-lg w-full outline-none' type="text" placeholder="Name" />
            <input className='bg-[#eee] border-none my-2 py-2.5 px-3.5 text-[13px] rounded-lg w-full outline-none' type="email" placeholder="Email" />
            <input className='bg-[#eee] border-none my-2 py-2.5 px-3.5 text-[13px] rounded-lg w-full outline-none' type="password" placeholder="Password" />
            <button className=' bg-[#512da8] text-white text-[12px] py-2.5 px-11 border border-transparent rounded-lg font-semibold tracking-[0.5px] uppercase mt-2.5 cursor-pointer'>Sign Up</button>
          </form>
        </div>
        <div className="absolute top-0 h-full transition-all duration-500 left-0 w-[50%] z-[2] sign-in form-container">
          <form className="bg-white flex items-center justify-center flex-col sm:px-10 px-5 h-full">
            <h1 className="text-3xl font-semibold">Sign In</h1>
            <div className="social-icons my-5">
              <a href="#" className="text-[#333] text-[13px] mt-3.5 mb-2.5 border border-[#ccc] rounded-[20%] inline-flex justify-center items-center mx-1 w-10 h-10">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="text-[#333] text-[13px] mt-3.5 mb-2.5 border border-[#ccc] rounded-[20%] inline-flex justify-center items-center mx-1 w-10 h-10">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              
              <a href="#" className="text-[#333] text-[13px] mt-3.5 mb-2.5 border border-[#ccc] rounded-[20%] inline-flex justify-center items-center mx-1 w-10 h-10">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span className="text-[12px]">or use your email password</span>
            <input className='bg-[#eee] border-none my-2 py-2.5 px-3.5 text-[13px] rounded-lg w-full outline-none' type="email" placeholder="Email" />
            <input className='bg-[#eee] border-none my-2 py-2.5 px-3.5 text-[13px] rounded-lg w-full outline-none' type="password" placeholder="Password" />
            <a href="#">Forget Your Password?</a>
            <button className=' bg-[#512da8] text-white text-[12px] py-2.5 px-11 border border-transparent rounded-lg font-semibold tracking-[0.5px] uppercase mt-2.5 cursor-pointer'>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
            <div className="toggle bg-[#512da8] h-full bg-gradient-to-r from-[#5c6bc0] to-[#512da8] text-white relative -left-[100%] w-[200%] translate-x-0 transition-all ">
            <div className="toggle-panel toggle-left">
              <h1 className="text-3xl font-semibold">Welcome Back!</h1>
              <p className="text-sm leading-5 tracking-[0.3px] my-5">Enter your personal details to use all of site features</p>
              <button onClick={signInButton} className="text-white text-[12px] py-2.5 px-11 border border-white rounded-lg font-semibold tracking-[0.5px] uppercase mt-2.5 cursor-pointer bg-transparent" id="login">
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1 className="text-3xl font-semibold">Hello, Friend!</h1>
              <p className="text-sm leading-5 tracking-[0.3px] my-5">
                Register with your personal details to use all of site features
              </p>
              <button onClick={signUpButton} className="text-white text-[12px] py-2.5 px-11 border border-white rounded-lg font-semibold tracking-[0.5px] uppercase mt-2.5 cursor-pointer bg-transparent" id="register">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

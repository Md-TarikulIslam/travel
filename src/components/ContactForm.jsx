import { useRef } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_w96fgt6",
                "template_so14d2a",
                form.current,
                "BLPqusEbb6X8NTOVp"
            )
            .then(
                (result) => {
                    toast.success("Successful");
                    e.target.reset();
                },
                (error) => {
                    toast.error("Unsuccessful, Try again");
                }
            );
    };
    return (
        <section className="max-width flex flex-col lg:flex-row">
            <div>
                <h2 className="text-[#0f2454] mb-5 text-[28px] font-semibold tracking-wide">Patagonia Expeditions Inc.</h2>
                <p className="text-[16px] text-[#676977] mb-5 w-[90%] text-justify">We welcome the opportunity to hear from you, whether it be for questions or comments about our services. So please feel free to fill out our contact form.</p>
                <p className="text-[16px] text-[#676977] mb-5 w-[90%] text-justify">All emails are answered within the shortest time possible. We look forward to hearing from you!</p>
                <div className='flex items-center mb-8'>
                    <FiPhoneCall className='text-[#2095ae] text-4xl mr-4' />
                    <p className='text-[#676977]'>Phone <br />
                        <a href="tel:2124707727" className='text-[#2095ae] text-2xl'>2124707727</a></p>
                </div>
                <div className='flex items-center mb-8'>
                    <TfiEmail className='text-[#2095ae] text-4xl mr-4' />
                    <p className='text-[#676977]'>e-Mail Address <br />
                        <a href="mailto:patagoniaexpeditionss@gmail.com" className='text-[#2095ae] text-lg sm:text-xl'>patagoniaexpeditionss@gmail.com</a></p>
                </div>
                <div className='flex items-center mb-12'>
                    <SlLocationPin className='text-[#2095ae] text-4xl mr-4' />
                    <p className='text-[#676977]'>Location <br />
                        <a href="#" className='text-[#2095ae] sm:text-xl text-lg'>New York, USA</a></p>
                </div>
            </div>
            <div className="lg:w-[60%] w-full">
                <h1 className="text-center bg-[#2095ae] text-white h-20 text-[27px] font-semibold leading-[80px]">Get in touch</h1>
                <form className="bg-[#f4f5f8] px-6 py-11" ref={form} onSubmit={handleSubmit}>
                    <div className="md:flex">
                        <input name="name" className="outline-none p-5  mb-6 mr-5 w-full border-none text-[16px] text-[#676977]" type="text" placeholder="Your Name *" required />
                        <input className="outline-none p-5 mb-6 border-none text-[16px] w-full text-[#676977]" type="email" name="email" id="" placeholder="Your Email *" required />
                    </div>
                    <input className="outline-none p-5 block border-none text-[16px] w-full mb-6 text-[#676977]" name="subject" type="text" placeholder="Subject *" required />
                    <textarea name='message' className="outline-none block w-full resize-non overflow-hidden p-5  border-none text-[16px] text-[#676977] mb-6" placeholder="Message*" cols={20} rows={4} ></textarea>
                    <button type="submit" className="px-5 py-3  bg-[#2095ae] hover:bg-white hover:text-[#2095ae] text-white duration-300 border border-transparent hover:border-[#2095ae]">
                        Send Message
                    </button>
                </form>

            </div>
        </section>
    );
};

export default ContactForm;
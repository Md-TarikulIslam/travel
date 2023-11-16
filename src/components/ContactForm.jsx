import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

const ContactForm = () => {
    return (
        <section className="max-width flex flex-col lg:flex-row">
            <div>
                <h2 className="text-[#0f2454] mb-5 text-[28px] font-semibold tracking-wide">Travel Agency Inc.</h2>
                <p className="text-[16px] text-[#676977] mb-5 w-[80%]">Travel duru nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.</p>
                <div className='flex items-center mb-8'>
                    <FiPhoneCall className='text-[#2095ae] text-4xl mr-4'/>
                    <p className='text-[#676977]'>Phone <br />
                    <a href="tel:2124707727" className='text-[#2095ae] text-2xl'>2124707727</a></p>
                </div>
                <div className='flex items-center mb-8'>
                    <TfiEmail className='text-[#2095ae] text-4xl mr-4'/>
                    <p className='text-[#676977]'>e-Mail Address <br />
                    <a href="mailto:email@example.com" className='text-[#2095ae] text-2xl'>info@travelagency.com</a></p>
                </div>
                <div className='flex items-center mb-12'>
                    <SlLocationPin className='text-[#2095ae] text-4xl mr-4'/>
                    <p className='text-[#676977]'>Location <br />
                    <a href="#" className='text-[#2095ae] text-xl'>New York, USA</a></p>
                </div>
            </div>
            <div className="w-full">
                <h1 className="text-center bg-[#2095ae] text-white h-20 text-[27px] font-semibold leading-[80px]">Get in touch</h1>
                <form className="bg-[#f4f5f8] px-6 py-11">
                    <div className="md:flex">
                        <input className="outline-none p-5  mb-6 mr-5 w-full border-none text-[16px] text-[#676977]" type="text" placeholder="Your Name *" />
                        <input className="outline-none p-5 mb-6 border-none text-[16px] w-full text-[#676977]" type="email" name="" id="" placeholder="Your Email *"/>
                    </div>
                    <input className="outline-none p-5 block border-none text-[16px] w-full mb-6 text-[#676977]" type="text" placeholder="Subject *"/>
                    <textarea className="outline-none block w-full resize-non overflow-hidden p-5  border-none text-[16px] text-[#676977] mb-6" placeholder="Message*" cols={20} rows={4} ></textarea>
                    <button className="px-5 py-3 bg-[#2095ae] hover:bg-white hover:text-[#2095ae] text-white duration-300 border border-transparent hover:border-[#2095ae]">
                        <Link href="#">Send Message</Link>
                    </button>
                </form>

            </div>
        </section>
    );
};

export default ContactForm;
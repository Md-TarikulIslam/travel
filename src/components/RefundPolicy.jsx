import img from "../assets/images/destination/destination.jpg";

const RefundPolicy = () => {
  return (
    <section>
      <div className="relative bg-black ">
        <div className=" bg_overlay">
          <img
            className="h-[60vh] w-full object-cover opacity-100"
            src={img}
            alt="Banner Image"
          />
        </div>
        <div className=" absolute z-10 top-48 2xl:left-52 text-white  px-4">
          <p className="text-[13px] uppercase mb-1 tracking-[5px]">
            Read The Policy
          </p>
          <h1 className="md:text-[48px] text-[40px] leading-[1.3em] font-bold mb-5">
            Refund <span className="text-[#2095AE]">Policy</span>
          </h1>
        </div>
      </div>
      <div className="max-width my-20 px-4">
        <div className="md:w-[80%] text-justify">
        <h1 className="text-3xl font-semibold text-[#2095AE] mb-5">Refund Policy</h1>
        <p className="text-[#4f5d6e] mb-5 text-[17px]">Payment for the tour is a fundamental part of the tour’s income and contributes to the overall cost of equipment, running costs, staffing, administration, etc. As the Company will have incurred the majority of its costs before the tour starts, we need to impose cancellation charges to cover these costs.</p>
        <ul className="text-[#4f5d6e] mb-5">
            <h3 className="mb-3 text-[17px]">Deposits are non-refundable. If you cancel your booking, we will impose cancellation charges as follows:</h3>
            <li className=" list-disc ml-8 text-[17px]">30 days or more prior to departure – loss of deposit</li>
            <li className=" list-disc ml-8 text-[17px]">15-29 days before departure – 30% of tour cost*</li>
            <li className=" list-disc ml-8 text-[17px]">7-14 days before departure – 50% of tour cost*</li>
            <li className=" list-disc ml-8 text-[17px]">6 or fewer days before departure – 80% of tour cost*</li>
            <li className=" list-disc ml-8">48 hours or fewer before departure – 100% of tour cost*</li>
        </ul>
        <p className="text-[#4f5d6e] mb-5 text-[17px]">Tailor-made tours may be subject to alternative cancellation terms, which will be communicated to applicable Clients at the time of booking.</p>
        <p className="text-[#4f5d6e] mb-5 text-[17px]">All cancellations must be in writing and be made by the person who submitted the booking form. Please send an email to your contact at the Company, with a copy to info@advantour.com.</p>
        <p className="text-[#4f5d6e] mb-5 text-[17px]">Once the tour has started, no refund for any unused portion or part of the tour or services to be provided will be given. If you want to make any changes to the tour, or depart the tour early, such alteration or departure will be entirely at your own expense and liability. You will also need to communicate in writing to the tour operator your reason for leaving the tour. </p>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;

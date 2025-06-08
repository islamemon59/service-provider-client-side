import React from "react";
import { IoMdCall } from "react-icons/io";

const ContactSection = () => {
  return (
    <div className=" flex justify-between md:flex-row flex-col gap-10 px-4">
      <div className="flex flex-col justify-center gap-3">
        <h1 className="md:text-[26px] text-2xl font-semibold md:text-start text-center">Have Questions? We’ve Got Answers, 24/7 Customer Support</h1>
        <div className="flex items-center md:flex-row flex-col gap-3">
            <button className="btn btn-primary md:text-xl text-lg py-6">Contact with us</button>
            <button className="btn btn-primary md:text-xl text-lg py-6 md:px-14 px-11 btn-outline"><IoMdCall />16555</button>
        </div>
      </div>
      <div>
        <img
          src="https://i.ibb.co/jPxVSdBC/customer-service-representative-muslim-woman-hijab-working-computer-721969-5436-removebg-preview.png"
          alt="customer-care"
        />
      </div>
    </div>
  );
};

export default ContactSection;

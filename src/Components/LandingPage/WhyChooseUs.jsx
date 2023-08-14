import React from "react";
import Pill from "../Pill";
import { SlBadge } from "react-icons/sl";
import { FaSackDollar, FaPeopleArrows } from "react-icons/fa6";
import { BiSolidTimer } from "react-icons/bi";

const WhyChooseUs = () => {
  return (
    <div className="w-screen h-full px-[16px] md:px-[50px] py-[40px] md:py-[100px]">
      <div className="container mx-auto">
        <div>
          <Pill>Why Choose us</Pill>
          <div className=" flex flex-col md:flex-row md:justify-between items-center mb-6">
            <h4 className="text-darkBlue text-[32px] md:text-[45px] font-semibold font-outfit w-full md:w-2/5">
              Benefits You Get When You Use Our Services
            </h4>
            <div className="w-full md:w-1/3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
              cupiditate mollitia repellendus inventore labore quaerat, natus
              enim dicta. Tempore, quod inventore. Autem impedit voluptates
              praesentium velit? Doloremque dolorem alias dolor.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center my-10">
            <div className="h-[250px] bg-white rounded-[12px] p-4 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
              <div
                className={`w-[60px] h-[45px] rounded-[8px] flex justify-center items-center text-[18px] mb-7 text-green bg-green/20`}>
                <SlBadge />
              </div>
              <h4 className="text-[18px] font-bold font-montserrat text-darkBlue mb-3">
                Certified Mentorship
              </h4>
              <p className="font-raleway text-[15px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam magni architecto, sapiente consequatur aperiam
                exexpedita.
              </p>
            </div>
            <div className="h-[250px] bg-white rounded-[12px] p-4 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
              <div
                className={`w-[60px] h-[45px] rounded-[8px] flex justify-center items-center text-[18px] mb-7 text-[#0197F6] bg-[#0197F6]/20`}>
                <BiSolidTimer />
              </div>
              <h4 className="text-[18px] font-bold font-montserrat text-darkBlue mb-3">
                24/7 Tutor Availability"
              </h4>
              <p className="font-raleway text-[15px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam magni architecto, sapiente consequatur aperiam
                exexpedita.
              </p>
            </div>
            <div className="h-[250px] bg-white rounded-[12px] p-4 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
              <div
                className={`w-[60px] h-[45px] rounded-[8px] flex justify-center items-center text-[18px] mb-7 text-green bg-green/20`}>
                <FaSackDollar />
              </div>
              <h4 className="text-[18px] font-bold font-montserrat text-darkBlue mb-3">
                Affordable Prices
              </h4>
              <p className="font-raleway text-[15px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam magni architecto, sapiente consequatur aperiam
                exexpedita.
              </p>
            </div>
            <div className="h-[250px] bg-white rounded-[12px] p-4 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
              <div
                className={`w-[60px] h-[45px] rounded-[8px] flex justify-center items-center text-[18px] mb-7 text-[#6A0DAD] bg-[#6A0DAD]/20`}>
                <FaPeopleArrows />
              </div>
              <h4 className="text-[18px] font-bold font-montserrat text-darkBlue mb-3">
                Peer-Peer Coding
              </h4>
              <p className="font-raleway text-[15px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam magni architecto, sapiente consequatur aperiam
                exexpedita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

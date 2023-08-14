import React from "react";
import { HiEnvelope } from "react-icons/hi2";

const WaitingList = () => {
  return (
    <div className="w-screen h-full px-[16px] md:px-[50px] py-6 md:py-[100px]">
      <div className="container mx-auto">
        <div className="w-full md:w-[90%] mx-auto h-full bg-green rounded-[30px] py-[50px] md:py-[100px]">
          <h2 className="font-semibold text-white text-center text-[28px] md:text-[45px] font-outfit mb-3">
            Get Started with <span className="text-yellow mx-2">DevChamp</span>{" "}
            Now!
          </h2>
          <p className="text-center font-raleway text-white text-[13px] md:base font-medium  mb-10">
            Join our waiting list and get early updates and info
          </p>
          <div className="group ">
            <div className="input-wrapper relative group border border-solid border-white rounded-full h-full p-1 w-[90%] md:w-[70%] mx-auto flex box-border transition-all group-focus-within:border-[2px]">
              <div className="flex w-[30px] md:w-[50px] h-[30px] md:h-[50px] rounded-full bg-yellow/50 text-[14px] md:text-[20px] justify-center items-center text-yellow">
                <HiEnvelope />
              </div>
              <input
                type="email"
                name="email"
                className="flex-grow bg-transparent focus:outline-0 pl-4 text-white font-semibold placeholder:text-white/75 text-[12px] md:text-base"
                placeholder="yourmail@example.com"
              />
              <div className="w-[140px] md:w-[180px] bg-darkBlue rounded-full text-white font-semibold font-outfit flex justify-center items-center cursor-pointer">
                Save
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingList;

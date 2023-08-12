import React from "react";
import { FaPhoneVolume, FaWhatsapp, FaRegEnvelope } from "react-icons/fa6";

const GetInTouch = () => {
  return (
    <div className="w-screen h-full py-[50px] md:py-[150px] bg-darkBlue">
      <div className="container mx-auto">
        <div>
          <div className="w-full">
            <h4 className="text-center font-bold font-montserrat text-[36px] text-white mb-3">
              Get in touch
            </h4>
            <p className="text-center font-medium font-montserrat text-[18px] text-white">
              Reach out to us using any of the channels{" "}
            </p>
            <div className="my-10 flex flex-col md:flex-row justify-center items-center gap-[100px] mt-[100px]">
              <div className="flex flex-col gap-[30px]">
                <div className="w-[80px] h-[80px] bg-white rounded-full flex justify-center items-center text-[30px] text-darkBlue text-center mx-auto cursor-pointer hover:-translate-y-3 duration-500">
                  <FaPhoneVolume />
                </div>
                <div className="text-center text-white font-semibold text-[17px] cursor-pointer">
                  <p>Call</p>
                  <p>+2348180746707</p>
                </div>
              </div>
              <div className="flex flex-col gap-[30px]">
                <div className="w-[80px] h-[80px] bg-white rounded-full flex justify-center items-center text-[30px] text-darkBlue text-center mx-auto cursor-pointer hover:-translate-y-3 duration-500">
                  <FaWhatsapp />
                </div>
                <div className="text-center text-white font-semibold text-[17px] cursor-pointer">
                  <p>WhatsApp</p>
                  <p>+2348180746707</p>
                </div>
              </div>
              <div className="flex flex-col gap-[30px]">
                <div className="w-[80px] h-[80px] bg-white rounded-full flex justify-center items-center text-[30px] text-darkBlue text-center mx-auto cursor-pointer hover:-translate-y-3 duration-500">
                  <FaRegEnvelope />
                </div>
                <div className="text-center text-white font-semibold text-[17px] cursor-pointer">
                  <p>Email</p>
                  <p>support@devchamp.io</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

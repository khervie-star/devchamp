import React from "react";
import Pill from "../Pill";
import coding from "../Assets/Images/Hand coding-pana.svg";

const AboutUs = () => {
  return (
    <div className="w-screen h-full py-[150px] px-[20px] md:px-[100px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-2/5 p-10">
            <img src={coding} alt="" className="w-full" />
          </div>
          <div className="w-full md:w-3/5 p-6">
            <div className="mb-4">
              <Pill>About Us</Pill>
            </div>
            <h4 className="text-darkBlue text-[40px] font-semibold font-outfit mb-7">
              Empowering Innovators: Our Tech Journey and Vision at{" "}
              <span className="text-red">DevChamp</span>
            </h4>
            <div className="flex flex-col gap-3 font-outfit text-[17px] text-slate-700">
              <p>
                At DevChamp, we are more than just a coding academy; we are a
                launchpad for tech pioneers, an incubator of innovation, and a
                community driven by the relentless pursuit of technological
                excellence.
              </p>
              <p>
                Founded by a group of passionate tech enthusiasts, [Coding
                School Name] emerged from a shared belief that the world of
                coding and programming is not just a skill to be learned, but a
                gateway to endless possibilities. Our journey began with a
                simple yet profound goal: to bridge the gap between the dynamic
                tech industry and aspiring learners like you.
              </p>
              <p>
                With years of collective experience in various tech domains, our
                team brings a wealth of real-world insights to the classroom.
                We've navigated the ever-evolving landscape of programming
                languages, frameworks, and emerging technologies, and we're here
                to guide you through this exhilarating terrain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

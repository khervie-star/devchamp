import React from "react";
import {
  ContainedButton,
  OutlinedButton,
  RoundedButton,
  TextButton,
} from "../../Buttons";
import Pill from "../../Pill";
import hero_img_2 from "../../Assets/Images/annie-spratt-MChSQHxGZrQ-unsplash.jpg";
import hero_img_1 from "../../Assets/Images/tai-bui-kpGj50PWAG0-unsplash.jpg";

const Hero = () => {
  return (
    <div className="w-screen h-full md:h-[85vh] flex justify-center items-center relative px-[16px] md:px-[50px] py-[60px] md:py-[100px] md:pt-0">
      <div className="container mx-auto flex  flex-col md:flex-row items-center gap-[20px] md:gap[75px]">
        <div className="w-full md:w-1/2 py-[75px] md:py-0">
          <Pill>100% Satisfaction Guaranteed</Pill>
          <h4 className="mb-[30px] text-darkBlue text-[36px] md:text-[56px] font-semibold font-outfit">
            Unleash Your Potential:{" "}
            <span className="text-green mr-2 relative">DevChamp</span>
            is Coming Soon!
          </h4>
          <p className="font-outfit text-base text-darkblue mb-[24px]">
            Get ready to unlock the power of coding! DevChamp is coming soon,
            bringing you expert-led courses, hands-on projects, and a supportive
            community. Stay tuned for early bird discounts and exciting updates
            as we prepare to launch. Your coding journey starts here!
          </p>
          <div className=" flex items-center gap-3">
            <RoundedButton>Sign up</RoundedButton>
            <TextButton>Learn more</TextButton>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex justify-center items-end gap-10 w-full box-border">
            <div className="w-2/3 h-[300px] md:w-[300px] md:h-[500px] rounded-full border-2 border-darkBlue border-solid ml-[30px] md:ml-0">
              <img
                src={hero_img_2}
                alt=""
                className="h-full object-cover rounded-full object-right ml-[-20px]"
              />
            </div>
            <div className="w-1/3 h-[200px] md:w-[200px] md:h-[300px] rounded-full border-2 border-solid border-darkBlue">
              <img
                src={hero_img_1}
                alt=""
                className="h-full object-cover rounded-full object-right ml-[-10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

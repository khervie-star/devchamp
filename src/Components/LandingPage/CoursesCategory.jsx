import React from "react";
import Pill from "../Pill";
import { FaPhp, FaReact, FaFigma, FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import frontend from "../Assets/Images/Hand coding-pana.svg";
import backend from "../Assets/Images/Developer activity-amico.svg";
import fs_php from "../Assets/Images/Coding-pana.svg";
import prod_design from "../Assets/Images/User flow-rafiki.svg";
import fs_mern from "../Assets/Images/JavaScript frameworks-bro.svg";

const CoursesCategory = () => {
  return (
    <div className="w-full h-full px-[16px] md:px-[50px] py-[40px] md:py-[100px]">
      <div className="container mx-auto w-full text-center flex flex-col justify-center items-center">
        <Pill>Courses Category</Pill>

        <h4 className="w-[400px] my-[12px] text-darkBlue text-[32px] md:text-[45px] font-semibold font-outfit mb-[40px] md:mb-[80px]">
          Popular courses
        </h4>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mb-8">
          <div class="relative group w-[250px] h-[250px]">
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative px-7 py-6 bg-white w-[250px] h-[250px] ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col items-center justify-center space-y-6">
              <div className="text-[50px] w-[80%]  text-slate-800 group-hover:text-indigo-400 transition duration-200">
                {/* <FaHtml5 /> */}
                <img src={frontend} alt="" className="w-full" />
              </div>
              <div class="space-y-2">
                <p class="text-slate-800 text-[16px] font-medium font-outfit">
                  Frontend Web Development
                </p>
              </div>
            </div>
          </div>
          <div class="relative group w-[250px] h-[250px]">
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative px-7 py-6 bg-white w-[250px] h-[250px] ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col items-center justify-center space-y-6">
              <div className="text-[50px]  w-[80%]   text-slate-800 group-hover:text-indigo-400 transition duration-200">
                {/* <IoLogoJavascript /> */}
                <img src={backend} alt="" className="w-full" />
              </div>
              <div class="space-y-2">
                <p class="text-slate-800 text-[16px] font-medium font-outfit">
                  Backend web development
                </p>
              </div>
            </div>
          </div>
          <div class="relative group w-[250px] h-[250px]">
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative px-7 py-6 bg-white w-[250px] h-[250px] ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col items-center justify-center space-y-6">
              <div className="text-[50px]  w-[80%]  text-slate-800 group-hover:text-indigo-400 transition duration-200">
                {/* <FaPhp /> */}
                <img src={fs_php} alt="" className="w-full" />
              </div>
              <div class="space-y-2">
                <p class="text-slate-800 text-[16px] font-medium font-outfit">
                  Fullstack web development(PHP)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px]">
          <div class="relative group w-[250px] h-[250px]">
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative px-7 py-6 bg-white w-[250px] h-[250px] ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col items-center justify-center space-y-6">
              <div className="text-[50px] w-[80%]  text-slate-800 group-hover:text-indigo-400 transition duration-200">
                {/* <FaReact /> */}
                <img src={fs_mern} alt="" className="w-full" />
              </div>
              <div class="space-y-2">
                <p class="text-slate-800 text-[16px] font-medium font-outfit">
                  Fullstack web development (MERN)
                </p>
              </div>
            </div>
          </div>

          <div class="relative group w-[250px] h-[250px]">
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative px-7 py-6 bg-white w-[250px] h-[250px] ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col items-center justify-center space-y-6">
              <div className="text-[50px]  w-[80%]  text-slate-800 group-hover:text-indigo-400 transition duration-200">
                {/* <FaFigma /> */}
                <img src={prod_design} alt="" className="w-full" />
              </div>
              <div class="space-y-2">
                <p class="text-slate-800 text-[16px] font-medium font-outfit">
                  Product design
                </p>
                {/* <a
                  href="https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background"
                  class="block text-indigo-400 group-hover:text-slate-800 transition duration-200"
                  target="_blank">
                  Read Article →
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCategory;

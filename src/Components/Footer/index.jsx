import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { TbPhoneIncoming } from "react-icons/tb";
const Footer = () => {
  const [mode, setMode] = React.useState("auto");
  return (
    <div className="mt-16">
      <footer id="footer" className="footer relative z-50  bg-green pt-12">
        <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
          <div className="">
            <div className="lg:flex border-b border-solid  border-white py-16">
              <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                <div className="w-full lg:w-1/2 px-6">
                  <div>Logo</div>
                  <p className="font-raleway font-medium text-white text-[15px] mb-6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nesciunt iure tempore nisi doloribus aliquid obcaecati
                    temporibus optio? Recusandae, vero! Enim quo provident ipsa
                    nam. Fugiat porro optio aut iusto facere.
                  </p>
                  <div className="flex items-center gap-5 text-yellow text-[18px]">
                    <Link to={"#"}>
                      <FaFacebookF />
                    </Link>
                    <Link to={"#"}>
                      <FaInstagram />
                    </Link>
                    <Link to={"#"}>
                      <FaTwitter />
                    </Link>
                    <Link to={"#"}>
                      <FaYoutube />
                    </Link>
                    <Link to={"#"}>
                      <FaGithub />
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-6">
                  <p className="font-outfit font-semibold text-white text-[24px] mb-5">
                    Company
                  </p>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link
                        to="#"
                        className="text-xs lg:text-[16px] font-semibold leading-none hover:text-brand dark:hover:text-brand text-white/90 dark:text-gray-50">
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="text-xs lg:text-[16px] font-semibold leading-none hover:text-brand dark:hover:text-brand text-white/90 dark:text-gray-50">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="text-xs lg:text-[16px] font-semibold leading-none hover:text-brand dark:hover:text-brand text-white/90 dark:text-gray-50">
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="text-xs lg:text-[16px] font-semibold leading-none hover:text-brand dark:hover:text-brand text-white/90 dark:text-gray-50">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex">
                <div className="w-full lg:w-1/2 px-6">
                  <p className="font-outfit font-semibold text-white text-[24px] mb-5">
                    Courses
                  </p>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link
                        to="#"
                        className="text-xs lg:text-[16px] font-semibold leading-none hover:text-brand dark:hover:text-brand text-white/90 dark:text-gray-50">
                        Frontend development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="text-xs lg:text-[16px] font-semibold leading-none hover:text-brand dark:hover:text-brand text-white/90 dark:text-gray-50">
                        Backend development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="text-xs lg:text-[16px] font-semibold leading-none hover:text-brand dark:hover:text-brand text-white/90 dark:text-gray-50">
                        Fullstack development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="text-xs lg:text-[16px] font-semibold leading-none hover:text-brand dark:hover:text-brand text-white/90 dark:text-gray-50">
                        Product Design
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                  <p className="font-outfit font-semibold text-white text-[24px] mb-5">
                    Contact
                  </p>
                  <ul className="flex flex-col gap-3">
                    <li className="location flex items-start gap-2">
                      <div className="text-yellow mt-1">
                        <HiLocationMarker />
                      </div>
                      <div className="text-white">
                        Benue road, San francisco, California, Nigeria.
                      </div>
                    </li>
                    <Link
                      className="location flex items-start gap-2"
                      to="mailto:support@devchamp.io">
                      <div className="text-yellow mt-1">
                        <HiEnvelope />
                      </div>
                      {/* <div className="text-white">support@devchamp.io</div> */}
                    </Link>
                    <Link
                      className="location flex items-start gap-2"
                      to="tel:+2348180746707">
                      <div className="text-yellow mt-1">
                        <TbPhoneIncoming />
                      </div>
                      <div className="text-white">+2348180746707</div>
                    </Link>
                  </ul>
                  {/* <div className="relative w-36">
                    {mode == "auto" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-device-laptop"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1={3} y1={19} x2={21} y2={19} />
                        <rect x={5} y={6} width={14} height={10} rx={1} />
                      </svg>
                    )}
                    {mode == "light" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-brightness-up"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx={12} cy={12} r={3} />
                        <line x1={12} y1={5} x2={12} y2={3} />
                        <line x1={17} y1={7} x2="18.4" y2="5.6" />
                        <line x1={19} y1={12} x2={21} y2={12} />
                        <line x1={17} y1={17} x2="18.4" y2="18.4" />
                        <line x1={12} y1={19} x2={12} y2={21} />
                        <line x1={7} y1={17} x2="5.6" y2="18.4" />
                        <line x1={6} y1={12} x2={4} y2={12} />
                        <line x1={7} y1={7} x2="5.6" y2="5.6" />
                      </svg>
                    )}
                    {mode == "dark" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-moon"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                      </svg>
                    )}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="pointer-events-none absolute inset-0 m-auto mr-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-chevron-down"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="6 9 12 15 18 9" />
                    </svg>

                    <select
                      value={mode}
                      onChange={(e) => setMode(e.target.value)}
                      className="w-full focus:outline-none pl-10 py-2 appearance-none flex items-center h-12 border rounded border-gray-700 dark:border-gray-50 text-sm leading-5 dark:bg-gray-900 dark:text-gray-50">
                      <option value="auto">Auto</option>
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                    </select>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="py-10 flex flex-col justify-center items-center">
            <p className="mt-6 text-sm lg:text-md leading-none text-white dark:text-gray-50 font-outfit font-medium">
              &copy; 2023 DevChamp. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

import React from "react";
import Cloud from "../../assets/cloud.png";
import { FiChevronRight } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="text-white bg-gray-900  ">
      <div className="grid grid-cols-(--my-grid)   p-7  max-sm:grid-cols-1">
        <div className="flex flex-col gap-5">
          <div>
            <a
              className="bg-black rounded-[20px] p-3 pt-1 pl-[2px] pb-1 inline-flex gap-3 items-center hover:bg-gray-800 duration-200 "
              href="#"
            >
              <p className="font-semibold bg-gradient-to-r from-cyan-300 to-cyan-500 rounded-[20px] p-3 pt-1 pb-1 ">
                WE'RE HIRING
              </p>
              <span className="flex items-center gap-2 ">
                Visit our careers page <FiChevronRight className="mt-[4px]" />
              </span>
            </a>
          </div>
          <div className="mb-[30px]">
            <h1 className="text-[70px] sm:text-[50px] leading-none font-bold mb-[40px]">
              <span>A better way to </span>
              <span className="bg-gradient-to-r from-cyan-100 via-cyan-200 to-cyan-300 bg-clip-text text-transparent">
                ship web apps
              </span>
            </h1>
            <p className="text-[18px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
              dolore maiores. Ad esse perferendis explicabo expedita sit, natus
              voluptatum hic aliquam provident fugit.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 ">
              <input
                className="flex-2  min-w-[100px] max-sm:w-full bg-white text-gray-600 py-[12px] px-[24px] rounded-[6px] border-2 border-gray-300 focus:outline-none focus:border-cyan-500"
                type="email"
                placeholder="Enter your email"
              />
              <button className="flex-1 min-w-[100px] bg-gradient-to-r from-cyan-300 to-cyan-500 py-[12px] px-[24px] rounded-[6px] cursor-pointer hover:from-cyan-400 hover:to-cyan-600  transition duration-300">
                Start free trial
              </button>
            </div>
            <p className="max-sm:text-[16px">
              Start your free 14-day trial, no credit card necessary. By
              providing your email,you agree to our{" "}
              <strong>terms or service</strong>.
            </p>
          </div>
        </div>
        <div>
          <img
            className="w-full max-w-[500px] "
            src={Cloud}
            style={{ objectFit: "contain" }}
            alt="storage"
          />
        </div>
      </div>
    </div>
  );
}

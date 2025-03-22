import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function ProfileHeader() {
  return (
    <div className="flex justify-between gap-[20px] p-7 bg-gradient-to-r from-cyan-300 to-cyan-400 text-white">
      <div className="flex ">
        <FaGithub className="h-[32px] w-auto" />
      </div>
      <div className="w-[50%] flex items-center   text-white bg-cyan-300 rounded-[6px]  py-1 px-2 focus-within:ring-2 focus-within:ring-cyan-200">
        <CiSearch className="ml-2" />
        <input
          className=" w-full focus:outline-none  "
          type="text"
          placeholder="Search Projects"
        />
      </div>
      <div className="flex   items-center ">
        <div className="flex gap-4">
          <a className="hover:text-cyan-200 duration-200" href="#">
            Documentation
          </a>
          <a className="hover:text-cyan-200 duration-200" href="#">
            Support
          </a>

          <CgProfile className="h-[32px] w-auto" />
        </div>
      </div>
    </div>
  );
}

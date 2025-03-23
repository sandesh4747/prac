import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { LuBadgeCheck } from "react-icons/lu";
import { VscSymbolEnumMember } from "react-icons/vsc";

export default function ProfileBody1() {
  return (
    <div className="space-y-5">
      <div
        className="flex gap-2 items-center w-full
           max-md:justify-center"
      >
        <CgProfile className="h-[32px] w-auto" />

        <div>
          <h1>John Darwin</h1>
          <p className="flex gap-1 items-center">
            <GiPlagueDoctorProfile />
            johndarwin
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <button
          className=" w-full text-white bg-gradient-to-r from-cyan-400 to-cyan-600 py-[6px] px-[12px] rounded-[6px] cursor-pointer 
        hover:from-cyan-500 hover:to-cyan-700 transition duration-300"
        >
          New Project
        </button>
        <button className="w-full py-[6px] px-[12px] border-1 border-gray-300 rounded-[6px] cursor-pointer  hover:bg-gray-100 duration-200">
          Invite team
        </button>
      </div>
      <div className="space-y-2">
        <p className="text-gray-400 flex gap-1 items-center">
          <LuBadgeCheck /> Pro Member
        </p>
        <p className="text-gray-400 flex gap-1 items-center">
          <VscSymbolEnumMember /> 8 Projects
        </p>
      </div>
    </div>
  );
}

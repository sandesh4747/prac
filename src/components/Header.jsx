import React from "react";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="p-7 bg-gray-900 text-white">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center justify-center">
          <FaGithub className="h-[32px] w-auto" />
          <nav className="space-x-7">
            <NavLink className="hover:text-cyan-400 duration-300">
              Product
            </NavLink>
            <NavLink className="hover:text-cyan-400 duration-300">
              Features
            </NavLink>
            <NavLink className="hover:text-cyan-400 duration-300">
              Marketplace
            </NavLink>
            <NavLink className="hover:text-cyan-400 duration-300">
              Company
            </NavLink>
          </nav>
        </div>
        <div className="space-x-7">
          <button className="cursor-pointer  hover:text-cyan-400 duration-300">
            Log in
          </button>
          <button className="bg-gray-500 py-[6px] px-[12px] rounded-[6px] cursor-pointer  hover:bg-cyan-500 duration-300">
            Start free trial
          </button>
        </div>
      </div>
    </div>
  );
}

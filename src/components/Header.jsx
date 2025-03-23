import React, { useState } from "react";
import { FaBars, FaGithub, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="p-7 bg-gray-900 text-white">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center justify-center ">
          <FaGithub className="h-[32px] w-auto" />

          {/* Menu Icon */}
          <button
            onClick={toggleMenu}
            className="max-sm:block focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
          {/* Desktop */}
          <nav className="space-x-7 max-md:hidden">
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
        <div className="space-x-7 max-md:hidden">
          <button className="cursor-pointer  hover:text-cyan-400 duration-300">
            Log in
          </button>
          <button className="bg-gray-500 py-[6px] px-[12px] rounded-[6px] cursor-pointer  hover:bg-cyan-500 duration-300">
            Start free trial
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="max-sm:block mt-4">
          <nav className="flex flex-col space-y-4">
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
          <div className="mt-4 space-y-4">
            <button className="w-full text-left hover:text-cyan-400 duration-300">
              Log in
            </button>
            <button className="w-full bg-gray-500 py-[6px] px-[12px] rounded-[6px] cursor-pointer hover:bg-cyan-500 duration-300">
              Start free trial
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

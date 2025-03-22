import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="p-7">
      <div className="text-gray-500 grid grid-cols-[2fr_1fr_1fr_1fr_1fr] ">
        <div className="space-y-5 pr-[30%]">
          <FaGithub className="text-2xl text-gray-400 cursor-pointer hover:text-cyan-500" />
          <p>
            Making the world a better place through constructing elegant
            hierarchies.
          </p>

          <div className="flex gap-7 text-2xl text-gray-400">
            <a className="hover:text-cyan-500" href="#">
              <FaFacebook />
            </a>
            <a className="hover:text-cyan-500" href="#">
              <FaInstagram />
            </a>
            <a className="hover:text-cyan-500" href="#">
              <FaTwitter />
            </a>
            <a className="hover:text-cyan-500" href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p>SOLUTIONS</p>
          <a className="hover:text-cyan-500" href="#">
            Marketing
          </a>
          <a className="hover:text-cyan-500" href="#">
            Analytics
          </a>
          <a className="hover:text-cyan-500" href="#">
            Commerce
          </a>
          <a className="hover:text-cyan-500" href="#">
            Insights
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <p>SUPPORT</p>
          <a className="hover:text-cyan-500" href="#">
            Pricing
          </a>
          <a className="hover:text-cyan-500" href="#">
            Documentation
          </a>
          <a className="hover:text-cyan-500" href="#">
            Guides
          </a>
          <a className="hover:text-cyan-500" href="#">
            API Status
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <p>COMPANY</p>
          <a className="hover:text-cyan-500" href="#">
            About
          </a>
          <a className="hover:text-cyan-500" href="#">
            Blog
          </a>
          <a className="hover:text-cyan-500" href="#">
            Jobs
          </a>
          <a className="hover:text-cyan-500" href="#">
            Press
          </a>
          <a className="hover:text-cyan-500" href="#">
            Partners
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <p>LEGALS</p>
          <a className="hover:text-cyan-500" href="#">
            Claim
          </a>
          <a className="hover:text-cyan-500" href="#">
            Privacy
          </a>
          <a className="hover:text-cyan-500" href="#">
            Terms
          </a>
        </div>
      </div>
    </div>
  );
}

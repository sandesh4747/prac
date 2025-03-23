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
    <div className="bg-gray-50 p-7">
      <div className="max-w-7xl mx-auto">
        {/* Grid Container */}
        <div className="grid grid-cols-5 gap-6 text-gray-500 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1">
          {/* First Column */}
          <div className="space-y-4 max-md:col-span-2 max-sm:col-span-1">
            <FaGithub className="text-2xl text-gray-400 cursor-pointer hover:text-cyan-500" />
            <p className="text-sm">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex gap-5 text-2xl text-gray-400">
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

          {/* Second Column */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-gray-700">SOLUTIONS</p>
            <a className="hover:text-cyan-500 text-sm" href="#">
              Marketing
            </a>
            <a className="hover:text-cyan-500 text-sm" href="#">
              Analytics
            </a>
            <a className="hover:text-cyan-500 text-sm" href="#">
              Commerce
            </a>
            <a className="hover:text-cyan-500 text-sm" href="#">
              Insights
            </a>
          </div>

          {/* Third Column */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-gray-700">SUPPORT</p>
            <a className="hover:text-cyan-500 text-sm" href="#">
              Pricing
            </a>
            <a className="hover:text-cyan-500 text-sm" href="#">
              Documentation
            </a>
            <a className="hover:text-cyan-500 text-sm" href="#">
              Guides
            </a>
            <a className="hover:text-cyan-500 text-sm" href="#">
              API Status
            </a>
          </div>

          {/* Fourth Column */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-gray-700">COMPANY</p>
            <a className="hover:text-cyan-500 text-sm" href="#">
              About
            </a>
            <a className="hover:text-cyan-500 text-sm" href="#">
              Blog
            </a>
            <a className="hover:text-cyan-500 text-sm" href="#">
              Jobs
            </a>
            <a className="hover:text-cyan-500 text-sm" href="#">
              Press
            </a>
            <a className="hover:text-cyan-500 text-sm" href="#">
              Partners
            </a>
          </div>

          {/* Fifth Column */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-gray-700">LEGALS</p>
            <a className="hover:text-cyan-500 text-sm" href="#">
              Claim
            </a>
            <a className="hover:text-cyan-500 text-sm" href="#">
              Privacy
            </a>
            <a className="hover:text-cyan-500 text-sm" href="#">
              Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

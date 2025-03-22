import React from "react";
import { ImQuotesLeft } from "react-icons/im";

export default function BlockQuote() {
  return (
    <div className="py-[50px]">
      <div className="relative bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-600 flex items-center justify-end   min-h-[400px]">
        {/* Image Section */}
        <div className=" absolute left-4 top-1/2 transform -translate-y-1/2 w-[400px] h-[450px] shadow-lg rounded-[12px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Worker"
          />
        </div>

        {/* Text Section */}
        <div className=" px-[100px] text-white   max-w-[800px]">
          <ImQuotesLeft className="text-3xl text-cyan-600 mb-4" />
          <p className="text-lg  mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            reiciendis alias et, non dolor repudiandae numquam officiis fugiat
            porro nemo!
          </p>
          <p className="text-xl font-semibold ">Judith Black</p>
          <p className="">CEO at PureInsights</p>
        </div>
      </div>
    </div>
  );
}

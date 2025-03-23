import React from "react";
import { ImQuotesLeft } from "react-icons/im";

export default function BlockQuote() {
  return (
    <div className="py-16 bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Image Section */}
          <div className="w-full lg:w-1/3 h-64 lg:h-96 shadow-2xl rounded-lg overflow-hidden mb-8 lg:mb-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Worker"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-2/3 text-white lg:pl-12">
            <ImQuotesLeft className="text-4xl text-cyan-100 mb-6" />
            <p className="text-xl lg:text-2xl font-light leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus reiciendis alias et, non dolor repudiandae numquam
              officiis fugiat porro nemo!
            </p>
            <div className="border-l-4 border-cyan-100 pl-4">
              <p className="text-2xl lg:text-3xl font-semibold">Judith Black</p>
              <p className="text-lg lg:text-xl text-cyan-100">
                CEO at PureInsights
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Support() {
  return (
    <div className="py-[50px]">
      <div className="text-white bg-black grid grid-cols-2 items-center gap-5  ">
        <img
          src="https://plus.unsplash.com/premium_photo-1661725357418-fb09ff7c0aae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwd29ya2VyfGVufDB8fDB8fHww"
          alt=""
        />

        <div className="p-7 space-y-5">
          <div className="space-y-3">
            <p>AWARD WINNING SUPPORT</p>
            <h1 className="text-3xl font-semibold">We're here to help</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              tempore labore non pariatur, reiciendis aliquam magni maxime
              nostrum quod eaque earum ipsa iusto vitae dignissimos? Cumque, id
              eius? Reprehenderit, eos!
            </p>
          </div>
          <a
            className="bg-white text-black py-[12px] px-[24px] rounded-[6px] inline-flex gap-4 items-center hover:bg-cyan-500 hover:text-white transition duration-300"
            href="#"
          >
            <span> Visit the help center</span>
            <span>
              <FaExternalLinkAlt />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        clipPath: "polygon(0 50%, 100% 0, 100% 100%, 50% 100%, 0 100%)",
      }}
      className=" relative h-[300px]  flex flex-col items-center justify-center text-white  bg-black"
    >
      <div className="h-[100% ] absolute  top-[60%]">
        <p>Develop By</p>
        <p>Some One Anonymous</p>
      </div>
    </div>
  );
}

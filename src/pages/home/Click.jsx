import React, { useState } from "react";
import "../../index.css";

export default function Click() {
  const [isClick, setIsClick] = useState(false);
  const toggleClick = () => {
    setIsClick((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center ">
      <div className={`w-[50%] space-y-5  `} onClick={toggleClick}>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl">Can you tell me about your country?</h1>
          <span className="text-3xl">{isClick ? "+" : "-"}</span>
        </div>
        <p
          className={`${
            isClick ? "hidden" : "flex border-t-3 border-cyan-600"
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
          ad enim! Enim deserunt eum laboriosam quas magnam maiores aliquid
          vitae voluptates, temporibus reprehenderit fugit repellat consectetur
          placeat officiis animi adipisci.
        </p>
      </div>
    </div>
  );
}

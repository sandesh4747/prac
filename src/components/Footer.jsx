import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        clipPath: "polygon(0 50%, 100% 0, 100% 100%, 50% 100%, 0 100%)",
      }}
      className=" relative h-[250px]  flex flex-col items-center justify-center text-white  bg-black"
    >
      <div className="h-[100% ] absolute  top-[60%] text-center">
        <p>Develop By</p>
        <p>Some One Anonymous</p>
      </div>
    </div>
  );
}
// {/* <div>
// {/* <img src="https://www.svgrepo.com/show/530643/briefcase.svg" alt="" /> */}

// <svg viewBox="0 0 1440 320"><path fill="black" fill-opacity="1" d="M0,288L1440,32L1440,320L0,320Z"></path>

//   <text fill='white' x={700} y={250}>Develop By</text></svg>

// </div> */}

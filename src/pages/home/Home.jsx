import React from "react";
import Header from "../../components/Header";
import { NavLink, Outlet } from "react-router";
import Intro from "../../components/Intro";
import Logo from "../../components/Logo";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import Tech from "./Tech";

export default function Home() {
  return (
    <div>
      {/* <div className="h-[400px] w-[400px] border-2">
        <svg viewBox="0 0 300 300">
          <rect
            x={10}
            y={10}
            height={100}
            width={100}
            fill="red"
            stroke="black"
          />
          <rect x={100} y={100} height={100} width={100} fill="blue" />

          {/* <text y={20}>saldkjdsalkj</text> */}
      {/* </svg>
      </div> */}
      {/* } */}
      <Intro />
      <Tech />
      {/* <Logo /> */}
      <Info />
      {/* <Footer /> */}
    </div>
  );
}

// import React from "react";
// import { CiClock1 } from "react-icons/ci";

// export default function Home() {
//   return (
//     <div className="p-7 ">
//       <div className="flex flex-col items-center justify-center">
//         <h1 className="text-4xl font-semiboldbold">
//           Transfer Money Anytime, Anywhere
//         </h1>
//         <p className="text-gray-400">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
//           cupiditate minus architecto in praesentium voluptates magni debitis
//           aut dicta culpa.
//         </p>
//       </div>
//       <div className="grid grid-cols-3 mt-[40px] gap-6  space-y-5">
//         <div className="px-[50px] space-y-3 ">
//           <div className="w-[64px] h-[64px] bg-gray-300 flex items-center justify-center rounded-[12px]">
//             <CiClock1 className="h-[32px] w-[32px]" />
//           </div>
//           <h2 className="text-xl">Real Time Problem Solution</h2>
//           <p className="text-gray-400">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
//             facilis saepe rem modi assumenda eius inventore cupiditate
//             laboriosam deleniti ducimus.
//           </p>
//         </div>
//         <div className="px-[50px] space-y-3">
//           <div className="w-[64px] h-[64px] bg-gray-300 flex items-center justify-center rounded-[12px]">
//             <CiClock1 className="h-[32px] w-[32px]" />
//           </div>
//           <h2 className="text-xl">Safe & Secured Payments</h2>
//           <p className="text-gray-400">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
//             facilis saepe rem modi assumenda eius inventore cupiditate
//             laboriosam deleniti ducimus.
//           </p>
//         </div>
//         <div className="px-[50px] space-y-3">
//           <div className="w-[64px] h-[64px] bg-gray-300 flex items-center justify-center rounded-[12px]">
//             <CiClock1 className="h-[32px] w-[32px]" />
//           </div>
//           <h2 className="text-xl">Customer Support 24/7</h2>
//           <p className="text-gray-400">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
//             facilis saepe rem modi assumenda eius inventore cupiditate
//             laboriosam deleniti ducimus.
//           </p>
//         </div>
//         <div className="px-[50px] space-y-3">
//           <div className="w-[64px] h-[64px] bg-gray-300 flex items-center justify-center rounded-[12px]">
//             <CiClock1 className="h-[32px] w-[32px]" />
//           </div>
//           <h2 className="text-xl">Quick & Easy Transaction</h2>
//           <p className="text-gray-400">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
//             facilis saepe rem modi assumenda eius inventore cupiditate
//             laboriosam deleniti ducimus.
//           </p>
//         </div>
//         <div className="px-[50px] space-y-3">
//           <div className="w-[64px] h-[64px] bg-gray-300 flex items-center justify-center rounded-[12px]">
//             <CiClock1 className="h-[32px] w-[32px]" />
//           </div>
//           <h2 className="text-xl">Worldwide Certified</h2>
//           <p className="text-gray-400">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
//             facilis saepe rem modi assumenda eius inventore cupiditate
//             laboriosam deleniti ducimus.
//           </p>
//         </div>
//         <div className="px-[50px] space-y-3">
//           <div className="w-[64px] h-[64px] bg-gray-300 flex items-center justify-center rounded-[12px]">
//             <CiClock1 className="h-[32px] w-[32px]" />
//           </div>
//           <h2 className="text-xl">Lesser Cost</h2>
//           <p className="text-gray-400">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
//             facilis saepe rem modi assumenda eius inventore cupiditate
//             laboriosam deleniti ducimus.
//           </p>
//         </div>

//         <div></div>
//       </div>
//     </div>
//   );
// }

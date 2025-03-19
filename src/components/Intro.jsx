import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"; // Import DotLottieReact

export default function Intro() {
  return (
    <div className="grid grid-cols-[1fr_1.5fr] items-center p-[2%] font-sans">
      {/* Animation Section */}
      <div className="flex  justify-center">
        <DotLottieReact
          src="https://lottie.host/9f3e5adf-f8e3-4da4-acad-e3997abfa3d6/YKLc6wEjkT.lottie"
          loop
          autoplay
          style={{ width: "400px", height: "400px" }}
          renderersettings={{
            preserveAspectRatio: "xMidYMid slice", // Prevents distortion
          }}
        />
      </div>

      {/* Text Section */}
      <div className="space-y-2">
        <h1 className="font-bold text-4xl">Hi, I am John</h1>
        <p className="text-pink-600 italic text-[18px]">
          Some Dev, Freelancer, Rounder
        </p>
        <p className="text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ut
          voluptas numquam officiis beatae! Harum debitis mollitia ad sit autem!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro atque,
          quae, adipisci maxime debitis veniam est iusto, accusamus nulla sit
          quisquam beatae quia aperiam natus ipsa quibusdam quis voluptate
          inventore.
        </p>
      </div>
    </div>
  );
}

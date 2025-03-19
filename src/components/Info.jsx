import React from "react";

export default function Info() {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mb-[36px]">Who am I</h1>
      <div className="flex justify-center">
        {/* Outer Circle with Gradient Border */}
        <div className="h-[400px] w-[400px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full p-[5px] flex justify-center items-center">
          {/* Inner Black Circle */}
          <div className="h-full w-full bg-black rounded-full flex flex-col justify-center items-center text-white">
            <div className="text-left text-[18px]">
              <p>Name: Some Person</p>
              <p>Email: someperson@gmail.com</p>
              <p>Tel: 977777</p>
              <p>Age: 90</p>
              <p>Experience: Python, Java, Dart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

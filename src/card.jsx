import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";
import image3 from "./assets/3.jpg";
import image4 from "./assets/4.jpg";
import image5 from "./assets/5.jpg";
import image6 from "./assets/6.jpg";
import pizza from "./assets/pizza.jpg";
import ice from "./assets/ice.jpg";

export default function App() {
  console.log(name);
  return (
    <div className=" p-10">
      <p className="text-center mb-8 font-bold text-4xl text-gray-500">
        Using TailWindCSS
      </p>
      <div className="flex space-x-12   ">
        {/*box-1*/}
        <div className="rounded-lg shadow-lg  w-[400px] flex flex-col ">
          <img
            className="h-64 w-full object-cover rounded-t-lg"
            src={image1}
            alt=""
          />

          <div className="p-7 flex-grow ">
            <h2 className="font-bold text-xl mb-3 ">
              Unlocking the Secrets of Productivity
            </h2>

            <p className="text-gray-700">
              Boost efficiency, accomplish more. Learn Proven Strategies.
            </p>
          </div>
          <div className="flex justify-end space-x-6 p-8 ">
            <button className="text-gray-600 hover:cursor-pointer ">
              Cancel
            </button>
            <button className="text-violet-500 bg-gray-100 rounded-lg py-2 px-4 hover:cursor-pointer">
              Preview
            </button>
            <button className="text-white bg-violet-500 rounded-lg py-2 px-4 hover:cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>

        {/*box-2 */}
        <div className="rounded-lg shadow-lg  w-[400px] flex flex-col  ">
          <img
            className="h-64 w-full object-cover  rounded-t-lg"
            src={image3}
            alt=""
          />

          <div className="p-7 flex-grow ">
            <h2 className="font-bold text-xl mb-3 ">
              The Ultimate JavaScript Course
            </h2>
            <p className="text-gray-700"></p>The JavaScript course for everyone!
            Master JavaScript with Projects, challenges and theory.
          </div>
          <div className="flex justify-end space-x-6 p-8 ">
            <button className="text-gray-600 hover:cursor-pointer">
              Cancel
            </button>
            <button className="text-violet-500 bg-gray-100 rounded-lg py-2 px-4 hover:cursor-pointer">
              Preview
            </button>
            <button className="text-white bg-violet-500 rounded-lg py-2 px-4 hover:cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>
        {/*box-3 */}
        <div className="rounded-lg shadow-lg  w-[400px]  flex flex-col ">
          <img
            className="h-64 w-full object-cover rounded-t-lg"
            src={image5}
            alt=""
          />

          <div className="p-7 flex-grow ">
            <h2 className="font-bold text-xl mb-3 ">Mastering Python Course</h2>

            <p className="text-gray-700">
              unlock the power of Python. From basics to advanced techniques,
              become a coding maestro with our comprehensive course.
            </p>
          </div>
          <div className="flex justify-end space-x-6 p-8 ">
            <button className="text-gray-600 hover:cursor-pointer">
              Cancel
            </button>
            <button className="hover:cursor-pointer  text-violet-500 bg-gray-100 rounded-lg py-2 px-4">
              Preview
            </button>
            <button className="text-white bg-violet-500 rounded-lg py-2 px-4 hover:cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Box-4 */}
      <div className="mt-12">
        <p className="text-left mb-8 font-bold text-4xl text-gray-500">
          Using TailWindCSS
        </p>
        <div className="flex flex-col rounded-lg shadow-lg w-[350px] mt-5 ">
          <img
            className="h-64 w-full object-cover rounded-t-lg"
            src={image2}
            alt=""
          />

          <div className="flex space-x-4 pl-7 pb-3  p-7 font-semibold items-center relative">
            <button className="bg-green-400 text-green-800  rounded-full py-0.5 px-4 hover:cursor-pointer">
              NEW
            </button>
            <p className="text-gray-600">3 BEDS</p>
            <span className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-gray-600">
              .
            </span>
            <p className="pl-1 text-gray-600"> 2 BATHS</p>
          </div>
          <div className="pl-7 pb-4">
            <h2 className=" font-bold text-xl text-gray-700">
              Beautiful Home in the ...
            </h2>
            <p>
              $1,900.00/<span className="text-gray-500"> wk</span>
            </p>
          </div>
          <div className="flex space-x-5 pl-7 pb-4 items-center ">
            <div className="space-x-1">
              <FontAwesomeIcon icon={faStar} className="text-green-700" />
              <FontAwesomeIcon icon={faStar} className="text-green-700" />
              <FontAwesomeIcon icon={faStar} className="text-green-700" />
              <FontAwesomeIcon icon={faStar} className="text-green-700" />
              <FontAwesomeIcon icon={faStar} className="text-gray-400 " />
            </div>

            <div className="font-bold text-gray-600">34 reviews</div>
          </div>
        </div>
      </div>

      {/* BOX-5*/}
      <div className="flex space-x-8 ">
        <div className="flex ">
          <div className="flex flex-col w-[350px] rounded-xl shadow-lg mt-12 border-6 border-pink-500">
            <img
              className="h-64 w-full object-contain rounded-xl"
              src={pizza}
              alt=""
            />

            <div className="flex items-center justify-between pt-5 p-7  ">
              <div>
                <h2 className="font-bold">
                  <span className="pr-2">
                    <FontAwesomeIcon
                      icon={faBookmark}
                      className="text-green-500  "
                    />
                  </span>
                  Pizza
                </h2>
              </div>
              <div className="flex flex-col ">
                <h2 className="font-bold  text-gray-400">Total Bill</h2>
                <p className="font-extrabold">RM 6.00</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className=" flex flex-col w-1/2  pt-3 p-7    bg-pink-500  rounded-tr-lg">
                <p className="pb-4 text-white font-semibold text-lg">
                  Split with
                </p>
                <div className="flex space-x-3 bg-pink-500 ">
                  {/* First Profile Circle */}
                  <div className="h-8 w-8 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
                    <img
                      className="h-64 w-full  rounded-full"
                      src={image1}
                      alt="Profile"
                    />
                  </div>

                  {/* Second Profile Circle */}
                  <div className="h-8 w-8 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
                    <img
                      className="h-full w-full object-cover rounded-full"
                      src={image2}
                      alt="Profile"
                    />
                  </div>

                  {/* Third Profile Circle */}
                  <div className="h-8 w-8 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
                    <img
                      className="h-full w-full object-cover rounded-full"
                      src={image3}
                      alt="Profile"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center hover:cursor-pointer   ">
                <div className="bg-gradient-to-b from-blue-300 to-blue-500 flex  items-center p-7 rounded-lg">
                  <button className="text-gray-50 font-semibold hover:cursor-pointer">
                    SPLIT NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*BOX_55 */}

        <div className="flex  ">
          <div className="flex flex-col w-[350px] rounded-xl shadow-lg mt-12 border-6 border-blue-500">
            <img
              className="h-64 w-full object-contain rounded-xl"
              src={ice}
              alt=""
            />

            <div className="flex items-center justify-between pt-5 p-7  ">
              <div>
                <h2 className="font-bold">
                  <span className="pr-2">
                    <FontAwesomeIcon
                      icon={faBookmark}
                      className="text-green-500  "
                    />
                  </span>
                  Ice Cream
                </h2>
              </div>
              <div className="flex flex-col ">
                <h2 className="font-bold  text-gray-400">Total Bill</h2>
                <p className="font-extrabold">RM 2.00</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className=" flex flex-col w-1/2  pt-3 p-7    bg-blue-500  rounded-tr-lg">
                <p className="pb-4 text-white font-semibold text-lg">
                  Split with
                </p>
                <div className="flex space-x-3 bg-blue-500 ">
                  {/* First Profile Circle */}
                  <div className="h-8 w-8 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
                    <img
                      className="h-full w-full object-cover rounded-full"
                      src={image1}
                      alt="Profile"
                    />
                  </div>

                  {/* Second Profile Circle */}
                  <div className="h-8 w-8 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
                    <img
                      className="h-full w-full object-cover rounded-full"
                      src={image2}
                      alt="Profile"
                    />
                  </div>

                  {/* Third Profile Circle */}
                  <div className="h-8 w-8 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
                    <img
                      className="h-full w-full object-cover rounded-full"
                      src={image3}
                      alt="Profile"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center hover:cursor-pointer   ">
                <div className="bg-gradient-to-b from-pink-300 to-pink-500 flex  items-center p-7 rounded-lg">
                  <button className="text-gray-50 font-semibold  hover:cursor-pointer">
                    SPLIT NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faVuejs,
  faPython,
  faCss3,
  faSwift,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { Outlet } from "react-router";

export default function Logo() {
  return (
    <div className="text-center mb-[30px]">
      <h1 className="text-4xl font-semibold pb-4 animate-slide-in-right">
        Technologies I use
      </h1>
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] justify-center items-center space-y-8  ">
        <div className="transition-all duration-300 hover:text-red-500 hover:scale-110">
          <FontAwesomeIcon
            icon={faReact}
            style={{ width: "150px", height: "150px" }}
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faJava}
            style={{ width: "150px", height: "150px" }}
          />
        </div>

        <div>
          <FontAwesomeIcon
            icon={faVuejs}
            style={{ width: "150px", height: "150px" }}
          />
        </div>

        <div className="animate-bounce">
          <FontAwesomeIcon
            icon={faCss3}
            style={{ width: "150px", height: "150px" }}
          />
        </div>

        <div>
          <FontAwesomeIcon
            icon={faPython}
            style={{ width: "150px", height: "150px" }}
          />
        </div>

        <div>
          <FontAwesomeIcon
            icon={faSwift}
            style={{ width: "150px", height: "150px" }}
          />
        </div>
      </div>
    </div>
  );
}

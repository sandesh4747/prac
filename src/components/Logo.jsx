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
      <h1 className="text-4xl font-semibold pb-2">Technologies I use</h1>
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] justify-center items-center space-y-8 ">
        <div>
          <FontAwesomeIcon
            className="r"
            icon={faReact}
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faJava}
            style={{ width: "200px", height: "200px" }}
          />
        </div>

        <div>
          <FontAwesomeIcon
            icon={faVuejs}
            style={{ width: "200px", height: "200px" }}
          />
        </div>

        <div className="animate-bounce">
          <FontAwesomeIcon
            icon={faCss3}
            style={{ width: "200px", height: "200px" }}
          />
        </div>

        <div>
          <FontAwesomeIcon
            icon={faPython}
            style={{ width: "200px", height: "200px" }}
          />
        </div>

        <div>
          <FontAwesomeIcon
            icon={faSwift}
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      </div>
    </div>
  );
}

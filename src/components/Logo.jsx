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

export default function Logo() {
  return (
    <div className="text-center mb-[30px]">
      <h1 className="text-4xl font-semibold pb-2">Technologies I use</h1>
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] justify-center items-center">
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
{
  /* <DotLottieReact
          className="justify-center"
          src="https://lottie.host/1429d0ed-dbcb-4ef3-8b84-59961473485e/5nV18NCh1K.lottie"
          loop
          autoplay
          style={{ width: "200px", height: "200px" }}
          renderersettings={{
            preserveAspectRatio: "xMidYMid slice", 
          }}
        /> */
}

{
  /* <DotLottieReact
          className="justify-center"
          src="https://lottie.host/3600fe65-ff6f-4639-acfe-5f4b7c321c31/aSYvS8T1DB.lottie"
          loop
          autoplay
          style={{ width: "200px", height: "200px" }}
          renderersettings={{
            preserveAspectRatio: "xMidYMid slice", 
          }}
        /> */
}
{
  /* <DotLottieReact
          className="justify-center"
          src="https://lottie.host/ba6159c9-27b3-4b40-8d2b-bc693ba9a351/PY0YQcPhqg.lottie"
          loop
          autoplay
          style={{ width: "200px", height: "200px" }}
          renderersettings={{
            preserveAspectRatio: "xMidYMid slice", // Prevents distortion
          }}
        /> */
}
{
  /*         
        <DotLottieReact
          className="justify-center"
          src="https://lottie.host/669bccf9-800b-4abd-83d8-74f452065cd0/fXtdcgpIBq.lottie"
          loop
          autoplay
          style={{ width: "200px", height: "200px" }}
          renderersettings={{
            preserveAspectRatio: "xMidYMid slice", // Prevents distortion
          }}
        />
        <DotLottieReact
          className="justify-center"
          src="https://lottie.host/ef1f56ca-7fca-4b15-93d9-07116d59a60b/0I7PfMbbVh.lottie"
          loop
          autoplay
          style={{ width: "200px", height: "200px" }}
          renderersettings={{
            preserveAspectRatio: "xMidYMid slice", // Prevents distortion
          }}
        />
        <DotLottieReact
          className="justify-center"
          src="https://lottie.host/b49f70b3-2a91-430c-93b4-2e2961c798d3/0ZwtJlYlhC.lottie"
          loop
          autoplay
          style={{ width: "200px", height: "200px" }}
          renderersettings={{
            preserveAspectRatio: "xMidYMid slice", // Prevents distortion
          }}
        /> */
}

import React from "react";
import {
  DiDart,
  DiGithub,
  DiGo,
  DiJava,
  DiJavascript,
  DiNodejs,
  DiPython,
  DiReact,
  DiRuby,
} from "react-icons/di";

export default function Tech() {
  return (
    <div className=" grid grid-cols-4 justify-items-center ">
      <DiReact size={200} />
      <DiPython size={200} />
      <DiJavascript size={200} />
      <DiNodejs size={200} />
      <DiDart size={200} />
      <DiJava size={200} />
      <DiGithub size={200} />
      <DiGo size={200} />
      <DiRuby size={200} />
    </div>
  );
}

{
  /* <SomeCompo>
        <h1>hello jee </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In,
          laudantium.
        </p>
      </SomeCompo>
    
 
function SomeCompo({ children }) {
  return <div>{children}</div>;
} */
}

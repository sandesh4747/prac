import React, { useState } from "react";

export default function DarkMode() {
  const [isDark, setIsDark] = useState(false);
  const toggle = () => setIsDark((isDark) => !isDark);
  return (
    <div
      style={{
        color: isDark ? "white" : "black",
        backgroundColor: isDark ? "black" : "white",
      }}
      className="space-y-5 p-7 min-h-screen "
    >
      <button
        style={{
          color: isDark ? "black" : "white",
          backgroundColor: isDark ? "white" : "black",
        }}
        onClick={toggle}
        className="bg-black text-white px-2 py-1 rounded-sm cursor-pointer"
      >
        Toggle
      </button>
      <p
        style={{
          color: isDark ? "white" : "black",
          backgroundColor: isDark ? "black" : "white",
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
        blanditiis corrupti dolor non sequi, illum neque molestias deserunt?
        Repudiandae obcaecati maiores blanditiis, exercitationem ipsum quasi
        quae dolores consequatur laudantium natus!
      </p>
    </div>
  );
}

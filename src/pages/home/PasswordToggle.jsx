import React, { useState } from "react";

export default function PasswordToggle() {
  const [isHidden, setIsHidden] = useState(true);
  const passToggle = () => {
    setIsHidden((isHidden) => !isHidden);
  };
  return (
    <div className="flex gap-4 items-center justify-center">
      <input
        type={isHidden ? "password" : "text"}
        placeholder="Pass"
        className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <div>
        <button
          onClick={passToggle}
          className="bg-black text-white px-2 py-1 rounded-sm"
        >
          {isHidden ? "show" : "hide"}
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function UIColor() {
  const [UIcolor, setUIColor] = useState(null); // Initialize with white

  // Callback function to update the color
  const getColor = (color) => {
    setUIColor(color);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-4">
      {/* Input Container */}
      <div className="w-full max-w-md">
        <Callback getColor={getColor} />
      </div>

      {/* Color Box Container */}
      <div
        className="w-64 h-64 rounded-lg shadow-lg"
        style={{ backgroundColor: UIcolor }}
      ></div>
    </div>
  );
}

const Callback = ({ getColor }) => {
  const [activeColor, setActiveColor] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value); // Pass the color to the parent component
  };

  return (
    <div>
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleChange}
        value={activeColor}
        placeholder="Enter a color (e.g., red, #ff0000, rgb(255,0,0))"
      />
    </div>
  );
};

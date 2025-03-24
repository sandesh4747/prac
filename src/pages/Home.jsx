import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((c) => c + 1);
  };
  const handleDecrement = () => {
    setCount((c) => c - 1);
  };

  return (
    <div className="flex gap-4 ">
      <button
        onClick={handleDecrement}
        className="bg-black text-white px-4 py-2  cursor-pointer"
      >
        Decrease
      </button>
      <h1 className="p-4">{count}</h1>
      <p className="p-4">{count % 2 === 0 ? "Even" : "Odd"}</p>
      <button
        onClick={handleIncrement}
        className="bg-black text-white px-4 py-2 cursor-pointer"
      >
        Increase
      </button>
    </div>
  );
}

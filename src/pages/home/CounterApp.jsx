import React, { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((c) => c + 1);
  };
  const decrement = () => {
    setCount((c) => (c > 0 ? c - 1 : 0));
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="flex gap-4 p-8">
      <button
        onClick={decrement}
        className="bg-black text-white px-2 py-1 rounded-sm cursor-pointer"
      >
        Decrease
      </button>
      <p>{count}</p>
      <button
        onClick={increment}
        className="bg-black text-white px-2 py-1 rounded-sm cursor-pointer"
      >
        Increase
      </button>
      <button
        onClick={reset}
        className="bg-black text-white px-2 py-1 rounded-sm cursor-pointer"
      >
        Reset
      </button>
    </div>
  );
}

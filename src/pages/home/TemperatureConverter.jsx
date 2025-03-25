import React, { useState } from "react";

export default function TemperatureConverter() {
  const [input, setInput] = useState("");
  const [fahrenheit, setFahrenheit] = useState(0);

  const cToF = () => {
    setFahrenheit((Number(input) * 9) / 5 + 32);
  };

  return (
    <div>
      <input
        type="number"
        value={input}
        placeholder="Celsius"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-black text-white px-2 py-1 rounded-sm"
        onClick={cToF}
      >
        Convert
      </button>
      <p>{fahrenheit}</p>
    </div>
  );
}

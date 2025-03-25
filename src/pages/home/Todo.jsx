import React, { useState } from "react";

export default function Todo() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, input]);
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleFilter = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };
  return (
    <div className="p-7 space-y-5">
      <h1 className="text-3xl font-bold">TODO List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Enter todo list"
          onChange={handleChange}
        />
        <button type="submit">Add List</button>
      </form>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item} <span onClick={() => handleFilter(i)}>X</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

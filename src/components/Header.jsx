import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-black text-white px-2 py-2 flex items-center justify-between">
      <h1>Redux Tool Kit</h1>
      <nav></nav>
    </div>
  );
}

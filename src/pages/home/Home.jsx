import React from "react";
import Header from "../../components/Header";
import { NavLink, Outlet } from "react-router";

export default function Home() {
  return (
    <div>
      <h1>This is Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corporis
        distinctio ullam cumque suscipit iusto doloribus? Delectus amet porro
        magnam.
      </p>
      <nav className="space-x-3">
        <NavLink to={"/"}>Page1</NavLink>
        <NavLink to={"/page-2"}>Page2</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

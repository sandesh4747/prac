import React from "react";
import Header from "../../components/Header";
import { NavLink, Outlet } from "react-router";
import Intro from "../../components/Intro";
import Logo from "../../components/Logo";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import Tech from "./Tech";

export default function Home() {
  return (
    <div>
      <div className="text-blueee pl-4 ">
        <h1 className="text-primary text-headLarge">Hello World</h1>
        <div className="h-[200px] w-[200px] border-2 animate-myAni">
          <h1 className="text-purple-800">Hello</h1>
          <h2>sahflkasfkla</h2>
        </div>
      </div>
      <Intro />
      <Tech />
      {/* <Logo /> */}
      <Info />
      {/* <Footer /> */}
    </div>
  );
}

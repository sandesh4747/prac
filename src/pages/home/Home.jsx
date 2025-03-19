import React from "react";
import Header from "../../components/Header";
import { NavLink, Outlet } from "react-router";
import Intro from "../../components/Intro";
import Logo from "../../components/Logo";
import Info from "../../components/Info";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Intro />
      <Logo />
      <Info />

      {/* <Footer /> */}
    </div>
  );
}

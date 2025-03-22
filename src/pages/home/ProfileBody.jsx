import React from "react";
import ProfileBody1 from "./ProfileBody1";
import ProfileBody2 from "./ProfileBody2";
import ProfileBody3 from "./ProfileBody3";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

export default function ProfileBody() {
  return (
    <div className="grid grid-cols-[1fr_3fr_1fr] p-8">
      <ProfileBody1 />
      <ProfileBody2 />
      <ProfileBody3 />
    </div>
  );
}

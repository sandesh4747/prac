import React from "react";
import ProfileBody1 from "./ProfileBody1";
import ProfileBody2 from "./ProfileBody2";
import ProfileBody3 from "./ProfileBody3";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

export default function ProfileBody() {
  return (
    <div className="grid grid-cols-[1fr_3fr_1fr] p-8 max-sm:grid-cols-1 max-sm:p-4  max-lg:grid-cols-[1fr_2fr] max-md:grid-cols-1 max-md:space-y-8 max-md:pb-0">
      <div className="flex-1">
        <ProfileBody1 />
      </div>
      <div className="flex-[3] max-md:px-0">
        <ProfileBody2 />
      </div>
      <div className="flex-1 max-lg:col-span-2 max-md:col-span-1 ">
        <ProfileBody3 />
      </div>
    </div>
  );
}

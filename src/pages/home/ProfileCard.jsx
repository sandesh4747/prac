import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileBody from "./ProfileBody";
import ProfileTitle from "./ProfileTitle";

export default function ProfileCard() {
  return (
    <div>
      <ProfileTitle />
      <ProfileHeader />
      <ProfileBody />
    </div>
  );
}

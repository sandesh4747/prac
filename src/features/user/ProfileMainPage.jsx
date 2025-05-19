import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";
import OrderPage from "../orders/OrderPage";
import { useNavigate } from "react-router";

export default function ProfileMainPage() {
  const { user } = useSelector((state) => state.userSlice);
  const nav = useNavigate();

  // Avoid rendering children if user is not ready
  if (!user || !user.token) {
    nav("/");
    return null;
  }

  return (
    <div className="p-5 grid grid-cols-3 gap-5">
      <UserProfile user={user} />
      <OrderPage user={user} />
    </div>
  );
}

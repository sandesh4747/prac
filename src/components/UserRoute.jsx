import React from "react";
import { useLocation } from "react-router";

export default function UserRoute() {
  const location = useLocation();
  const { user } = useSelector((state) => state.userSlice);
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

import React from "react";

export default function NotFound() {
  return (
    <div className=" space-y-3 w-full flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-bold text-red-500 text-xl">404 Page Not Found</h1>

      <button className="  bg-black px-2 text-white py-1 rounded-sm">
        Go Back TO Home
      </button>
    </div>
  );
}

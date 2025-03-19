// import React from "react";
// import Header from "./Header";
// import { Outlet } from "react-router";
// import Footer from "./Footer";

// export default function RootLayout() {
//   return (
//     <div>
//       <Header />
//       <Footer />
//       <Outlet />
//     </div>
//   );
// }

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function RootLayout() {
  const location = useLocation();
  const isAboutOrContactPage =
    location.pathname === "/about" || location.pathname === "/contact";
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mb-5 ">
        <Outlet /> {/* This will render the matched child route component */}
      </main>
      <div className={isAboutOrContactPage ? "mb-5" : ""}>
        <Footer />
      </div>
    </div>
  );
}

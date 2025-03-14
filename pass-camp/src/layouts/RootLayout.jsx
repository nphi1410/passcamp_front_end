import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./../components/Footer";
import NavBar from './../components/NavBar';

const RootLayout = () => {
  const location = useLocation();
  const isHidden =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      <NavBar isHidden={isHidden}/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;

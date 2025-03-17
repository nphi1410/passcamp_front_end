import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./../components/Footer";
import NavBar from "./../components/NavBar";

const RootLayout = () => {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(
    location.pathname === "/login" || location.pathname === "/register"
  );
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setIsHidden(
      location.pathname === "/login" || location.pathname === "/register"
    );

    setUserData(JSON.parse(sessionStorage.getItem("user")));
  }, [location.pathname]);

  return (
    <div>
      <NavBar
        isHidden={isHidden}
        user={userData?.user || null}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;

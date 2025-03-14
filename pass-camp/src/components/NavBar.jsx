import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ isHidden }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-white mt-0 py-4 px-20 shadow-md sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <img className="w-40" src="passcamp-logo.png" alt="PassCamp Logo" />
        </Link>

        {/* Navigation */}
        <div className="flex space-x-10 text-xl items-center">
          {!isHidden ? (
            <>
              <Link to="/login" className="text-[#E9A885] hover:text-[#C08A6A]">
                Login
              </Link>
              <Link
                to="/register"
                className="text-[#E9A885] hover:text-[#C08A6A]"
              >
                Register
              </Link>
            </>
          ) : isLoggedIn ? (
            <button className="text-[#E9A885] hover:text-[#C08A6A]">
              👤 User
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

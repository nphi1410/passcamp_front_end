import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ isHidden, user }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      localStorage.removeItem("user");
      axios.get(`${import.meta.env.VITE_API_BASE_URL}/logout`);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <nav className="bg-white mt-0 py-4 px-20 shadow-md sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <img className="w-40" src="passcamp-logo.png" alt="PassCamp Logo" />
        </Link>

        {/* Navigation */}
        <div className="flex space-x-10 text-xl items-center relative">
          {!isHidden &&
            (user === null ? (
              <>
                <Link
                  to="/login"
                  className="text-[#E9A885] hover:text-[#C08A6A]"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-[#E9A885] hover:text-[#C08A6A]"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-[#E9A885] hover:text-[#C08A6A] focus:outline-none"
                >
                  Hello {user?.accountName}
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-lg">
                    <Link
                      to="/account"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Account Info
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

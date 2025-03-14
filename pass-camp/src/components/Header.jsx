import React from "react";

const Header = () => {
  return (
    <header className="flex justify-center items-center text-center w-full h-screen bg-gradient-to-b from-white to-[#FFDAB3] px-6">
      <h1 className="text-6xl font-bold text-gray-800 max-w-[80%]">
        <span className="bg-gradient-to-r from-gray-900 to-[#cf8a62] bg-clip-text text-transparent">
          Find Items You'll Enjoy Without The Hassle
        </span>
      </h1>
    </header>
  );
};

export default Header;

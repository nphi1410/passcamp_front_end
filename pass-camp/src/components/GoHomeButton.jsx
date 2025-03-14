import React from "react";
import { Link } from "react-router-dom";

const GoHomeButton = () => {
  return (
    <Link
      to="/"
      className="px-6 py-3 bg-[#E9A885] text-white rounded-md hover:bg-[#C08A6A] shadow-md transition"
    >
      Go Home
    </Link>
  );
};

export default GoHomeButton;

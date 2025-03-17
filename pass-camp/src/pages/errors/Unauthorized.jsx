import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold text-red-500">Unauthorized Access</h1>
        <p className="mt-4 text-gray-600">
          You do not have permission to view this page.
        </p>
        <button
          onClick={handleRedirect}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;

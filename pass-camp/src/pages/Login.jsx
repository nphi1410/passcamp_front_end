import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", { username, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img className="w-40" src="passcamp-logo.png" alt="Passcamp Logo" />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="username"
              className="w-full p-2 bg-gray-50 rounded-md border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#E9A885] outline-none"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 bg-gray-50 rounded-md border border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#E9A885] outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#E9A885] text-white py-2 rounded-md hover:bg-[#C08A6A] transition"
          >
            Login
          </button>

          {/* Google Login Button */}
          <button className="w-full mt-2 bg-gray-200 text-gray-800 py-2 rounded-md flex justify-center items-center hover:bg-gray-300 transition">
            <FontAwesomeIcon icon={faGoogle} className="w-5 h-5 mr-2" />
            Login with Google
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#E9A885] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/login`,
        { username, password, remember }
      );
      console.log("Login response:", response.data);
      sessionStorage.setItem("role", response.data.role);
      sessionStorage.setItem("loggedInUser", JSON.stringify(response.data.loggedInUser));
      navigate("/");
    } catch (error) {
      console.error(
        "Login failed:",
        error.response?.data?.message || error.message
      );
    }
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
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
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

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <label
              htmlFor="rememberMe"
              className="flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="rememberMe"
                className="peer hidden"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              <div className="w-5 h-5 border-2 border-gray-400 rounded-md flex items-center justify-center transition-colors peer-checked:bg-[#E9A885] peer-checked:border-[#C08A6A]">
                {remember && (
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.086l6.293-6.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <span className="ml-2 text-sm text-gray-700">Remember Me</span>
            </label>
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

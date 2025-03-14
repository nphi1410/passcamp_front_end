import React, { useState } from "react";

const RegisterAccount = ({ form, handleChange, handleNext }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!form.username.trim()) newErrors.username = "Username is required.";
    if (!form.password) newErrors.password = "Password is required.";
    if (!form.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required.";
    if (form.password && form.confirmPassword && form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleNextStep = () => {
    if (validateForm()) {
      handleNext();
    }
  };

  return (
    <form className="space-y-4">
      {/* Username */}
      <div>
        <label className="block text-sm mb-1">Username</label>
        <input
          type="text"
          name="username"
          className="w-full p-2 bg-gray-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E9A885] outline-none"
          placeholder="Enter username"
          value={form.username}
          onChange={handleChange}
        />
        {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm mb-1">Password</label>
        <input
          type="password"
          name="password"
          className="w-full p-2 bg-gray-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E9A885] outline-none"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm mb-1">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          className="w-full p-2 bg-gray-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E9A885] outline-none"
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
        )}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={handleNextStep}
        className="w-full bg-[#E9A885] text-white py-2 rounded-md hover:bg-[#C08A6A] transition"
      >
        Next
      </button>
    </form>
  );
};

export default RegisterAccount;

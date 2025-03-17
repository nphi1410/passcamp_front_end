import React, { useState } from "react";

const RegisterAccount = ({ form, handleChange, handleNext }) => {
  const [errors, setErrors] = useState({});

  const validateConfirmPassword = () => {
    if (form.password !== form.confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match." });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleNextStep = () => {
    if (validateConfirmPassword()) {
      handleNext();
    }
  };

  return (
    <form className="space-y-4">
      {/* Username */}
      <div>
        <label className="block text-sm mb-1">
          Username <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="username"
          className="w-full p-2 bg-gray-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E9A885] outline-none"
          placeholder="Enter username"
          value={form.username}
          onChange={handleChange}
          required // ✅ Browser will check if the field is filled
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm mb-1">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name="password"
          className="w-full p-2 bg-gray-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E9A885] outline-none"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
          required 
        />
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm mb-1">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name="confirmPassword"
          className="w-full p-2 bg-gray-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E9A885] outline-none"
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChange={handleChange}
          required 
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
